(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(179)),l={id:"number-blind",title:"Specific Conventions for Number Blind"},o={unversionedId:"variant-specific/number-blind",id:"variant-specific/number-blind",isDocsHomePage:!1,title:"Specific Conventions for Number Blind",description:'These conventions apply to the "Number Blind" variants.',source:"@site/docs/variant-specific/number-blind.md",slug:"/variant-specific/number-blind",permalink:"/docs/variant-specific/number-blind",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/variant-specific/number-blind.md",version:"current"},s=[{value:"Number Clues --&gt; Slot Numbers",id:"number-clues----slot-numbers",children:[]},{value:"The Mismatch Finesse",id:"the-mismatch-finesse",children:[]},{value:"Advanced Conventions",id:"advanced-conventions",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'These conventions apply to the "Number Blind" variants.'),Object(i.b)("br",null),Object(i.b)("h3",{id:"number-clues----slot-numbers"},"Number Clues --\x3e Slot Numbers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Color clues mean the same thing as normal."),Object(i.b)("li",{parentName:"ul"},"All number clues mean to play the corresponding slot."),Object(i.b)("li",{parentName:"ul"},"If there are only four cards in the hand and a number 5 clue is used, that means to ",Object(i.b)("em",{parentName:"li"},"Chop Move"),".")),Object(i.b)("h3",{id:"the-mismatch-finesse"},"The Mismatch Finesse"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If a player has two of the same playable card in their hand, players are expected to give a positional ",Object(i.b)("em",{parentName:"li"},"Play Clue")," to the left-most one."),Object(i.b)("li",{parentName:"ul"},"If a player instead gives a positional ",Object(i.b)("em",{parentName:"li"},"Play Clue")," to the right-most one, then they are trying to communicate something extra."),Object(i.b)("li",{parentName:"ul"},"This means that the next player should blind-play their ",Object(i.b)("em",{parentName:"li"},"Finesse Position")," as any unrelated playable card."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Mismatch Finesses")," can also rarely give a player a safe discard."),Object(i.b)("li",{parentName:"ul"},"For example, in a 3-player game:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It is the first turn and nothing is played on the stacks."),Object(i.b)("li",{parentName:"ul"},"Cathy has a red 1 in slot 1 and another red 1 in slot 2."),Object(i.b)("li",{parentName:"ul"},"Alice clues green to Cathy, giving a ",Object(i.b)("em",{parentName:"li"},"Play Clue")," to Cathy's slot 2."),Object(i.b)("li",{parentName:"ul"},"Bob knows that since Cathy had a duplicate card on slot 1 and slot 2, Alice was supposed to get the left-most card, the slot 1."),Object(i.b)("li",{parentName:"ul"},"Alice must be doing the ",Object(i.b)("em",{parentName:"li"},"Mismatch Finesse"),". Bob blind-plays his ",Object(i.b)("em",{parentName:"li"},"Finesse Position"),", and it is a blue 1."),Object(i.b)("li",{parentName:"ul"},"Cathy assumes that Alice did a ",Object(i.b)("em",{parentName:"li"},"Finesse")," - due to Bob's blind-play, she must have the blue 2 in her slot 2. Cathy plays her slot 2, and it is revealed to be red 1."),Object(i.b)("li",{parentName:"ul"},"Cathy now knows that it was not a normal ",Object(i.b)("em",{parentName:"li"},"Finesse")," at all - it was instead a ",Object(i.b)("em",{parentName:"li"},"Mismatch Finesse"),", because there is no other explanation for why Bob would blind-play from a ",Object(i.b)("em",{parentName:"li"},"Play Clue")," on a red 1."),Object(i.b)("li",{parentName:"ul"},"Cathy also knows that she must have another red 1 in her hand. Since there is only one card to the left of her slot 2, she knows that the red 1 has to be exactly in her slot 1 (at the time of the clue)."),Object(i.b)("li",{parentName:"ul"},"Due to this, when Cathy needs to discard next, she will blind-discard her slot 2 card (since slot 1 has now shifted down to slot 2 after she played the red 1).")))),Object(i.b)("br",null),Object(i.b)("h3",{id:"advanced-conventions"},"Advanced Conventions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Number Blind variants, ",Object(i.b)("em",{parentName:"li"},"Ejections")," and ",Object(i.b)("em",{parentName:"li"},"Discharges")," work quite differently. See the ",Object(i.b)("a",{parentName:"li",href:"/docs/variant-specific/no-positive-clues"},"Specific Conventions for Variants with No Positive Clues"),".")))}b.isMDXComponent=!0}}]);