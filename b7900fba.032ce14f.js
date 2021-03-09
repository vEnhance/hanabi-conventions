(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return b}));var i=t(3),n=t(7),l=(t(0),t(179)),r={id:"discards-misplays",title:"Discards & Misplays"},s={unversionedId:"extras/discards-misplays",id:"extras/discards-misplays",isDocsHomePage:!1,title:"Discards & Misplays",description:"The Unnecessary Generation Discard",source:"@site/docs/extras/discards-misplays.md",slug:"/extras/discards-misplays",permalink:"/docs/extras/discards-misplays",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/extras/discards-misplays.md",version:"current",sidebar:"mainSidebar",previous:{title:"Fix Clues",permalink:"/docs/extras/fix-clues"},next:{title:"Chop Moves",permalink:"/docs/extras/chop-moves"}},o=[{value:"The Unnecessary Generation Discard",id:"the-unnecessary-generation-discard",children:[]},{value:"The Shallow Discard",id:"the-shallow-discard",children:[]},{value:"The Shallow Misplay",id:"the-shallow-misplay",children:[]},{value:"The Promise Clue &amp; The Promise Discard",id:"the-promise-clue--the-promise-discard",children:[]},{value:"The No-Context Double Gentleman&#39;s Discard",id:"the-no-context-double-gentlemans-discard",children:[]}],c={toc:o};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"the-unnecessary-generation-discard"},"The Unnecessary Generation Discard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sometimes, in order to satisfy ",Object(l.b)("em",{parentName:"li"},"Save Principle"),", a player will perform an unnecessary ",Object(l.b)("em",{parentName:"li"},"Generation Discard"),", which generates a clue to save a card that they actually already have in their hand."),Object(l.b)("li",{parentName:"ul"},"This puts the next player in an ambiguous situation: was it really a ",Object(l.b)("em",{parentName:"li"},"Generation Discard"),", or could it a ",Object(l.b)("em",{parentName:"li"},"Scream Discard"),"? In order to cover both situations, they should not ",Object(l.b)("em",{parentName:"li"},"Chop Move"),", but they should also not discard on this turn."),Object(l.b)("li",{parentName:"ul"},"For example, in a 3-player game:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Red 3 is played on the stacks. No blue cards are played on the stacks."),Object(l.b)("li",{parentName:"ul"},"Alice has a blue 1 in her hand. She knows the exact identity of it, so it is known playable."),Object(l.b)("li",{parentName:"ul"},"Alice also has a 4 clued in her hand. She does not know what color it is."),Object(l.b)("li",{parentName:"ul"},"There are 0 clues, so if Alice plays the blue 1, Bob will be forced to discard."),Object(l.b)("li",{parentName:"ul"},"Alice sees that Cathy has a red 4 on chop, which is playable. If Alice does not have red 4 in her hand, then Cathy could potentially discard the red 4 (after Bob is forced to discard)."),Object(l.b)("li",{parentName:"ul"},"So, Alice performs a ",Object(l.b)("em",{parentName:"li"},"Generation Discard")," to generate a clue so that Bob can clue the get the red 4, if necessary."),Object(l.b)("li",{parentName:"ul"},"Bob sees that Alice does indeed already have the red 4 in her hand, so from his perspective, if Alice was performing a ",Object(l.b)("em",{parentName:"li"},"Generation Discard"),", it was unnecessary."),Object(l.b)("li",{parentName:"ul"},"However, it could also be the case that Bob's chop is unsafe. So, Bob will ",Object(l.b)("strong",{parentName:"li"},"not")," clue the red 4 on Cathy's chop, but he ",Object(l.b)("strong",{parentName:"li"},"will"),' spend the clue in some other productive fashion. If Bob has nothing productive to do, he must "burn" a clue, similar to what happens when a ',Object(l.b)("em",{parentName:"li"},"Scream Discard")," occurs.")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"the-shallow-discard"},"The Shallow Discard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"At the end of the game, it is normal for players to use a ",Object(l.b)("em",{parentName:"li"},"Positional Discard")," to get 1 card to blind-play, and to use a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay")," to get 2 cards to blind-play."),Object(l.b)("li",{parentName:"ul"},"If a player does a ",Object(l.b)("em",{parentName:"li"},"Positional Discard")," to only get 1 card when they could have performed a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay")," instead, then this is quite strange. If they are not making a mistake, they must be trying to send an additional message."),Object(l.b)("li",{parentName:"ul"},"In this situation, they intend for it to promise 3 blind-plays instead of 1."),Object(l.b)("li",{parentName:"ul"},"This is called a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard")," because from Bob's perspective, Alice could have performed a deeper move."),Object(l.b)("li",{parentName:"ul"},"For example, in a 4-player game:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The team has 0 strikes."),Object(l.b)("li",{parentName:"ul"},"It is the ",Object(l.b)("em",{parentName:"li"},"End-Game")," and Alice sees all of the remaining useful cards. Thus, she can ",Object(l.b)("em",{parentName:"li"},"Positionally Discard")," or ",Object(l.b)("em",{parentName:"li"},"Positionally Misplay")," any card that she wants in her hand."),Object(l.b)("li",{parentName:"ul"},"Alice sees that Bob, Cathy, and Donald all have playable cards on slot 2."),Object(l.b)("li",{parentName:"ul"},"Alice blind-discards her slot 2 card as a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard"),"."),Object(l.b)("li",{parentName:"ul"},"From Bob's perspective, he sees that Cathy and Donald have a playable card on slot 2. Thus, Bob expected Alice to perform a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay")," or her slot 2 card."),Object(l.b)("li",{parentName:"ul"},"When Bob sees that Alice performed a ",Object(l.b)("em",{parentName:"li"},"Positional Discard")," instead of a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay"),", he knows that she must be intending for 3 blind-plays to happen (instead of 1) as a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard"),"."),Object(l.b)("li",{parentName:"ul"},"Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays."),Object(l.b)("li",{parentName:"ul"},"Cathy and Donald are both in a similar situation to Bob. (They expected Alice to perform a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay"),".)"),Object(l.b)("li",{parentName:"ul"},"Thus, they both know that this is a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard"),", and blind-play their slot 2 cards (to match Alice's slot 2 discard)."))),Object(l.b)("li",{parentName:"ul"},"In some specific situations, a ",Object(l.b)("em",{parentName:"li"},"Positional Discard")," from chop would not work, because it would just look like a normal discard. In these situations, a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay")," would only get 1 blind-play (instead of 2) and a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard")," would only get 2 blind-plays (instead of 3).")),Object(l.b)("br",null),Object(l.b)("h3",{id:"the-shallow-misplay"},"The Shallow Misplay"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"First, see the section on the ",Object(l.b)("em",{parentName:"li"},Object(l.b)("a",{parentName:"em",href:"#the-shallow-discard"},"Shallow Discard")),"."),Object(l.b)("li",{parentName:"ul"},"In a 5-player game, it possible to perform a ",Object(l.b)("em",{parentName:"li"},"Shallow Misplay"),", causing 4 people to blind-play from the same slot. (This works for the same reasons that a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard")," works.)"),Object(l.b)("li",{parentName:"ul"},"For example, in a 5-player game:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The team has 0 strikes."),Object(l.b)("li",{parentName:"ul"},"It is the ",Object(l.b)("em",{parentName:"li"},"End-Game")," and Alice sees all of the remaining useful cards. Thus, she can ",Object(l.b)("em",{parentName:"li"},"Positionally Discard")," or ",Object(l.b)("em",{parentName:"li"},"Positionally Misplay")," any card that she wants in her hand."),Object(l.b)("li",{parentName:"ul"},"Alice sees that Bob, Cathy, Donald, and Emily all have playable cards on slot 2."),Object(l.b)("li",{parentName:"ul"},"Alice blind-plays her slot 2 card as a ",Object(l.b)("em",{parentName:"li"},"Shallow Misplay"),"."),Object(l.b)("li",{parentName:"ul"},"From Bob's perspective, he sees that Cathy, Donald, and Emily have a playable card on slot 2. Thus, Bob expected Alice to perform a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard")," or her slot 2 card."),Object(l.b)("li",{parentName:"ul"},"When Bob sees that Alice performed a ",Object(l.b)("em",{parentName:"li"},"Positional Misplay")," instead of a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard"),", he knows that she must be intending for 4 blind-plays to happen (instead of 2) as a ",Object(l.b)("em",{parentName:"li"},"Shallow Misplay"),"."),Object(l.b)("li",{parentName:"ul"},"Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays."),Object(l.b)("li",{parentName:"ul"},"Cathy, Donald, and Emily are all in a similar situation to Bob. (They expected Alice to perform a ",Object(l.b)("em",{parentName:"li"},"Shallow Discard"),".)"),Object(l.b)("li",{parentName:"ul"},"Thus, they all know that this is a ",Object(l.b)("em",{parentName:"li"},"Shallow Misplay"),", and blind-play their slot 2 cards (to match Alice's slot 2 discard).")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"the-promise-clue--the-promise-discard"},"The Promise Clue & The Promise Discard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"First, see the section on the ",Object(l.b)("em",{parentName:"li"},Object(l.b)("a",{parentName:"em",href:"/docs/level-9#the-certain-finesse--the-certain-discard"},"Certain Finesse")),"."),Object(l.b)("li",{parentName:"ul"},"When a ",Object(l.b)("em",{parentName:"li"},"Certain Finesse")," happens, players can blind-discard their ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," card, because a ",Object(l.b)("em",{parentName:"li"},"Layered Finesse")," is impossible. However, when a normal ",Object(l.b)("em",{parentName:"li"},"Finesse")," happens, players cannot blind-discard anything, just in case a ",Object(l.b)("em",{parentName:"li"},"Layered Finesse")," is happening."),Object(l.b)("li",{parentName:"ul"},"Sometimes, after a ",Object(l.b)("em",{parentName:"li"},"Finesse")," has occurred, but before the promised card has been blind-played, a teammate might find strategic value in duplicating the promised card."),Object(l.b)("li",{parentName:"ul"},"If a teammate duplicates the promised card, and the duplication was not a last-resort, then it ",Object(l.b)("strong",{parentName:"li"},"promises")," that the duplicated card is exactly on ",Object(l.b)("em",{parentName:"li"},"Finesse Position"),". This is called a ",Object(l.b)("em",{parentName:"li"},"Promise Clue"),"."),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("em",{parentName:"li"},"Promise Clue")," allows the recipient of the ",Object(l.b)("em",{parentName:"li"},"Finesse")," to blind-discard the card as a ",Object(l.b)("em",{parentName:"li"},"Promise Discard"),". (A ",Object(l.b)("em",{parentName:"li"},"Promise Discard")," is almost exactly like a ",Object(l.b)("em",{parentName:"li"},"Certain Discard"),".)"),Object(l.b)("li",{parentName:"ul"},"Finally, from the perspective of the player receiving the clue, if they play the duplicated card first, then they should know that the focus of the original clue was on the other, non-duplicated card, and they can go on to play it afterwards. (Otherwise, the original clue would be fairly low-value.)"),Object(l.b)("li",{parentName:"ul"},"For example, in a 5-player game:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"It is the first turn and nothing is played on the stacks."),Object(l.b)("li",{parentName:"ul"},"Alice clues red to Donald, touching a red 2 as a ",Object(l.b)("em",{parentName:"li"},"Play Clue"),". This is a ",Object(l.b)("em",{parentName:"li"},"Finesse")," on Cathy's red 1."),Object(l.b)("li",{parentName:"ul"},"Bob sees that Alice has four 1's in her hand. This would be a juicy 4-for-1 clue."),Object(l.b)("li",{parentName:"ul"},"Bob clues number 1 to Alice, touching four 1's: red 1, yellow 1, green 1, and blue 1."),Object(l.b)("li",{parentName:"ul"},"Cathy knows that Alice performed a ",Object(l.b)("em",{parentName:"li"},"Finesse")," on her for the red 1. If she happens to play the red 1, then Alice will go on to misplay the red 1 as a purple 1."),Object(l.b)("li",{parentName:"ul"},"Cathy also knows that it is possible that Alice performed a ",Object(l.b)("em",{parentName:"li"},"Layered Finesse")," on her. For example, Cathy could have purple 1 in her ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," and red 1 in her ",Object(l.b)("em",{parentName:"li"},"Second Finesse Position"),". If this were the case, and Cathy blind-discarded the purple 1, then the team could lose the only visible copy of purple 1, which would be really bad."),Object(l.b)("li",{parentName:"ul"},"However, because of the ",Object(l.b)("em",{parentName:"li"},"Promise Clue")," convention, Cathy knows that Bob has promised that the red 1 happens to be exactly on her ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," and that no ",Object(l.b)("em",{parentName:"li"},"Layered Finesse")," is happening."),Object(l.b)("li",{parentName:"ul"},"Cathy blind-discards her ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," card as a ",Object(l.b)("em",{parentName:"li"},"Promise Discard"),"."))),Object(l.b)("li",{parentName:"ul"},"Note that as long as the duplication clue touches two or more cards (e.g. with an efficiency of a 1-for-1), the ",Object(l.b)("em",{parentName:"li"},"Promise Discard")," interpretation takes priority over the ",Object(l.b)("em",{parentName:"li"},"Unknown Trash Discharge")," interpretation.")),Object(l.b)("br",null),Object(l.b)("h3",{id:"the-no-context-double-gentlemans-discard"},"The No-Context Double Gentleman's Discard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Normally, when someone performs a ",Object(l.b)("em",{parentName:"li"},"Gentleman's Discard"),", it only promises the exact other copy of the card, even if the discarded card could have been multiple different things. The reason for this is it allows for asymmetric reads."),Object(l.b)("li",{parentName:"ul"},"However, what if a ",Object(l.b)("em",{parentName:"li"},"Gentleman's Discard")," is done, and the card could have been multiple different things, and there was no context and no possible way to know which exact card that it was?"),Object(l.b)("li",{parentName:"ul"},"In this case, then it is a legal ",Object(l.b)("em",{parentName:"li"},"Double Gentleman's Discard"),", and it promises that both of the possibilities exist. (Or, it could even be a ",Object(l.b)("em",{parentName:"li"},"Triple Gentleman's Discard"),".)"),Object(l.b)("li",{parentName:"ul"},"For example, in a 3-player three suit game:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"It is the first turn and nothing is played on the stacks."),Object(l.b)("li",{parentName:"ul"},"Alice clues number 1 to Bob, touching a 1 on slot 3."),Object(l.b)("li",{parentName:"ul"},"From everyone's perspective, this 1 could be any 1 in the game - blue 1, green 1, or yellow 1."),Object(l.b)("li",{parentName:"ul"},"Bob discards the card and it is revealed to be a blue 1."),Object(l.b)("li",{parentName:"ul"},"Cathy blind-plays her ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," card, and it is a blue 1."),Object(l.b)("li",{parentName:"ul"},"Normally, Alice knows that Bob's discard would only promise the blue 1 (and not promise the green 1 or the yellow 1). However, since the game started on the turn before the clue was given, there is no possible way that Bob could have figured out the exact identity of the card in such a short amount of time."),Object(l.b)("li",{parentName:"ul"},"Thus, since Alice does not see the green 1 or the yellow 1 in other people's hands, Alice knows that she must have the green 1 ",Object(l.b)("strong",{parentName:"li"},"and")," the yellow 1 on her ",Object(l.b)("em",{parentName:"li"},"Finesse Position")," and ",Object(l.b)("em",{parentName:"li"},"Second Finesse Position"),".")))))}b.isMDXComponent=!0},179:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return h}));var i=t(0),n=t.n(i);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),b=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=b(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=b(t),p=i,h=m["".concat(r,".").concat(p)]||m[p]||d[p]||l;return t?n.a.createElement(h,s(s({ref:a},c),{},{components:t})):n.a.createElement(h,s({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);