if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("VideoPlayerWatchEndScreenWithActions_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchEndScreenWithActions_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerReshareButton_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerCometFeedStoryControlsImplLive_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedStoryControlsImplLive_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerLiveVideoControls_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedStoryControlsImplNotLive_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerScrubberPreview_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchAndScrollControl_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerCaptionsControl_video"},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"recipient_group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerDefaultControlsImplMusicClip_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerDefaultControlsImplMusicClip_video",selections:[{alias:null,args:null,concreteType:"XFBMusicAttachmentMetadata",kind:"LinkedField",name:"music_attachment_metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_time_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start_time_ms",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerMoreVideosOnWatchButton.react",["fbt","ix","CometTrackingNodeProvider.react","VideoPlayerActionButton.react","XCometWatchControllerRouteBuilder","fbicon","react","requireDeferred","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerMoreVideosOnWatchButton.react");function a(a){a=a.useVerticalLayout;var b=c("useCometRouterDispatcher")(),e=function(){k.onReady(function(a){a.log({click_point:"ugc_inline_end_screen",event:"click",event_target:"watch"})});var a=c("XCometWatchControllerRouteBuilder").buildURL({});b!=null&&b.go(a,{})};return j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:449,children:j.jsx(c("VideoPlayerActionButton.react"),{icon:d("fbicon")._(i("607168"),16),label:h._(/*FBT_CALL*/"More Videos on Watch"/*FBT_CALL*/),onPress:function(){return e()},useVerticalLayout:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchEndScreenWithActions.react",["CometColumn.react","CometColumnItem.react","CometRelay","VideoPlayerMoreVideosOnWatchButton.react","VideoPlayerReshareButton.react","VideoPlayerWatchAgainButton.react","VideoPlayerWatchEndScreenWithActions_video.graphql","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={actions:{alignItems:"bp9cbjyn"},watchActions:{display:"j83agx80",justifyContent:"taijpn5t"}};function a(a){var e=a.isWatchEligible;a=a.video$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchEndScreenWithActions_video.graphql"),a);return e===!1&&c("VideoPlayerMoreVideosOnWatchButton.react")?i.jsxs("div",{className:c("stylex")(j.watchActions),children:[i.jsx(c("VideoPlayerMoreVideosOnWatchButton.react"),{useVerticalLayout:!0}),i.jsx(c("VideoPlayerWatchAgainButton.react"),{useVerticalLayout:!0}),i.jsx(c("VideoPlayerReshareButton.react"),{useVerticalLayout:!0,video:a})]}):i.jsxs(c("CometColumn.react"),{xstyle:j.actions,children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("VideoPlayerWatchAgainButton.react"),{})}),i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("VideoPlayerReshareButton.react"),{video:a})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerCometFeedStoryControlsImplLive.react",["CometRelay","VideoPlayerCometFeedStoryControlsImplLive_video.graphql","VideoPlayerLiveVideoControls.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.disablePlaybackControls,f=a.expandControl,g=a.isAdVideo,j=a.isControlsVisible,k=a.isExpandControlVisible,l=a.isVolumeControlVisible,m=a.isWatchAndScrollControlVisible,n=a.isWatchAndScrollDisabled,o=a.onUserInteraction,p=a.reactionVideoChannelType,q=a.shouldHideRewindControls,r=a.subOrigin,s=a.video;a=a.videoTahoeUrl;s=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerCometFeedStoryControlsImplLive_video.graphql"),s);var t=c("gkx")("976093");return i.jsx(c("VideoPlayerLiveVideoControls.react"),{disablePlaybackControls:e,expandControl:f,isControlsVisible:j,isExpandControlVisible:k,isVolumeControlVisible:l,isWatchAndScrollControlVisible:m,onUserInteraction:o,reactionVideoChannelType:p,shouldHideRewindControls:q,shouldRenderCastControl:!g,shouldRenderWatchAndScrollControl:!t&&!g&&n!==!0,subOrigin:r,video:s,videoTahoeUrl:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerNPCPlaybackControl.react",["fbt","ix","CometImage.react","CometPressable.react","VideoHomeTypedLoggerLite","VideoPlayerHooks","react","stylex","useFeedClickEventHandler","useVideoPlayerControllerSubscription"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useEffect;function a(a){var b=a.isVisible;a=a.unmuteOnPlay;var e=a===void 0?!1:a;k(function(){c("VideoHomeTypedLoggerLite").log({event:"npc_control_large_playback_button_impression"})},[]);a=c("useVideoPlayerControllerSubscription")(function(a,b){var c=a.getCurrentState(),d=c.ended,e=c.paused,f=c.playing,g=c.stalling;a=a.getPlayheadPosition();c=c.duration;e=!e&&(f||g);g=!f&&d&&a>=c;return b!=null&&b.showPauseButton===e&&b.showReplayButton===g?b:{showPauseButton:e,showReplayButton:g}});var f=a.showPauseButton;a=a.showReplayButton;var g=d("VideoPlayerHooks").useController(),l=c("useFeedClickEventHandler")(function(){c("VideoHomeTypedLoggerLite").log({click_point:"npc_control_large_playback_button",event:"click",event_target:"video"}),f?g.pause("user_initiated"):(e&&g.setMuted(!1,"user_initiated"),g.play("user_initiated"))});a=f?"pause":a?"replay":"play";var m="",n=null;a==="pause"?(m=h._(/*FBT_CALL*/"Pause"/*FBT_CALL*/),n=j.jsx(c("CometImage.react"),{src:i("1343456")})):a==="replay"?(m=h._(/*FBT_CALL*/"Replay"/*FBT_CALL*/),n=j.jsx(c("CometImage.react"),{src:i("215005")})):a==="play"&&(m=h._(/*FBT_CALL*/"Play"/*FBT_CALL*/),n=j.jsx(c("CometImage.react"),{src:i("101640")}));a=l!=null?j.jsx(c("CometPressable.react"),{display:"inline",label:m,onPress:l,overlayDisabled:!0,children:n}):n;return j.jsx("i",{className:c("stylex").dedupe({"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","cursor-1":"nhd2j8a9","height-1":"m7zwrmfr","margin-top-1":"jtnsf9zi","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"kw0a5h6o","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"kfkz5moi","top-1":"mvsipfk5","width-1":"tmrshh9y"},b?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerNPCSkipControlBase.react",["fbt","ix","VideoPlayerControlIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=a.onPress;var b=h._(/*FBT_CALL*/"Skip to next video"/*FBT_CALL*/),e=d("fbicon")._(i("1052613"),20);return j.jsx(c("VideoPlayerControlIcon.react"),{icon:e,label:b,onPress:a,tooltip:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerNPCSkipControl.react",["CometVideoHomeFeedAutoAdvanceAPIContext","VideoHomeTypedLoggerLite","VideoPlayerNPCSkipControlBase.react","react","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect;function a(){j(function(){c("VideoHomeTypedLoggerLite").log({event:"control_npc_skip_video_impression"})},[]);var a=i(c("CometVideoHomeFeedAutoAdvanceAPIContext")),b=c("useFeedClickEventHandler")(function(){c("VideoHomeTypedLoggerLite").log({click_point:"control_npc_skip_video",event:"click",event_target:"video"}),a.advance(1)});return h.jsx(c("VideoPlayerNPCSkipControlBase.react"),{onPress:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerScrubberBottomWithPreview.react",["VideoPlayerScrubber.react","VideoPlayerScrubberPreview.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.onUserInteraction,d=a.video;return h.jsx("i",{className:"k4urcfbm g88b62oe j9ispegn pmk7jnqg pedkr2u6 nhd2j8a9",children:h.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b,renderTooltip:function(a){return h.jsx(c("VideoPlayerScrubberPreview.react"),{timestampSec:a,video:d})}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerTimeSkipBackwardLargeBase.react",["fbt","ix","CometPressable.react","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.isVisible;b=b===void 0?!1:b;a=a.onPress;var e=h._(/*FBT_CALL*/"Go backward 10 seconds"/*FBT_CALL*/),f=d("fbicon")._(i("214057"),24);e=a!=null?j.jsx(c("CometPressable.react"),{display:"inline",label:e,onPress:a,overlayDisabled:!0,children:j.jsx(c("TetraIcon.react"),{color:"white",icon:f})}):j.jsx(c("TetraIcon.react"),{color:"white",icon:f});return j.jsx("i",{className:c("stylex").dedupe({"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","cursor-1":"nhd2j8a9","height-1":"rgmg9uty","margin-top-1":"jtnsf9zi","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"kw0a5h6o","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"r3d6lwcc","top-1":"plmq7yfl","width-1":"b73ngqbp"},b?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerTimeSkipControlBase.react",["fbt","ix","VideoPlayerControlIcon.react","fbicon","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.onPress;a=a.timeskipIcon;var e,f;switch(a){case"skip_backward":e=h._(/*FBT_CALL*/"Go back 10 seconds"/*FBT_CALL*/);f=d("fbicon")._(i("213496"),20);break;case"skip_forward":e=h._(/*FBT_CALL*/"Go forward 10 seconds"/*FBT_CALL*/);f=d("fbicon")._(i("213498"),20);break;default:a;throw c("unrecoverableViolation")("The timeskip icon is unsupported "+a,"comet_video_player")}return j.jsx(c("VideoPlayerControlIcon.react"),{icon:f,label:e,onPress:b,tooltip:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerTimeSkipBackwardControl.react",["VideoHomeTypedLoggerLite","VideoPlayerHooks","VideoPlayerTimeSkipBackwardLargeBase.react","VideoPlayerTimeSkipControlBase.react","react","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect,j=10;function a(a){var b=a.isLarge;b=b===void 0?!1:b;a=a.isVisible;a=a===void 0?!1:a;var e="npc_control_time_skip_backward_impression",f="control_time_skip_backward";b&&(e="npc_control_time_skip_backward_large_impression",f="control_time_skip_backward_large");i(function(){c("VideoHomeTypedLoggerLite").log({event:e})},[e]);var g=d("VideoPlayerHooks").useController(),k=c("useFeedClickEventHandler")(function(){c("VideoHomeTypedLoggerLite").log({click_point:f,event:"click",event_target:"video"});var a=g.getCurrentState().seekableRanges;a=(a=a==null?void 0:a.start(0))!=null?a:0;a=Math.max(g.getPlayheadPosition()-j,a);g.seek(a)});return b?h.jsx(c("VideoPlayerTimeSkipBackwardLargeBase.react"),{isVisible:a,onPress:k}):h.jsx(c("VideoPlayerTimeSkipControlBase.react"),{onPress:k,timeskipIcon:"skip_backward"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerTimeSkipForwardLargeBase.react",["fbt","ix","CometPressable.react","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.isVisible;b=b===void 0?!1:b;a=a.onPress;var e=h._(/*FBT_CALL*/"Go forward 10 seconds"/*FBT_CALL*/),f=d("fbicon")._(i("214059"),24);e=a!=null?j.jsx(c("CometPressable.react"),{display:"inline",label:e,onPress:a,overlayDisabled:!0,children:j.jsx(c("TetraIcon.react"),{color:"white",icon:f})}):j.jsx(c("TetraIcon.react"),{color:"white",icon:f});return j.jsx("i",{className:c("stylex").dedupe({"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","cursor-1":"nhd2j8a9","height-1":"rgmg9uty","margin-top-1":"jtnsf9zi","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"kw0a5h6o","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"guqulc8s","top-1":"plmq7yfl","width-1":"b73ngqbp"},b?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerTimeSkipForwardControl.react",["VideoHomeTypedLoggerLite","VideoPlayerHooks","VideoPlayerTimeSkipControlBase.react","VideoPlayerTimeSkipForwardLargeBase.react","react","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect,j=10;function a(a){var b=a.isLarge;b=b===void 0?!1:b;a=a.isVisible;a=a===void 0?!1:a;var e="npc_control_time_skip_forward_impression",f="control_time_skip_forward";b&&(e="npc_control_time_skip_forward_large_impression",f="control_time_skip_forward_large");i(function(){c("VideoHomeTypedLoggerLite").log({event:e})},[e]);var g=d("VideoPlayerHooks").useController(),k=d("VideoPlayerHooks").useDuration(),l=c("useFeedClickEventHandler")(function(){c("VideoHomeTypedLoggerLite").log({click_point:f,event:"click",event_target:"video"});var a=Math.min(g.getPlayheadPosition()+j,k);g.seek(a)});return b?h.jsx(c("VideoPlayerTimeSkipForwardLargeBase.react"),{isVisible:a,onPress:l}):h.jsx(c("VideoPlayerTimeSkipControlBase.react"),{onPress:l,timeskipIcon:"skip_forward"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useVideoPlayerPlaybackRateControlNUX",["cr:11881"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:11881")}),98);
__d("VideoPlayerCometFeedStoryControlsImplNotLive.react",["fbt","CometRelay","CometTrackingNodeProvider.react","PlaybackSpeedExperiments","VideoPlayerCaptionsControl.react","VideoPlayerCastControlShim.react","VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerHooks","VideoPlayerJoinOnPortalControl.react","VideoPlayerNPCPlaybackControl.react","VideoPlayerNPCSkipControl.react","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubberBottomWithPreview.react","VideoPlayerScrubberWithPreview.react","VideoPlayerSettingsControl.react","VideoPlayerTimeSkipBackwardControl.react","VideoPlayerTimeSkipForwardControl.react","VideoPlayerVolumeControl.react","VideoPlayerWatchAndScrollControl.react","cr:1790881","cr:1809777","emptyFunction","gkx","nux:31","qex","react","useVideoPlayerBigPlayButtonOverlay","useVideoPlayerPlaybackRateControlNUX"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useState,l=d("PlaybackSpeedExperiments").isInCometHeadroomTest()?b("cr:1790881"):null,m=d("PlaybackSpeedExperiments").isInCometHeadroomTest()?b("cr:1809777"):null,n={nux:{maxWidth:"nqmqzb3c"}};function a(a){var e,f=a.disablePlaybackControls,g=a.expandControl,o=a.isAdVideo,p=a.isControlsVisible,q=a.isExpandControlVisible,r=a.isVolumeControlVisible,s=a.isWatchAndScrollControlVisible,t=a.isWatchAndScrollDisabled,u=a.onUserInteraction,v=a.subOrigin,w=a.video;a=a.videoTahoeUrl;w=d("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql"),w);var x=d("VideoPlayerHooks").useShouldShowPlaybackRateControl();x=d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControlNUX()&&["discover","entry_point"].includes(v)&&x;x=c("useVideoPlayerPlaybackRateControlNUX")(x);var y=x[0];x=x[1];var z=(w==null?void 0:w.recipient_group)!=null&&(w==null?void 0:w.captions_url)!=null;z=z&&((z=c("qex")._("1650"))!=null?z:!1);e=(e=b("nux:31")==null?void 0:b("nux:31")("comet_group_video_caption_setting"))!=null?e:c("emptyFunction");e=e({align:"end",arrowStyle:"inset",hasCloseButton:!0,label:h._(/*FBT_CALL*/"New! Use Settings to turn on auto-generated captions."/*FBT_CALL*/),position:"above",type:"accent",xstyle:n.nux},z);z=c("useVideoPlayerBigPlayButtonOverlay")();z=z.bigPlayButtonIsVisible;var A=!e&&x||p;s=s||A||f===!0&&!z;q=q||f===!0&&!o&&!z;z=c("gkx")("976093");var B=d("VideoPlayerHooks").useCaptionsLoaded(),C=d("VideoPlayerHooks").useCaptionsVisible(),D=c("gkx")("4048");a=f!==!0&&a==null;var E=a&&c("qex")._("121"),F=a&&c("qex")._("261"),G=a&&F===!1&&c("qex")._("262"),H=F===!0&&c("qex")._("262"),I=a&&c("qex")._("263");t=!z&&!o&&t!==!0&&w!=null?j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:s,children:j.jsx(c("VideoPlayerWatchAndScrollControl.react"),{subOrigin:v,video:w})}):null;s=j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:A,noPaddingEnd:!0,children:j.jsx(c("VideoPlayerJoinOnPortalControl.react"),{isVisible:A})});x=j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:!e&&x||q,noPaddingEnd:!0,noPaddingStart:!0,children:g});q=k(null);g=q[0];q=q[1];return j.jsxs(c("VideoPlayerControlsContainerOverlay.react"),{isBackgroundVisible:A,children:[H===!0?j.jsx(c("VideoPlayerTimeSkipBackwardControl.react"),{isLarge:!0,isVisible:p}):null,F===!0?j.jsx(c("VideoPlayerNPCPlaybackControl.react"),{isVisible:p}):null,H===!0?j.jsx(c("VideoPlayerTimeSkipForwardControl.react"),{isLarge:!0,isVisible:p}):null,j.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:A,children:[G===!0?j.jsx(c("VideoPlayerTimeSkipBackwardControl.react"),{}):null,F===!1||z?j.jsx(c("VideoPlayerPlaybackControl.react"),{isNPC:a}):null,G===!0?j.jsx(c("VideoPlayerTimeSkipForwardControl.react"),{}):null,E===!0?j.jsx(c("VideoPlayerNPCSkipControl.react"),{}):null,f===!0?null:j.jsx(c("VideoPlayerPlaybackTimer.react"),{}),l!=null?j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:A&&!f,children:j.jsx(l,{onUserInteraction:u})}):null]}),j.jsx(d("VideoPlayerControlsGroups.react").Expanded,{isVisible:(I===!1||z)&&A&&!f,children:j.jsx(c("VideoPlayerScrubberWithPreview.react"),{onUserInteraction:u,video:w})}),j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:I===!0&&A&&!f,children:j.jsx(c("VideoPlayerScrubberBottomWithPreview.react"),{onUserInteraction:u,video:w})}),j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:A&&!f,noPaddingEnd:!0,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:257,children:j.jsx(c("VideoPlayerSettingsControl.react"),{menuOpened:g,onUserInteraction:u,ref:(H=e)!=null?H:y,setMenuOpened:q})})}),B&&c("gkx")("5104")||D?j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:A&&!f,children:j.jsx(c("VideoPlayerCaptionsControl.react"),{captionsVisible:C,menuOpened:g,onUserInteraction:u,setMenuOpened:q,video:w})}):null,!o&&w!=null?j.jsx(c("VideoPlayerCastControlShim.react"),{isVisible:A&&!f,subOrigin:v}):null,x,s,t,m!=null?j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:!0,children:j.jsx(m,{enableNUX:d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControlHeadroomTestNUX()&&["discover","entry_point"].includes(v),onUserInteraction:u})}):null,j.jsx(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:m?!0:r,noPaddingStart:!0,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:114,children:j.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:u})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MusicSproutPlayerPlaybackTimer.react",["VideoPlayerHooks","getFormattedTimestamp","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=function(){return d("VideoPlayerHooks").useCurrentTimeThrottled(200)};function a(a){var b=a.endTimeSeconds;a=a.startTimeSeconds;var e=i();e=e-a;b=b-a;a=d("VideoPlayerHooks").usePlaying();a=e<=0&&!a?b:e;return h.jsx("div",{className:"pzggbiyp ekzrdaps oqcyycmt j9fc33cd hnxzwevs qq4y78aw ejgyrxq3 q6iep4d8 sq6gx45u q9uorilb ljqsnud1",children:h.jsx("span",{className:"odlk74j0 lrazzd5p",children:c("getFormattedTimestamp")(a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerDefaultControlsImplMusicClipConvertBoundsLogic",[],(function(a,b,c,d,e,f){"use strict";var g=1e3,h=0,i=30,j=30;function a(a,b){var c=h,d=i;a!=null&&b!=null&&(c=Math.round(a/g),d=Math.round(b/g));d>c+j&&(d=c+j);return{lower_s:c,upper_s:d}}f["default"]=a}),66);
__d("VideoPlayerDefaultControlsImplMusicClip.react",["CometRelay","MusicSproutPlayerPlaybackTimer.react","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerDefaultControlsImplMusicClipConvertBoundsLogic","VideoPlayerDefaultControlsImplMusicClip_video.graphql","VideoPlayerHooks","VideoPlayerPlaybackControl.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useEffect,k=e.useRef;function a(a){var e;a=a.video;a=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerDefaultControlsImplMusicClip_video.graphql"),a);e=a==null?void 0:(e=a.music_attachment_metadata)==null?void 0:e.start_time_ms;a=a==null?void 0:(a=a.music_attachment_metadata)==null?void 0:a.end_time_ms;e=c("VideoPlayerDefaultControlsImplMusicClipConvertBoundsLogic")(e,a);var f=e.lower_s,g=e.upper_s,l=d("VideoPlayerHooks").useController();j(function(){l.seek(f),l.pause("product_initiated")},[l,f]);var m=k(null);j(function(){var a=l.subscribe(function(){var a=l.getPlayheadPosition();a!==m.current&&(m.current=a,a>g&&(l.seek(f),l.pause("product_initiated")))});return function(){a.remove()}},[l,f,g]);a=i.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{isVisible:!0,children:[i.jsx(c("MusicSproutPlayerPlaybackTimer.react"),{endTimeSeconds:g,startTimeSeconds:f}),i.jsx(c("VideoPlayerPlaybackControl.react"),{unmuteOnPlay:!0})]});return i.jsx("div",{className:"pmk7jnqg taijpn5t btwxx1t3 h0om2nat j83agx80 d2iitwg3 bp9cbjyn",children:i.jsx(c("VideoPlayerControlsContainerOverlay.react"),{isVisible:!0,children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useVideoPlayerPlaybackRateControlNUX.good",["emptyFunction","nux:87"],(function(a,b,c,d,e,f,g){"use strict";d=(a=b("nux:87")==null?void 0:b("nux:87")("comet_playback_speed_prompt_headroom_test"))!=null?a:c("emptyFunction").thatReturns([void 0,void 0]);g["default"]=d}),98);