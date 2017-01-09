webpackJsonp([24,135],{540:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u9002\u7528\u4e8e\u7b80\u77ed\u7684\u8b66\u544a\u63d0\u793a\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/alert/demo/basic.md",id:"components-alert-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",type:"success"})}}},541:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u5173\u95ed\u8b66\u544a\u63d0\u793a\u3002"]],meta:{order:2,title:"\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a",filename:"components/alert/demo/closable.md",id:"components-alert-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> onClose <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">\'\u6211\u8981\u88ab\u5173\u95ed\u5566\uff01\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>\n    <span class="token attr-name">closable</span>\n    <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n    <span class="token attr-name">closable</span>\n    <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=function(n){console.log(n,"\u6211\u8981\u88ab\u5173\u95ed\u5566\uff01")};return c["default"].createElement("div",null,c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",type:"warning",closable:!0,onClose:n}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",description:"\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"error",closable:!0,onClose:n}))}}},542:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5173\u95ed\uff0c\u81ea\u5b9a\u4e49\u7684\u6587\u5b57\u4f1a\u66ff\u6362\u539f\u5148\u7684\u5173\u95ed ",["code","Icon"],"\u3002"]],meta:{order:5,title:"\u81ea\u5b9a\u4e49\u5173\u95ed",filename:"components/alert/demo/close-text.md",id:"components-alert-demo-close-text"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">closeText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0d\u518d\u63d0\u9192<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",type:"info",closeText:"\u4e0d\u518d\u63d0\u9192"})}}},543:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u7684\u8b66\u544a\u63d0\u793a\u3002"]],meta:{order:3,title:"\u542b\u6709\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",filename:"components/alert/demo/description.md",id:"components-alert-demo-description"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",description:"\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"success"}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info"}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",description:"\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"warning"}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",description:"\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"error"}))}}},544:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u53ef\u53e3\u7684\u56fe\u6807\u8ba9\u4fe1\u606f\u7c7b\u578b\u66f4\u52a0\u9192\u76ee\u3002"]],meta:{order:4,title:"\u56fe\u6807",filename:"components/alert/demo/icon.md",id:"components-alert-demo-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">showIcon</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">showIcon</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">showIcon</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">showIcon</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>\n    <span class="token attr-name">showIcon</span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n    <span class="token attr-name">showIcon</span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>\n    <span class="token attr-name">showIcon</span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span>\n    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n    <span class="token attr-name">showIcon</span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",type:"success",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",type:"info",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",type:"warning",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",type:"error",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",description:"\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"success",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",description:"\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"warning",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",description:"\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"error",showIcon:!0}))}}},545:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u5171\u6709\u56db\u79cd\u6837\u5f0f ",["code","success"],"\u3001",["code","info"],"\u3001",["code","warning"],"\u3001",["code","error"],"\u3002"]],meta:{order:1,title:"\u56db\u79cd\u6837\u5f0f",filename:"components/alert/demo/style.md",id:"components-alert-demo-style"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",type:"success"}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",type:"info"}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",type:"warning"}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",type:"error"}))}}},984:function(n,a,s){n.exports={basic:s(540),closable:s(541),"close-text":s(542),description:s(543),icon:s(544),style:s(545)}}});