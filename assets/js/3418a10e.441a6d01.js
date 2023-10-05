"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},i="Building a RAG application with FastAPI, MongoDB and SuperDuperDB",s={unversionedId:"use_cases/items/qtd",id:"use_cases/items/qtd",title:"Building a RAG application with FastAPI, MongoDB and SuperDuperDB",description:"In this use-case, we'll use FastAPI to serve SuperDuperDB on fly.io using MongoDB as a databackend.",source:"@site/content/use_cases/items/qtd.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/qtd",permalink:"/docs/use_cases/items/qtd",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/qtd.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"OpenAI vector search",permalink:"/docs/use_cases/items/openai"},next:{title:"Ask the docs anything about SuperDuperDB",permalink:"/docs/use_cases/items/question-the-docs"}},p={},l=[{value:"Create the FastAPI app file structure",id:"create-the-fastapi-app-file-structure",level:2},{value:"Add logic for events on startup and shutdown of the app",id:"add-logic-for-events-on-startup-and-shutdown-of-the-app",level:2},{value:"Load the AI models (<code>components</code>) into the MongoDB database",id:"load-the-ai-models-components-into-the-mongodb-database",level:2},{value:"Load the documentation into MongoDB",id:"load-the-documentation-into-mongodb",level:2},{value:"Build the routes",id:"build-the-routes",level:2},{value:"Deploy the app",id:"deploy-the-app",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-a-rag-application-with-fastapi-mongodb-and-superduperdb"},"Building a RAG application with FastAPI, MongoDB and SuperDuperDB"),(0,a.kt)("p",null,"In this use-case, we'll use FastAPI to serve SuperDuperDB on ",(0,a.kt)("a",{parentName:"p",href:"https://fly.io/"},"fly.io")," using MongoDB as a databackend.\nThe task we'll be implementing is a retrieval augmented text-generation (RAG) app for answering\nquestions about a particular trove of documents. Read more ",(0,a.kt)("a",{parentName:"p",href:"/blog/..."},"on our blog"),"."),(0,a.kt)("h2",{id:"create-the-fastapi-app-file-structure"},"Create the FastAPI app file structure"),(0,a.kt)("p",null,"There are many choices here. Please refer to the FastAPI ",(0,a.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/bigger-applications/"},"documentation")," for other possible choices. The structure that we chose looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"backend\n\u251c\u2500\u2500 ai  # RAG app-specific code\n\u2502   \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 documents  # routes for our app\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 models.py  # pydantic models\n\u2502   \u2514\u2500\u2500 routes.py  # AI-enhanced CRUD logic\n\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 app.py  # events that occur at app startup/shutdown\n\u251c\u2500\u2500 config.py\n\u2514\u2500\u2500 main.py\n")),(0,a.kt)("h2",{id:"add-logic-for-events-on-startup-and-shutdown-of-the-app"},"Add logic for events on startup and shutdown of the app"),(0,a.kt)("p",null,"As we are working with a CRUD-like app, we want to establish a connection to the database on app startup. We also want to close this connection on app shutdown. We use FastAPI event handlers to perform this logic. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# app.py\n\nfrom superduperdb import superduper\n\n...\n\n@app.on_event('startup')\ndef startup_db_client():\n    app.mongodb_client = MongoClient(settings.mongo_uri)\n    app.mongodb = _app.mongodb_client[settings.mongo_db_name]\n\n    app.superduperdb = superduper(app.mongodb)\n    ...\n\n@app.on_event('shutdown')\ndef shutdown_db_client():\n    app.mongodb_client.close()\n")),(0,a.kt)("p",null,"It is important that the database connection is wrapped with the ",(0,a.kt)("inlineCode",{parentName:"p"},"superduper")," function. This is how the underlying database driver (",(0,a.kt)("inlineCode",{parentName:"p"},"pymongo")," for our RAG app) becomes 'superduperdb-aware'."),(0,a.kt)("p",null,"Two other events that happen on startup of the application are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"load the AI models (",(0,a.kt)("inlineCode",{parentName:"li"},"components"),") into the MongoDB database"),(0,a.kt)("li",{parentName:"ol"},"load the documentation into the database in a suitable format for vector-similarity search (",(0,a.kt)("inlineCode",{parentName:"li"},"artifacts"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# app.py\n\n...\n\nload_ai_artifacts(app.superduperdb)\ninstall_ai_components(app.superduperdb)\n")),(0,a.kt)("p",null,"See below for more details on both ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts"),"."),(0,a.kt)("p",null,"The final action that we perform on app startup is to initialise our routes. This is a common pattern in FastAPI apps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# app.py\n\nfrom backend.documents.routes import documents_router\n...    \n\n def create_app() -> FastAPI:\n    app = FastAPI(title='Question the Docs')   \n\n    ...\n\n    app.include_router(documents_router)\n")),(0,a.kt)("h2",{id:"load-the-ai-models-components-into-the-mongodb-database"},"Load the AI models (",(0,a.kt)("inlineCode",{parentName:"h2"},"components"),") into the MongoDB database"),(0,a.kt)("p",null,"A RAG app is built from combining an LLM with some means of performing vector-similarity search on real-time data. In our RAG app, we use the OpenAI ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," model as our LLM. This functionality is available out of the box with ",(0,a.kt)("inlineCode",{parentName:"p"},"superduperdb"),". To install this LLM in our app, we add it to our database as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# ai/components.py\n\nfrom superduperdb.ext.openai.model import OpenAIChatCompletion\n\ndef _openai_chatbot():\n    return OpenAIChatCompletion(\n        takes_context=True,\n        prompt=settings.prompt,\n        model=settings.qa_model,\n    )\n\ndef install_ai_components(db):\n    db.add(_openai_chatbot())\n    ...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"db")," is the SuperDuperDB-wrapped database object from ",(0,a.kt)("a",{parentName:"p",href:"#step-2-add-logic-for-events-on-startup-and-shutdown-of-the-app"},"step 2"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," module contains global configuration options for the app, including the version of ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," to use and the prompt template to pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," for conversation."),(0,a.kt)("p",null,"To perform vector-similarity search, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorIndex")," object from SuperDuperDB, in association with embeddings from the OpenAI API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# ai/components.py\n\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.db.mongodb.query import Collection\nfrom superduperdb.ext.openai.model import OpenAIEmbedding\n\ndef _openai_vector_index(src):\n    return VectorIndex(identifier=src, indexing_listener=_open_ai_listener(src))\n\ndef _open_ai_listener(src):\n    return Listener(\n        model=OpenAIEmbedding(model=settings.vector_embedding_model),\n        key=settings.vector_embedding_key,\n        select=Collection(name=src).find(),\n        predict_kwargs={'chunk_size': 100},\n    )\n\ndef install_ai_components(db):\n    for src in settings.documentation_sources:\n        db.add(_openai_vector_index(src))\n    ...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VectorIndex")," is a SuperDuperDB abstraction that is used for adding vector-search functionality. It has support for a range of vector-database options, including ",(0,a.kt)("inlineCode",{parentName:"p"},"lance")," which is a fully-embedded vector database option."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," is another SuperDuperDB abstraction that is used to 'listen' for changes to data in the underlying datastore (in our RAG app, this is ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDB"),"). When changes are detected, it will execute a callback function on the data. In this case, our callback is a call to the OpenAI API to recompute the vector embeddings of the data."),(0,a.kt)("p",null,"The remaining keyword arguments all control the behaviour of our vector-search and 'change-data-capture' functionality. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"chunk_size")," keyword controls how many items to recompute in each batch."),(0,a.kt)("h2",{id:"load-the-documentation-into-mongodb"},"Load the documentation into MongoDB"),(0,a.kt)("p",null,"Before performing vector-similarity searches on pieces of text, we need to first create vector representations of the text. Ideally, we want similar pieces of text to have similar vector representations. "),(0,a.kt)("p",null,"The first part of this challenge involves using a suitable Embedding model. Here, we use the OpenAI ",(0,a.kt)("inlineCode",{parentName:"p"},"text-embedding-ada-002")," model. The second part of the challenge involves deciding on the length of each piece of text to vectorise. For example, for technical documentation we might decide that each paragraph represents a unit of information, and so we should vectorise each paragraph. There is no 'correct' answer here, and it will depend to some extent on the application that is being built. SuperDuperDB supports a range of tools out-of-the-box to help with these tasks such as ",(0,a.kt)("inlineCode",{parentName:"p"},"spacy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"torchvision")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transformers"),"."),(0,a.kt)("p",null,"Once these embeddings have been created, they need to be saved to the database. In our app, this looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# ai/artifacts.py\n\nfrom superduperdb.container.document import Document\nfrom superduperdb.db.mongodb.query import Collection\n\ndef load_ai_artifacts(db):\n    db_artifacts = db.show('vector_index')\n    for src in settings.documentation_sources:\n        if src not in db_artifacts:\n            query = Collection(name=src).insert_many(_docs(src))\n            db.execute(query)\n\ndef _docs(src):\n    ...  # app-specific logic for breaking the documentation into 'units of information'\n    return [Document({key: r['text'], 'src_url': r['src_url']}) for r in rows] \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Document")," is a convenience wrapper around items that we wish to store in our database. Here, we see that each item is a dictionary that consists of two key-value pairs. The first key-value pair represents a piece of text and its vector representation. The second key-value pair represents the location ('URL') of this piece of text in the documentation. Providing sources alongside each answer is a practical strategy for dealing with LLM hallucinations."),(0,a.kt)("p",null,"Finally, we insert all this information into our MongoDB database by 'executing' the ",(0,a.kt)("inlineCode",{parentName:"p"},"insert_many")," command, which should be familiar to MongoDB users."),(0,a.kt)("h2",{id:"build-the-routes"},"Build the routes"),(0,a.kt)("p",null,"Every FastAPI app will consist of a series of endpoints, or routes. In our RAG app we have a single route. This route performs a vector-similarity search on a piece of text, and then submits the results to ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," using a pre-formatted prompt. There are two parts to this route. The first part builds the query. It uses an API that is very similar to the MongoDB query API: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# documents/routes.py\n\nfrom backend.documents.models import Query, Answer\n\nfrom superduperdb.db.mongodb.query import Collection\n\n...\n\ndef query_docs(request: Request, query: Query) -> Answer:\n    collection = Collection(name=query.collection_name)\n    \n    to_find = {settings.vector_embedding_key: query.query}\n    context_select = collection.like(\n        to_find,\n        n=settings.nearest_to_query,\n        vector_index=query.collection_name,\n    ).find()\n    ...\n")),(0,a.kt)("p",null,"The second part executes the query, formats a prompt with the results, and then sends this prompt to ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," for summarization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# documents/routes.py\n\ndef query_docs(request: Request, query: Query) -> Answer:\n    ...\n\n    db = request.app.superduperdb\n    db_response, _ = db.predict(\n        'gpt-3.5-turbo',\n        input=query.query,\n        context_select=context_select,\n        context_key=settings.vector_embedding_key,\n    )\n\n    # Also retrieve information sources in case of LLM 'hallucinatio'\n    src_urls = {c.unpack()['src_url'] for c in db.execute(context_select)}\n    ...\n")),(0,a.kt)("h2",{id:"deploy-the-app"},"Deploy the app"),(0,a.kt)("p",null,"At this point, the backend for our app is ready to be deployed. There are a range of options available here. The option that we chose is ",(0,a.kt)("a",{parentName:"p",href:"https://fly.io/"},"fly.io"),". Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb/tree/main/apps/question-the-docs"},"the application code")," in our main repo to see exactly how everything is configured!"))}u.isMDXComponent=!0}}]);