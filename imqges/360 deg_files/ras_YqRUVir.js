if (self.CavalryLogger) { CavalryLogger.start_js(["u+eTu"]); }

__d("AdsPerfTiming",["performance"],(function(a,b,c,d,e,f){"use strict";var g;e.exports={start:(g||(g=b("performance"))).timing&&(g||b("performance")).timing.fetchStart||a._cstart}}),null);
__d("MWCount.bs",["gkx","BanzaiODS"],(function(a,b,c,d,e,f){"use strict";function a(a,b){return 0}function c(a,c){b("BanzaiODS").bumpEntityKey(3185,a,c);return 0}var g=b("gkx")("1430416")?c:a;function d(a){return g("fanta.load","total")}function e(a){return g("fanta.new_message","process")}function h(a){g("fanta.new_message","process");return g("fanta.new_message","process_new")}function i(a){g("fanta.new_message","process");return g("fanta.new_message","process_log")}function j(a){g("fanta.new_message","process");return g("fanta.new_message","process_messages_received")}h={newMessage:h,logMessage:i,messagesReceived:j};function k(a){return g("fanta.new_message","reject")}function l(a){g("fanta.new_message","reject");return g("fanta.new_message","reject_old")}function m(a){g("fanta.new_message","reject");return g("fanta.new_message","reject_supress")}i={old:l,suppress:m};function n(a){return g("fanta.new_message","lift")}j={$$process:e,Process:h,reject:k,Reject:i,lift:n};function o(a){return g("fanta.cookie.lift","none")}function p(a){return g("fanta.cookie.lift","some")}function q(a){g("fanta.cookie.lift","some");return g("fanta.cookie.lift","one")}function r(a){g("fanta.cookie.lift","some");return g("fanta.cookie.lift","many")}l={none:o,some:p,one:q,many:r};function s(a){return g("fanta.cookie.show","none")}function t(a){return g("fanta.cookie.show","some")}function u(a){g("fanta.cookie.show","some");return g("fanta.cookie.show","one")}function v(a){g("fanta.cookie.show","some");return g("fanta.cookie.show","many")}m={none:s,some:t,one:u,many:v};e={Lift:l,Show:m};h={load:d,NewMessage:j,Cookie:e};function w(a){return g("mwchat.load","total")}function x(a){return g("mwchat.new_message","process")}function y(a){return g("mwchat.new_message","reject")}function z(a){return g("mwchat.new_message","lift")}k={$$process:x,reject:y,lift:z};function A(a){return g("mwchat.cookie.lift","none")}function B(a){return g("mwchat.cookie.lift","some")}function C(a){g("mwchat.cookie.lift","some");return g("mwchat.cookie.lift","one")}function D(a){g("mwchat.cookie.lift","some");return g("mwchat.cookie.lift","many")}i={none:A,some:B,one:C,many:D};function E(a){return g("mwchat.cookie.show","none")}function F(a){return g("mwchat.cookie.show","some")}function G(a){g("mwchat.cookie.show","some");return g("mwchat.cookie.show","one")}function H(a){g("mwchat.cookie.show","some");return g("mwchat.cookie.show","many")}n={none:E,some:F,one:G,many:H};o={Lift:i,Show:n};p={load:w,NewMessage:k,Cookie:o};f.noop=a;f.log=c;f.bump=g;f.Blue=h;f.Comet=p}),null);
__d("MWCount.re",["MWCount.bs"],(function(a,b,c,d,e,f){c=(a=b("MWCount.bs")).Blue.load;f.Blue_load=c;d=a.Blue.NewMessage.Process.newMessage;f.Blue_NewMessage_Process_newMessage=d;e=a.Blue.NewMessage.Process.logMessage;f.Blue_NewMessage_Process_logMessage=e;b=a.Blue.NewMessage.Process.messagesReceived;f.Blue_NewMessage_Process_messagesReceived=b;c=a.Blue.NewMessage.reject;f.Blue_NewMessage_reject=c;d=a.Blue.NewMessage.Reject.old;f.Blue_NewMessage_Reject_old=d;e=a.Blue.NewMessage.Reject.suppress;f.Blue_NewMessage_Reject_suppress=e;b=a.Blue.NewMessage.lift;f.Blue_NewMessage_lift=b;c=a.Blue.Cookie.Lift.none;f.Blue_Cookie_Lift_none=c;d=a.Blue.Cookie.Lift.some;f.Blue_Cookie_Lift_some=d;e=a.Blue.Cookie.Lift.many;f.Blue_Cookie_Lift_many=e;b=a.Blue.Cookie.Show.none;f.Blue_Cookie_Show_none=b;c=a.Blue.Cookie.Show.one;f.Blue_Cookie_Show_one=c;d=a.Blue.Cookie.Show.many;f.Blue_Cookie_Show_many=d;e=a.Blue;f.Blue=e}),null);
__d("generateRTCCallID",["randomInt"],(function(a,b,c,d,e,f){"use strict";function a(){return b("randomInt")(0,4294967294)+1}e.exports=a}),null);
__d("FantaMessageActions",["Bootloader","CurrentUser","FantaDispatcher","MercuryIDs","MercuryLocalIDs","MercuryViewer","MessengerState.bs","MWCount.re","emptyFunction","ifRequired","keyMirror","requireWeak","setImmediate"],(function(a,b,c,d,e,f){"use strict";var g;b("requireWeak")("FantaAppStore",function(a){return g=a});var h=b("keyMirror")({ADD_GROUP_PARTICIPANTS:null,ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:null,ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:null,CANCEL_FILE_UPLOAD:null,CANCEL_REPLY_TO_MESSAGE:null,COMPOSER_TEXT_UPDATE:null,LINK_PREVIEW:null,LOADED_SHARE_DATA:null,LOADING_SHARE_DATA:null,PREPARE_FILES_FOR_SEND:null,RECEIVED_NEW_MESSAGE:null,REMOVE_SHARE_PREVIEW:null,REPLY_TO_MESSAGE:null,SEND_GIF:null,SEND_HOT_LIKE:null,SEND_MESSAGE:null,SEND_PHOTO:null,SEND_STICKER:null,SET_NEW_GROUP_NAME_LOCALLY:null,UPDATE_GROUP_NAME:null,UPDATE_USER_INPUT_REQUESTED:null});function i(a){var c=b("MercuryViewer").getID();if(!a.length)return null;a=a.filter(function(a){return a!==c});var d;if(a.length===0)return null;else a.length===1?d=b("MercuryIDs").getThreadIDFromParticipantID(a[0]):(d=b("MercuryLocalIDs").generateThreadID(),a.unshift(c),b("MessengerState.bs").createNewLocalThread(b("CurrentUser").getID(),d,a));return d}a={Types:h,prepareFilesForSend:function(a,c,d,e){var f={type:h.PREPARE_FILES_FOR_SEND,tabID:a,files:c,composer:d};this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch(f),e&&e()})},replyToMessage:function(a,c){b("FantaDispatcher").dispatch({type:h.REPLY_TO_MESSAGE,threadID:c,message:a})},cancelReplyToMessage:function(a){b("FantaDispatcher").dispatch({type:h.CANCEL_REPLY_TO_MESSAGE,threadID:a})},cancelFileUpload:function(a,c){var d={type:h.CANCEL_FILE_UPLOAD,tabID:a,uploadID:c};this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch(d)})},linkPreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LINK_PREVIEW,tabID:a,uri:c})})},loadedShareData:function(a,c,d){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LOADED_SHARE_DATA,tabID:a,attachmentData:c,composer:d})})},loadingShareData:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LOADING_SHARE_DATA,composer:c,tabID:a})})},removeSharePreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.REMOVE_SHARE_PREVIEW,tabID:a,composer:c})})},receivedNewMessage:function(a,c){b("MWCount.re").Blue.NewMessage.lift(),b("FantaDispatcher").dispatch({type:h.RECEIVED_NEW_MESSAGE,tabID:a,message:c})},updateGroupName:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.UPDATE_GROUP_NAME,threadID:a,newName:c})})},setNewGroupNameLocally:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.SET_NEW_GROUP_NAME_LOCALLY,threadID:a,newName:c})})},addParticipants:function(a,c){var d=this;b("ifRequired")("FantaAppStore",function(e){e=e.getState().mercury.tabContents.get(a);if(!e)return;var f=e.thread;e=e.typeahead;if(!e||!f)return;var h=b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),a);if(f.is_canonical_user||h){h=e.getSelectedParticipantIDs();e=f.participants;e=i(e.concat(h));e?f.is_canonical_user?d.addGroupParticipantsAsOpenTab(e,a,c):d.addGroupParticipantsAsReplaceTab(e,a,c):d.addGroupParticipant(a,c)}else d.addGroupParticipant(a,c)})},addGroupParticipant:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS,threadID:a,onSendSuccess:c})})},addGroupParticipantsAsOpenTab:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB,fromTabID:c,onSendSuccess:d,tabID:a})})},addGroupParticipantsAsReplaceTab:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB,newTabID:a,onSendSuccess:d,tabID:c})})},sendMessage:function(a,c,d,e){this.dispatchOrBootloadSendMessages(function(){var f={type:h.SEND_MESSAGE,threadID:a,message:c,composer:d,onSendSuccess:e};b("FantaDispatcher").dispatch(f)})},sendPhoto:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_PHOTO,clearComposerOnSend:!0,onSendSuccess:d,photoData:c,threadID:a};b("FantaDispatcher").dispatch(e)})},sendGif:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_GIF,clearComposerOnSend:!1,onSendSuccess:d,photoData:c,threadID:a};b("FantaDispatcher").dispatch(e)})},sendHotLike:function(a,c,d,e,f){this.dispatchOrBootloadSendMessages(function(){var g={type:h.SEND_HOT_LIKE,emoji:c,onSendSuccess:f,size:d,source:e,threadID:a};b("FantaDispatcher").dispatch(g)})},sendSticker:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_STICKER,threadID:a,stickerID:c,onSendSuccess:d};b("FantaDispatcher").dispatch(e)})},composerTextUpdate:function(a,c,d){var e=this;c.length>0&&b("ifRequired")("FantaReducersSendMessages",b("emptyFunction"),function(){return e.dispatchOrBootloadSendMessages(b("emptyFunction"))});this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.COMPOSER_TEXT_UPDATE,composer:d,message:c,threadID:a})})},dispatchOrBootloadMessages:function(a){b("ifRequired")("FantaReducersMessages",function(){b("setImmediate")(a)},function(){b("Bootloader").loadModules(["FantaReducersMessages"],function(c){g&&(g.addReducers(c),b("setImmediate")(a))},"FantaMessageActions")})},dispatchOrBootloadSendMessages:function(a){b("ifRequired")("FantaReducersSendMessages",function(){b("setImmediate")(a)},function(){b("Bootloader").loadModules(["FantaReducersSendMessages"],function(c){g&&(g.addReducers(c),b("setImmediate")(a))},"FantaMessageActions")})},dispatchOrBootloadUploader:function(a){b("ifRequired")("FantaReducersFileUploader",function(){a()},function(){b("Bootloader").loadModules(["FantaReducersFileUploader"],function(b){g&&(g.addReducers(b),a())},"FantaMessageActions")})},dispatchOrBootloadSharePreview:function(a){b("ifRequired")("FantaReducersSharePreview",function(){a()},function(){b("Bootloader").loadModules(["FantaReducersSharePreview"],function(b){g&&(g.addReducers(b),a())},"FantaMessageActions")})},updateUserInputRequested:function(a,c,d){this.dispatchOrBootloadMessages(function(){b("FantaDispatcher").dispatch({type:h.UPDATE_USER_INPUT_REQUESTED,isUserInputRequested:a,requestNumResults:c,requestType:d})})}};e.exports=a}),null);
__d("MessageThreadAssociatedObjectUtils",[],(function(a,b,c,d,e,f){"use strict";a={shouldRender:function(a){return a&&a.room_type==="GROUP"&&!a.is_workplace_community},isLinkedToGroupChat:function(a){return a&&a.room_type==="GROUP"&&!a.is_workplace_community}};e.exports=a}),null);
__d("MessengerAdminGroupUtils",["fbt","CurrentUser","MercuryConfig","MercuryIDs","MessageRequestUtils","MessageThreadAssociatedObjectUtils","MessagingSourceEnum","QE2Logger","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h="messenger_use_new_group_participant_suggestion_ranking",i="show_nullstate_chat_tab_group_chat",j={isJoinableAndOpenThread:function(a){return this.isJoinableThread(a)&&this.isApprovalOpenThread(a)},isJoinableAndApprovalRequiredThread:function(a){return!!(this.isJoinableThread(a)&&a&&a.approval_mode===1)},isWorkSyncedGroupChat:function(a){return!!(a==null?void 0:a.work_associated_group)},isWorkFroup:function(a){return!!(b("gkx")("678597")&&a&&a.is_thread_queue_enabled===!0&&a.joinable_mode&&a.joinable_mode.mode===1&&b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))},isWorkSyncedChatThreadCreationMessage:function(a){return!!(a.log_message_data&&a.log_message_data.name!=null&&a.tags&&(a.tags.indexOf(b("MessagingSourceEnum").WORK_GROUP_SYNCED_CHAT_CREATION)!==-1||a.tags.indexOf(b("MessagingSourceEnum").WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION)!==-1))},isWorkSyncedChatThreadMemberSyncMessage:function(a){return!!(a.tags&&a.tags.indexOf(b("MessagingSourceEnum").WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC)!==-1)},shouldAddToApprovalQueue:function(a,b){return!!(this.isJoinableAndApprovalRequiredThread(a)&&a&&!j.isAdmin(a.admins,b))},isJoinableThread:function(a){return!!(b("gkx")("678598")&&a&&a.is_thread_queue_enabled===!0&&a.joinable_mode&&a.joinable_mode.mode===1)},isGroupChat:function(a){return!!(a&&b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))},shouldInvite:function(a){return!!(b("gkx")("678598")&&a&&a.participant_add_mode==="INVITE")},isApprovalOpenThread:function(a){return!!((b("CurrentUser").isWorkUser()||b("gkx")("678598"))&&a&&a.approval_mode===0)},isAdminRequired:function(a){return!!(a&&a.admin_model_status==="required")},isOwner:function(a,b){return a&&(this.isJoinableThread(b)||this.isAdminRequired(b))},canSeeJoinableGroupOptions:function(a,c){var d=b("CurrentUser").isWorkUser(),e=j.showJoinableApprovalToggle(a,c);c=j.showApprovalQueue(a,c);return!d&&this.isJoinableThread(a)&&(c||e)},canSeeGroupOptionsSection:function(a,c){c=this.isAdmin(a.admins,c);var d=b("MessageRequestUtils").isMessageRequest(a);return c&&this.isAdminRequired(a)&&!d},canSeeBotsInGroupTypeahead:function(){return b("CurrentUser").isWorkUser()},canMakeOthersAdmins:function(a,b,c){return this.isOwner(a,c)&&!b},canMakeSelfAdmin:function(a,b){return(this.isJoinableThread(b)||this.isAdminRequired(b))&&Object.keys(b.admins).length===0&&a},canRemoveAdmin:function(a,b,c,d){if(this.isAdminRequired(d)&&Object.keys(d.admins).length===1)return!1;switch(c){case 2:return!1;default:return this.isOwner(a,d)&&b}},canRemoveFromGroup:function(a,b,c){switch(b){case 2:return!1;default:return this.isAdminRequired(c)||this.isWorkFroup(c)?a:this.isOwner(a,c)||!this.isJoinableThread(c)}},showGroupOptionsSection:function(a){return a.group_thread_subtype!==14},showJoinableApprovalToggle:function(a,b){if(a.associated_object&&!a.associated_object.approval_mode_toggleable)return!1;b=j.isAdmin(a.admins,b);return j.isOwner(b,a)},showApprovalQueue:function(a,b){b=j.isAdmin(a.admins,b);b=j.isOwner(b,a);var c=this.getPendingRequestNumber(a);if(a&&this.isAdminRequired(a))return this.isAdminRequired(a)&&b&&c>0;else{a=j.isJoinableAndApprovalRequiredThread(a);return a&&b&&c>0}},showParticipantsModal:function(a,b,c){return this.isJoinableThread(c)&&!a&&!b},useNewGroupMemberSuggestionRanking:function(){b("QE2Logger").logExposureForUser(h);return b("MercuryConfig").MNGPS},showDefaultListForNewPersonAddChatTab:function(){b("QE2Logger").logExposureForUser(i);return b("MercuryConfig").ChatGroupChat},showDefaultListForNewChatTab:function(){return b("MercuryConfig").ChatComposer},canUpdateThreadCustomization:function(a,c){var d=j.isJoinableThread(a);c=j.isAdmin(a.admins,c);var e=b("MessageRequestUtils").isMessageRequest(a);return a.is_subscribed&&!e&&(!d||c)},canUpdateThreadDescription:function(a,c){var d=j.isJoinableThread(a);c=j.isAdmin(a.admins,c);var e=j.isWorkSyncedGroupChat(a);if(e)return c;e=b("MessageRequestUtils").isMessageRequest(a);return a.is_subscribed&&!e&&(!d||c)},isAdmin:function(a,c){if(!a)return!1;if(b("MercuryIDs").isValid(c)){var d=b("MercuryIDs").getUserIDFromParticipantID(c);return d!=null&&a[d]!==void 0}return a[c]!==void 0},getLeaveGroupBodyText:function(a,b){a=this.isOwner(a,b);var c=j.isWorkSyncedGroupChat(b);return!c?a?g._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send or receive new messages."):g._("You will stop receiving messages from this conversation and people will see that you left."):a?b.participants.length===1?g._("Are you sure you want to leave this group? As you're the last member, leaving now will also delete this group."):g._("Leaving this group will remove you as an owner and allow other members to manage the chat thread. You will no longer be able to send or receive new messages. You will also be removed from the group."):g._("You will stop receiving messages from this conversation and people will see that you left. You will also be removed from the group.")},getLeaveGroupTitleText:function(a,b){return j.isWorkSyncedGroupChat(b)?b.participants.length===1?g._("Delete Group and Chat?"):g._("Leave Group and Chat?"):this.isOwner(a,b)?g._("Leave this conversation?"):g._("Leave Conversation?")},getLeaveGroupButtonText:function(a,b){return this.isOwner(a,b)?b.participants.length===1?g._("Leave and delete"):g._("Leave conversation"):g._("Leave")},getMakeOwnerBodyText:function(a,b,c){if(a)return b?g._("As a group admin, you will be able to manage who can join and customize this conversation."):g._("As a group admin, \"{owner's name}\" will be able to manage who can join and customize this conversation.",[g._param("owner's name",c)]);else return b?g._("As a group owner, you will be able to manage group ownership and remove members from the conversation. Only owners will be able to add other owners."):g._("As a group owner, \"{owner's name}\" will be able to manage group ownership and remove members from the conversation. They will be able to remove ownership from other owners.",[g._param("owner's name",c)])},getMakeOwnerTitleText:function(a,b){if(a)return b?g._("Become group admin?"):g._("Add group admin?");else return b?g._("Become group owner?"):g._("Add group owner?")},getMakeOwnerButtonText:function(a,b){if(a)return b?g._("Become admin"):g._("Make admin");else return b?g._("Become owner"):g._("Make owner")},getRemoveOwnerBodyText:function(a,b,c,d){if(b&&c)return a?null:g._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group. Any other member will be able to own the group.");else if(b&&!c)return a?g._("You will no longer be able to manage who can join and customize this conversation."):g._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group.");else return a?g._("\"{owner's name}\" will no longer be able to manage who can join and customize this conversation.",[g._param("owner's name",d)]):g._("\"{owner's name}\" will no longer manage group ownership and remove members from the conversation. They will still be a participant in the group.",[g._param("owner's name",d)])},getRemoveOwnerTitleText:function(a){return a?g._("Remove as group admin?"):g._("Remove as group owner?")},getRemoveOwnerButtonText:function(a){return a?g._("Remove"):g._("Remove owner")},getPendingRequestNumber:function(a){if(a&&a.approval_queue_ids&&a.approval_queue_ids.length)return a.approval_queue_ids.length;else if(a&&this.isAdminRequired(a)&&a.group_approval_queue&&a.group_approval_queue.length)return a.group_approval_queue.length;return 0}};e.exports=j}),null);
__d("MercuryIgnoredBlockedParticipants.bs",["bs_belt_Set","bs_caml_obj","MercuryIDs","bs_caml_option","CurrentUser","ParticipantId.bs","WorkForeignEntityInfo.bs"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("bs_belt_Set").fromArray(a,b("ParticipantId.bs"))}function g(a,c,d){d=d.participants.filter(function(c){return c!==b("MercuryIDs").getParticipantIDFromUserID(a)});return d.filter(function(a){return b("bs_belt_Set").has(c,a)!==!1})}function c(a,b,c){if(c.is_canonical)return!1;else return g(a,b,c).length>0}function d(a,b,c){if(c.is_canonical)return[];else return g(a,b,c)}function e(a,c,d){if(d.is_canonical){d=d.participants.filter(function(c){return b("bs_caml_obj").caml_notequal(c,b("MercuryIDs").getParticipantIDFromUserID(a))});return!d.every(function(a){return!b("bs_belt_Set").has(c,a)})}else return!1}var h=b("bs_belt_Set").has;function i(a,c,d){if(!a.is_canonical||b("bs_caml_option").nullable_to_opt(a.other_user_fbid)===b("bs_caml_option").some(c))return!1;else if(!b("CurrentUser").isWorkUser()||d==null)return!0;else if(d==null)return!1;else return!b("WorkForeignEntityInfo.bs").isCoworker(d)}f.fromIds=a;f.findIntersection=g;f.isPresentInGroupThread=c;f.participantsInGroupThread=d;f.qualifiesAs=e;f.isInSet=h;f.shouldShowBlock=i}),null);
__d("HotLikeSound",["MercurySoundsConfig","SoundPlayer","StickerConstants"],(function(a,b,c,d,e,f){"use strict";var g=[(a=b("MercurySoundsConfig")).hot_like_grow_mp3_url,a.hot_like_grow_ogg_url],h=[a.hot_like_pop_mp3_url,a.hot_like_pop_ogg_url],i=[a.hot_like_outgoing_small_mp3_url,a.hot_like_outgoing_small_ogg_url],j=[a.hot_like_outgoing_medium_mp3_url,a.hot_like_outgoing_medium_ogg_url],k=[a.hot_like_outgoing_large_mp3_url,a.hot_like_outgoing_large_ogg_url],l=function(){return!1};c={setCheckSoundEnabledFunc:function(a){l=a},start:function(){this._play(g)},stop:function(){b("SoundPlayer").stop(g)},pop:function(){this.stop(),this._play(h)},snap:function(a){this.stop(),a===b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID&&this._play(i),a===b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID&&this._play(j),a===b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID&&this._play(k)},_play:function(a){l()&&b("SoundPlayer").play(a)}};e.exports=c}),null);
__d("MessengerSecondarySearchFunnelConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({MESSENGER_DOT_COM:"messenger_dot_com",WWW:"www"});b=Object.freeze({ABANDON:"abandon",CREATE_GROUP:"create_group",ENTER_THREAD:"enter_thread",RESULT_SELECTED:"result_selected",SEND:"send",SINGLE_RESULT_SELECTED:"single_result_selected"});c=Object.freeze({ACTION:"action"});d=Object.freeze({EXISTING_TAB:"existing_tab",JEWEL:"jewel",SIDEBAR:"sidebar",COMPOSER:"composer"});f=Object.freeze({END:"end",IMPRESSIONS:"impressions",MICRO_SESSION_ENDED:"micro_session_ended",MICRO_SESSION_STARTED:"micro_session_started",QUERY_CHANGED:"query_changed",RESULT_SELECTED:"result_selected",REENTER_OMNIPICKER:"reentered_omnipicker",SOURCE_ENDED:"source_ended",SOURCE_STARTED:"source_started",START:"start",TOKEN_REMOVED:"token_removed",CLICK_OTHER_THREAD:"clicked_on_other_thread"});var g=Object.freeze({BROADCAST:"broadcast",GROUP_CREATION:"group_creation",OMNIPICKER:"omnipicker",SHARE:"share"}),h=Object.freeze({DIRECT_SEND:"direct_send",ADD:"add"}),i=Object.freeze({FINISHED:"finished",FAILED:"failed"}),j=Object.freeze({BROADCAST:9500,GROUP_CREATE:9501,M_APP_COMPOSER:9502}),k=Object.freeze({QUERY:"query",NO_QUERY:"no_query"}),l=Object.freeze({BOOTSTRAP:"bootstrap",LOCAL:"local",LOCAL_AND_SERVER:"local_and_server",LOCAL_CONTACTS:"local_contacts",ORDERED_GCF_FRIENDLIST:"local_ordered_gcf_friendlist",QUERY_CACHE:"query_cache",SERVER:"server",SHORT_PROFILES:"local_short_profiles",SUGGESTED_RECIPIENTS:"local_suggested_recipients"});e.exports={FUNNEL_NAME:"MESSENGER_SECONDARY_SEARCH_FUNNEL",CLIENTS:a,END_ACTIONS:b,END_REASONS:c,ENTRY_SURFACES:d,EVENTS:f,SEARCH_SURFACES:g,SELECTION_TYPES:h,SOURCE_STATUSES:i,LOGGING_IDS:j,MICRO_SESSION_TYPES:k,SOURCES:l}}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("ContextualLayerAutoFlipHorizontal",["ContextualLayerAutoFlip"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getValidPositions=function(a){return[a.getPosition()]};return b}(b("ContextualLayerAutoFlip"));e.exports=a}),null);
__d("EmoticonEmojiList",[],(function(a,b,c,d,e,f){e.exports={names:{":)":"slightsmile",":-)":"slightsmile",":]":"slightsmile","=)":"smile","(:":"slightsmile","(=":"smile",":(":"frown",":-(":"frown",":[":"frown","=(":"frown",")=":"frown",";-P":"winktongue",";P":"winktongue",";-p":"winktongue",";p":"winktongue",":poop:":"poop",":trans:":"transflag",":P":"tongue",":-P":"tongue",":-p":"tongue",":p":"tongue","=P":"tongue","=p":"tongue","=D":"grin",":-D":"slightgrin",":D":"slightgrin",":o":"gasp",":-O":"gasp",":O":"gasp",":-o":"gasp",";)":"wink",";-)":"wink","8-)":"glasses","8)":"glasses","B-)":"glasses","B)":"glasses",">:(":"grumpy",">:-(":"grumpy",":/":"unsure",":-/":"unsure",":\\":"unsure",":-\\":"unsure","=/":"unsure","=\\":"unsure",":'(":"cry",":'-(":"cry",":\u2019(":"cry",":\u2019-(":"cry","3:)":"devil","3:-)":"devil","O:)":"angel","O:-)":"angel","0:)":"angel","0:-)":"angel",":*":"kiss",":-*":"kiss",";-*":"winkkiss",";*":"winkkiss","<3":"heart","&lt;3":"heart","\u2665":"heart","^_^":"kiki","^~^":"kiki","-_-":"expressionless",":-|":"squint",":|":"squint",">:o":"upset",">:O":"upset",">:-O":"upset",">:-o":"upset",">_<":"persevere",">.<":"persevere",'<(")':"penguin",O_O:"flushface",o_o:"flushface","0_0":"flushface",T_T:"crying","T-T":"crying",ToT:"crying","T.T":"crying","-3-":"flushkiss","'-_-":"sweating","\u2019-_-":"sweating","(y)":"like",":like:":"like","(Y)":"like","(n)":"dislike","(N)":"dislike"},emote2emojis:{slightsmile:"1f642",smile:"1f60a",frown:"1f61e",winktongue:"1f61c",poop:"1f4a9",transflag:"1f3f3_200d_26a7",tongue:"1f61b",slightgrin:"1f600",grin:"1f603",gasp:"1f62e",wink:"1f609",glasses:"1f60e",grumpy:"1f620",unsure:"1f615",cry:"1f622",devil:"1f608",angel:"1f607",kiss:"1f617",winkkiss:"1f618",heart:"2764",kiki:"1f60a",expressionless:"1f611",squint:"1f610",upset:"1f620",persevere:"1f623",penguin:"1f427",flushface:"1f633",crying:"1f62d",flushkiss:"1f61a",sweating:"1f613",like:"f0000",dislike:"1f44e"},symbols:{slightsmile:":)",smile:"=)",frown:":(",winktongue:";-P",poop:":poop:",transflag:":trans:",tongue:":P",slightgrin:":D",grin:"=D",gasp:":o",wink:";)",glasses:"8-)",grumpy:">:(",unsure:":/",cry:":'(",devil:"3:)",angel:"O:)",kiss:":*",winkkiss:";*",heart:"<3",kiki:"^_^",expressionless:"-_-",squint:":-|",upset:">:o",persevere:">_<",penguin:'<(")',flushface:"O_O",crying:"T_T",flushkiss:"-3-",sweating:"'-_-",like:"(y)",dislike:"(n)"},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("codedError",["fbt","invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){h(0,2095)}a.withParams=function(a,b){h(0,2095)};a._=function(a,b,c,d){b=b(g);c=c(g,d);d=b+": "+c;d=new Error(d);Object.assign(d,{framesToPop:1,code:a,description:c,summary:b});return d};e.exports=a}),null);
__d("CreditCardFormParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",CARD_HOLDER_NAME:"card_holder_name",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id",LOGGING_ID:"logging_id",IS_FROM_SUPPORT:"is_from_support",SOURCE_SUPPORT_FORM_ID:"source_support_form_id",GEO_COUNTRY:"geo_country"})}),null);
__d("MercuryTimestamp",["fbt","formatDate"],(function(a,b,c,d,e,f,g){a=864e5;var h=6*a,i={getFormatedTimestamp:function(a){var b=a/1e3;return i.getFormattedTimestampByBucket(b,this.getTimeBucket(a))},getAbsoluteTimestamp:function(a){if(a==null)return null;else{a=i.getFormatedTimestamp(a);return a.absolute}},getRelativeTimestamp:function(a){a=i.getFormatedTimestamp(a);return a.relative},getFormattedTimestampByBucket:function(a,c){switch(c){case 0:return{absolute:g._("Today").toString(),relative:b("formatDate")(a,"g:ia")};case 1:return{absolute:b("formatDate")(a,"l"),relative:b("formatDate")(a,"D")};case 3:return{absolute:b("formatDate")(a,"F j"),relative:b("formatDate")(a,"M j")};default:return{absolute:b("formatDate")(a,"F j, Y"),relative:b("formatDate")(a,"n/j/y")}}},getTimeBucket:function(a){a=new Date(a);var b=new Date();b=new Date(b.getFullYear(),b.getMonth(),b.getDate());if(b<a)return 0;else if(b-h<a)return 1;else if(b.getFullYear()===a.getFullYear())return 3;else return 4},getPreciseTimestamp:function(a){return b("formatDate")(new Date(a),i.getPreciseFormat(a))},getPreciseFormat:function(a){a=i.getTimeBucket(a);switch(a){case 0:return"g:ia";case 1:return"l g:ia";case 3:return"F jS, g:ia";case 4:default:return"F j, Y g:i a"}}};e.exports=i}),null);