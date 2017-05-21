// Compiled by ClojureScript 1.9.229 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('game.subs');
goog.require('reagent.core');
goog.require('game.views');
goog.require('game.config');
goog.require('game.events');
goog.require('re_frisk.core');
goog.require('cljsjs.pixi');
goog.require('re_frame.core');
goog.require('game.effects');
game.core.dev_setup = (function game$core$dev_setup(){
if(cljs.core.truth_(game.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
game.core.mount_root = (function game$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.views.pixi_renderer], null),document.getElementById("app"));
});
game.core.init_pixi = (function game$core$init_pixi(){
var G__28371 = PIXI.loader;
G__28371.add("brown-block","assets/Brown_Block.png");

G__28371.add("grass-block","assets/Grass_Block.png");

G__28371.add("heart","assets/Heart.png");

G__28371.load(((function (G__28371){
return (function (_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi","start","pixi/start",-351370331)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.sprites","create","pixi.sprites/create",-1594664578),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"image","image",-58725096),"grass-block"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.sprites","create","pixi.sprites/create",-1594664578),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"image","image",-58725096),"heart"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.sprites","create","pixi.sprites/create",-1594664578),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"image","image",-58725096),"brown-block"], null)], null));

return setInterval(((function (G__28371){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.sprites","move","pixi.sprites/move",-1749886671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null));
});})(G__28371))
,(100));
});})(G__28371))
);

return G__28371;
});
game.core.init = (function game$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

game.core.dev_setup.call(null);

game.core.mount_root.call(null);

return game.core.init_pixi.call(null);
});
goog.exportSymbol('game.core.init', game.core.init);

//# sourceMappingURL=core.js.map?rel=1495401526239