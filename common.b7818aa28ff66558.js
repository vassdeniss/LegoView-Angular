"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{9246:(r,u,c)=>{function e(i){const l=[];return Object.keys(i.controls).forEach(s=>{const o=i.get(s).errors;o&&Object.keys(o).forEach(t=>{let n="";"required"===t?n="is required!":"minlength"===t?n=`should be at least ${o[t].requiredLength} characters!`:"maxlength"===t?n=`cannot be longer than ${o[t].requiredLength} characters long!`:"email"===t?n="is not valid!":"notSame"===t&&(n="must match repeat password!"),l.push({control:s,error:t,value:o[t],message:n})})}),l}c.d(u,{j:()=>e})},2864:(r,u,c)=>{c.d(u,{R:()=>o});var e=c(4946),i=c(6814);function l(t,n){if(1&t&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&t){const p=e.oxw();e.xp6(1),e.Oqu(p.title)}}const s=["*"];let o=(()=>{class t{constructor(){this.title="",this.closed=new e.vpe}closePopup(){this.closed.emit()}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-popup"]],inputs:{title:"title"},outputs:{closed:"closed"},ngContentSelectors:s,decls:8,vars:1,consts:[[1,"popup-overlay",3,"click"],[1,"popup-container"],[1,"popup-header"],[4,"ngIf"],[1,"close-button",3,"click"],[1,"popup-body"]],template:function(p,a){1&p&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(){return a.closePopup()}),e.qZA(),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,l,2,1,"h3",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return a.closePopup()}),e._uU(5,"\xd7"),e.qZA()(),e.TgZ(6,"div",5),e.Hsn(7),e.qZA()()),2&p&&(e.xp6(3),e.Q6J("ngIf",a.title))},dependencies:[i.O5],styles:[".popup-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:9999}.popup-container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:green;border-radius:5px;padding:20px;z-index:10000}.popup-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#fff}.close-button[_ngcontent-%COMP%]{border:none;background:none;font-size:18px;cursor:pointer;color:#fff}.popup-body[_ngcontent-%COMP%]{padding:10px;color:#fff;display:flex;justify-content:center}@media only screen and (max-width: 800px){.popup-container[_ngcontent-%COMP%]{width:80%;height:auto;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.popup-body[_ngcontent-%COMP%]{width:130%}}"]}),t})()}}]);