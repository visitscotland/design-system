(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[23],{"+2Pl":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.type,{tag:"component",staticClass:"hero",style:{backgroundImage:t.bgdImgStyleValue,backgroundPositionY:t.imageAlignV,height:t.heightPixels+"px"}},[n("vs-container",[n("vs-row",{attrs:{"align-v":t.displayAlignVValue}},[n("vs-col",[t.displayText?n("vs-heading",{class:"text-"+t.displayAlignH,attrs:{display:"3",sub:t.displayTextSub}},[t._v(t._s(t.displayText)+"\n        ")]):t._e()],1)],1)],1)],1)},a=[]},"3DML":function(t,e,n){"use strict";var i=n("urbR");n.n(i).a},"J/25":function(t,e){},KFEd:function(t,e,n){"use strict";var i=n("xqui");e.a=i.a},"er/X":function(t,e,n){"use strict";var i=n("+2Pl");n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},kREC:function(t,e,n){"use strict";n.r(e);var i=n("er/X"),a=n("KFEd"),r=(n("3DML"),n("KHd+")),s=n("J/25"),u=n.n(s),l=Object(r.a)(a.a,i.a,i.b,!1,null,"4b383cf6",null);"function"==typeof u.a&&u()(l),l.options.__file="Hero.vue",e.default=l.exports},urbR:function(t,e,n){},xqui:function(t,e,n){"use strict";var i=n("reWy"),a=n("GnPe"),r=n("LvDl"),s={short:200,medium:500,tall:700},u={top:"start",middle:"center",bottom:"end"};e.a={name:"VsHero",status:"prototype",release:"0.0.1",components:{VsHeading:i.a,VsContainer:a.c,VsRow:a.d,VsCol:a.a},props:{type:{type:String,default:"section"},imageSrc:{type:String},imageAlignV:{type:String},height:{type:String,default:"medium",validator:function(t){return t.match(/(short|medium|tall)/)}},displayText:{type:String},displayTextSub:{type:String},displayAlignV:{type:String,default:"middle",validator:function(t){return t.match(/(top|middle|bottom)/)}},displayAlignH:{type:String,default:"center",validator:function(t){return t.match(/(left|center|right)/)}}},computed:{bgdImgStyleValue:function(){return this.imageSrc?"url('"+this.imageSrc+"')":"none"},bgdPosStyleValue:function(){},heightPixels:function(){return Object(r.get)(s,this.height)},displayAlignVValue:function(){return Object(r.get)(u,this.displayAlignV)}}}}}]);