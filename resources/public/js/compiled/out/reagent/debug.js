// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26362__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26363__i = 0, G__26363__a = new Array(arguments.length -  0);
while (G__26363__i < G__26363__a.length) {G__26363__a[G__26363__i] = arguments[G__26363__i + 0]; ++G__26363__i;}
  args = new cljs.core.IndexedSeq(G__26363__a,0);
} 
return G__26362__delegate.call(this,args);};
G__26362.cljs$lang$maxFixedArity = 0;
G__26362.cljs$lang$applyTo = (function (arglist__26364){
var args = cljs.core.seq(arglist__26364);
return G__26362__delegate(args);
});
G__26362.cljs$core$IFn$_invoke$arity$variadic = G__26362__delegate;
return G__26362;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26365__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26366__i = 0, G__26366__a = new Array(arguments.length -  0);
while (G__26366__i < G__26366__a.length) {G__26366__a[G__26366__i] = arguments[G__26366__i + 0]; ++G__26366__i;}
  args = new cljs.core.IndexedSeq(G__26366__a,0);
} 
return G__26365__delegate.call(this,args);};
G__26365.cljs$lang$maxFixedArity = 0;
G__26365.cljs$lang$applyTo = (function (arglist__26367){
var args = cljs.core.seq(arglist__26367);
return G__26365__delegate(args);
});
G__26365.cljs$core$IFn$_invoke$arity$variadic = G__26365__delegate;
return G__26365;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1495401522554