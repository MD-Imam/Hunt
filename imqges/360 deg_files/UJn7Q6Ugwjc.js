if (self.CavalryLogger) { CavalryLogger.start_js(["QwJJK"]); }

__d("ChatGroupLeaveConversationDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a={show:function(a,c){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupLeaveConversationDialog.react","MercuryIgnoredBlockedParticipants.bs","MessengerAdminGroupUtils"],function(b,d,e,f,h){d.compute(a,function(i){i=i.blocked_ids;var j=d.getThreadMetaNow(a,c),k=f.isPresentInGroupThread(a,i,j),l=(j==null?void 0:j.admins)&&(j==null?void 0:j.admins[a])!==void 0;b.showDialog(function(){return g.jsx(e,{isAdmin:l,isShown:!0,isWorkSyncedChat:h.isWorkSyncedGroupChat(j),onHide:function(){return b.removeDialog()},threadID:c,viewer:a,showCanAddBack:k})})})},"ChatGroupLeaveConversationDialogBootloader")}};e.exports=a}),null);
__d("FantaDropdownMenuLeaveConversation",["ix","cx","fbt","Bootloader","ChatGroupLeaveConversationDialogBootloader","Dialog","FantaTabActions","Image.react","MercuryMessageObject","MercuryMessageActions","MessengerAdminGroupUtils","MessengerState.bs","React","asset","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("MercuryMessageObject").get(),k=b("MercuryMessageActions").get(),l=b("React");function m(a){a=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=a?i._("Leave Chat and Group"):i._("Leave group");return l.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[l.jsx(b("Image.react"),{className:"_6ng3",src:g("637999")}),l.jsx("span",{className:"_6ng4",children:a})]})}function n(a,c,d,e){return function(){b("qex")._("922586")===!0?b("ChatGroupLeaveConversationDialogBootloader").show(d,c):o(a,c,d),q(e)}}function o(a,c,d){var e=[];e.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return p(c,d)}});e.push(b("Dialog").CANCEL);var f,g=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=(a==null?void 0:a.admins)&&(a==null?void 0:a.admins[d])!==void 0;g&&a?f=i._("Leaving this group will remove you as an owner and allow other members to manage the chat thread. You will no longer be able to send and receive messages. You will also be removed from the group."):g?f=i._("You will stop receiving messages from this conversation and people will see that you left. You will also be removed from the group."):a?f=i._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send and receive messages."):f=i._("You will stop receiving messages from this conversation and people will see that you left.");a=g?i._("Leave Group and Chat?"):i._("Leave Conversation?");new(b("Dialog"))().setTitle(a).setBody(f).setButtons(e).show()}function p(a,c){if(!b("MessengerState.bs").isEmptyLocalThread(c,a)){c=j.constructLogMessageObject("source:chat:web",a,"log:unsubscribe",{removed_participants:[c]});k.send(c)}b("FantaTabActions").closeTab(a);return!0}function q(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.LEAVE_CONVERSATION,a)},"FantaDropdownMenuLeaveConversation")}function a(a,c){var d=[];d.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return p(a,c)}});d.push(b("Dialog").CANCEL);var e=i._("You will stop receiving messages from this conversation and people will see that you left."),f=i._("Leave Conversation?");new(b("Dialog"))().setTitle(f).setBody(e).setButtons(d).show()}function c(a,b,c,d,e){return a===!0?{type:"item",label:m(b),onClick:n(b,c,d,e)}:null}e.exports={getMenuItem:c,showLeaveDialog:a}}),null);
__d("WebMessengerConfirmBlockDialog",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a={show:function(a){a=a&&a.length>0?g._("You have blocked {name}",[g._param("name",a)]):g._("You have blocked the sender");var c=g._("You can access messages you've blocked by going to the Filtered Messages list."),d=h.jsx("div",{children:h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("OK"),use:"confirm"})});b("SimpleXUIDialog").showEx(c,a,d)}};e.exports=a}),null);
__d("WebMessengerDeclineMRDialog",["fbt","FantaDropdownMenuLeaveConversation","MessengerParticipants.bs","React","SimpleXUIDialog","MercuryThreadActions","XUIDialogButton.react","XUIDialogCancelButton.react","MercuryIDs","MessengerMessageRequestsTypedLogger","WebMessengerConfirmBlockDialog","FantaTabActions","MessagingTag","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("MercuryThreadActions").get();a={show:function(a,c,d,e){var f=function(a){b("WebMessengerConfirmBlockDialog").show(a);a=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,b("CurrentUser").getID());b("FantaTabActions").closeTab(c);i.changeFolder(c,b("MessagingTag").OTHER);new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(a).setEntryPoint(null).log()};a=e?h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Leave Group"),use:"confirm",onClick:function(a){b("FantaDropdownMenuLeaveConversation").showLeaveDialog(c,b("CurrentUser").getID())}}):h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Block"),use:"confirm",onClick:function(){i.blockMessages(c,"message_request_decline",f)}});var j=b("CurrentUser").isWorkUser(),k=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromFromThreadID(c));k=k==null?void 0:k.short_name;var l=!e&&!j&&k?g._("Don't want to hear from {name}?",[g._param("name",k)]):g._("Decline Conversation");e?e=g._("Would you like to leave the group? Group members will see that you've left."):k?e=j?g._("Message request will be declined. Would you like to block {name} on Workplace Chat or delete these messages?",[g._param("name",k)]):g._("You can permanently delete the conversation, block {name} from sending you messages or tell us if something's wrong. We won't tell {name} you've taken these actions.",[g._param("name",k)]):e=g._({"Workplace chat":"Message request will be declined. Would you like to block this person on Workplace chat or delete these messages?","Messenger":"Message request will be declined. Would you like to block this person on Messenger or delete these messages?"},[g._enum(j?"Workplace chat":"Messenger",{"Workplace chat":"Workplace chat",Messenger:"Messenger"})]);k=b("CurrentUser").getID();var m=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,k);j=function(a){a==="hide"&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()};k=h.jsxs("div",{children:[h.jsx(b("XUIDialogCancelButton.react"),{}),h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Delete"),use:"confirm",onClick:function(){i["delete"](c),d&&d(),new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()}}),a]});b("SimpleXUIDialog").showEx(e,l,k,j,{})}};e.exports=a}),null);
__d("MercuryJewelCountControl",["Arbiter","CurrentUser","MercuryDispatcher","MercuryThreadInformer","MessengerState.bs","UserActivity"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){var c=this,d=b("MercuryDispatcher").get(),e=b("MercuryThreadInformer").get();this.render();d.subscribe("model-update-completed",function(a,b){c.$2(!1)});e.subscribe("unseen-updated",function(){return c.render()});e.subscribe("unread-updated",function(){return c.render()});this.$1=a;this.$1.subscribe("marked-seen",function(){c.$2(!0)})}var c=a.prototype;c.render=function(){var a=b("MessengerState.bs").getUnseenUnreadCountRaw(b("CurrentUser").getID());b("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:a},"state")};c.$2=function(a){(a||this.$1.isOpen()&&b("UserActivity").isActive())&&b("MessengerState.bs").markAsSeen(b("CurrentUser").getID())};return a}();e.exports=a}),null);
__d("MessagesJewelThreadListQPBanner.react",["ix","cx","AsyncRequest","Bootloader","FDSCloseButton.react","FDSLink.react","Image.react","ImageBlock.react","React","XQuickPromotionSimpleLoggingController","goURI","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=g("1414450");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={showBanner:!0},d.$5=function(a,c,e,f){return function(){d.$6(),d.props.promotionID!=null?(new(b("AsyncRequest"))().setURI(b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",d.props.promotionID).setEnum("qp_action",a).setStringToStringMap("qp_instance_log_data",d.props.instanceLogData).getURI()).send(),c==="dialog_url"?b("Bootloader").loadModules(["AsyncDialog"],function(a){a.send(new(b("AsyncRequest"))().setURI(b("nullthrows")(e)))},"MessagesJewelThreadListQPBanner.react"):window.open(e)):e!=null?b("goURI")(e,!0):f&&f()}},d.$2=function(){d.$6(),d.props.promotionID!=null&&new(b("AsyncRequest"))().setURI(b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",d.props.promotionID).setEnum("qp_action","dismiss").setStringToStringMap("qp_instance_log_data",d.props.instanceLogData).getURI()).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){new(b("AsyncRequest"))().setURI(b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",this.props.promotionID).setStringToStringMap("qp_instance_log_data",this.props.instanceLogData).setString("qp_event","view").getURI()).send()};d.render=function(){return this.state.showBanner?i.jsx("div",{className:"_93h-",children:i.jsxs(b("ImageBlock.react"),{spacing:"none",children:[i.jsx("div",{className:"_p32",children:i.jsx(b("Image.react"),{height:"48",width:"48",src:j})}),i.jsxs("div",{className:"content",children:[i.jsx("div",{className:"_14l2",children:this.props.promotionTitle}),i.jsx("div",{className:"_14l3",children:this.props.promotionContent}),this.$1()]}),i.jsx("div",{className:"_93h_",children:i.jsx(b("FDSCloseButton.react"),{onClick:this.$2,shade:"light"})})]})}):null};d.$1=function(){if(this.props.primaryActionTitle!=null&&this.props.secondaryActionTitle!=null)return i.jsxs("div",{className:"_93i0",children:[this.$3(),i.jsx("span",{className:"_93i1",children:"  |  "}),this.$4()]});else if(this.props.primaryActionTitle!=null)return this.$3();else return null};d.$3=function(){return i.jsx(b("FDSLink.react"),{onClick:this.$5("primary",this.props.primaryActionType,this.props.primaryActionURI,this.props.primaryActionCallback),children:this.props.primaryActionTitle})};d.$4=function(){return i.jsx(b("FDSLink.react"),{onClick:this.$5("secondary",this.props.secondaryActionType,this.props.secondaryActionURI,this.props.secondaryActionCallback),children:this.props.secondaryActionTitle})};d.$6=function(){this.setState({showBanner:!1})};return c}(i.Component);e.exports=a}),null);
__d("MercuryPresenceIndicator.react",["cx","fbt","Arbiter","AvailableListConstants","MercuryIDs","PresenceStatus","React","SubscriptionsHandler","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){if(!b("MercuryIDs").isCanonical(d.props.threadID))return null;else{var a=b("MercuryIDs").getUserIDFromThreadID(d.props.threadID);return b("PresenceStatus").get(a)}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){return a.forceUpdate()}))};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.render=function(){var a=this.$2();return i.jsx("span",{className:this.$3(a),children:i.jsx("span",{className:"accessible_elem",children:this.$4(a)})})};d.$3=function(a){return"presenceIndicator"+(b("MercuryIDs").isGroupChat(this.props.threadID)?" groupThread":"")+(a==b("AvailableListConstants").ACTIVE?" presenceActive":"")};d.$4=function(a){switch(a){case b("AvailableListConstants").ACTIVE:return h._("Active");default:return null}};return c}(i.PureComponent);a.propTypes={threadID:b("prop-types").string.isRequired};e.exports=a}),null);
__d("MercurySeenIndicator.react",["cx","MercuryIDs","MessengerReadReceipt.bs","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer);a=this.$1(a);return h.jsx("span",{className:"_3jy5"+(a?" repliedLast":"")+(a&&this.$2()?" seenByAll":"")})};d.$1=function(a){return a===this.props.thread.snippet_sender};d.$2=function(){return b("MessengerReadReceipt.bs").wasSeenByAll(this.props.readReceipts,{thread_id:this.props.thread.thread_id,author:this.props.thread.snippet_sender,timestamp:this.props.thread.timestamp})};return c}(h.Component);a.propTypes={thread:b("prop-types").object.isRequired,viewer:b("prop-types").string.isRequired};e.exports=a}),null);
__d("MercuryThreadPermalink.react",["Link.react","React","WebMessengerThreadPermalinks","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={permalinkURI:"#"},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props)};d.UNSAFE_componentWillReceiveProps=function(a){(a.threadID!==this.props.threadID||a.folder!==this.props.folder)&&this.$1(a)};d.render=function(){return g.jsx(b("Link.react"),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:"button",children:this.props.children})};d.$1=function(a){var c=this;this.setState({permalinkURI:"#"});b("WebMessengerThreadPermalinks").getThreadURI(a.threadID,function(a){return c.setState({permalinkURI:a})},a.folder)};return c}(g.PureComponent);a.propTypes={className:(c=b("prop-types")).string,children:c.any,threadID:c.string.isRequired,viewer:c.string.isRequired,folder:c.string,onClick:c.func};e.exports=a}),null);
__d("MercuryThreadReadToggle.react",["fbt","invariant","MercuryThreadActions","React","ReadToggle.react","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a&&(a.preventDefault(),a.stopPropagation());a=b("MercuryThreadActions").getForFBID(d.props.viewer);d.props.unreadCount>0?a.markRead(d.props.threadID):a.markUnread(d.props.threadID)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){this.props.unreadCount>=0||h(0,6253);return i.jsx(b("ReadToggle.react"),{isRead:this.props.unreadCount===0,onClick:this.$1,readLabel:g._("Mark as Unread"),unreadLabel:g._("Mark as Read")})};return c}(i.PureComponent);a.propTypes={threadID:b("prop-types").string.isRequired,viewer:b("prop-types").string.isRequired,unreadCount:b("prop-types").number.isRequired};e.exports=a}),null);
__d("MessagesJewelInlineThumbnail.react",["cx","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=this.$1();if(a.length===0)return h.jsx("span",{});var b=a[0].thumbnail_url;if(!b)return h.jsx("span",{});b=h.jsx("span",{className:"_56hv",children:h.jsx("i",{style:{backgroundImage:"url("+b+")"}})});a.length>1&&(b=h.jsxs("span",{children:[h.jsx("span",{className:"_56hy"}),b]}));return b};c.$1=function(){var a=this.props.thread;return!a.snippet_attachments?[]:a.snippet_attachments.filter(function(a){return a.attach_type==="photo"})};return b}(h.Component);a.propTypes={thread:b("prop-types").object.isRequired};e.exports=a}),null);
__d("XUIButtonReact.bs",["Utils.bs","ReasonReact.bs","XUIButton.react","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function g(a){if(a!==void 0)switch(a){case 0:return"default";case 1:return"special";case 2:return"confirm"}}function h(a){if(a!==void 0)switch(a){case 0:return"small";case 1:return"medium";case 2:return"large";case 3:return"xlarge";case 4:return"xxlarge"}}function i(a){if(a!==void 0)if(a)return"dark";else return"light"}function a(a,c,d,e,f,j,k,l,m,n,o,p){var q;return b("ReasonReact.bs").wrapJsForReason(b("XUIButton.react"),{className:(q=b("bs_js_null_undefined")).fromOption(a),onClick:q.fromOption(c),label:q.fromOption(d),use:q.fromOption(g(e)),size:q.fromOption(h(f)),borderShade:q.fromOption(i(j)),suppressed:q.fromOption(k),href:q.fromOption(l),target:q.fromOption(m),disabled:b("Utils.bs").optionBoolToBool(n),image:q.fromOption(o)},p)}f.stringOfUse=g;f.stringOfSize=h;f.stringOfBorderShade=i;f.make=a}),null);
__d("MessagesJewelThreadlistRowPendingThreadButtonsReact.bs",["cx","fbt","bs_curry","React","Bootloader","MercuryIDs","ReasonReact.bs","MessagingTag","XUIButtonReact.bs","MercuryThreadActions","WebMessengerDeclineMRDialog","MessagingThreadCustomizationSource"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){var c=a.thread;a=a.userID;var d=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c.thread_id,a);a=function(a){a.preventDefault();a.stopPropagation();b("MercuryThreadActions").get().changeFolder(c.thread_id,b("MessagingTag").INBOX);b("Bootloader").loadModules(["MessengerMessageRequestsTypedLogger.bs"],function(a){b("bs_curry")._1(a.make,0).setAction("message_requests_accept_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id)).setThreadKey(d).log();return 0},"MessagesJewelThreadlistRowPendingThreadButtonsReact.bs");return 0};var e=function(a){b("MercuryThreadActions").get()["delete"](c.thread_id,b("MessagingThreadCustomizationSource").INLINE);return 0},f=function(a){a.preventDefault();var f=b("MercuryIDs").isGroupChat(c.thread_id);b("WebMessengerDeclineMRDialog").show(c.folder,c.thread_id,e,f);a.stopPropagation();b("Bootloader").loadModules(["MessengerMessageRequestsTypedLogger.bs"],function(a){b("bs_curry")._1(a.make,0).setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id)).setThreadKey(d).log();return 0},"MessagesJewelThreadlistRowPendingThreadButtonsReact.bs");return 0};return i.createElement("div",{className:"_zjy"},b("ReasonReact.bs").element(void 0,void 0,b("XUIButtonReact.bs").make(void 0,a,h._("Accept"),2,void 0,void 0,void 0,void 0,void 0,void 0,void 0,[])),b("ReasonReact.bs").element(void 0,void 0,b("XUIButtonReact.bs").make(void 0,f,h._("Decline"),0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,[])))}c=a;f.make=c}),null);
__d("MessagesJewelThreadlistRowPendingThreadButtonsReact.re",["MessagesJewelThreadlistRowPendingThreadButtonsReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("MessagesJewelThreadlistRowPendingThreadButtonsReact.bs").make;f.make=a}),null);
__d("MessagesJewelThreadListRow.react",["ix","cx","fbt","requireCond","Bootloader","CurrentUser","Image.react","ImageBlock.react","ImmutableObject","MercuryPresenceIndicator.react","MercurySeenIndicator.react","MercuryThreadPermalink.react","MercuryThreadReadToggle.react","MercuryThreadSnippet.react","MercuryThreadTimestampReact.re","MercuryThreadTitleSafe.react","MercuryTimestamp","MessageRequestUtils","MessagesJewelInlineThumbnail.react","MessagesJewelThreadlistRowPendingThreadButtonsReact.re","MessengerThreadImageReact.re","MNAdsMessageRequestUtils","React","cr:1339231","UserAgent","XUIButton.react","asset","cxMargin","immutable","prop-types","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("MercuryThreadTimestampReact.re").make,k=b("MessagesJewelThreadlistRowPendingThreadButtonsReact.re").make,l=b("MessengerThreadImageReact.re").jsComponent,m=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$11=function(a){a.preventDefault();a.stopPropagation();b("cr:1339231").logClick({component:"join_call_button",surface:b("qex")._("1277463")?"thread_list":"messages_jewel"});a=window.callWindow&&!window.callWindow.closed&&window.callWindow.focus;if(a)window.callWindow.focus();else{a=d.props.thread;var c=a.rtc_call_data,e=a.thread_fbid;b("Bootloader").loadModules(["StartCallWithZenonOrFBRTC","FBRTCLogger"],function(a,b){b=b.Trigger;a.startGroupCall(c.call_state!="VIDEO_GROUP_CALL",e,[],b.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON,c)},"MessagesJewelThreadListRow.react")}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.isDoNotDisturb&&b("CurrentUser").isWorkUser()?this.$1():this.$2();a=b("UserAgent").isBrowser("Chrome")&&!b("UserAgent").isPlatform("Windows")?m.jsxs("div",{className:"author fixemoji",children:[this.$3(),a]}):m.jsxs("div",{className:"author",children:[m.jsx("strong",{children:this.$3()}),a]});a=m.jsxs(b("ImageBlock.react"),{spacing:"none",children:[m.jsx("div",{className:"_p32",children:this.$4()}),m.jsxs("div",{className:"content",children:[a,m.jsxs("div",{className:"_1iji",children:[m.jsxs("div",{className:"_1ijj",children:[this.$5(),this.$6()]}),m.jsx("div",{children:this.$7()})]}),m.jsx("div",{className:"time",children:b("MNAdsMessageRequestUtils").isAdsMessageRequest(this.props.thread)?b("MNAdsMessageRequestUtils").renderAdsMessageRequestStatus():this.$8()}),this.$9()]}),m.jsxs("div",{children:[m.jsx(b("MessagesJewelInlineThumbnail.react"),{thread:this.props.thread}),m.jsx("div",{className:"x_div",children:this.$10()})]})]});return m.jsx("li",{className:this.props.thread.unread_count>0?"jewelItemNew":"",children:m.jsx(b("MercuryThreadPermalink.react"),{className:"messagesContent",threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick,children:a})})};d.$7=function(){return!b("MessageRequestUtils").shouldShowThreadlistPendingActions(this.props.thread)?null:m.jsx(k,{userID:this.props.viewer,thread:this.props.thread})};d.$1=function(){return m.jsx(b("Image.react"),{className:"_3-9a",src:g("550341")})};d.$2=function(){return!this.props.showPresence?null:m.jsx(b("MercuryPresenceIndicator.react"),{threadID:this.props.thread.thread_id})};d.$4=function(a){return m.jsx(l,{size:48,thread:this.props.thread,useBackground:!0,viewer:this.props.viewer,participants:this.props.participants})};d.$3=function(){return m.jsx(b("MercuryThreadTitleSafe.react"),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:!0})};d.$6=function(){return m.jsx(b("MercuryThreadSnippet.react"),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer})};d.$8=function(){var a;return m.jsx(j,{time:this.props.thread.timestamp,title:(a=b("MercuryTimestamp").getAbsoluteTimestamp(this.props.thread.timestamp))!=null?a:void 0,text:b("MercuryTimestamp").getRelativeTimestamp(this.props.thread.timestamp)})};d.$5=function(){return m.jsx(b("MercurySeenIndicator.react"),{thread:this.props.thread,viewer:this.props.viewer,readReceipts:this.props.readReceipts})};d.$10=function(){return m.jsx(b("MercuryThreadReadToggle.react"),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count})};d.$9=function(){if(!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state==="NO_ONGOING_CALL")return null;b("qex")._("1277463")&&b("cr:1339231").logImpression({surface:"thread_list"});var a=!b("qex")._("1277463")&&window.callWindow&&!window.callWindow.closed?i._("Return to Call"):i._("Join Call");return m.jsx(b("XUIButton.react"),{className:"_4oci",label:a,onClick:this.$11})};return c}(m.PureComponent);a.propTypes={onClick:(c=b("prop-types")).func,participants:c.instanceOf(b("immutable").Map).isRequired,showPresence:c.bool,isDoNotDisturb:c.bool,thread:c.instanceOf(b("ImmutableObject")).isRequired,viewer:c.string.isRequired};e.exports=a}),null);
__d("MessagesJewelThreadlistRowContainer.react",["ChatOpenTab","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","ImmutableObject","MercuryIDs","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","MessagingTag","MessengerMessageRequestsTypedLogger","React","ReactComponentWithPureRenderMixin","TimeSlice","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("createReactClass_DEPRECATED")({displayName:"MessagesJewelThreadlistRowContainer",mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{folder:(a=b("prop-types")).string,readReceipts:a.any,thread:a.instanceOf(b("ImmutableObject")).isRequired,viewer:a.string.isRequired,handleChatTabOpen:a.func},render:function(){return g.jsx(b("MercuryThreadlistRowContainer.react"),{ChildClass:b("MessagesJewelThreadListRow.react"),onClick:this._handleClick,showPresence:b("ChatOpenTab").canOpenTab(),readReceipts:this.props.readReceipts,thread:this.props.thread,viewer:this.props.viewer})},_handleClick:function(a){if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;if(!b("ChatOpenTab").canOpenTab())return;this.props.handleChatTabOpen&&b("TimeSlice").guard(this.props.handleChatTabOpen,"Jewelupdate after Chat tab open",{propagationType:b("TimeSlice").PropagationType.ORPHAN})();a.preventDefault();a=this.props.thread.thread_id;var c=b("CurrentUser").getID();c=b("MercuryIDs").getThreadKeyfromThreadIDUserID(a,c);b("FantaTabActions").openTab(a,["fb_header_dock:jewel_thread"]);b("ChatOpenTabEventLogger").logClickOpen("jewel",a);var d;switch(this.props.folder){case"inbox":d="inbox";break;case"pending":d="pending";break;case"other":d="other";break}this.props.thread.folder!==b("MessagingTag").INBOX&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(b("MercuryIDs").getUserIDFromThreadID(a)).setSurface(d).setFolderType(this.props.thread.folder).setThreadKey(c).log()}});e.exports=c}),null);
__d("MessengerMessageRequestsInfoReact.re",["MessengerMessageRequestsInfoReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("MessengerMessageRequestsInfoReact.bs").make;f.make=a}),null);
__d("MessagesJewelThreadList.react",["cx","fbt","Arbiter","ChatConfig","CurrentUser","EventProfiler","ImmutableObject","Link.react","MessagesJewelThreadListQPBanner.react","MessagesJewelThreadlistRowContainer.react","MessagingTag","MessengerMessageRequestsInfoReact.re","MessengerState.bs","React","ScrollableArea.react","SubscriptionsHandler","TimeSlice","XUISpinner.react","debounce","getViewportDimensions","gkx","prop-types","requestIdleCallback","requireWeak","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerMessageRequestsInfoReact.re").make,j=b("React"),k=160,l=60,m=10;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=new(b("SubscriptionsHandler"))(),d.$4=function(){if(d.props.isLoaded||!d.$5)return;var a=d.$5.getArea();if(!a)return;a.getScrollTop()+a.getClientHeight()>=a.getScrollHeight()-1&&(d.props.onLoadMoreRequest&&d.props.onLoadMoreRequest())},d.$11=function(a){a.preventDefault(),d.props.onLoadMoreRequest&&d.props.onLoadMoreRequest()},d.$10=function(a){d.props.onFilteredRequestsClick&&d.props.onFilteredRequestsClick(a)},d.state={height:d.$3(),hasQP:!1,threadlistBannerQPData:null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$2=Event.listen(window,"resize",b("debounce")(function(){a.setState({height:a.$3()})}));b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click");var c=b("ChatConfig").get("message_jewel_promotion_data");c&&this.setState({hasQP:!0},function(){a.setState({height:a.$3()})});this.$1.addSubscriptions(b("Arbiter").subscribeOnce("hideMessageJewelQP",function(){a.setState({hasQP:!1},function(){a.setState({height:a.$3()})})}),b("Arbiter").subscribeOnce("mercury-jewel/threadlist-banner-top-qp-data",function(b,c){a.setState({threadlistBannerQPData:c})}));c=function(){b("requestIdleCallback")(function(){b("requireWeak")("FantaTabsEagerBootloader",function(a){return a.bootload()})})};b("TimeSlice").guard(c,"JewelOpen fanta eagerbootloader",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};d.componentDidUpdate=function(a){a.threads.length===0&&this.props.threads.length!==0&&(this.props.onRenderThreads&&this.props.onRenderThreads()),b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click")};d.componentWillUnmount=function(){this.$2.remove(),this.$1.release()};d.render=function(){var a=this;return j.jsx(b("MessengerState.bs").jsComponent,{fbid:b("CurrentUser").getID(),children:function(c){return j.jsxs(b("ScrollableArea.react"),{className:"_2q3u",height:a.state.height,onScroll:b("throttle")(a.$4,50),ref:function(b){return a.$5=b},children:[j.jsxs("ul",{className:"jewelContent",children:[a.$6(),a.$7(),a.props.threads.map(function(d){return a.$8(d,b("MessengerState.bs").pendingFolderUnseenCount(c),b("MessengerState.bs").readReceiptsPerThread(c))})]}),a.$9()]})}})};d.$8=function(a,c,d){return j.jsx(b("MessagesJewelThreadlistRowContainer.react"),{folder:this.props.folder,thread:a,viewer:this.props.viewer,handleChatTabOpen:this.props.handleChatTabOpen,readReceipts:d},a.thread_id)};d.$3=function(){var a=(this.props.maxInitialThreadCount||m)*l-(this.state&&this.state.hasQP?260:0);return Math.min(a,b("getViewportDimensions")().height-k)};d.$7=function(){if(this.state.threadlistBannerQPData!=null)return j.jsx(b("MessagesJewelThreadListQPBanner.react"),babelHelpers["extends"]({},this.state.threadlistBannerQPData));else return null};d.$9=function(){if(this.props.isLoaded)return this.props.folder===b("MessagingTag").PENDING&&!b("CurrentUser").isWorkUser()?j.jsx("div",{className:"_16bh _16bi",children:j.jsx(b("Link.react"),{onClick:this.$10,children:h._("See filtered messages")})}):null;return this.props.isLoading?j.jsx(b("XUISpinner.react"),{className:"jewelLoading"}):j.jsx("div",{className:"_v8y",children:j.jsx(b("Link.react"),{href:"#",onClick:this.$11,children:h._("Show Older")})})};d.$6=function(){return!this.props.jewelRequestsUI||this.props.folder!==b("MessagingTag").PENDING?null:j.jsx("li",{className:"_16bh _2ph_",children:j.jsx(i,{})})};return c}(j.Component);a.propTypes={folder:(c=b("prop-types")).string,isLoaded:c.bool,isLoading:c.bool,maxInitialThreadCount:c.number,jewelRequestsUI:c.bool,onFilteredRequestsClick:c.func,onLoadMoreRequest:c.func,onMessageRequestsClick:c.func,onRenderThreads:c.func,threads:c.arrayOf(c.oneOfType([c.instanceOf(b("ImmutableObject")),c.arrayOf(c.instanceOf(b("ImmutableObject")))])).isRequired,viewer:c.string.isRequired};e.exports=a}),null);
__d("MercuryJewelThreadlistControl",["csx","cx","fbt","ArbiterMixin","Bootloader","CSS","CurrentUser","DOM","DOMQuery","Event","MercuryFilters.bs","MercuryServerRequests","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","MessengerURIConstants","React","ReactDOM","mixin"],(function(a,b,c,d,e,f,g,h,i){var j=b("React"),k=b("MessagingTag").PENDING,l=i._("See All in Messenger"),m=i._("See All in Workplace Chat");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$JewelThreadlistControl13=function(a){a.preventDefault(),d.$JewelThreadlistControl9(b("MessagingTag").PENDING,b("MercuryFilters.bs").all)};d.$JewelThreadlistControl14=function(a){a.preventDefault(),d.$JewelThreadlistControl9(b("MessagingTag").OTHER,b("MercuryFilters.bs").all)};c=c.getFlyout();d.$JewelThreadlistControl1=[];d.$JewelThreadlistControl2=b("DOM").find(c,"._3v_l");d.$JewelThreadlistControl3=b("MessagingTag").INBOX;d.$JewelThreadlistControl4=b("MercuryFilters.bs").all;d.$JewelThreadlistControl5=b("CurrentUser").getID();d.$JewelThreadlistControl6={};d.$JewelThreadlistControl7={};d.$JewelThreadlistControl6[b("MessagingTag").INBOX]=b("DOM").find(c,"._1sde");d.$JewelThreadlistControl7[b("MessagingTag").INBOX]=b("DOM").find(c,"._1sdg");d.$JewelThreadlistControl8=b("MercuryServerRequests").getForFBID(d.$JewelThreadlistControl5);b("Event").listen(d.$JewelThreadlistControl6[b("MessagingTag").INBOX],"click",function(){return d.$JewelThreadlistControl9(b("MessagingTag").INBOX,b("MercuryFilters.bs").all)});d.$JewelThreadlistControl6[k]=b("DOM").find(c,"._1sdf");d.$JewelThreadlistControl7[k]=b("DOM").find(c,"._1sdh");b("Event").listen(d.$JewelThreadlistControl6[k],"click",function(){return d.$JewelThreadlistControl9(k,b("MercuryFilters.bs").all)});d.$JewelThreadlistControl10=b("DOM").find(c,"._1c1m");d.$JewelThreadlistControl11=b("DOM").find(c,"._4djt");b("Event").listen(d.$JewelThreadlistControl10,"click",function(a){d.$JewelThreadlistControl12(),a.kill()});d.render();return d}var d=c.prototype;d.render=function(){var a=this;b("Bootloader").loadModules(["MessengerState.bs","MercuryJewelUnreadCount.bs"],function(c,d){b("ReactDOM").render(j.jsx(c.jsComponent,{fbid:a.$JewelThreadlistControl5,children:function(d){return j.jsx(b("MercuryThreadlistContainer.react"),{ChildClass:b("MessagesJewelThreadList.react"),folder:a.$JewelThreadlistControl3,filter:a.$JewelThreadlistControl4,jewelRequestsUI:!0,viewer:a.$JewelThreadlistControl5,onMessageRequestsClick:a.$JewelThreadlistControl13,onFilteredRequestsClick:a.$JewelThreadlistControl14,threadIDs:a.$JewelThreadlistControl1,threads:c.threads(d),threadlistOrderMap:c.threadlistOrderMap(d)})}}),a.$JewelThreadlistControl2);var e=a.$JewelThreadlistControl7[b("MessagingTag").INBOX],f=a.$JewelThreadlistControl7[k];e&&b("ReactDOM").render(j.jsx(d.jsComponent,{viewer:a.$JewelThreadlistControl5,folder:b("MessagingTag").INBOX}),e);f&&b("ReactDOM").render(j.jsx(d.jsComponent,{viewer:a.$JewelThreadlistControl5,folder:k}),f)},"MercuryJewelThreadlistControl")};d.$JewelThreadlistControl12=function(){this.$JewelThreadlistControl8.markFolderAsRead(this.$JewelThreadlistControl3)};d.$JewelThreadlistControl9=function(a,c){this.$JewelThreadlistControl1=[];if(this.$JewelThreadlistControl3!==a||this.$JewelThreadlistControl4!==c){var d=this.$JewelThreadlistControl3,e=a===b("MessagingTag").INBOX,f=a;this.$JewelThreadlistControl6[f]&&b("CSS").addClass(this.$JewelThreadlistControl6[f],"_1sdd");this.$JewelThreadlistControl6[d]&&b("CSS").removeClass(this.$JewelThreadlistControl6[d],"_1sdd");f=b("CurrentUser").isWorkUser()?m:l;this.$JewelThreadlistControl3=a;this.$JewelThreadlistControl4=c;e?(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID()):a==k&&(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX+b("MessengerURIConstants").MESSAGE_REQUESTS_PATH,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID());this.render()}};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("MercuryJewel",["Arbiter","EventProfiler","MercuryDispatcher","MercuryJewelCountControl","MercuryServerPayloadPreprocessor","gkx"],(function(a,b,c,d,e,f){var g=!1,h=!1,i=null;a=function(){"use strict";function a(a,c){var d=this;b("gkx")("802350")?b("MercuryDispatcher").get().handlePreprocessedUpdate(c):b("MercuryServerPayloadPreprocessor").get().handleUpdate(c);this.$1=new(b("MercuryJewelCountControl"))(a);a.subscribeOnce("opened",function(){d.$2(a,c.jewel_threadlist_top_promotion_data)});a.subscribeOnce("user-open",function(){d.$3(a)});a.subscribe("updated",function(b,e){e&&e.count>0&&d.$2(a,c.jewel_threadlist_top_promotion_data)})}var c=a.prototype;c.$2=function(a,c){var e=this;this.$3(a);g||(g=!0,a.isOpen()||(i=b("EventProfiler").notifyRunningEagerInteraction(["Messages_Jewel_Button"],"click")),d(["MercuryJewelThreadlistControl"],function(b){e.$4=new b(a)}),b("Arbiter").inform("mercury-jewel/opened",null,"state"),b("Arbiter").inform("mercury-jewel/threadlist-banner-top-qp-data",c))};c.$3=function(a){!h&&a.isOpen()&&(h=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstMercuryJewelOpen"),i&&i())};return a}();e.exports=a}),null);
__d("MercuryJewelUnreadCount.bs",["fbt","React","bs_js_dict","bs_caml_option","ReasonReact.bs","MessengerState.bs","MercuryThreadlistConstants"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("ReasonReact.bs").statelessComponent("MercuryJewelUnreadCount");function a(a){var c=a.viewer,d=a.folder;return h.jsx(b("MessengerState.bs").Provider.make,{fbid:c,children:function(a){var c=b("bs_js_dict").get(a.unreadCounts,d);c=c!==void 0?b("bs_caml_option").valFromOption(c).size:b("bs_js_dict").get(a.initialUnreadCounts,d);if(c!==void 0){a=c;if(a===0)return null;else return g._("({unread_count})",[g._param("unread_count",String(a>b("MercuryThreadlistConstants").MAX_UNREAD_COUNT?b("MercuryThreadlistConstants").MAX_UNREAD_COUNT:a))])}else return null}})}d=a;e=a;f.component=c;f.make=d;f.jsComponent=e}),null);