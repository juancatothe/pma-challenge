(this["webpackJsonpreact-task-app"]=this["webpackJsonpreact-task-app"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(24),o=a.n(s),i=(a(56),a(23)),c=a(11),p=a(12),l=a(18),h=a(13),u=a(17),d=(a(45),a(20)),m=a.n(d),k=a(47),b=a.n(k),v=a(48);a.n(v)()(m.a);var O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{constructorType:"ganttChart",ref:this.chartComponent,highcharts:m.a,options:this.props.chartOptions})}}]),t}(r.a.Component),f=a(19),y=a(42),g=a.n(y);a(103);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleStartChange=a.handleStartChange.bind(Object(f.a)(a)),a.handleEndChange=a.handleEndChange.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget.value,a=e.currentTarget.name,n=D({},this.props.activeTask,Object(i.a)({},a,t));this.props.updateTask(this.props.activeTask.position,n)}},{key:"handleStartChange",value:function(e){var t=e;t=Date.parse(t);var a=D({},this.props.activeTask,{start:t});this.props.updateTask(this.props.activeTask.position,a)}},{key:"handleEndChange",value:function(e){var t=e;t=Date.parse(t);var a=D({},this.props.activeTask,{end:t});this.props.updateTask(this.props.activeTask.position,a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-container"},r.a.createElement("span",{onClick:this.props.hideInput},"Close"),r.a.createElement("h2",null,"Update Tasks"),r.a.createElement("form",{className:"input-form"},r.a.createElement("label",null,"Task Name:",r.a.createElement("input",{type:"text",name:"name",value:this.props.activeTask.name,onChange:this.handleChange})),r.a.createElement("label",null,"Task Start Date:",r.a.createElement(g.a,{onChange:this.handleStartChange,selected:this.props.activeTask.start,name:"start",dateFormat:"MM/dd/yyyy"})),r.a.createElement("label",null,"Task End Date:",r.a.createElement(g.a,{onChange:this.handleEndChange,selected:this.props.activeTask.end,name:"end",dateFormat:"MM/dd/yyyy"})),r.a.createElement("label",null,"Task Color:",r.a.createElement("input",{type:"color",name:"color",value:this.props.activeTask.color,onChange:this.handleChange}))))}}]),t}(r.a.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).showInput=function(e){a.setState({inputDisplay:!0,activeTask:{id:e.point.options.id,name:e.point.options.name,start:e.point.options.start,end:e.point.options.end,color:e.point.options.color,position:e.point.options.position,rank:e.point.options.rank}})},a.hideInput=function(){a.setState({inputDisplay:!1})},a.updateTask=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.options);console.log(n),n.series[0].data[e]=t,a.setState({options:n,activeTask:{id:n.series[0].data[e].id,name:n.series[0].data[e].name,start:n.series[0].data[e].start,end:n.series[0].data[e].end,color:n.series[0].data[e].color,position:n.series[0].data[e].position,rank:n.series[0].data[e].rank}})},a.state={options:{title:{text:"Very Important Companywide Tasklist"},xAxis:{type:"datetime"},series:[{data:[{id:"task1",name:"Shred Classified Documents",start:Date.parse("01/17/2020"),end:Date.parse("02/14/2020"),color:"#4682B4",position:0,rank:0},{id:"task2",name:"Change Tires on Vehicle Fleet",start:Date.parse("01/31/2020"),end:Date.parse("03/17/2020"),color:"#D8BFD8",position:1,rank:1},{id:"task3",name:"Export Data to Excel Spreadsheet",start:Date.parse("03/31/2020"),end:Date.parse("04/17/2020"),color:"#FFE4B5",position:2,rank:2},{id:"task4",name:"Purchase 8000 Reams of Printer Paper",start:Date.parse("04/18/2020"),end:Date.parse("05/19/2020"),color:"#FF6347",position:3,rank:3},{id:"task5",name:"Interview Prospective Candidates",start:Date.parse("05/31/2020"),end:Date.parse("06/21/2020"),color:"#FF1493",position:4,rank:4},{id:"task6",name:"Clone Github Repositories",start:Date.parse("07/31/2020"),end:Date.parse("08/19/2020"),color:"#7FFF00",position:5,rank:5}],events:{click:function(e){a.showInput(e)}}}]},inputDisplay:!1,activeTask:{}},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(O,{chartOptions:this.state.options})),this.state.inputDisplay?r.a.createElement(E,{hideInput:this.hideInput,updateTask:this.updateTask,activeTask:this.state.activeTask}):null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){},51:function(e,t,a){e.exports=a(105)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.d43b6808.chunk.js.map