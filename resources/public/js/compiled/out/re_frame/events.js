// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27138_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__27138_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___27139 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___27139)){
var not_i_27140 = temp__4657__auto___27139;
if(cljs.core.fn_QMARK_.call(null,not_i_27140)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_27140);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_27140);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_27155 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27156 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27113__auto___27169 = re_frame.interop.now.call(null);
var duration__27114__auto___27170 = (end__27113__auto___27169 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__27157_27171 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__27158_27172 = null;
var count__27159_27173 = (0);
var i__27160_27174 = (0);
while(true){
if((i__27160_27174 < count__27159_27173)){
var vec__27161_27175 = cljs.core._nth.call(null,chunk__27158_27172,i__27160_27174);
var k__27115__auto___27176 = cljs.core.nth.call(null,vec__27161_27175,(0),null);
var cb__27116__auto___27177 = cljs.core.nth.call(null,vec__27161_27175,(1),null);
try{cb__27116__auto___27177.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27114__auto___27170,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27164){if((e27164 instanceof java.lang.Exception)){
var e__27117__auto___27178 = e27164;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27115__auto___27176,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27117__auto___27178);
} else {
throw e27164;

}
}
var G__27179 = seq__27157_27171;
var G__27180 = chunk__27158_27172;
var G__27181 = count__27159_27173;
var G__27182 = (i__27160_27174 + (1));
seq__27157_27171 = G__27179;
chunk__27158_27172 = G__27180;
count__27159_27173 = G__27181;
i__27160_27174 = G__27182;
continue;
} else {
var temp__4657__auto___27183 = cljs.core.seq.call(null,seq__27157_27171);
if(temp__4657__auto___27183){
var seq__27157_27184__$1 = temp__4657__auto___27183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27157_27184__$1)){
var c__25943__auto___27185 = cljs.core.chunk_first.call(null,seq__27157_27184__$1);
var G__27186 = cljs.core.chunk_rest.call(null,seq__27157_27184__$1);
var G__27187 = c__25943__auto___27185;
var G__27188 = cljs.core.count.call(null,c__25943__auto___27185);
var G__27189 = (0);
seq__27157_27171 = G__27186;
chunk__27158_27172 = G__27187;
count__27159_27173 = G__27188;
i__27160_27174 = G__27189;
continue;
} else {
var vec__27165_27190 = cljs.core.first.call(null,seq__27157_27184__$1);
var k__27115__auto___27191 = cljs.core.nth.call(null,vec__27165_27190,(0),null);
var cb__27116__auto___27192 = cljs.core.nth.call(null,vec__27165_27190,(1),null);
try{cb__27116__auto___27192.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27114__auto___27170,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27168){if((e27168 instanceof java.lang.Exception)){
var e__27117__auto___27193 = e27168;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27115__auto___27191,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27117__auto___27193);
} else {
throw e27168;

}
}
var G__27194 = cljs.core.next.call(null,seq__27157_27184__$1);
var G__27195 = null;
var G__27196 = (0);
var G__27197 = (0);
seq__27157_27171 = G__27194;
chunk__27158_27172 = G__27195;
count__27159_27173 = G__27196;
i__27160_27174 = G__27197;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27156;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27155;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1495401524320