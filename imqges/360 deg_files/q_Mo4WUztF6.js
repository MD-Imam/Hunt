if (self.CavalryLogger) { CavalryLogger.start_js(["wk9DY"]); }

__d("CometRouterRouteInfoContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext();e.exports=c}),null);
__d("useRoutePassthroughProps",["CometRouterRouteInfoContext","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){var a=g(b("CometRouterRouteInfoContext"));return a==null?void 0:a.passthroughProps}e.exports=a}),null);
__d("useCometConfirmationDialogBlue",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=b("React");var i=a.useCallback,j=a.useRef;c=function(){return[i(function(a,c,d){var e=a.body,f=a.cancel,i=a.confirm;a=a.title;d===void 0&&(d=function(){});d=h.jsxs("div",{children:[h.jsx(b("XUIDialogButton.react"),{action:"cancel","data-testid":void 0,label:(f=f)!=null?f:g._("Cancel"),onClick:d}),h.jsx(b("XUIDialogButton.react"),{action:"cancel","data-testid":void 0,label:(f=i)!=null?f:g._("OK"),onClick:c,use:"confirm"})]});b("SimpleXUIDialog").showEx(e,a,d)},[]),j(null)]};e.exports=c}),null);
__d("UFI2SubscriptionCounter",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();function h(a){return g.get(a)||{count:0,subscription:null}}function a(a,b){var c=h(a),d=c.subscription;c=c.count;var e=!1;g.set(a,{count:c+1,subscription:c===0?b():d});return{dispose:function(){var b=h(a),c=b.subscription;b=b.count;if(e||c==null||b===0)return;e=!0;g.set(a,{count:b-1,subscription:b===1?c.dispose():c})}}}e.exports={subscribeOnce:a}}),null);
__d("CowatchingUFIConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({LIVE_FEED_MAX_SHOWN_COMMENTS:4,LIVE_FULLSCREEN_MAX_SHOWN_COMMENTS:50,VIDEO_HOME_LIVE_TAB_MAX_SHOWN_COMMENTS:20});e.exports=a}),null);
__d("useLiveFeedStoryVideoTimestampBlue",["React","UFIVideoPlayerRegistry","useInterval"],(function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useState;c=function(a,c){var d=g(0),e=d[0],f=d[1];b("useInterval")(function(){if(a==null||c.current==null)return;var d=b("UFIVideoPlayerRegistry").getAvailableVideoPlayerControllerForElement(c.current,a);if(d!=null&&d.isWatchAndScroll())return;d=b("UFIVideoPlayerRegistry").getAvailableVideoPlayerControllerTimeForElement(c.current,a);if(d==null)return;f(d)},1e3,[a,c]);return e};e.exports=c}),null);
__d("useUFI2AutoScroller.react",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=b("React");var h=d.useCallback,i=d.useContext,j=d.useEffect,k=d.useRef,l=d.useState,m=150,n=g.createContext({containerRef:{current:null},isAutoScrollPaused:!1,lastChildRef:{current:null},setNumChildrenSincePaused:function(){}});function a(a){var b=i(n),c=b.containerRef,d=b.isAutoScrollPaused,e=b.lastChildRef,f=b.setNumChildrenSincePaused;j(function(){if(!d){c.current!=null&&(c.current.scrollTop=c.current.scrollHeight);return}var b=g.Children.map(a,function(a){return a.key}),h=e.current;e.current=b[b.length-1];if(h!=null){var i=0;for(var j=b.length-1;j>=0;--j)if(h!==b[j])i++;else break;f(function(a){return a+i})}},[a,c,d,e,f]);return a}function c(a,b){b===void 0&&(b=m);var c=k(null),d=k(null),e=l(!1),f=e[0],i=e[1];e=l(0);var o=e[0],p=e[1];e=h(function(){if(c.current==null)return;c.current.scrollTop=c.current.scrollHeight;i(!1)},[]);var q=h(function(){if(c.current==null)return;var a=c.current.scrollHeight-(c.current.scrollTop+c.current.clientHeight)>b;f!==a&&i(a)},[f,b]);j(function(){f||(p(0),d.current=null)},[f]);a=g.jsx(n.Provider,{value:{containerRef:c,isAutoScrollPaused:f,lastChildRef:d,setNumChildrenSincePaused:p},children:a});return{childrenWithContext:a,containerRef:c,handleScroll:q,isAutoScrollPaused:f,numChildrenSincePaused:o,scrollToBottom:e}}e.exports={useAutoScrollChildren:a,useUFI2AutoScroller:c}}),null);