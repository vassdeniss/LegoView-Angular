"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{9246:(r,a,i)=>{function e(p){const l=[];return Object.keys(p.controls).forEach(s=>{const c=p.get(s).errors;if(c){const t=localStorage.getItem("preferred-langauge")||"bg";Object.keys(c).forEach(n=>{let o="";"required"===n?o="en"===t?"is required!":"\u0435 \u0437\u0430\u0434\u044a\u043b\u0432\u0438\u0442\u0435\u043b\u043d\u043e!":"minlength"===n?o="en"===t?`should be at least ${c[n].requiredLength} characters!`:`\u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0435 \u043f\u043e\u043d\u0435 ${c[n].requiredLength} \u0441\u0438\u043c\u0432\u043e\u043b\u0430`:"maxlength"===n?o="en"===t?`cannot be longer than ${c[n].requiredLength} characters long!`:`\u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0435 \u043f\u043e-\u0434\u044a\u043b\u0433\u043e \u043e\u0442 ${c[n].requiredLength} \u0441\u0438\u043c\u0432\u043e\u043b\u0430!`:"email"===n?o="en"===t?"is not valid!":"\u043d\u0435 \u0435 \u0432\u0430\u043b\u0438\u0434\u0435\u043d!":"notSame"===n?o="en"===t?"must match repeat password!":"\u0434\u0448\u0435\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u044a\u0432\u043f\u0430\u0434\u0430\u0442!":"invalidLinks"===n&&(o="en"===t?" : Not all links are valid, or are not comma seperated!":" : \u041d\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u043b\u0438\u043d\u043a\u043e\u0432\u0435 \u0441\u0430 \u0432\u0430\u043b\u0438\u0434\u043d\u0438, \u0438\u043b\u0438 \u043d\u0435 \u0441\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438 \u0441\u044a\u0441 \u0437\u0430\u043f\u0435\u0442\u0430\u044f!"),l.push({control:s,error:n,value:c[n],message:o})})}}),l}i.d(a,{j:()=>e})},2864:(r,a,i)=>{i.d(a,{R:()=>c});var e=i(5879),p=i(6814);function l(t,n){if(1&t&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.title)}}const s=["*"];let c=(()=>{class t{constructor(){this.title="",this.closed=new e.vpe}closePopup(){this.closed.emit()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-popup"]],inputs:{title:"title"},outputs:{closed:"closed"},ngContentSelectors:s,decls:8,vars:1,consts:[[1,"popup-overlay",3,"click"],[1,"popup-container"],[1,"popup-header"],[4,"ngIf"],[1,"close-button",3,"click"],[1,"popup-body"]],template:function(o,u){1&o&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(){return u.closePopup()}),e.qZA(),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,l,2,1,"h3",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return u.closePopup()}),e._uU(5,"\xd7"),e.qZA()(),e.TgZ(6,"div",5),e.Hsn(7),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("ngIf",u.title))},dependencies:[p.O5],styles:[".popup-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:9999}.popup-container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:green;border-radius:5px;padding:20px;z-index:10000}.popup-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#fff}.close-button[_ngcontent-%COMP%]{border:none;background:none;font-size:18px;cursor:pointer;color:#fff}.popup-body[_ngcontent-%COMP%]{padding:10px;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}@media only screen and (max-width: 800px){.popup-container[_ngcontent-%COMP%]{width:80%;height:auto;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}}"]}),t})()}}]);