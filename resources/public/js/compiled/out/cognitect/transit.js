// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__28034_28038 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28035_28039 = null;
var count__28036_28040 = (0);
var i__28037_28041 = (0);
while(true){
if((i__28037_28041 < count__28036_28040)){
var k_28042 = cljs.core._nth.call(null,chunk__28035_28039,i__28037_28041);
var v_28043 = (b[k_28042]);
(a[k_28042] = v_28043);

var G__28044 = seq__28034_28038;
var G__28045 = chunk__28035_28039;
var G__28046 = count__28036_28040;
var G__28047 = (i__28037_28041 + (1));
seq__28034_28038 = G__28044;
chunk__28035_28039 = G__28045;
count__28036_28040 = G__28046;
i__28037_28041 = G__28047;
continue;
} else {
var temp__4657__auto___28048 = cljs.core.seq.call(null,seq__28034_28038);
if(temp__4657__auto___28048){
var seq__28034_28049__$1 = temp__4657__auto___28048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034_28049__$1)){
var c__25943__auto___28050 = cljs.core.chunk_first.call(null,seq__28034_28049__$1);
var G__28051 = cljs.core.chunk_rest.call(null,seq__28034_28049__$1);
var G__28052 = c__25943__auto___28050;
var G__28053 = cljs.core.count.call(null,c__25943__auto___28050);
var G__28054 = (0);
seq__28034_28038 = G__28051;
chunk__28035_28039 = G__28052;
count__28036_28040 = G__28053;
i__28037_28041 = G__28054;
continue;
} else {
var k_28055 = cljs.core.first.call(null,seq__28034_28049__$1);
var v_28056 = (b[k_28055]);
(a[k_28055] = v_28056);

var G__28057 = cljs.core.next.call(null,seq__28034_28049__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28034_28038 = G__28057;
chunk__28035_28039 = G__28058;
count__28036_28040 = G__28059;
i__28037_28041 = G__28060;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args28061 = [];
var len__26207__auto___28064 = arguments.length;
var i__26208__auto___28065 = (0);
while(true){
if((i__26208__auto___28065 < len__26207__auto___28064)){
args28061.push((arguments[i__26208__auto___28065]));

var G__28066 = (i__26208__auto___28065 + (1));
i__26208__auto___28065 = G__28066;
continue;
} else {
}
break;
}

var G__28063 = args28061.length;
switch (G__28063) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28061.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__28068 = (i + (2));
var G__28069 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28068;
ret = G__28069;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28070_28074 = cljs.core.seq.call(null,v);
var chunk__28071_28075 = null;
var count__28072_28076 = (0);
var i__28073_28077 = (0);
while(true){
if((i__28073_28077 < count__28072_28076)){
var x_28078 = cljs.core._nth.call(null,chunk__28071_28075,i__28073_28077);
ret.push(x_28078);

var G__28079 = seq__28070_28074;
var G__28080 = chunk__28071_28075;
var G__28081 = count__28072_28076;
var G__28082 = (i__28073_28077 + (1));
seq__28070_28074 = G__28079;
chunk__28071_28075 = G__28080;
count__28072_28076 = G__28081;
i__28073_28077 = G__28082;
continue;
} else {
var temp__4657__auto___28083 = cljs.core.seq.call(null,seq__28070_28074);
if(temp__4657__auto___28083){
var seq__28070_28084__$1 = temp__4657__auto___28083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28070_28084__$1)){
var c__25943__auto___28085 = cljs.core.chunk_first.call(null,seq__28070_28084__$1);
var G__28086 = cljs.core.chunk_rest.call(null,seq__28070_28084__$1);
var G__28087 = c__25943__auto___28085;
var G__28088 = cljs.core.count.call(null,c__25943__auto___28085);
var G__28089 = (0);
seq__28070_28074 = G__28086;
chunk__28071_28075 = G__28087;
count__28072_28076 = G__28088;
i__28073_28077 = G__28089;
continue;
} else {
var x_28090 = cljs.core.first.call(null,seq__28070_28084__$1);
ret.push(x_28090);

var G__28091 = cljs.core.next.call(null,seq__28070_28084__$1);
var G__28092 = null;
var G__28093 = (0);
var G__28094 = (0);
seq__28070_28074 = G__28091;
chunk__28071_28075 = G__28092;
count__28072_28076 = G__28093;
i__28073_28077 = G__28094;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28095_28099 = cljs.core.seq.call(null,v);
var chunk__28096_28100 = null;
var count__28097_28101 = (0);
var i__28098_28102 = (0);
while(true){
if((i__28098_28102 < count__28097_28101)){
var x_28103 = cljs.core._nth.call(null,chunk__28096_28100,i__28098_28102);
ret.push(x_28103);

var G__28104 = seq__28095_28099;
var G__28105 = chunk__28096_28100;
var G__28106 = count__28097_28101;
var G__28107 = (i__28098_28102 + (1));
seq__28095_28099 = G__28104;
chunk__28096_28100 = G__28105;
count__28097_28101 = G__28106;
i__28098_28102 = G__28107;
continue;
} else {
var temp__4657__auto___28108 = cljs.core.seq.call(null,seq__28095_28099);
if(temp__4657__auto___28108){
var seq__28095_28109__$1 = temp__4657__auto___28108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28095_28109__$1)){
var c__25943__auto___28110 = cljs.core.chunk_first.call(null,seq__28095_28109__$1);
var G__28111 = cljs.core.chunk_rest.call(null,seq__28095_28109__$1);
var G__28112 = c__25943__auto___28110;
var G__28113 = cljs.core.count.call(null,c__25943__auto___28110);
var G__28114 = (0);
seq__28095_28099 = G__28111;
chunk__28096_28100 = G__28112;
count__28097_28101 = G__28113;
i__28098_28102 = G__28114;
continue;
} else {
var x_28115 = cljs.core.first.call(null,seq__28095_28109__$1);
ret.push(x_28115);

var G__28116 = cljs.core.next.call(null,seq__28095_28109__$1);
var G__28117 = null;
var G__28118 = (0);
var G__28119 = (0);
seq__28095_28099 = G__28116;
chunk__28096_28100 = G__28117;
count__28097_28101 = G__28118;
i__28098_28102 = G__28119;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28120_28124 = cljs.core.seq.call(null,v);
var chunk__28121_28125 = null;
var count__28122_28126 = (0);
var i__28123_28127 = (0);
while(true){
if((i__28123_28127 < count__28122_28126)){
var x_28128 = cljs.core._nth.call(null,chunk__28121_28125,i__28123_28127);
ret.push(x_28128);

var G__28129 = seq__28120_28124;
var G__28130 = chunk__28121_28125;
var G__28131 = count__28122_28126;
var G__28132 = (i__28123_28127 + (1));
seq__28120_28124 = G__28129;
chunk__28121_28125 = G__28130;
count__28122_28126 = G__28131;
i__28123_28127 = G__28132;
continue;
} else {
var temp__4657__auto___28133 = cljs.core.seq.call(null,seq__28120_28124);
if(temp__4657__auto___28133){
var seq__28120_28134__$1 = temp__4657__auto___28133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28120_28134__$1)){
var c__25943__auto___28135 = cljs.core.chunk_first.call(null,seq__28120_28134__$1);
var G__28136 = cljs.core.chunk_rest.call(null,seq__28120_28134__$1);
var G__28137 = c__25943__auto___28135;
var G__28138 = cljs.core.count.call(null,c__25943__auto___28135);
var G__28139 = (0);
seq__28120_28124 = G__28136;
chunk__28121_28125 = G__28137;
count__28122_28126 = G__28138;
i__28123_28127 = G__28139;
continue;
} else {
var x_28140 = cljs.core.first.call(null,seq__28120_28134__$1);
ret.push(x_28140);

var G__28141 = cljs.core.next.call(null,seq__28120_28134__$1);
var G__28142 = null;
var G__28143 = (0);
var G__28144 = (0);
seq__28120_28124 = G__28141;
chunk__28121_28125 = G__28142;
count__28122_28126 = G__28143;
i__28123_28127 = G__28144;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args28145 = [];
var len__26207__auto___28160 = arguments.length;
var i__26208__auto___28161 = (0);
while(true){
if((i__26208__auto___28161 < len__26207__auto___28160)){
args28145.push((arguments[i__26208__auto___28161]));

var G__28162 = (i__26208__auto___28161 + (1));
i__26208__auto___28161 = G__28162;
continue;
} else {
}
break;
}

var G__28147 = args28145.length;
switch (G__28147) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28145.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__28148 = obj;
G__28148.push(kfn.call(null,k),vfn.call(null,v));

return G__28148;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28149 = cljs.core.clone.call(null,handlers);
x28149.forEach = ((function (x28149,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28150 = cljs.core.seq.call(null,coll);
var chunk__28151 = null;
var count__28152 = (0);
var i__28153 = (0);
while(true){
if((i__28153 < count__28152)){
var vec__28154 = cljs.core._nth.call(null,chunk__28151,i__28153);
var k = cljs.core.nth.call(null,vec__28154,(0),null);
var v = cljs.core.nth.call(null,vec__28154,(1),null);
f.call(null,v,k);

var G__28164 = seq__28150;
var G__28165 = chunk__28151;
var G__28166 = count__28152;
var G__28167 = (i__28153 + (1));
seq__28150 = G__28164;
chunk__28151 = G__28165;
count__28152 = G__28166;
i__28153 = G__28167;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28150);
if(temp__4657__auto__){
var seq__28150__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28150__$1)){
var c__25943__auto__ = cljs.core.chunk_first.call(null,seq__28150__$1);
var G__28168 = cljs.core.chunk_rest.call(null,seq__28150__$1);
var G__28169 = c__25943__auto__;
var G__28170 = cljs.core.count.call(null,c__25943__auto__);
var G__28171 = (0);
seq__28150 = G__28168;
chunk__28151 = G__28169;
count__28152 = G__28170;
i__28153 = G__28171;
continue;
} else {
var vec__28157 = cljs.core.first.call(null,seq__28150__$1);
var k = cljs.core.nth.call(null,vec__28157,(0),null);
var v = cljs.core.nth.call(null,vec__28157,(1),null);
f.call(null,v,k);

var G__28172 = cljs.core.next.call(null,seq__28150__$1);
var G__28173 = null;
var G__28174 = (0);
var G__28175 = (0);
seq__28150 = G__28172;
chunk__28151 = G__28173;
count__28152 = G__28174;
i__28153 = G__28175;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28149,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28149;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args28176 = [];
var len__26207__auto___28182 = arguments.length;
var i__26208__auto___28183 = (0);
while(true){
if((i__26208__auto___28183 < len__26207__auto___28182)){
args28176.push((arguments[i__26208__auto___28183]));

var G__28184 = (i__26208__auto___28183 + (1));
i__26208__auto___28183 = G__28184;
continue;
} else {
}
break;
}

var G__28178 = args28176.length;
switch (G__28178) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28176.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28179 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28180){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28180 = meta28180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28181,meta28180__$1){
var self__ = this;
var _28181__$1 = this;
return (new cognitect.transit.t_cognitect$transit28179(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28180__$1));
});

cognitect.transit.t_cognitect$transit28179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28181){
var self__ = this;
var _28181__$1 = this;
return self__.meta28180;
});

cognitect.transit.t_cognitect$transit28179.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28179.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28179.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28179.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28180","meta28180",-112438730,null)], null);
});

cognitect.transit.t_cognitect$transit28179.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28179.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28179";

cognitect.transit.t_cognitect$transit28179.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cognitect.transit/t_cognitect$transit28179");
});

cognitect.transit.__GT_t_cognitect$transit28179 = (function cognitect$transit$__GT_t_cognitect$transit28179(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28180){
return (new cognitect.transit.t_cognitect$transit28179(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28180));
});

}

return (new cognitect.transit.t_cognitect$transit28179(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25132__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1495401525899