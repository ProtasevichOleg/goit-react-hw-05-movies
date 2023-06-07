"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[187],{6187:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,o,i=t(9439),u=t(2791),s=t(7689),l=t(4119),p=t(8037),f=t(168),h=t(6444),d=h.ZP.div(r||(r=(0,f.Z)(["\n  padding: 1em;\n"]))),g=h.ZP.h2(a||(a=(0,f.Z)(["\n  color: ",";\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n"])),(function(n){return n.theme.colors.primary})),v=h.ZP.ul(c||(c=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),m=h.ZP.li(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  color: ",";\n  background-color: ",";\n\n  &:nth-child(even) {\n    background-color: ",";\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  span {\n    display: inline-block;\n    margin-right: 0.5em;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: bold;\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.darkReviewBackground}),(function(n){return n.theme.colors.lightReviewBackground}),(function(n){return n.theme.colors.primary})),w=t(184),Z=function(){var n=(0,s.UO)().movieId,e=(0,u.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],c=(0,u.useState)(!0),o=(0,i.Z)(c,2),f=o[0],h=o[1];(0,u.useEffect)((function(){h(!0),(0,l.L_)(n).then((function(n){a(n),h(!1)})).catch((function(n){(0,p.Z)(n.message),h(!1)}))}),[n]);return(0,w.jsxs)(d,{children:[(0,w.jsx)(g,{children:"Reviews"}),f?(0,w.jsx)("p",{}):(0,w.jsx)(v,{children:r.length>0?r.map((function(n){return(0,w.jsxs)(m,{children:[(0,w.jsx)("strong",{children:n.author}),(0,w.jsx)("span",{children:(e=n.content,t=600,e.length>t?e.substring(0,t)+"...":e)}),n.content.length>200&&(0,w.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"Read full review"})]},n.id);var e,t})):(0,w.jsx)("p",{children:"no reviews found \ud83d\ude1e"})})]})}},4119:function(n,e,t){t.d(e,{Me:function(){return m},jC:function(){return g},pg:function(){return h},L_:function(){return Z},_k:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),i="5ba3a910e660e35337f3e89e0f4cf206",u=t(8037),s=t(691),l=t.n(s);function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l().start(),n.next=4,o.Z.get("trending/all/day?api_key=".concat(i));case 4:return e=n.sent,l().done(),n.abrupt("return",e.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),l().done(),(0,u.Z)("Error while loading trending movies."),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l().start(),n.next=4,o.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 4:return t=n.sent,l().done(),n.abrupt("return",t.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),l().done(),(0,u.Z)("Error while fetching movie by query."),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l().start(),n.next=4,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 4:return t=n.sent,l().done(),n.abrupt("return",t.data);case 9:throw n.prev=9,n.t0=n.catch(0),l().done(),(0,u.Z)("Error while fetching movie details."),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l().start(),n.next=4,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 4:return t=n.sent,l().done(),n.abrupt("return",t.data.cast);case 9:throw n.prev=9,n.t0=n.catch(0),l().done(),(0,u.Z)("Error while fetching movie cast."),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function Z(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l().start(),n.next=4,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 4:return t=n.sent,l().done(),n.abrupt("return",t.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),l().done(),(0,u.Z)("Error while fetching movie reviews."),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"},8037:function(n,e,t){var r=t(1830),a=t.n(r);e.Z=function(n){a().fire({icon:"warning",title:"Oops...",text:n,timer:3e3})}}}]);
//# sourceMappingURL=187.ac95e4be.chunk.js.map