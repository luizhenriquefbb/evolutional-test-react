(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),o=a.n(s),l=(a(93),a(94),a(95),a(96),a(25)),i=a(23),d=a(6),c=a(7),u=a(10),m=a(8),h=a(9),p=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-header"},r.a.createElement("header",{className:"header-main container"},r.a.createElement(l.b,{to:"/",className:"logo",title:"Evolucional"},r.a.createElement("img",{alt:"Evolucional",src:"http://www.evolucional.com.br/Public/images/logo-evolucional.png"})),r.a.createElement("span",{className:"btn-menu"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",title:"Home"},"HOME")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/students",title:""},"Estudantes")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/teachers",title:""},"Professores"))))))}}]),t}(n.Component),f=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(p,null),r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"P\xe1gina n\xe3o encontrada")))}}]),t}(n.Component),v=a(14),E=a(2),g=a.n(E);var y=a(17),b=a(22),w=a(26);function I(e,t){return e.find(function(e){return e.id===t})}function C(e,t){return e.find(function(e){return e.id===t})}function N(e,t){return e.find(function(e){return e.id===t})}function O(e,t,a){var n=e.filter(function(e){return e.degreeId===a&&e.classId===t}),r=[],s=!0,o=!1,l=void 0;try{for(var i,d=n[Symbol.iterator]();!(s=(i=d.next()).done);s=!0){var c=i.value;r.push(N(e,c.id))}}catch(u){o=!0,l=u}finally{try{s||null==d.return||d.return()}finally{if(o)throw l}}return r}var S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={studentToEdit:a.props.studentToEdit},window.editStudentPopUp=Object(b.a)(a),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"closePopUp",value:function(){g()("#editStudent").hide(500)}},{key:"getClassesOfADegree",value:function(e){return function(e,t,a){var n=e,r=t.map(function(e){return e.degrees}),s=(r=[].concat.apply([],r)).filter(function(e){return e.degreeId===a}).map(function(e){return e.classes});return s=[].concat.apply([],s),n.filter(function(e){return s.find(function(t){return t.hasOwnProperty("classPosition")?t.id=t.classPosition:t.id=t.classId,t.id===e.id})})}(this.props.classes,this.props.relations,e)}},{key:"updateForm",value:function(e,t){"name"===t?this.setState(Object(y.a)({},this.state,{studentToEdit:Object(y.a)({},this.state.studentToEdit,{name:e.target.value})})):"degree"===t?this.setState(Object(y.a)({},this.state,{studentToEdit:Object(y.a)({},this.state.studentToEdit,{degreeId:parseInt(e.target.value,0)})})):"class"===t&&this.setState(Object(y.a)({},this.state,{studentToEdit:Object(y.a)({},this.state.studentToEdit,{classId:parseInt(e.target.value,0)})}))}},{key:"updateStateFromProps",value:function(){(!this.state.studentToEdit||this.state.studentToEdit&&this.state.studentToEdit.id!==this.props.studentToEdit.id)&&(this.state=Object(y.a)({},this.state,{studentToEdit:this.props.studentToEdit}))}},{key:"applyChange",value:function(e){var t,a,n,r;e.preventDefault(),this.props.dispatch((t=this.state.studentToEdit.id,a=this.state.studentToEdit.name,n=this.state.studentToEdit.classId,r=this.state.studentToEdit.degreeId,{type:"EDIT_ONE_STUDENT",studentId:t,name:a,classId:n,degreeId:r})),this.closePopUp()}},{key:"render",value:function(){var e=this;return this.props.studentToEdit?(this.updateStateFromProps(),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"hover_bkgr_fricc",id:"editStudent"},r.a.createElement("span",{className:"helper"}),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return e.closePopUp()},className:"popupCloseButton"},"X"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.studentToEdit.name,onChange:function(t){return e.updateForm(t,"name")}}),r.a.createElement(w.Select,{value:this.state.studentToEdit.degreeId.toString(),onChange:function(t){return e.updateForm(t,"degree")}},r.a.createElement("option",{value:"",disabled:!0}," Escolha um Grau "),this.props.degrees.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id}," ",e.name," ")})),r.a.createElement(w.Select,{value:this.state.studentToEdit.classId.toString(),onChange:function(t){return e.updateForm(t,"class")}},r.a.createElement("option",{value:"",disabled:!0}," Escolha uma classe "),this.getClassesOfADegree(this.state.studentToEdit.degreeId).map(function(e){return r.a.createElement("option",{value:e.id,key:e.id}," ",e.name," ")})),r.a.createElement(w.Button,{onClick:function(t){return e.applyChange(t)}},"Aplicar")))))):r.a.createElement("div",null)}}]),t}(n.Component);var T=Object(v.b)(function(e){return{classes:e.classesReducer.classes.classes,degrees:e.degreesReducer.degrees,relations:e.relationsReducer.relationships}})(S),j=a(79),k=function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),window.studentChart=Object(b.a)(a),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"closePopUp",value:function(){g()("#studentChart").hide(500)}},{key:"countStudentsInDegree",value:function(e){var t={},a=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value;t.hasOwnProperty(l.degreeId)?t[l.degreeId]=t[l.degreeId]+1:t[l.degreeId]=1}}catch(f){n=!0,r=f}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}var i=[],d=!0,c=!1,u=void 0;try{for(var m,h=this.props.degrees.map(function(e){return e.id})[Symbol.iterator]();!(d=(m=h.next()).done);d=!0){var p=m.value;i.push(isNaN(t[p])?0:t[p])}}catch(f){c=!0,u=f}finally{try{d||null==h.return||h.return()}finally{if(c)throw u}}return i}},{key:"getRandomColors",value:function(e){for(var t=[],a=0;a<e;a++){var n=Math.floor(255*Math.random()).toString(),r=Math.floor(255*Math.random()).toString(),s=Math.floor(255*Math.random()).toString();t.push({background:"rgba("+n+", "+r+", "+s+", 0.5)",border:"rgba("+n+", "+r+", "+s+", 1)"})}return t}},{key:"buildDataInFormatOfChartJS",value:function(){var e=this.getRandomColors(this.props.degrees.length);return{labels:this.props.degrees.map(function(e){return e.name}),datasets:[{label:"Estudantes por Classe",data:this.countStudentsInDegree(this.props.students),backgroundColor:e.map(function(e){return e.background}),borderColor:e.map(function(e){return e.border}),borderWidth:1}]}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"hover_bkgr_fricc",id:"studentChart"},r.a.createElement("span",{className:"helper"}),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return e.closePopUp()},className:"popupCloseButton"},"X"),r.a.createElement(j.a,{data:this.buildDataInFormatOfChartJS(),options:{maintainAspectRatio:!0}}))))}}]),t}(n.Component);var P=Object(v.b)(function(e){return{students:e.studentReducer.students,degrees:e.degreesReducer.degrees}})(k);window.$=g.a;var x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={studentToEdit:a.props.students[0]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getClassById",value:function(e){return I(this.props.classes,e)}},{key:"getDegreeById",value:function(e){return C(this.props.degrees,e)}},{key:"applyFilter",value:function(e){e.preventDefault();var t=g()("form.filters-wrapper").find("input#studentNameFilter").val().toLowerCase(),a=g()("form.filters-wrapper").find("input#studentDegreeFilter").val().toLowerCase(),n=g()("form.filters-wrapper").find("input#studentClassFilter").val().toLowerCase(),r=g()("table#studentTable").find("tbody");r.find("tr").show(),t&&r.find("tr:visible").each(function(e,a){g()(a).find("td.studentName").text().toLowerCase().includes(t)?g()(a).show():g()(a).hide()}),a&&r.find("tr:visible").each(function(e,t){g()(t).find("td.studentDegree").text().toLowerCase().includes(a)?g()(t).show():g()(t).hide()}),n&&r.find("tr:visible").each(function(e,t){g()(t).find("td.studentClass").text().toLowerCase().includes(n)?g()(t).show():g()(t).hide()})}},{key:"createMoreStudents",value:function(){var e,t,a;this.props.dispatch((e=this.props.degrees,t=this.props.relations,a=this.props.classes,{type:"CREATE_MORE_STUDENTS",allDegrees:e,allRelations:t,allClasses:a})),alert("300 Estudantes criados")}},{key:"editOneStudent",value:function(e){g()("#editStudent").show(500),this.setState({studentToEdit:e})}},{key:"showChart",value:function(){g()("#studentChart").show(500)}},{key:"render",value:function(){var e=this,t=this.props.students;return r.a.createElement("div",{className:""},r.a.createElement(p,null),r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"Estudantes"),r.a.createElement("form",{className:"filters-wrapper",onSubmit:function(t){e.applyFilter(t)}},r.a.createElement("input",{type:"text",placeholder:"Nome do Aluno",id:"studentNameFilter",onChange:function(t){return e.applyFilter(t)}}),r.a.createElement("input",{type:"text",placeholder:"Gradua\xe7\xe3o do Aluno",id:"studentDegreeFilter",onChange:function(t){return e.applyFilter(t)}}),r.a.createElement("input",{type:"text",placeholder:"Classe do Aluno",id:"studentClassFilter",onChange:function(t){return e.applyFilter(t)}})),r.a.createElement("div",{style:{margin:"19px 0"},className:"spaceElements"},r.a.createElement(w.Button,{onClick:function(){return e.createMoreStudents()}}," Gerar mais estudantes "),r.a.createElement(w.Button,{onClick:function(){return e.showChart()}}," Mostrar Gr\xe1fico ")),r.a.createElement("table",{className:"highlight",id:"studentTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Grau"),r.a.createElement("th",null,"Classe"),r.a.createElement("th",null,"Editar"))),r.a.createElement("tbody",null,t.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"studentName"},t.name),r.a.createElement("td",{className:"studentDegree"},e.getDegreeById(t.degreeId).name),r.a.createElement("td",{className:"studentClass"},e.getClassById(t.classId).name),r.a.createElement("td",{className:"StudentEdit",onClick:function(){return e.editOneStudent(t)}},r.a.createElement("i",{style:{fontSize:"23px"},className:"fa"},"\uf044")))})))),r.a.createElement(T,{studentToEdit:this.state.studentToEdit}),r.a.createElement(P,null))}}]),t}(n.Component);var F=Object(v.b)(function(e){return{students:e.studentReducer.students,classes:e.classesReducer.classes.classes,degrees:e.degreesReducer.degrees,relations:e.relationsReducer.relationships,matters:e.matterReducer.matters}})(x),D=a(81),R=a.n(D),M=function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),window.studentsOfClassPopUp=Object(b.a)(a),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"closePopUp",value:function(){g()("#showStudentsPopup").hide(500)}},{key:"render",value:function(){var e=this,t=this.props.studentsToShow;return console.log("students",t),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"hover_bkgr_fricc",id:"showStudentsPopup"},r.a.createElement("span",{className:"helper"}),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return e.closePopUp()},className:"popupCloseButton"},"X"),!(t.length>0)&&r.a.createElement("div",null,r.a.createElement("h2",null,"In development"),r.a.createElement("img",{style:{width:"30%"},src:R.a,alt:""})),t.length>0&&r.a.createElement("div",{style:{overflowY:"auto",maxHeight:"473px"}},r.a.createElement("table",{className:"highlight"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"-"),r.a.createElement("th",null,"Nome"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name))})))))))}}]),t}(n.Component);var _=Object(v.b)(function(e){return{}})(M),L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={studentsToShow:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"applyFilter",value:function(e){e.preventDefault();var t=g()("form.filters-wrapper").find("input#teacherNameFilter").val().toLowerCase(),a=g()("form.filters-wrapper").find("input#teacherDegreeFilter").val().toLowerCase(),n=g()("form.filters-wrapper").find("input#teacherClassFilter").val().toLowerCase(),r=g()("form.filters-wrapper").find("input#teacherMatterFilter").val().toLowerCase(),s=g()("table#teacherTable").find("tbody");s.find("tr").show(),t&&s.find("tr:visible").each(function(e,a){g()(a).find("td.teacherName").text().toLowerCase().includes(t)?g()(a).show():g()(a).hide()}),a&&s.find("tr:visible").each(function(e,t){g()(t).find("td.teacherDegree").text().toLowerCase().includes(a)?g()(t).show():g()(t).hide()}),n&&s.find("tr:visible").each(function(e,t){g()(t).find("td.teacherClass").text().toLowerCase().includes(n)?g()(t).show():g()(t).hide()}),r&&s.find("tr:visible").each(function(e,t){g()(t).find("td.teacherMatter").text().toLowerCase().includes(r)?g()(t).show():g()(t).hide()})}},{key:"showStudents",value:function(e,t,a){console.log("teacher_id",e),console.log("degree_id",t),console.log("class_id",a);var n=this.props.students;this.setState({studentsToShow:O(n,a,t)}),g()("#showStudentsPopup").show(500)}},{key:"render",value:function(){var e=this,t=this.props.teachers,a=this.props.relations,n=this.props.degrees,s=this.props.classes;return r.a.createElement("div",{className:""},r.a.createElement(p,null),r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"Professores"),r.a.createElement("form",{className:"filters-wrapper",onSubmit:function(t){e.applyFilter(t)}},r.a.createElement("input",{type:"text",placeholder:"Nome do Professor",id:"teacherNameFilter",onChange:function(t){return e.applyFilter(t)}}),r.a.createElement("input",{type:"text",placeholder:"Nome da Mat\xe9ria",id:"teacherMatterFilter",onChange:function(t){return e.applyFilter(t)}}),r.a.createElement("input",{type:"text",placeholder:"Gradua\xe7\xe3o do Professor",id:"teacherDegreeFilter",onChange:function(t){return e.applyFilter(t)}}),r.a.createElement("input",{type:"text",placeholder:"Classe do Professor",id:"teacherClassFilter",onChange:function(t){return e.applyFilter(t)}})),r.a.createElement("table",{className:"highlight",id:"teacherTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Mat\xe9ria"),r.a.createElement("th",null,"Grau"),r.a.createElement("th",null,"Classe"))),r.a.createElement("tbody",null,t.map(function(t){return function(e,t,a){var n=[],r=!0,s=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var d=l.value;if(d.teacherId===a){var c=!0,u=!1,m=void 0;try{for(var h,p=d.degrees[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var f=C(t,h.value.degreeId);f&&n.push(f)}}catch(v){u=!0,m=v}finally{try{c||null==p.return||p.return()}finally{if(u)throw m}}}}}catch(v){s=!0,o=v}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return n}(a,n,t.id).map(function(n){return function(e,t,a,n){var r=[],s=[],o=!0,l=!1,i=void 0;try{for(var d,c=t[Symbol.iterator]();!(o=(d=c.next()).done);o=!0){var u=d.value;if(u.teacherId===n){s=s.concat(u.degrees);var m=!0,h=!1,p=void 0;try{for(var f,v=u.degrees[Symbol.iterator]();!(m=(f=v.next()).done);m=!0){var E=f.value;if(E.degreeId===a){var g=!0,y=!1,b=void 0;try{for(var w,C=E.classes[Symbol.iterator]();!(g=(w=C.next()).done);g=!0){var N=w.value;N.hasOwnProperty("classPosition")?N.id=N.classPosition:N.id=N.classId,r.push(I(e,N.id))}}catch(O){y=!0,b=O}finally{try{g||null==C.return||C.return()}finally{if(y)throw b}}}}}catch(O){h=!0,p=O}finally{try{m||null==v.return||v.return()}finally{if(h)throw p}}}}}catch(O){l=!0,i=O}finally{try{o||null==c.return||c.return()}finally{if(l)throw i}}return r}(s,a,n.id,t.id).map(function(a){return r.a.createElement("tr",{key:t.id+"-"+n.id+"-"+a.id},r.a.createElement("td",{className:"teacherName"},t.name),r.a.createElement("td",{className:"teacherMatter"},"TODO: get matter of teacher.id "+t.id),r.a.createElement("td",{className:"teacherDegree"},n.name),r.a.createElement("td",{className:"teacherClass myLink",onClick:function(){return e.showStudents(t.id,n.id,a.id)}},a.name))})})})))),r.a.createElement(_,{studentsToShow:this.state.studentsToShow}))}}]),t}(n.Component);var U=Object(v.b)(function(e){return{students:e.studentReducer.students,classes:e.classesReducer.classes.classes,degrees:e.degreesReducer.degrees,relations:e.relationsReducer.relationships,teachers:e.teacherReducer.teachers}})(L),B=a(27),A={students:a(82)};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if(!t)return console.log("No action"),e;if("CREATE_MORE_STUDENTS"===t.type){console.log("CREATE_MORE_STUDENTS");for(var a=t.allDegrees,n=t.allRelations,r=t.allClasses,s=JSON.parse(JSON.stringify(e)),o=Math.max.apply(Math,e.students.map(function(e){return e.id})),l=o+1;l<o+300;l++)try{!function(){var e=a[Math.floor(Math.random()*a.length)],t=n.map(function(e){return e.degrees}),o=(t=[].concat.apply([],t)).filter(function(t){return t.degreeId===e.id}),i=o[Math.floor(Math.random()*o.length)],d=i.classes[Math.floor(Math.random()*i.classes.length)],c=r.find(function(e){return d.hasOwnProperty("classPosition")?e.id===d.classPosition:e.id===d.classId});s.students.push({id:l,ra:l,name:"Nome do aluno "+l,degreeId:e.id,classId:c.id})}()}catch(f){console.warn("Some error with the data. Total of students until now: "+s.students.length),l-=1}return s}if("EDIT_ONE_STUDENT"===t.type){console.log("EDIT_ONE_STUDENT");var i,d=JSON.parse(JSON.stringify(e)),c=t.studentId,u=t.name,m=t.classId,h=t.degreeId,p=d.students.find(function(e,t){return e.id===c&&(i=t,!0)});return p=Object(y.a)({},p,{name:u,classId:m,degreeId:h}),d.students[i]=p,d}return e},J={relationships:a(83)};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return(arguments.length>1?arguments[1]:void 0)?e:(console.log("No action"),e)},W={classes:a(84)};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t?(t.type,e):(console.log("No action"),e)},$={degrees:a(85)};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t?(t.type,e):(console.log("No action"),e)},Y={teachers:a(86)};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return(arguments.length>1?arguments[1]:void 0)?e:(console.log("No action"),e)},K={matters:a(87)};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;return(arguments.length>1?arguments[1]:void 0)?e:(console.log("No action"),e)},V=Object(B.b)({studentReducer:G,relationsReducer:H,classesReducer:X,degreesReducer:z,teacherReducer:q,matterReducer:Q}),Z=Object(B.c)(V);var ee=function(){return window.rootStore=Z,window.test="/evolutional-test-react",r.a.createElement(l.a,{basename:"/evolutional-test-react"},r.a.createElement(v.a,{store:Z},r.a.createElement(i.b,{path:"/"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:"/students"})}}),r.a.createElement(i.b,{path:"/students",exact:!0,component:F}),r.a.createElement(i.b,{path:"/teachers",exact:!0,component:U}),r.a.createElement(i.b,{component:f})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a.p+"static/media/in_development.37956f1e.png"},82:function(e){e.exports=[{id:1,ra:12346,name:"Nome do aluno 1",degreeId:1,classId:1},{id:2,ra:456798,name:"Nome do aluno 2",degreeId:2,classId:1},{id:3,ra:752156,name:"Nome do aluno 3",degreeId:3,classId:2},{id:4,ra:852348,name:"Nome do aluno 4",degreeId:4,classId:2},{id:5,ra:454643,name:"Nome do aluno 5",degreeId:6,classId:2}]},83:function(e){e.exports=[{id:1,teacherId:1,matterId:1,degrees:[{degreeId:1,classes:[{classPosition:1},{classPosition:2},{classPosition:3}]},{degreeId:2,classes:[{classPosition:1}]}]},{id:2,teacherId:2,matterId:2,degrees:[{degreeId:8,classes:[{classPosition:1},{classPosition:2}]},{degreeId:9,classes:[{classPosition:1}]}]},{id:3,teacherId:3,matterId:3,degrees:[{degreeId:12,classes:[{classId:1}]},{degreeId:13,classes:[{classId:1}]},{degreeId:5,classes:[{classId:1}]},{degreeId:6,classes:[{classId:1}]}]},{id:4,teacherId:4,matterId:4,degrees:[{degreeId:1,classes:[{classId:1}]},{degreeId:2,classes:[{classId:1}]},{degreeId:3,classes:[{classId:1}]},{degreeId:4,classes:[{classId:1}]},{degreeId:5,classes:[{classId:1}]}]}]},84:function(e){e.exports={classes:[{id:1,name:"A"},{id:2,name:"B"},{id:3,name:"C"},{id:4,name:"D"},{id:5,name:"E"},{id:6,name:"F"}]}},85:function(e){e.exports=[{id:1,name:"Ensino Fundamental"},{id:2,name:"1\xb0 ano do ensino m\xe9dio"},{id:3,name:"2\xb0 ano ensino m\xe9dio"},{id:4,name:"3\xb0 ano do ensino m\xe9dio"},{id:5,name:"Cursinho"},{id:8,name:"4\xba ano do ensino fundamental"},{id:9,name:"5\xba ano do ensino fundamental"},{id:10,name:"6\xba ano do ensino fundamental"},{id:11,name:"7\xba ano do ensino fundamental"},{id:12,name:"8\xba ano do ensino fundamental"},{id:13,name:"9\xba ano do ensino fundamental"},{id:6,name:"Estudo em casa"},{id:7,name:"Outros"}]},86:function(e){e.exports=[{id:1,name:"Professor 1"},{id:2,name:"Professor 2"},{id:3,name:"Professor 3"},{id:4,name:"Professor 4"},{id:5,name:"Professor 5"},{id:6,name:"Professor 6"}]},87:function(e){e.exports=[{id:1,name:"Matem\xe1tica"},{id:2,name:"Portugu\xeas"},{id:3,name:"Hist\xf3ria"},{id:4,name:"Geografia"}]},88:function(e,t,a){e.exports=a(238)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.97507af2.chunk.js.map