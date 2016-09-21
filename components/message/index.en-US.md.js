webpackJsonp([148,196],{844:function(t,n,e){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var a=e(1),o=(s(a),e(2));s(o);t.exports={content:["section",["p","Display global messages as feedbacks to user operations."],["h2","When To Use"],["ul",["li",["p","To provide feedbacks such as success, warning, error etc."]],["li",["p","A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."]]]],meta:{category:"Components",type:"Views",noinstant:!0,title:"Message",filename:"components/message/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","message.success(content, duration)"]]],["li",["p",["code","message.error(content, duration)"]]],["li",["p",["code","message.info(content, duration)"]]],["li",["p",["code","message.warning(content, duration)"]]],["li",["p",["code","message.warn(content, duration)"]]],["li",["p",["code","message.loading(content, duration)"]]]],["p","This components provides 4 static methods, with arguments as following:"],["table",["thead",["tr",["th","Argument"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","content"],["td","content of the message"],["td","React.Element or String"],["td","-"]],["tr",["td","duration"],["td","time before auto-dismiss,in seconds"],["td","number"],["td","1.5"]]]],["p","Methods for global configuration and destruction are also provided:"],["ul",["li",["p",["code","message.config(options)"]]],["li",["p",["code","message.destroy()"]]]],["pre",{lang:"js",highlighted:'message<span class="token punctuation" >.</span><span class="token function" >config</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  top<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n  duration<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","message.config({\n  top: 100,\n  duration: 2,\n});"]],["table",["thead",["tr",["th","Argument"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","top"],["td","distance to top"],["td","Number"],["td","24px"]],["tr",["td","duration"],["td","time before auto-dismiss,in seconds"],["td","Number"],["td","1.5"]]]]]}}});