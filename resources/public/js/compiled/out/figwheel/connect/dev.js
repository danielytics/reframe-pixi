// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('game.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37543__delegate = function (x){
if(cljs.core.truth_(game.core.mount_root)){
return cljs.core.apply.call(null,game.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'game.core/mount-root' is missing");
}
};
var G__37543 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37544__i = 0, G__37544__a = new Array(arguments.length -  0);
while (G__37544__i < G__37544__a.length) {G__37544__a[G__37544__i] = arguments[G__37544__i + 0]; ++G__37544__i;}
  x = new cljs.core.IndexedSeq(G__37544__a,0);
} 
return G__37543__delegate.call(this,x);};
G__37543.cljs$lang$maxFixedArity = 0;
G__37543.cljs$lang$applyTo = (function (arglist__37545){
var x = cljs.core.seq(arglist__37545);
return G__37543__delegate(x);
});
G__37543.cljs$core$IFn$_invoke$arity$variadic = G__37543__delegate;
return G__37543;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1495401536506