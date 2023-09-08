"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6886],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={},i="Sentiment analysis with transformers",o={unversionedId:"use_cases/sentiment_analysis_use_case",id:"use_cases/sentiment_analysis_use_case",title:"Sentiment analysis with transformers",description:"In this notebook we implement a classic NLP use-case using Hugging Face's transformers library.",source:"@site/content/use_cases/sentiment_analysis_use_case.md",sourceDirName:"use_cases",slug:"/use_cases/sentiment_analysis_use_case",permalink:"/docs/use_cases/sentiment_analysis_use_case",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/use_cases/sentiment_analysis_use_case.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Creating a DB of image features in torchvision",permalink:"/docs/use_cases/resnet_features"},next:{title:"Transfer learning using Sentence Transformers and Scikit-Learn",permalink:"/docs/use_cases/transfer_learning"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sentiment-analysis-with-transformers"},"Sentiment analysis with transformers"),(0,a.kt)("p",null,"In this notebook we implement a classic NLP use-case using Hugging Face's ",(0,a.kt)("inlineCode",{parentName:"p"},"transformers")," library.\nWe show that this use-case may be implementing directly in the SuperDuperDB ",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer")," using MongoDB as the\ndata-backend. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install datasets\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from datasets import load_dataset, load_metric\nimport numpy\nimport pymongo\nfrom transformers import AutoTokenizer, AutoModelForSequenceClassification\n\nimport superduperdb\nfrom superduperdb.misc.superduper import superduper\nfrom superduperdb.container.document import Document as D\nfrom superduperdb.db.mongodb.query import Collection\nfrom superduperdb.ext.transformers.model import TransformersTrainerConfiguration, Pipeline\nfrom superduperdb.container.dataset import Dataset\n")),(0,a.kt)("p",null,'SuperDuperDB supports MongoDB as a databackend.\nCorrespondingly, we\'ll import the python MongoDB client pymongo and "wrap" our database to convert it\nto a SuperDuper Datalayer:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db = pymongo.MongoClient().documents\ndb = superduper(db)\ncollection = Collection('imdb')\n")),(0,a.kt)("p",null,"We use the IMDB dataset for training the model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data = load_dataset(\"imdb\")\n\ndb.execute(collection.insert_many([\n    D({'_fold': 'train', **data['train'][int(i)]}) for i in numpy.random.permutation(len(data['train']))[:4]\n]))\n\ndb.execute(collection.insert_many([\n    D({'_fold': 'valid', **data['test'][int(i)]}) for i in numpy.random.permutation(len(data['test']))[:4]\n]))\n")),(0,a.kt)("p",null,"Check a sample from the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(collection.find_one())\nr\n")),(0,a.kt)("p",null,"Create a tokenizer and use it to provide a data-collator for batching inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"tokenizer = AutoTokenizer.from_pretrained(\"distilbert-base-uncased\")\nmodel = AutoModelForSequenceClassification.from_pretrained(\"distilbert-base-uncased\", num_labels=2)\nmodel = Pipeline(\n    identifier='my-sentiment-analysis',\n    task='text-classification',\n    preprocess=tokenizer,\n    object=model,\n    preprocess_kwargs={'truncation': True},\n)\n")),(0,a.kt)("p",null,"We'll evaluate the model using a simple accuracy metric. This metric gets logged in the\nmodel's metadata during training:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"training_args = TransformersTrainerConfiguration(\n    identifier='sentiment-analysis',\n    output_dir='sentiment-analysis',\n    learning_rate=2e-5,\n    per_device_train_batch_size=2,\n    per_device_eval_batch_size=2,\n    num_train_epochs=2,\n    weight_decay=0.01,\n    save_strategy=\"epoch\",\n    use_mps_device=False,\n    evaluation_strategy='epoch',\n    do_eval=True,\n)\n")),(0,a.kt)("p",null,"Now we're ready to train the model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.metric import Metric\n\nmodel.fit(\n    X='text',\n    y='label',\n    db=db,\n    select=collection.find(),\n    configuration=training_args,\n    validation_sets=[\n        Dataset(\n            identifier='my-eval',\n            select=collection.find({'_fold': 'valid'}),\n        )\n    ],\n    data_prefetch=False,\n    metrics=[Metric(\n        identifier='acc',\n        object=lambda x, y: sum([xx == yy for xx, yy in zip(x, y)]) / len(x)\n    )]\n)                                                                            \n")),(0,a.kt)("p",null,"We can verify that the model gives us reasonable predictions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'model.predict("This movie sucks!", one=True)\n')))}m.isMDXComponent=!0}}]);