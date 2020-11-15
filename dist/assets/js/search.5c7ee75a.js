(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(1),i=n(7),s=i.get,c=(i.deepValue,i.isArray),l=function(){function e(t,n){var a=n.location,o=void 0===a?0:a,r=n.distance,i=void 0===r?100:r,c=n.threshold,l=void 0===c?.6:c,h=n.maxPatternLength,u=void 0===h?32:h,d=n.caseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,w=void 0===k?null:k,S=n.keys,x=void 0===S?[]:S,C=n.shouldSort,_=void 0===C||C,M=n.getFn,L=void 0===M?s:M,I=n.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,j=n.tokenize,A=void 0!==j&&j,P=n.matchAllTokens,T=void 0!==P&&P,N=n.includeMatches,D=void 0!==N&&N,F=n.includeScore,q=void 0!==F&&F,W=n.verbose,E=void 0!==W&&W;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:i,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,minMatchCharLength:m,id:w,keys:x,includeMatches:D,includeScore:q,shouldSort:_,getFn:L,sortFn:O,verbose:E,tokenize:A,matchAllTokens:T},this.setCollection(t),this._processKeys(x)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var a=e[t];this._keyWeights[a]=1,this._keyNames.push(a)}else{for(var o=null,r=null,i=0,s=0,c=e.length;s<c;s+=1){var l=e[s];if(!l.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var h=l.name;if(this._keyNames.push(h),!l.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=l.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?u:Math.max(r,u),o=null==o?u:Math.min(o,u),this._keyWeights[h]=u,i+=u}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),a=n.tokenSearchers,o=n.fullSearcher,r=this._search(a,o);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),a=0,o=n.length;a<o;a+=1)t.push(new r(n[a],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,a={},o=[];if("string"==typeof n[0]){for(var r=0,i=n.length;r<i;r+=1)this._analyze({key:"",value:n[r],record:r,index:r},{resultMap:a,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=n.length;s<c;s+=1)for(var l=n[s],h=0,u=this._keyNames.length;h<u;h+=1){var d=this._keyNames[h];this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:s},{resultMap:a,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var n=this,a=e.key,o=e.arrayIndex,r=void 0===o?-1:o,i=e.value,s=e.record,l=e.index,h=t.tokenSearchers,u=void 0===h?[]:h,d=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;!function e(t,o,r,i){if(null!=o)if("string"==typeof o){var s=!1,l=-1,h=0;n._log("\nKey: ".concat(""===a?"--":a));var p=d.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(p.score)),n.options.tokenize){for(var f=o.split(n.options.tokenSeparator),y=f.length,b=[],m=0,k=u.length;m<k;m+=1){var w=u[m];n._log('\nPattern: "'.concat(w.pattern,'"'));for(var S=!1,x=0;x<y;x+=1){var C=f[x],_=w.search(C),M={};_.isMatch?(M[C]=_.score,s=!0,S=!0,b.push(_.score)):(M[C]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(C,'", score: ').concat(M[C]))}S&&(h+=1)}l=b[0];for(var L=b.length,I=1;I<L;I+=1)l+=b[I];l/=L,n._log("Token score average:",l)}var O=p.score;l>-1&&(O=(O+l)/2),n._log("Score average:",O);var j=!n.options.tokenize||!n.options.matchAllTokens||h>=u.length;if(n._log("\nCheck Matches: ".concat(j)),(s||p.isMatch)&&j){var A={key:a,arrayIndex:t,value:o,score:O};n.options.includeMatches&&(A.matchedIndices=p.matchedIndices);var P=v[i];P?P.output.push(A):(v[i]={item:r,output:[A]},g.push(v[i]))}}else if(c(o))for(var T=0,N=o.length;T<N;T+=1)e(T,o[T],r,i)}(r,i,s,l)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,a=0,o=e.length;a<o;a+=1){for(var r=e[a],i=r.output,s=i.length,c=1,l=0;l<s;l+=1){var h=i[l],u=h.key,d=n?t[u]:1,p=0===h.score&&t&&t[u]>0?Number.EPSILON:h.score;c*=Math.pow(p,d)}r.score=c,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var a=0,o=n.length;a<o;a+=1){var r=n[a];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var s=e[r];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},l=0,h=o.length;l<h;l+=1)o[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),e}();e.exports=l},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=n(2),r=n(3),i=n(6),s=function(){function e(t,n){var a=n.location,o=void 0===a?0:a,r=n.distance,s=void 0===r?100:r,c=n.threshold,l=void 0===c?.6:c,h=n.maxPatternLength,u=void 0===h?32:h,d=n.isCaseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.includeMatches,w=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:l,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,includeMatches:w,minMatchCharLength:m},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,a=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return a&&(i.matchedIndices=[[0,e.length-1]]),i}var s=this.options,c=s.maxPatternLength,l=s.tokenSeparator;if(this.pattern.length>c)return o(e,this.pattern,l);var h=this.options,u=h.location,d=h.distance,p=h.threshold,v=h.findAllMatches,f=h.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:u,distance:d,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:a})}}])&&a(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(a,"|")),r=e.match(o),i=!!r,s=[];if(i)for(var c=0,l=r.length;c<l;c+=1){var h=r[c];s.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var a=n(4),o=n(5);e.exports=function(e,t,n,r){for(var i=r.location,s=void 0===i?0:i,c=r.distance,l=void 0===c?100:c,h=r.threshold,u=void 0===h?.6:h,d=r.findAllMatches,p=void 0!==d&&d,v=r.minMatchCharLength,f=void 0===v?1:v,g=r.includeMatches,y=void 0!==g&&g,b=s,m=e.length,k=u,w=e.indexOf(t,b),S=t.length,x=[],C=0;C<m;C+=1)x[C]=0;if(-1!==w){var _=a(t,{errors:0,currentLocation:w,expectedLocation:b,distance:l});if(k=Math.min(_,k),-1!==(w=e.lastIndexOf(t,b+S))){var M=a(t,{errors:0,currentLocation:w,expectedLocation:b,distance:l});k=Math.min(M,k)}}w=-1;for(var L=[],I=1,O=S+m,j=1<<(S<=31?S-1:30),A=0;A<S;A+=1){for(var P=0,T=O;P<T;)a(t,{errors:A,currentLocation:b+T,expectedLocation:b,distance:l})<=k?P=T:O=T,T=Math.floor((O-P)/2+P);O=T;var N=Math.max(1,b-T+1),D=p?m:Math.min(b+T,m)+S,F=Array(D+2);F[D+1]=(1<<A)-1;for(var q=D;q>=N;q-=1){var W=q-1,E=n[e.charAt(W)];if(E&&(x[W]=1),F[q]=(F[q+1]<<1|1)&E,0!==A&&(F[q]|=(L[q+1]|L[q])<<1|1|L[q+1]),F[q]&j&&(I=a(t,{errors:A,currentLocation:W,expectedLocation:b,distance:l}))<=k){if(k=I,(w=W)<=b)break;N=Math.max(1,2*b-w)}}if(a(t,{errors:A+1,currentLocation:b,expectedLocation:b,distance:l})>k)break;L=F}var z={isMatch:w>=0,score:0===I?.001:I};return y&&(z.matchedIndices=o(x,f)),z}},function(e,t){e.exports=function(e,t){var n=t.errors,a=void 0===n?0:n,o=t.currentLocation,r=void 0===o?0:o,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,l=void 0===c?100:c,h=a/e.length,u=Math.abs(s-r);return l?h+u/l:u?1:h}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=-1,o=-1,r=0,i=e.length;r<i;r+=1){var s=e[r];s&&-1===a?a=r:s||-1===a||((o=r-1)-a+1>=t&&n.push([a,o]),a=-1)}return e[r-1]&&r-a>=t&&n.push([a,r-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,a=0;a<n;a+=1)t[e.charAt(a)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},a=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,s){if(s){var c=s.indexOf("."),l=s,h=null;-1!==c&&(l=s.slice(0,c),h=s.slice(c+1));var u=t[l];if(null!=u)if(h||!o(u)&&!r(u))if(n(u))for(var d=0,p=u.length;d<p;d+=1)e(u[d],h);else h&&e(u,h);else i.push(a(u))}else i.push(t)}(e,t),i},isArray:n,isString:o,isNum:r,toString:a}}])},GKVU:function(e,t,n){"use strict";var a=n("I+eb"),o=n("hXpO");a({target:"String",proto:!0,forced:n("rwPt")("anchor")},{anchor:function(e){return o(this,"a","name",e)}})},wQbG:function(e,t,n){"use strict";n.r(t);n("QWBl"),n("2B1R"),n("+2oP"),n("rB9j"),n("hByQ"),n("GKVU"),n("FZtP");var a=n("VTBJ"),o=n("/+cc"),r=n.n(o),i=n("CjXH"),s={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(a.a)(Object(a.a)({},n),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},c=n("KHd+"),l=n("Kw5r"),h=l.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"61b519c98d1a94b9b70deec8de17fb30",path:"/docs/lets-start/",title:"Let's start",headings:[{depth:1,value:"Let's start",anchor:"#lets-start"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"6bbd90a2329bfc8d892ffbe309d5bdf7",path:"/docs/why-protocol-me/",title:"Why Protocol.me",headings:[{depth:1,value:"Why Protocol.me",anchor:"#why-protocolme"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"1e4563b28d10cfef49e9c9d3b1e4d466",path:"/docs/root-objects/",title:"The Root Objects",headings:[{depth:1,value:"The Root Objects",anchor:"#the-root-objects"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"994413e5dc2c53ef3b5c295e14b59ac7",path:"/docs/hello-world/",title:"Let's build our first app",headings:[{depth:1,value:"Let's build our first app",anchor:"#lets-build-our-first-app"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"32e5441ca35a59d2773bcaaa829e815d",path:"/docs/frequently-asked-questions/",title:"Frequently Asked Questions",headings:[{depth:1,value:"Frequently Asked Questions",anchor:"#frequently-asked-questions"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"af8104326f9fb03a0f697c2deb01ea5d",path:"/docs/example/",title:"Here is a great example",headings:[{depth:1,value:"Here is a great example",anchor:"#here-is-a-great-example"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"78a50678a18352828c5b0c39fdb66a22",path:"/docs/co-create-with-us/",title:"Co-Create With Us!",headings:[{depth:1,value:"Co-Create With Us!",anchor:"#co-create-with-us"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"49295bef2db831c2b14b82b02fbc7eb3",path:"/docs/writing-content/",title:"Writing Content",headings:[{depth:1,value:"Writing Content",anchor:"#writing-content"},{depth:2,value:"Writing Markdown",anchor:"#writing-markdown"}]}},{node:{id:"04808e669cf8537a5d2d42d2ea840db8",path:"/docs/sidebar/",title:"Sidebar",headings:[{depth:1,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Global Configuration",anchor:"#global-configuration"},{depth:3,value:"The Sidebar Config Object",anchor:"#the-sidebar-config-object"},{depth:2,value:"Frontmatter setup",anchor:"#frontmatter-setup"}]}},{node:{id:"9ad70cb94e1fe6a317a5d47f2e0c2d75",path:"/docs/settings/",title:"Settings",headings:[{depth:1,value:"Settings",anchor:"#settings"},{depth:2,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Next and Previous Navigation",anchor:"#next-and-previous-navigation"},{depth:2,value:"Navigation",anchor:"#navigation"},{depth:2,value:"Description",anchor:"#description"},{depth:2,value:"Social Links",anchor:"#social-links"},{depth:2,value:"On this Page",anchor:"#on-this-page"},{depth:2,value:"Google Analytics",anchor:"#google-analytics"}]}},{node:{id:"4fe3023f9083c2e61647f2b035427b32",path:"/docs/installation/",title:"Installation",headings:[{depth:1,value:"Installation",anchor:"#installation"},{depth:2,value:"Using the Gridsome CLI",anchor:"#using-the-gridsome-cli"},{depth:2,value:"Installing manually",anchor:"#installing-manually"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Welcome! Let me take you on a journey",headings:[{depth:1,value:"Welcome! Let me take you on a journey",anchor:"#welcome-let-me-take-you-on-a-journey"},{depth:2,value:"Developing a truely peer-2-peer experience has never been easier!",anchor:"#developing-a-truely-peer-2-peer-experience-has-never-been-easier"}]}},{node:{id:"09873564a0818ec92881fabdf077984f",path:"/docs/deploying/",title:"Deploying",headings:[{depth:1,value:"Deploying",anchor:"#deploying"}]}}]}},d=function(e){var t=e.options;t.__staticData?t.__staticData.data=u:(t.__staticData=l.a.observable({data:u}),t.computed=h({$static:function(){return t.__staticData.data}},t.computed))},p=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n        No results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,a){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):n("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof d&&d(p);t.default=p.exports}}]);