import json
import typing as t

import magic
from fastapi import File, Response

from superduperdb import CFG, logging
from superduperdb.base.document import Document
from superduperdb.components.component import Component
from superduperdb.components.datatype import DataType
from superduperdb.components.metric import Metric
from superduperdb.components.model import ObjectModel
from superduperdb.components.vector_index import VectorIndex
from superduperdb.ext.sklearn.model import Estimator
from superduperdb.ext.torch.model import TorchModel

# from superduperdb.ext.vllm.model import VllmAPI
from superduperdb.rest.utils import parse_query
from superduperdb.server import app as superduperapp

assert isinstance(
    CFG.cluster.rest.uri, str
), "cluster.rest.uri should be set with a valid uri"
port = int(CFG.cluster.rest.uri.split(':')[-1])

app = superduperapp.SuperDuperApp('rest', port=port)

CLASSES: t.Dict[str, t.Dict[str, t.Any]] = {
    'model': {
        'ObjectModel': ObjectModel,
        'TorchModel': TorchModel,
        'SklearnEstimator': Estimator,
        # 'TransformersTextClassifier': TextClassificationPipeline,
        # 'SentenceTransformer': SentenceTransformer,
        # 'OpenAILLM': OpenAILLM,
        # 'TransformersLLM': LLM,
        # 'VllmLLM': VllmAPI,
    },
    'datatype': {
        # 'numpy-array': array,
        # 'torch-tensor': tensor,
        # 'image': image_type,
        'DataType': DataType,
    },
    # 'trainer': {
    #     'TorchTrainer': TorchTrainer,
    #     'SklearnTrainer': SklearnTrainer,
    #     'TransformersTrainer': TransformersTrainer,
    # },
    'vector-index': {'VectorIndex': VectorIndex},
    # 'schema': {'Schema': Schema},
    # 'table': {'Table': Table},
    'metric': {'Metric': Metric},
}


API_SCHEMAS: t.Dict[str, t.Dict[str, t.Any]] = {}
for type_id in CLASSES:
    API_SCHEMAS[type_id] = {}
    for cls_name in CLASSES[type_id]:
        cls = CLASSES[type_id][cls_name]
        API_SCHEMAS[type_id][cls_name] = cls.get_ui_schema()


logging.info(json.dumps(API_SCHEMAS, indent=2))


def build_app(app: superduperapp.SuperDuperApp):
    """
    Add the key endpoints to the FastAPI app.

    :param app: SuperDuperApp
    """

    @app.add('/spec/show', method='get')
    def show_spec():
        # Get the schemas for all components.
        # route: /spec/show
        # response:
        #     {
        #         "model": {
        #             "ObjectModel": {
        #                 "a": {
        #                     "type": "int",
        #                     "required": true,
        #                     "default": 0
        #                 }
        #             }
        #         },
        #         "datatype": {
        #             "array": {
        #                 "shape": {
        #                     "type": "int",
        #                     "sequence": true,
        #                 }
        #             }
        #         }
        #     }
        return API_SCHEMAS

    @app.add('/spec/model', method='get')
    def model_spec(identifier):
        # route: /spec/model?identifier=test
        # response:
        # [
        #    {"a": {"type": "int", "optional": true, "default": 1}},
        #    {"a": {"type": "json", "default": {"this": "is", "a": "test"}}},
        # ]
        model = app.db.models[identifier]
        return model.predict_schema

    @app.add('/model/predict_one', method='get')
    def predict_one(identifier: str, input: t.Dict):
        # route: /model/predict_one?identifier=test
        # data:
        #     {"a": 1, "b": 2}
        # response:
        #     {"_base": "The capital of France is Paris."}
        input = Document(input).unpack()
        model = app.db.models[identifier]
        output = model.predict_one(**input)
        return Document({'_base': output}).encode()

    @app.add('/db/artifact_store/save_artifact', method='put')
    def create_artifact(datatype: str, raw: bytes = File(...)):
        # route: /db/artifact_store/create_artifact?datatype=image
        # data:
        #     b'...'  (image data)
        # response:
        #     {"file_id": "0123456789abcdef126784a"}
        r = app.db.artifact_store.save_artifact({'bytes': raw, 'datatype': datatype})
        return {'file_id': r['file_id']}

    @app.add('/db/artifact_store/get_artifact', method='get')
    def get_artifact(file_id: str, datatype: t.Optional[str] = None):
        # route: db/artifact_store/get_artifact?
        #        file_id=0123456789abcdef126784a&datatype=image
        # response:
        #     b'...'
        bytes = app.db.artifact_store._load_bytes(file_id=file_id)

        if datatype is not None:
            datatype = app.db.datatypes[datatype]
        if datatype is None or datatype.media_type is None:
            media_type = magic.from_buffer(bytes, mime=True)
        else:
            media_type = datatype.media_type
        return Response(content=bytes, media_type=media_type)

    @app.add('/db/add', method='post')
    def add(info: t.Dict):
        # route: /db/add
        # data:
        #     {
        #       "component": {
        #         "stack/test_stack/0": {
        #           "cls": "Stack",
        #           "module": "superduperdb.components.stack",
        #           "dict": {
        #             "identifier": "test_stack",
        #             "components": [
        #               "$component/model/test/0",
        #               "$component/model/test2/0"
        #             ],
        #             "version": 0
        #           },
        #           "type_id": "stack",
        #           "identifier": "test_stack",
        #           "version": 0,
        #           "hidden": false
        #         },
        #         "model/test/0": {
        #           "cls": "ObjectModel",
        #           "module": "superduperdb.components.model",
        #           "dict": {
        #             "metrics": [],
        #             "valid_X": null,
        #             "validation_sets": [],
        #             "validation_metrics": null,
        #             "identifier": "test",
        #             "signature": "*args,**kwargs",
        #             "datatype": "$component/datatype/numpy.float32[32]/0",
        #             "output_schema": null,
        #             "flatten": false,
        #             "model_update_kwargs": {},
        #             "predict_kwargs": {},
        #             "compute_kwargs": {},
        #             "object": "$lazy_artifact/6376415584",
        #             "num_workers": 0,
        #             "version": 0
        #           },
        #           "type_id": "model",
        #           "identifier": "test",
        #           "version": 0,
        #           "hidden": false
        #         },
        #         "model/test2/0": {
        #           "cls": "ObjectModel",
        #           "module": "superduperdb.components.model",
        #           "dict": {
        #             "metrics": [],
        #             "valid_X": null,
        #             "validation_sets": [],
        #             "validation_metrics": null,
        #             "identifier": "test2",
        #             "signature": "*args,**kwargs",
        #             "datatype": "$component/datatype/numpy.float32[16]/0",
        #             "output_schema": null,
        #             "flatten": false,
        #             "model_update_kwargs": {},
        #             "predict_kwargs": {},
        #             "compute_kwargs": {},
        #             "object": "$lazy_artifact/6376842048",
        #             "num_workers": 0,
        #             "version": 0
        #           },
        #           "type_id": "model",
        #           "identifier": "test2",
        #           "version": 0,
        #           "hidden": false
        #         },
        #         "datatype/numpy.float32[32]/0": {
        #           "cls": "DataType",
        #           "module": "superduperdb.components.datatype",
        #           "dict": {
        #             "identifier": "numpy.float32[32]",
        #             "encoder": "$artifact/6363018640",
        #             "decoder": "$artifact/6363018704",
        #             "info": null,
        #             "shape": [
        #               32
        #             ],
        #             "directory": null,
        #             "encodable": "encodable",
        #             "bytes_encoding": "Bytes",
        #             "media_type": null,
        #             "version": 0
        #           },
        #           "type_id": "datatype",
        #           "identifier": "numpy.float32[32]",
        #           "version": 0,
        #           "hidden": false
        #         },
        #         "datatype/numpy.float32[16]/0": {
        #           "cls": "DataType",
        #           "module": "superduperdb.components.datatype",
        #           "dict": {
        #             "identifier": "numpy.float32[16]",
        #             "encoder": "$artifact/6351650896",
        #             "decoder": "$artifact/6363015312",
        #             "info": null,
        #             "shape": [
        #               16
        #             ],
        #             "directory": null,
        #             "encodable": "encodable",
        #             "bytes_encoding": "Bytes",
        #             "media_type": null,
        #             "version": 0
        #           },
        #           "type_id": "datatype",
        #           "identifier": "numpy.float32[16]",
        #           "version": 0,
        #           "hidden": false
        #         }
        #       },
        #       "lazy_artifact": {
        #         "6376415584": {
        #           "_content": {
        #             "datatype": "dill",
        #             "file_id": "0fd4db08625b17a589a37b38309f66aacba58855"
        #           }
        #         },
        #         "6376842048": {
        #           "_content": {
        #             "datatype": "dill",
        #             "file_id": "40df513ee73c7cefefa2b80ebfd91bc20b3188a0"
        #           }
        #         }
        #       }
        #     }
        # response:
        #     {"status": "ok"}
        component = Component.import_from_references(info, db=app.db)
        app.db.add(component)
        return {'status': 'ok'}

    @app.add('/db/remove', method='post')
    def db_remove(type_id: str, identifier: str):
        # route: /db/remove?type_id=model&identifier=test
        # response:
        #     {"status": "ok"}
        app.db.remove(type_id=type_id, identifier=identifier)
        return {'status': 'ok'}

    @app.add('/db/databackend/list_tables_or_collections', method='get')
    def db_databackend_list_tables_or_collections():
        return app.db.databackend.list_tables_or_collections()

    @app.add('/db/show', method='get')
    def db_show(type_id: t.Optional[str] = None, identifier: t.Optional[str] = None):
        # route: /db/show
        # response:
        #     [
        #         {"type_id": "model": "identifier": "test"},
        #         {"type_id": "model": "identifier": "test2"},
        #         {"type_id": "vector-index": "identifier": "my-index"},
        #         {"type_id": "vector-index": "identifier": "my-other-index"},
        #     ]
        # route: /db/show?type_id=model
        # response:
        #     ["test", "test2"]
        # route: /db/show?type_id=model&identifier=test
        # response:
        #     [0, 1 ,2]
        return app.db.show(type_id=type_id, identifier=identifier)

    @app.add('/db/metadata/show_jobs', method='get')
    def get_jobs(type_id: str, identifier: t.Optional[str] = None):
        # route: /db/metadata/show_jobs?type_id=model&identifier=test
        # response:
        #     ['012060eef', '012060eef', '012060eef', '012060eef']
        return app.db.metadata.show_jobs(type_id=type_id, identifier=identifier)

    @app.add('/db/execute', method='post')
    def execute(
        query: t.List[str],
        documents: t.Optional[t.List[t.Dict]] = None,
        artifacts: t.Optional[t.List[str]] = None,
        skip: int = 0,
        limit: int = 10,
    ):
        # route: /db/execute?query=["docs.find({},{})"]&documents=[]
        # .      &artifacts=[]&skip=0&limit=10
        # response:
        #     [{"a": "Moscow."}, {"a": "Paris."}, {"a": "London."}]
        query = parse_query(query, documents, artifacts)
        result = app.db.execute(query)
        logging.warn(str(query))
        if isinstance(result, Document):
            result = [result]
        elif result is None:
            result = []
        else:
            result = list(result)
        out = [r.encode() for r in result]
        logging.warn(str(out))
        for r in out:
            del r['_id']
        return out


build_app(app)
