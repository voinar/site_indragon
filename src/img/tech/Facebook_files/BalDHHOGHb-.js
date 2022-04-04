if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("VideoPlayerWithVideoHomeLiveUpNextQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6403601239711302"}),null);
__d("VideoPlayerWithVideoHomeLiveUpNextQuery.graphql",["VideoPlayerWithVideoHomeLiveUpNextQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[c],e={kind:"InlineFragment",selections:d,type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithVideoHomeLiveUpNextQuery",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveUpNextOverlay_query"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"VideoPlayerWithVideoHomeLiveUpNextQuery",selections:[{alias:null,args:[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"video_home_section",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{kind:"InlineFragment",selections:[c,{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)'},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},c],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_huddle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null}],type:"Video",abstractKey:null},e,{kind:"InlineFragment",selections:d,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},e,{kind:"InlineFragment",selections:d,type:"CommunityChatFeedObject",abstractKey:null},{kind:"InlineFragment",selections:d,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:d,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:d,type:"XFBGroupsTabSuggestedGroupSetFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:d,type:"XFBGroupsTabSuggestedGroupSetsFeedUnit",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null},e],storageKey:null}],storageKey:null},c],storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")'}]},params:{id:b("VideoPlayerWithVideoHomeLiveUpNextQuery_facebookRelayOperation"),metadata:{},name:"VideoPlayerWithVideoHomeLiveUpNextQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerWrapper_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"isComet"}],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerWrapper_story",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroUFI_story"},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{condition:"isComet",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayer_video"}]}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedStoryInformTreatmentFooterStrategy"]}],concreteType:null,kind:"LinkedField",name:"footer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeLiveHeroPlayerWrapper_story_InformTreatmentFooter",fragmentName:"CometFeedStoryInformTreatmentFooterStrategy_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"CometFeedStoryInformTreatmentFooterStrategy",abstractKey:null}],storageKey:'footer(supported:["CometFeedStoryInformTreatmentFooterStrategy"])'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerFeaturedBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerFeaturedBadge_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_featured_live",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"live_rewind_enabled",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoOwnerLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeThreeDotContextMenuWrapper_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerSurface_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerSurface_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_shopping_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayerFeaturedBadge_video"}]},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoIndicator_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayerOverlay_video"},{args:null,kind:"FragmentSpread",name:"WorkWatchLiveHeroPlayerOverlay_video"},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWithVideoCardsOverlay_video"}]},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"}]},{args:null,kind:"FragmentSpread",name:"VideoPlayerDefaultControls_video"},{alias:null,args:[{kind:"Literal",name:"supported",value:["CometProductTagFeedOverlayRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_product_tag_feed_overlay_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeLiveHeroPlayerSurface_video",fragmentName:"CometProductTagFeedOverlayRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometProductTagFeedOverlayRenderer",abstractKey:null}],storageKey:'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])'}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayer_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"publish_time",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a],storageKey:null},{alias:"image_for_warning_screen",args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"sizing",value:"cover-fill"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayerSurface_video"},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"watch_live"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeLiveHeroPlayer_video",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"watch_live")'},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"if_viewer_can_see_pay_to_access_paywall",plural:!1,selections:[{args:null,documentName:"CometVideoHomeLiveHeroPlayer_video_paywall",fragmentName:"CometPayToAccessPaywallConditionalLoader_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometVideoHomeLiveUpNextOverlay_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveUpNextOverlay_query",selections:[{alias:null,args:[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"video_home_section",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTahoeUpNextOverlay_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")'}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("WorkWatchLiveHeroPlayerOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WorkWatchLiveHeroPlayerOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"live_rewind_enabled",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[b,{kind:"InlineFragment",selections:[c],type:"User",abstractKey:null},a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[b,a,c,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoOwnerLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeThreeDotContextMenuWrapper_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoPlayerWithUnmuteOnLivePermalinkInjection.react",["VideoPlayerHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(){var a=d("VideoPlayerHooks").useController();h(function(){a.setMuted(!1,"product_initiated")},[a]);return null}g["default"]=a}),98);
__d("CometVideoHomeLiveUpNextOverlay.react",["CometRelay","CometTahoeUpNextOverlay.react","CometVideoHomeLiveContext","CometVideoHomeLiveUpNextOverlay_query.graphql","XCometVideoHomeLiveControllerRouteBuilder","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useState,l=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("CometVideoHomeLiveUpNextOverlay.react"),m=5;function a(a){var b=k(!1),c=b[0];b=b[1];return c?null:i.jsx(n,babelHelpers["extends"]({},a,{setCancelled:b}))}a.displayName=a.name+" [from "+f.id+"]";function n(a){var e=a.query,f=a.setCancelled;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeLiveUpNextOverlay_query.graphql"),e);e=a.video_home_section;a=j(c("CometVideoHomeLiveContext"));var g=a.setHotswapVideoID,k=e==null?void 0:(a=e.section_components)==null?void 0:(e=a.nodes)==null?void 0:(a=e[0])==null?void 0:(e=a.feed_unit)==null?void 0:(a=e.attachments)==null?void 0:(e=a[0])==null?void 0:e.media;if(k==null)return null;a={};k.id!=null&&(a.v=k.id);e=c("XCometVideoHomeLiveControllerRouteBuilder").buildURL(a);a=function(){g(k.id),l.onReady(function(a){a.log({event:"www_live_hero_up_next_chain",event_target:"video",event_target_id:k.id})})};return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg mrt03zmi n7fi1qx3 i09qtzwb qqguqgly",children:i.jsx(c("CometTahoeUpNextOverlay.react"),{isMakingProgress:!0,navigateToNextVideo:a,nextVideoURL:e,onCancelCallback:function(){return f(!0)},onProgressDone:a,timeoutSec:m,video:k,visible:!0})})}n.displayName=n.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWithVideoHomeLiveUpNext.react",["CometPlaceholder.react","CometRelay","CometVideoHomeLiveUpNextOverlay.react","VideoPlayerHooks","VideoPlayerWithVideoHomeLiveUpNextQuery.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var b=d("VideoPlayerHooks").useEnded();return!b?null:i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(j,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";function j(a){var e=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("VideoPlayerWithVideoHomeLiveUpNextQuery.graphql"),{});return i.jsx(c("CometVideoHomeLiveUpNextOverlay.react"),babelHelpers["extends"]({},a,{query:e}))}j.displayName=j.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveHeroPlayer.react",["CometRelay","CometSetWatchAndScrollVideoContext","CometVideoHomeInjectionPortalingContext","CometVideoHomeLiveContext","CometVideoHomeLiveHeroPlayer_video.graphql","CometVideoHomePortalingPlaceholder.react","CometWarningScreenContext","CometWatchAndScrollVideoContext","VideoPlayerLoggingSuboriginContext","VideoPlayerRelay.react","deferredLoadComponent","react","requireDeferredForDisplay","unrecoverableViolation","useInjectionPortalingFromVideoIDCloseWatchAndScroll","useMediaViewerVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useEffect,l=e.useMemo,m=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometVideoHomeLiveHeroPlayerSurface.react").__setRef("CometVideoHomeLiveHeroPlayer.react"));function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeLiveHeroPlayer_video.graphql"),a.video);a=j(c("CometVideoHomeLiveContext"));var f=a.heroVideoID,g=a.setHeroVideoID;a=a.startTimestamp;k(function(){g(e.id)},[g,e.id]);var n=j(c("VideoPlayerLoggingSuboriginContext")),o=j(c("CometVideoHomeInjectionPortalingContext")),p=o.initialTracePolicy,q=o.injectedVideoID;o=o.subOrigin;var r=null,s=n;if(f===q){r=p;s=(f=o)!=null?f:n}if(s==null)throw c("unrecoverableViolation")("Missing or empty subOrigin. Did you forget the VideoHomeLoggingSuboriginContext provider or the value in it?","watch_www_bug_rotation");p=(q=e.image_for_warning_screen)==null?void 0:q.uri;f=(o=e.cix_screen)==null?void 0:o.view_model;var t=(n=e.owner)==null?void 0:n.id,u=e.publish_time,v=e.id,w=(q=e.container_story)==null?void 0:q.post_id;o=e.if_viewer_can_see_pay_to_access_paywall;n=l(function(){return{authorId:t,createdTime:u,fbid:v,source:29,storyContainerId:w}},[t,u,v,w]);q=c("useMediaViewerVPVDLogger")(n);n=q[0];q=q[1];var x=c("useInjectionPortalingFromVideoIDCloseWatchAndScroll")(),y=j(c("CometSetWatchAndScrollVideoContext")),z=j(c("CometWatchAndScrollVideoContext"));o=o!=null?i.jsx("div",{className:"k4urcfbm taijpn5t datstx6m j83agx80",children:i.jsx("div",{className:"bglkmn5o l9j0dhe7 d2edcug0 nwf6jgls tqsryivl",children:i.jsx(d("CometRelay").MatchContainer,{match:o})})}):i.jsxs("div",{className:"k4urcfbm taijpn5t datstx6m j83agx80",ref:n,children:[q,i.jsx("div",{className:"bglkmn5o l9j0dhe7 d2edcug0 nwf6jgls tqsryivl",children:i.jsxs(d("CometWarningScreenContext").CometWarningScreenContextProvider,{overlayExists:f!=null,children:[i.jsx(c("VideoPlayerRelay.react"),{initialForceHD:!0,initialTracePolicy:r,portalingEnabled:!0,portalingFromVideoID:x,portalingRenderPlaceholder:function(){return i.jsx(c("CometVideoHomePortalingPlaceholder.react"),{onPressWatchAndScrollPlaceholder:function(){y(null)},watchAndScrollVideo:z})},startTimestamp:a,subOrigin:s,video:e,children:i.jsx(m,{subOrigin:s,video:e})}),f!=null&&i.jsx(d("CometRelay").MatchContainer,{match:f,props:{allowReCoveringContent:!1,alwaysShowDetails:!0,alwaysUseSmallLayout:!1,contentID:v,data:f,mediaUri:p,storyID:w,surface:"WATCH_LIVE",url:null}})]})})]});return i.jsx("div",{className:"cxj30y35",children:o})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveHeroPlayerWrapper.react",["CometErrorBoundary.react","CometFeedMatchRenderer.react","CometRelay","CometStoryRenderLocationContext.react","CometVideoHomeLiveHeroPlayer.react","CometVideoHomeLiveHeroPlayerWrapper_story.graphql","CometVideoHomeLiveHeroUFI.react","CometVideoPlayerInstreamAdsFeedContextCardContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useMemo,k=e.useState;function a(a){var e,f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeLiveHeroPlayerWrapper_story.graphql"),a.story),g=k(null),l=g[0],m=g[1];g=j(function(){return{isWatchTab:!0,onNodeChangeFunc:function(a){return m(a)}}},[]);e=f==null?void 0:(e=f.attachments)==null?void 0:(e=e[0])==null?void 0:e.media;return f==null||e==null?null:i.jsx(c("CometErrorBoundary.react"),{children:i.jsxs(i.Fragment,{children:[i.jsxs(d("CometVideoPlayerInstreamAdsFeedContextCardContext").CometVideoPlayerInstreamAdsFeedContextCardContext.Provider,{value:g,children:[i.jsx(c("CometVideoHomeLiveHeroPlayer.react"),{video:e}),i.jsx(c("CometStoryRenderLocationContext.react").Provider,{value:"video_home_feed",children:i.jsxs("div",{className:"bglkmn5o l9j0dhe7 d2edcug0 f9o22wc5 ad2k81qe cwj9ozl2",children:[i.jsx(c("CometFeedMatchRenderer.react"),{match:(g=f.comet_sections)==null?void 0:g.footer,props:{},section:"footer",trackingData:f.encrypted_tracking}),l]})})]}),a.disableUFI!==!0&&i.jsx(c("CometVideoHomeLiveHeroUFI.react"),{expandComments:a.playerSubOrigin==="live_hero"&&a.playerOrigin==="pages_live_tab",story:f})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveHeroPlayerFeaturedBadge.react",["fbt","ix","CometPressable.react","CometRelay","CometVideoHomeLiveHeroPlayerFeaturedBadge_video.graphql","JSResourceForInteraction","TetraIcon.react","TetraText.react","fbicon","react","stylex","useCometLazyDialog","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=c("JSResourceForInteraction")("CometVideoHomeLiveHeroPlayerFeaturedDialog.react").__setRef("CometVideoHomeLiveHeroPlayerFeaturedBadge.react"),m=j!==void 0?j:j=b("CometVideoHomeLiveHeroPlayerFeaturedBadge_video.graphql");function a(a){a=a.video;a=d("CometRelay").useFragment(m,a);var b=c("useCometLazyDialog")(l);b=b[0];var e=c("useVideoPlayerDefaultControlsVisibility")({forceVisibleOnMount:!0});e=e.isControlsVisible;return(a==null?void 0:a.is_featured_live)!==!0?null:k.jsx("div",{className:c("stylex").dedupe({"background-color-1":"rt97infa","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","color-1":"ljqsnud1","font-size-1":"b0k1zwb0","margin-start-1":"h676nmdw","padding-top-1":"linoseic","padding-end-1":"p8fzw8mz","padding-bottom-1":"pby63qed","padding-start-1":"pcp91wgn"},e?{"bottom-1":"eq283sal","position-1":"pmk7jnqg"}:null,e?null:{"bottom-1":"ibw6pg1x","position-1":"pmk7jnqg"}),children:k.jsxs(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/"Open Featured Live Video Info Card"/*FBT_CALL*/),onPress:b,children:[k.jsx("div",{style:{marginBottom:3,paddingRight:6},children:k.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("479176"),16)})}),k.jsx("div",{style:{marginTop:8},children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"button1",children:h._(/*FBT_CALL*/"Featured"/*FBT_CALL*/)})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveHeroPlayerOverlay.react",["fbt","CometImageIcon_DEPRECATED.react","CometRelay","CometVideoHomeChainingCallerContext","CometVideoHomeLiveHeroPlayerOverlay_video.graphql","CometVideoHomeLiveLoggerContext","CometVideoHomeLiveUtils","CometVideoHomeThreeDotContextMenuWrapper.react","CometVideoHomeVerifiedPageTooltip.react","CometVideoHomeVideoLink.react","CometVideoHomeVideoOwnerLink.react","LiveVideoDestinationTypedLoggerLite","TetraTextPairing.react","VideoBroadcastStatus","react","stylex","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext,l=i!==void 0?i:i=b("CometVideoHomeLiveHeroPlayerOverlay_video.graphql");function a(a){var b,e;a=d("CometRelay").useFragment(l,a.video);var f=k(c("CometVideoHomeChainingCallerContext")),g=k(c("CometVideoHomeLiveLoggerContext")),i=g.timeEntered;g=c("useVideoPlayerDefaultControlsVisibility")({forceVisibleOnMount:!0});var m=g.isControlsVisible;g=g.onUserInteraction;if(!m)return null;m=(m=a.owner)==null?void 0:(m=m.profile_picture)==null?void 0:m.uri;b=(b=a.owner)==null?void 0:b.name;e=a.name!=null&&a.name!==""?a.name:(e=a.savable_description)==null?void 0:e.text;var n=a.broadcast_status===c("VideoBroadcastStatus").LIVE,o=Boolean(a==null?void 0:a.live_rewind_enabled);return j.jsxs(j.Fragment,{children:[!n&&j.jsx("div",{className:"k4urcfbm sizpolk9 kr520xx4 pmk7jnqg pioscnbf kpb67iw4"}),n&&o&&j.jsx("div",{className:"k4urcfbm pmk7jnqg pe468gzs i09qtzwb kpb67iw4"}),j.jsxs("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","bottom-1":"lfi1tu6t","display-1":"j83agx80","end-1":"cypi58rs","max-width-1":"d2edcug0","overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs","position-1":"pmk7jnqg","start-1":"re5koujm"},n?null:{"bottom-1":"erznsawz","top-1":"dn56xbwz"},o&&n?{"bottom-1":"mio9le5o"}:null),children:[j.jsx("div",{className:"j102wcjv",children:j.jsx(c("CometVideoHomeVideoOwnerLink.react"),{"aria-label":h._(/*FBT_CALL*/"Link to Profile"/*FBT_CALL*/),video:a,children:m!=null&&j.jsx(c("CometImageIcon_DEPRECATED.react"),{size:48,src:m})})}),j.jsxs("div",{className:"hpfvmrgz ozuftl9m gso5pdkr"+(n?" izkdicnu":""),children:[j.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[e!=null&&e!==""&&j.jsx("span",{className:"oytq2wg0 hpfvmrgz n3ffmt46 a5q79mjw bnpdmtie ljqsnud1",children:j.jsx(c("CometVideoHomeVideoLink.react"),{caller:f,clickPoint:"video_title",onClick:function(a){c("LiveVideoDestinationTypedLoggerLite").log({event:"exited_surface",next_surface:"fullscreen",time_spent_ms:d("CometVideoHomeLiveUtils").getTimeSpent(i)})},openInTahoe:!0,video:a,children:j.jsx(c("TetraTextPairing.react"),{body:e,bodyColor:"white",bodyLineLimit:1,headlineColor:"white",headlineLineLimit:1,level:1})})}),!n&&j.jsx("div",{className:"pcp91wgn pby63qed p8fzw8mz linoseic h676nmdw e9vueds3 pfnyh3mw ljqsnud1 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj d6rk862h",children:h._(/*FBT_CALL*/"Recorded live"/*FBT_CALL*/)})]}),j.jsxs("div",{className:"l9j0dhe7 fdg1wqfs jq4qci2q av1wybal j102wcjv",children:[j.jsx(c("CometVideoHomeVideoOwnerLink.react"),{video:a,children:b}),((o=a.owner)==null?void 0:o.is_verified)===!0&&j.jsx(c("CometVideoHomeVerifiedPageTooltip.react"),{})]})]})]}),j.jsx("div",{className:"fcg2cn6m pmk7jnqg swmj3c3o",children:j.jsx(c("CometVideoHomeThreeDotContextMenuWrapper.react"),{onUserInteraction:g,video:a,videoMenuLocation:"VIDEO_HOME_LIVE_TAB"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WorkFeatureAccessControl",["WorkCompanyEnabledFeatures"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return c("WorkCompanyEnabledFeatures").features.includes(a)};b=function(){return c("WorkCompanyEnabledFeatures").features.includes("paid_base")};d=function(a){if(c("WorkCompanyEnabledFeatures").features.includes(a))return"allowed";else return"feature_not_available"};g.isFeatureAllowed=a;g.arePaidFeaturesAllowed=b;g.accessResponse=d;g.allowedFeatures=c("WorkCompanyEnabledFeatures").features}),98);
__d("WorkGroupOfficialStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({OFFICIAL:"OFFICIAL",UNOFFICIAL:"UNOFFICIAL"});f["default"]=a}),66);
__d("WorkWatchLiveHeroPlayerOverlay.react",["fbt","ix","CometIcon.react","CometLink.react","CometProfilePhoto.react","CometRelay","CometVideoHomeChainingCallerContext","CometVideoHomeLiveLoggerContext","CometVideoHomeLiveUtils","CometVideoHomeThreeDotContextMenuWrapper.react","CometVideoHomeVideoLink.react","CometVideoHomeVideoOwnerLink.react","ImageIconSource","LiveVideoDestinationTypedLoggerLite","TetraText.react","TetraTextPairing.react","VideoBroadcastStatus","WorkCometActorHovercard.react","WorkFeatureAccessControl","WorkGroupOfficialStatus","WorkWatchLiveHeroPlayerOverlay_video.graphql","getJSEnumSafe","react","stylex","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useContext,m=j!==void 0?j:j=b("WorkWatchLiveHeroPlayerOverlay_video.graphql");function a(a){var b,e;a=d("CometRelay").useFragment(m,a.video);var f=l(c("CometVideoHomeChainingCallerContext")),g=l(c("CometVideoHomeLiveLoggerContext")),j=g.timeEntered;g=c("useVideoPlayerDefaultControlsVisibility")({forceVisibleOnMount:!0});var n=g.isControlsVisible;g=g.onUserInteraction;if(!n)return null;n=(n=a.owner)==null?void 0:(n=n.profile_picture)==null?void 0:n.uri;b=a.name!=null&&a.name!==""?a.name:(b=a.savable_description)==null?void 0:b.text;var o=a.broadcast_status===c("VideoBroadcastStatus").LIVE,p=Boolean(a==null?void 0:a.live_rewind_enabled),q=(e=a.feedback)==null?void 0:e.associated_group,r=a.owner,s=(q==null?void 0:q.id)!=null?q:r,t=d("WorkFeatureAccessControl").isFeatureAllowed&&c("getJSEnumSafe")(c("WorkGroupOfficialStatus"),q==null?void 0:q.work_official_status)==="OFFICIAL"?k.jsx("span",{className:"kkf49tns bp9cbjyn pq6dq46d",children:k.jsx(c("CometIcon.react"),{icon:new(c("ImageIconSource"))(i("1031590"),16,16)})}):null;return k.jsxs(k.Fragment,{children:[!o&&k.jsx("div",{className:"k4urcfbm sizpolk9 kr520xx4 pmk7jnqg pioscnbf kpb67iw4"}),o&&p&&k.jsx("div",{className:"k4urcfbm pmk7jnqg pe468gzs i09qtzwb kpb67iw4"}),k.jsxs("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","bottom-1":"lfi1tu6t","display-1":"j83agx80","end-1":"cypi58rs","max-width-1":"d2edcug0","overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs","position-1":"pmk7jnqg","start-1":"re5koujm"},o?null:{"bottom-1":"erznsawz","top-1":"dn56xbwz"},p&&o?{"bottom-1":"mio9le5o"}:null),children:[k.jsx("div",{className:"j102wcjv",children:k.jsx(c("CometVideoHomeVideoOwnerLink.react"),{"aria-label":h._(/*FBT_CALL*/"Link to Profile"/*FBT_CALL*/),video:a,children:n!=null&&k.jsx(c("CometProfilePhoto.react"),{linkProps:{url:n},shape:"circle",size:48,source:{uri:n}})})}),k.jsxs("div",{className:"hpfvmrgz ozuftl9m gso5pdkr"+(o?" izkdicnu":""),children:[k.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[b!=null&&b!==""&&k.jsx("span",{className:"oytq2wg0 hpfvmrgz n3ffmt46 a5q79mjw bnpdmtie ljqsnud1",children:k.jsx(c("CometVideoHomeVideoLink.react"),{caller:f,clickPoint:"video_title",onClick:function(a){c("LiveVideoDestinationTypedLoggerLite").log({event:"exited_surface",next_surface:"fullscreen",time_spent_ms:d("CometVideoHomeLiveUtils").getTimeSpent(j)})},openInTahoe:!0,video:a,children:k.jsx(c("TetraTextPairing.react"),{body:b,bodyColor:"white",bodyLineLimit:1,headlineColor:"white",headlineLineLimit:1,level:1})})}),!o&&k.jsx("div",{className:"pcp91wgn pby63qed p8fzw8mz linoseic h676nmdw e9vueds3 pfnyh3mw ljqsnud1 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj d6rk862h",children:h._(/*FBT_CALL*/"Recorded live"/*FBT_CALL*/)})]}),k.jsxs("div",{className:"l9j0dhe7 fdg1wqfs jq4qci2q av1wybal j102wcjv",children:[(s==null?void 0:s.id)!=null&&k.jsx(c("WorkCometActorHovercard.react"),{actorID:s.id,display:"inline",children:function(a){return k.jsx(c("CometLink.react"),{href:s.url,ref:a,children:k.jsxs("div",{className:"jwdofwj8 bp9cbjyn j83agx80",children:[k.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:2,type:"body2",children:(a=s.name)==null?void 0:a.toUpperCase()}),(q==null?void 0:q.id)===(s==null?void 0:s.id)&&t]})})}}),(r==null?void 0:r.id)!==(s==null?void 0:s.id)&&k.jsx("div",{className:"aov4n071 oud54xpy la4x63dv linoseic e9vueds3",children:(r==null?void 0:r.id)!=null&&k.jsx(c("WorkCometActorHovercard.react"),{actorID:r.id,display:"inline",children:function(a){return k.jsx(c("CometLink.react"),{href:r.url,ref:a,children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"meta2",children:r.name})})}})})]})]})]}),k.jsx("div",{className:"fcg2cn6m pmk7jnqg swmj3c3o",children:k.jsx(c("CometVideoHomeThreeDotContextMenuWrapper.react"),{onUserInteraction:g,video:a,videoMenuLocation:"VIDEO_HOME_LIVE_TAB"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveHeroPlayerSurface.react",["CometPlaceholder.react","CometRelay","CometRouteURL","CometUFIVideoPlayerUtils","CometVideoHomeLiveHeroPlayerFeaturedBadge.react","CometVideoHomeLiveHeroPlayerOverlay.react","CometVideoHomeLiveHeroPlayerSurface_video.graphql","VideoBroadcastStatus","VideoHomeLoggingReactionVideoChannelTypeContext","VideoPlayerDefaultControls.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","VideoPlayerSurface.react","VideoPlayerWithAutoCenterOnUserInitiatedPlay.react","VideoPlayerWithLiveVideoIndicator.react","VideoPlayerWithUnmuteOnLivePermalinkInjection.react","VideoPlayerWithVideoHomeLiveUpNext.react","WorkWatchLiveHeroPlayerOverlay.react","deferredLoadComponent","gkx","react","requireDeferred","useRoutePassthroughProps","useVideoPlayerClickToPlayInteraction","useVideoPlayerClickToTahoeInteraction","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useEffect,m=e.useMemo,n=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("CometVideoHomeLiveHeroPlayerSurface.react"),o=c("deferredLoadComponent")(c("requireDeferred")("VideoPlayerWithVideoCardsOverlay.react").__setRef("CometVideoHomeLiveHeroPlayerSurface.react")),p=c("deferredLoadComponent")(c("requireDeferred")("VideoPlayerWithLiveVideoEndscreen.react").__setRef("CometVideoHomeLiveHeroPlayerSurface.react"));function a(a){var e=a.subOrigin;a=a.video;var f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeLiveHeroPlayerSurface_video.graphql"),a),g=k(c("VideoHomeLoggingReactionVideoChannelTypeContext")),q=f.url;a=j(function(){n.onReady(function(a){a.log({event:"click",event_target:"video",event_target_id:f.id,event_target_info:q,section_video_channel_type:g})})},[g,f.id,q]);a=c("useVideoPlayerClickToTahoeInteraction")({onClick:a,reactionVideoChannelType:g,subOrigin:e,videoTahoeUrl:q});var r=c("useVideoPlayerClickToPlayInteraction")(),s=c("useVideoPlayerDefaultControlsVisibility")();s=s.isControlsVisible;var t=f.broadcast_status===c("VideoBroadcastStatus").LIVE,u=m(function(){return{subOrigin:e,videoTahoeUrl:q}},[e,q]),v=d("CometRouteURL").useRouteURLParams(),w=Number(v==null?void 0:v.notif_id)||null,x=String(v==null?void 0:v.extid)||null,y=d("VideoPlayerHooks").useController();l(function(){y.setAdditionalLogData("notification_id",w),y.setAdditionalLogData("notification_medium","jewel"),y.setAdditionalLogData("permalink_share_id",x)},[w,x,y]);v=c("useRoutePassthroughProps")();v=(v==null?void 0:v.unmute)===!0;var z=c("gkx")("1341692");return i.jsxs(c("VideoPlayerSurface.react"),{children:[i.jsx(c("VideoPlayerDefaultControls.react"),{forceVisibleOnMount:!0,shouldRenderWatchAndScrollControl:!0,subOrigin:"topic_live",video:f,videoTahoeUrl:q}),i.jsx(d("CometUFIVideoPlayerUtils").CometUFIVideoPlayerStateAndControllerExtractor,{data:u}),i.jsx(c("VideoPlayerWithLiveVideoIndicator.react"),{hasCometNavOverlay:!1,video:f}),i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(o,{surface:"COMET_HERO",video:f})}),i.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:a}),r!=null?i.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:r}):null,z?i.jsx(c("WorkWatchLiveHeroPlayerOverlay.react"),{video:f}):i.jsx(c("CometVideoHomeLiveHeroPlayerOverlay.react"),{video:f}),Boolean(f.is_shopping_video)&&i.jsx(d("CometRelay").MatchContainer,{match:f.comet_product_tag_feed_overlay_renderer,props:{areControlsVisible:!t&&s,referralSurface:"video_home",showOverlayOnTop:t}}),i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(c("CometVideoHomeLiveHeroPlayerFeaturedBadge.react"),{video:f})}),i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(p,{video:f})}),i.jsx(c("VideoPlayerWithVideoHomeLiveUpNext.react"),{}),i.jsx(c("VideoPlayerWithAutoCenterOnUserInitiatedPlay.react"),{}),v?i.jsx(c("VideoPlayerWithUnmuteOnLivePermalinkInjection.react"),{}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);