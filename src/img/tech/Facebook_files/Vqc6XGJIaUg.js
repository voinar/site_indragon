if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("LSRemoveTask",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(2).fetch([[[a[0]]]]).next().then(function(c,d){var e=c.done;c=c.value;return e?0:(d=c.item,b.fe(b.ftr(b.db.table(2).fetch([[[{lte:a[0]}]]]),function(c){return b.i64.le(c.taskId,a[0])&&c.queueName===d.queueName}),function(a){return a["delete"]()}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSTaskExists",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(e){return b.seq([function(d){return b.db.table(2).fetch([[[a[0]]]]).next().then(function(a,b){b=a.done;a=a.value;return b?c[0]=!1:(a.item,c[0]=!0)})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpsertGradientColor",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(117).put({themeFbid:a[0],gradientIndex:a[1],color:a[2],type_:[0,0]})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpsertTheme",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return b.i64.neq(e,e)?c[0]=e:c[0]=a[0],b.db.table(116).put({fbid:a[0],themeIdx:a[1],fallbackColor:a[2],reverseGradiantsForRadial:a[3],accessibilityLabel:a[4],isDeprecated:a[10]})},function(a){return b.resolve(d)}])}e.exports=a}),null);