// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35019 = arguments.length;
var i__26208__auto___35020 = (0);
while(true){
if((i__26208__auto___35020 < len__26207__auto___35019)){
args__26214__auto__.push((arguments[i__26208__auto___35020]));

var G__35021 = (i__26208__auto___35020 + (1));
i__26208__auto___35020 = G__35021;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35018){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35018));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35023 = arguments.length;
var i__26208__auto___35024 = (0);
while(true){
if((i__26208__auto___35024 < len__26207__auto___35023)){
args__26214__auto__.push((arguments[i__26208__auto___35024]));

var G__35025 = (i__26208__auto___35024 + (1));
i__26208__auto___35024 = G__35025;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35022){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35022));
});

var g_QMARK__35026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35027 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35026){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35026))
,null));
var mkg_35028 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35026,g_35027){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35026,g_35027))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35026,g_35027,mkg_35028){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35026).call(null,x);
});})(g_QMARK__35026,g_35027,mkg_35028))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35026,g_35027,mkg_35028){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35028).call(null,gfn);
});})(g_QMARK__35026,g_35027,mkg_35028))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35026,g_35027,mkg_35028){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35027).call(null,generator);
});})(g_QMARK__35026,g_35027,mkg_35028))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34990__auto___35047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34990__auto___35047){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35048 = arguments.length;
var i__26208__auto___35049 = (0);
while(true){
if((i__26208__auto___35049 < len__26207__auto___35048)){
args__26214__auto__.push((arguments[i__26208__auto___35049]));

var G__35050 = (i__26208__auto___35049 + (1));
i__26208__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35047))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35047),args);
});})(g__34990__auto___35047))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34990__auto___35047){
return (function (seq35029){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35029));
});})(g__34990__auto___35047))
;


var g__34990__auto___35051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34990__auto___35051){
return (function cljs$spec$impl$gen$list(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35052 = arguments.length;
var i__26208__auto___35053 = (0);
while(true){
if((i__26208__auto___35053 < len__26207__auto___35052)){
args__26214__auto__.push((arguments[i__26208__auto___35053]));

var G__35054 = (i__26208__auto___35053 + (1));
i__26208__auto___35053 = G__35054;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35051))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35051),args);
});})(g__34990__auto___35051))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34990__auto___35051){
return (function (seq35030){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35030));
});})(g__34990__auto___35051))
;


var g__34990__auto___35055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34990__auto___35055){
return (function cljs$spec$impl$gen$map(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35056 = arguments.length;
var i__26208__auto___35057 = (0);
while(true){
if((i__26208__auto___35057 < len__26207__auto___35056)){
args__26214__auto__.push((arguments[i__26208__auto___35057]));

var G__35058 = (i__26208__auto___35057 + (1));
i__26208__auto___35057 = G__35058;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35055))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35055),args);
});})(g__34990__auto___35055))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34990__auto___35055){
return (function (seq35031){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35031));
});})(g__34990__auto___35055))
;


var g__34990__auto___35059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34990__auto___35059){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35060 = arguments.length;
var i__26208__auto___35061 = (0);
while(true){
if((i__26208__auto___35061 < len__26207__auto___35060)){
args__26214__auto__.push((arguments[i__26208__auto___35061]));

var G__35062 = (i__26208__auto___35061 + (1));
i__26208__auto___35061 = G__35062;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35059))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35059),args);
});})(g__34990__auto___35059))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34990__auto___35059){
return (function (seq35032){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35032));
});})(g__34990__auto___35059))
;


var g__34990__auto___35063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34990__auto___35063){
return (function cljs$spec$impl$gen$set(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35064 = arguments.length;
var i__26208__auto___35065 = (0);
while(true){
if((i__26208__auto___35065 < len__26207__auto___35064)){
args__26214__auto__.push((arguments[i__26208__auto___35065]));

var G__35066 = (i__26208__auto___35065 + (1));
i__26208__auto___35065 = G__35066;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35063))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35063),args);
});})(g__34990__auto___35063))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34990__auto___35063){
return (function (seq35033){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35033));
});})(g__34990__auto___35063))
;


var g__34990__auto___35067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34990__auto___35067){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35068 = arguments.length;
var i__26208__auto___35069 = (0);
while(true){
if((i__26208__auto___35069 < len__26207__auto___35068)){
args__26214__auto__.push((arguments[i__26208__auto___35069]));

var G__35070 = (i__26208__auto___35069 + (1));
i__26208__auto___35069 = G__35070;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35067))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35067),args);
});})(g__34990__auto___35067))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34990__auto___35067){
return (function (seq35034){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35034));
});})(g__34990__auto___35067))
;


var g__34990__auto___35071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34990__auto___35071){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35072 = arguments.length;
var i__26208__auto___35073 = (0);
while(true){
if((i__26208__auto___35073 < len__26207__auto___35072)){
args__26214__auto__.push((arguments[i__26208__auto___35073]));

var G__35074 = (i__26208__auto___35073 + (1));
i__26208__auto___35073 = G__35074;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35071))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35071),args);
});})(g__34990__auto___35071))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34990__auto___35071){
return (function (seq35035){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35035));
});})(g__34990__auto___35071))
;


var g__34990__auto___35075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34990__auto___35075){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35076 = arguments.length;
var i__26208__auto___35077 = (0);
while(true){
if((i__26208__auto___35077 < len__26207__auto___35076)){
args__26214__auto__.push((arguments[i__26208__auto___35077]));

var G__35078 = (i__26208__auto___35077 + (1));
i__26208__auto___35077 = G__35078;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35075))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35075),args);
});})(g__34990__auto___35075))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34990__auto___35075){
return (function (seq35036){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35036));
});})(g__34990__auto___35075))
;


var g__34990__auto___35079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34990__auto___35079){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35080 = arguments.length;
var i__26208__auto___35081 = (0);
while(true){
if((i__26208__auto___35081 < len__26207__auto___35080)){
args__26214__auto__.push((arguments[i__26208__auto___35081]));

var G__35082 = (i__26208__auto___35081 + (1));
i__26208__auto___35081 = G__35082;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35079))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35079),args);
});})(g__34990__auto___35079))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34990__auto___35079){
return (function (seq35037){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35037));
});})(g__34990__auto___35079))
;


var g__34990__auto___35083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34990__auto___35083){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35084 = arguments.length;
var i__26208__auto___35085 = (0);
while(true){
if((i__26208__auto___35085 < len__26207__auto___35084)){
args__26214__auto__.push((arguments[i__26208__auto___35085]));

var G__35086 = (i__26208__auto___35085 + (1));
i__26208__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35083))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35083),args);
});})(g__34990__auto___35083))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34990__auto___35083){
return (function (seq35038){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35038));
});})(g__34990__auto___35083))
;


var g__34990__auto___35087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34990__auto___35087){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35088 = arguments.length;
var i__26208__auto___35089 = (0);
while(true){
if((i__26208__auto___35089 < len__26207__auto___35088)){
args__26214__auto__.push((arguments[i__26208__auto___35089]));

var G__35090 = (i__26208__auto___35089 + (1));
i__26208__auto___35089 = G__35090;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35087))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35087),args);
});})(g__34990__auto___35087))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34990__auto___35087){
return (function (seq35039){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35039));
});})(g__34990__auto___35087))
;


var g__34990__auto___35091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34990__auto___35091){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35092 = arguments.length;
var i__26208__auto___35093 = (0);
while(true){
if((i__26208__auto___35093 < len__26207__auto___35092)){
args__26214__auto__.push((arguments[i__26208__auto___35093]));

var G__35094 = (i__26208__auto___35093 + (1));
i__26208__auto___35093 = G__35094;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35091))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35091),args);
});})(g__34990__auto___35091))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34990__auto___35091){
return (function (seq35040){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35040));
});})(g__34990__auto___35091))
;


var g__34990__auto___35095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34990__auto___35095){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35096 = arguments.length;
var i__26208__auto___35097 = (0);
while(true){
if((i__26208__auto___35097 < len__26207__auto___35096)){
args__26214__auto__.push((arguments[i__26208__auto___35097]));

var G__35098 = (i__26208__auto___35097 + (1));
i__26208__auto___35097 = G__35098;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35095))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35095),args);
});})(g__34990__auto___35095))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34990__auto___35095){
return (function (seq35041){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35041));
});})(g__34990__auto___35095))
;


var g__34990__auto___35099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34990__auto___35099){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35100 = arguments.length;
var i__26208__auto___35101 = (0);
while(true){
if((i__26208__auto___35101 < len__26207__auto___35100)){
args__26214__auto__.push((arguments[i__26208__auto___35101]));

var G__35102 = (i__26208__auto___35101 + (1));
i__26208__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35099))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35099),args);
});})(g__34990__auto___35099))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34990__auto___35099){
return (function (seq35042){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35042));
});})(g__34990__auto___35099))
;


var g__34990__auto___35103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34990__auto___35103){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35104 = arguments.length;
var i__26208__auto___35105 = (0);
while(true){
if((i__26208__auto___35105 < len__26207__auto___35104)){
args__26214__auto__.push((arguments[i__26208__auto___35105]));

var G__35106 = (i__26208__auto___35105 + (1));
i__26208__auto___35105 = G__35106;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35103))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35103),args);
});})(g__34990__auto___35103))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34990__auto___35103){
return (function (seq35043){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35043));
});})(g__34990__auto___35103))
;


var g__34990__auto___35107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34990__auto___35107){
return (function cljs$spec$impl$gen$return(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35108 = arguments.length;
var i__26208__auto___35109 = (0);
while(true){
if((i__26208__auto___35109 < len__26207__auto___35108)){
args__26214__auto__.push((arguments[i__26208__auto___35109]));

var G__35110 = (i__26208__auto___35109 + (1));
i__26208__auto___35109 = G__35110;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35107))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35107),args);
});})(g__34990__auto___35107))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34990__auto___35107){
return (function (seq35044){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35044));
});})(g__34990__auto___35107))
;


var g__34990__auto___35111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34990__auto___35111){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35112 = arguments.length;
var i__26208__auto___35113 = (0);
while(true){
if((i__26208__auto___35113 < len__26207__auto___35112)){
args__26214__auto__.push((arguments[i__26208__auto___35113]));

var G__35114 = (i__26208__auto___35113 + (1));
i__26208__auto___35113 = G__35114;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35111))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35111),args);
});})(g__34990__auto___35111))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34990__auto___35111){
return (function (seq35045){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35045));
});})(g__34990__auto___35111))
;


var g__34990__auto___35115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34990__auto___35115){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35116 = arguments.length;
var i__26208__auto___35117 = (0);
while(true){
if((i__26208__auto___35117 < len__26207__auto___35116)){
args__26214__auto__.push((arguments[i__26208__auto___35117]));

var G__35118 = (i__26208__auto___35117 + (1));
i__26208__auto___35117 = G__35118;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__34990__auto___35115))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34990__auto___35115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34990__auto___35115),args);
});})(g__34990__auto___35115))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34990__auto___35115){
return (function (seq35046){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35046));
});})(g__34990__auto___35115))
;

var g__35003__auto___35140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35003__auto___35140){
return (function cljs$spec$impl$gen$any(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35141 = arguments.length;
var i__26208__auto___35142 = (0);
while(true){
if((i__26208__auto___35142 < len__26207__auto___35141)){
args__26214__auto__.push((arguments[i__26208__auto___35142]));

var G__35143 = (i__26208__auto___35142 + (1));
i__26208__auto___35142 = G__35143;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35140))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35140){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35140);
});})(g__35003__auto___35140))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35003__auto___35140){
return (function (seq35119){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35119));
});})(g__35003__auto___35140))
;


var g__35003__auto___35144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35003__auto___35144){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35145 = arguments.length;
var i__26208__auto___35146 = (0);
while(true){
if((i__26208__auto___35146 < len__26207__auto___35145)){
args__26214__auto__.push((arguments[i__26208__auto___35146]));

var G__35147 = (i__26208__auto___35146 + (1));
i__26208__auto___35146 = G__35147;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35144))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35144){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35144);
});})(g__35003__auto___35144))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35003__auto___35144){
return (function (seq35120){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35120));
});})(g__35003__auto___35144))
;


var g__35003__auto___35148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35003__auto___35148){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35149 = arguments.length;
var i__26208__auto___35150 = (0);
while(true){
if((i__26208__auto___35150 < len__26207__auto___35149)){
args__26214__auto__.push((arguments[i__26208__auto___35150]));

var G__35151 = (i__26208__auto___35150 + (1));
i__26208__auto___35150 = G__35151;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35148))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35148){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35148);
});})(g__35003__auto___35148))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35003__auto___35148){
return (function (seq35121){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35121));
});})(g__35003__auto___35148))
;


var g__35003__auto___35152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35003__auto___35152){
return (function cljs$spec$impl$gen$char(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35153 = arguments.length;
var i__26208__auto___35154 = (0);
while(true){
if((i__26208__auto___35154 < len__26207__auto___35153)){
args__26214__auto__.push((arguments[i__26208__auto___35154]));

var G__35155 = (i__26208__auto___35154 + (1));
i__26208__auto___35154 = G__35155;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35152))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35152){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35152);
});})(g__35003__auto___35152))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35003__auto___35152){
return (function (seq35122){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35122));
});})(g__35003__auto___35152))
;


var g__35003__auto___35156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35003__auto___35156){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35157 = arguments.length;
var i__26208__auto___35158 = (0);
while(true){
if((i__26208__auto___35158 < len__26207__auto___35157)){
args__26214__auto__.push((arguments[i__26208__auto___35158]));

var G__35159 = (i__26208__auto___35158 + (1));
i__26208__auto___35158 = G__35159;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35156))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35156){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35156);
});})(g__35003__auto___35156))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35003__auto___35156){
return (function (seq35123){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35123));
});})(g__35003__auto___35156))
;


var g__35003__auto___35160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35003__auto___35160){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35161 = arguments.length;
var i__26208__auto___35162 = (0);
while(true){
if((i__26208__auto___35162 < len__26207__auto___35161)){
args__26214__auto__.push((arguments[i__26208__auto___35162]));

var G__35163 = (i__26208__auto___35162 + (1));
i__26208__auto___35162 = G__35163;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35160))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35160){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35160);
});})(g__35003__auto___35160))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35003__auto___35160){
return (function (seq35124){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35124));
});})(g__35003__auto___35160))
;


var g__35003__auto___35164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35003__auto___35164){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35165 = arguments.length;
var i__26208__auto___35166 = (0);
while(true){
if((i__26208__auto___35166 < len__26207__auto___35165)){
args__26214__auto__.push((arguments[i__26208__auto___35166]));

var G__35167 = (i__26208__auto___35166 + (1));
i__26208__auto___35166 = G__35167;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35164))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35164){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35164);
});})(g__35003__auto___35164))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35003__auto___35164){
return (function (seq35125){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35125));
});})(g__35003__auto___35164))
;


var g__35003__auto___35168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35003__auto___35168){
return (function cljs$spec$impl$gen$double(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35169 = arguments.length;
var i__26208__auto___35170 = (0);
while(true){
if((i__26208__auto___35170 < len__26207__auto___35169)){
args__26214__auto__.push((arguments[i__26208__auto___35170]));

var G__35171 = (i__26208__auto___35170 + (1));
i__26208__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35168))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35168){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35168);
});})(g__35003__auto___35168))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35003__auto___35168){
return (function (seq35126){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35126));
});})(g__35003__auto___35168))
;


var g__35003__auto___35172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35003__auto___35172){
return (function cljs$spec$impl$gen$int(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35173 = arguments.length;
var i__26208__auto___35174 = (0);
while(true){
if((i__26208__auto___35174 < len__26207__auto___35173)){
args__26214__auto__.push((arguments[i__26208__auto___35174]));

var G__35175 = (i__26208__auto___35174 + (1));
i__26208__auto___35174 = G__35175;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35172))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35172){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35172);
});})(g__35003__auto___35172))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35003__auto___35172){
return (function (seq35127){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35127));
});})(g__35003__auto___35172))
;


var g__35003__auto___35176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35003__auto___35176){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35177 = arguments.length;
var i__26208__auto___35178 = (0);
while(true){
if((i__26208__auto___35178 < len__26207__auto___35177)){
args__26214__auto__.push((arguments[i__26208__auto___35178]));

var G__35179 = (i__26208__auto___35178 + (1));
i__26208__auto___35178 = G__35179;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35176))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35176){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35176);
});})(g__35003__auto___35176))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35003__auto___35176){
return (function (seq35128){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35128));
});})(g__35003__auto___35176))
;


var g__35003__auto___35180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35003__auto___35180){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35181 = arguments.length;
var i__26208__auto___35182 = (0);
while(true){
if((i__26208__auto___35182 < len__26207__auto___35181)){
args__26214__auto__.push((arguments[i__26208__auto___35182]));

var G__35183 = (i__26208__auto___35182 + (1));
i__26208__auto___35182 = G__35183;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35180))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35180){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35180);
});})(g__35003__auto___35180))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35003__auto___35180){
return (function (seq35129){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35129));
});})(g__35003__auto___35180))
;


var g__35003__auto___35184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35003__auto___35184){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35185 = arguments.length;
var i__26208__auto___35186 = (0);
while(true){
if((i__26208__auto___35186 < len__26207__auto___35185)){
args__26214__auto__.push((arguments[i__26208__auto___35186]));

var G__35187 = (i__26208__auto___35186 + (1));
i__26208__auto___35186 = G__35187;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35184))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35184){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35184);
});})(g__35003__auto___35184))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35003__auto___35184){
return (function (seq35130){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35130));
});})(g__35003__auto___35184))
;


var g__35003__auto___35188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35003__auto___35188){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35189 = arguments.length;
var i__26208__auto___35190 = (0);
while(true){
if((i__26208__auto___35190 < len__26207__auto___35189)){
args__26214__auto__.push((arguments[i__26208__auto___35190]));

var G__35191 = (i__26208__auto___35190 + (1));
i__26208__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35188))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35188){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35188);
});})(g__35003__auto___35188))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35003__auto___35188){
return (function (seq35131){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35131));
});})(g__35003__auto___35188))
;


var g__35003__auto___35192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35003__auto___35192){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35193 = arguments.length;
var i__26208__auto___35194 = (0);
while(true){
if((i__26208__auto___35194 < len__26207__auto___35193)){
args__26214__auto__.push((arguments[i__26208__auto___35194]));

var G__35195 = (i__26208__auto___35194 + (1));
i__26208__auto___35194 = G__35195;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35192))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35192){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35192);
});})(g__35003__auto___35192))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35003__auto___35192){
return (function (seq35132){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35132));
});})(g__35003__auto___35192))
;


var g__35003__auto___35196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35003__auto___35196){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35197 = arguments.length;
var i__26208__auto___35198 = (0);
while(true){
if((i__26208__auto___35198 < len__26207__auto___35197)){
args__26214__auto__.push((arguments[i__26208__auto___35198]));

var G__35199 = (i__26208__auto___35198 + (1));
i__26208__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35196))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35196){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35196);
});})(g__35003__auto___35196))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35003__auto___35196){
return (function (seq35133){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35133));
});})(g__35003__auto___35196))
;


var g__35003__auto___35200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35003__auto___35200){
return (function cljs$spec$impl$gen$string(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35201 = arguments.length;
var i__26208__auto___35202 = (0);
while(true){
if((i__26208__auto___35202 < len__26207__auto___35201)){
args__26214__auto__.push((arguments[i__26208__auto___35202]));

var G__35203 = (i__26208__auto___35202 + (1));
i__26208__auto___35202 = G__35203;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35200))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35200){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35200);
});})(g__35003__auto___35200))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35003__auto___35200){
return (function (seq35134){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35134));
});})(g__35003__auto___35200))
;


var g__35003__auto___35204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35003__auto___35204){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35205 = arguments.length;
var i__26208__auto___35206 = (0);
while(true){
if((i__26208__auto___35206 < len__26207__auto___35205)){
args__26214__auto__.push((arguments[i__26208__auto___35206]));

var G__35207 = (i__26208__auto___35206 + (1));
i__26208__auto___35206 = G__35207;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35204))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35204){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35204);
});})(g__35003__auto___35204))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35003__auto___35204){
return (function (seq35135){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35135));
});})(g__35003__auto___35204))
;


var g__35003__auto___35208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35003__auto___35208){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35209 = arguments.length;
var i__26208__auto___35210 = (0);
while(true){
if((i__26208__auto___35210 < len__26207__auto___35209)){
args__26214__auto__.push((arguments[i__26208__auto___35210]));

var G__35211 = (i__26208__auto___35210 + (1));
i__26208__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35208))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35208){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35208);
});})(g__35003__auto___35208))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35003__auto___35208){
return (function (seq35136){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35136));
});})(g__35003__auto___35208))
;


var g__35003__auto___35212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35003__auto___35212){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35213 = arguments.length;
var i__26208__auto___35214 = (0);
while(true){
if((i__26208__auto___35214 < len__26207__auto___35213)){
args__26214__auto__.push((arguments[i__26208__auto___35214]));

var G__35215 = (i__26208__auto___35214 + (1));
i__26208__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35212))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35212){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35212);
});})(g__35003__auto___35212))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35003__auto___35212){
return (function (seq35137){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35137));
});})(g__35003__auto___35212))
;


var g__35003__auto___35216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35003__auto___35216){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35217 = arguments.length;
var i__26208__auto___35218 = (0);
while(true){
if((i__26208__auto___35218 < len__26207__auto___35217)){
args__26214__auto__.push((arguments[i__26208__auto___35218]));

var G__35219 = (i__26208__auto___35218 + (1));
i__26208__auto___35218 = G__35219;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35216))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35216){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35216);
});})(g__35003__auto___35216))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35003__auto___35216){
return (function (seq35138){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35138));
});})(g__35003__auto___35216))
;


var g__35003__auto___35220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35003__auto___35220){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35221 = arguments.length;
var i__26208__auto___35222 = (0);
while(true){
if((i__26208__auto___35222 < len__26207__auto___35221)){
args__26214__auto__.push((arguments[i__26208__auto___35222]));

var G__35223 = (i__26208__auto___35222 + (1));
i__26208__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});})(g__35003__auto___35220))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35003__auto___35220){
return (function (args){
return cljs.core.deref.call(null,g__35003__auto___35220);
});})(g__35003__auto___35220))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35003__auto___35220){
return (function (seq35139){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35139));
});})(g__35003__auto___35220))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26214__auto__ = [];
var len__26207__auto___35226 = arguments.length;
var i__26208__auto___35227 = (0);
while(true){
if((i__26208__auto___35227 < len__26207__auto___35226)){
args__26214__auto__.push((arguments[i__26208__auto___35227]));

var G__35228 = (i__26208__auto___35227 + (1));
i__26208__auto___35227 = G__35228;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35224_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35224_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35225){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35225));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35229_SHARP_){
return (new Date(p1__35229_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1495401533557