(this.webpackJsonpsignupfront=this.webpackJsonpsignupfront||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(13),l=a.n(n),r=a(14),o=a(15),c=a(2),i=a(18),u=a(17),m=(a(23),a(16)),h=a.n(m),p=a(1),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={fullName:"",username:"",email:"",password:""},e.changeFullName=e.changeFullName.bind(Object(c.a)(e)),e.changeEmail=e.changeEmail.bind(Object(c.a)(e)),e.changeUsername=e.changeUsername.bind(Object(c.a)(e)),e.changePassword=e.changePassword.bind(Object(c.a)(e)),e.onSubmit=e.onSubmit.bind(Object(c.a)(e)),e}return Object(o.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={fullName:this.state.fullName,username:this.state.username,email:this.state.email,password:this.state.password};h.a.post("http://localhost:4000/app/signup",t).then((function(e){return console.log(e.data)})),this.setState({fullName:"",username:"",email:"",password:""})}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{classname:"form-div",children:Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName,className:"form-control from-group"}),Object(p.jsx)("input",{type:"text",placeholder:"Username",onChange:this.changeUsername,value:this.state.username,className:"form-control from-group"}),Object(p.jsx)("input",{type:"text",placeholder:"E-mail",onChange:this.changeEmail,value:this.state.email,className:"form-control form-group"}),Object(p.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password,className:"form-control from-group"}),Object(p.jsx)("input",{type:"submit",className:"btn btn-danger btn-block",value:"Submit"})]})})})})}}]),a}(s.Component);l.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4cf1a3c3.chunk.js.map