webpackJsonp([99,135],{735:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=t(1),p=(s(e),t(2));s(p);n.exports={content:["section",["p","\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u5bf9\u4e00\u7ec4\u5143\u7d20\u6dfb\u52a0\u4e32\u884c\u7684\u8fdb\u573a\u52a8\u753b\u6548\u679c\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u4ece\u5185\u5bb9A\u5230\u5185\u5bb9B\u7684\u8f6c\u53d8\u8fc7\u7a0b\u65f6\u80fd\u6709\u6548\u7684\u5438\u5f15\u7528\u6237\u6ce8\u610f\u529b\uff0c\u7a81\u51fa\u89c6\u89c9\u4e2d\u5fc3\uff0c\u63d0\u9ad8\u6574\u4f53\u89c6\u89c9\u6548\u679c\u3002"]],["li",["p","\u5c0f\u7684\u4fe1\u606f\u5143\u7d20\u6392\u5e03\u6216\u5757\u72b6\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u6839\u636e\u4e00\u5b9a\u7684\u8def\u5f84\u5c42\u6b21\u4f9d\u6b21\u8fdb\u573a\uff0c\u533a\u5206\u7ef4\u5ea6\u5c42\u7ea7\uff0c\u6765\u51f8\u663e\u91cf\u7ea7\uff0c\u4f7f\u9875\u9762\u8f6c\u573a\u66f4\u52a0\u6d41\u7545\u548c\u8212\u9002\uff0c\u63d0\u9ad8\u6574\u4f53\u89c6\u89c9\u6548\u679c\u548c\u4ea7\u54c1\u7684\u8d28\u611f\u3002"]],["li",["p","\u7279\u522b\u9002\u5408\u9996\u9875\u548c\u9700\u8981\u89c6\u89c9\u5c55\u793a\u6548\u679c\u7684\u5ba3\u4f20\u9875\uff0c\u4ee5\u53ca\u5355\u9875\u5e94\u7528\u7684\u5207\u6362\u9875\u9762\u52a8\u6548\u3002"]]]],meta:{category:"Components",chinese:"\u8fdb\u51fa\u573a\u52a8\u753b",type:"Other",english:"QueueAnim",filename:"components/queue-anim/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["blockquote",["p","\u6b64\u7ec4\u4ef6 ",["code","antd@1.0.0+"]," \u540e\u6807\u8bb0\u4e3a\u5e9f\u5f03\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",["code","import QueueAnim from 'rc-queue-anim'"]," \u6765\u4ee3\u66ff\uff0c\u76f8\u5173\u6587\u6863\u4e5f\u5df2\u79fb\u5230 ",["a",{title:null,href:"http://motion.ant.design/components/queue-anim"},"ant-motioin"],"\u3002"],["p",["a",{title:null,href:"http://motion.ant.design/"},"ant-motioin"]," \u662f\u4e00\u4e2a\u52a8\u6548\u8bbe\u8ba1\u8bed\u8a00\uff0c\u6b22\u8fce\u5173\u6ce8\u3002"]],["p","\u5143\u7d20\u4f9d\u6b21\u8fdb\u573a\u3002"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QueueAnim</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>demo1<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\u4f9d\u6b21\u8fdb\u573a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>demo2<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\u4f9d\u6b21\u8fdb\u573a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>demo3<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\u4f9d\u6b21\u8fdb\u573a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>demo4<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\u4f9d\u6b21\u8fdb\u573a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>QueueAnim</span><span class="token punctuation">></span></span>'},["code","<QueueAnim>\n  <div key='demo1'>\u4f9d\u6b21\u8fdb\u573a</div>\n  <div key='demo2'>\u4f9d\u6b21\u8fdb\u573a</div>\n  <div key='demo3'>\u4f9d\u6b21\u8fdb\u573a</div>\n  <div key='demo4'>\u4f9d\u6b21\u8fdb\u573a</div>\n</QueueAnim>"]],["blockquote",["p","\u6bcf\u4e2a\u5b50\u6807\u7b7e\u5fc5\u987b\u5e26 key\uff0c\u5982\u679c\u672a\u8bbe\u7f6e key \u5c06\u4e0d\u6267\u884c\u52a8\u753b\u3002"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4"],["th","\u8be6\u7ec6"]]],["tbody",["tr",["td","type"],["td","string / array"],["td",["code","right"]],["td","\u52a8\u753b\u5185\u7f6e\u53c2\u6570 ",["br"]," ",["code","left"]," ",["code","right"]," ",["code","top"]," ",["code","bottom"]," ",["code","scale"]," ",["code","scaleBig"]," ",["code","scaleX"]," ",["code","scaleY"]]],["tr",["td","animConfig"],["td","object / array"],["td","null"],["td","\u914d\u7f6e\u52a8\u753b\u53c2\u6570 ",["br"]," \u5982 ",["code","{opacity:[1, 0],translateY:[0, -30]}"]," \u5177\u4f53\u53c2\u8003 ",["a",{title:null,href:"http://julian.com/research/velocity"},"velocity"]," \u7684\u5199\u6cd5"]],["tr",["td","delay"],["td","number / array"],["td","0"],["td","\u6574\u4e2a\u52a8\u753b\u7684\u5ef6\u65f6,\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d"]],["tr",["td","duration"],["td","number / array"],["td","500"],["td","\u6bcf\u4e2a\u52a8\u753b\u7684\u65f6\u95f4,\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d"]],["tr",["td","interval"],["td","number / array"],["td","100"],["td","\u6bcf\u4e2a\u52a8\u753b\u7684\u95f4\u9694\u65f6\u95f4,\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d"]],["tr",["td","leaveReverse"],["td","boolean"],["td","false"],["td","\u51fa\u573a\u65f6\u662f\u5426\u5012\u653e,\u4ece\u6700\u540e\u4e00\u4e2a dom \u5f00\u59cb\u5f80\u4e0a\u64ad\u653e"]],["tr",["td","ease"],["td","string / array"],["td",["code","easeOutQuart"]],["td","\u52a8\u753b\u7684\u7f13\u52a8\u51fd\u6570,",["a",{title:null,href:"http://julian.com/research/velocity/#easing"},"\u67e5\u770b\u8be6\u7ec6"]]],["tr",["td","animatingClassName"],["td","array"],["td",["code","['queue-anim-entering', 'queue-anim-leaving']"]],["td","\u8fdb\u51fa\u573a\u52a8\u753b\u8fdb\u884c\u4e2d\u7684\u7c7b\u540d"]],["tr",["td","component"],["td","string"],["td",["code","div"]],["td","QueueAnim \u66ff\u6362\u7684\u6807\u7b7e\u540d"]]]],["blockquote",["p","\u5f53\u4ee5\u4e0a\u6570\u636e\u7c7b\u578b\u4e3a Array \u65f6\uff0c",["code","['left', 'top']"]," \u7b2c\u4e00\u4e2a\u4e3a\u8fdb\u573a\u52a8\u753b\u5c5e\u6027, \u7b2c\u4e8c\u4e2a\u4e3a\u79bb\u573a\u5c5e\u6027\u3002"]]]}}});