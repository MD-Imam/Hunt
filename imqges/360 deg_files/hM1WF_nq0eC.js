if (self.CavalryLogger) { CavalryLogger.start_js(["yvBDx"]); }

__d("CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"animated_image_attribution",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentAttribution_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"height",value:396},b={kind:"Variable",name:"scale",variableName:"scale"},c={kind:"Literal",name:"width",value:396},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:[a,b,{kind:"Literal",name:"sizing",value:"contain-fit"},c],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:d,storageKey:null},{alias:null,args:[a,b,c],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:d,storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedVideoWithGifOverlay_attachment"},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentAttribution_attachment"}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageAttachment_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentAnimatedImageAttachment_attachment",fragmentName:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media",fragmentPropName:"media",kind:"ModuleImport"}],type:"Video",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment"},{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"animated_image_attribution",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},e=[d,{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"representation_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mime_codec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"segment_type",storageKey:null}],f=[b],g={kind:"Literal",name:"height",value:396},h={kind:"Variable",name:"scale",variableName:"scale"},i={kind:"Literal",name:"width",value:396},j=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{kind:"SplitOperation",metadata:{derivedFrom:"CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer"},name:"CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometUFICommentAnimatedImageAttachment_attachment",fragmentName:"CometUFICommentAnimatedImageAttachmentVideoRenderer_media",fragmentPropName:"media",kind:"ModuleImport"},b,c,{alias:null,args:[{kind:"Literal",name:"supported",value:["CometProductTagFeedOverlayRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_product_tag_feed_overlay_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometFeedVideoWithGifOverlay_attachment",fragmentName:"CometProductTagFeedOverlayRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometProductTagFeedOverlayRenderer",abstractKey:null}],storageKey:'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])'},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},{alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},{alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResources",kind:"LinkedField",name:"dash_prefetch_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"audio",plural:!0,selections:e,storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"video",plural:!0,selections:e,storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},{alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},{alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{documentName:"useVideoPlayerShakaPerformanceLoggerRelay_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelay_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},{alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:f,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageVideo",abstractKey:null},{kind:"InlineFragment",selections:[b,c],type:"GenericAttachmentMedia",abstractKey:null},{alias:null,args:[g,h,{kind:"Literal",name:"sizing",value:"contain-fit"},i],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:j,storageKey:null},{alias:null,args:[g,h,i],concreteType:"Image",kind:"LinkedField",name:"animated_image",plural:!1,selections:j,storageKey:null}],storageKey:null},d,{alias:"story_url",args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentBlueOnCometModalLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentClickToGetOfferRenderer"]}],concreteType:null,kind:"LinkedField",name:"story_attachment_link_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryLeadGenLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryGenericLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentGenericLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryBlueOnCometModalLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentBlueOnCometModalLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToMessenger_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToMessengerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryFundraiserLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentFundraiserLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToGetOffer_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToGetOfferRenderer",abstractKey:null}],storageKey:'story_attachment_link_renderer(supported:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentBlueOnCometModalLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentClickToGetOfferRenderer"])'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentAnimatedImageAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentAnimatedImageShareStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometFeedGifOverlay.react",["fbt","ix","BaseAccessibleElement_DEPRECATED.react","CometImage.react","CometPressable.react","React","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React"),k={gifButton:{appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",boxSizing:"rq0escxv",cursor:"nhd2j8a9",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",paddingBottom:"qt6c0cv9",paddingEnd:"rz4wbd8a",paddingStart:"a8nywdso",paddingTop:"jb3vyjys",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb",color:"lkb5bm1b",display:"a8c37x1j",height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"},gifIcon:{boxSizing:"rq0escxv",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"py2didcb",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",cursor:"nhd2j8a9",height:"rdkrh8wx",width:"orwu60u2"},gifIconImage:{boxSizing:"rq0escxv",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"k8ui9dzl"},gifIconImageHidden:{transform:"izhqzi6j",transitionProperty:"flx89l3n",transitionTimingFunction:"heur4gxb"},hideTransition1:{transitionDuration:"kmdw4o4n"},hideTransition2:{transitionDuration:"dpja2al7"},hideTransition3:{transitionDuration:"qgmjvhk0"}};function a(a){var c=a.isPaused,d=a.isPlayable,e=a.label,f=a.linkProps;a=a.onPress;if(d){if(c==null||a==null)throw b("unrecoverableViolation")("isPaused and onPress cannot be nullish if the component is playable in CometFeedGifOverlay","comet_feed")}else if(f==null||e==null)throw b("unrecoverableViolation")("linkProps or label cannot be nullish if the component is not playable in CometFeedGifOverlay","comet_feed");return j.jsxs(b("CometPressable.react"),{display:"inline",label:e,linkProps:f,onPress:a,overlayDisabled:!0,xstyle:k.gifButton,children:[j.jsxs("i",{className:(i||(i=b("stylex")))(k.gifIcon),children:[j.jsx(b("CometImage.react"),{className:i(k.gifIconImage,d&&c===!1&&k.gifIconImageHidden,d&&c===!1&&k.hideTransition3),src:h("99378")}),j.jsx(b("CometImage.react"),{className:i(k.gifIconImage,d&&c===!1&&k.gifIconImageHidden,d&&c===!1&&k.hideTransition2),src:h("99379")}),j.jsx(b("CometImage.react"),{className:i(k.gifIconImage,d&&c===!1&&k.gifIconImageHidden,d&&c===!1&&k.hideTransition1),src:h("99380")})]}),d?j.jsx(b("BaseAccessibleElement_DEPRECATED.react"),{children:c===!0?g._("Play GIF"):g._("Pause GIF")}):null]})}e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentAttribution.react",["ix","CometPressable.react","CometRelay","CometRow.react","CometRowItem.react","React","TetraIcon.react","TetraText.react","fbicon","stylex","CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k={footer:{backgroundImage:"sg6hv7x6",bottom:"i09qtzwb",end:"n7fi1qx3",opacity:"pedkr2u6",position:"pmk7jnqg",start:"j9ispegn",transitionProperty:"pnx7fd3z",transitionTimingFunction:"heur4gxb"},hidden:{opacity:"b5wmifdl",pointerEvents:"hzruof5a",transform:"c6mbcsjx",transitionDuration:"ms05siws"}};function a(a){var c=i(h!==void 0?h:h=b("CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql"),a.attachment),d=c.media;return j.jsx(b("CometPressable.react"),{hideHoverOverlay:!0,linkProps:{url:c.url},xstyle:[k.footer,a.isHidden&&k.hidden],children:j.jsxs(b("CometRow.react"),{align:"justify",paddingVertical:16,spacingVertical:8,verticalAlign:"center",children:[j.jsx(b("CometRowItem.react"),{children:j.jsx(b("TetraText.react"),{color:"white",type:"meta2",children:(d==null?void 0:d.animated_image_attribution)||(c==null?void 0:(a=c.source)==null?void 0:a.text)})}),j.jsx(b("CometRowItem.react"),{children:j.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("570405"),24)})})]})})}e.exports=a}),null);
__d("CometUFICommentAttachmentContainer.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.children;return g.jsxs("div",{className:"sf5mxxl7 l9j0dhe7 stjgntxs ni8dbmo4 d2edcug0 tvmbv18p q9uorilb qmr60zad inkptoze qlfml3jp e72ty7fz",children:[a,g.jsx("div",{className:"hzruof5a qmr60zad inkptoze qlfml3jp e72ty7fz t63ysoy8 linmgsc8 hop1g133 opwvks06 kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb"})]})}e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachmentFallbackRenderer.react",["CometFeedGifOverlay.react","CometImage.react","CometPressable.react","CometRelay","CometUFICommentAnimatedImageAttachmentAttribution.react","CometUFICommentAttachmentContainer.react","React","stylex","unrecoverableViolation","CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");c=b("React");var k=c.useCallback,l=c.useState,m={image:{display:"a8c37x1j",height:"idiwt2bm",maxWidth:"d2edcug0"},maximize:{display:"a8c37x1j",height:"datstx6m",width:"k4urcfbm"},overlayContainer:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function a(a){var c,d;a=i(g!==void 0?g:g=b("CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql"),a.attachment);var e=a.media,f=l(!1),n=f[0],o=f[1];f=e==null?void 0:(f=e.animated_image)==null?void 0:f.uri;var p=Boolean(f);c=(c=e==null?void 0:(c=e.animated_image)==null?void 0:c.height)!=null?c:e==null?void 0:(c=e.image)==null?void 0:c.height;d=(d=e==null?void 0:(d=e.animated_image)==null?void 0:d.width)!=null?d:e==null?void 0:(d=e.image)==null?void 0:d.height;e=e==null?void 0:(e=e.image)==null?void 0:e.uri;var q=a==null?void 0:a.url;if(c==null||d==null||e==null||q==null)throw b("unrecoverableViolation")("unable to play gif as either animatedURI, staticURI, height or width is missing","ufi2");var r=k(function(){o(function(a){return!a})},[]);return j.jsxs(b("CometUFICommentAttachmentContainer.react"),{children:[j.jsx("div",{className:(h||(h=b("stylex")))(m.overlayContainer),children:f!=null?j.jsx(b("CometFeedGifOverlay.react"),{isPaused:n,isPlayable:!0,onPress:r}):j.jsx(b("CometPressable.react"),{"aria-label":q,linkProps:{rel:["noopener","noreferrer"],target:"_blank",url:q},xstyle:m.maximize})}),j.jsx(b("CometImage.react"),{className:h(m.image),height:c,src:!n&&f!=null?f:e,width:d}),j.jsx(b("CometUFICommentAnimatedImageAttachmentAttribution.react"),{attachment:a,isHidden:!n&&p})]})}e.exports=a}),null);
__d("CometUFICommentAnimatedImageAttachment.react",["CometRelay","CometUFICommentAnimatedImageAttachmentFallbackRenderer.react","React","unrecoverableViolation","CometUFICommentAnimatedImageAttachment_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").MatchContainer;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function a(a){a=a.attachment;a=i(g!==void 0?g:g=b("CometUFICommentAnimatedImageAttachment_attachment.graphql"),a);var c=a.media;if(c==null)throw b("unrecoverableViolation")("Unable to render a gif with no associated media","ufi2");return c.__typename==="Video"?j.jsx(h,{match:c,props:{attachment:a}}):j.jsx(b("CometUFICommentAnimatedImageAttachmentFallbackRenderer.react"),{attachment:a})}e.exports=a}),null);
__d("CometUFICommentAnimatedImageShareAttachmentStyle.react",["CometRelay","CometUFICommentAnimatedImageAttachment.react","FBLogger","React","CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){a=a.styleTypeRenderer;a=a.attachment;if(a==null){b("FBLogger")("CometFeed").mustfix("CometUFICommentAnimatedImageShareAttachmentStyle: Tried to render an animated image, but attachment information is null.");return null}return h.jsx(b("CometUFICommentAnimatedImageAttachment.react"),{attachment:a})}e.exports=c(a,{styleTypeRenderer:g!==void 0?g:g=b("CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql")})}),null);