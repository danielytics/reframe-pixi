// Compiled by ClojureScript 1.9.229 {}
goog.provide('game.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('game.db');
game.events.get_texture = (function game$events$get_texture(id){
return (PIXI.loader.resources[id]).texture;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return game.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pixi","start","pixi/start",-351370331),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"started","started",585705024),true,new cljs.core.Keyword(null,"stage","stage",1843544772),(new PIXI.Container())], null),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pixi.sprites","create","pixi.sprites/create",-1594664578),(function (db,p__28308){
var vec__28309 = p__28308;
var _ = cljs.core.nth.call(null,vec__28309,(0),null);
var map__28312 = cljs.core.nth.call(null,vec__28309,(1),null);
var map__28312__$1 = ((((!((map__28312 == null)))?((((map__28312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28312):map__28312);
var image = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var x = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stage = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"stage","stage",1843544772)], null));
var sprite = (new PIXI.Sprite(game.events.get_texture.call(null,image)));
sprite.width = (80);

sprite.height = (80);

stage.addChild(sprite);

return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null),cljs.core.assoc,cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),sprite], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pixi.sprites","move","pixi.sprites/move",-1749886671),(function (db,p__28316){
var vec__28317 = p__28316;
var _ = cljs.core.nth.call(null,vec__28317,(0),null);
var map__28320 = cljs.core.nth.call(null,vec__28317,(1),null);
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var x = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),((function (vec__28317,_,map__28320,map__28320__$1,x,y,id){
return (function (sprite){
return cljs.core.update.call(null,cljs.core.update.call(null,sprite,new cljs.core.Keyword(null,"x","x",2099068185),((function (vec__28317,_,map__28320,map__28320__$1,x,y,id){
return (function (p1__28314_SHARP_){
return (x + p1__28314_SHARP_);
});})(vec__28317,_,map__28320,map__28320__$1,x,y,id))
),new cljs.core.Keyword(null,"y","y",-1757859776),((function (vec__28317,_,map__28320,map__28320__$1,x,y,id){
return (function (p1__28315_SHARP_){
return (y + p1__28315_SHARP_);
});})(vec__28317,_,map__28320,map__28320__$1,x,y,id))
);
});})(vec__28317,_,map__28320,map__28320__$1,x,y,id))
);
}));

//# sourceMappingURL=events.js.map?rel=1495401526101