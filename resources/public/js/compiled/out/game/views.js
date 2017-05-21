// Compiled by ClojureScript 1.9.229 {}
goog.provide('game.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
game.views.pixi_renderer_internal = (function game$views$pixi_renderer_internal(){
var renderer_id = "pixi-renderer";
var renderer = PIXI.autoDetectRenderer((500),(500),({"antiAlias": false, "transparent": false, "resolution": (1)}));
var update_fn = ((function (renderer_id,renderer){
return (function game$views$pixi_renderer_internal_$_f(component){
var map__28249 = reagent.core.props.call(null,component);
var map__28249__$1 = ((((!((map__28249 == null)))?((((map__28249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28249):map__28249);
var sprites = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var stage = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var foo = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
var seq__28251_28265 = cljs.core.seq.call(null,sprites);
var chunk__28252_28266 = null;
var count__28253_28267 = (0);
var i__28254_28268 = (0);
while(true){
if((i__28254_28268 < count__28253_28267)){
var vec__28255_28269 = cljs.core._nth.call(null,chunk__28252_28266,i__28254_28268);
var id_28270 = cljs.core.nth.call(null,vec__28255_28269,(0),null);
var map__28258_28271 = cljs.core.nth.call(null,vec__28255_28269,(1),null);
var map__28258_28272__$1 = ((((!((map__28258_28271 == null)))?((((map__28258_28271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28258_28271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258_28271):map__28258_28271);
var x_28273 = cljs.core.get.call(null,map__28258_28272__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28274 = cljs.core.get.call(null,map__28258_28272__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var js_obj_28275 = cljs.core.get.call(null,map__28258_28272__$1,new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277));
js_obj_28275.x = x_28273;

js_obj_28275.y = y_28274;

var G__28276 = seq__28251_28265;
var G__28277 = chunk__28252_28266;
var G__28278 = count__28253_28267;
var G__28279 = (i__28254_28268 + (1));
seq__28251_28265 = G__28276;
chunk__28252_28266 = G__28277;
count__28253_28267 = G__28278;
i__28254_28268 = G__28279;
continue;
} else {
var temp__4657__auto___28280 = cljs.core.seq.call(null,seq__28251_28265);
if(temp__4657__auto___28280){
var seq__28251_28281__$1 = temp__4657__auto___28280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28251_28281__$1)){
var c__25943__auto___28282 = cljs.core.chunk_first.call(null,seq__28251_28281__$1);
var G__28283 = cljs.core.chunk_rest.call(null,seq__28251_28281__$1);
var G__28284 = c__25943__auto___28282;
var G__28285 = cljs.core.count.call(null,c__25943__auto___28282);
var G__28286 = (0);
seq__28251_28265 = G__28283;
chunk__28252_28266 = G__28284;
count__28253_28267 = G__28285;
i__28254_28268 = G__28286;
continue;
} else {
var vec__28260_28287 = cljs.core.first.call(null,seq__28251_28281__$1);
var id_28288 = cljs.core.nth.call(null,vec__28260_28287,(0),null);
var map__28263_28289 = cljs.core.nth.call(null,vec__28260_28287,(1),null);
var map__28263_28290__$1 = ((((!((map__28263_28289 == null)))?((((map__28263_28289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28263_28289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263_28289):map__28263_28289);
var x_28291 = cljs.core.get.call(null,map__28263_28290__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28292 = cljs.core.get.call(null,map__28263_28290__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var js_obj_28293 = cljs.core.get.call(null,map__28263_28290__$1,new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277));
js_obj_28293.x = x_28291;

js_obj_28293.y = y_28292;

var G__28294 = cljs.core.next.call(null,seq__28251_28281__$1);
var G__28295 = null;
var G__28296 = (0);
var G__28297 = (0);
seq__28251_28265 = G__28294;
chunk__28252_28266 = G__28295;
count__28253_28267 = G__28296;
i__28254_28268 = G__28297;
continue;
}
} else {
}
}
break;
}

return renderer.render(stage);
});})(renderer_id,renderer))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (renderer_id,renderer,update_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),renderer_id], null)], null);
});})(renderer_id,renderer,update_fn))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (renderer_id,renderer,update_fn){
return (function (component){
document.getElementById(renderer_id).appendChild(renderer.view);

renderer.view.style.border = "1px dashed black";

return update_fn.call(null,component);
});})(renderer_id,renderer,update_fn))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_fn,new cljs.core.Keyword(null,"display-name","display-name",694513143),"pixi-renderer"], null));
});
game.views.pixi_renderer = (function game$views$pixi_renderer(){
var renderer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi","state","pixi/state",-1992059529),new cljs.core.Keyword(null,"renderer","renderer",336841071)], null));
var sprites = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi","state","pixi/state",-1992059529),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null));
return ((function (renderer,sprites){
return (function (){
var map__28300 = cljs.core.deref.call(null,renderer);
var map__28300__$1 = ((((!((map__28300 == null)))?((((map__28300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28300):map__28300);
var started = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"started","started",585705024));
var stage = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.deref.call(null,sprites),new cljs.core.Keyword(null,"stage","stage",1843544772),stage], null);
if(cljs.core.truth_(started)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.views.pixi_renderer_internal,props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pixi.loading","div.pixi.loading",-1707775662),"Loading..."], null);
}
});
;})(renderer,sprites))
});

//# sourceMappingURL=views.js.map?rel=1495401526054