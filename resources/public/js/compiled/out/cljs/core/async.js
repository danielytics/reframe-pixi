// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29411 = [];
var len__26207__auto___29417 = arguments.length;
var i__26208__auto___29418 = (0);
while(true){
if((i__26208__auto___29418 < len__26207__auto___29417)){
args29411.push((arguments[i__26208__auto___29418]));

var G__29419 = (i__26208__auto___29418 + (1));
i__26208__auto___29418 = G__29419;
continue;
} else {
}
break;
}

var G__29413 = args29411.length;
switch (G__29413) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29411.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29414 = (function (f,blockable,meta29415){
this.f = f;
this.blockable = blockable;
this.meta29415 = meta29415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29416,meta29415__$1){
var self__ = this;
var _29416__$1 = this;
return (new cljs.core.async.t_cljs$core$async29414(self__.f,self__.blockable,meta29415__$1));
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29416){
var self__ = this;
var _29416__$1 = this;
return self__.meta29415;
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29415","meta29415",1040241905,null)], null);
});

cljs.core.async.t_cljs$core$async29414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29414";

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async29414");
});

cljs.core.async.__GT_t_cljs$core$async29414 = (function cljs$core$async$__GT_t_cljs$core$async29414(f__$1,blockable__$1,meta29415){
return (new cljs.core.async.t_cljs$core$async29414(f__$1,blockable__$1,meta29415));
});

}

return (new cljs.core.async.t_cljs$core$async29414(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29423 = [];
var len__26207__auto___29426 = arguments.length;
var i__26208__auto___29427 = (0);
while(true){
if((i__26208__auto___29427 < len__26207__auto___29426)){
args29423.push((arguments[i__26208__auto___29427]));

var G__29428 = (i__26208__auto___29427 + (1));
i__26208__auto___29427 = G__29428;
continue;
} else {
}
break;
}

var G__29425 = args29423.length;
switch (G__29425) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29423.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29430 = [];
var len__26207__auto___29433 = arguments.length;
var i__26208__auto___29434 = (0);
while(true){
if((i__26208__auto___29434 < len__26207__auto___29433)){
args29430.push((arguments[i__26208__auto___29434]));

var G__29435 = (i__26208__auto___29434 + (1));
i__26208__auto___29434 = G__29435;
continue;
} else {
}
break;
}

var G__29432 = args29430.length;
switch (G__29432) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29430.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29437 = [];
var len__26207__auto___29440 = arguments.length;
var i__26208__auto___29441 = (0);
while(true){
if((i__26208__auto___29441 < len__26207__auto___29440)){
args29437.push((arguments[i__26208__auto___29441]));

var G__29442 = (i__26208__auto___29441 + (1));
i__26208__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var G__29439 = args29437.length;
switch (G__29439) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29437.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29444 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29444);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29444,ret){
return (function (){
return fn1.call(null,val_29444);
});})(val_29444,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29445 = [];
var len__26207__auto___29448 = arguments.length;
var i__26208__auto___29449 = (0);
while(true){
if((i__26208__auto___29449 < len__26207__auto___29448)){
args29445.push((arguments[i__26208__auto___29449]));

var G__29450 = (i__26208__auto___29449 + (1));
i__26208__auto___29449 = G__29450;
continue;
} else {
}
break;
}

var G__29447 = args29445.length;
switch (G__29447) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29445.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26047__auto___29452 = n;
var x_29453 = (0);
while(true){
if((x_29453 < n__26047__auto___29452)){
(a[x_29453] = (0));

var G__29454 = (x_29453 + (1));
x_29453 = G__29454;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29455 = (i + (1));
i = G__29455;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29459 = (function (alt_flag,flag,meta29460){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29460 = meta29460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29461,meta29460__$1){
var self__ = this;
var _29461__$1 = this;
return (new cljs.core.async.t_cljs$core$async29459(self__.alt_flag,self__.flag,meta29460__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29461){
var self__ = this;
var _29461__$1 = this;
return self__.meta29460;
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29460","meta29460",478367966,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29459";

cljs.core.async.t_cljs$core$async29459.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async29459");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29459 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29459(alt_flag__$1,flag__$1,meta29460){
return (new cljs.core.async.t_cljs$core$async29459(alt_flag__$1,flag__$1,meta29460));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29459(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29465 = (function (alt_handler,flag,cb,meta29466){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29466 = meta29466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29467,meta29466__$1){
var self__ = this;
var _29467__$1 = this;
return (new cljs.core.async.t_cljs$core$async29465(self__.alt_handler,self__.flag,self__.cb,meta29466__$1));
});

cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29467){
var self__ = this;
var _29467__$1 = this;
return self__.meta29466;
});

cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29466","meta29466",-1542131078,null)], null);
});

cljs.core.async.t_cljs$core$async29465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29465";

cljs.core.async.t_cljs$core$async29465.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async29465");
});

cljs.core.async.__GT_t_cljs$core$async29465 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29465(alt_handler__$1,flag__$1,cb__$1,meta29466){
return (new cljs.core.async.t_cljs$core$async29465(alt_handler__$1,flag__$1,cb__$1,meta29466));
});

}

return (new cljs.core.async.t_cljs$core$async29465(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29468_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29468_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29469_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29469_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25132__auto__ = wport;
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29470 = (i + (1));
i = G__29470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25132__auto__ = ret;
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25120__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___29476 = arguments.length;
var i__26208__auto___29477 = (0);
while(true){
if((i__26208__auto___29477 < len__26207__auto___29476)){
args__26214__auto__.push((arguments[i__26208__auto___29477]));

var G__29478 = (i__26208__auto___29477 + (1));
i__26208__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((1) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26215__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29473){
var map__29474 = p__29473;
var map__29474__$1 = ((((!((map__29474 == null)))?((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var opts = map__29474__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29471){
var G__29472 = cljs.core.first.call(null,seq29471);
var seq29471__$1 = cljs.core.next.call(null,seq29471);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29472,seq29471__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29479 = [];
var len__26207__auto___29529 = arguments.length;
var i__26208__auto___29530 = (0);
while(true){
if((i__26208__auto___29530 < len__26207__auto___29529)){
args29479.push((arguments[i__26208__auto___29530]));

var G__29531 = (i__26208__auto___29530 + (1));
i__26208__auto___29530 = G__29531;
continue;
} else {
}
break;
}

var G__29481 = args29479.length;
switch (G__29481) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29479.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29366__auto___29533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___29533){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___29533){
return (function (state_29505){
var state_val_29506 = (state_29505[(1)]);
if((state_val_29506 === (7))){
var inst_29501 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29507_29534 = state_29505__$1;
(statearr_29507_29534[(2)] = inst_29501);

(statearr_29507_29534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (1))){
var state_29505__$1 = state_29505;
var statearr_29508_29535 = state_29505__$1;
(statearr_29508_29535[(2)] = null);

(statearr_29508_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (4))){
var inst_29484 = (state_29505[(7)]);
var inst_29484__$1 = (state_29505[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29505__$1 = (function (){var statearr_29509 = state_29505;
(statearr_29509[(7)] = inst_29484__$1);

return statearr_29509;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29510_29536 = state_29505__$1;
(statearr_29510_29536[(1)] = (5));

} else {
var statearr_29511_29537 = state_29505__$1;
(statearr_29511_29537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (13))){
var state_29505__$1 = state_29505;
var statearr_29512_29538 = state_29505__$1;
(statearr_29512_29538[(2)] = null);

(statearr_29512_29538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (6))){
var inst_29484 = (state_29505[(7)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29505__$1,(11),to,inst_29484);
} else {
if((state_val_29506 === (3))){
var inst_29503 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29505__$1,inst_29503);
} else {
if((state_val_29506 === (12))){
var state_29505__$1 = state_29505;
var statearr_29513_29539 = state_29505__$1;
(statearr_29513_29539[(2)] = null);

(statearr_29513_29539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (2))){
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(4),from);
} else {
if((state_val_29506 === (11))){
var inst_29494 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29494)){
var statearr_29514_29540 = state_29505__$1;
(statearr_29514_29540[(1)] = (12));

} else {
var statearr_29515_29541 = state_29505__$1;
(statearr_29515_29541[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (9))){
var state_29505__$1 = state_29505;
var statearr_29516_29542 = state_29505__$1;
(statearr_29516_29542[(2)] = null);

(statearr_29516_29542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (5))){
var state_29505__$1 = state_29505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29517_29543 = state_29505__$1;
(statearr_29517_29543[(1)] = (8));

} else {
var statearr_29518_29544 = state_29505__$1;
(statearr_29518_29544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (14))){
var inst_29499 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29519_29545 = state_29505__$1;
(statearr_29519_29545[(2)] = inst_29499);

(statearr_29519_29545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (10))){
var inst_29491 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29520_29546 = state_29505__$1;
(statearr_29520_29546[(2)] = inst_29491);

(statearr_29520_29546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (8))){
var inst_29488 = cljs.core.async.close_BANG_.call(null,to);
var state_29505__$1 = state_29505;
var statearr_29521_29547 = state_29505__$1;
(statearr_29521_29547[(2)] = inst_29488);

(statearr_29521_29547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___29533))
;
return ((function (switch__29254__auto__,c__29366__auto___29533){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_29525 = [null,null,null,null,null,null,null,null];
(statearr_29525[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_29525[(1)] = (1));

return statearr_29525;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_29505){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29526){if((e29526 instanceof Object)){
var ex__29258__auto__ = e29526;
var statearr_29527_29548 = state_29505;
(statearr_29527_29548[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29549 = state_29505;
state_29505 = G__29549;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_29505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_29505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___29533))
})();
var state__29368__auto__ = (function (){var statearr_29528 = f__29367__auto__.call(null);
(statearr_29528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___29533);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___29533))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29737){
var vec__29738 = p__29737;
var v = cljs.core.nth.call(null,vec__29738,(0),null);
var p = cljs.core.nth.call(null,vec__29738,(1),null);
var job = vec__29738;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29366__auto___29924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results){
return (function (state_29745){
var state_val_29746 = (state_29745[(1)]);
if((state_val_29746 === (1))){
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29745__$1,(2),res,v);
} else {
if((state_val_29746 === (2))){
var inst_29742 = (state_29745[(2)]);
var inst_29743 = cljs.core.async.close_BANG_.call(null,res);
var state_29745__$1 = (function (){var statearr_29747 = state_29745;
(statearr_29747[(7)] = inst_29742);

return statearr_29747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29745__$1,inst_29743);
} else {
return null;
}
}
});})(c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results))
;
return ((function (switch__29254__auto__,c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_29751 = [null,null,null,null,null,null,null,null];
(statearr_29751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__);

(statearr_29751[(1)] = (1));

return statearr_29751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1 = (function (state_29745){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29752){if((e29752 instanceof Object)){
var ex__29258__auto__ = e29752;
var statearr_29753_29925 = state_29745;
(statearr_29753_29925[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29926 = state_29745;
state_29745 = G__29926;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = function(state_29745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1.call(this,state_29745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results))
})();
var state__29368__auto__ = (function (){var statearr_29754 = f__29367__auto__.call(null);
(statearr_29754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___29924);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___29924,res,vec__29738,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29755){
var vec__29756 = p__29755;
var v = cljs.core.nth.call(null,vec__29756,(0),null);
var p = cljs.core.nth.call(null,vec__29756,(1),null);
var job = vec__29756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26047__auto___29927 = n;
var __29928 = (0);
while(true){
if((__29928 < n__26047__auto___29927)){
var G__29759_29929 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29759_29929) {
case "compute":
var c__29366__auto___29931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29928,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (__29928,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function (state_29772){
var state_val_29773 = (state_29772[(1)]);
if((state_val_29773 === (1))){
var state_29772__$1 = state_29772;
var statearr_29774_29932 = state_29772__$1;
(statearr_29774_29932[(2)] = null);

(statearr_29774_29932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (2))){
var state_29772__$1 = state_29772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29772__$1,(4),jobs);
} else {
if((state_val_29773 === (3))){
var inst_29770 = (state_29772[(2)]);
var state_29772__$1 = state_29772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29772__$1,inst_29770);
} else {
if((state_val_29773 === (4))){
var inst_29762 = (state_29772[(2)]);
var inst_29763 = process.call(null,inst_29762);
var state_29772__$1 = state_29772;
if(cljs.core.truth_(inst_29763)){
var statearr_29775_29933 = state_29772__$1;
(statearr_29775_29933[(1)] = (5));

} else {
var statearr_29776_29934 = state_29772__$1;
(statearr_29776_29934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (5))){
var state_29772__$1 = state_29772;
var statearr_29777_29935 = state_29772__$1;
(statearr_29777_29935[(2)] = null);

(statearr_29777_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (6))){
var state_29772__$1 = state_29772;
var statearr_29778_29936 = state_29772__$1;
(statearr_29778_29936[(2)] = null);

(statearr_29778_29936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29773 === (7))){
var inst_29768 = (state_29772[(2)]);
var state_29772__$1 = state_29772;
var statearr_29779_29937 = state_29772__$1;
(statearr_29779_29937[(2)] = inst_29768);

(statearr_29779_29937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29928,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
;
return ((function (__29928,switch__29254__auto__,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_29783 = [null,null,null,null,null,null,null];
(statearr_29783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__);

(statearr_29783[(1)] = (1));

return statearr_29783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1 = (function (state_29772){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29784){if((e29784 instanceof Object)){
var ex__29258__auto__ = e29784;
var statearr_29785_29938 = state_29772;
(statearr_29785_29938[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29939 = state_29772;
state_29772 = G__29939;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = function(state_29772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1.call(this,state_29772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__;
})()
;})(__29928,switch__29254__auto__,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
})();
var state__29368__auto__ = (function (){var statearr_29786 = f__29367__auto__.call(null);
(statearr_29786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___29931);

return statearr_29786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(__29928,c__29366__auto___29931,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
);


break;
case "async":
var c__29366__auto___29940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29928,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (__29928,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function (state_29799){
var state_val_29800 = (state_29799[(1)]);
if((state_val_29800 === (1))){
var state_29799__$1 = state_29799;
var statearr_29801_29941 = state_29799__$1;
(statearr_29801_29941[(2)] = null);

(statearr_29801_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (2))){
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,(4),jobs);
} else {
if((state_val_29800 === (3))){
var inst_29797 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29799__$1,inst_29797);
} else {
if((state_val_29800 === (4))){
var inst_29789 = (state_29799[(2)]);
var inst_29790 = async.call(null,inst_29789);
var state_29799__$1 = state_29799;
if(cljs.core.truth_(inst_29790)){
var statearr_29802_29942 = state_29799__$1;
(statearr_29802_29942[(1)] = (5));

} else {
var statearr_29803_29943 = state_29799__$1;
(statearr_29803_29943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (5))){
var state_29799__$1 = state_29799;
var statearr_29804_29944 = state_29799__$1;
(statearr_29804_29944[(2)] = null);

(statearr_29804_29944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (6))){
var state_29799__$1 = state_29799;
var statearr_29805_29945 = state_29799__$1;
(statearr_29805_29945[(2)] = null);

(statearr_29805_29945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (7))){
var inst_29795 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29806_29946 = state_29799__$1;
(statearr_29806_29946[(2)] = inst_29795);

(statearr_29806_29946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29928,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
;
return ((function (__29928,switch__29254__auto__,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_29810 = [null,null,null,null,null,null,null];
(statearr_29810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__);

(statearr_29810[(1)] = (1));

return statearr_29810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1 = (function (state_29799){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29811){if((e29811 instanceof Object)){
var ex__29258__auto__ = e29811;
var statearr_29812_29947 = state_29799;
(statearr_29812_29947[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29948 = state_29799;
state_29799 = G__29948;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = function(state_29799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1.call(this,state_29799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__;
})()
;})(__29928,switch__29254__auto__,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
})();
var state__29368__auto__ = (function (){var statearr_29813 = f__29367__auto__.call(null);
(statearr_29813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___29940);

return statearr_29813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(__29928,c__29366__auto___29940,G__29759_29929,n__26047__auto___29927,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29949 = (__29928 + (1));
__29928 = G__29949;
continue;
} else {
}
break;
}

var c__29366__auto___29950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___29950,jobs,results,process,async){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___29950,jobs,results,process,async){
return (function (state_29835){
var state_val_29836 = (state_29835[(1)]);
if((state_val_29836 === (1))){
var state_29835__$1 = state_29835;
var statearr_29837_29951 = state_29835__$1;
(statearr_29837_29951[(2)] = null);

(statearr_29837_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (2))){
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(4),from);
} else {
if((state_val_29836 === (3))){
var inst_29833 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29835__$1,inst_29833);
} else {
if((state_val_29836 === (4))){
var inst_29816 = (state_29835[(7)]);
var inst_29816__$1 = (state_29835[(2)]);
var inst_29817 = (inst_29816__$1 == null);
var state_29835__$1 = (function (){var statearr_29838 = state_29835;
(statearr_29838[(7)] = inst_29816__$1);

return statearr_29838;
})();
if(cljs.core.truth_(inst_29817)){
var statearr_29839_29952 = state_29835__$1;
(statearr_29839_29952[(1)] = (5));

} else {
var statearr_29840_29953 = state_29835__$1;
(statearr_29840_29953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (5))){
var inst_29819 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29835__$1 = state_29835;
var statearr_29841_29954 = state_29835__$1;
(statearr_29841_29954[(2)] = inst_29819);

(statearr_29841_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (6))){
var inst_29821 = (state_29835[(8)]);
var inst_29816 = (state_29835[(7)]);
var inst_29821__$1 = cljs.core.async.chan.call(null,(1));
var inst_29822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29823 = [inst_29816,inst_29821__$1];
var inst_29824 = (new cljs.core.PersistentVector(null,2,(5),inst_29822,inst_29823,null));
var state_29835__$1 = (function (){var statearr_29842 = state_29835;
(statearr_29842[(8)] = inst_29821__$1);

return statearr_29842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29835__$1,(8),jobs,inst_29824);
} else {
if((state_val_29836 === (7))){
var inst_29831 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29843_29955 = state_29835__$1;
(statearr_29843_29955[(2)] = inst_29831);

(statearr_29843_29955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (8))){
var inst_29821 = (state_29835[(8)]);
var inst_29826 = (state_29835[(2)]);
var state_29835__$1 = (function (){var statearr_29844 = state_29835;
(statearr_29844[(9)] = inst_29826);

return statearr_29844;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29835__$1,(9),results,inst_29821);
} else {
if((state_val_29836 === (9))){
var inst_29828 = (state_29835[(2)]);
var state_29835__$1 = (function (){var statearr_29845 = state_29835;
(statearr_29845[(10)] = inst_29828);

return statearr_29845;
})();
var statearr_29846_29956 = state_29835__$1;
(statearr_29846_29956[(2)] = null);

(statearr_29846_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___29950,jobs,results,process,async))
;
return ((function (switch__29254__auto__,c__29366__auto___29950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1 = (function (state_29835){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__29258__auto__ = e29851;
var statearr_29852_29957 = state_29835;
(statearr_29852_29957[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29835;
state_29835 = G__29958;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = function(state_29835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1.call(this,state_29835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___29950,jobs,results,process,async))
})();
var state__29368__auto__ = (function (){var statearr_29853 = f__29367__auto__.call(null);
(statearr_29853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___29950);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___29950,jobs,results,process,async))
);


var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__,jobs,results,process,async){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__,jobs,results,process,async){
return (function (state_29891){
var state_val_29892 = (state_29891[(1)]);
if((state_val_29892 === (7))){
var inst_29887 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29893_29959 = state_29891__$1;
(statearr_29893_29959[(2)] = inst_29887);

(statearr_29893_29959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (20))){
var state_29891__$1 = state_29891;
var statearr_29894_29960 = state_29891__$1;
(statearr_29894_29960[(2)] = null);

(statearr_29894_29960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (1))){
var state_29891__$1 = state_29891;
var statearr_29895_29961 = state_29891__$1;
(statearr_29895_29961[(2)] = null);

(statearr_29895_29961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (4))){
var inst_29856 = (state_29891[(7)]);
var inst_29856__$1 = (state_29891[(2)]);
var inst_29857 = (inst_29856__$1 == null);
var state_29891__$1 = (function (){var statearr_29896 = state_29891;
(statearr_29896[(7)] = inst_29856__$1);

return statearr_29896;
})();
if(cljs.core.truth_(inst_29857)){
var statearr_29897_29962 = state_29891__$1;
(statearr_29897_29962[(1)] = (5));

} else {
var statearr_29898_29963 = state_29891__$1;
(statearr_29898_29963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (15))){
var inst_29869 = (state_29891[(8)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29891__$1,(18),to,inst_29869);
} else {
if((state_val_29892 === (21))){
var inst_29882 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29899_29964 = state_29891__$1;
(statearr_29899_29964[(2)] = inst_29882);

(statearr_29899_29964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (13))){
var inst_29884 = (state_29891[(2)]);
var state_29891__$1 = (function (){var statearr_29900 = state_29891;
(statearr_29900[(9)] = inst_29884);

return statearr_29900;
})();
var statearr_29901_29965 = state_29891__$1;
(statearr_29901_29965[(2)] = null);

(statearr_29901_29965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (6))){
var inst_29856 = (state_29891[(7)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(11),inst_29856);
} else {
if((state_val_29892 === (17))){
var inst_29877 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
if(cljs.core.truth_(inst_29877)){
var statearr_29902_29966 = state_29891__$1;
(statearr_29902_29966[(1)] = (19));

} else {
var statearr_29903_29967 = state_29891__$1;
(statearr_29903_29967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (3))){
var inst_29889 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29891__$1,inst_29889);
} else {
if((state_val_29892 === (12))){
var inst_29866 = (state_29891[(10)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(14),inst_29866);
} else {
if((state_val_29892 === (2))){
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(4),results);
} else {
if((state_val_29892 === (19))){
var state_29891__$1 = state_29891;
var statearr_29904_29968 = state_29891__$1;
(statearr_29904_29968[(2)] = null);

(statearr_29904_29968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (11))){
var inst_29866 = (state_29891[(2)]);
var state_29891__$1 = (function (){var statearr_29905 = state_29891;
(statearr_29905[(10)] = inst_29866);

return statearr_29905;
})();
var statearr_29906_29969 = state_29891__$1;
(statearr_29906_29969[(2)] = null);

(statearr_29906_29969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (9))){
var state_29891__$1 = state_29891;
var statearr_29907_29970 = state_29891__$1;
(statearr_29907_29970[(2)] = null);

(statearr_29907_29970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (5))){
var state_29891__$1 = state_29891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29908_29971 = state_29891__$1;
(statearr_29908_29971[(1)] = (8));

} else {
var statearr_29909_29972 = state_29891__$1;
(statearr_29909_29972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (14))){
var inst_29869 = (state_29891[(8)]);
var inst_29871 = (state_29891[(11)]);
var inst_29869__$1 = (state_29891[(2)]);
var inst_29870 = (inst_29869__$1 == null);
var inst_29871__$1 = cljs.core.not.call(null,inst_29870);
var state_29891__$1 = (function (){var statearr_29910 = state_29891;
(statearr_29910[(8)] = inst_29869__$1);

(statearr_29910[(11)] = inst_29871__$1);

return statearr_29910;
})();
if(inst_29871__$1){
var statearr_29911_29973 = state_29891__$1;
(statearr_29911_29973[(1)] = (15));

} else {
var statearr_29912_29974 = state_29891__$1;
(statearr_29912_29974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (16))){
var inst_29871 = (state_29891[(11)]);
var state_29891__$1 = state_29891;
var statearr_29913_29975 = state_29891__$1;
(statearr_29913_29975[(2)] = inst_29871);

(statearr_29913_29975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (10))){
var inst_29863 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29914_29976 = state_29891__$1;
(statearr_29914_29976[(2)] = inst_29863);

(statearr_29914_29976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (18))){
var inst_29874 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29915_29977 = state_29891__$1;
(statearr_29915_29977[(2)] = inst_29874);

(statearr_29915_29977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (8))){
var inst_29860 = cljs.core.async.close_BANG_.call(null,to);
var state_29891__$1 = state_29891;
var statearr_29916_29978 = state_29891__$1;
(statearr_29916_29978[(2)] = inst_29860);

(statearr_29916_29978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto__,jobs,results,process,async))
;
return ((function (switch__29254__auto__,c__29366__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_29920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__);

(statearr_29920[(1)] = (1));

return statearr_29920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1 = (function (state_29891){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_29891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object)){
var ex__29258__auto__ = e29921;
var statearr_29922_29979 = state_29891;
(statearr_29922_29979[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29980 = state_29891;
state_29891 = G__29980;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__,jobs,results,process,async))
})();
var state__29368__auto__ = (function (){var statearr_29923 = f__29367__auto__.call(null);
(statearr_29923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__,jobs,results,process,async))
);

return c__29366__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29981 = [];
var len__26207__auto___29984 = arguments.length;
var i__26208__auto___29985 = (0);
while(true){
if((i__26208__auto___29985 < len__26207__auto___29984)){
args29981.push((arguments[i__26208__auto___29985]));

var G__29986 = (i__26208__auto___29985 + (1));
i__26208__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var G__29983 = args29981.length;
switch (G__29983) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29981.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29988 = [];
var len__26207__auto___29991 = arguments.length;
var i__26208__auto___29992 = (0);
while(true){
if((i__26208__auto___29992 < len__26207__auto___29991)){
args29988.push((arguments[i__26208__auto___29992]));

var G__29993 = (i__26208__auto___29992 + (1));
i__26208__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29995 = [];
var len__26207__auto___30048 = arguments.length;
var i__26208__auto___30049 = (0);
while(true){
if((i__26208__auto___30049 < len__26207__auto___30048)){
args29995.push((arguments[i__26208__auto___30049]));

var G__30050 = (i__26208__auto___30049 + (1));
i__26208__auto___30049 = G__30050;
continue;
} else {
}
break;
}

var G__29997 = args29995.length;
switch (G__29997) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29995.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29366__auto___30052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___30052,tc,fc){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___30052,tc,fc){
return (function (state_30023){
var state_val_30024 = (state_30023[(1)]);
if((state_val_30024 === (7))){
var inst_30019 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
var statearr_30025_30053 = state_30023__$1;
(statearr_30025_30053[(2)] = inst_30019);

(statearr_30025_30053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (1))){
var state_30023__$1 = state_30023;
var statearr_30026_30054 = state_30023__$1;
(statearr_30026_30054[(2)] = null);

(statearr_30026_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (4))){
var inst_30000 = (state_30023[(7)]);
var inst_30000__$1 = (state_30023[(2)]);
var inst_30001 = (inst_30000__$1 == null);
var state_30023__$1 = (function (){var statearr_30027 = state_30023;
(statearr_30027[(7)] = inst_30000__$1);

return statearr_30027;
})();
if(cljs.core.truth_(inst_30001)){
var statearr_30028_30055 = state_30023__$1;
(statearr_30028_30055[(1)] = (5));

} else {
var statearr_30029_30056 = state_30023__$1;
(statearr_30029_30056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (13))){
var state_30023__$1 = state_30023;
var statearr_30030_30057 = state_30023__$1;
(statearr_30030_30057[(2)] = null);

(statearr_30030_30057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (6))){
var inst_30000 = (state_30023[(7)]);
var inst_30006 = p.call(null,inst_30000);
var state_30023__$1 = state_30023;
if(cljs.core.truth_(inst_30006)){
var statearr_30031_30058 = state_30023__$1;
(statearr_30031_30058[(1)] = (9));

} else {
var statearr_30032_30059 = state_30023__$1;
(statearr_30032_30059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (3))){
var inst_30021 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30023__$1,inst_30021);
} else {
if((state_val_30024 === (12))){
var state_30023__$1 = state_30023;
var statearr_30033_30060 = state_30023__$1;
(statearr_30033_30060[(2)] = null);

(statearr_30033_30060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (2))){
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,(4),ch);
} else {
if((state_val_30024 === (11))){
var inst_30000 = (state_30023[(7)]);
var inst_30010 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30023__$1,(8),inst_30010,inst_30000);
} else {
if((state_val_30024 === (9))){
var state_30023__$1 = state_30023;
var statearr_30034_30061 = state_30023__$1;
(statearr_30034_30061[(2)] = tc);

(statearr_30034_30061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (5))){
var inst_30003 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30004 = cljs.core.async.close_BANG_.call(null,fc);
var state_30023__$1 = (function (){var statearr_30035 = state_30023;
(statearr_30035[(8)] = inst_30003);

return statearr_30035;
})();
var statearr_30036_30062 = state_30023__$1;
(statearr_30036_30062[(2)] = inst_30004);

(statearr_30036_30062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (14))){
var inst_30017 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
var statearr_30037_30063 = state_30023__$1;
(statearr_30037_30063[(2)] = inst_30017);

(statearr_30037_30063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (10))){
var state_30023__$1 = state_30023;
var statearr_30038_30064 = state_30023__$1;
(statearr_30038_30064[(2)] = fc);

(statearr_30038_30064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30024 === (8))){
var inst_30012 = (state_30023[(2)]);
var state_30023__$1 = state_30023;
if(cljs.core.truth_(inst_30012)){
var statearr_30039_30065 = state_30023__$1;
(statearr_30039_30065[(1)] = (12));

} else {
var statearr_30040_30066 = state_30023__$1;
(statearr_30040_30066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___30052,tc,fc))
;
return ((function (switch__29254__auto__,c__29366__auto___30052,tc,fc){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_30044 = [null,null,null,null,null,null,null,null,null];
(statearr_30044[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_30044[(1)] = (1));

return statearr_30044;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_30023){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_30023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e30045){if((e30045 instanceof Object)){
var ex__29258__auto__ = e30045;
var statearr_30046_30067 = state_30023;
(statearr_30046_30067[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30068 = state_30023;
state_30023 = G__30068;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_30023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_30023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___30052,tc,fc))
})();
var state__29368__auto__ = (function (){var statearr_30047 = f__29367__auto__.call(null);
(statearr_30047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___30052);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___30052,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__){
return (function (state_30132){
var state_val_30133 = (state_30132[(1)]);
if((state_val_30133 === (7))){
var inst_30128 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30134_30155 = state_30132__$1;
(statearr_30134_30155[(2)] = inst_30128);

(statearr_30134_30155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (1))){
var inst_30112 = init;
var state_30132__$1 = (function (){var statearr_30135 = state_30132;
(statearr_30135[(7)] = inst_30112);

return statearr_30135;
})();
var statearr_30136_30156 = state_30132__$1;
(statearr_30136_30156[(2)] = null);

(statearr_30136_30156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (4))){
var inst_30115 = (state_30132[(8)]);
var inst_30115__$1 = (state_30132[(2)]);
var inst_30116 = (inst_30115__$1 == null);
var state_30132__$1 = (function (){var statearr_30137 = state_30132;
(statearr_30137[(8)] = inst_30115__$1);

return statearr_30137;
})();
if(cljs.core.truth_(inst_30116)){
var statearr_30138_30157 = state_30132__$1;
(statearr_30138_30157[(1)] = (5));

} else {
var statearr_30139_30158 = state_30132__$1;
(statearr_30139_30158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (6))){
var inst_30119 = (state_30132[(9)]);
var inst_30112 = (state_30132[(7)]);
var inst_30115 = (state_30132[(8)]);
var inst_30119__$1 = f.call(null,inst_30112,inst_30115);
var inst_30120 = cljs.core.reduced_QMARK_.call(null,inst_30119__$1);
var state_30132__$1 = (function (){var statearr_30140 = state_30132;
(statearr_30140[(9)] = inst_30119__$1);

return statearr_30140;
})();
if(inst_30120){
var statearr_30141_30159 = state_30132__$1;
(statearr_30141_30159[(1)] = (8));

} else {
var statearr_30142_30160 = state_30132__$1;
(statearr_30142_30160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (3))){
var inst_30130 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30132__$1,inst_30130);
} else {
if((state_val_30133 === (2))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30132__$1,(4),ch);
} else {
if((state_val_30133 === (9))){
var inst_30119 = (state_30132[(9)]);
var inst_30112 = inst_30119;
var state_30132__$1 = (function (){var statearr_30143 = state_30132;
(statearr_30143[(7)] = inst_30112);

return statearr_30143;
})();
var statearr_30144_30161 = state_30132__$1;
(statearr_30144_30161[(2)] = null);

(statearr_30144_30161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (5))){
var inst_30112 = (state_30132[(7)]);
var state_30132__$1 = state_30132;
var statearr_30145_30162 = state_30132__$1;
(statearr_30145_30162[(2)] = inst_30112);

(statearr_30145_30162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (10))){
var inst_30126 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30146_30163 = state_30132__$1;
(statearr_30146_30163[(2)] = inst_30126);

(statearr_30146_30163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (8))){
var inst_30119 = (state_30132[(9)]);
var inst_30122 = cljs.core.deref.call(null,inst_30119);
var state_30132__$1 = state_30132;
var statearr_30147_30164 = state_30132__$1;
(statearr_30147_30164[(2)] = inst_30122);

(statearr_30147_30164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto__))
;
return ((function (switch__29254__auto__,c__29366__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29255__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29255__auto____0 = (function (){
var statearr_30151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30151[(0)] = cljs$core$async$reduce_$_state_machine__29255__auto__);

(statearr_30151[(1)] = (1));

return statearr_30151;
});
var cljs$core$async$reduce_$_state_machine__29255__auto____1 = (function (state_30132){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_30132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e30152){if((e30152 instanceof Object)){
var ex__29258__auto__ = e30152;
var statearr_30153_30165 = state_30132;
(statearr_30153_30165[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30166 = state_30132;
state_30132 = G__30166;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29255__auto__ = function(state_30132){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29255__auto____1.call(this,state_30132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29255__auto____0;
cljs$core$async$reduce_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29255__auto____1;
return cljs$core$async$reduce_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__))
})();
var state__29368__auto__ = (function (){var statearr_30154 = f__29367__auto__.call(null);
(statearr_30154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_30154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__))
);

return c__29366__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30167 = [];
var len__26207__auto___30219 = arguments.length;
var i__26208__auto___30220 = (0);
while(true){
if((i__26208__auto___30220 < len__26207__auto___30219)){
args30167.push((arguments[i__26208__auto___30220]));

var G__30221 = (i__26208__auto___30220 + (1));
i__26208__auto___30220 = G__30221;
continue;
} else {
}
break;
}

var G__30169 = args30167.length;
switch (G__30169) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30167.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__){
return (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30176 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30196_30223 = state_30194__$1;
(statearr_30196_30223[(2)] = inst_30176);

(statearr_30196_30223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var inst_30170 = cljs.core.seq.call(null,coll);
var inst_30171 = inst_30170;
var state_30194__$1 = (function (){var statearr_30197 = state_30194;
(statearr_30197[(7)] = inst_30171);

return statearr_30197;
})();
var statearr_30198_30224 = state_30194__$1;
(statearr_30198_30224[(2)] = null);

(statearr_30198_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30171 = (state_30194[(7)]);
var inst_30174 = cljs.core.first.call(null,inst_30171);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(7),ch,inst_30174);
} else {
if((state_val_30195 === (13))){
var inst_30188 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30199_30225 = state_30194__$1;
(statearr_30199_30225[(2)] = inst_30188);

(statearr_30199_30225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30179 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30179)){
var statearr_30200_30226 = state_30194__$1;
(statearr_30200_30226[(1)] = (8));

} else {
var statearr_30201_30227 = state_30194__$1;
(statearr_30201_30227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (12))){
var state_30194__$1 = state_30194;
var statearr_30202_30228 = state_30194__$1;
(statearr_30202_30228[(2)] = null);

(statearr_30202_30228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (2))){
var inst_30171 = (state_30194[(7)]);
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30171)){
var statearr_30203_30229 = state_30194__$1;
(statearr_30203_30229[(1)] = (4));

} else {
var statearr_30204_30230 = state_30194__$1;
(statearr_30204_30230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (11))){
var inst_30185 = cljs.core.async.close_BANG_.call(null,ch);
var state_30194__$1 = state_30194;
var statearr_30205_30231 = state_30194__$1;
(statearr_30205_30231[(2)] = inst_30185);

(statearr_30205_30231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (9))){
var state_30194__$1 = state_30194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30206_30232 = state_30194__$1;
(statearr_30206_30232[(1)] = (11));

} else {
var statearr_30207_30233 = state_30194__$1;
(statearr_30207_30233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (5))){
var inst_30171 = (state_30194[(7)]);
var state_30194__$1 = state_30194;
var statearr_30208_30234 = state_30194__$1;
(statearr_30208_30234[(2)] = inst_30171);

(statearr_30208_30234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (10))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30209_30235 = state_30194__$1;
(statearr_30209_30235[(2)] = inst_30190);

(statearr_30209_30235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30171 = (state_30194[(7)]);
var inst_30181 = cljs.core.next.call(null,inst_30171);
var inst_30171__$1 = inst_30181;
var state_30194__$1 = (function (){var statearr_30210 = state_30194;
(statearr_30210[(7)] = inst_30171__$1);

return statearr_30210;
})();
var statearr_30211_30236 = state_30194__$1;
(statearr_30211_30236[(2)] = null);

(statearr_30211_30236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto__))
;
return ((function (switch__29254__auto__,c__29366__auto__){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_30215 = [null,null,null,null,null,null,null,null];
(statearr_30215[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_30215[(1)] = (1));

return statearr_30215;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_30194){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e30216){if((e30216 instanceof Object)){
var ex__29258__auto__ = e30216;
var statearr_30217_30237 = state_30194;
(statearr_30217_30237[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30238 = state_30194;
state_30194 = G__30238;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__))
})();
var state__29368__auto__ = (function (){var statearr_30218 = f__29367__auto__.call(null);
(statearr_30218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_30218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__))
);

return c__29366__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25795__auto__ = (((_ == null))?null:_);
var m__25796__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,_);
} else {
var m__25796__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25796__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,ch);
} else {
var m__25796__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m);
} else {
var m__25796__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30464 = (function (mult,ch,cs,meta30465){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30465 = meta30465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30466,meta30465__$1){
var self__ = this;
var _30466__$1 = this;
return (new cljs.core.async.t_cljs$core$async30464(self__.mult,self__.ch,self__.cs,meta30465__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30466){
var self__ = this;
var _30466__$1 = this;
return self__.meta30465;
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30465","meta30465",-774264074,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30464";

cljs.core.async.t_cljs$core$async30464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async30464");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30464 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30464(mult__$1,ch__$1,cs__$1,meta30465){
return (new cljs.core.async.t_cljs$core$async30464(mult__$1,ch__$1,cs__$1,meta30465));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30464(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29366__auto___30689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___30689,cs,m,dchan,dctr,done){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___30689,cs,m,dchan,dctr,done){
return (function (state_30601){
var state_val_30602 = (state_30601[(1)]);
if((state_val_30602 === (7))){
var inst_30597 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30603_30690 = state_30601__$1;
(statearr_30603_30690[(2)] = inst_30597);

(statearr_30603_30690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (20))){
var inst_30500 = (state_30601[(7)]);
var inst_30512 = cljs.core.first.call(null,inst_30500);
var inst_30513 = cljs.core.nth.call(null,inst_30512,(0),null);
var inst_30514 = cljs.core.nth.call(null,inst_30512,(1),null);
var state_30601__$1 = (function (){var statearr_30604 = state_30601;
(statearr_30604[(8)] = inst_30513);

return statearr_30604;
})();
if(cljs.core.truth_(inst_30514)){
var statearr_30605_30691 = state_30601__$1;
(statearr_30605_30691[(1)] = (22));

} else {
var statearr_30606_30692 = state_30601__$1;
(statearr_30606_30692[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (27))){
var inst_30544 = (state_30601[(9)]);
var inst_30542 = (state_30601[(10)]);
var inst_30549 = (state_30601[(11)]);
var inst_30469 = (state_30601[(12)]);
var inst_30549__$1 = cljs.core._nth.call(null,inst_30542,inst_30544);
var inst_30550 = cljs.core.async.put_BANG_.call(null,inst_30549__$1,inst_30469,done);
var state_30601__$1 = (function (){var statearr_30607 = state_30601;
(statearr_30607[(11)] = inst_30549__$1);

return statearr_30607;
})();
if(cljs.core.truth_(inst_30550)){
var statearr_30608_30693 = state_30601__$1;
(statearr_30608_30693[(1)] = (30));

} else {
var statearr_30609_30694 = state_30601__$1;
(statearr_30609_30694[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (1))){
var state_30601__$1 = state_30601;
var statearr_30610_30695 = state_30601__$1;
(statearr_30610_30695[(2)] = null);

(statearr_30610_30695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (24))){
var inst_30500 = (state_30601[(7)]);
var inst_30519 = (state_30601[(2)]);
var inst_30520 = cljs.core.next.call(null,inst_30500);
var inst_30478 = inst_30520;
var inst_30479 = null;
var inst_30480 = (0);
var inst_30481 = (0);
var state_30601__$1 = (function (){var statearr_30611 = state_30601;
(statearr_30611[(13)] = inst_30479);

(statearr_30611[(14)] = inst_30478);

(statearr_30611[(15)] = inst_30480);

(statearr_30611[(16)] = inst_30519);

(statearr_30611[(17)] = inst_30481);

return statearr_30611;
})();
var statearr_30612_30696 = state_30601__$1;
(statearr_30612_30696[(2)] = null);

(statearr_30612_30696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (39))){
var state_30601__$1 = state_30601;
var statearr_30616_30697 = state_30601__$1;
(statearr_30616_30697[(2)] = null);

(statearr_30616_30697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (4))){
var inst_30469 = (state_30601[(12)]);
var inst_30469__$1 = (state_30601[(2)]);
var inst_30470 = (inst_30469__$1 == null);
var state_30601__$1 = (function (){var statearr_30617 = state_30601;
(statearr_30617[(12)] = inst_30469__$1);

return statearr_30617;
})();
if(cljs.core.truth_(inst_30470)){
var statearr_30618_30698 = state_30601__$1;
(statearr_30618_30698[(1)] = (5));

} else {
var statearr_30619_30699 = state_30601__$1;
(statearr_30619_30699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (15))){
var inst_30479 = (state_30601[(13)]);
var inst_30478 = (state_30601[(14)]);
var inst_30480 = (state_30601[(15)]);
var inst_30481 = (state_30601[(17)]);
var inst_30496 = (state_30601[(2)]);
var inst_30497 = (inst_30481 + (1));
var tmp30613 = inst_30479;
var tmp30614 = inst_30478;
var tmp30615 = inst_30480;
var inst_30478__$1 = tmp30614;
var inst_30479__$1 = tmp30613;
var inst_30480__$1 = tmp30615;
var inst_30481__$1 = inst_30497;
var state_30601__$1 = (function (){var statearr_30620 = state_30601;
(statearr_30620[(13)] = inst_30479__$1);

(statearr_30620[(14)] = inst_30478__$1);

(statearr_30620[(15)] = inst_30480__$1);

(statearr_30620[(17)] = inst_30481__$1);

(statearr_30620[(18)] = inst_30496);

return statearr_30620;
})();
var statearr_30621_30700 = state_30601__$1;
(statearr_30621_30700[(2)] = null);

(statearr_30621_30700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (21))){
var inst_30523 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30625_30701 = state_30601__$1;
(statearr_30625_30701[(2)] = inst_30523);

(statearr_30625_30701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (31))){
var inst_30549 = (state_30601[(11)]);
var inst_30553 = done.call(null,null);
var inst_30554 = cljs.core.async.untap_STAR_.call(null,m,inst_30549);
var state_30601__$1 = (function (){var statearr_30626 = state_30601;
(statearr_30626[(19)] = inst_30553);

return statearr_30626;
})();
var statearr_30627_30702 = state_30601__$1;
(statearr_30627_30702[(2)] = inst_30554);

(statearr_30627_30702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (32))){
var inst_30544 = (state_30601[(9)]);
var inst_30542 = (state_30601[(10)]);
var inst_30543 = (state_30601[(20)]);
var inst_30541 = (state_30601[(21)]);
var inst_30556 = (state_30601[(2)]);
var inst_30557 = (inst_30544 + (1));
var tmp30622 = inst_30542;
var tmp30623 = inst_30543;
var tmp30624 = inst_30541;
var inst_30541__$1 = tmp30624;
var inst_30542__$1 = tmp30622;
var inst_30543__$1 = tmp30623;
var inst_30544__$1 = inst_30557;
var state_30601__$1 = (function (){var statearr_30628 = state_30601;
(statearr_30628[(9)] = inst_30544__$1);

(statearr_30628[(10)] = inst_30542__$1);

(statearr_30628[(22)] = inst_30556);

(statearr_30628[(20)] = inst_30543__$1);

(statearr_30628[(21)] = inst_30541__$1);

return statearr_30628;
})();
var statearr_30629_30703 = state_30601__$1;
(statearr_30629_30703[(2)] = null);

(statearr_30629_30703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (40))){
var inst_30569 = (state_30601[(23)]);
var inst_30573 = done.call(null,null);
var inst_30574 = cljs.core.async.untap_STAR_.call(null,m,inst_30569);
var state_30601__$1 = (function (){var statearr_30630 = state_30601;
(statearr_30630[(24)] = inst_30573);

return statearr_30630;
})();
var statearr_30631_30704 = state_30601__$1;
(statearr_30631_30704[(2)] = inst_30574);

(statearr_30631_30704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (33))){
var inst_30560 = (state_30601[(25)]);
var inst_30562 = cljs.core.chunked_seq_QMARK_.call(null,inst_30560);
var state_30601__$1 = state_30601;
if(inst_30562){
var statearr_30632_30705 = state_30601__$1;
(statearr_30632_30705[(1)] = (36));

} else {
var statearr_30633_30706 = state_30601__$1;
(statearr_30633_30706[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (13))){
var inst_30490 = (state_30601[(26)]);
var inst_30493 = cljs.core.async.close_BANG_.call(null,inst_30490);
var state_30601__$1 = state_30601;
var statearr_30634_30707 = state_30601__$1;
(statearr_30634_30707[(2)] = inst_30493);

(statearr_30634_30707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (22))){
var inst_30513 = (state_30601[(8)]);
var inst_30516 = cljs.core.async.close_BANG_.call(null,inst_30513);
var state_30601__$1 = state_30601;
var statearr_30635_30708 = state_30601__$1;
(statearr_30635_30708[(2)] = inst_30516);

(statearr_30635_30708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (36))){
var inst_30560 = (state_30601[(25)]);
var inst_30564 = cljs.core.chunk_first.call(null,inst_30560);
var inst_30565 = cljs.core.chunk_rest.call(null,inst_30560);
var inst_30566 = cljs.core.count.call(null,inst_30564);
var inst_30541 = inst_30565;
var inst_30542 = inst_30564;
var inst_30543 = inst_30566;
var inst_30544 = (0);
var state_30601__$1 = (function (){var statearr_30636 = state_30601;
(statearr_30636[(9)] = inst_30544);

(statearr_30636[(10)] = inst_30542);

(statearr_30636[(20)] = inst_30543);

(statearr_30636[(21)] = inst_30541);

return statearr_30636;
})();
var statearr_30637_30709 = state_30601__$1;
(statearr_30637_30709[(2)] = null);

(statearr_30637_30709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (41))){
var inst_30560 = (state_30601[(25)]);
var inst_30576 = (state_30601[(2)]);
var inst_30577 = cljs.core.next.call(null,inst_30560);
var inst_30541 = inst_30577;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30601__$1 = (function (){var statearr_30638 = state_30601;
(statearr_30638[(9)] = inst_30544);

(statearr_30638[(10)] = inst_30542);

(statearr_30638[(27)] = inst_30576);

(statearr_30638[(20)] = inst_30543);

(statearr_30638[(21)] = inst_30541);

return statearr_30638;
})();
var statearr_30639_30710 = state_30601__$1;
(statearr_30639_30710[(2)] = null);

(statearr_30639_30710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (43))){
var state_30601__$1 = state_30601;
var statearr_30640_30711 = state_30601__$1;
(statearr_30640_30711[(2)] = null);

(statearr_30640_30711[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (29))){
var inst_30585 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30641_30712 = state_30601__$1;
(statearr_30641_30712[(2)] = inst_30585);

(statearr_30641_30712[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (44))){
var inst_30594 = (state_30601[(2)]);
var state_30601__$1 = (function (){var statearr_30642 = state_30601;
(statearr_30642[(28)] = inst_30594);

return statearr_30642;
})();
var statearr_30643_30713 = state_30601__$1;
(statearr_30643_30713[(2)] = null);

(statearr_30643_30713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (6))){
var inst_30533 = (state_30601[(29)]);
var inst_30532 = cljs.core.deref.call(null,cs);
var inst_30533__$1 = cljs.core.keys.call(null,inst_30532);
var inst_30534 = cljs.core.count.call(null,inst_30533__$1);
var inst_30535 = cljs.core.reset_BANG_.call(null,dctr,inst_30534);
var inst_30540 = cljs.core.seq.call(null,inst_30533__$1);
var inst_30541 = inst_30540;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30601__$1 = (function (){var statearr_30644 = state_30601;
(statearr_30644[(30)] = inst_30535);

(statearr_30644[(9)] = inst_30544);

(statearr_30644[(10)] = inst_30542);

(statearr_30644[(29)] = inst_30533__$1);

(statearr_30644[(20)] = inst_30543);

(statearr_30644[(21)] = inst_30541);

return statearr_30644;
})();
var statearr_30645_30714 = state_30601__$1;
(statearr_30645_30714[(2)] = null);

(statearr_30645_30714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (28))){
var inst_30560 = (state_30601[(25)]);
var inst_30541 = (state_30601[(21)]);
var inst_30560__$1 = cljs.core.seq.call(null,inst_30541);
var state_30601__$1 = (function (){var statearr_30646 = state_30601;
(statearr_30646[(25)] = inst_30560__$1);

return statearr_30646;
})();
if(inst_30560__$1){
var statearr_30647_30715 = state_30601__$1;
(statearr_30647_30715[(1)] = (33));

} else {
var statearr_30648_30716 = state_30601__$1;
(statearr_30648_30716[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (25))){
var inst_30544 = (state_30601[(9)]);
var inst_30543 = (state_30601[(20)]);
var inst_30546 = (inst_30544 < inst_30543);
var inst_30547 = inst_30546;
var state_30601__$1 = state_30601;
if(cljs.core.truth_(inst_30547)){
var statearr_30649_30717 = state_30601__$1;
(statearr_30649_30717[(1)] = (27));

} else {
var statearr_30650_30718 = state_30601__$1;
(statearr_30650_30718[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (34))){
var state_30601__$1 = state_30601;
var statearr_30651_30719 = state_30601__$1;
(statearr_30651_30719[(2)] = null);

(statearr_30651_30719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (17))){
var state_30601__$1 = state_30601;
var statearr_30652_30720 = state_30601__$1;
(statearr_30652_30720[(2)] = null);

(statearr_30652_30720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (3))){
var inst_30599 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30601__$1,inst_30599);
} else {
if((state_val_30602 === (12))){
var inst_30528 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30653_30721 = state_30601__$1;
(statearr_30653_30721[(2)] = inst_30528);

(statearr_30653_30721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (2))){
var state_30601__$1 = state_30601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30601__$1,(4),ch);
} else {
if((state_val_30602 === (23))){
var state_30601__$1 = state_30601;
var statearr_30654_30722 = state_30601__$1;
(statearr_30654_30722[(2)] = null);

(statearr_30654_30722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (35))){
var inst_30583 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30655_30723 = state_30601__$1;
(statearr_30655_30723[(2)] = inst_30583);

(statearr_30655_30723[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (19))){
var inst_30500 = (state_30601[(7)]);
var inst_30504 = cljs.core.chunk_first.call(null,inst_30500);
var inst_30505 = cljs.core.chunk_rest.call(null,inst_30500);
var inst_30506 = cljs.core.count.call(null,inst_30504);
var inst_30478 = inst_30505;
var inst_30479 = inst_30504;
var inst_30480 = inst_30506;
var inst_30481 = (0);
var state_30601__$1 = (function (){var statearr_30656 = state_30601;
(statearr_30656[(13)] = inst_30479);

(statearr_30656[(14)] = inst_30478);

(statearr_30656[(15)] = inst_30480);

(statearr_30656[(17)] = inst_30481);

return statearr_30656;
})();
var statearr_30657_30724 = state_30601__$1;
(statearr_30657_30724[(2)] = null);

(statearr_30657_30724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (11))){
var inst_30478 = (state_30601[(14)]);
var inst_30500 = (state_30601[(7)]);
var inst_30500__$1 = cljs.core.seq.call(null,inst_30478);
var state_30601__$1 = (function (){var statearr_30658 = state_30601;
(statearr_30658[(7)] = inst_30500__$1);

return statearr_30658;
})();
if(inst_30500__$1){
var statearr_30659_30725 = state_30601__$1;
(statearr_30659_30725[(1)] = (16));

} else {
var statearr_30660_30726 = state_30601__$1;
(statearr_30660_30726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (9))){
var inst_30530 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30661_30727 = state_30601__$1;
(statearr_30661_30727[(2)] = inst_30530);

(statearr_30661_30727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (5))){
var inst_30476 = cljs.core.deref.call(null,cs);
var inst_30477 = cljs.core.seq.call(null,inst_30476);
var inst_30478 = inst_30477;
var inst_30479 = null;
var inst_30480 = (0);
var inst_30481 = (0);
var state_30601__$1 = (function (){var statearr_30662 = state_30601;
(statearr_30662[(13)] = inst_30479);

(statearr_30662[(14)] = inst_30478);

(statearr_30662[(15)] = inst_30480);

(statearr_30662[(17)] = inst_30481);

return statearr_30662;
})();
var statearr_30663_30728 = state_30601__$1;
(statearr_30663_30728[(2)] = null);

(statearr_30663_30728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (14))){
var state_30601__$1 = state_30601;
var statearr_30664_30729 = state_30601__$1;
(statearr_30664_30729[(2)] = null);

(statearr_30664_30729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (45))){
var inst_30591 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30665_30730 = state_30601__$1;
(statearr_30665_30730[(2)] = inst_30591);

(statearr_30665_30730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (26))){
var inst_30533 = (state_30601[(29)]);
var inst_30587 = (state_30601[(2)]);
var inst_30588 = cljs.core.seq.call(null,inst_30533);
var state_30601__$1 = (function (){var statearr_30666 = state_30601;
(statearr_30666[(31)] = inst_30587);

return statearr_30666;
})();
if(inst_30588){
var statearr_30667_30731 = state_30601__$1;
(statearr_30667_30731[(1)] = (42));

} else {
var statearr_30668_30732 = state_30601__$1;
(statearr_30668_30732[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (16))){
var inst_30500 = (state_30601[(7)]);
var inst_30502 = cljs.core.chunked_seq_QMARK_.call(null,inst_30500);
var state_30601__$1 = state_30601;
if(inst_30502){
var statearr_30669_30733 = state_30601__$1;
(statearr_30669_30733[(1)] = (19));

} else {
var statearr_30670_30734 = state_30601__$1;
(statearr_30670_30734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (38))){
var inst_30580 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30671_30735 = state_30601__$1;
(statearr_30671_30735[(2)] = inst_30580);

(statearr_30671_30735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (30))){
var state_30601__$1 = state_30601;
var statearr_30672_30736 = state_30601__$1;
(statearr_30672_30736[(2)] = null);

(statearr_30672_30736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (10))){
var inst_30479 = (state_30601[(13)]);
var inst_30481 = (state_30601[(17)]);
var inst_30489 = cljs.core._nth.call(null,inst_30479,inst_30481);
var inst_30490 = cljs.core.nth.call(null,inst_30489,(0),null);
var inst_30491 = cljs.core.nth.call(null,inst_30489,(1),null);
var state_30601__$1 = (function (){var statearr_30673 = state_30601;
(statearr_30673[(26)] = inst_30490);

return statearr_30673;
})();
if(cljs.core.truth_(inst_30491)){
var statearr_30674_30737 = state_30601__$1;
(statearr_30674_30737[(1)] = (13));

} else {
var statearr_30675_30738 = state_30601__$1;
(statearr_30675_30738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (18))){
var inst_30526 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30676_30739 = state_30601__$1;
(statearr_30676_30739[(2)] = inst_30526);

(statearr_30676_30739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (42))){
var state_30601__$1 = state_30601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30601__$1,(45),dchan);
} else {
if((state_val_30602 === (37))){
var inst_30569 = (state_30601[(23)]);
var inst_30560 = (state_30601[(25)]);
var inst_30469 = (state_30601[(12)]);
var inst_30569__$1 = cljs.core.first.call(null,inst_30560);
var inst_30570 = cljs.core.async.put_BANG_.call(null,inst_30569__$1,inst_30469,done);
var state_30601__$1 = (function (){var statearr_30677 = state_30601;
(statearr_30677[(23)] = inst_30569__$1);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30678_30740 = state_30601__$1;
(statearr_30678_30740[(1)] = (39));

} else {
var statearr_30679_30741 = state_30601__$1;
(statearr_30679_30741[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (8))){
var inst_30480 = (state_30601[(15)]);
var inst_30481 = (state_30601[(17)]);
var inst_30483 = (inst_30481 < inst_30480);
var inst_30484 = inst_30483;
var state_30601__$1 = state_30601;
if(cljs.core.truth_(inst_30484)){
var statearr_30680_30742 = state_30601__$1;
(statearr_30680_30742[(1)] = (10));

} else {
var statearr_30681_30743 = state_30601__$1;
(statearr_30681_30743[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___30689,cs,m,dchan,dctr,done))
;
return ((function (switch__29254__auto__,c__29366__auto___30689,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29255__auto__ = null;
var cljs$core$async$mult_$_state_machine__29255__auto____0 = (function (){
var statearr_30685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30685[(0)] = cljs$core$async$mult_$_state_machine__29255__auto__);

(statearr_30685[(1)] = (1));

return statearr_30685;
});
var cljs$core$async$mult_$_state_machine__29255__auto____1 = (function (state_30601){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_30601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e30686){if((e30686 instanceof Object)){
var ex__29258__auto__ = e30686;
var statearr_30687_30744 = state_30601;
(statearr_30687_30744[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30745 = state_30601;
state_30601 = G__30745;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29255__auto__ = function(state_30601){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29255__auto____1.call(this,state_30601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29255__auto____0;
cljs$core$async$mult_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29255__auto____1;
return cljs$core$async$mult_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___30689,cs,m,dchan,dctr,done))
})();
var state__29368__auto__ = (function (){var statearr_30688 = f__29367__auto__.call(null);
(statearr_30688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___30689);

return statearr_30688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___30689,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30746 = [];
var len__26207__auto___30749 = arguments.length;
var i__26208__auto___30750 = (0);
while(true){
if((i__26208__auto___30750 < len__26207__auto___30749)){
args30746.push((arguments[i__26208__auto___30750]));

var G__30751 = (i__26208__auto___30750 + (1));
i__26208__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var G__30748 = args30746.length;
switch (G__30748) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30746.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,ch);
} else {
var m__25796__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,ch);
} else {
var m__25796__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m);
} else {
var m__25796__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,state_map);
} else {
var m__25796__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25795__auto__ = (((m == null))?null:m);
var m__25796__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,m,mode);
} else {
var m__25796__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___30763 = arguments.length;
var i__26208__auto___30764 = (0);
while(true){
if((i__26208__auto___30764 < len__26207__auto___30763)){
args__26214__auto__.push((arguments[i__26208__auto___30764]));

var G__30765 = (i__26208__auto___30764 + (1));
i__26208__auto___30764 = G__30765;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((3) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26215__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30757){
var map__30758 = p__30757;
var map__30758__$1 = ((((!((map__30758 == null)))?((((map__30758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30758):map__30758);
var opts = map__30758__$1;
var statearr_30760_30766 = state;
(statearr_30760_30766[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30758,map__30758__$1,opts){
return (function (val){
var statearr_30761_30767 = state;
(statearr_30761_30767[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30758,map__30758__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30762_30768 = state;
(statearr_30762_30768[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30753){
var G__30754 = cljs.core.first.call(null,seq30753);
var seq30753__$1 = cljs.core.next.call(null,seq30753);
var G__30755 = cljs.core.first.call(null,seq30753__$1);
var seq30753__$2 = cljs.core.next.call(null,seq30753__$1);
var G__30756 = cljs.core.first.call(null,seq30753__$2);
var seq30753__$3 = cljs.core.next.call(null,seq30753__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30754,G__30755,G__30756,seq30753__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30934 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30935){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30935 = meta30935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30936,meta30935__$1){
var self__ = this;
var _30936__$1 = this;
return (new cljs.core.async.t_cljs$core$async30934(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30935__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30936){
var self__ = this;
var _30936__$1 = this;
return self__.meta30935;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30935","meta30935",1773945550,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30934";

cljs.core.async.t_cljs$core$async30934.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async30934");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30934 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30934(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30935){
return (new cljs.core.async.t_cljs$core$async30934(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30935));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30934(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29366__auto___31099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31036){
var state_val_31037 = (state_31036[(1)]);
if((state_val_31037 === (7))){
var inst_30952 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31038_31100 = state_31036__$1;
(statearr_31038_31100[(2)] = inst_30952);

(statearr_31038_31100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (20))){
var inst_30964 = (state_31036[(7)]);
var state_31036__$1 = state_31036;
var statearr_31039_31101 = state_31036__$1;
(statearr_31039_31101[(2)] = inst_30964);

(statearr_31039_31101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (27))){
var state_31036__$1 = state_31036;
var statearr_31040_31102 = state_31036__$1;
(statearr_31040_31102[(2)] = null);

(statearr_31040_31102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (1))){
var inst_30940 = (state_31036[(8)]);
var inst_30940__$1 = calc_state.call(null);
var inst_30942 = (inst_30940__$1 == null);
var inst_30943 = cljs.core.not.call(null,inst_30942);
var state_31036__$1 = (function (){var statearr_31041 = state_31036;
(statearr_31041[(8)] = inst_30940__$1);

return statearr_31041;
})();
if(inst_30943){
var statearr_31042_31103 = state_31036__$1;
(statearr_31042_31103[(1)] = (2));

} else {
var statearr_31043_31104 = state_31036__$1;
(statearr_31043_31104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (24))){
var inst_31010 = (state_31036[(9)]);
var inst_30996 = (state_31036[(10)]);
var inst_30987 = (state_31036[(11)]);
var inst_31010__$1 = inst_30987.call(null,inst_30996);
var state_31036__$1 = (function (){var statearr_31044 = state_31036;
(statearr_31044[(9)] = inst_31010__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_31010__$1)){
var statearr_31045_31105 = state_31036__$1;
(statearr_31045_31105[(1)] = (29));

} else {
var statearr_31046_31106 = state_31036__$1;
(statearr_31046_31106[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (4))){
var inst_30955 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_30955)){
var statearr_31047_31107 = state_31036__$1;
(statearr_31047_31107[(1)] = (8));

} else {
var statearr_31048_31108 = state_31036__$1;
(statearr_31048_31108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (15))){
var inst_30981 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_30981)){
var statearr_31049_31109 = state_31036__$1;
(statearr_31049_31109[(1)] = (19));

} else {
var statearr_31050_31110 = state_31036__$1;
(statearr_31050_31110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (21))){
var inst_30986 = (state_31036[(12)]);
var inst_30986__$1 = (state_31036[(2)]);
var inst_30987 = cljs.core.get.call(null,inst_30986__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30988 = cljs.core.get.call(null,inst_30986__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30989 = cljs.core.get.call(null,inst_30986__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31036__$1 = (function (){var statearr_31051 = state_31036;
(statearr_31051[(12)] = inst_30986__$1);

(statearr_31051[(11)] = inst_30987);

(statearr_31051[(13)] = inst_30988);

return statearr_31051;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31036__$1,(22),inst_30989);
} else {
if((state_val_31037 === (31))){
var inst_31018 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_31018)){
var statearr_31052_31111 = state_31036__$1;
(statearr_31052_31111[(1)] = (32));

} else {
var statearr_31053_31112 = state_31036__$1;
(statearr_31053_31112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (32))){
var inst_30995 = (state_31036[(14)]);
var state_31036__$1 = state_31036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31036__$1,(35),out,inst_30995);
} else {
if((state_val_31037 === (33))){
var inst_30986 = (state_31036[(12)]);
var inst_30964 = inst_30986;
var state_31036__$1 = (function (){var statearr_31054 = state_31036;
(statearr_31054[(7)] = inst_30964);

return statearr_31054;
})();
var statearr_31055_31113 = state_31036__$1;
(statearr_31055_31113[(2)] = null);

(statearr_31055_31113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (13))){
var inst_30964 = (state_31036[(7)]);
var inst_30971 = inst_30964.cljs$lang$protocol_mask$partition0$;
var inst_30972 = (inst_30971 & (64));
var inst_30973 = inst_30964.cljs$core$ISeq$;
var inst_30974 = (inst_30972) || (inst_30973);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_30974)){
var statearr_31056_31114 = state_31036__$1;
(statearr_31056_31114[(1)] = (16));

} else {
var statearr_31057_31115 = state_31036__$1;
(statearr_31057_31115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (22))){
var inst_30996 = (state_31036[(10)]);
var inst_30995 = (state_31036[(14)]);
var inst_30994 = (state_31036[(2)]);
var inst_30995__$1 = cljs.core.nth.call(null,inst_30994,(0),null);
var inst_30996__$1 = cljs.core.nth.call(null,inst_30994,(1),null);
var inst_30997 = (inst_30995__$1 == null);
var inst_30998 = cljs.core._EQ_.call(null,inst_30996__$1,change);
var inst_30999 = (inst_30997) || (inst_30998);
var state_31036__$1 = (function (){var statearr_31058 = state_31036;
(statearr_31058[(10)] = inst_30996__$1);

(statearr_31058[(14)] = inst_30995__$1);

return statearr_31058;
})();
if(cljs.core.truth_(inst_30999)){
var statearr_31059_31116 = state_31036__$1;
(statearr_31059_31116[(1)] = (23));

} else {
var statearr_31060_31117 = state_31036__$1;
(statearr_31060_31117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (36))){
var inst_30986 = (state_31036[(12)]);
var inst_30964 = inst_30986;
var state_31036__$1 = (function (){var statearr_31061 = state_31036;
(statearr_31061[(7)] = inst_30964);

return statearr_31061;
})();
var statearr_31062_31118 = state_31036__$1;
(statearr_31062_31118[(2)] = null);

(statearr_31062_31118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (29))){
var inst_31010 = (state_31036[(9)]);
var state_31036__$1 = state_31036;
var statearr_31063_31119 = state_31036__$1;
(statearr_31063_31119[(2)] = inst_31010);

(statearr_31063_31119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (6))){
var state_31036__$1 = state_31036;
var statearr_31064_31120 = state_31036__$1;
(statearr_31064_31120[(2)] = false);

(statearr_31064_31120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (28))){
var inst_31006 = (state_31036[(2)]);
var inst_31007 = calc_state.call(null);
var inst_30964 = inst_31007;
var state_31036__$1 = (function (){var statearr_31065 = state_31036;
(statearr_31065[(7)] = inst_30964);

(statearr_31065[(15)] = inst_31006);

return statearr_31065;
})();
var statearr_31066_31121 = state_31036__$1;
(statearr_31066_31121[(2)] = null);

(statearr_31066_31121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (25))){
var inst_31032 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31067_31122 = state_31036__$1;
(statearr_31067_31122[(2)] = inst_31032);

(statearr_31067_31122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (34))){
var inst_31030 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31068_31123 = state_31036__$1;
(statearr_31068_31123[(2)] = inst_31030);

(statearr_31068_31123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (17))){
var state_31036__$1 = state_31036;
var statearr_31069_31124 = state_31036__$1;
(statearr_31069_31124[(2)] = false);

(statearr_31069_31124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (3))){
var state_31036__$1 = state_31036;
var statearr_31070_31125 = state_31036__$1;
(statearr_31070_31125[(2)] = false);

(statearr_31070_31125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (12))){
var inst_31034 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31036__$1,inst_31034);
} else {
if((state_val_31037 === (2))){
var inst_30940 = (state_31036[(8)]);
var inst_30945 = inst_30940.cljs$lang$protocol_mask$partition0$;
var inst_30946 = (inst_30945 & (64));
var inst_30947 = inst_30940.cljs$core$ISeq$;
var inst_30948 = (inst_30946) || (inst_30947);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_30948)){
var statearr_31071_31126 = state_31036__$1;
(statearr_31071_31126[(1)] = (5));

} else {
var statearr_31072_31127 = state_31036__$1;
(statearr_31072_31127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (23))){
var inst_30995 = (state_31036[(14)]);
var inst_31001 = (inst_30995 == null);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_31001)){
var statearr_31073_31128 = state_31036__$1;
(statearr_31073_31128[(1)] = (26));

} else {
var statearr_31074_31129 = state_31036__$1;
(statearr_31074_31129[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (35))){
var inst_31021 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_31021)){
var statearr_31075_31130 = state_31036__$1;
(statearr_31075_31130[(1)] = (36));

} else {
var statearr_31076_31131 = state_31036__$1;
(statearr_31076_31131[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (19))){
var inst_30964 = (state_31036[(7)]);
var inst_30983 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30964);
var state_31036__$1 = state_31036;
var statearr_31077_31132 = state_31036__$1;
(statearr_31077_31132[(2)] = inst_30983);

(statearr_31077_31132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (11))){
var inst_30964 = (state_31036[(7)]);
var inst_30968 = (inst_30964 == null);
var inst_30969 = cljs.core.not.call(null,inst_30968);
var state_31036__$1 = state_31036;
if(inst_30969){
var statearr_31078_31133 = state_31036__$1;
(statearr_31078_31133[(1)] = (13));

} else {
var statearr_31079_31134 = state_31036__$1;
(statearr_31079_31134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (9))){
var inst_30940 = (state_31036[(8)]);
var state_31036__$1 = state_31036;
var statearr_31080_31135 = state_31036__$1;
(statearr_31080_31135[(2)] = inst_30940);

(statearr_31080_31135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (5))){
var state_31036__$1 = state_31036;
var statearr_31081_31136 = state_31036__$1;
(statearr_31081_31136[(2)] = true);

(statearr_31081_31136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (14))){
var state_31036__$1 = state_31036;
var statearr_31082_31137 = state_31036__$1;
(statearr_31082_31137[(2)] = false);

(statearr_31082_31137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (26))){
var inst_30996 = (state_31036[(10)]);
var inst_31003 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30996);
var state_31036__$1 = state_31036;
var statearr_31083_31138 = state_31036__$1;
(statearr_31083_31138[(2)] = inst_31003);

(statearr_31083_31138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (16))){
var state_31036__$1 = state_31036;
var statearr_31084_31139 = state_31036__$1;
(statearr_31084_31139[(2)] = true);

(statearr_31084_31139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (38))){
var inst_31026 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31085_31140 = state_31036__$1;
(statearr_31085_31140[(2)] = inst_31026);

(statearr_31085_31140[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (30))){
var inst_30996 = (state_31036[(10)]);
var inst_30987 = (state_31036[(11)]);
var inst_30988 = (state_31036[(13)]);
var inst_31013 = cljs.core.empty_QMARK_.call(null,inst_30987);
var inst_31014 = inst_30988.call(null,inst_30996);
var inst_31015 = cljs.core.not.call(null,inst_31014);
var inst_31016 = (inst_31013) && (inst_31015);
var state_31036__$1 = state_31036;
var statearr_31086_31141 = state_31036__$1;
(statearr_31086_31141[(2)] = inst_31016);

(statearr_31086_31141[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (10))){
var inst_30940 = (state_31036[(8)]);
var inst_30960 = (state_31036[(2)]);
var inst_30961 = cljs.core.get.call(null,inst_30960,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30962 = cljs.core.get.call(null,inst_30960,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30963 = cljs.core.get.call(null,inst_30960,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30964 = inst_30940;
var state_31036__$1 = (function (){var statearr_31087 = state_31036;
(statearr_31087[(16)] = inst_30962);

(statearr_31087[(17)] = inst_30963);

(statearr_31087[(7)] = inst_30964);

(statearr_31087[(18)] = inst_30961);

return statearr_31087;
})();
var statearr_31088_31142 = state_31036__$1;
(statearr_31088_31142[(2)] = null);

(statearr_31088_31142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (18))){
var inst_30978 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31089_31143 = state_31036__$1;
(statearr_31089_31143[(2)] = inst_30978);

(statearr_31089_31143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (37))){
var state_31036__$1 = state_31036;
var statearr_31090_31144 = state_31036__$1;
(statearr_31090_31144[(2)] = null);

(statearr_31090_31144[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31037 === (8))){
var inst_30940 = (state_31036[(8)]);
var inst_30957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30940);
var state_31036__$1 = state_31036;
var statearr_31091_31145 = state_31036__$1;
(statearr_31091_31145[(2)] = inst_30957);

(statearr_31091_31145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29254__auto__,c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29255__auto__ = null;
var cljs$core$async$mix_$_state_machine__29255__auto____0 = (function (){
var statearr_31095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31095[(0)] = cljs$core$async$mix_$_state_machine__29255__auto__);

(statearr_31095[(1)] = (1));

return statearr_31095;
});
var cljs$core$async$mix_$_state_machine__29255__auto____1 = (function (state_31036){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31096){if((e31096 instanceof Object)){
var ex__29258__auto__ = e31096;
var statearr_31097_31146 = state_31036;
(statearr_31097_31146[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31147 = state_31036;
state_31036 = G__31147;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29255__auto__ = function(state_31036){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29255__auto____1.call(this,state_31036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29255__auto____0;
cljs$core$async$mix_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29255__auto____1;
return cljs$core$async$mix_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29368__auto__ = (function (){var statearr_31098 = f__29367__auto__.call(null);
(statearr_31098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31099);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25795__auto__ = (((p == null))?null:p);
var m__25796__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25796__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25795__auto__ = (((p == null))?null:p);
var m__25796__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,p,v,ch);
} else {
var m__25796__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31148 = [];
var len__26207__auto___31151 = arguments.length;
var i__26208__auto___31152 = (0);
while(true){
if((i__26208__auto___31152 < len__26207__auto___31151)){
args31148.push((arguments[i__26208__auto___31152]));

var G__31153 = (i__26208__auto___31152 + (1));
i__26208__auto___31152 = G__31153;
continue;
} else {
}
break;
}

var G__31150 = args31148.length;
switch (G__31150) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31148.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25795__auto__ = (((p == null))?null:p);
var m__25796__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,p);
} else {
var m__25796__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25795__auto__ = (((p == null))?null:p);
var m__25796__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,p,v);
} else {
var m__25796__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31156 = [];
var len__26207__auto___31281 = arguments.length;
var i__26208__auto___31282 = (0);
while(true){
if((i__26208__auto___31282 < len__26207__auto___31281)){
args31156.push((arguments[i__26208__auto___31282]));

var G__31283 = (i__26208__auto___31282 + (1));
i__26208__auto___31282 = G__31283;
continue;
} else {
}
break;
}

var G__31158 = args31156.length;
switch (G__31158) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31156.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25132__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25132__auto__,mults){
return (function (p1__31155_SHARP_){
if(cljs.core.truth_(p1__31155_SHARP_.call(null,topic))){
return p1__31155_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31155_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25132__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31159 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31160){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31160 = meta31160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31161,meta31160__$1){
var self__ = this;
var _31161__$1 = this;
return (new cljs.core.async.t_cljs$core$async31159(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31160__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31161){
var self__ = this;
var _31161__$1 = this;
return self__.meta31160;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31160","meta31160",-212811456,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31159";

cljs.core.async.t_cljs$core$async31159.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async31159");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31159 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31160){
return (new cljs.core.async.t_cljs$core$async31159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31160));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31159(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29366__auto___31285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31285,mults,ensure_mult,p){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31285,mults,ensure_mult,p){
return (function (state_31233){
var state_val_31234 = (state_31233[(1)]);
if((state_val_31234 === (7))){
var inst_31229 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31235_31286 = state_31233__$1;
(statearr_31235_31286[(2)] = inst_31229);

(statearr_31235_31286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (20))){
var state_31233__$1 = state_31233;
var statearr_31236_31287 = state_31233__$1;
(statearr_31236_31287[(2)] = null);

(statearr_31236_31287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (1))){
var state_31233__$1 = state_31233;
var statearr_31237_31288 = state_31233__$1;
(statearr_31237_31288[(2)] = null);

(statearr_31237_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (24))){
var inst_31212 = (state_31233[(7)]);
var inst_31221 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31212);
var state_31233__$1 = state_31233;
var statearr_31238_31289 = state_31233__$1;
(statearr_31238_31289[(2)] = inst_31221);

(statearr_31238_31289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (4))){
var inst_31164 = (state_31233[(8)]);
var inst_31164__$1 = (state_31233[(2)]);
var inst_31165 = (inst_31164__$1 == null);
var state_31233__$1 = (function (){var statearr_31239 = state_31233;
(statearr_31239[(8)] = inst_31164__$1);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31165)){
var statearr_31240_31290 = state_31233__$1;
(statearr_31240_31290[(1)] = (5));

} else {
var statearr_31241_31291 = state_31233__$1;
(statearr_31241_31291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (15))){
var inst_31206 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31242_31292 = state_31233__$1;
(statearr_31242_31292[(2)] = inst_31206);

(statearr_31242_31292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (21))){
var inst_31226 = (state_31233[(2)]);
var state_31233__$1 = (function (){var statearr_31243 = state_31233;
(statearr_31243[(9)] = inst_31226);

return statearr_31243;
})();
var statearr_31244_31293 = state_31233__$1;
(statearr_31244_31293[(2)] = null);

(statearr_31244_31293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (13))){
var inst_31188 = (state_31233[(10)]);
var inst_31190 = cljs.core.chunked_seq_QMARK_.call(null,inst_31188);
var state_31233__$1 = state_31233;
if(inst_31190){
var statearr_31245_31294 = state_31233__$1;
(statearr_31245_31294[(1)] = (16));

} else {
var statearr_31246_31295 = state_31233__$1;
(statearr_31246_31295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (22))){
var inst_31218 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
if(cljs.core.truth_(inst_31218)){
var statearr_31247_31296 = state_31233__$1;
(statearr_31247_31296[(1)] = (23));

} else {
var statearr_31248_31297 = state_31233__$1;
(statearr_31248_31297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (6))){
var inst_31212 = (state_31233[(7)]);
var inst_31214 = (state_31233[(11)]);
var inst_31164 = (state_31233[(8)]);
var inst_31212__$1 = topic_fn.call(null,inst_31164);
var inst_31213 = cljs.core.deref.call(null,mults);
var inst_31214__$1 = cljs.core.get.call(null,inst_31213,inst_31212__$1);
var state_31233__$1 = (function (){var statearr_31249 = state_31233;
(statearr_31249[(7)] = inst_31212__$1);

(statearr_31249[(11)] = inst_31214__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31214__$1)){
var statearr_31250_31298 = state_31233__$1;
(statearr_31250_31298[(1)] = (19));

} else {
var statearr_31251_31299 = state_31233__$1;
(statearr_31251_31299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (25))){
var inst_31223 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31252_31300 = state_31233__$1;
(statearr_31252_31300[(2)] = inst_31223);

(statearr_31252_31300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (17))){
var inst_31188 = (state_31233[(10)]);
var inst_31197 = cljs.core.first.call(null,inst_31188);
var inst_31198 = cljs.core.async.muxch_STAR_.call(null,inst_31197);
var inst_31199 = cljs.core.async.close_BANG_.call(null,inst_31198);
var inst_31200 = cljs.core.next.call(null,inst_31188);
var inst_31174 = inst_31200;
var inst_31175 = null;
var inst_31176 = (0);
var inst_31177 = (0);
var state_31233__$1 = (function (){var statearr_31253 = state_31233;
(statearr_31253[(12)] = inst_31177);

(statearr_31253[(13)] = inst_31176);

(statearr_31253[(14)] = inst_31199);

(statearr_31253[(15)] = inst_31174);

(statearr_31253[(16)] = inst_31175);

return statearr_31253;
})();
var statearr_31254_31301 = state_31233__$1;
(statearr_31254_31301[(2)] = null);

(statearr_31254_31301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (3))){
var inst_31231 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31233__$1,inst_31231);
} else {
if((state_val_31234 === (12))){
var inst_31208 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31255_31302 = state_31233__$1;
(statearr_31255_31302[(2)] = inst_31208);

(statearr_31255_31302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (2))){
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31233__$1,(4),ch);
} else {
if((state_val_31234 === (23))){
var state_31233__$1 = state_31233;
var statearr_31256_31303 = state_31233__$1;
(statearr_31256_31303[(2)] = null);

(statearr_31256_31303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (19))){
var inst_31214 = (state_31233[(11)]);
var inst_31164 = (state_31233[(8)]);
var inst_31216 = cljs.core.async.muxch_STAR_.call(null,inst_31214);
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31233__$1,(22),inst_31216,inst_31164);
} else {
if((state_val_31234 === (11))){
var inst_31188 = (state_31233[(10)]);
var inst_31174 = (state_31233[(15)]);
var inst_31188__$1 = cljs.core.seq.call(null,inst_31174);
var state_31233__$1 = (function (){var statearr_31257 = state_31233;
(statearr_31257[(10)] = inst_31188__$1);

return statearr_31257;
})();
if(inst_31188__$1){
var statearr_31258_31304 = state_31233__$1;
(statearr_31258_31304[(1)] = (13));

} else {
var statearr_31259_31305 = state_31233__$1;
(statearr_31259_31305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (9))){
var inst_31210 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31260_31306 = state_31233__$1;
(statearr_31260_31306[(2)] = inst_31210);

(statearr_31260_31306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (5))){
var inst_31171 = cljs.core.deref.call(null,mults);
var inst_31172 = cljs.core.vals.call(null,inst_31171);
var inst_31173 = cljs.core.seq.call(null,inst_31172);
var inst_31174 = inst_31173;
var inst_31175 = null;
var inst_31176 = (0);
var inst_31177 = (0);
var state_31233__$1 = (function (){var statearr_31261 = state_31233;
(statearr_31261[(12)] = inst_31177);

(statearr_31261[(13)] = inst_31176);

(statearr_31261[(15)] = inst_31174);

(statearr_31261[(16)] = inst_31175);

return statearr_31261;
})();
var statearr_31262_31307 = state_31233__$1;
(statearr_31262_31307[(2)] = null);

(statearr_31262_31307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (14))){
var state_31233__$1 = state_31233;
var statearr_31266_31308 = state_31233__$1;
(statearr_31266_31308[(2)] = null);

(statearr_31266_31308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (16))){
var inst_31188 = (state_31233[(10)]);
var inst_31192 = cljs.core.chunk_first.call(null,inst_31188);
var inst_31193 = cljs.core.chunk_rest.call(null,inst_31188);
var inst_31194 = cljs.core.count.call(null,inst_31192);
var inst_31174 = inst_31193;
var inst_31175 = inst_31192;
var inst_31176 = inst_31194;
var inst_31177 = (0);
var state_31233__$1 = (function (){var statearr_31267 = state_31233;
(statearr_31267[(12)] = inst_31177);

(statearr_31267[(13)] = inst_31176);

(statearr_31267[(15)] = inst_31174);

(statearr_31267[(16)] = inst_31175);

return statearr_31267;
})();
var statearr_31268_31309 = state_31233__$1;
(statearr_31268_31309[(2)] = null);

(statearr_31268_31309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (10))){
var inst_31177 = (state_31233[(12)]);
var inst_31176 = (state_31233[(13)]);
var inst_31174 = (state_31233[(15)]);
var inst_31175 = (state_31233[(16)]);
var inst_31182 = cljs.core._nth.call(null,inst_31175,inst_31177);
var inst_31183 = cljs.core.async.muxch_STAR_.call(null,inst_31182);
var inst_31184 = cljs.core.async.close_BANG_.call(null,inst_31183);
var inst_31185 = (inst_31177 + (1));
var tmp31263 = inst_31176;
var tmp31264 = inst_31174;
var tmp31265 = inst_31175;
var inst_31174__$1 = tmp31264;
var inst_31175__$1 = tmp31265;
var inst_31176__$1 = tmp31263;
var inst_31177__$1 = inst_31185;
var state_31233__$1 = (function (){var statearr_31269 = state_31233;
(statearr_31269[(12)] = inst_31177__$1);

(statearr_31269[(17)] = inst_31184);

(statearr_31269[(13)] = inst_31176__$1);

(statearr_31269[(15)] = inst_31174__$1);

(statearr_31269[(16)] = inst_31175__$1);

return statearr_31269;
})();
var statearr_31270_31310 = state_31233__$1;
(statearr_31270_31310[(2)] = null);

(statearr_31270_31310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (18))){
var inst_31203 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31271_31311 = state_31233__$1;
(statearr_31271_31311[(2)] = inst_31203);

(statearr_31271_31311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (8))){
var inst_31177 = (state_31233[(12)]);
var inst_31176 = (state_31233[(13)]);
var inst_31179 = (inst_31177 < inst_31176);
var inst_31180 = inst_31179;
var state_31233__$1 = state_31233;
if(cljs.core.truth_(inst_31180)){
var statearr_31272_31312 = state_31233__$1;
(statearr_31272_31312[(1)] = (10));

} else {
var statearr_31273_31313 = state_31233__$1;
(statearr_31273_31313[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31285,mults,ensure_mult,p))
;
return ((function (switch__29254__auto__,c__29366__auto___31285,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31277[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31277[(1)] = (1));

return statearr_31277;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31233){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31278){if((e31278 instanceof Object)){
var ex__29258__auto__ = e31278;
var statearr_31279_31314 = state_31233;
(statearr_31279_31314[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31315 = state_31233;
state_31233 = G__31315;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31285,mults,ensure_mult,p))
})();
var state__29368__auto__ = (function (){var statearr_31280 = f__29367__auto__.call(null);
(statearr_31280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31285);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31285,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31316 = [];
var len__26207__auto___31319 = arguments.length;
var i__26208__auto___31320 = (0);
while(true){
if((i__26208__auto___31320 < len__26207__auto___31319)){
args31316.push((arguments[i__26208__auto___31320]));

var G__31321 = (i__26208__auto___31320 + (1));
i__26208__auto___31320 = G__31321;
continue;
} else {
}
break;
}

var G__31318 = args31316.length;
switch (G__31318) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31316.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31323 = [];
var len__26207__auto___31326 = arguments.length;
var i__26208__auto___31327 = (0);
while(true){
if((i__26208__auto___31327 < len__26207__auto___31326)){
args31323.push((arguments[i__26208__auto___31327]));

var G__31328 = (i__26208__auto___31327 + (1));
i__26208__auto___31327 = G__31328;
continue;
} else {
}
break;
}

var G__31325 = args31323.length;
switch (G__31325) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31323.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31330 = [];
var len__26207__auto___31401 = arguments.length;
var i__26208__auto___31402 = (0);
while(true){
if((i__26208__auto___31402 < len__26207__auto___31401)){
args31330.push((arguments[i__26208__auto___31402]));

var G__31403 = (i__26208__auto___31402 + (1));
i__26208__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var G__31332 = args31330.length;
switch (G__31332) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31330.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29366__auto___31405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (7))){
var state_31371__$1 = state_31371;
var statearr_31373_31406 = state_31371__$1;
(statearr_31373_31406[(2)] = null);

(statearr_31373_31406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (1))){
var state_31371__$1 = state_31371;
var statearr_31374_31407 = state_31371__$1;
(statearr_31374_31407[(2)] = null);

(statearr_31374_31407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (4))){
var inst_31335 = (state_31371[(7)]);
var inst_31337 = (inst_31335 < cnt);
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31337)){
var statearr_31375_31408 = state_31371__$1;
(statearr_31375_31408[(1)] = (6));

} else {
var statearr_31376_31409 = state_31371__$1;
(statearr_31376_31409[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (15))){
var inst_31367 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31377_31410 = state_31371__$1;
(statearr_31377_31410[(2)] = inst_31367);

(statearr_31377_31410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (13))){
var inst_31360 = cljs.core.async.close_BANG_.call(null,out);
var state_31371__$1 = state_31371;
var statearr_31378_31411 = state_31371__$1;
(statearr_31378_31411[(2)] = inst_31360);

(statearr_31378_31411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var state_31371__$1 = state_31371;
var statearr_31379_31412 = state_31371__$1;
(statearr_31379_31412[(2)] = null);

(statearr_31379_31412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (3))){
var inst_31369 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (12))){
var inst_31357 = (state_31371[(8)]);
var inst_31357__$1 = (state_31371[(2)]);
var inst_31358 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31357__$1);
var state_31371__$1 = (function (){var statearr_31380 = state_31371;
(statearr_31380[(8)] = inst_31357__$1);

return statearr_31380;
})();
if(cljs.core.truth_(inst_31358)){
var statearr_31381_31413 = state_31371__$1;
(statearr_31381_31413[(1)] = (13));

} else {
var statearr_31382_31414 = state_31371__$1;
(statearr_31382_31414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (2))){
var inst_31334 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31335 = (0);
var state_31371__$1 = (function (){var statearr_31383 = state_31371;
(statearr_31383[(9)] = inst_31334);

(statearr_31383[(7)] = inst_31335);

return statearr_31383;
})();
var statearr_31384_31415 = state_31371__$1;
(statearr_31384_31415[(2)] = null);

(statearr_31384_31415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (11))){
var inst_31335 = (state_31371[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31371,(10),Object,null,(9));
var inst_31344 = chs__$1.call(null,inst_31335);
var inst_31345 = done.call(null,inst_31335);
var inst_31346 = cljs.core.async.take_BANG_.call(null,inst_31344,inst_31345);
var state_31371__$1 = state_31371;
var statearr_31385_31416 = state_31371__$1;
(statearr_31385_31416[(2)] = inst_31346);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (9))){
var inst_31335 = (state_31371[(7)]);
var inst_31348 = (state_31371[(2)]);
var inst_31349 = (inst_31335 + (1));
var inst_31335__$1 = inst_31349;
var state_31371__$1 = (function (){var statearr_31386 = state_31371;
(statearr_31386[(10)] = inst_31348);

(statearr_31386[(7)] = inst_31335__$1);

return statearr_31386;
})();
var statearr_31387_31417 = state_31371__$1;
(statearr_31387_31417[(2)] = null);

(statearr_31387_31417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (5))){
var inst_31355 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31388 = state_31371;
(statearr_31388[(11)] = inst_31355);

return statearr_31388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(12),dchan);
} else {
if((state_val_31372 === (14))){
var inst_31357 = (state_31371[(8)]);
var inst_31362 = cljs.core.apply.call(null,f,inst_31357);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(16),out,inst_31362);
} else {
if((state_val_31372 === (16))){
var inst_31364 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31389 = state_31371;
(statearr_31389[(12)] = inst_31364);

return statearr_31389;
})();
var statearr_31390_31418 = state_31371__$1;
(statearr_31390_31418[(2)] = null);

(statearr_31390_31418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (10))){
var inst_31339 = (state_31371[(2)]);
var inst_31340 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31371__$1 = (function (){var statearr_31391 = state_31371;
(statearr_31391[(13)] = inst_31339);

return statearr_31391;
})();
var statearr_31392_31419 = state_31371__$1;
(statearr_31392_31419[(2)] = inst_31340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31353 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31393_31420 = state_31371__$1;
(statearr_31393_31420[(2)] = inst_31353);

(statearr_31393_31420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29254__auto__,c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31371){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31398){if((e31398 instanceof Object)){
var ex__29258__auto__ = e31398;
var statearr_31399_31421 = state_31371;
(statearr_31399_31421[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31422 = state_31371;
state_31371 = G__31422;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29368__auto__ = (function (){var statearr_31400 = f__29367__auto__.call(null);
(statearr_31400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31405);

return statearr_31400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31405,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31424 = [];
var len__26207__auto___31482 = arguments.length;
var i__26208__auto___31483 = (0);
while(true){
if((i__26208__auto___31483 < len__26207__auto___31482)){
args31424.push((arguments[i__26208__auto___31483]));

var G__31484 = (i__26208__auto___31483 + (1));
i__26208__auto___31483 = G__31484;
continue;
} else {
}
break;
}

var G__31426 = args31424.length;
switch (G__31426) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31424.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___31486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31486,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31486,out){
return (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31437 = (state_31458[(7)]);
var inst_31438 = (state_31458[(8)]);
var inst_31437__$1 = (state_31458[(2)]);
var inst_31438__$1 = cljs.core.nth.call(null,inst_31437__$1,(0),null);
var inst_31439 = cljs.core.nth.call(null,inst_31437__$1,(1),null);
var inst_31440 = (inst_31438__$1 == null);
var state_31458__$1 = (function (){var statearr_31460 = state_31458;
(statearr_31460[(7)] = inst_31437__$1);

(statearr_31460[(9)] = inst_31439);

(statearr_31460[(8)] = inst_31438__$1);

return statearr_31460;
})();
if(cljs.core.truth_(inst_31440)){
var statearr_31461_31487 = state_31458__$1;
(statearr_31461_31487[(1)] = (8));

} else {
var statearr_31462_31488 = state_31458__$1;
(statearr_31462_31488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (1))){
var inst_31427 = cljs.core.vec.call(null,chs);
var inst_31428 = inst_31427;
var state_31458__$1 = (function (){var statearr_31463 = state_31458;
(statearr_31463[(10)] = inst_31428);

return statearr_31463;
})();
var statearr_31464_31489 = state_31458__$1;
(statearr_31464_31489[(2)] = null);

(statearr_31464_31489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var inst_31428 = (state_31458[(10)]);
var state_31458__$1 = state_31458;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31458__$1,(7),inst_31428);
} else {
if((state_val_31459 === (6))){
var inst_31454 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31465_31490 = state_31458__$1;
(statearr_31465_31490[(2)] = inst_31454);

(statearr_31465_31490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (3))){
var inst_31456 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (2))){
var inst_31428 = (state_31458[(10)]);
var inst_31430 = cljs.core.count.call(null,inst_31428);
var inst_31431 = (inst_31430 > (0));
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31431)){
var statearr_31467_31491 = state_31458__$1;
(statearr_31467_31491[(1)] = (4));

} else {
var statearr_31468_31492 = state_31458__$1;
(statearr_31468_31492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (11))){
var inst_31428 = (state_31458[(10)]);
var inst_31447 = (state_31458[(2)]);
var tmp31466 = inst_31428;
var inst_31428__$1 = tmp31466;
var state_31458__$1 = (function (){var statearr_31469 = state_31458;
(statearr_31469[(10)] = inst_31428__$1);

(statearr_31469[(11)] = inst_31447);

return statearr_31469;
})();
var statearr_31470_31493 = state_31458__$1;
(statearr_31470_31493[(2)] = null);

(statearr_31470_31493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (9))){
var inst_31438 = (state_31458[(8)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31458__$1,(11),out,inst_31438);
} else {
if((state_val_31459 === (5))){
var inst_31452 = cljs.core.async.close_BANG_.call(null,out);
var state_31458__$1 = state_31458;
var statearr_31471_31494 = state_31458__$1;
(statearr_31471_31494[(2)] = inst_31452);

(statearr_31471_31494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (10))){
var inst_31450 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31472_31495 = state_31458__$1;
(statearr_31472_31495[(2)] = inst_31450);

(statearr_31472_31495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31437 = (state_31458[(7)]);
var inst_31439 = (state_31458[(9)]);
var inst_31428 = (state_31458[(10)]);
var inst_31438 = (state_31458[(8)]);
var inst_31442 = (function (){var cs = inst_31428;
var vec__31433 = inst_31437;
var v = inst_31438;
var c = inst_31439;
return ((function (cs,vec__31433,v,c,inst_31437,inst_31439,inst_31428,inst_31438,state_val_31459,c__29366__auto___31486,out){
return (function (p1__31423_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31423_SHARP_);
});
;})(cs,vec__31433,v,c,inst_31437,inst_31439,inst_31428,inst_31438,state_val_31459,c__29366__auto___31486,out))
})();
var inst_31443 = cljs.core.filterv.call(null,inst_31442,inst_31428);
var inst_31428__$1 = inst_31443;
var state_31458__$1 = (function (){var statearr_31473 = state_31458;
(statearr_31473[(10)] = inst_31428__$1);

return statearr_31473;
})();
var statearr_31474_31496 = state_31458__$1;
(statearr_31474_31496[(2)] = null);

(statearr_31474_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31486,out))
;
return ((function (switch__29254__auto__,c__29366__auto___31486,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31458){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31479){if((e31479 instanceof Object)){
var ex__29258__auto__ = e31479;
var statearr_31480_31497 = state_31458;
(statearr_31480_31497[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31498 = state_31458;
state_31458 = G__31498;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31486,out))
})();
var state__29368__auto__ = (function (){var statearr_31481 = f__29367__auto__.call(null);
(statearr_31481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31486);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31486,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31499 = [];
var len__26207__auto___31548 = arguments.length;
var i__26208__auto___31549 = (0);
while(true){
if((i__26208__auto___31549 < len__26207__auto___31548)){
args31499.push((arguments[i__26208__auto___31549]));

var G__31550 = (i__26208__auto___31549 + (1));
i__26208__auto___31549 = G__31550;
continue;
} else {
}
break;
}

var G__31501 = args31499.length;
switch (G__31501) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31499.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___31552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31552,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31552,out){
return (function (state_31525){
var state_val_31526 = (state_31525[(1)]);
if((state_val_31526 === (7))){
var inst_31507 = (state_31525[(7)]);
var inst_31507__$1 = (state_31525[(2)]);
var inst_31508 = (inst_31507__$1 == null);
var inst_31509 = cljs.core.not.call(null,inst_31508);
var state_31525__$1 = (function (){var statearr_31527 = state_31525;
(statearr_31527[(7)] = inst_31507__$1);

return statearr_31527;
})();
if(inst_31509){
var statearr_31528_31553 = state_31525__$1;
(statearr_31528_31553[(1)] = (8));

} else {
var statearr_31529_31554 = state_31525__$1;
(statearr_31529_31554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (1))){
var inst_31502 = (0);
var state_31525__$1 = (function (){var statearr_31530 = state_31525;
(statearr_31530[(8)] = inst_31502);

return statearr_31530;
})();
var statearr_31531_31555 = state_31525__$1;
(statearr_31531_31555[(2)] = null);

(statearr_31531_31555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (4))){
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31525__$1,(7),ch);
} else {
if((state_val_31526 === (6))){
var inst_31520 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31532_31556 = state_31525__$1;
(statearr_31532_31556[(2)] = inst_31520);

(statearr_31532_31556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31522 = (state_31525[(2)]);
var inst_31523 = cljs.core.async.close_BANG_.call(null,out);
var state_31525__$1 = (function (){var statearr_31533 = state_31525;
(statearr_31533[(9)] = inst_31522);

return statearr_31533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31525__$1,inst_31523);
} else {
if((state_val_31526 === (2))){
var inst_31502 = (state_31525[(8)]);
var inst_31504 = (inst_31502 < n);
var state_31525__$1 = state_31525;
if(cljs.core.truth_(inst_31504)){
var statearr_31534_31557 = state_31525__$1;
(statearr_31534_31557[(1)] = (4));

} else {
var statearr_31535_31558 = state_31525__$1;
(statearr_31535_31558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (11))){
var inst_31502 = (state_31525[(8)]);
var inst_31512 = (state_31525[(2)]);
var inst_31513 = (inst_31502 + (1));
var inst_31502__$1 = inst_31513;
var state_31525__$1 = (function (){var statearr_31536 = state_31525;
(statearr_31536[(10)] = inst_31512);

(statearr_31536[(8)] = inst_31502__$1);

return statearr_31536;
})();
var statearr_31537_31559 = state_31525__$1;
(statearr_31537_31559[(2)] = null);

(statearr_31537_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (9))){
var state_31525__$1 = state_31525;
var statearr_31538_31560 = state_31525__$1;
(statearr_31538_31560[(2)] = null);

(statearr_31538_31560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (5))){
var state_31525__$1 = state_31525;
var statearr_31539_31561 = state_31525__$1;
(statearr_31539_31561[(2)] = null);

(statearr_31539_31561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (10))){
var inst_31517 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31540_31562 = state_31525__$1;
(statearr_31540_31562[(2)] = inst_31517);

(statearr_31540_31562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (8))){
var inst_31507 = (state_31525[(7)]);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31525__$1,(11),out,inst_31507);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31552,out))
;
return ((function (switch__29254__auto__,c__29366__auto___31552,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31544[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31525){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__29258__auto__ = e31545;
var statearr_31546_31563 = state_31525;
(statearr_31546_31563[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31564 = state_31525;
state_31525 = G__31564;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31552,out))
})();
var state__29368__auto__ = (function (){var statearr_31547 = f__29367__auto__.call(null);
(statearr_31547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31552);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31552,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31572 = (function (map_LT_,f,ch,meta31573){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31573 = meta31573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31574,meta31573__$1){
var self__ = this;
var _31574__$1 = this;
return (new cljs.core.async.t_cljs$core$async31572(self__.map_LT_,self__.f,self__.ch,meta31573__$1));
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31574){
var self__ = this;
var _31574__$1 = this;
return self__.meta31573;
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31575 = (function (map_LT_,f,ch,meta31573,_,fn1,meta31576){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31573 = meta31573;
this._ = _;
this.fn1 = fn1;
this.meta31576 = meta31576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31577,meta31576__$1){
var self__ = this;
var _31577__$1 = this;
return (new cljs.core.async.t_cljs$core$async31575(self__.map_LT_,self__.f,self__.ch,self__.meta31573,self__._,self__.fn1,meta31576__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31577){
var self__ = this;
var _31577__$1 = this;
return self__.meta31576;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31565_SHARP_){
return f1.call(null,(((p1__31565_SHARP_ == null))?null:self__.f.call(null,p1__31565_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31573","meta31573",-1084720878,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31572","cljs.core.async/t_cljs$core$async31572",-402890177,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31576","meta31576",-1608800587,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31575";

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async31575");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31575 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31575(map_LT___$1,f__$1,ch__$1,meta31573__$1,___$2,fn1__$1,meta31576){
return (new cljs.core.async.t_cljs$core$async31575(map_LT___$1,f__$1,ch__$1,meta31573__$1,___$2,fn1__$1,meta31576));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31575(self__.map_LT_,self__.f,self__.ch,self__.meta31573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25120__auto__ = ret;
if(cljs.core.truth_(and__25120__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31573","meta31573",-1084720878,null)], null);
});

cljs.core.async.t_cljs$core$async31572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31572";

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async31572");
});

cljs.core.async.__GT_t_cljs$core$async31572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31572(map_LT___$1,f__$1,ch__$1,meta31573){
return (new cljs.core.async.t_cljs$core$async31572(map_LT___$1,f__$1,ch__$1,meta31573));
});

}

return (new cljs.core.async.t_cljs$core$async31572(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31581 = (function (map_GT_,f,ch,meta31582){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31583,meta31582__$1){
var self__ = this;
var _31583__$1 = this;
return (new cljs.core.async.t_cljs$core$async31581(self__.map_GT_,self__.f,self__.ch,meta31582__$1));
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31583){
var self__ = this;
var _31583__$1 = this;
return self__.meta31582;
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31582","meta31582",-1174191442,null)], null);
});

cljs.core.async.t_cljs$core$async31581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31581";

cljs.core.async.t_cljs$core$async31581.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async31581");
});

cljs.core.async.__GT_t_cljs$core$async31581 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31581(map_GT___$1,f__$1,ch__$1,meta31582){
return (new cljs.core.async.t_cljs$core$async31581(map_GT___$1,f__$1,ch__$1,meta31582));
});

}

return (new cljs.core.async.t_cljs$core$async31581(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31587 = (function (filter_GT_,p,ch,meta31588){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31588 = meta31588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31589,meta31588__$1){
var self__ = this;
var _31589__$1 = this;
return (new cljs.core.async.t_cljs$core$async31587(self__.filter_GT_,self__.p,self__.ch,meta31588__$1));
});

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31589){
var self__ = this;
var _31589__$1 = this;
return self__.meta31588;
});

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31588","meta31588",-1308361030,null)], null);
});

cljs.core.async.t_cljs$core$async31587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31587";

cljs.core.async.t_cljs$core$async31587.cljs$lang$ctorPrWriter = (function (this__25738__auto__,writer__25739__auto__,opt__25740__auto__){
return cljs.core._write.call(null,writer__25739__auto__,"cljs.core.async/t_cljs$core$async31587");
});

cljs.core.async.__GT_t_cljs$core$async31587 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31587(filter_GT___$1,p__$1,ch__$1,meta31588){
return (new cljs.core.async.t_cljs$core$async31587(filter_GT___$1,p__$1,ch__$1,meta31588));
});

}

return (new cljs.core.async.t_cljs$core$async31587(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31590 = [];
var len__26207__auto___31634 = arguments.length;
var i__26208__auto___31635 = (0);
while(true){
if((i__26208__auto___31635 < len__26207__auto___31634)){
args31590.push((arguments[i__26208__auto___31635]));

var G__31636 = (i__26208__auto___31635 + (1));
i__26208__auto___31635 = G__31636;
continue;
} else {
}
break;
}

var G__31592 = args31590.length;
switch (G__31592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31590.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___31638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31638,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31638,out){
return (function (state_31613){
var state_val_31614 = (state_31613[(1)]);
if((state_val_31614 === (7))){
var inst_31609 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31615_31639 = state_31613__$1;
(statearr_31615_31639[(2)] = inst_31609);

(statearr_31615_31639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (1))){
var state_31613__$1 = state_31613;
var statearr_31616_31640 = state_31613__$1;
(statearr_31616_31640[(2)] = null);

(statearr_31616_31640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (4))){
var inst_31595 = (state_31613[(7)]);
var inst_31595__$1 = (state_31613[(2)]);
var inst_31596 = (inst_31595__$1 == null);
var state_31613__$1 = (function (){var statearr_31617 = state_31613;
(statearr_31617[(7)] = inst_31595__$1);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31618_31641 = state_31613__$1;
(statearr_31618_31641[(1)] = (5));

} else {
var statearr_31619_31642 = state_31613__$1;
(statearr_31619_31642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (6))){
var inst_31595 = (state_31613[(7)]);
var inst_31600 = p.call(null,inst_31595);
var state_31613__$1 = state_31613;
if(cljs.core.truth_(inst_31600)){
var statearr_31620_31643 = state_31613__$1;
(statearr_31620_31643[(1)] = (8));

} else {
var statearr_31621_31644 = state_31613__$1;
(statearr_31621_31644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (3))){
var inst_31611 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31613__$1,inst_31611);
} else {
if((state_val_31614 === (2))){
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31613__$1,(4),ch);
} else {
if((state_val_31614 === (11))){
var inst_31603 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31622_31645 = state_31613__$1;
(statearr_31622_31645[(2)] = inst_31603);

(statearr_31622_31645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (9))){
var state_31613__$1 = state_31613;
var statearr_31623_31646 = state_31613__$1;
(statearr_31623_31646[(2)] = null);

(statearr_31623_31646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (5))){
var inst_31598 = cljs.core.async.close_BANG_.call(null,out);
var state_31613__$1 = state_31613;
var statearr_31624_31647 = state_31613__$1;
(statearr_31624_31647[(2)] = inst_31598);

(statearr_31624_31647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (10))){
var inst_31606 = (state_31613[(2)]);
var state_31613__$1 = (function (){var statearr_31625 = state_31613;
(statearr_31625[(8)] = inst_31606);

return statearr_31625;
})();
var statearr_31626_31648 = state_31613__$1;
(statearr_31626_31648[(2)] = null);

(statearr_31626_31648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (8))){
var inst_31595 = (state_31613[(7)]);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31613__$1,(11),out,inst_31595);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31638,out))
;
return ((function (switch__29254__auto__,c__29366__auto___31638,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31630 = [null,null,null,null,null,null,null,null,null];
(statearr_31630[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31630[(1)] = (1));

return statearr_31630;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31613){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31631){if((e31631 instanceof Object)){
var ex__29258__auto__ = e31631;
var statearr_31632_31649 = state_31613;
(statearr_31632_31649[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31650 = state_31613;
state_31613 = G__31650;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31638,out))
})();
var state__29368__auto__ = (function (){var statearr_31633 = f__29367__auto__.call(null);
(statearr_31633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31638);

return statearr_31633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31638,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31651 = [];
var len__26207__auto___31654 = arguments.length;
var i__26208__auto___31655 = (0);
while(true){
if((i__26208__auto___31655 < len__26207__auto___31654)){
args31651.push((arguments[i__26208__auto___31655]));

var G__31656 = (i__26208__auto___31655 + (1));
i__26208__auto___31655 = G__31656;
continue;
} else {
}
break;
}

var G__31653 = args31651.length;
switch (G__31653) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31651.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__){
return (function (state_31823){
var state_val_31824 = (state_31823[(1)]);
if((state_val_31824 === (7))){
var inst_31819 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31825_31866 = state_31823__$1;
(statearr_31825_31866[(2)] = inst_31819);

(statearr_31825_31866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (20))){
var inst_31789 = (state_31823[(7)]);
var inst_31800 = (state_31823[(2)]);
var inst_31801 = cljs.core.next.call(null,inst_31789);
var inst_31775 = inst_31801;
var inst_31776 = null;
var inst_31777 = (0);
var inst_31778 = (0);
var state_31823__$1 = (function (){var statearr_31826 = state_31823;
(statearr_31826[(8)] = inst_31778);

(statearr_31826[(9)] = inst_31800);

(statearr_31826[(10)] = inst_31777);

(statearr_31826[(11)] = inst_31775);

(statearr_31826[(12)] = inst_31776);

return statearr_31826;
})();
var statearr_31827_31867 = state_31823__$1;
(statearr_31827_31867[(2)] = null);

(statearr_31827_31867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (1))){
var state_31823__$1 = state_31823;
var statearr_31828_31868 = state_31823__$1;
(statearr_31828_31868[(2)] = null);

(statearr_31828_31868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (4))){
var inst_31764 = (state_31823[(13)]);
var inst_31764__$1 = (state_31823[(2)]);
var inst_31765 = (inst_31764__$1 == null);
var state_31823__$1 = (function (){var statearr_31829 = state_31823;
(statearr_31829[(13)] = inst_31764__$1);

return statearr_31829;
})();
if(cljs.core.truth_(inst_31765)){
var statearr_31830_31869 = state_31823__$1;
(statearr_31830_31869[(1)] = (5));

} else {
var statearr_31831_31870 = state_31823__$1;
(statearr_31831_31870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (15))){
var state_31823__$1 = state_31823;
var statearr_31835_31871 = state_31823__$1;
(statearr_31835_31871[(2)] = null);

(statearr_31835_31871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (21))){
var state_31823__$1 = state_31823;
var statearr_31836_31872 = state_31823__$1;
(statearr_31836_31872[(2)] = null);

(statearr_31836_31872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (13))){
var inst_31778 = (state_31823[(8)]);
var inst_31777 = (state_31823[(10)]);
var inst_31775 = (state_31823[(11)]);
var inst_31776 = (state_31823[(12)]);
var inst_31785 = (state_31823[(2)]);
var inst_31786 = (inst_31778 + (1));
var tmp31832 = inst_31777;
var tmp31833 = inst_31775;
var tmp31834 = inst_31776;
var inst_31775__$1 = tmp31833;
var inst_31776__$1 = tmp31834;
var inst_31777__$1 = tmp31832;
var inst_31778__$1 = inst_31786;
var state_31823__$1 = (function (){var statearr_31837 = state_31823;
(statearr_31837[(8)] = inst_31778__$1);

(statearr_31837[(10)] = inst_31777__$1);

(statearr_31837[(11)] = inst_31775__$1);

(statearr_31837[(14)] = inst_31785);

(statearr_31837[(12)] = inst_31776__$1);

return statearr_31837;
})();
var statearr_31838_31873 = state_31823__$1;
(statearr_31838_31873[(2)] = null);

(statearr_31838_31873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (22))){
var state_31823__$1 = state_31823;
var statearr_31839_31874 = state_31823__$1;
(statearr_31839_31874[(2)] = null);

(statearr_31839_31874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (6))){
var inst_31764 = (state_31823[(13)]);
var inst_31773 = f.call(null,inst_31764);
var inst_31774 = cljs.core.seq.call(null,inst_31773);
var inst_31775 = inst_31774;
var inst_31776 = null;
var inst_31777 = (0);
var inst_31778 = (0);
var state_31823__$1 = (function (){var statearr_31840 = state_31823;
(statearr_31840[(8)] = inst_31778);

(statearr_31840[(10)] = inst_31777);

(statearr_31840[(11)] = inst_31775);

(statearr_31840[(12)] = inst_31776);

return statearr_31840;
})();
var statearr_31841_31875 = state_31823__$1;
(statearr_31841_31875[(2)] = null);

(statearr_31841_31875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (17))){
var inst_31789 = (state_31823[(7)]);
var inst_31793 = cljs.core.chunk_first.call(null,inst_31789);
var inst_31794 = cljs.core.chunk_rest.call(null,inst_31789);
var inst_31795 = cljs.core.count.call(null,inst_31793);
var inst_31775 = inst_31794;
var inst_31776 = inst_31793;
var inst_31777 = inst_31795;
var inst_31778 = (0);
var state_31823__$1 = (function (){var statearr_31842 = state_31823;
(statearr_31842[(8)] = inst_31778);

(statearr_31842[(10)] = inst_31777);

(statearr_31842[(11)] = inst_31775);

(statearr_31842[(12)] = inst_31776);

return statearr_31842;
})();
var statearr_31843_31876 = state_31823__$1;
(statearr_31843_31876[(2)] = null);

(statearr_31843_31876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (3))){
var inst_31821 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31823__$1,inst_31821);
} else {
if((state_val_31824 === (12))){
var inst_31809 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31844_31877 = state_31823__$1;
(statearr_31844_31877[(2)] = inst_31809);

(statearr_31844_31877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (2))){
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31823__$1,(4),in$);
} else {
if((state_val_31824 === (23))){
var inst_31817 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31845_31878 = state_31823__$1;
(statearr_31845_31878[(2)] = inst_31817);

(statearr_31845_31878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (19))){
var inst_31804 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31846_31879 = state_31823__$1;
(statearr_31846_31879[(2)] = inst_31804);

(statearr_31846_31879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (11))){
var inst_31789 = (state_31823[(7)]);
var inst_31775 = (state_31823[(11)]);
var inst_31789__$1 = cljs.core.seq.call(null,inst_31775);
var state_31823__$1 = (function (){var statearr_31847 = state_31823;
(statearr_31847[(7)] = inst_31789__$1);

return statearr_31847;
})();
if(inst_31789__$1){
var statearr_31848_31880 = state_31823__$1;
(statearr_31848_31880[(1)] = (14));

} else {
var statearr_31849_31881 = state_31823__$1;
(statearr_31849_31881[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (9))){
var inst_31811 = (state_31823[(2)]);
var inst_31812 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31823__$1 = (function (){var statearr_31850 = state_31823;
(statearr_31850[(15)] = inst_31811);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31812)){
var statearr_31851_31882 = state_31823__$1;
(statearr_31851_31882[(1)] = (21));

} else {
var statearr_31852_31883 = state_31823__$1;
(statearr_31852_31883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (5))){
var inst_31767 = cljs.core.async.close_BANG_.call(null,out);
var state_31823__$1 = state_31823;
var statearr_31853_31884 = state_31823__$1;
(statearr_31853_31884[(2)] = inst_31767);

(statearr_31853_31884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (14))){
var inst_31789 = (state_31823[(7)]);
var inst_31791 = cljs.core.chunked_seq_QMARK_.call(null,inst_31789);
var state_31823__$1 = state_31823;
if(inst_31791){
var statearr_31854_31885 = state_31823__$1;
(statearr_31854_31885[(1)] = (17));

} else {
var statearr_31855_31886 = state_31823__$1;
(statearr_31855_31886[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (16))){
var inst_31807 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31856_31887 = state_31823__$1;
(statearr_31856_31887[(2)] = inst_31807);

(statearr_31856_31887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (10))){
var inst_31778 = (state_31823[(8)]);
var inst_31776 = (state_31823[(12)]);
var inst_31783 = cljs.core._nth.call(null,inst_31776,inst_31778);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31823__$1,(13),out,inst_31783);
} else {
if((state_val_31824 === (18))){
var inst_31789 = (state_31823[(7)]);
var inst_31798 = cljs.core.first.call(null,inst_31789);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31823__$1,(20),out,inst_31798);
} else {
if((state_val_31824 === (8))){
var inst_31778 = (state_31823[(8)]);
var inst_31777 = (state_31823[(10)]);
var inst_31780 = (inst_31778 < inst_31777);
var inst_31781 = inst_31780;
var state_31823__$1 = state_31823;
if(cljs.core.truth_(inst_31781)){
var statearr_31857_31888 = state_31823__$1;
(statearr_31857_31888[(1)] = (10));

} else {
var statearr_31858_31889 = state_31823__$1;
(statearr_31858_31889[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto__))
;
return ((function (switch__29254__auto__,c__29366__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____0 = (function (){
var statearr_31862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31862[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__);

(statearr_31862[(1)] = (1));

return statearr_31862;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____1 = (function (state_31823){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31863){if((e31863 instanceof Object)){
var ex__29258__auto__ = e31863;
var statearr_31864_31890 = state_31823;
(statearr_31864_31890[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31891 = state_31823;
state_31823 = G__31891;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__ = function(state_31823){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____1.call(this,state_31823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29255__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__))
})();
var state__29368__auto__ = (function (){var statearr_31865 = f__29367__auto__.call(null);
(statearr_31865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__))
);

return c__29366__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31892 = [];
var len__26207__auto___31895 = arguments.length;
var i__26208__auto___31896 = (0);
while(true){
if((i__26208__auto___31896 < len__26207__auto___31895)){
args31892.push((arguments[i__26208__auto___31896]));

var G__31897 = (i__26208__auto___31896 + (1));
i__26208__auto___31896 = G__31897;
continue;
} else {
}
break;
}

var G__31894 = args31892.length;
switch (G__31894) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31892.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31899 = [];
var len__26207__auto___31902 = arguments.length;
var i__26208__auto___31903 = (0);
while(true){
if((i__26208__auto___31903 < len__26207__auto___31902)){
args31899.push((arguments[i__26208__auto___31903]));

var G__31904 = (i__26208__auto___31903 + (1));
i__26208__auto___31903 = G__31904;
continue;
} else {
}
break;
}

var G__31901 = args31899.length;
switch (G__31901) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31899.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31906 = [];
var len__26207__auto___31957 = arguments.length;
var i__26208__auto___31958 = (0);
while(true){
if((i__26208__auto___31958 < len__26207__auto___31957)){
args31906.push((arguments[i__26208__auto___31958]));

var G__31959 = (i__26208__auto___31958 + (1));
i__26208__auto___31958 = G__31959;
continue;
} else {
}
break;
}

var G__31908 = args31906.length;
switch (G__31908) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31906.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___31961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___31961,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___31961,out){
return (function (state_31932){
var state_val_31933 = (state_31932[(1)]);
if((state_val_31933 === (7))){
var inst_31927 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31934_31962 = state_31932__$1;
(statearr_31934_31962[(2)] = inst_31927);

(statearr_31934_31962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (1))){
var inst_31909 = null;
var state_31932__$1 = (function (){var statearr_31935 = state_31932;
(statearr_31935[(7)] = inst_31909);

return statearr_31935;
})();
var statearr_31936_31963 = state_31932__$1;
(statearr_31936_31963[(2)] = null);

(statearr_31936_31963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (4))){
var inst_31912 = (state_31932[(8)]);
var inst_31912__$1 = (state_31932[(2)]);
var inst_31913 = (inst_31912__$1 == null);
var inst_31914 = cljs.core.not.call(null,inst_31913);
var state_31932__$1 = (function (){var statearr_31937 = state_31932;
(statearr_31937[(8)] = inst_31912__$1);

return statearr_31937;
})();
if(inst_31914){
var statearr_31938_31964 = state_31932__$1;
(statearr_31938_31964[(1)] = (5));

} else {
var statearr_31939_31965 = state_31932__$1;
(statearr_31939_31965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (6))){
var state_31932__$1 = state_31932;
var statearr_31940_31966 = state_31932__$1;
(statearr_31940_31966[(2)] = null);

(statearr_31940_31966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (3))){
var inst_31929 = (state_31932[(2)]);
var inst_31930 = cljs.core.async.close_BANG_.call(null,out);
var state_31932__$1 = (function (){var statearr_31941 = state_31932;
(statearr_31941[(9)] = inst_31929);

return statearr_31941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31932__$1,inst_31930);
} else {
if((state_val_31933 === (2))){
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(4),ch);
} else {
if((state_val_31933 === (11))){
var inst_31912 = (state_31932[(8)]);
var inst_31921 = (state_31932[(2)]);
var inst_31909 = inst_31912;
var state_31932__$1 = (function (){var statearr_31942 = state_31932;
(statearr_31942[(10)] = inst_31921);

(statearr_31942[(7)] = inst_31909);

return statearr_31942;
})();
var statearr_31943_31967 = state_31932__$1;
(statearr_31943_31967[(2)] = null);

(statearr_31943_31967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (9))){
var inst_31912 = (state_31932[(8)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31932__$1,(11),out,inst_31912);
} else {
if((state_val_31933 === (5))){
var inst_31912 = (state_31932[(8)]);
var inst_31909 = (state_31932[(7)]);
var inst_31916 = cljs.core._EQ_.call(null,inst_31912,inst_31909);
var state_31932__$1 = state_31932;
if(inst_31916){
var statearr_31945_31968 = state_31932__$1;
(statearr_31945_31968[(1)] = (8));

} else {
var statearr_31946_31969 = state_31932__$1;
(statearr_31946_31969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (10))){
var inst_31924 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31947_31970 = state_31932__$1;
(statearr_31947_31970[(2)] = inst_31924);

(statearr_31947_31970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (8))){
var inst_31909 = (state_31932[(7)]);
var tmp31944 = inst_31909;
var inst_31909__$1 = tmp31944;
var state_31932__$1 = (function (){var statearr_31948 = state_31932;
(statearr_31948[(7)] = inst_31909__$1);

return statearr_31948;
})();
var statearr_31949_31971 = state_31932__$1;
(statearr_31949_31971[(2)] = null);

(statearr_31949_31971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___31961,out))
;
return ((function (switch__29254__auto__,c__29366__auto___31961,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_31932){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_31932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e31954){if((e31954 instanceof Object)){
var ex__29258__auto__ = e31954;
var statearr_31955_31972 = state_31932;
(statearr_31955_31972[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31973 = state_31932;
state_31932 = G__31973;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_31932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_31932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___31961,out))
})();
var state__29368__auto__ = (function (){var statearr_31956 = f__29367__auto__.call(null);
(statearr_31956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___31961);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___31961,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31974 = [];
var len__26207__auto___32044 = arguments.length;
var i__26208__auto___32045 = (0);
while(true){
if((i__26208__auto___32045 < len__26207__auto___32044)){
args31974.push((arguments[i__26208__auto___32045]));

var G__32046 = (i__26208__auto___32045 + (1));
i__26208__auto___32045 = G__32046;
continue;
} else {
}
break;
}

var G__31976 = args31974.length;
switch (G__31976) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31974.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___32048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___32048,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___32048,out){
return (function (state_32014){
var state_val_32015 = (state_32014[(1)]);
if((state_val_32015 === (7))){
var inst_32010 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32016_32049 = state_32014__$1;
(statearr_32016_32049[(2)] = inst_32010);

(statearr_32016_32049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (1))){
var inst_31977 = (new Array(n));
var inst_31978 = inst_31977;
var inst_31979 = (0);
var state_32014__$1 = (function (){var statearr_32017 = state_32014;
(statearr_32017[(7)] = inst_31979);

(statearr_32017[(8)] = inst_31978);

return statearr_32017;
})();
var statearr_32018_32050 = state_32014__$1;
(statearr_32018_32050[(2)] = null);

(statearr_32018_32050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (4))){
var inst_31982 = (state_32014[(9)]);
var inst_31982__$1 = (state_32014[(2)]);
var inst_31983 = (inst_31982__$1 == null);
var inst_31984 = cljs.core.not.call(null,inst_31983);
var state_32014__$1 = (function (){var statearr_32019 = state_32014;
(statearr_32019[(9)] = inst_31982__$1);

return statearr_32019;
})();
if(inst_31984){
var statearr_32020_32051 = state_32014__$1;
(statearr_32020_32051[(1)] = (5));

} else {
var statearr_32021_32052 = state_32014__$1;
(statearr_32021_32052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (15))){
var inst_32004 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32022_32053 = state_32014__$1;
(statearr_32022_32053[(2)] = inst_32004);

(statearr_32022_32053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (13))){
var state_32014__$1 = state_32014;
var statearr_32023_32054 = state_32014__$1;
(statearr_32023_32054[(2)] = null);

(statearr_32023_32054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (6))){
var inst_31979 = (state_32014[(7)]);
var inst_32000 = (inst_31979 > (0));
var state_32014__$1 = state_32014;
if(cljs.core.truth_(inst_32000)){
var statearr_32024_32055 = state_32014__$1;
(statearr_32024_32055[(1)] = (12));

} else {
var statearr_32025_32056 = state_32014__$1;
(statearr_32025_32056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (3))){
var inst_32012 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32014__$1,inst_32012);
} else {
if((state_val_32015 === (12))){
var inst_31978 = (state_32014[(8)]);
var inst_32002 = cljs.core.vec.call(null,inst_31978);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32014__$1,(15),out,inst_32002);
} else {
if((state_val_32015 === (2))){
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32014__$1,(4),ch);
} else {
if((state_val_32015 === (11))){
var inst_31994 = (state_32014[(2)]);
var inst_31995 = (new Array(n));
var inst_31978 = inst_31995;
var inst_31979 = (0);
var state_32014__$1 = (function (){var statearr_32026 = state_32014;
(statearr_32026[(7)] = inst_31979);

(statearr_32026[(8)] = inst_31978);

(statearr_32026[(10)] = inst_31994);

return statearr_32026;
})();
var statearr_32027_32057 = state_32014__$1;
(statearr_32027_32057[(2)] = null);

(statearr_32027_32057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (9))){
var inst_31978 = (state_32014[(8)]);
var inst_31992 = cljs.core.vec.call(null,inst_31978);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32014__$1,(11),out,inst_31992);
} else {
if((state_val_32015 === (5))){
var inst_31979 = (state_32014[(7)]);
var inst_31982 = (state_32014[(9)]);
var inst_31987 = (state_32014[(11)]);
var inst_31978 = (state_32014[(8)]);
var inst_31986 = (inst_31978[inst_31979] = inst_31982);
var inst_31987__$1 = (inst_31979 + (1));
var inst_31988 = (inst_31987__$1 < n);
var state_32014__$1 = (function (){var statearr_32028 = state_32014;
(statearr_32028[(12)] = inst_31986);

(statearr_32028[(11)] = inst_31987__$1);

return statearr_32028;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32029_32058 = state_32014__$1;
(statearr_32029_32058[(1)] = (8));

} else {
var statearr_32030_32059 = state_32014__$1;
(statearr_32030_32059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (14))){
var inst_32007 = (state_32014[(2)]);
var inst_32008 = cljs.core.async.close_BANG_.call(null,out);
var state_32014__$1 = (function (){var statearr_32032 = state_32014;
(statearr_32032[(13)] = inst_32007);

return statearr_32032;
})();
var statearr_32033_32060 = state_32014__$1;
(statearr_32033_32060[(2)] = inst_32008);

(statearr_32033_32060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (10))){
var inst_31998 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32034_32061 = state_32014__$1;
(statearr_32034_32061[(2)] = inst_31998);

(statearr_32034_32061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (8))){
var inst_31987 = (state_32014[(11)]);
var inst_31978 = (state_32014[(8)]);
var tmp32031 = inst_31978;
var inst_31978__$1 = tmp32031;
var inst_31979 = inst_31987;
var state_32014__$1 = (function (){var statearr_32035 = state_32014;
(statearr_32035[(7)] = inst_31979);

(statearr_32035[(8)] = inst_31978__$1);

return statearr_32035;
})();
var statearr_32036_32062 = state_32014__$1;
(statearr_32036_32062[(2)] = null);

(statearr_32036_32062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___32048,out))
;
return ((function (switch__29254__auto__,c__29366__auto___32048,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_32040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32040[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_32040[(1)] = (1));

return statearr_32040;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_32014){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_32014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e32041){if((e32041 instanceof Object)){
var ex__29258__auto__ = e32041;
var statearr_32042_32063 = state_32014;
(statearr_32042_32063[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32064 = state_32014;
state_32014 = G__32064;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_32014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_32014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___32048,out))
})();
var state__29368__auto__ = (function (){var statearr_32043 = f__29367__auto__.call(null);
(statearr_32043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___32048);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___32048,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32065 = [];
var len__26207__auto___32139 = arguments.length;
var i__26208__auto___32140 = (0);
while(true){
if((i__26208__auto___32140 < len__26207__auto___32139)){
args32065.push((arguments[i__26208__auto___32140]));

var G__32141 = (i__26208__auto___32140 + (1));
i__26208__auto___32140 = G__32141;
continue;
} else {
}
break;
}

var G__32067 = args32065.length;
switch (G__32067) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32065.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29366__auto___32143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___32143,out){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___32143,out){
return (function (state_32109){
var state_val_32110 = (state_32109[(1)]);
if((state_val_32110 === (7))){
var inst_32105 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32111_32144 = state_32109__$1;
(statearr_32111_32144[(2)] = inst_32105);

(statearr_32111_32144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (1))){
var inst_32068 = [];
var inst_32069 = inst_32068;
var inst_32070 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32109__$1 = (function (){var statearr_32112 = state_32109;
(statearr_32112[(7)] = inst_32070);

(statearr_32112[(8)] = inst_32069);

return statearr_32112;
})();
var statearr_32113_32145 = state_32109__$1;
(statearr_32113_32145[(2)] = null);

(statearr_32113_32145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (4))){
var inst_32073 = (state_32109[(9)]);
var inst_32073__$1 = (state_32109[(2)]);
var inst_32074 = (inst_32073__$1 == null);
var inst_32075 = cljs.core.not.call(null,inst_32074);
var state_32109__$1 = (function (){var statearr_32114 = state_32109;
(statearr_32114[(9)] = inst_32073__$1);

return statearr_32114;
})();
if(inst_32075){
var statearr_32115_32146 = state_32109__$1;
(statearr_32115_32146[(1)] = (5));

} else {
var statearr_32116_32147 = state_32109__$1;
(statearr_32116_32147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (15))){
var inst_32099 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32117_32148 = state_32109__$1;
(statearr_32117_32148[(2)] = inst_32099);

(statearr_32117_32148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (13))){
var state_32109__$1 = state_32109;
var statearr_32118_32149 = state_32109__$1;
(statearr_32118_32149[(2)] = null);

(statearr_32118_32149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (6))){
var inst_32069 = (state_32109[(8)]);
var inst_32094 = inst_32069.length;
var inst_32095 = (inst_32094 > (0));
var state_32109__$1 = state_32109;
if(cljs.core.truth_(inst_32095)){
var statearr_32119_32150 = state_32109__$1;
(statearr_32119_32150[(1)] = (12));

} else {
var statearr_32120_32151 = state_32109__$1;
(statearr_32120_32151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (3))){
var inst_32107 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32109__$1,inst_32107);
} else {
if((state_val_32110 === (12))){
var inst_32069 = (state_32109[(8)]);
var inst_32097 = cljs.core.vec.call(null,inst_32069);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32109__$1,(15),out,inst_32097);
} else {
if((state_val_32110 === (2))){
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32109__$1,(4),ch);
} else {
if((state_val_32110 === (11))){
var inst_32073 = (state_32109[(9)]);
var inst_32077 = (state_32109[(10)]);
var inst_32087 = (state_32109[(2)]);
var inst_32088 = [];
var inst_32089 = inst_32088.push(inst_32073);
var inst_32069 = inst_32088;
var inst_32070 = inst_32077;
var state_32109__$1 = (function (){var statearr_32121 = state_32109;
(statearr_32121[(7)] = inst_32070);

(statearr_32121[(8)] = inst_32069);

(statearr_32121[(11)] = inst_32089);

(statearr_32121[(12)] = inst_32087);

return statearr_32121;
})();
var statearr_32122_32152 = state_32109__$1;
(statearr_32122_32152[(2)] = null);

(statearr_32122_32152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (9))){
var inst_32069 = (state_32109[(8)]);
var inst_32085 = cljs.core.vec.call(null,inst_32069);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32109__$1,(11),out,inst_32085);
} else {
if((state_val_32110 === (5))){
var inst_32070 = (state_32109[(7)]);
var inst_32073 = (state_32109[(9)]);
var inst_32077 = (state_32109[(10)]);
var inst_32077__$1 = f.call(null,inst_32073);
var inst_32078 = cljs.core._EQ_.call(null,inst_32077__$1,inst_32070);
var inst_32079 = cljs.core.keyword_identical_QMARK_.call(null,inst_32070,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32080 = (inst_32078) || (inst_32079);
var state_32109__$1 = (function (){var statearr_32123 = state_32109;
(statearr_32123[(10)] = inst_32077__$1);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32124_32153 = state_32109__$1;
(statearr_32124_32153[(1)] = (8));

} else {
var statearr_32125_32154 = state_32109__$1;
(statearr_32125_32154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (14))){
var inst_32102 = (state_32109[(2)]);
var inst_32103 = cljs.core.async.close_BANG_.call(null,out);
var state_32109__$1 = (function (){var statearr_32127 = state_32109;
(statearr_32127[(13)] = inst_32102);

return statearr_32127;
})();
var statearr_32128_32155 = state_32109__$1;
(statearr_32128_32155[(2)] = inst_32103);

(statearr_32128_32155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (10))){
var inst_32092 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32129_32156 = state_32109__$1;
(statearr_32129_32156[(2)] = inst_32092);

(statearr_32129_32156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (8))){
var inst_32069 = (state_32109[(8)]);
var inst_32073 = (state_32109[(9)]);
var inst_32077 = (state_32109[(10)]);
var inst_32082 = inst_32069.push(inst_32073);
var tmp32126 = inst_32069;
var inst_32069__$1 = tmp32126;
var inst_32070 = inst_32077;
var state_32109__$1 = (function (){var statearr_32130 = state_32109;
(statearr_32130[(7)] = inst_32070);

(statearr_32130[(14)] = inst_32082);

(statearr_32130[(8)] = inst_32069__$1);

return statearr_32130;
})();
var statearr_32131_32157 = state_32109__$1;
(statearr_32131_32157[(2)] = null);

(statearr_32131_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___32143,out))
;
return ((function (switch__29254__auto__,c__29366__auto___32143,out){
return (function() {
var cljs$core$async$state_machine__29255__auto__ = null;
var cljs$core$async$state_machine__29255__auto____0 = (function (){
var statearr_32135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32135[(0)] = cljs$core$async$state_machine__29255__auto__);

(statearr_32135[(1)] = (1));

return statearr_32135;
});
var cljs$core$async$state_machine__29255__auto____1 = (function (state_32109){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_32109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e32136){if((e32136 instanceof Object)){
var ex__29258__auto__ = e32136;
var statearr_32137_32158 = state_32109;
(statearr_32137_32158[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32159 = state_32109;
state_32109 = G__32159;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
cljs$core$async$state_machine__29255__auto__ = function(state_32109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29255__auto____1.call(this,state_32109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29255__auto____0;
cljs$core$async$state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29255__auto____1;
return cljs$core$async$state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___32143,out))
})();
var state__29368__auto__ = (function (){var statearr_32138 = f__29367__auto__.call(null);
(statearr_32138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___32143);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___32143,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1495401528751