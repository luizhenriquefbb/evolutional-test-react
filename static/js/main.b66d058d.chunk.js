(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),o=a.n(r),l=(a(90),a(91),a(92),a(93),a(25)),i=a(23),d=a(9),c=a(10),u=a(13),m=a(11),p=a(12),h=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:""},s.a.createElement("h1",null,"P\xe1gina n\xe3o encontrada"))}}]),t}(n.Component),f=a(21),E=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bg-header"},s.a.createElement("header",{className:"header-main container"},s.a.createElement(l.b,{to:"/",className:"logo",title:"Evolucional"},s.a.createElement("img",{alt:"Evolucional",src:"http://www.evolucional.com.br/Public/images/logo-evolucional.png"})),s.a.createElement("span",{className:"btn-menu"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("nav",{className:"menu"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/",title:"Home"},"HOME")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/students",title:""},"Estudantes")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/teachers",title:""},"Professores"))))))}}]),t}(n.Component),g=a(22),v=a(4),b=a.n(v);var I=a(16),y=a(26),O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={studentToEdit:a.props.studentToEdit},window.editStudentPopUp=Object(f.a)(a),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"closePopUp",value:function(){b()("#editStudent").hide(500)}},{key:"getClassesOfADegree",value:function(e){var t=this.props.classes,a=this.props.relations.map(function(e){return e.degrees}),n=(a=[].concat.apply([],a)).filter(function(t){return t.degreeId===e}).map(function(e){return e.classes});return n=[].concat.apply([],n),t.filter(function(e){return n.find(function(t){return t.hasOwnProperty("classPosition")?t.id=t.classPosition:t.id=t.classId,t.id===e.id})})}},{key:"updateForm",value:function(e,t){"name"===t?this.setState(Object(I.a)({},this.state,{studentToEdit:Object(I.a)({},this.state.studentToEdit,{name:e.target.value})})):"degree"===t?this.setState(Object(I.a)({},this.state,{studentToEdit:Object(I.a)({},this.state.studentToEdit,{degreeId:parseInt(e.target.value,0)})})):"class"===t&&this.setState(Object(I.a)({},this.state,{studentToEdit:Object(I.a)({},this.state.studentToEdit,{classId:parseInt(e.target.value,0)})}))}},{key:"updateStateFromProps",value:function(){(!this.state.studentToEdit||this.state.studentToEdit&&this.state.studentToEdit.id!==this.props.studentToEdit.id)&&(this.state=Object(I.a)({},this.state,{studentToEdit:this.props.studentToEdit}))}},{key:"applyChange",value:function(e){var t,a,n,s;e.preventDefault(),this.props.dispatch((t=this.state.studentToEdit.id,a=this.state.studentToEdit.name,n=this.state.studentToEdit.classId,s=this.state.studentToEdit.degreeId,{type:"EDIT_ONE_STUDENT",studentId:t,name:a,classId:n,degreeId:s})),this.closePopUp()}},{key:"render",value:function(){var e=this;return this.props.studentToEdit?(this.updateStateFromProps(),s.a.createElement("div",{className:""},s.a.createElement("div",{className:"hover_bkgr_fricc",id:"editStudent"},s.a.createElement("span",{className:"helper"}),s.a.createElement("div",null,s.a.createElement("div",{onClick:function(){return e.closePopUp()},className:"popupCloseButton"},"X"),s.a.createElement("form",null,s.a.createElement("input",{type:"text",value:this.state.studentToEdit.name,onChange:function(t){return e.updateForm(t,"name")}}),s.a.createElement(y.Select,{value:this.state.studentToEdit.degreeId.toString(),onChange:function(t){return e.updateForm(t,"degree")}},s.a.createElement("option",{value:"",disabled:!0}," Escolha um Grau "),this.props.degrees.map(function(e){return s.a.createElement("option",{value:e.id,key:e.id}," ",e.name," ")})),s.a.createElement(y.Select,{value:this.state.studentToEdit.classId.toString(),onChange:function(t){return e.updateForm(t,"class")}},s.a.createElement("option",{value:"",disabled:!0}," Escolha uma classe "),this.getClassesOfADegree(this.state.studentToEdit.degreeId).map(function(e){return s.a.createElement("option",{value:e.id,key:e.id}," ",e.name," ")})),s.a.createElement(y.Button,{onClick:function(t){return e.applyChange(t)}},"Aplicar")))))):s.a.createElement("div",null)}}]),t}(n.Component);var C=Object(g.b)(function(e){return{classes:e.classesReducer.classes.classes,degrees:e.degreesReducer.degrees,relations:e.relationsReducer.relationships}})(O),N=a(79),w=function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),window.studentChart=Object(f.a)(a),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"closePopUp",value:function(){b()("#studentChart").hide(500)}},{key:"countStudentsInClass",value:function(e){var t={},a=!0,n=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var l=r.value;t.hasOwnProperty(l.degreeId)?t[l.degreeId]=t[l.degreeId]+1:t[l.degreeId]=1}}catch(f){n=!0,s=f}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}var i=[],d=!0,c=!1,u=void 0;try{for(var m,p=this.props.degrees.map(function(e){return e.id})[Symbol.iterator]();!(d=(m=p.next()).done);d=!0){var h=m.value;i.push(isNaN(t[h])?0:t[h])}}catch(f){c=!0,u=f}finally{try{d||null==p.return||p.return()}finally{if(c)throw u}}return i}},{key:"getRandomColors",value:function(e){for(var t=[],a=0;a<e;a++){var n=Math.floor(255*Math.random()).toString(),s=Math.floor(255*Math.random()).toString(),r=Math.floor(255*Math.random()).toString();t.push({background:"rgba("+n+", "+s+", "+r+", 0.5)",border:"rgba("+n+", "+s+", "+r+", 1)"})}return t}},{key:"buildDataInFormatOfChartJS",value:function(){var e=this.getRandomColors(this.props.degrees.length);return{labels:this.props.degrees.map(function(e){return e.name}),datasets:[{label:"Estudantes por Classe",data:this.countStudentsInClass(this.props.students),backgroundColor:e.map(function(e){return e.background}),borderColor:e.map(function(e){return e.border}),borderWidth:1}]}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:""},s.a.createElement("div",{className:"hover_bkgr_fricc",id:"studentChart"},s.a.createElement("span",{className:"helper"}),s.a.createElement("div",null,s.a.createElement("div",{onClick:function(){return e.closePopUp()},className:"popupCloseButton"},"X"),s.a.createElement(N.a,{data:this.buildDataInFormatOfChartJS(),options:{maintainAspectRatio:!0}}))))}}]),t}(n.Component);var T=Object(g.b)(function(e){return{students:e.studentReducer.students,degrees:e.degreesReducer.degrees}})(w);window.$=b.a;var j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={studentToEdit:a.props.students[0]},window.students=Object(f.a)(a),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getClassById",value:function(e){return this.props.classes.find(function(t){return t.id===e})}},{key:"getDegreeById",value:function(e){return this.props.degrees.find(function(t){return t.id===e})}},{key:"applyFilter",value:function(e){e.preventDefault();var t=b()("form.filters-wrapper").find("input#studentNameFilter").val().toLowerCase(),a=b()("form.filters-wrapper").find("input#studentDegreeFilter").val().toLowerCase(),n=b()("form.filters-wrapper").find("input#studentClassFilter").val().toLowerCase(),s=b()("table#studentTable").find("tbody");t&&s.find("tr:visible").each(function(e,a){b()(a).find("td.studentName").text().toLowerCase().includes(t)?b()(a).show():b()(a).hide()}),a&&s.find("tr:visible").each(function(e,t){b()(t).find("td.studentDegree").text().toLowerCase().includes(a)?b()(t).show():b()(t).hide()}),n&&s.find("tr:visible").each(function(e,t){b()(t).find("td.studentClass").text().toLowerCase().includes(n)?b()(t).show():b()(t).hide()}),t||a||n||s.find("tr").show()}},{key:"createMoreStudents",value:function(){var e,t,a;this.props.dispatch((e=this.props.degrees,t=this.props.relations,a=this.props.classes,{type:"CREATE_MORE_STUDENTS",allDegrees:e,allRelations:t,allClasses:a}))}},{key:"editOneStudent",value:function(e){b()("#editStudent").show(500),this.setState({studentToEdit:e})}},{key:"showChart",value:function(){b()("#studentChart").show(500)}},{key:"render",value:function(){var e=this,t=this.props.students;return s.a.createElement("div",{className:""},s.a.createElement(E,null),s.a.createElement("div",{className:"body"},s.a.createElement("h1",null,"Estudantes"),s.a.createElement("form",{className:"filters-wrapper",onSubmit:function(t){e.applyFilter(t)}},s.a.createElement("input",{type:"text",placeholder:"Nome do Aluno",id:"studentNameFilter",onChange:function(t){return e.applyFilter(t)}}),s.a.createElement("input",{type:"text",placeholder:"Gradua\xe7\xe3o do Aluno",id:"studentDegreeFilter",onChange:function(t){return e.applyFilter(t)}}),s.a.createElement("input",{type:"text",placeholder:"Classe do Aluno",id:"studentClassFilter",onChange:function(t){return e.applyFilter(t)}})),s.a.createElement("div",{style:{margin:"19px 0"},className:"spaceElements"},s.a.createElement(y.Button,{onClick:function(){return e.createMoreStudents()}}," Gerar mais estudantes "),s.a.createElement(y.Button,{onClick:function(){return e.showChart()}}," Mostrar Gr\xe1fico ")),s.a.createElement("table",{className:"highlight",id:"studentTable"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Nome"),s.a.createElement("th",null,"Grau"),s.a.createElement("th",null,"Classe"),s.a.createElement("th",null,"Editar"))),s.a.createElement("tbody",null,t.map(function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",{className:"studentName"},t.name),s.a.createElement("td",{className:"studentDegree"},e.getDegreeById(t.degreeId).name),s.a.createElement("td",{className:"studentClass"},e.getClassById(t.classId).name),s.a.createElement("td",{className:"StudentEdit",onClick:function(){return e.editOneStudent(t)}},s.a.createElement("i",{style:{fontSize:"23px"},className:"fa"},"\uf044")))})))),s.a.createElement(C,{studentToEdit:this.state.studentToEdit,getClassById:this.getClassById,getDegreeById:this.getDegreeById}),s.a.createElement(T,null))}}]),t}(n.Component);var S=Object(g.b)(function(e){return{students:e.studentReducer.students,classes:e.classesReducer.classes.classes,degrees:e.degreesReducer.degrees,relations:e.relationsReducer.relationships}})(j),k=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bg-header"},s.a.createElement(E,null),s.a.createElement("div",{className:"body"},s.a.createElement("h1",null,"Teachers")))}}]),t}(n.Component),D=a(27),P={students:a(81)};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if(!t)return console.log("No action"),e;if("CREATE_MORE_STUDENTS"===t.type){console.log("CREATE_MORE_STUDENTS");for(var a=t.allDegrees,n=t.allRelations,s=t.allClasses,r=JSON.parse(JSON.stringify(e)),o=Math.max.apply(Math,e.students.map(function(e){return e.id})),l=o+1;l<o+300;l++)try{!function(){var e=a[Math.floor(Math.random()*a.length)],t=n.map(function(e){return e.degrees}),o=(t=[].concat.apply([],t)).filter(function(t){return t.degreeId===e.id}),i=o[Math.floor(Math.random()*o.length)],d=i.classes[Math.floor(Math.random()*i.classes.length)],c=s.find(function(e){return d.hasOwnProperty("classPosition")?e.id===d.classPosition:e.id===d.classId});r.students.push({id:l,ra:l,name:"Nome do aluno "+l,degreeId:e.id,classId:c.id})}()}catch(f){console.warn("Some error with the data. Total of students until now: "+r.students.length),l-=1}return r}if("EDIT_ONE_STUDENT"===t.type){console.log("EDIT_ONE_STUDENT");var i,d=JSON.parse(JSON.stringify(e)),c=t.studentId,u=t.name,m=t.classId,p=t.degreeId,h=d.students.find(function(e,t){return e.id===c&&(i=t,!0)});return h=Object(I.a)({},h,{name:u,classId:m,degreeId:p}),d.students[i]=h,d}return e},F={relationships:a(82)};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return(arguments.length>1?arguments[1]:void 0)?e:(console.log("No action"),e)},x={classes:a(83)};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t?(t.type,e):(console.log("No action"),e)},_={degrees:a(84)};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t?(t.type,e):(console.log("No action"),e)},A=Object(D.b)({studentReducer:R,relationsReducer:M,classesReducer:B,degreesReducer:U}),J=Object(D.c)(A);var L=function(){return window.rootStore=J,s.a.createElement(l.a,{basename:"/evolutional-test-react"},s.a.createElement(g.a,{store:J},s.a.createElement(i.b,{path:"/"},s.a.createElement(i.d,null,s.a.createElement(i.b,{path:"/",exact:!0,render:function(){return s.a.createElement(i.a,{to:"/students"})}}),s.a.createElement(i.b,{path:"/students",exact:!0,component:S}),s.a.createElement(i.b,{path:"/teachers",exact:!0,component:k}),s.a.createElement(i.b,{component:h})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e){e.exports=[{id:1,ra:12346,name:"Nome do aluno 1",degreeId:1,classId:1},{id:2,ra:456798,name:"Nome do aluno 2",degreeId:2,classId:1},{id:3,ra:752156,name:"Nome do aluno 3",degreeId:3,classId:2},{id:4,ra:852348,name:"Nome do aluno 4",degreeId:4,classId:2},{id:5,ra:454643,name:"Nome do aluno 5",degreeId:6,classId:2}]},82:function(e){e.exports=[{id:1,teacherId:1,matterId:1,degrees:[{degreeId:1,classes:[{classPosition:1},{classPosition:2},{classPosition:3}]},{degreeId:2,classes:[{classPosition:1}]}]},{id:2,teacherId:2,matterId:2,degrees:[{degreeId:8,classes:[{classPosition:1},{classPosition:2}]},{degreeId:9,classes:[{classPosition:1}]}]},{id:3,teacherId:3,matterId:3,degrees:[{degreeId:12,classes:[{classId:1}]},{degreeId:13,classes:[{classId:1}]},{degreeId:5,classes:[{classId:1}]},{degreeId:6,classes:[{classId:1}]}]},{id:4,teacherId:4,matterId:4,degrees:[{degreeId:1,classes:[{classId:1}]},{degreeId:2,classes:[{classId:1}]},{degreeId:3,classes:[{classId:1}]},{degreeId:4,classes:[{classId:1}]},{degreeId:5,classes:[{classId:1}]}]}]},83:function(e){e.exports={classes:[{id:1,name:"A"},{id:2,name:"B"},{id:3,name:"C"},{id:4,name:"D"},{id:5,name:"E"},{id:6,name:"F"}]}},84:function(e){e.exports=[{id:1,name:"Ensino Fundamental"},{id:2,name:"1\xb0 ano do ensino m\xe9dio"},{id:3,name:"2\xb0 ano ensino m\xe9dio"},{id:4,name:"3\xb0 ano do ensino m\xe9dio"},{id:5,name:"Cursinho"},{id:8,name:"4\xba ano do ensino fundamental"},{id:9,name:"5\xba ano do ensino fundamental"},{id:10,name:"6\xba ano do ensino fundamental"},{id:11,name:"7\xba ano do ensino fundamental"},{id:12,name:"8\xba ano do ensino fundamental"},{id:13,name:"9\xba ano do ensino fundamental"},{id:6,name:"Estudo em casa"},{id:7,name:"Outros"}]},85:function(e,t,a){e.exports=a(235)},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.b66d058d.chunk.js.map