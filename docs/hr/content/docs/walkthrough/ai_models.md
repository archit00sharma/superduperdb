---
sidebar_position: 18
---

# AI Models via `Model` and Descendants

AI models may be wrapped and used in `superduperdb` with the `Model` class and descendants.

### Creating AI Models in a Range of Frameworks

Model instances may be saved to `superduperdb` using `db.add`.

### Vanilla

By default, the `Model` component supports arbitrary callables to be used to perform model predictions and transformations:

```python
from superduperdb import Model

def chunk_text(x):
    return x.split('\n\n')

db.add(
    Model(identifier='my-chunker', object=chunk_text)
)
```

### Scikit-Learn

```python
from superduperdb.ext.sklearn import Estimator
from sklearn.svm import SVC

db.add(Estimator(SVC()))
```

### Transformers

```python
from superduperdb.ext.transformers import Pipeline
from superduperdb import superduper

db.add(Pipeline(task='sentiment-analysis'))
```

There is also support for building the pipeline in separate stages with a high degree of customization.
The following is a speech-to-text model published by [facebook research](https://arxiv.org/abs/2010.05171) and shared [on Hugging-Face](https://huggingface.co/facebook/s2t-small-librispeech-asr):

```python
from superduperdb.ext.transformers import Pipeline
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")

transcriber = Pipeline(
    identifier='transcription',
    object=model,
    preprocess=processor,
    preprocess_kwargs={'sampling_rate': SAMPLING_RATE, 'return_tensors': 'pt', 'padding': True}, # Please replace the placeholder `SAMPLING_RATE` with the appropriate value in your context.
    postprocess=lambda x: processor.batch_decode(x, skip_special_tokens=True),
    predict_method='generate',
    preprocess_type='other',
)

db.add(transcriber)
```

### PyTorch

```python
import torch
from superduperdb.ext.torch import Module

model = Module(
    identifier='my-classifier',
    preprocess=lambda x: torch.tensor(x),
    object=torch.nn.Linear(64, 512),
    postprocess=lambda x: x.topk(1)[0].item(),
)

db.add(model)
```

### Important Parameters, Common to All Models
  
| Name | Function |
| --- | --- |
| `identifier` | A unique name for `superduperdb`, for later use and recall |
| `object` | The model-object, including parameters and hyper-parameters providing heavy lifting |
| `preprocess` | `Callable` which processes individual rows/records/fields from the database prior to passing to the model |
| `postprocess` | `Callable` applied to individual rows/items or output |
| `encoder` | An `Encoder` instance applied to the model output to save that output in the database |
| `schema` | A `Schema` instance applied to a model's output, whose rows are dictionaries |
