// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25132__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26828 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26828){
return (function (){
var _STAR_always_update_STAR_26829 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26829;
}});})(_STAR_always_update_STAR_26828))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26828;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26830 = [];
var len__26207__auto___26833 = arguments.length;
var i__26208__auto___26834 = (0);
while(true){
if((i__26208__auto___26834 < len__26207__auto___26833)){
args26830.push((arguments[i__26208__auto___26834]));

var G__26835 = (i__26208__auto___26834 + (1));
i__26208__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26832 = args26830.length;
switch (G__26832) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26830.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26841_26845 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26842_26846 = null;
var count__26843_26847 = (0);
var i__26844_26848 = (0);
while(true){
if((i__26844_26848 < count__26843_26847)){
var v_26849 = cljs.core._nth.call(null,chunk__26842_26846,i__26844_26848);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26849);

var G__26850 = seq__26841_26845;
var G__26851 = chunk__26842_26846;
var G__26852 = count__26843_26847;
var G__26853 = (i__26844_26848 + (1));
seq__26841_26845 = G__26850;
chunk__26842_26846 = G__26851;
count__26843_26847 = G__26852;
i__26844_26848 = G__26853;
continue;
} else {
var temp__4657__auto___26854 = cljs.core.seq.call(null,seq__26841_26845);
if(temp__4657__auto___26854){
var seq__26841_26855__$1 = temp__4657__auto___26854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26841_26855__$1)){
var c__25943__auto___26856 = cljs.core.chunk_first.call(null,seq__26841_26855__$1);
var G__26857 = cljs.core.chunk_rest.call(null,seq__26841_26855__$1);
var G__26858 = c__25943__auto___26856;
var G__26859 = cljs.core.count.call(null,c__25943__auto___26856);
var G__26860 = (0);
seq__26841_26845 = G__26857;
chunk__26842_26846 = G__26858;
count__26843_26847 = G__26859;
i__26844_26848 = G__26860;
continue;
} else {
var v_26861 = cljs.core.first.call(null,seq__26841_26855__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26861);

var G__26862 = cljs.core.next.call(null,seq__26841_26855__$1);
var G__26863 = null;
var G__26864 = (0);
var G__26865 = (0);
seq__26841_26845 = G__26862;
chunk__26842_26846 = G__26863;
count__26843_26847 = G__26864;
i__26844_26848 = G__26865;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1495401523812