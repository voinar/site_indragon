if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometGamesMainColumnCard_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamesMainColumnCard_game",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("useGameCategoryFromGame_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGameCategoryFromGame_game",selections:[{alias:"category",args:null,kind:"ScalarField",name:"app_center_categories",storageKey:null},{alias:"gamingTags",args:null,concreteType:"ApplicationAppGamingTagsConnection",kind:"LinkedField",name:"app_gaming_tags",plural:!1,selections:[{alias:"tagNodes",args:null,concreteType:"XFBApplicationGamingTag",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("InstantGameGamePlayerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={clientAppID:null,environmentType:"standard",interactivesCommentsChannelID:"",isInteractivesCommentsInSidepane:!1,isScreenshotProviderRegistered:!1,sessionID:"",setInteractivesCommentsChannelID:function(a){},setIsInteractivesCommentsInSidepane:function(a){},setIsScreenshotProviderRegistered:function(a){},setShouldInteractivesCommentsToggleShow:function(a){},shouldInteractivesCommentsToggleShow:!1,tournamentPostID:null};c=a.createContext(b);g["default"]=c}),98);
__d("InstantGamesTrackingData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.getEcosystem=function(){return this.$1};b.getSurface=function(){return this.$2};b.getFeature=function(){return this.$3};b.serialize=function(){return this.$1+"~"+this.$2+"~"+this.$3};return a}();f["default"]=a}),66);
__d("CometGamingImpressionLogger.react",["react","useGamingVideoDestinationEventLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.children,d=a.dataToLog;a=c("useGamingVideoDestinationEventLogger")();var e=a.logImpression;a=i(function(a){if(a==null)return;e(d)},[d,e]);a=c("useSinglePartialViewImpression")({onImpressionStart:a});return h.cloneElement(b,{ref:a})}g["default"]=a}),98);
__d("InstantGameWebhubGameCardImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("2046426");c=b("FalcoLoggerInternal").create("instant_game_webhub_game_card_impression",a);e.exports=c}),null);
__d("XCometInstantGamesHubPlayControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/{game_or_link}/{?link_fragment}/",Object.freeze({source:"www_unknown",skip_check:!1,prefer_close:!1,ota_update:!1}),void 0);b=a;g["default"]=b}),98);
__d("InstantGamesWebHubEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743697");c=b("FalcoLoggerInternal").create("instant_games_web_hub_events",a);e.exports=c}),null);
__d("useInstantGamesWebHubImpressionLogging",["InstantGamesWebHubEventsFalcoEvent","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("useSinglePartialViewImpression")({onImpressionStart:function(){var b=babelHelpers["extends"]({},a,{event:"impression"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return b})}}),d=function(b){var d=babelHelpers["extends"]({},a,b,{event:"click"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return d})};return{impressionRef:b,logClick:d}}g["default"]=a}),98);
__d("useLoggedOutAwareOnPressPlay",["fbt","react","useCometLoggedOutPopupCTA","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useCallback;function a(a,b,d){var e=c("useIsLoggedOut")(),f=h._(/*FBT_CALL*/"Enjoy more of Facebook Gaming"/*FBT_CALL*/),g=c("useCometLoggedOutPopupCTA")({next:d,title:f});f=i(function(){a({button_type:b,event:"click"}),e&&g()},[a,g,e,b]);d=e||d==null?void 0:{url:d};return{linkProps:d,onPress:f}}g["default"]=a}),98);
__d("CometGamesMainColumnCard.react",["fbt","CometAspectRatioContainer.react","CometCard.react","CometGamesMainColumnCard_game.graphql","CometImageCover.react","CometPressable.react","CometRelay","InstantGameWebhubGameCardImpressionFalcoEvent","XCometInstantGamesHubPlayControllerRouteBuilder","react","stylex","useGamingVideoDestinationEventLogger","useInstantGamesWebHubImpressionLogging","useLoggedOutAwareOnPressPlay","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=500;var k={cardFooter:{width:"k4urcfbm"},imageFooter:{bottom:"d2iitwg3",end:"swmj3c3o",position:"pmk7jnqg",start:"rnx8an3s",textAlign:"hzawbc8m",zIndex:"kavbgo14"},imageGradient:{backgroundImage:"p9ful83x",bottom:"i09qtzwb",height:"pioscnbf",pointerEvents:"hzruof5a",position:"pmk7jnqg",width:"k4urcfbm",zIndex:"tkr6xdv7"},overlay:{height:"datstx6m",position:"pmk7jnqg",top:"kr520xx4",width:"k4urcfbm",zIndex:"tkr6xdv7"},pressable:{borderTopStartRadius:"io0zqebd",borderTopEndRadius:"m5lcvass",borderBottomEndRadius:"fbipl8qg",borderBottomStartRadius:"nwvqtn77",width:"k4urcfbm"}},l=i!==void 0?i:i=b("CometGamesMainColumnCard_game.graphql");function m(a,b,d,e){b=c("useInstantGamesWebHubImpressionLogging")({app_id:a,event:"impression",position:b.toString(),section:d});var f=b.impressionRef;b=b.logClick;var g=c("useSinglePartialViewImpression")({onImpressionStart:function(){a!=null&&d&&c("InstantGameWebhubGameCardImpressionFalcoEvent").log(function(){return{app_id:a,section:d}})}}),h=c("useGamingVideoDestinationEventLogger")();h=h.logClick;b=c("useLoggedOutAwareOnPressPlay")(b,"section_body",e);e=b.linkProps;b=b.onPress;return{impressionRef:f,impressionRefForML:g,linkProps:e,logGamingDestinationSectionClick:h,onPress:b}}function a(a){var b=a.cardFooter,e=a.cardIndex,f=a.game,g=a.gameImageAspectRatio;g=g===void 0?1:g;var i=a.gameImageUri,n=a.imageFooter,o=a.imageGradient;o=o===void 0?!1:o;var p=a.onPress,q=a.overlay,r=a.playUri,s=a.pressOnly,t=a.section;a=a.source;f=d("CometRelay").useFragment(l,f);f=(f=f.id)!=null?f:"";r=s===!0?null:(s=r)!=null?s:c("XCometInstantGamesHubPlayControllerRouteBuilder").buildURL({game_or_link:f,source:a});s=m(f,e,t,r);a=s.impressionRef;e=s.impressionRefForML;t=s.linkProps;var u=s.logGamingDestinationSectionClick,v=s.onPress;if(f==="")return null;var w={ig_app_id:f,sub_surface:"games_card"};r=j.jsx("div",{ref:a,children:j.jsx(c("CometPressable.react"),{linkProps:t,onPress:function(){u(w),v(),p!=null&&p()},ref:e,xstyle:k.pressable,children:j.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsxs("div",{style:{position:"relative"},children:[j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:g,children:j.jsx(c("CometImageCover.react"),{alt:h._(/*FBT_CALL*/"game image"/*FBT_CALL*/),src:i})}),n==null?null:j.jsx("div",{className:c("stylex")(k.imageFooter),children:n}),o?j.jsx("div",{className:c("stylex")(k.imageGradient)}):null,q?j.jsx("div",{className:c("stylex")(k.overlay),children:q}):null]}),j.jsx("div",{className:c("stylex")(k.cardFooter),children:b})]})})});return r}a.displayName=a.name+" [from "+f.id+"]";g.mainCardTooltipDelay=e;g.useSetupLogging=m;g.CometGamesMainColumnCard=a}),98);
__d("CometGamesGameTag.react",["CometGamesMainColumnCard.react","CometIcon.react","CometPressable.react","CometTooltip.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{backgroundColor:"tdjehn4e",borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",display:"q9uorilb",maxWidth:"d2edcug0",minWidth:"hpfvmrgz",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"},icon:{display:"j83agx80",flexDirection:"btwxx1t3",paddingEnd:"ph5uu5jm"},tagRow:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",maxWidth:"d2edcug0",minWidth:"hpfvmrgz",wordBreak:"qv66sw1b",wordWrap:"c1et5uql"}};function a(a){var b,e=a.containerXStyle,f=a.icon,g=a.iconColor,j=a.onPress;a.textXStyle;var k=a.tooltip,l=a.url;a=babelHelpers.objectWithoutPropertiesLoose(a,["containerXStyle","icon","iconColor","onPress","textXStyle","tooltip","url"]);a=h.jsx(c("TetraText.react"),babelHelpers["extends"]({numberOfLines:1},a));l=j==null?h.jsx("div",{className:c("stylex")(i.tagRow),children:h.jsx("div",{className:c("stylex")((b=e)!=null?b:i.container),children:a})}):h.jsx(c("CometPressable.react"),{linkProps:{url:l},onPress:j,xstyle:(b=e)!=null?b:i.container,children:h.jsxs("div",{className:c("stylex")(i.tagRow),children:[f?h.jsx("div",{className:c("stylex")(i.icon),children:h.jsx(c("CometIcon.react"),{color:g,icon:f,size:12})}):null,a]})});return h.jsx(c("CometTooltip.react"),{delayMs:d("CometGamesMainColumnCard.react").mainCardTooltipDelay,tooltip:k,children:l})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGameCategoryFromGame",["CometRelay","useGameCategoryFromGame_game.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useGameCategoryFromGame_game.graphql");function a(a){var b;a=d("CometRelay").useFragment(i,a);b=(b=(b=a.gamingTags)==null?void 0:b.tagNodes)!=null?b:[];var c=null;b!=null&&b.length>0&&(c=b[0]);c=(b=c)==null?void 0:b.name;if(c==null||c.length===0)return a.category!=null?a.category[1]:null;else return c}g["default"]=a}),98);
__d("XCometInstantGamesCategoryControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/games/instantgames/category/",Object.freeze({category:400,sort_type:"recommended"}),void 0);b=a;g["default"]=b}),98);
__d("XCometInstantGamesHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/",Object.freeze({sort_type:"recommended",category:400}),void 0);b=a;g["default"]=b}),98);