"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1435],{9338:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var n=s(4848),c=s(8453);const d={sidebar_position:5},i="Vector-searcher service",t={id:"docs/production/vector_comparison_service",title:"Vector-searcher service",description:"The vector-comparison service is a standalone,",source:"@site/content/docs/production/vector_comparison_service.md",sourceDirName:"docs/production",slug:"/docs/production/vector_comparison_service",permalink:"/docs/docs/production/vector_comparison_service",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/production/vector_comparison_service.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Setting up SuperDuperDB as a change-data-capture daemon",permalink:"/docs/docs/production/change_data_capture"},next:{title:"Use cases",permalink:"/docs/category/use-cases"}},h={},o=[{value:"Create searcher",id:"create-searcher",level:3},{value:"List searchers",id:"list-searchers",level:3},{value:"Add vectors to searcher",id:"add-vectors-to-searcher",level:3},{value:"Remove vectors from searcher",id:"remove-vectors-from-searcher",level:3},{value:"Delete searcher",id:"delete-searcher",level:3}];function l(e){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"vector-searcher-service",children:"Vector-searcher service"}),"\n",(0,n.jsxs)(r.p,{children:["The vector-comparison service is a standalone,\n",(0,n.jsx)(r.code,{children:"(id, vector)"})," only, vector-database, which may be\ndeployed to externalize vector-search from the databackend."]}),"\n",(0,n.jsx)(r.p,{children:"Here's how to deploy it:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"superduperdb vector-searcher\n"})}),"\n",(0,n.jsx)(r.p,{children:"Here are the endpoints:"}),"\n",(0,n.jsx)(r.h3,{id:"create-searcher",children:"Create searcher"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": ",(0,n.jsx)(r.code,{children:"POST"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/create"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"}),(0,n.jsx)(r.th,{children:"required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vector_index"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsxs)(r.td,{children:["Name of the corresponding ",(0,n.jsx)(r.code,{children:"VectorIndex"})]}),(0,n.jsx)(r.td,{children:"yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"measure"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Type of measure function to compare vectors"}),(0,n.jsx)(r.td,{children:"yes"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"list-searchers",children:"List searchers"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": ",(0,n.jsx)(r.code,{children:"GET"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/list"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"add-vectors-to-searcher",children:"Add vectors to searcher"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": ",(0,n.jsx)(r.code,{children:"POST"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/add"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"}),(0,n.jsx)(r.th,{children:"required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vector_index"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsxs)(r.td,{children:["Name of the corresponding ",(0,n.jsx)(r.code,{children:"VectorIndex"})]}),(0,n.jsx)(r.td,{children:"yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vectors"})}),(0,n.jsx)(r.td,{children:"JSON"}),(0,n.jsxs)(r.td,{children:["list of ",(0,n.jsx)(r.code,{children:"(id, vector)"})]}),(0,n.jsx)(r.td,{children:"yes"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"remove-vectors-from-searcher",children:"Remove vectors from searcher"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": ",(0,n.jsx)(r.code,{children:"POST"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/remove"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"}),(0,n.jsx)(r.th,{children:"required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vector_index"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsxs)(r.td,{children:["Name of the corresponding ",(0,n.jsx)(r.code,{children:"VectorIndex"})]}),(0,n.jsx)(r.td,{children:"yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vectors"})}),(0,n.jsx)(r.td,{children:"JSON"}),(0,n.jsxs)(r.td,{children:["list of ",(0,n.jsx)(r.code,{children:"id"})]}),(0,n.jsx)(r.td,{children:"yes"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"delete-searcher",children:"Delete searcher"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Method"}),": ",(0,n.jsx)(r.code,{children:"POST"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Endpoint"}),": ",(0,n.jsx)(r.code,{children:"/remove"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"}),(0,n.jsx)(r.th,{children:"required"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"vector_index"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsxs)(r.td,{children:["Name of the corresponding ",(0,n.jsx)(r.code,{children:"VectorIndex"})]}),(0,n.jsx)(r.td,{children:"yes"})]})})]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>t});var n=s(6540);const c={},d=n.createContext(c);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);