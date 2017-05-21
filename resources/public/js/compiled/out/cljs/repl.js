// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36265){
var map__36290 = p__36265;
var map__36290__$1 = ((((!((map__36290 == null)))?((((map__36290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36290):map__36290);
var m = map__36290__$1;
var n = cljs.core.get.call(null,map__36290__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36290__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36292_36314 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36293_36315 = null;
var count__36294_36316 = (0);
var i__36295_36317 = (0);
while(true){
if((i__36295_36317 < count__36294_36316)){
var f_36318 = cljs.core._nth.call(null,chunk__36293_36315,i__36295_36317);
cljs.core.println.call(null,"  ",f_36318);

var G__36319 = seq__36292_36314;
var G__36320 = chunk__36293_36315;
var G__36321 = count__36294_36316;
var G__36322 = (i__36295_36317 + (1));
seq__36292_36314 = G__36319;
chunk__36293_36315 = G__36320;
count__36294_36316 = G__36321;
i__36295_36317 = G__36322;
continue;
} else {
var temp__4657__auto___36323 = cljs.core.seq.call(null,seq__36292_36314);
if(temp__4657__auto___36323){
var seq__36292_36324__$1 = temp__4657__auto___36323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36292_36324__$1)){
var c__25943__auto___36325 = cljs.core.chunk_first.call(null,seq__36292_36324__$1);
var G__36326 = cljs.core.chunk_rest.call(null,seq__36292_36324__$1);
var G__36327 = c__25943__auto___36325;
var G__36328 = cljs.core.count.call(null,c__25943__auto___36325);
var G__36329 = (0);
seq__36292_36314 = G__36326;
chunk__36293_36315 = G__36327;
count__36294_36316 = G__36328;
i__36295_36317 = G__36329;
continue;
} else {
var f_36330 = cljs.core.first.call(null,seq__36292_36324__$1);
cljs.core.println.call(null,"  ",f_36330);

var G__36331 = cljs.core.next.call(null,seq__36292_36324__$1);
var G__36332 = null;
var G__36333 = (0);
var G__36334 = (0);
seq__36292_36314 = G__36331;
chunk__36293_36315 = G__36332;
count__36294_36316 = G__36333;
i__36295_36317 = G__36334;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36335 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25132__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36335);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36335)))?cljs.core.second.call(null,arglists_36335):arglists_36335));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36296_36336 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36297_36337 = null;
var count__36298_36338 = (0);
var i__36299_36339 = (0);
while(true){
if((i__36299_36339 < count__36298_36338)){
var vec__36300_36340 = cljs.core._nth.call(null,chunk__36297_36337,i__36299_36339);
var name_36341 = cljs.core.nth.call(null,vec__36300_36340,(0),null);
var map__36303_36342 = cljs.core.nth.call(null,vec__36300_36340,(1),null);
var map__36303_36343__$1 = ((((!((map__36303_36342 == null)))?((((map__36303_36342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36303_36342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36303_36342):map__36303_36342);
var doc_36344 = cljs.core.get.call(null,map__36303_36343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36345 = cljs.core.get.call(null,map__36303_36343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36341);

cljs.core.println.call(null," ",arglists_36345);

if(cljs.core.truth_(doc_36344)){
cljs.core.println.call(null," ",doc_36344);
} else {
}

var G__36346 = seq__36296_36336;
var G__36347 = chunk__36297_36337;
var G__36348 = count__36298_36338;
var G__36349 = (i__36299_36339 + (1));
seq__36296_36336 = G__36346;
chunk__36297_36337 = G__36347;
count__36298_36338 = G__36348;
i__36299_36339 = G__36349;
continue;
} else {
var temp__4657__auto___36350 = cljs.core.seq.call(null,seq__36296_36336);
if(temp__4657__auto___36350){
var seq__36296_36351__$1 = temp__4657__auto___36350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36296_36351__$1)){
var c__25943__auto___36352 = cljs.core.chunk_first.call(null,seq__36296_36351__$1);
var G__36353 = cljs.core.chunk_rest.call(null,seq__36296_36351__$1);
var G__36354 = c__25943__auto___36352;
var G__36355 = cljs.core.count.call(null,c__25943__auto___36352);
var G__36356 = (0);
seq__36296_36336 = G__36353;
chunk__36297_36337 = G__36354;
count__36298_36338 = G__36355;
i__36299_36339 = G__36356;
continue;
} else {
var vec__36305_36357 = cljs.core.first.call(null,seq__36296_36351__$1);
var name_36358 = cljs.core.nth.call(null,vec__36305_36357,(0),null);
var map__36308_36359 = cljs.core.nth.call(null,vec__36305_36357,(1),null);
var map__36308_36360__$1 = ((((!((map__36308_36359 == null)))?((((map__36308_36359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36308_36359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36308_36359):map__36308_36359);
var doc_36361 = cljs.core.get.call(null,map__36308_36360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36362 = cljs.core.get.call(null,map__36308_36360__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36358);

cljs.core.println.call(null," ",arglists_36362);

if(cljs.core.truth_(doc_36361)){
cljs.core.println.call(null," ",doc_36361);
} else {
}

var G__36363 = cljs.core.next.call(null,seq__36296_36351__$1);
var G__36364 = null;
var G__36365 = (0);
var G__36366 = (0);
seq__36296_36336 = G__36363;
chunk__36297_36337 = G__36364;
count__36298_36338 = G__36365;
i__36299_36339 = G__36366;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36310 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36311 = null;
var count__36312 = (0);
var i__36313 = (0);
while(true){
if((i__36313 < count__36312)){
var role = cljs.core._nth.call(null,chunk__36311,i__36313);
var temp__4657__auto___36367__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36367__$1)){
var spec_36368 = temp__4657__auto___36367__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36368));
} else {
}

var G__36369 = seq__36310;
var G__36370 = chunk__36311;
var G__36371 = count__36312;
var G__36372 = (i__36313 + (1));
seq__36310 = G__36369;
chunk__36311 = G__36370;
count__36312 = G__36371;
i__36313 = G__36372;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36310);
if(temp__4657__auto____$1){
var seq__36310__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36310__$1)){
var c__25943__auto__ = cljs.core.chunk_first.call(null,seq__36310__$1);
var G__36373 = cljs.core.chunk_rest.call(null,seq__36310__$1);
var G__36374 = c__25943__auto__;
var G__36375 = cljs.core.count.call(null,c__25943__auto__);
var G__36376 = (0);
seq__36310 = G__36373;
chunk__36311 = G__36374;
count__36312 = G__36375;
i__36313 = G__36376;
continue;
} else {
var role = cljs.core.first.call(null,seq__36310__$1);
var temp__4657__auto___36377__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36377__$2)){
var spec_36378 = temp__4657__auto___36377__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36378));
} else {
}

var G__36379 = cljs.core.next.call(null,seq__36310__$1);
var G__36380 = null;
var G__36381 = (0);
var G__36382 = (0);
seq__36310 = G__36379;
chunk__36311 = G__36380;
count__36312 = G__36381;
i__36313 = G__36382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1495401535319