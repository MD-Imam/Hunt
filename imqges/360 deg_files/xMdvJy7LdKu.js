if (self.CavalryLogger) { CavalryLogger.start_js(["jY\/6T"]); }

__d("SphericalMediaTagging.react",["cx","React","SphericalMediaUtils"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("SphericalMediaUtils").getDPR;a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.componentDidMount=function(){this.$2(this.props.width,this.props.height)};c.UNSAFE_componentWillReceiveProps=function(a){(this.props.width!==a.width||this.props.height!==a.height)&&this.$2(a.width,a.height)};c.componentDidUpdate=function(a){this.draw(this.__getViewData())};c.draw=function(a){if(!this.$1)return;var b=this.$1,c=b.getContext("2d");if(!c)return;c.clearRect(0,0,b.width,b.height);this.props.taggingMode?this.__drawTaggingModeElements(c,a):this.__drawViewingModeElements(c,a);this.__drawCommonElements(c,a)};c.$2=function(a,b){if(!this.$1)return;var c=this.$1,d=c.getContext("2d");if(!d)return;d.clearRect(0,0,a,b);c.width=a*i();c.height=b*i()};c.render=function(){var a=this;return this.props.isActive?h.jsx("canvas",{className:"_2xob _5nxw",ref:function(b){return a.$1=b}}):null};return b}(h.Component);e.exports=a}),null);
__d("SphericalMediaTaggingCanvasElements",["SphericalMediaUtils"],(function(a,b,c,d,e,f){"use strict";var g=b("SphericalMediaUtils").getDPR,h=3.2,i=.8,j=1,k=5,l=7;a=Math.floor(l/2);var m=8,n=2,o=5,p=11,q=4,r={BORDER_WIDTH:j,TAG_ARROW_HEIGHT:k,TAG_ARROW_WIDTH:l,TAG_ARROW_WIDTH_HALF:a,TAG_SIDE_PADDING:m,TAG_TOP_PADDING:n,TAG_BOTTOM_PADDING:o,TAG_TEXT_HEIGHT:p,FACEBOX_EDGE_WIDTH:q,update:function(){var a=g();r.BORDER_WIDTH=j*a;r.TAG_ARROW_HEIGHT=k*a;r.TAG_ARROW_WIDTH=l*a;r.TAG_ARROW_WIDTH_HALF=Math.floor(r.TAG_ARROW_WIDTH/2);r.TAG_SIDE_PADDING=m*a;r.TAG_TOP_PADDING=n*a;r.TAG_BOTTOM_PADDING=o*a;r.TAG_TEXT_HEIGHT=p*a;r.FACEBOX_EDGE_WIDTH=q*a}};c={drawTag:function(a,b,c,d){var e=c.x;c=c.y+d.h/2;r.update();a.font=r.TAG_TEXT_HEIGHT+"px sans-serif";d=this.calculateTagElementDrawPoints({x:e,y:c},a.measureText(b).width);a.fillStyle="white";a.strokeStyle="rgba(0, 0, 0, 0.25)";a.beginPath();a.moveTo(e,c);d.forEach(function(b){a.lineTo(b.x,b.y)});a.closePath();a.stroke();a.fill();a.fillStyle="#404040";a.textAlign="center";a.fillText(b,e,c+r.TAG_ARROW_HEIGHT+r.TAG_TEXT_HEIGHT+r.TAG_TOP_PADDING+r.BORDER_WIDTH)},calculateTagElementDrawPoints:function(a,b){if(b<0)return[];r.update();b=b+r.TAG_SIDE_PADDING*2;return[{x:a.x+r.TAG_ARROW_WIDTH_HALF+r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT-r.BORDER_WIDTH},{x:a.x+b/2+r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT-r.BORDER_WIDTH},{x:a.x+b/2+r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT+r.TAG_TEXT_HEIGHT+r.TAG_TOP_PADDING+r.TAG_BOTTOM_PADDING+r.BORDER_WIDTH},{x:a.x-b/2-r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT+r.TAG_TEXT_HEIGHT+r.TAG_TOP_PADDING+r.TAG_BOTTOM_PADDING+r.BORDER_WIDTH},{x:a.x-b/2-r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT-r.BORDER_WIDTH},{x:a.x-r.TAG_ARROW_WIDTH_HALF-r.BORDER_WIDTH,y:a.y+r.TAG_ARROW_HEIGHT-r.BORDER_WIDTH}]},drawFacebox:function(a,b,c,d){var e=b.x-c.w/2;b=b.y-c.h/2;(d<0||d>1)&&(d=i);a.strokeStyle="rgba(0, 0, 0, "+d/h+")";a.strokeRect.apply(a,this.calculateFaceboxElementBorderDrawPoints({x:e,y:b},c));r.update();a.strokeStyle="rgba(255, 255, 255, "+d+")";a.lineWidth=r.FACEBOX_EDGE_WIDTH;a.strokeRect(e,b,c.w,c.h)},calculateFaceboxElementBorderDrawPoints:function(a,b){if(b.w<0||b.h<0)return[];r.update();return[a.x-r.FACEBOX_EDGE_WIDTH/2-r.BORDER_WIDTH,a.y-r.FACEBOX_EDGE_WIDTH/2-r.BORDER_WIDTH,b.w+r.FACEBOX_EDGE_WIDTH+r.BORDER_WIDTH,b.h+r.FACEBOX_EDGE_WIDTH+r.BORDER_WIDTH]}};e.exports=c}),null);
__d("SphericalPhotoTagging.redux",["ReactRedux","SphericalMediaConstants","SphericalMediaTagging.react","SphericalMediaTaggingCanvasElements","SphericalMediaTaggingUtils","SphericalMediaUtils","SphericalMediaViewportAnimation","SphericalPhotoPartialLimits","SphericalPhotoProjectionUtils","SphericalPhotoTypedConfig","SphericalProjectionUtils","debounce"],(function(a,b,c,d,e,f){"use strict";a=b("ReactRedux").connect;var g=b("SphericalMediaConstants").UNTAGGED_FACEBOX,h=(c=b("SphericalMediaTaggingUtils")).compareTags,i=c.getSpatialTagArea,j=c.getSpatialTagAreaInNewPhotoRenderer,k=c.pointsToRectSize,l=b("SphericalMediaUtils").getDPR,m=b("SphericalMediaViewportAnimation").moveTo,n=b("SphericalPhotoPartialLimits").makePartialLimits,o=b("SphericalPhotoPartialLimits").normalizePhotoRendererViewWithPartialLimits,p=b("SphericalPhotoPartialLimits").normalizeViewWithPartialLimits;d={__drawTaggingModeElements:!0,__getViewData:!0,__drawViewingModeElements:!0,__drawCommonElements:!0};f=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$SphericalPhotoTagging1=function(){d.draw(d.__getViewData())},d.$SphericalPhotoTagging6=b("debounce")(function(a){var c=d.__getViewData();c=c.fov;a=a.center;var e=a.pitch;a=a.yaw;var f=d.props,g=f.aspectRatio,h=f.tagger,i=f.partialLimits;f=f.showNewPhotoRenderer;h&&h.hideTagger();if(f){h=b("SphericalPhotoProjectionUtils").getPartialLimits(c,g,n({partialLeftDegrees:i.partialLeftDegrees,partialRightDegrees:i.partialRightDegrees,partialTopDegrees:i.partialTopDegrees,partialBottomDegrees:i.partialBottomDegrees}));d.props.viewStore.dispatch(m(o({fov:c,pitch:e,yaw:a},n(h))))}else d.props.viewStore.dispatch(m(p({fov:c,pitch:e,yaw:a},n({partialLeftDegrees:i.partialLeftDegrees,partialRightDegrees:i.partialRightDegrees,partialTopDegrees:i.partialTopDegrees,partialBottomDegrees:i.partialBottomDegrees}))))},500),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){a.prototype.componentDidMount.call(this),this.props.viewStore.subscribe(this.$SphericalPhotoTagging1)};d.UNSAFE_componentWillReceiveProps=function(b){a.prototype.UNSAFE_componentWillReceiveProps.call(this,b)};d.$SphericalPhotoTagging2=function(){var a=l();a={width:this.props.width*a,height:this.props.height*a};return a};d.$SphericalPhotoTagging3=function(a){var c=this.__getViewData(),d;if(this.props.showNewPhotoRenderer){var e=this.props.partialLimits;d=b("SphericalPhotoProjectionUtils").convert3dTo2d(a.center.yaw,a.center.pitch,c,this.$SphericalPhotoTagging2().width,this.$SphericalPhotoTagging2().height,e);e=j(a,this.__getViewData(),{w:this.$SphericalPhotoTagging2().width,h:this.$SphericalPhotoTagging2().height},e)}else d=b("SphericalProjectionUtils").convert3dTo2dScaledUnique(a.center.yaw,a.center.pitch,c.yaw,c.pitch,c.fov,this.$SphericalPhotoTagging2().width,this.$SphericalPhotoTagging2().height),e=i(a,this.__getViewData(),{w:this.$SphericalPhotoTagging2().width,h:this.$SphericalPhotoTagging2().height});c=k(e);return{tagPoint:d,boxSize:c}};d.$SphericalPhotoTagging4=function(a,c){var d=this.$SphericalPhotoTagging3(c),e=d.tagPoint;d=d.boxSize;if(e.x<0||e.y<0)return;b("SphericalMediaTaggingCanvasElements").drawTag(a,c.label,e,d)};d.$SphericalPhotoTagging5=function(a,c,d){c=this.$SphericalPhotoTagging3(c);var e=c.tagPoint;c=c.boxSize;if(e.x<0||e.y<0)return;b("SphericalMediaTaggingCanvasElements").drawFacebox(a,e,c,d)};d.__drawViewingModeElements=function(a,b){var c=this;b=this.props;var d=b.tagClicked,e=b.isTagging,f=b.tagUnderMouse;b=b.tags;var i=!1,j=!1;(f||e)&&(d&&e&&((!i||i&&!h(f,d))&&(this.$SphericalPhotoTagging5(a,d,.4),j=!0)),f&&(f.type!==g?this.$SphericalPhotoTagging4(a,f):(!j||j&&!h(f,d))&&this.$SphericalPhotoTagging5(a,f,.4),i=!0),b.forEach(function(b){if(b.type!==g||i&&h(b,f)||j&&h(b,d))return;c.$SphericalPhotoTagging5(a,b,.2)}))};d.__drawTaggingModeElements=function(a,b){var c=this;b=this.props;var d=b.tagClicked,e=b.tags,f=b.tagUnderMouse;e.forEach(function(b){var e=d===b?1:f===b?.8:.3;b.type!==g?f===b&&c.$SphericalPhotoTagging4(a,b):c.$SphericalPhotoTagging5(a,b,e)})};d.__drawCommonElements=function(a,b){b=this.props.targetedTag;b&&(this.$SphericalPhotoTagging6(b),this.$SphericalPhotoTagging5(a,b,.8))};d.__getViewData=function(){var a=this.props.viewStore.getState();a=a.view;return{fov:a.fov,pitch:a.pitch,yaw:a.yaw}};return c}(b("SphericalMediaTagging.react"));f.__subClassMethods=d;c=function(a){a=a.base;return{aspectRatio:a.aspectRatio,isActive:a.enableTagging,height:a.height,isTagging:a.isTagging,partialLimits:n({partialLeftDegrees:a.partialLimits.partialLeftDegrees,partialRightDegrees:a.partialLimits.partialRightDegrees,partialBottomDegrees:a.partialLimits.partialBottomDegrees,partialTopDegrees:a.partialLimits.partialTopDegrees}),tagClicked:a.tagClicked,taggingMode:a.taggingMode,tagger:a.tagger,tags:a.tags,tagUnderMouse:a.tagUnderMouse,targetedTag:a.targetedTag,showNewPhotoRenderer:a.tiledSphericalConfig.useTiledRenderer&&b("SphericalPhotoTypedConfig").show_new_renderer,viewStore:a.viewStore,width:a.width}};e.exports=a(c)(f)}),null);