if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("MWLSForwardMessage.re",["MWLSForwardMessage.bs","bs_curry"],(function(a,b,c,d,e,f){a=function(){var a=b("MWLSForwardMessage.bs").useForwardAttachment();return function(c){c=b("bs_curry")._3(a,c.to_,c.copyAttachmentID,c.messageId==null?void 0:c.messageId);return c}};f.useForwardAttachment=a;c=b("MWLSForwardMessage.bs").targetIdString;f.targetIdString=c}),null);
__d("MWChatMediaViewerControls.react",["fbt","ix","CometRow.react","CometRowItem.react","CometTooltip.react","JSResourceForInteraction","MWChatMessageId.re","ODS","TetraCircleButton.react","cr:629","fbicon","gkx","react","useCometLazyDialog","useMWChatForward"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");e=d("react");var k=e.useCallback,l=e.useState,m=c("JSResourceForInteraction")("MWChatMediaViewerAttachmentInfoDialog.react").__setRef("MWChatMediaViewerControls.react"),n={iconHovered:{backgroundColor:"m8invena"}},o=h._(/*FBT_CALL*/"Download"/*FBT_CALL*/);e=h._(/*FBT_CALL*/"Share to Facebook"/*FBT_CALL*/);var p=h._(/*FBT_CALL*/"Forward"/*FBT_CALL*/),q=h._(/*FBT_CALL*/"Info"/*FBT_CALL*/),r=function(){};function a(a){var e=a.attachmentID,f=a.canForward;f=f===void 0?!0:f;var g=a.downloadLink,h=a.isCrossTransportForwardEnabled;h=h===void 0?!1:h;var s=a.isSecureForwardEnabled;s=s===void 0?!1:s;var t=a.messageID;a=l(function(){return!1});var u=a[0],v=a[1];a=l(function(){return!1});var w=a[0];w=a[1];a=l(function(){return!1});w=a[0];var x=a[1];a=s?"secure":h?"cross_transport":"open_";var y=d("MWChatMessageId.re").getMessageId(t),z=b("cr:629").useForwardAttachment(),A=c("useMWChatForward")({forwardDialogType:a,messageID:t,onClose:r,onSend:function(a){z({copyAttachmentID:e,messageId:y,to_:a})}}),B=function(){d("ODS").bumpEntityKey(3185,"mwchat_media_viewer","forward"),A&&A.onClick()};s=c("useCometLazyDialog")(m);var C=s[0],D=k(function(){C({attachmentID:e,messageID:t})},[C,t,e]);return j.jsxs(c("CometRow.react"),{paddingTop:0,spacing:8,children:[g!=null?j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometTooltip.react"),{align:"middle",tooltip:o,children:j.jsx(c("TetraCircleButton.react"),{color:"white",icon:u?d("fbicon")._(i("1433212"),20):d("fbicon")._(i("1441392"),20),label:o,linkProps:{download:!0,target:"_blank",url:g},onHoverIn:function(a){return v(function(){return!0})},onHoverOut:function(a){return v(function(){return!1})},overlayHoveredStyle:n.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null,f===!0?j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometTooltip.react"),{align:"middle",tooltip:p,children:j.jsx(c("TetraCircleButton.react"),{color:"white",icon:d("fbicon")._(i("1433236"),20),label:p,onPress:function(a){return B()},overlayHoveredStyle:n.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null,null,c("gkx")("1463539")&&c("gkx")("1555108")?j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometTooltip.react"),{align:"middle",tooltip:q,children:j.jsx(c("TetraCircleButton.react"),{color:"white",icon:w?d("fbicon")._(i("479177"),20):d("fbicon")._(i("479180"),20),label:q,onHoverIn:function(a){return x(function(){return!0})},onHoverOut:function(a){return x(function(){return!1})},onPress:function(a){return D()},overlayHoveredStyle:n.iconHovered,size:36,testid:void 0,type:"deemphasized"})})}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);