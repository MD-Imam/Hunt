if (self.CavalryLogger) { CavalryLogger.start_js(["KVsLN"]); }

__d("CustomizeChatColorItemReact.re",["CustomizeChatColorItemReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("CustomizeChatColorItemReact.bs").make;f.make=a}),null);
__d("MessengerThreadTheme.re",["MessengerThreadTheme.bs"],(function(a,b,c,d,e,f){a=b("MessengerThreadTheme.bs").isGradient;f.isGradient=a}),null);
__d("CustomizeChatGrid.react",["cx","fbt","Grid.react","Keys","React","MessengerThreadTheme.re"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("Grid.react").GridItem,k=b("MessengerThreadTheme.re").isGradient;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){var c=this;return function(d){d.keyCode===b("Keys").RETURN&&(d.preventDefault(),c.props.onSelect(a))}};d.$2=function(a){return h._("Pick theme {theme type} {theme choice}",[h._param("theme type",k(a)?"gradient":"solid color"),h._param("theme choice",a.accessibility_label)])};d.render=function(){var a=this,c=this.props,d=c.items,e=c.isSelectedAccessor,f=c.renderItem,g=c.onSelect;c=c.cols;return i.jsx(b("Grid.react"),{cols:c,className:"_3dz6",alignh:"center",children:d.map(function(b,c){var d=e(b);return i.jsx(j,{"aria-label":a.$2(b),className:"_3dz9",onClick:function(){return g(b)},onKeyDown:a.$1(b),role:"button",tabIndex:"0",children:i.jsx("div",{className:"_3dza"+(d?" _3dzb":""),children:f(b,d)})},c)})})};return c}(i.Component);e.exports=a}),null);
__d("SpinnerWithTimeout.react",["FDSSpinner.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showSpinner:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2=!0};d.componentWillUnmount=function(){this.$1&&clearTimeout(this.$1),this.$2=!1};d.$3=function(){this.$2&&this.setState({showSpinner:!0})};d.render=function(){var a=this,c=this.props,d=c.timeout;c=babelHelpers.objectWithoutPropertiesLoose(c,["timeout"]);this.$1||(this.$1=setTimeout(function(){a.$3()},d));d=this.state.showSpinner;return d?g.jsx(b("FDSSpinner.react"),babelHelpers["extends"]({},c)):g.jsx("div",{})};return c}(g.Component);a.defaultProps={shade:"dark",size:"large"};e.exports=a}),null);
__d("CustomizeChatColorGrid.react",["cx","CustomizeChatColorItemReact.re","CustomizeChatGrid.react","SpinnerWithTimeout.react","MercuryThreadActions","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("CustomizeChatColorItemReact.re").make,i=b("MercuryThreadActions").get(),j=b("React"),k="196241301102133";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){var b=c.props.threadID;i.changeThreadTheme(b,a.id,"SETTINGS");c.props.onSelect()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.thread;a=a.themes;if(!a||a.length===0||!c)return j.jsx("div",{className:"_1s20",children:j.jsx(b("SpinnerWithTimeout.react"),{timeout:1e3,center:!0})});var d=c.theme_id||k;return j.jsx(b("CustomizeChatGrid.react"),{items:a,cols:4,isSelectedAccessor:function(a){return a.id==d},onSelect:this.$1,renderItem:function(a,b){return j.jsx(h,{theme:a})}})};return c}(j.Component);e.exports=a}),null);
__d("CustomizeTabs",[],(function(a,b,c,d,e,f){a=Object.freeze({EMOJI:"EMOJI",COLOR:"COLOR"});e.exports={CustomizeTitleEnum:a}}),null);
__d("CustomizeThreadDialogEmojiTabPage.react",["cx","ChatEmojiCategories","ChatEmojiPicker.react","EmojiLikeConstants","React","MercuryThreadActions","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("MercuryThreadActions").get();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={emojis:d.getInitialEmojis(),currentCategoryIndex:1},d.$1=!1,d.handleEmojiChange=function(a){i.changeThreadEmoji(d.props.threadID,a,"thread_settings"),d.props.onSelect&&d.props.onSelect()},d.$2=function(){if(d.$1)return;d.$1=!0;var a=d.state.currentCategoryIndex,c=Math.min(b("ChatEmojiCategories").categories.length,a+2),e=b("ChatEmojiCategories").categories.slice(a,c).reduce(function(a,b){b.emojis&&b.emojis.length>0&&(a=a.concat(b.emojis));return a},[]).filter(function(a){return a&&a.length<=2});d.setState(function(a){d.$1=!1;c===b("ChatEmojiCategories").categories.length&&(d.$2=b("emptyFunction"));return{emojis:a.emojis.concat(e),currentCategoryIndex:c}})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.getInitialEmojis=function(){var a=b("ChatEmojiCategories").categories[0].emojis;return[b("EmojiLikeConstants").FB_THUMBS_UP_EMOJI].concat(a).filter(function(a){return a&&a.length<=2})};d.render=function(){var a=this.props.thread;a=a&&a.custom_like_icon?a.custom_like_icon.emoji:String.fromCodePoint.apply(String,b("EmojiLikeConstants").FB_THUMBS_UP_EMOJI);return h.jsx("div",{className:"_69n_",children:h.jsx(b("ChatEmojiPicker.react"),{emojiChoices:this.state.emojis,emojiSize:b("EmojiLikeConstants").size.LARGE,onSelect:this.handleEmojiChange,columns:5,alignh:"center",currentEmoji:a,onScroll:this.$2})})};return c}(h.Component);e.exports=a}),null);
__d("CustomizeThreadDialogTabPages.react",["cx","React","XUIPageNavigation.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("XUIPageNavigation.react").Group,j=b("XUIPageNavigation.react").Item;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={activePageKey:c.props.defaultPageKey||c.findPage().key},c.$1=function(a){c.setState({activePageKey:a});return!0},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.findPage=function(a){var b=this.props.pages.find(function(b){return b.key===a});return b||this.props.pages[0]};d.render=function(){return h.jsxs("div",{className:"_1pff",children:[h.jsx(b("XUIPageNavigation.react"),{defaultActiveTabKey:this.state.activePageKey,onTabClick:this.$1,children:h.jsx(i,{children:this.props.pages.map(function(a){return h.jsx(j,{className:"_1pfn",children:a.title},a.key)})})}),h.jsx("div",{className:"_1pfo",children:this.findPage(this.state.activePageKey).content})]})};return c}(h.Component);e.exports=a}),null);
__d("CustomizeThreadDialog.react",["fbt","CustomizeChatColorGrid.react","CustomizeTabs","CustomizeThreadDialogEmojiTabPage.react","CustomizeThreadDialogTabPages.react","CustomizeThreadThemeUtil","FDSModal.react","FDSModalHeader.react","FDSSection.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("CustomizeTabs").CustomizeTitleEnum,i=b("CustomizeThreadThemeUtil").fetchThemesForChat,j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={themes:null},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=!0;i(function(b){a.$1&&a.setState({themes:b})})};d.componentWillUnmount=function(){this.$1=!1};d.render=function(){if(!this.props.show)return null;var a=this.props.threadID,c=g._("Customize your chat");a=[{key:h.COLOR,title:g._("Color"),content:j.jsx(b("CustomizeChatColorGrid.react"),{thread:this.props.thread,threadID:a,onSelect:this.props.onHide,themes:this.state.themes})},{key:h.EMOJI,title:g._("Emoji"),content:j.jsx(b("CustomizeThreadDialogEmojiTabPage.react"),{thread:this.props.thread,threadID:a,onSelect:this.props.onHide})}];return j.jsx(b("FDSModal.react"),{header:j.jsx(b("FDSModalHeader.react"),{title:c}),footer:null,isShown:!0,label:"Customize Chat",onHide:this.props.onHide,width:400,children:j.jsx(b("FDSSection.react"),{hasPadding:!1,children:j.jsx(b("CustomizeThreadDialogTabPages.react"),{pages:a,defaultPageKey:this.props.defaultPageKey})})})};return c}(j.Component);e.exports=a}),null);
__d("FantaDropdownMenuAddFriends",["ix","cx","fbt","Bootloader","FantaTabSheetActions","Image.react","React","asset","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(a,c,d,e){if(b("getPageIDFromThreadID")(c)||e)return null;a=d?i._("Add people"):i._("Create group");return j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("637973")}),j.jsx("span",{className:"_6ng4",children:a})]})}function l(a,c,d,e){return function(){b("FantaTabSheetActions").openAddMoreFriendsSheet(d),m(e)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.ADD_FRIENDS,a)},"FantaDropdownMenuAddFriends")}function a(a,b,c,d,e,f,g){if(g)return null;g=k(b,c,d,e);return g?{type:"item",label:g,onClick:l(a,b,c,f)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuBlock",["ix","cx","fbt","Bootloader","CurrentUser","Image.react","MercuryIDs","React","MercuryThreadActions","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=b("MercuryThreadActions").get();function l(a,b){return!a&&!!b}function m(a,c){return!a&&!c&&!b("CurrentUser").isWorkUser()}function n(a,c){var d;a?d=i._("Block"):c&&(d=i._("Unblock"));return d?j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("637979")}),j.jsx("span",{className:"_6ng4",children:d})]}):null}function o(a,b,c,d,e){return function(){k.blockMessages(d,"thread_settings"),p(e,!0,d,c)}}function p(a,c,d,e){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,d){b.logMenuItem(c?d.OPTIONS.BLOCK:d.OPTIONS.UNBLOCK,a)},"FantaDropdownMenuBlock"),b("Bootloader").loadModules(["MessengerThreadDamagingActionsTypedLogger"],function(a){new a().setName("messenger_integrity_block_view_enter").setEntryPoint("thread_settings").setOtherUserID(b("MercuryIDs").getThreadFBIDFromThreadID(d)).setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d)).setClientUserID(e).setSource("canonical_thread").log()},"FantaDropdownMenuBlock")}function a(a,c,d,e,f,g,h,i){if(h||g||e)return null;h=b("MercuryIDs").getUserIDFromThreadID(c);if(h&&h===a)h=g=!1;else{f=f&&f.message_count===0;g=l(e,d);h=m(g,f)}e=n(h,g);d=o(h,g,a,c,i);return e&&d?{type:"item",label:e,onClick:d}:null}e.exports={getMenuItem:a}}),null);
__d("ChatGroupBlockMemberDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a={show:function(a,c,d){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupBlockMemberDialog.react"],function(b,e,f){b.showDialog(function(){return g.jsx(e.jsComponent,{fbid:a,children:function(a){var h=e.thread(a,c);return h==null?null:g.jsx(f,{blockedIDs:e.blockedIds(a),isShown:!0,onHide:function(){return b.removeDialog()},participants:d,thread:h})}})})},"ChatGroupBlockMemberDialogBootloader")}};e.exports=a}),null);
__d("FantaDropdownMenuBlockMember",["ix","cx","fbt","Bootloader","ChatGroupBlockMemberDialogBootloader","CurrentUser","Image.react","MercuryIDs","React","asset","immutable"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(){return j.jsxs("div",{className:"_6pdg",children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("637979")}),j.jsx("span",{className:"_6ng4",children:i._("Block a member")})]})}function l(a,c,d,e){b("ChatGroupBlockMemberDialogBootloader").show(a,c,d),m(e)}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.BLOCK_MEMBERS,a)},"FantaDropdownMenuBlockMember")}function n(a,b,c,d){var e=k(),f=function(){return l(a,b,c,d)};return{type:"item",label:e,onClick:f}}function a(a,c,d,e,f,g,h){if(d!==!0||e==null||b("CurrentUser").isWorkUser())return null;d=f;g!=null&&g.size>0&&(d=g.toList().toArray());if(d==null)return null;var i=b("MercuryIDs").getParticipantIDFromUserID(a);d=d.filter(function(a){return a.id!==i});return d.length===0?null:n(a,c,d,h)}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuBlockPageMessages",["ix","cx","fbt","Bootloader","CurrentUser","Image.react","ImmutableObject","MercuryDispatcher","React","MercuryThreadActions","asset","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=b("MercuryThreadActions").get();function l(a){a=b("gkx")("1266350")?a?i._("Unblock"):i._("Block"):a?i._("Turn on messages"):i._("Turn off messages");return j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("640714")}),j.jsx("span",{className:"_6ng4",children:a})]})}function m(a,c,d){if(!c)return;c=b("ImmutableObject").set(c,{is_messenger_blocked:d});d={participants:[c],actions:[],newlyAddedClientIDs:{},pinned_thread_ids:[],preprocessed:!0};b("MercuryDispatcher").getForFBID(a).handleUpdate(d)}function n(a,b,c,d,e){return d?function(){k.unblockOnMessengerDotCom(b),m(a,c,!1),o(e,!1)}:function(){k.blockOnMessengerDotCom(b),m(a,c,!0),o(e,!0)}}function o(a,c){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,d){b.logMenuItem(c?d.OPTIONS.BLOCK_PAGE_MESSAGES:d.OPTIONS.UNBLOCK_PAGE_MESSAGES,a)},"FantaDropdownMenuBlockPageMessages")}function a(a,c,d,e){if(!c||!d||b("CurrentUser").isWorkUser())return null;var f=d.is_messenger_blocked;return{type:"item",label:l(f),onClick:n(a,c,d,f,e)}}e.exports={getMenuItem:a}}),null);
__d("AARRGGBBColor.re",["AARRGGBBColor.bs"],(function(a,b,c,d,e,f){a=b("AARRGGBBColor.bs").toHex;f.toHex=a}),null);
__d("FantaDropdownMenuChangeColor",["ix","cx","fbt","AARRGGBBColor.re","Bootloader","ChatConfig","CustomizeTabs","Image.react","MercuryIDs","MessengerAdminGroupUtils","MessengerColors","MessengerState.bs","React","asset","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("CustomizeTabs").CustomizeTitleEnum,k=b("React"),l="196241301102133";function m(a,c){var d=null,e=a&&a.theme_id||l;c.forEach(function(c){a&&c.id==e&&(d=k.jsx("div",{className:"_6ng3","aria-label":c.accessibility_label,style:{backgroundColor:b("AARRGGBBColor.re").toHex(c.fallback_color),backgroundImage:Array.isArray(c.gradient_colors)?b("MessengerColors").makeRadialGradient(c.gradient_colors.map(b("AARRGGBBColor.re").toHex),c.is_reversed_for_picker||!1):null,display:"inline-block",borderRadius:"50%"}}))});return d}function n(a,c,d,e){if(b("getPageIDFromThreadID")(d))return null;d=b("MercuryIDs").getUserIDFromParticipantID("fbid:"+a);a=c&&d&&b("MessengerAdminGroupUtils").canUpdateThreadCustomization(c,d);if(a&&b("ChatConfig").get("chat_tab_custom_color")){d=k.jsx(b("Image.react"),{className:"_6ng3",src:g("638009")});a=m(c,e)||d;return k.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[a,k.jsx("span",{className:"_6ng4",children:i._("Color")})]})}return null}function o(a,c,d,e,f){return function(){if(b("MessengerState.bs").isEmptyLocalThread(a,d)||!c){p(f);return}e(j.COLOR);p(f)}}function p(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.CHANGE_COLOR,a)},"FantaDropdownMenuChangeColor")}function a(a,b,c,d,e,f,g){if(!e||g)return null;g=n(a,b,c,e);return g?{type:"item",label:g,onClick:o(a,b,c,d,f)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuChangeEmoji",["ix","cx","fbt","Bootloader","ChatConfig","CustomizeTabs","EmojiLikeConstants","Image.react","MessengerAdminGroupUtils","MessengerHotLikeUtils","MessengerState.bs","MessengerSupportedEmojiUtils","React","asset","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("CustomizeTabs").CustomizeTitleEnum,k=b("React"),l=128077;function m(a,c,d){if(b("getPageIDFromThreadID")(d))return null;d=c&&a&&b("MessengerAdminGroupUtils").canUpdateThreadCustomization(c,a);if(d&&b("ChatConfig").get("chat_tab_custom_color")){a=k.jsx(b("Image.react"),{className:"_6ng3",src:g("637960")});d=b("MessengerHotLikeUtils").getCustomEmojiFromThread(c);c=d&&d.emoji||String.fromCodePoint(l);d=b("MessengerSupportedEmojiUtils").getNewEmojiData(c,b("EmojiLikeConstants").size.XSMALL);d&&(a=k.jsx(b("Image.react"),{className:"_6ng3",src:d.url,alt:n(c)}));return k.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[a,k.jsx("span",{className:"_6ng4",children:i._("Emoji")})]})}return null}function n(a){return i._("{selected custom emoji}",[i._param("selected custom emoji",a)])}function o(a,c,d,e,f){return function(){if(b("MessengerState.bs").isEmptyLocalThread(a,d)||!c){p(f);return}e(j.EMOJI);p(f)}}function p(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.CHANGE_EMOJI,a)},"FantaDropdownMenuChangeEmoji")}function a(a,b,c,d,e,f){if(f)return null;f=m(a,b,c);return f?{type:"item",label:f,onClick:o(a,b,c,d,e)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuConversationName",["ix","cx","fbt","Bootloader","FantaTabSheetActions","Image.react","MessengerAdminGroupUtils","MessengerState.bs","React","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(a,c,d,e,f){d=d&&b("MessengerAdminGroupUtils").canUpdateThreadCustomization(d,f)&&a&&!b("MessengerState.bs").isEmptyLocalThread(f,e)&&!c;return!d?null:j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("638019")}),j.jsx("span",{className:"_6ng4",children:i._("Conversation name")})]})}function l(a,c){return function(){b("FantaTabSheetActions").openNameConversationSheet(a),m(c)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.CONVERSATION_NAME,a)},"FantaDropdownMenuConversationName")}function a(a,b,c,d,e,f){a=k(a,b,c,d,e);return a!==null?{type:"item",label:a,onClick:l(d,f)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuDeleteConversation",["ix","cx","fbt","Bootloader","CurrentUser","FantaTabActions","Image.react","React","asset","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(){var a=b("CurrentUser").isWorkUser()?i._("Delete Message History"):i._("Delete conversation");return j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("638027")}),j.jsx("span",{className:"_6ngn",children:a})]})}function l(a,c){return function(){b("Bootloader").loadModules(["WebMessengerDeleteThreadDialog"],function(d){d.show(a,function(){b("FantaTabActions").deleteTab(a),n(c)},function(){return o(c)})},"FantaDropdownMenuDeleteConversation"),m(c)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.DELETE_CONVERSATION,a)},"FantaDropdownMenuDeleteConversation")}function n(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.DELETE_CONVERSATION_TRIGGERED,a)},"FantaDropdownMenuDeleteConversation")}function o(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.endFunnel(a)},"FantaDropdownMenuDeleteConversation")}function a(a,b){return{type:"item",label:k(),onClick:l(a,b)}}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuEditMentorshipPreferences",["ix","cx","fbt","Bootloader","Image.react","MessengerState.bs","React","XGroupsController","asset","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(){return j.jsxs("div",{className:"_6pdg",children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("637920")}),j.jsx("span",{className:"_6ng4",children:i._("Edit Mentorship Preferences")})]})}function l(a,c,d){return function(){b("MessengerState.bs").getThreadMeta(a,c,function(a){if(a){a=a==null?void 0:(a=a.linked_mentorship_programs)==null?void 0:(a=a.nodes[0])==null?void 0:(a=a.program_group)==null?void 0:a.id;b("goURI")(b("XGroupsController").getURIBuilder().setString("idorvanity",a).setEnum("view","mentorship_application").setString("ref","chat").getURI(),!0)}},null),m(d)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.EDIT_MENTORSHIP_PREFERENCES,a)},"FantaDropdownMenuEditMentorshipPreferences")}function a(a,b,c,d){return d?{type:"item",label:k(),onClick:l(a,b,c)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuEditNickname",["ix","cx","fbt","Bootloader","Image.react","MessengerAdminGroupUtils","MessengerState.bs","React","asset","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(a,c){if(b("getPageIDFromThreadID")(c))return!1;c=b("MessengerState.bs").getThreadMetaNow(a,c);c=c&&c.participants&&a&&b("MessengerAdminGroupUtils").canUpdateThreadCustomization(c,a);return!!c}function l(a,c){return!k(a,c)?null:j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("638019")}),j.jsx("span",{className:"_6ng4",children:i._("Nicknames")})]})}function m(a,c,d){return function(){if(b("MessengerState.bs").isEmptyLocalThread(a,c)){n(d);return}a&&b("Bootloader").loadModules(["EditChatTabNicknamesDialog"],function(d){d.show(b("MessengerState.bs").getThreadMetaNow(a,c),a)},"FantaDropdownMenuEditNickname");n(d)}}function n(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.EDIT_NICKNAME,a)},"FantaDropdownMenuEditNickname")}function a(a,b,c,d){if(d)return null;d=l(a,b);return d?{type:"item",label:d,onClick:m(a,b,c)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuFunnelState",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1=Math.floor(Math.random()*65536)}var b=a.prototype;b.getInstanceID=function(){return this.$1};return a}();e.exports=a}),null);
__d("FantaDropdownMenuIgnoreMessages",["ix","cx","fbt","Bootloader","CurrentUser","Image.react","MercuryIDs","React","MercuryThreadActions","asset","nullthrows"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=b("MercuryThreadActions").get();function l(a,c,d,e){c=b("MercuryIDs").getUserIDFromThreadID(c);return e||c&&c===a||d||b("CurrentUser").isWorkUser()?null:j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("638034")}),j.jsx("span",{className:"_6ng4",children:i._("Ignore messages")})]})}function m(a,c,d){return function(){k.ignoreMessages(c?b("MercuryIDs").getThreadFBIDFromThreadID(a):b("nullthrows")(b("MercuryIDs").getUserIDFromThreadID(a))),n(d)}}function n(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.IGNORE_MESSAGES,a)},"FantaDropdownMenuIgnoreMessages")}function a(a,b,c,d,e,f){a=l(a,b,c,e);return a?{type:"item",label:a,onClick:m(b,d,f)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuMuteConversation",["ix","cx","fbt","Bootloader","Image.react","MercuryThreadInfo","MercuryThreadMuter","React","formatDate","MercuryThreadActions","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=b("MercuryThreadActions").get();function l(a){if(a>0)if(a<86401)return null;else{var c=new Date(a*1e3).getDay()===new Date().getDay();return c?i._("Off until {time}",[i._param("time",b("formatDate")(a,"g:ia"))]):i._("Off until {time} tomorrow",[i._param("time",b("formatDate")(a,"g:ia"))])}else return i._("Off indefinitely")}function m(a,c,d){c=a&&a.mute_until?l(a.mute_until):null;a=d?j.jsx("span",{className:"_6ng4","data-testid":void 0,children:i._("Unmute conversation")}):j.jsx("span",{className:"_6ng4","data-testid":void 0,children:i._("Mute conversation")});c&&(a=j.jsxs("div",{children:[j.jsx("span",{className:"_6ng4","data-testid":void 0,children:i._("Unmute conversation")}),j.jsx("span",{className:"_6ng7",children:c})]}));return j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:d?g("637933"):g("637938")}),a]})}function n(a,c,d,e,f){function g(a,b){k.updateMuteSetting(a,b)}function a(){k.unmute(d),o(f,!1)}function c(){b("MercuryThreadMuter").showMuteChangeDialog.call(null,d,void 0,g),o(f,!0)}return e?a:c}function o(a,c){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,d){b.logMenuItem(c?d.OPTIONS.MUTE_CONVERSATION:d.OPTIONS.UNMUTE_CONVERSATION,a)},"FantaDropdownMenuMuteConversation")}function a(a,c,d,e,f){if(f||c!=null&&c.message_count===0)return null;f=!!c&&b("MercuryThreadInfo").isMuted(c);return{type:"item",label:m(c,d,f),onClick:n(a,c,d,f,e)}}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuOpenFacebookPage",["ix","cx","fbt","Bootloader","CurrentUser","Image.react","React","asset","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(){return j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:g("641100")}),j.jsx("span",{className:"_6ng4",children:i._("View page")})]})}function l(a,c){return function(){a!=null&&b("goURI")(a),m(c)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.OPEN_FACEBOOK_PAGE,a)},"FantaDropdownMenuOpenFacebookPage")}function a(a,c,d){return a&&c&&c.href!=null&&!b("CurrentUser").isWorkUser()?{type:"item",label:k(),onClick:l(c.href,d)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuOpenFullConversation",["ix","cx","fbt","Bootloader","CurrentUser","Image.react","Link.react","React","asset","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(a){var c=b("CurrentUser").isWorkUser()?g("638041"):g("637928"),d=b("CurrentUser").isWorkUser()?i._("Open in Workplace Chat"):i._("Open in Messenger");return j.jsxs(b("Link.react"),{href:a,className:"_6pdg","data-testid":void 0,children:[j.jsx(b("Image.react"),{className:"_6ng3",src:c}),j.jsx("span",{className:"_6ng4",children:d})]})}function l(a,c){return function(){b("goURI")(a),m(c)}}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.OPEN_FULL_CONVERSATION,a)},"FantaDropdownMenuOpenFullConversation")}function a(a,b){return a!==null&&a!==void 0?{type:"item",label:k(a),onClick:l(a,b)}:null}e.exports={getMenuItem:a}}),null);
__d("FantaDropdownMenuPeopleList",["ix","cx","fbt","AsyncDialog","AsyncRequest","Bootloader","ChatGroupMembershipDialogBootloader","Image.react","MessengerAdminGroupUtils","MessengerState.bs","React","URI","immutable","MercuryThreadIDMap","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=b("React"),l=b("MercuryThreadIDMap").get();function m(a,c,d,e,f,h){return e&&!b("MessengerState.bs").isEmptyLocalThread(a,d)&&(!b("MessengerAdminGroupUtils").isAdminRequired(c)||f&&f.length>0||h&&h.size>0)?k.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[k.jsx(b("Image.react"),{className:"_6ng3",src:g("637987")}),k.jsx("span",{className:"_6ng4",children:i._("Members")})]}):null}function n(a,c,d,e,f,g,h){f&&f.size>0&&(e=f.toList().toArray());return function(){c&&e&&e.length>0&&l.getServerIDFromClientID(d,function(c){b("ChatGroupMembershipDialogBootloader").bootload(g,e,d,a)}),q(h)}}function o(a,c){return function(){l.getServerIDFromClientID(a,function(a){b("AsyncDialog").send(new(b("AsyncRequest"))(new(j||(j=b("URI")))("/ajax/browser/dialog/multichat_members/").addQueryData({id:a})))}),q(c)}}function p(a,c,d,e,f,g,h){if(b("MessengerAdminGroupUtils").isAdminRequired(c))return n(a,c,d,e,f,g,h);else return o(d,h)}function q(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.PEOPLE_LIST,a)},"FantaDropdownMenuPeopleList")}function a(a,b,c,d,e,f,g,h){d=m(a,b,c,d,e,f);return d?{type:"item",label:d,onClick:p(a,b,c,e,f,g,h)}:null}e.exports={getMenuItem:a}}),null);
__d("MessengerP2BFRXUtils",["AsyncRequest","FRXURI"],(function(a,b,c,d,e,f){"use strict";a={openFRXDialog:function(a,c,d){if(a===null||a===void 0)return;c=b("FRXURI").withEntMessageThread({reportable_ent_token:btoa("EntMessengerViewer1To1Thread:"+a),story_location:c,entry_point:d,responsible_id:a});new(b("AsyncRequest"))(c).send()}};e.exports=a}),null);
__d("FantaDropdownMenuReport",["ix","cx","fbt","Bootloader","FantaFRXUtil","Image.react","MercuryIDs","MessengerP2BFRXUtils","React","asset","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function k(a,c,d,e){d=j.jsx(b("Image.react"),{className:"_6ng3",src:g("637966")});d=j.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[d,j.jsxs("div",{children:[j.jsx("span",{className:"_6ng4",children:i._("Something's wrong")}),j.jsx("span",{className:"_6ng7",children:i._("Give feedback and report conversation")})]})]});if(e)return d;if(b("FantaFRXUtil").isEmptyThread(a)&&b("gkx")("914895"))return d;e=a?a.can_viewer_report:!1;a=b("FantaFRXUtil").isFRXEligible(a,c);return e&&a?d:null}function l(a,c,d,e,f,g,h){function a(){var a=b("MercuryIDs").getUserIDFromThreadID(d);b("MessengerP2BFRXUtils").openFRXDialog(a,"messenger_p2b_direct_thread_details","report_button");m(g)}function h(){b("FantaFRXUtil").FRXClicked(d,e),m(g)}function i(){b("FantaFRXUtil").FRXClickedForEmptyThread(d),m(g)}if(f)return a;if(b("FantaFRXUtil").isEmptyThread(c)&&b("gkx")("914895"))return i;f=c?c.can_viewer_report:!1;a=b("FantaFRXUtil").isFRXEligible(c,d);return f&&a?h:null}function m(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.REPORT,a)},"FantaDropdownMenuReport")}function a(a,b,c,d,e,f,g){var h=k(b,c,d,e);a=l(a,b,c,d,e,f,g);return a&&h?{type:"item",label:h,onClick:a}:null}e.exports={getMenuItem:a}}),null);
__d("SUIActionMenuUniform.fanta",["ix","cssVar","React","SUIGlyphIcon.react","asset","createBUITypeStyle"],(function(a,b,c,d,e,f,g,h){"use strict";a=b("React");c={backgroundColor:"#FFFFFF",borderColor:"rgba(0, 0, 0, 0.15)",descriptionTypeStyle:b("createBUITypeStyle")({color:"#8D949E",fontSize:"12px",fontWeight:"normal"}),disabledItemColor:"#BEC3C9",headerColor:"#606770",headerTypeStyle:b("createBUITypeStyle")({color:"#606770",fontSize:"12px",fontWeight:"bold"}),highlightedItemBackgroundColor:"#F2F3F5",highlightedItemColor:"#1C1E21",itemColor:"#1d2129",itemIconWidth:16,itemHeight:26,itemTypeStyle:b("createBUITypeStyle")({color:"#1d2129",fontSize:"12px",fontWeight:"600"}),submenuIndicatorLTR:a.jsx(b("SUIGlyphIcon.react"),{srcDefault:g("496757")}),submenuIndicatorRTL:a.jsx(b("SUIGlyphIcon.react"),{srcDefault:g("503180")})};e.exports=c}),null);
__d("SUIDropdownMenuUniform.fanta",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";a={borderRadius:3,boxShadow:"0 3px 8px rgba(0, 0, 0, 0.3)"};e.exports=a}),null);
__d("FantaDropdownMenu.react",["cx","fbt","requireCond","AutoFocusableLink.react","Bootloader","ChatTabMenuIcon.bs","CustomizeThreadThemeUtil","DOMVector","FantaDropdownMenuAddFriends","FantaDropdownMenuBlock","FantaDropdownMenuBlockMember","FantaDropdownMenuBlockPageMessages","FantaDropdownMenuChangeColor","FantaDropdownMenuChangeEmoji","FantaDropdownMenuConversationName","FantaDropdownMenuDeleteConversation","FantaDropdownMenuEditMentorshipPreferences","FantaDropdownMenuEditNickname","FantaDropdownMenuFunnelState","FantaDropdownMenuIgnoreMessages","FantaDropdownMenuLeaveConversation","FantaDropdownMenuMuteConversation","FantaDropdownMenuOpenFacebookPage","FantaDropdownMenuOpenFullConversation","FantaDropdownMenuPeopleList","FantaDropdownMenuReport","MercuryIDs","MessengerParticipants.bs","MessengerState.bs","React","ReactDOM","SUIActionMenuUniform.fanta","SUIDropdownMenu.react","SUIDropdownMenuUniform.fanta","SUITheme","TrackingNodes","Vector","immutable","cr:1446009"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("ChatTabMenuIcon.bs").jsComponent,j=b("CustomizeThreadThemeUtil").fetchThemesForChat,k=b("React"),l=new(b("SUITheme"))({id:"FDSChatSettingsMenu",components:{SUIDropdownMenu:b("SUIDropdownMenuUniform.fanta"),SUIActionMenu:b("SUIActionMenuUniform.fanta")}}),m;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={maxHeight:null,themes:m,menuActive:!1},d.$10=function(){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(a,b){if(d.props.thread){var c=b.CHAT_TYPES.OTHER;d.props.isGroupChat?c=b.CHAT_TYPES.GROUP:d.props.isPageChat?c=b.CHAT_TYPES.PAGE:d.props.thread.is_canonical_user&&(c=b.CHAT_TYPES.CANONICAL);a.startFunnel(c,b.MENU_VERSIONS.M4_MENU,d.$2)}},"FantaDropdownMenu.react"),d.setState({menuActive:!0})},d.$11=function(){d.setState({menuActive:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=!0;this.$4();this.state.themes||j(function(b){a.$1&&(m=b,a.setState({themes:b}))});this.$2=new(b("FantaDropdownMenuFunnelState"))()};d.componentWillUnmount=function(){this.$1=!1};d.$4=function(){var a=document.getElementById("bluebarRoot");a=a?b("Vector").getElementDimensions(a).y+12:null;var c=b("Vector").getElementPosition(b("ReactDOM").findDOMNode(this.$3)).y,d=b("DOMVector").getScrollPosition().y;c=c-(d+a);this.setState({maxHeight:c})};d.$5=function(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&b.push(a[c]);return b};d.$6=function(){var a=b("MercuryIDs").getParticipantIDFromFromThreadID(this.props.threadID);return a?b("MessengerParticipants.bs").getNow(a):null};d.$7=function(a){return!!a&&!!a.is_business_enabled};d.$8=function(a){return!!a&&!!a.is_viewer_managing_parent};d.$9=function(){var a=this,c,d=this.props,e=d.hasBlockedMessages,f=d.isGroupChat,g=d.pageUser,h=d.thread,i=d.threadID;d=d.viewer;var j=this.$6(),k=this.$7(j);j=this.$8(j);var l=b("FantaDropdownMenuOpenFullConversation").getMenuItem(this.props.uri,this.$2),m=b("FantaDropdownMenuOpenFacebookPage").getMenuItem(k,g,this.$2),n=b("cr:1446009")==null?void 0:b("cr:1446009").getMenuItem(),o=b("FantaDropdownMenuChangeColor").getMenuItem(d,h,i,this.props.setShowCustomizedDialog,this.state.themes,this.$2,e),p=b("FantaDropdownMenuChangeEmoji").getMenuItem(d,h,i,this.props.setShowCustomizedDialog,this.$2,e),q=b("FantaDropdownMenuEditNickname").getMenuItem(d,i,this.$2,e),r=b("FantaDropdownMenuConversationName").getMenuItem(f,this.props.isNewMessageTab,h,i,d,this.$2);c=h==null?void 0:(c=h.linked_mentorship_programs)==null?void 0:c.nodes;c=b("FantaDropdownMenuEditMentorshipPreferences").getMenuItem(d,i,this.$2,c!=null&&c.length>0);var s=b("FantaDropdownMenuAddFriends").getMenuItem(d,h,i,f,this.props.isNewMessageTab,this.$2,e),t=b("FantaDropdownMenuPeopleList").getMenuItem(d,h,i,f,this.props.participants,this.props.participantsMap,this.props.membershipParticipants,this.$2),u=b("FantaDropdownMenuMuteConversation").getMenuItem(d,h,i,this.$2,e),v=b("FantaDropdownMenuIgnoreMessages").getMenuItem(d,i,e,f,k,this.$2),w=b("FantaDropdownMenuLeaveConversation").getMenuItem(f,h,i,d,this.$2);e=b("FantaDropdownMenuBlock").getMenuItem(d,i,e,f,h,k,j,this.$2);k=b("FantaDropdownMenuBlockMember").getMenuItem(d,i,f,h,this.props.participants,this.props.participantsMap,this.$2);j=b("FantaDropdownMenuBlockPageMessages").getMenuItem(d,i,g,this.$2);d=b("FantaDropdownMenuReport").getMenuItem(d,h,i,f,g,this.$2,b("ReactDOM").findDOMNode(this));f=b("FantaDropdownMenuDeleteConversation").getMenuItem(i,this.$2);g=(h==null?void 0:h.group_thread_subtype)===13;i=(h==null?void 0:h.group_thread_subtype)===15;h=[[l,m,n],[o,p,q,r],g?[]:i?[t]:[s,t],[c],[u,v,w,e,k,j,d],[f]];l=h.map(function(b){return a.$5(b)}).filter(function(a){return a.length>0}).reduce(function(a,b){return a.concat(b,{type:"separator"})},[]);l.pop();return l};d.render=function(){var a=this,c=this.props,d=c.autoFocus;c=c.threadID;var e=h._("Options"),f=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.DROPDOWN_BUTTON);return k.jsx(b("SUIDropdownMenu.react"),{button:k.jsx(b("AutoFocusableLink.react"),{autoFocus:d,"data-ft":f,"data-hover":this.state.menuActive?"":"tooltip","aria-label":e,"data-tooltip-alignh":"center","data-tooltip-content":e,className:"button"+(b("MessengerState.bs").isNewEmptyLocalThread(this.props.viewer,c)?" hidden_elem":""),role:"button",children:k.jsx(i,{iconStyle:this.props.iconStyle})}),"data-testid":void 0,"data-menu-testid":"fanta_dropdown_menu",dropdownWidth:230,items:this.$9(),label:e,labelIsHidden:!0,maxHeight:this.state.maxHeight||600,onOpen:this.$10,onClose:this.$11,ref:function(b){return a.$3=b},theme:l})};return c}(k.Component);e.exports=a}),null);
__d("ChatTabMenu.react",["CustomizeTabs","CustomizeThreadDialog.react","FantaDropdownMenu.react","MercuryConfig","MercuryIDs","MercuryThreadInfo","MessageRequestUtils","MessengerState.re","React","immutable","isEmpty"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CustomizeTabs").CustomizeTitleEnum,i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={defaultPageKey:h.COLOR,showCustomizedDialog:!1},c.setShowCustomizedDialog=function(a){c.setState({showCustomizedDialog:!0,defaultPageKey:a})},c.$3=function(){c.setState({showCustomizedDialog:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){var a=this.props.participants,c=this.props,d=c.isPageChat,e=c.threadID;c=c.participantsMap;var f=b("MercuryIDs").getUserIDFromThreadID(e);c&&(a=c.toList().toArray());return d!==!0||f==null||a==null||(g||(g=b("isEmpty")))(a)?null:a.find(function(a){return a.fbid===f})};d.$2=function(){var a=this.props.thread;return!!a&&b("MercuryThreadInfo").showSettingsMenu(a)&&!(g||(g=b("isEmpty")))(a.participants)&&!b("MessageRequestUtils").isMessageRequest(a)&&!b("MercuryConfig").ViewerIsReadOnly&&!(b("MercuryConfig").ColdOpenBlock&&(b("MercuryThreadInfo").isColdOpen(a)||b("MercuryThreadInfo").isEmptyLocalThread(a)))&&!(this.props.isPageChat===!0&&a.message_count===0)};d.render=function(){var a=b("MessengerState.re").getThreadMetaNow(this.props.viewer,this.props.threadID);return!this.$2()?null:i.jsxs(i.Fragment,{children:[i.jsx(b("CustomizeThreadDialog.react"),{defaultPageKey:this.state.defaultPageKey,show:this.state.showCustomizedDialog,onHide:this.$3,thread:a,threadID:this.props.threadID}),i.jsx(b("FantaDropdownMenu.react"),{autoFocus:this.props.autoFocus,hasBlockedMessages:this.props.hasBlockedMessages,highlightNewMessage:this.props.highlightNewMessage,isFocused:this.props.isFocused,isGroupChat:this.props.isGroupChat,isNewMessageTab:this.props.isNewMessageTab,isPageChat:this.props.isPageChat,membershipParticipants:this.props.membershipParticipants,pageUser:this.$1(),participants:this.props.participants,participantsMap:this.props.participantsMap,setShowCustomizedDialog:this.setShowCustomizedDialog,thread:a,threadID:this.props.threadID,uri:this.props.uri,viewer:this.props.viewer,iconStyle:this.props.iconStyle})]})};return c}(i.Component);e.exports=a}),null);