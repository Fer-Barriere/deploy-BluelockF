import{a as N,pa as p,sa as P,ua as R}from"./chunk-COALQDSF.js";import{$ as z,$a as J,Ca as m,Gb as k,Ma as E,Na as M,O as s,P as x,Qa as j,Ra as l,Sb as b,T as _,U as y,Ya as v,Za as o,_ as $,ab as B,bb as u,ca as g,gb as f,hb as d,ia as I,ib as T,kc as O,mb as D,mc as H,na as C,nb as F,ob as n,pb as L,qb as A,qc as V,wb as h,xb as S,yb as U,za as w}from"./chunk-2VKUROZL.js";var q=class a{constructor(r){this.http=r}apiUrl="https://bluelockb.onrender.com/api/jugadores";jugadores=C([]);cargarJugadores(){this.http.get(this.apiUrl).subscribe(r=>{this.jugadores.set(r)})}agregarJugador(r){return this.http.post(this.apiUrl,r)}obtenerMaximos(){return this.http.get(`${this.apiUrl}/Maximos`)}editarJugador(r){return this.http.put(`${this.apiUrl}/${r.id}`,r)}eliminarJugador(r){return this.http.delete(`${this.apiUrl}/${r}`)}static \u0275fac=function(e){return new(e||a)(_(N))};static \u0275prov=s({token:a,factory:a.\u0275fac,providedIn:"root"})};var Q=["*"];function W(a,r){if(a&1&&(f(0,"span",3),S(1),d()),a&2){let e=n();m(),U(e.label)}}function X(a,r){if(a&1&&T(0,"span",5),a&2){let e=n(2);u(e.icon),o("ngClass","p-avatar-icon")}}function Y(a,r){if(a&1&&l(0,X,1,3,"span",4),a&2){let e=n(),i=h(5);o("ngIf",e.icon)("ngIfElse",i)}}function Z(a,r){if(a&1){let e=D();f(0,"img",7),F("error",function(t){$(e);let c=n(2);return z(c.imageError(t))}),d()}if(a&2){let e=n(2);o("src",e.image,w),v("aria-label",e.ariaLabel)}}function aa(a,r){if(a&1&&l(0,Z,1,2,"img",6),a&2){let e=n();o("ngIf",e.image)}}var ea=({dt:a})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${a("avatar.width")};
    height: ${a("avatar.height")};
    font-size: ${a("avatar.font.size")};
    color: ${a("avatar.color")};
    background: ${a("avatar.background")};
    border-radius: ${a("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${a("avatar.icon.size")};
    width: ${a("avatar.icon.size")};
    height: ${a("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${a("avatar.lg.width")};
    height: ${a("avatar.lg.width")};
    font-size: ${a("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${a("avatar.lg.icon.size")};
    width: ${a("avatar.lg.icon.size")};
    height: ${a("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${a("avatar.xl.width")};
    height: ${a("avatar.xl.width")};
    font-size: ${a("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${a("avatar.xl.font.size")};
    width: ${a("avatar.xl.icon.size")};
    height: ${a("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${a("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${a("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${a("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${a("avatar.xl.group.offset")};
}
`,ta={root:({props:a})=>["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},G=(()=>{class a extends P{name="avatar";theme=ea;classes=ta;static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(a)))(t||a)}})();static \u0275prov=s({token:a,factory:a.\u0275fac})}return a})();var ra=(()=>{class a extends R{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new I;_componentStyle=y(G);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(a)))(t||a)}})();static \u0275cmp=E({type:a,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(i,t){i&2&&(v("data-pc-name","avatar")("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy),B(t.style),u(t.hostClass),J("p-avatar",!0)("p-component",!0)("p-avatar-circle",t.shape==="circle")("p-avatar-lg",t.size==="large")("p-avatar-xl",t.size==="xlarge")("p-avatar-image",t.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[k([G]),j],ngContentSelectors:Q,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,t){if(i&1&&(L(),A(0),l(1,W,2,1,"span",2)(2,Y,1,2,"ng-template",null,0,b)(4,aa,1,1,"ng-template",null,1,b)),i&2){let c=h(3);m(),o("ngIf",t.label)("ngIfElse",c)}},dependencies:[V,O,H,p],encapsulation:2,changeDetection:0})}return a})(),$a=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=M({type:a});static \u0275inj=x({imports:[ra,p,p]})}return a})();export{ra as a,$a as b,q as c};
