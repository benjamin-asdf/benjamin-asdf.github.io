goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43373 = arguments.length;
switch (G__43373) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43374 = (function (f,blockable,meta43375){
this.f = f;
this.blockable = blockable;
this.meta43375 = meta43375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43376,meta43375__$1){
var self__ = this;
var _43376__$1 = this;
return (new cljs.core.async.t_cljs$core$async43374(self__.f,self__.blockable,meta43375__$1));
}));

(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43376){
var self__ = this;
var _43376__$1 = this;
return self__.meta43375;
}));

(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43375","meta43375",-953543336,null)], null);
}));

(cljs.core.async.t_cljs$core$async43374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43374");

(cljs.core.async.t_cljs$core$async43374.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43374.
 */
cljs.core.async.__GT_t_cljs$core$async43374 = (function cljs$core$async$__GT_t_cljs$core$async43374(f__$1,blockable__$1,meta43375){
return (new cljs.core.async.t_cljs$core$async43374(f__$1,blockable__$1,meta43375));
});

}

return (new cljs.core.async.t_cljs$core$async43374(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__43381 = arguments.length;
switch (G__43381) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43385 = arguments.length;
switch (G__43385) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__43388 = arguments.length;
switch (G__43388) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45480 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45480) : fn1.call(null,val_45480));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45480) : fn1.call(null,val_45480));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43390 = arguments.length;
switch (G__43390) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___45482 = n;
var x_45483 = (0);
while(true){
if((x_45483 < n__4741__auto___45482)){
(a[x_45483] = x_45483);

var G__45484 = (x_45483 + (1));
x_45483 = G__45484;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43435 = (function (flag,meta43436){
this.flag = flag;
this.meta43436 = meta43436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43437,meta43436__$1){
var self__ = this;
var _43437__$1 = this;
return (new cljs.core.async.t_cljs$core$async43435(self__.flag,meta43436__$1));
}));

(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43437){
var self__ = this;
var _43437__$1 = this;
return self__.meta43436;
}));

(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43436","meta43436",60373275,null)], null);
}));

(cljs.core.async.t_cljs$core$async43435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43435");

(cljs.core.async.t_cljs$core$async43435.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43435.
 */
cljs.core.async.__GT_t_cljs$core$async43435 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43435(flag__$1,meta43436){
return (new cljs.core.async.t_cljs$core$async43435(flag__$1,meta43436));
});

}

return (new cljs.core.async.t_cljs$core$async43435(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43463 = (function (flag,cb,meta43464){
this.flag = flag;
this.cb = cb;
this.meta43464 = meta43464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43465,meta43464__$1){
var self__ = this;
var _43465__$1 = this;
return (new cljs.core.async.t_cljs$core$async43463(self__.flag,self__.cb,meta43464__$1));
}));

(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43465){
var self__ = this;
var _43465__$1 = this;
return self__.meta43464;
}));

(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43464","meta43464",1950487186,null)], null);
}));

(cljs.core.async.t_cljs$core$async43463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43463");

(cljs.core.async.t_cljs$core$async43463.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43463.
 */
cljs.core.async.__GT_t_cljs$core$async43463 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43463(flag__$1,cb__$1,meta43464){
return (new cljs.core.async.t_cljs$core$async43463(flag__$1,cb__$1,meta43464));
});

}

return (new cljs.core.async.t_cljs$core$async43463(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43522_SHARP_){
var G__43537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43522_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43537) : fret.call(null,G__43537));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43523_SHARP_){
var G__43538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43523_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43538) : fret.call(null,G__43538));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45485 = (i + (1));
i = G__45485;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___45488 = arguments.length;
var i__4865__auto___45489 = (0);
while(true){
if((i__4865__auto___45489 < len__4864__auto___45488)){
args__4870__auto__.push((arguments[i__4865__auto___45489]));

var G__45490 = (i__4865__auto___45489 + (1));
i__4865__auto___45489 = G__45490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43568){
var map__43573 = p__43568;
var map__43573__$1 = cljs.core.__destructure_map(map__43573);
var opts = map__43573__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43554){
var G__43555 = cljs.core.first(seq43554);
var seq43554__$1 = cljs.core.next(seq43554);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43555,seq43554__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__43584 = arguments.length;
switch (G__43584) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43292__auto___45492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_43621){
var state_val_43622 = (state_43621[(1)]);
if((state_val_43622 === (7))){
var inst_43616 = (state_43621[(2)]);
var state_43621__$1 = state_43621;
var statearr_43631_45493 = state_43621__$1;
(statearr_43631_45493[(2)] = inst_43616);

(statearr_43631_45493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (1))){
var state_43621__$1 = state_43621;
var statearr_43633_45494 = state_43621__$1;
(statearr_43633_45494[(2)] = null);

(statearr_43633_45494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (4))){
var inst_43597 = (state_43621[(7)]);
var inst_43597__$1 = (state_43621[(2)]);
var inst_43599 = (inst_43597__$1 == null);
var state_43621__$1 = (function (){var statearr_43650 = state_43621;
(statearr_43650[(7)] = inst_43597__$1);

return statearr_43650;
})();
if(cljs.core.truth_(inst_43599)){
var statearr_43660_45495 = state_43621__$1;
(statearr_43660_45495[(1)] = (5));

} else {
var statearr_43661_45496 = state_43621__$1;
(statearr_43661_45496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (13))){
var state_43621__$1 = state_43621;
var statearr_43665_45497 = state_43621__$1;
(statearr_43665_45497[(2)] = null);

(statearr_43665_45497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (6))){
var inst_43597 = (state_43621[(7)]);
var state_43621__$1 = state_43621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43621__$1,(11),to,inst_43597);
} else {
if((state_val_43622 === (3))){
var inst_43618 = (state_43621[(2)]);
var state_43621__$1 = state_43621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43621__$1,inst_43618);
} else {
if((state_val_43622 === (12))){
var state_43621__$1 = state_43621;
var statearr_43670_45498 = state_43621__$1;
(statearr_43670_45498[(2)] = null);

(statearr_43670_45498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (2))){
var state_43621__$1 = state_43621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43621__$1,(4),from);
} else {
if((state_val_43622 === (11))){
var inst_43608 = (state_43621[(2)]);
var state_43621__$1 = state_43621;
if(cljs.core.truth_(inst_43608)){
var statearr_43674_45499 = state_43621__$1;
(statearr_43674_45499[(1)] = (12));

} else {
var statearr_43675_45500 = state_43621__$1;
(statearr_43675_45500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (9))){
var state_43621__$1 = state_43621;
var statearr_43677_45501 = state_43621__$1;
(statearr_43677_45501[(2)] = null);

(statearr_43677_45501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (5))){
var state_43621__$1 = state_43621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43679_45502 = state_43621__$1;
(statearr_43679_45502[(1)] = (8));

} else {
var statearr_43680_45503 = state_43621__$1;
(statearr_43680_45503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (14))){
var inst_43614 = (state_43621[(2)]);
var state_43621__$1 = state_43621;
var statearr_43681_45504 = state_43621__$1;
(statearr_43681_45504[(2)] = inst_43614);

(statearr_43681_45504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (10))){
var inst_43605 = (state_43621[(2)]);
var state_43621__$1 = state_43621;
var statearr_43682_45505 = state_43621__$1;
(statearr_43682_45505[(2)] = inst_43605);

(statearr_43682_45505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43622 === (8))){
var inst_43602 = cljs.core.async.close_BANG_(to);
var state_43621__$1 = state_43621;
var statearr_43695_45506 = state_43621__$1;
(statearr_43695_45506[(2)] = inst_43602);

(statearr_43695_45506[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_43705 = [null,null,null,null,null,null,null,null];
(statearr_43705[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_43705[(1)] = (1));

return statearr_43705;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_43621){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43621);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e43707){var ex__43129__auto__ = e43707;
var statearr_43708_45507 = state_43621;
(statearr_43708_45507[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43621[(4)]))){
var statearr_43709_45508 = state_43621;
(statearr_43709_45508[(1)] = cljs.core.first((state_43621[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45509 = state_43621;
state_43621 = G__45509;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_43621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_43621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43712 = f__43293__auto__();
(statearr_43712[(6)] = c__43292__auto___45492);

return statearr_43712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43718){
var vec__43719 = p__43718;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43719,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43719,(1),null);
var job = vec__43719;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43292__auto___45510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_43730){
var state_val_43731 = (state_43730[(1)]);
if((state_val_43731 === (1))){
var state_43730__$1 = state_43730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43730__$1,(2),res,v);
} else {
if((state_val_43731 === (2))){
var inst_43727 = (state_43730[(2)]);
var inst_43728 = cljs.core.async.close_BANG_(res);
var state_43730__$1 = (function (){var statearr_43732 = state_43730;
(statearr_43732[(7)] = inst_43727);

return statearr_43732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43730__$1,inst_43728);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_43743 = [null,null,null,null,null,null,null,null];
(statearr_43743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__);

(statearr_43743[(1)] = (1));

return statearr_43743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1 = (function (state_43730){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43730);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e43749){var ex__43129__auto__ = e43749;
var statearr_43750_45511 = state_43730;
(statearr_43750_45511[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43730[(4)]))){
var statearr_43751_45512 = state_43730;
(statearr_43751_45512[(1)] = cljs.core.first((state_43730[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45513 = state_43730;
state_43730 = G__45513;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = function(state_43730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1.call(this,state_43730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43756 = f__43293__auto__();
(statearr_43756[(6)] = c__43292__auto___45510);

return statearr_43756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43761){
var vec__43762 = p__43761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43762,(1),null);
var job = vec__43762;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___45515 = n;
var __45516 = (0);
while(true){
if((__45516 < n__4741__auto___45515)){
var G__43765_45517 = type;
var G__43765_45518__$1 = (((G__43765_45517 instanceof cljs.core.Keyword))?G__43765_45517.fqn:null);
switch (G__43765_45518__$1) {
case "compute":
var c__43292__auto___45520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45516,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = ((function (__45516,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function (state_43783){
var state_val_43784 = (state_43783[(1)]);
if((state_val_43784 === (1))){
var state_43783__$1 = state_43783;
var statearr_43785_45521 = state_43783__$1;
(statearr_43785_45521[(2)] = null);

(statearr_43785_45521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43784 === (2))){
var state_43783__$1 = state_43783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43783__$1,(4),jobs);
} else {
if((state_val_43784 === (3))){
var inst_43781 = (state_43783[(2)]);
var state_43783__$1 = state_43783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43783__$1,inst_43781);
} else {
if((state_val_43784 === (4))){
var inst_43773 = (state_43783[(2)]);
var inst_43774 = process(inst_43773);
var state_43783__$1 = state_43783;
if(cljs.core.truth_(inst_43774)){
var statearr_43786_45523 = state_43783__$1;
(statearr_43786_45523[(1)] = (5));

} else {
var statearr_43787_45524 = state_43783__$1;
(statearr_43787_45524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43784 === (5))){
var state_43783__$1 = state_43783;
var statearr_43788_45525 = state_43783__$1;
(statearr_43788_45525[(2)] = null);

(statearr_43788_45525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43784 === (6))){
var state_43783__$1 = state_43783;
var statearr_43789_45526 = state_43783__$1;
(statearr_43789_45526[(2)] = null);

(statearr_43789_45526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43784 === (7))){
var inst_43779 = (state_43783[(2)]);
var state_43783__$1 = state_43783;
var statearr_43790_45528 = state_43783__$1;
(statearr_43790_45528[(2)] = inst_43779);

(statearr_43790_45528[(1)] = (3));


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
});})(__45516,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
;
return ((function (__45516,switch__43125__auto__,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_43791 = [null,null,null,null,null,null,null];
(statearr_43791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__);

(statearr_43791[(1)] = (1));

return statearr_43791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1 = (function (state_43783){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43783);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e43794){var ex__43129__auto__ = e43794;
var statearr_43797_45529 = state_43783;
(statearr_43797_45529[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43783[(4)]))){
var statearr_43798_45530 = state_43783;
(statearr_43798_45530[(1)] = cljs.core.first((state_43783[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45531 = state_43783;
state_43783 = G__45531;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = function(state_43783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1.call(this,state_43783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__;
})()
;})(__45516,switch__43125__auto__,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
})();
var state__43294__auto__ = (function (){var statearr_43816 = f__43293__auto__();
(statearr_43816[(6)] = c__43292__auto___45520);

return statearr_43816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
});})(__45516,c__43292__auto___45520,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
);


break;
case "async":
var c__43292__auto___45532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45516,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = ((function (__45516,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function (state_43836){
var state_val_43837 = (state_43836[(1)]);
if((state_val_43837 === (1))){
var state_43836__$1 = state_43836;
var statearr_43852_45533 = state_43836__$1;
(statearr_43852_45533[(2)] = null);

(statearr_43852_45533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43837 === (2))){
var state_43836__$1 = state_43836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43836__$1,(4),jobs);
} else {
if((state_val_43837 === (3))){
var inst_43833 = (state_43836[(2)]);
var state_43836__$1 = state_43836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43836__$1,inst_43833);
} else {
if((state_val_43837 === (4))){
var inst_43825 = (state_43836[(2)]);
var inst_43826 = async(inst_43825);
var state_43836__$1 = state_43836;
if(cljs.core.truth_(inst_43826)){
var statearr_43870_45535 = state_43836__$1;
(statearr_43870_45535[(1)] = (5));

} else {
var statearr_43871_45536 = state_43836__$1;
(statearr_43871_45536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43837 === (5))){
var state_43836__$1 = state_43836;
var statearr_43872_45537 = state_43836__$1;
(statearr_43872_45537[(2)] = null);

(statearr_43872_45537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43837 === (6))){
var state_43836__$1 = state_43836;
var statearr_43877_45539 = state_43836__$1;
(statearr_43877_45539[(2)] = null);

(statearr_43877_45539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43837 === (7))){
var inst_43831 = (state_43836[(2)]);
var state_43836__$1 = state_43836;
var statearr_43878_45540 = state_43836__$1;
(statearr_43878_45540[(2)] = inst_43831);

(statearr_43878_45540[(1)] = (3));


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
});})(__45516,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
;
return ((function (__45516,switch__43125__auto__,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_43881 = [null,null,null,null,null,null,null];
(statearr_43881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__);

(statearr_43881[(1)] = (1));

return statearr_43881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1 = (function (state_43836){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43836);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e43886){var ex__43129__auto__ = e43886;
var statearr_43887_45541 = state_43836;
(statearr_43887_45541[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43836[(4)]))){
var statearr_43892_45542 = state_43836;
(statearr_43892_45542[(1)] = cljs.core.first((state_43836[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45543 = state_43836;
state_43836 = G__45543;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = function(state_43836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1.call(this,state_43836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__;
})()
;})(__45516,switch__43125__auto__,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
})();
var state__43294__auto__ = (function (){var statearr_43899 = f__43293__auto__();
(statearr_43899[(6)] = c__43292__auto___45532);

return statearr_43899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
});})(__45516,c__43292__auto___45532,G__43765_45517,G__43765_45518__$1,n__4741__auto___45515,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43765_45518__$1)].join('')));

}

var G__45544 = (__45516 + (1));
__45516 = G__45544;
continue;
} else {
}
break;
}

var c__43292__auto___45545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_43927){
var state_val_43928 = (state_43927[(1)]);
if((state_val_43928 === (7))){
var inst_43920 = (state_43927[(2)]);
var state_43927__$1 = state_43927;
var statearr_43930_45547 = state_43927__$1;
(statearr_43930_45547[(2)] = inst_43920);

(statearr_43930_45547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (1))){
var state_43927__$1 = state_43927;
var statearr_43931_45548 = state_43927__$1;
(statearr_43931_45548[(2)] = null);

(statearr_43931_45548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (4))){
var inst_43902 = (state_43927[(7)]);
var inst_43902__$1 = (state_43927[(2)]);
var inst_43905 = (inst_43902__$1 == null);
var state_43927__$1 = (function (){var statearr_43932 = state_43927;
(statearr_43932[(7)] = inst_43902__$1);

return statearr_43932;
})();
if(cljs.core.truth_(inst_43905)){
var statearr_43933_45550 = state_43927__$1;
(statearr_43933_45550[(1)] = (5));

} else {
var statearr_43934_45551 = state_43927__$1;
(statearr_43934_45551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (6))){
var inst_43909 = (state_43927[(8)]);
var inst_43902 = (state_43927[(7)]);
var inst_43909__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43912 = [inst_43902,inst_43909__$1];
var inst_43913 = (new cljs.core.PersistentVector(null,2,(5),inst_43911,inst_43912,null));
var state_43927__$1 = (function (){var statearr_43936 = state_43927;
(statearr_43936[(8)] = inst_43909__$1);

return statearr_43936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43927__$1,(8),jobs,inst_43913);
} else {
if((state_val_43928 === (3))){
var inst_43922 = (state_43927[(2)]);
var state_43927__$1 = state_43927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43927__$1,inst_43922);
} else {
if((state_val_43928 === (2))){
var state_43927__$1 = state_43927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43927__$1,(4),from);
} else {
if((state_val_43928 === (9))){
var inst_43917 = (state_43927[(2)]);
var state_43927__$1 = (function (){var statearr_43937 = state_43927;
(statearr_43937[(9)] = inst_43917);

return statearr_43937;
})();
var statearr_43938_45552 = state_43927__$1;
(statearr_43938_45552[(2)] = null);

(statearr_43938_45552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (5))){
var inst_43907 = cljs.core.async.close_BANG_(jobs);
var state_43927__$1 = state_43927;
var statearr_43939_45553 = state_43927__$1;
(statearr_43939_45553[(2)] = inst_43907);

(statearr_43939_45553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (8))){
var inst_43909 = (state_43927[(8)]);
var inst_43915 = (state_43927[(2)]);
var state_43927__$1 = (function (){var statearr_43940 = state_43927;
(statearr_43940[(10)] = inst_43915);

return statearr_43940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43927__$1,(9),results,inst_43909);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_43941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__);

(statearr_43941[(1)] = (1));

return statearr_43941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1 = (function (state_43927){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43927);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e43943){var ex__43129__auto__ = e43943;
var statearr_43944_45555 = state_43927;
(statearr_43944_45555[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43927[(4)]))){
var statearr_43949_45556 = state_43927;
(statearr_43949_45556[(1)] = cljs.core.first((state_43927[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45558 = state_43927;
state_43927 = G__45558;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = function(state_43927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1.call(this,state_43927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_43950 = f__43293__auto__();
(statearr_43950[(6)] = c__43292__auto___45545);

return statearr_43950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_43997){
var state_val_43998 = (state_43997[(1)]);
if((state_val_43998 === (7))){
var inst_43993 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
var statearr_44001_45559 = state_43997__$1;
(statearr_44001_45559[(2)] = inst_43993);

(statearr_44001_45559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (20))){
var state_43997__$1 = state_43997;
var statearr_44002_45560 = state_43997__$1;
(statearr_44002_45560[(2)] = null);

(statearr_44002_45560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (1))){
var state_43997__$1 = state_43997;
var statearr_44005_45561 = state_43997__$1;
(statearr_44005_45561[(2)] = null);

(statearr_44005_45561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (4))){
var inst_43960 = (state_43997[(7)]);
var inst_43960__$1 = (state_43997[(2)]);
var inst_43961 = (inst_43960__$1 == null);
var state_43997__$1 = (function (){var statearr_44006 = state_43997;
(statearr_44006[(7)] = inst_43960__$1);

return statearr_44006;
})();
if(cljs.core.truth_(inst_43961)){
var statearr_44007_45562 = state_43997__$1;
(statearr_44007_45562[(1)] = (5));

} else {
var statearr_44008_45563 = state_43997__$1;
(statearr_44008_45563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (15))){
var inst_43973 = (state_43997[(8)]);
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43997__$1,(18),to,inst_43973);
} else {
if((state_val_43998 === (21))){
var inst_43988 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
var statearr_44009_45564 = state_43997__$1;
(statearr_44009_45564[(2)] = inst_43988);

(statearr_44009_45564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (13))){
var inst_43990 = (state_43997[(2)]);
var state_43997__$1 = (function (){var statearr_44010 = state_43997;
(statearr_44010[(9)] = inst_43990);

return statearr_44010;
})();
var statearr_44011_45565 = state_43997__$1;
(statearr_44011_45565[(2)] = null);

(statearr_44011_45565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (6))){
var inst_43960 = (state_43997[(7)]);
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43997__$1,(11),inst_43960);
} else {
if((state_val_43998 === (17))){
var inst_43982 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
if(cljs.core.truth_(inst_43982)){
var statearr_44012_45566 = state_43997__$1;
(statearr_44012_45566[(1)] = (19));

} else {
var statearr_44013_45567 = state_43997__$1;
(statearr_44013_45567[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (3))){
var inst_43995 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43997__$1,inst_43995);
} else {
if((state_val_43998 === (12))){
var inst_43970 = (state_43997[(10)]);
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43997__$1,(14),inst_43970);
} else {
if((state_val_43998 === (2))){
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43997__$1,(4),results);
} else {
if((state_val_43998 === (19))){
var state_43997__$1 = state_43997;
var statearr_44014_45568 = state_43997__$1;
(statearr_44014_45568[(2)] = null);

(statearr_44014_45568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (11))){
var inst_43970 = (state_43997[(2)]);
var state_43997__$1 = (function (){var statearr_44015 = state_43997;
(statearr_44015[(10)] = inst_43970);

return statearr_44015;
})();
var statearr_44016_45569 = state_43997__$1;
(statearr_44016_45569[(2)] = null);

(statearr_44016_45569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (9))){
var state_43997__$1 = state_43997;
var statearr_44018_45570 = state_43997__$1;
(statearr_44018_45570[(2)] = null);

(statearr_44018_45570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (5))){
var state_43997__$1 = state_43997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44019_45571 = state_43997__$1;
(statearr_44019_45571[(1)] = (8));

} else {
var statearr_44020_45573 = state_43997__$1;
(statearr_44020_45573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (14))){
var inst_43975 = (state_43997[(11)]);
var inst_43973 = (state_43997[(8)]);
var inst_43973__$1 = (state_43997[(2)]);
var inst_43974 = (inst_43973__$1 == null);
var inst_43975__$1 = cljs.core.not(inst_43974);
var state_43997__$1 = (function (){var statearr_44021 = state_43997;
(statearr_44021[(11)] = inst_43975__$1);

(statearr_44021[(8)] = inst_43973__$1);

return statearr_44021;
})();
if(inst_43975__$1){
var statearr_44022_45575 = state_43997__$1;
(statearr_44022_45575[(1)] = (15));

} else {
var statearr_44023_45576 = state_43997__$1;
(statearr_44023_45576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (16))){
var inst_43975 = (state_43997[(11)]);
var state_43997__$1 = state_43997;
var statearr_44025_45577 = state_43997__$1;
(statearr_44025_45577[(2)] = inst_43975);

(statearr_44025_45577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (10))){
var inst_43967 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
var statearr_44026_45578 = state_43997__$1;
(statearr_44026_45578[(2)] = inst_43967);

(statearr_44026_45578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (18))){
var inst_43979 = (state_43997[(2)]);
var state_43997__$1 = state_43997;
var statearr_44027_45579 = state_43997__$1;
(statearr_44027_45579[(2)] = inst_43979);

(statearr_44027_45579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43998 === (8))){
var inst_43964 = cljs.core.async.close_BANG_(to);
var state_43997__$1 = state_43997;
var statearr_44028_45580 = state_43997__$1;
(statearr_44028_45580[(2)] = inst_43964);

(statearr_44028_45580[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_44029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__);

(statearr_44029[(1)] = (1));

return statearr_44029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1 = (function (state_43997){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_43997);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44032){var ex__43129__auto__ = e44032;
var statearr_44033_45581 = state_43997;
(statearr_44033_45581[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_43997[(4)]))){
var statearr_44034_45582 = state_43997;
(statearr_44034_45582[(1)] = cljs.core.first((state_43997[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45583 = state_43997;
state_43997 = G__45583;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__ = function(state_43997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1.call(this,state_43997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44037 = f__43293__auto__();
(statearr_44037[(6)] = c__43292__auto__);

return statearr_44037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
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
var G__44041 = arguments.length;
switch (G__44041) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__44050 = arguments.length;
switch (G__44050) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__44059 = arguments.length;
switch (G__44059) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43292__auto___45589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44088){
var state_val_44089 = (state_44088[(1)]);
if((state_val_44089 === (7))){
var inst_44083 = (state_44088[(2)]);
var state_44088__$1 = state_44088;
var statearr_44091_45590 = state_44088__$1;
(statearr_44091_45590[(2)] = inst_44083);

(statearr_44091_45590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (1))){
var state_44088__$1 = state_44088;
var statearr_44094_45591 = state_44088__$1;
(statearr_44094_45591[(2)] = null);

(statearr_44094_45591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (4))){
var inst_44064 = (state_44088[(7)]);
var inst_44064__$1 = (state_44088[(2)]);
var inst_44065 = (inst_44064__$1 == null);
var state_44088__$1 = (function (){var statearr_44095 = state_44088;
(statearr_44095[(7)] = inst_44064__$1);

return statearr_44095;
})();
if(cljs.core.truth_(inst_44065)){
var statearr_44096_45592 = state_44088__$1;
(statearr_44096_45592[(1)] = (5));

} else {
var statearr_44100_45593 = state_44088__$1;
(statearr_44100_45593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (13))){
var state_44088__$1 = state_44088;
var statearr_44102_45595 = state_44088__$1;
(statearr_44102_45595[(2)] = null);

(statearr_44102_45595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (6))){
var inst_44064 = (state_44088[(7)]);
var inst_44070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44064) : p.call(null,inst_44064));
var state_44088__$1 = state_44088;
if(cljs.core.truth_(inst_44070)){
var statearr_44103_45596 = state_44088__$1;
(statearr_44103_45596[(1)] = (9));

} else {
var statearr_44104_45597 = state_44088__$1;
(statearr_44104_45597[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (3))){
var inst_44085 = (state_44088[(2)]);
var state_44088__$1 = state_44088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44088__$1,inst_44085);
} else {
if((state_val_44089 === (12))){
var state_44088__$1 = state_44088;
var statearr_44105_45598 = state_44088__$1;
(statearr_44105_45598[(2)] = null);

(statearr_44105_45598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (2))){
var state_44088__$1 = state_44088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44088__$1,(4),ch);
} else {
if((state_val_44089 === (11))){
var inst_44064 = (state_44088[(7)]);
var inst_44074 = (state_44088[(2)]);
var state_44088__$1 = state_44088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44088__$1,(8),inst_44074,inst_44064);
} else {
if((state_val_44089 === (9))){
var state_44088__$1 = state_44088;
var statearr_44106_45599 = state_44088__$1;
(statearr_44106_45599[(2)] = tc);

(statearr_44106_45599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (5))){
var inst_44067 = cljs.core.async.close_BANG_(tc);
var inst_44068 = cljs.core.async.close_BANG_(fc);
var state_44088__$1 = (function (){var statearr_44107 = state_44088;
(statearr_44107[(8)] = inst_44067);

return statearr_44107;
})();
var statearr_44108_45600 = state_44088__$1;
(statearr_44108_45600[(2)] = inst_44068);

(statearr_44108_45600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (14))){
var inst_44081 = (state_44088[(2)]);
var state_44088__$1 = state_44088;
var statearr_44109_45601 = state_44088__$1;
(statearr_44109_45601[(2)] = inst_44081);

(statearr_44109_45601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (10))){
var state_44088__$1 = state_44088;
var statearr_44110_45602 = state_44088__$1;
(statearr_44110_45602[(2)] = fc);

(statearr_44110_45602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44089 === (8))){
var inst_44076 = (state_44088[(2)]);
var state_44088__$1 = state_44088;
if(cljs.core.truth_(inst_44076)){
var statearr_44111_45603 = state_44088__$1;
(statearr_44111_45603[(1)] = (12));

} else {
var statearr_44112_45604 = state_44088__$1;
(statearr_44112_45604[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_44114 = [null,null,null,null,null,null,null,null,null];
(statearr_44114[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_44114[(1)] = (1));

return statearr_44114;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_44088){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44088);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44117){var ex__43129__auto__ = e44117;
var statearr_44118_45605 = state_44088;
(statearr_44118_45605[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44088[(4)]))){
var statearr_44119_45610 = state_44088;
(statearr_44119_45610[(1)] = cljs.core.first((state_44088[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45611 = state_44088;
state_44088 = G__45611;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_44088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_44088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44120 = f__43293__auto__();
(statearr_44120[(6)] = c__43292__auto___45589);

return statearr_44120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44142){
var state_val_44143 = (state_44142[(1)]);
if((state_val_44143 === (7))){
var inst_44138 = (state_44142[(2)]);
var state_44142__$1 = state_44142;
var statearr_44144_45612 = state_44142__$1;
(statearr_44144_45612[(2)] = inst_44138);

(statearr_44144_45612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (1))){
var inst_44121 = init;
var inst_44122 = inst_44121;
var state_44142__$1 = (function (){var statearr_44145 = state_44142;
(statearr_44145[(7)] = inst_44122);

return statearr_44145;
})();
var statearr_44146_45613 = state_44142__$1;
(statearr_44146_45613[(2)] = null);

(statearr_44146_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (4))){
var inst_44125 = (state_44142[(8)]);
var inst_44125__$1 = (state_44142[(2)]);
var inst_44126 = (inst_44125__$1 == null);
var state_44142__$1 = (function (){var statearr_44149 = state_44142;
(statearr_44149[(8)] = inst_44125__$1);

return statearr_44149;
})();
if(cljs.core.truth_(inst_44126)){
var statearr_44151_45614 = state_44142__$1;
(statearr_44151_45614[(1)] = (5));

} else {
var statearr_44156_45615 = state_44142__$1;
(statearr_44156_45615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (6))){
var inst_44122 = (state_44142[(7)]);
var inst_44129 = (state_44142[(9)]);
var inst_44125 = (state_44142[(8)]);
var inst_44129__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44122,inst_44125) : f.call(null,inst_44122,inst_44125));
var inst_44130 = cljs.core.reduced_QMARK_(inst_44129__$1);
var state_44142__$1 = (function (){var statearr_44157 = state_44142;
(statearr_44157[(9)] = inst_44129__$1);

return statearr_44157;
})();
if(inst_44130){
var statearr_44159_45616 = state_44142__$1;
(statearr_44159_45616[(1)] = (8));

} else {
var statearr_44160_45617 = state_44142__$1;
(statearr_44160_45617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (3))){
var inst_44140 = (state_44142[(2)]);
var state_44142__$1 = state_44142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44142__$1,inst_44140);
} else {
if((state_val_44143 === (2))){
var state_44142__$1 = state_44142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44142__$1,(4),ch);
} else {
if((state_val_44143 === (9))){
var inst_44129 = (state_44142[(9)]);
var inst_44122 = inst_44129;
var state_44142__$1 = (function (){var statearr_44161 = state_44142;
(statearr_44161[(7)] = inst_44122);

return statearr_44161;
})();
var statearr_44162_45618 = state_44142__$1;
(statearr_44162_45618[(2)] = null);

(statearr_44162_45618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (5))){
var inst_44122 = (state_44142[(7)]);
var state_44142__$1 = state_44142;
var statearr_44163_45619 = state_44142__$1;
(statearr_44163_45619[(2)] = inst_44122);

(statearr_44163_45619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (10))){
var inst_44136 = (state_44142[(2)]);
var state_44142__$1 = state_44142;
var statearr_44164_45620 = state_44142__$1;
(statearr_44164_45620[(2)] = inst_44136);

(statearr_44164_45620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44143 === (8))){
var inst_44129 = (state_44142[(9)]);
var inst_44132 = cljs.core.deref(inst_44129);
var state_44142__$1 = state_44142;
var statearr_44165_45621 = state_44142__$1;
(statearr_44165_45621[(2)] = inst_44132);

(statearr_44165_45621[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43126__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43126__auto____0 = (function (){
var statearr_44167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44167[(0)] = cljs$core$async$reduce_$_state_machine__43126__auto__);

(statearr_44167[(1)] = (1));

return statearr_44167;
});
var cljs$core$async$reduce_$_state_machine__43126__auto____1 = (function (state_44142){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44142);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44169){var ex__43129__auto__ = e44169;
var statearr_44170_45622 = state_44142;
(statearr_44170_45622[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44142[(4)]))){
var statearr_44171_45623 = state_44142;
(statearr_44171_45623[(1)] = cljs.core.first((state_44142[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45624 = state_44142;
state_44142 = G__45624;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43126__auto__ = function(state_44142){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43126__auto____1.call(this,state_44142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43126__auto____0;
cljs$core$async$reduce_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43126__auto____1;
return cljs$core$async$reduce_$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44172 = f__43293__auto__();
(statearr_44172[(6)] = c__43292__auto__);

return statearr_44172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44182){
var state_val_44183 = (state_44182[(1)]);
if((state_val_44183 === (1))){
var inst_44177 = cljs.core.async.reduce(f__$1,init,ch);
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44182__$1,(2),inst_44177);
} else {
if((state_val_44183 === (2))){
var inst_44179 = (state_44182[(2)]);
var inst_44180 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44179) : f__$1.call(null,inst_44179));
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44182__$1,inst_44180);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43126__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43126__auto____0 = (function (){
var statearr_44186 = [null,null,null,null,null,null,null];
(statearr_44186[(0)] = cljs$core$async$transduce_$_state_machine__43126__auto__);

(statearr_44186[(1)] = (1));

return statearr_44186;
});
var cljs$core$async$transduce_$_state_machine__43126__auto____1 = (function (state_44182){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44182);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44189){var ex__43129__auto__ = e44189;
var statearr_44190_45627 = state_44182;
(statearr_44190_45627[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44182[(4)]))){
var statearr_44191_45628 = state_44182;
(statearr_44191_45628[(1)] = cljs.core.first((state_44182[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45629 = state_44182;
state_44182 = G__45629;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43126__auto__ = function(state_44182){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43126__auto____1.call(this,state_44182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43126__auto____0;
cljs$core$async$transduce_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43126__auto____1;
return cljs$core$async$transduce_$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44192 = f__43293__auto__();
(statearr_44192[(6)] = c__43292__auto__);

return statearr_44192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44198 = arguments.length;
switch (G__44198) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44227){
var state_val_44228 = (state_44227[(1)]);
if((state_val_44228 === (7))){
var inst_44209 = (state_44227[(2)]);
var state_44227__$1 = state_44227;
var statearr_44233_45631 = state_44227__$1;
(statearr_44233_45631[(2)] = inst_44209);

(statearr_44233_45631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (1))){
var inst_44203 = cljs.core.seq(coll);
var inst_44204 = inst_44203;
var state_44227__$1 = (function (){var statearr_44234 = state_44227;
(statearr_44234[(7)] = inst_44204);

return statearr_44234;
})();
var statearr_44235_45632 = state_44227__$1;
(statearr_44235_45632[(2)] = null);

(statearr_44235_45632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (4))){
var inst_44204 = (state_44227[(7)]);
var inst_44207 = cljs.core.first(inst_44204);
var state_44227__$1 = state_44227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44227__$1,(7),ch,inst_44207);
} else {
if((state_val_44228 === (13))){
var inst_44221 = (state_44227[(2)]);
var state_44227__$1 = state_44227;
var statearr_44237_45633 = state_44227__$1;
(statearr_44237_45633[(2)] = inst_44221);

(statearr_44237_45633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (6))){
var inst_44212 = (state_44227[(2)]);
var state_44227__$1 = state_44227;
if(cljs.core.truth_(inst_44212)){
var statearr_44238_45634 = state_44227__$1;
(statearr_44238_45634[(1)] = (8));

} else {
var statearr_44239_45635 = state_44227__$1;
(statearr_44239_45635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (3))){
var inst_44225 = (state_44227[(2)]);
var state_44227__$1 = state_44227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44227__$1,inst_44225);
} else {
if((state_val_44228 === (12))){
var state_44227__$1 = state_44227;
var statearr_44240_45636 = state_44227__$1;
(statearr_44240_45636[(2)] = null);

(statearr_44240_45636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (2))){
var inst_44204 = (state_44227[(7)]);
var state_44227__$1 = state_44227;
if(cljs.core.truth_(inst_44204)){
var statearr_44243_45637 = state_44227__$1;
(statearr_44243_45637[(1)] = (4));

} else {
var statearr_44244_45638 = state_44227__$1;
(statearr_44244_45638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (11))){
var inst_44218 = cljs.core.async.close_BANG_(ch);
var state_44227__$1 = state_44227;
var statearr_44247_45639 = state_44227__$1;
(statearr_44247_45639[(2)] = inst_44218);

(statearr_44247_45639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (9))){
var state_44227__$1 = state_44227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44248_45640 = state_44227__$1;
(statearr_44248_45640[(1)] = (11));

} else {
var statearr_44249_45641 = state_44227__$1;
(statearr_44249_45641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (5))){
var inst_44204 = (state_44227[(7)]);
var state_44227__$1 = state_44227;
var statearr_44252_45642 = state_44227__$1;
(statearr_44252_45642[(2)] = inst_44204);

(statearr_44252_45642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (10))){
var inst_44223 = (state_44227[(2)]);
var state_44227__$1 = state_44227;
var statearr_44253_45643 = state_44227__$1;
(statearr_44253_45643[(2)] = inst_44223);

(statearr_44253_45643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44228 === (8))){
var inst_44204 = (state_44227[(7)]);
var inst_44214 = cljs.core.next(inst_44204);
var inst_44204__$1 = inst_44214;
var state_44227__$1 = (function (){var statearr_44254 = state_44227;
(statearr_44254[(7)] = inst_44204__$1);

return statearr_44254;
})();
var statearr_44255_45648 = state_44227__$1;
(statearr_44255_45648[(2)] = null);

(statearr_44255_45648[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_44256 = [null,null,null,null,null,null,null,null];
(statearr_44256[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_44256[(1)] = (1));

return statearr_44256;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_44227){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44227);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44261){var ex__43129__auto__ = e44261;
var statearr_44262_45652 = state_44227;
(statearr_44262_45652[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44227[(4)]))){
var statearr_44263_45653 = state_44227;
(statearr_44263_45653[(1)] = cljs.core.first((state_44227[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45654 = state_44227;
state_44227 = G__45654;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_44227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_44227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44264 = f__43293__auto__();
(statearr_44264[(6)] = c__43292__auto__);

return statearr_44264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44268 = arguments.length;
switch (G__44268) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45659 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45659(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45663 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45663(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45664 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45664(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45668 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45668(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44299 = (function (ch,cs,meta44300){
this.ch = ch;
this.cs = cs;
this.meta44300 = meta44300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44301,meta44300__$1){
var self__ = this;
var _44301__$1 = this;
return (new cljs.core.async.t_cljs$core$async44299(self__.ch,self__.cs,meta44300__$1));
}));

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44301){
var self__ = this;
var _44301__$1 = this;
return self__.meta44300;
}));

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44299.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44300","meta44300",-1472338246,null)], null);
}));

(cljs.core.async.t_cljs$core$async44299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44299");

(cljs.core.async.t_cljs$core$async44299.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44299.
 */
cljs.core.async.__GT_t_cljs$core$async44299 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44299(ch__$1,cs__$1,meta44300){
return (new cljs.core.async.t_cljs$core$async44299(ch__$1,cs__$1,meta44300));
});

}

return (new cljs.core.async.t_cljs$core$async44299(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43292__auto___45676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44478){
var state_val_44483 = (state_44478[(1)]);
if((state_val_44483 === (7))){
var inst_44470 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44484_45677 = state_44478__$1;
(statearr_44484_45677[(2)] = inst_44470);

(statearr_44484_45677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (20))){
var inst_44366 = (state_44478[(7)]);
var inst_44380 = cljs.core.first(inst_44366);
var inst_44381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44380,(0),null);
var inst_44382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44380,(1),null);
var state_44478__$1 = (function (){var statearr_44485 = state_44478;
(statearr_44485[(8)] = inst_44381);

return statearr_44485;
})();
if(cljs.core.truth_(inst_44382)){
var statearr_44486_45681 = state_44478__$1;
(statearr_44486_45681[(1)] = (22));

} else {
var statearr_44487_45682 = state_44478__$1;
(statearr_44487_45682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (27))){
var inst_44420 = (state_44478[(9)]);
var inst_44329 = (state_44478[(10)]);
var inst_44413 = (state_44478[(11)]);
var inst_44415 = (state_44478[(12)]);
var inst_44420__$1 = cljs.core._nth(inst_44413,inst_44415);
var inst_44421 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44420__$1,inst_44329,done);
var state_44478__$1 = (function (){var statearr_44488 = state_44478;
(statearr_44488[(9)] = inst_44420__$1);

return statearr_44488;
})();
if(cljs.core.truth_(inst_44421)){
var statearr_44489_45683 = state_44478__$1;
(statearr_44489_45683[(1)] = (30));

} else {
var statearr_44490_45684 = state_44478__$1;
(statearr_44490_45684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (1))){
var state_44478__$1 = state_44478;
var statearr_44491_45685 = state_44478__$1;
(statearr_44491_45685[(2)] = null);

(statearr_44491_45685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (24))){
var inst_44366 = (state_44478[(7)]);
var inst_44390 = (state_44478[(2)]);
var inst_44391 = cljs.core.next(inst_44366);
var inst_44341 = inst_44391;
var inst_44342 = null;
var inst_44343 = (0);
var inst_44344 = (0);
var state_44478__$1 = (function (){var statearr_44492 = state_44478;
(statearr_44492[(13)] = inst_44343);

(statearr_44492[(14)] = inst_44341);

(statearr_44492[(15)] = inst_44342);

(statearr_44492[(16)] = inst_44390);

(statearr_44492[(17)] = inst_44344);

return statearr_44492;
})();
var statearr_44493_45689 = state_44478__$1;
(statearr_44493_45689[(2)] = null);

(statearr_44493_45689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (39))){
var state_44478__$1 = state_44478;
var statearr_44497_45690 = state_44478__$1;
(statearr_44497_45690[(2)] = null);

(statearr_44497_45690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (4))){
var inst_44329 = (state_44478[(10)]);
var inst_44329__$1 = (state_44478[(2)]);
var inst_44333 = (inst_44329__$1 == null);
var state_44478__$1 = (function (){var statearr_44498 = state_44478;
(statearr_44498[(10)] = inst_44329__$1);

return statearr_44498;
})();
if(cljs.core.truth_(inst_44333)){
var statearr_44499_45691 = state_44478__$1;
(statearr_44499_45691[(1)] = (5));

} else {
var statearr_44500_45692 = state_44478__$1;
(statearr_44500_45692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (15))){
var inst_44343 = (state_44478[(13)]);
var inst_44341 = (state_44478[(14)]);
var inst_44342 = (state_44478[(15)]);
var inst_44344 = (state_44478[(17)]);
var inst_44362 = (state_44478[(2)]);
var inst_44363 = (inst_44344 + (1));
var tmp44494 = inst_44343;
var tmp44495 = inst_44341;
var tmp44496 = inst_44342;
var inst_44341__$1 = tmp44495;
var inst_44342__$1 = tmp44496;
var inst_44343__$1 = tmp44494;
var inst_44344__$1 = inst_44363;
var state_44478__$1 = (function (){var statearr_44501 = state_44478;
(statearr_44501[(13)] = inst_44343__$1);

(statearr_44501[(18)] = inst_44362);

(statearr_44501[(14)] = inst_44341__$1);

(statearr_44501[(15)] = inst_44342__$1);

(statearr_44501[(17)] = inst_44344__$1);

return statearr_44501;
})();
var statearr_44502_45696 = state_44478__$1;
(statearr_44502_45696[(2)] = null);

(statearr_44502_45696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (21))){
var inst_44394 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44506_45697 = state_44478__$1;
(statearr_44506_45697[(2)] = inst_44394);

(statearr_44506_45697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (31))){
var inst_44420 = (state_44478[(9)]);
var inst_44424 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44420);
var state_44478__$1 = state_44478;
var statearr_44507_45698 = state_44478__$1;
(statearr_44507_45698[(2)] = inst_44424);

(statearr_44507_45698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (32))){
var inst_44412 = (state_44478[(19)]);
var inst_44414 = (state_44478[(20)]);
var inst_44413 = (state_44478[(11)]);
var inst_44415 = (state_44478[(12)]);
var inst_44426 = (state_44478[(2)]);
var inst_44427 = (inst_44415 + (1));
var tmp44503 = inst_44412;
var tmp44504 = inst_44414;
var tmp44505 = inst_44413;
var inst_44412__$1 = tmp44503;
var inst_44413__$1 = tmp44505;
var inst_44414__$1 = tmp44504;
var inst_44415__$1 = inst_44427;
var state_44478__$1 = (function (){var statearr_44508 = state_44478;
(statearr_44508[(21)] = inst_44426);

(statearr_44508[(19)] = inst_44412__$1);

(statearr_44508[(20)] = inst_44414__$1);

(statearr_44508[(11)] = inst_44413__$1);

(statearr_44508[(12)] = inst_44415__$1);

return statearr_44508;
})();
var statearr_44509_45699 = state_44478__$1;
(statearr_44509_45699[(2)] = null);

(statearr_44509_45699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (40))){
var inst_44439 = (state_44478[(22)]);
var inst_44443 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44439);
var state_44478__$1 = state_44478;
var statearr_44510_45700 = state_44478__$1;
(statearr_44510_45700[(2)] = inst_44443);

(statearr_44510_45700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (33))){
var inst_44430 = (state_44478[(23)]);
var inst_44432 = cljs.core.chunked_seq_QMARK_(inst_44430);
var state_44478__$1 = state_44478;
if(inst_44432){
var statearr_44511_45701 = state_44478__$1;
(statearr_44511_45701[(1)] = (36));

} else {
var statearr_44512_45702 = state_44478__$1;
(statearr_44512_45702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (13))){
var inst_44353 = (state_44478[(24)]);
var inst_44359 = cljs.core.async.close_BANG_(inst_44353);
var state_44478__$1 = state_44478;
var statearr_44513_45703 = state_44478__$1;
(statearr_44513_45703[(2)] = inst_44359);

(statearr_44513_45703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (22))){
var inst_44381 = (state_44478[(8)]);
var inst_44387 = cljs.core.async.close_BANG_(inst_44381);
var state_44478__$1 = state_44478;
var statearr_44514_45705 = state_44478__$1;
(statearr_44514_45705[(2)] = inst_44387);

(statearr_44514_45705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (36))){
var inst_44430 = (state_44478[(23)]);
var inst_44434 = cljs.core.chunk_first(inst_44430);
var inst_44435 = cljs.core.chunk_rest(inst_44430);
var inst_44436 = cljs.core.count(inst_44434);
var inst_44412 = inst_44435;
var inst_44413 = inst_44434;
var inst_44414 = inst_44436;
var inst_44415 = (0);
var state_44478__$1 = (function (){var statearr_44515 = state_44478;
(statearr_44515[(19)] = inst_44412);

(statearr_44515[(20)] = inst_44414);

(statearr_44515[(11)] = inst_44413);

(statearr_44515[(12)] = inst_44415);

return statearr_44515;
})();
var statearr_44516_45706 = state_44478__$1;
(statearr_44516_45706[(2)] = null);

(statearr_44516_45706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (41))){
var inst_44430 = (state_44478[(23)]);
var inst_44445 = (state_44478[(2)]);
var inst_44446 = cljs.core.next(inst_44430);
var inst_44412 = inst_44446;
var inst_44413 = null;
var inst_44414 = (0);
var inst_44415 = (0);
var state_44478__$1 = (function (){var statearr_44517 = state_44478;
(statearr_44517[(19)] = inst_44412);

(statearr_44517[(20)] = inst_44414);

(statearr_44517[(25)] = inst_44445);

(statearr_44517[(11)] = inst_44413);

(statearr_44517[(12)] = inst_44415);

return statearr_44517;
})();
var statearr_44518_45707 = state_44478__$1;
(statearr_44518_45707[(2)] = null);

(statearr_44518_45707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (43))){
var state_44478__$1 = state_44478;
var statearr_44519_45708 = state_44478__$1;
(statearr_44519_45708[(2)] = null);

(statearr_44519_45708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (29))){
var inst_44454 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44520_45709 = state_44478__$1;
(statearr_44520_45709[(2)] = inst_44454);

(statearr_44520_45709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (44))){
var inst_44467 = (state_44478[(2)]);
var state_44478__$1 = (function (){var statearr_44521 = state_44478;
(statearr_44521[(26)] = inst_44467);

return statearr_44521;
})();
var statearr_44522_45710 = state_44478__$1;
(statearr_44522_45710[(2)] = null);

(statearr_44522_45710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (6))){
var inst_44404 = (state_44478[(27)]);
var inst_44403 = cljs.core.deref(cs);
var inst_44404__$1 = cljs.core.keys(inst_44403);
var inst_44405 = cljs.core.count(inst_44404__$1);
var inst_44406 = cljs.core.reset_BANG_(dctr,inst_44405);
var inst_44411 = cljs.core.seq(inst_44404__$1);
var inst_44412 = inst_44411;
var inst_44413 = null;
var inst_44414 = (0);
var inst_44415 = (0);
var state_44478__$1 = (function (){var statearr_44523 = state_44478;
(statearr_44523[(19)] = inst_44412);

(statearr_44523[(28)] = inst_44406);

(statearr_44523[(20)] = inst_44414);

(statearr_44523[(27)] = inst_44404__$1);

(statearr_44523[(11)] = inst_44413);

(statearr_44523[(12)] = inst_44415);

return statearr_44523;
})();
var statearr_44524_45711 = state_44478__$1;
(statearr_44524_45711[(2)] = null);

(statearr_44524_45711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (28))){
var inst_44412 = (state_44478[(19)]);
var inst_44430 = (state_44478[(23)]);
var inst_44430__$1 = cljs.core.seq(inst_44412);
var state_44478__$1 = (function (){var statearr_44525 = state_44478;
(statearr_44525[(23)] = inst_44430__$1);

return statearr_44525;
})();
if(inst_44430__$1){
var statearr_44526_45712 = state_44478__$1;
(statearr_44526_45712[(1)] = (33));

} else {
var statearr_44527_45713 = state_44478__$1;
(statearr_44527_45713[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (25))){
var inst_44414 = (state_44478[(20)]);
var inst_44415 = (state_44478[(12)]);
var inst_44417 = (inst_44415 < inst_44414);
var inst_44418 = inst_44417;
var state_44478__$1 = state_44478;
if(cljs.core.truth_(inst_44418)){
var statearr_44528_45714 = state_44478__$1;
(statearr_44528_45714[(1)] = (27));

} else {
var statearr_44529_45715 = state_44478__$1;
(statearr_44529_45715[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (34))){
var state_44478__$1 = state_44478;
var statearr_44530_45716 = state_44478__$1;
(statearr_44530_45716[(2)] = null);

(statearr_44530_45716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (17))){
var state_44478__$1 = state_44478;
var statearr_44531_45717 = state_44478__$1;
(statearr_44531_45717[(2)] = null);

(statearr_44531_45717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (3))){
var inst_44472 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44478__$1,inst_44472);
} else {
if((state_val_44483 === (12))){
var inst_44399 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44532_45718 = state_44478__$1;
(statearr_44532_45718[(2)] = inst_44399);

(statearr_44532_45718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (2))){
var state_44478__$1 = state_44478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44478__$1,(4),ch);
} else {
if((state_val_44483 === (23))){
var state_44478__$1 = state_44478;
var statearr_44533_45719 = state_44478__$1;
(statearr_44533_45719[(2)] = null);

(statearr_44533_45719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (35))){
var inst_44452 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44534_45720 = state_44478__$1;
(statearr_44534_45720[(2)] = inst_44452);

(statearr_44534_45720[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (19))){
var inst_44366 = (state_44478[(7)]);
var inst_44370 = cljs.core.chunk_first(inst_44366);
var inst_44371 = cljs.core.chunk_rest(inst_44366);
var inst_44373 = cljs.core.count(inst_44370);
var inst_44341 = inst_44371;
var inst_44342 = inst_44370;
var inst_44343 = inst_44373;
var inst_44344 = (0);
var state_44478__$1 = (function (){var statearr_44537 = state_44478;
(statearr_44537[(13)] = inst_44343);

(statearr_44537[(14)] = inst_44341);

(statearr_44537[(15)] = inst_44342);

(statearr_44537[(17)] = inst_44344);

return statearr_44537;
})();
var statearr_44538_45721 = state_44478__$1;
(statearr_44538_45721[(2)] = null);

(statearr_44538_45721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (11))){
var inst_44341 = (state_44478[(14)]);
var inst_44366 = (state_44478[(7)]);
var inst_44366__$1 = cljs.core.seq(inst_44341);
var state_44478__$1 = (function (){var statearr_44539 = state_44478;
(statearr_44539[(7)] = inst_44366__$1);

return statearr_44539;
})();
if(inst_44366__$1){
var statearr_44540_45722 = state_44478__$1;
(statearr_44540_45722[(1)] = (16));

} else {
var statearr_44541_45723 = state_44478__$1;
(statearr_44541_45723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (9))){
var inst_44401 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44542_45724 = state_44478__$1;
(statearr_44542_45724[(2)] = inst_44401);

(statearr_44542_45724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (5))){
var inst_44339 = cljs.core.deref(cs);
var inst_44340 = cljs.core.seq(inst_44339);
var inst_44341 = inst_44340;
var inst_44342 = null;
var inst_44343 = (0);
var inst_44344 = (0);
var state_44478__$1 = (function (){var statearr_44545 = state_44478;
(statearr_44545[(13)] = inst_44343);

(statearr_44545[(14)] = inst_44341);

(statearr_44545[(15)] = inst_44342);

(statearr_44545[(17)] = inst_44344);

return statearr_44545;
})();
var statearr_44546_45725 = state_44478__$1;
(statearr_44546_45725[(2)] = null);

(statearr_44546_45725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (14))){
var state_44478__$1 = state_44478;
var statearr_44547_45726 = state_44478__$1;
(statearr_44547_45726[(2)] = null);

(statearr_44547_45726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (45))){
var inst_44464 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44549_45727 = state_44478__$1;
(statearr_44549_45727[(2)] = inst_44464);

(statearr_44549_45727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (26))){
var inst_44404 = (state_44478[(27)]);
var inst_44456 = (state_44478[(2)]);
var inst_44457 = cljs.core.seq(inst_44404);
var state_44478__$1 = (function (){var statearr_44550 = state_44478;
(statearr_44550[(29)] = inst_44456);

return statearr_44550;
})();
if(inst_44457){
var statearr_44551_45728 = state_44478__$1;
(statearr_44551_45728[(1)] = (42));

} else {
var statearr_44552_45729 = state_44478__$1;
(statearr_44552_45729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (16))){
var inst_44366 = (state_44478[(7)]);
var inst_44368 = cljs.core.chunked_seq_QMARK_(inst_44366);
var state_44478__$1 = state_44478;
if(inst_44368){
var statearr_44554_45730 = state_44478__$1;
(statearr_44554_45730[(1)] = (19));

} else {
var statearr_44555_45731 = state_44478__$1;
(statearr_44555_45731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (38))){
var inst_44449 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44556_45732 = state_44478__$1;
(statearr_44556_45732[(2)] = inst_44449);

(statearr_44556_45732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (30))){
var state_44478__$1 = state_44478;
var statearr_44557_45733 = state_44478__$1;
(statearr_44557_45733[(2)] = null);

(statearr_44557_45733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (10))){
var inst_44342 = (state_44478[(15)]);
var inst_44344 = (state_44478[(17)]);
var inst_44352 = cljs.core._nth(inst_44342,inst_44344);
var inst_44353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44352,(0),null);
var inst_44357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44352,(1),null);
var state_44478__$1 = (function (){var statearr_44558 = state_44478;
(statearr_44558[(24)] = inst_44353);

return statearr_44558;
})();
if(cljs.core.truth_(inst_44357)){
var statearr_44559_45734 = state_44478__$1;
(statearr_44559_45734[(1)] = (13));

} else {
var statearr_44560_45735 = state_44478__$1;
(statearr_44560_45735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (18))){
var inst_44397 = (state_44478[(2)]);
var state_44478__$1 = state_44478;
var statearr_44561_45736 = state_44478__$1;
(statearr_44561_45736[(2)] = inst_44397);

(statearr_44561_45736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (42))){
var state_44478__$1 = state_44478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44478__$1,(45),dchan);
} else {
if((state_val_44483 === (37))){
var inst_44439 = (state_44478[(22)]);
var inst_44430 = (state_44478[(23)]);
var inst_44329 = (state_44478[(10)]);
var inst_44439__$1 = cljs.core.first(inst_44430);
var inst_44440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44439__$1,inst_44329,done);
var state_44478__$1 = (function (){var statearr_44562 = state_44478;
(statearr_44562[(22)] = inst_44439__$1);

return statearr_44562;
})();
if(cljs.core.truth_(inst_44440)){
var statearr_44564_45737 = state_44478__$1;
(statearr_44564_45737[(1)] = (39));

} else {
var statearr_44565_45738 = state_44478__$1;
(statearr_44565_45738[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (8))){
var inst_44343 = (state_44478[(13)]);
var inst_44344 = (state_44478[(17)]);
var inst_44346 = (inst_44344 < inst_44343);
var inst_44347 = inst_44346;
var state_44478__$1 = state_44478;
if(cljs.core.truth_(inst_44347)){
var statearr_44566_45739 = state_44478__$1;
(statearr_44566_45739[(1)] = (10));

} else {
var statearr_44567_45740 = state_44478__$1;
(statearr_44567_45740[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__43126__auto__ = null;
var cljs$core$async$mult_$_state_machine__43126__auto____0 = (function (){
var statearr_44568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44568[(0)] = cljs$core$async$mult_$_state_machine__43126__auto__);

(statearr_44568[(1)] = (1));

return statearr_44568;
});
var cljs$core$async$mult_$_state_machine__43126__auto____1 = (function (state_44478){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44478);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44569){var ex__43129__auto__ = e44569;
var statearr_44570_45743 = state_44478;
(statearr_44570_45743[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44478[(4)]))){
var statearr_44571_45747 = state_44478;
(statearr_44571_45747[(1)] = cljs.core.first((state_44478[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45748 = state_44478;
state_44478 = G__45748;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43126__auto__ = function(state_44478){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43126__auto____1.call(this,state_44478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43126__auto____0;
cljs$core$async$mult_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43126__auto____1;
return cljs$core$async$mult_$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44572 = f__43293__auto__();
(statearr_44572[(6)] = c__43292__auto___45676);

return statearr_44572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44577 = arguments.length;
switch (G__44577) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45753 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45753(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45754 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45754(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45756 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45756(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45762 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45762(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45765 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45765(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45773 = arguments.length;
var i__4865__auto___45774 = (0);
while(true){
if((i__4865__auto___45774 < len__4864__auto___45773)){
args__4870__auto__.push((arguments[i__4865__auto___45774]));

var G__45775 = (i__4865__auto___45774 + (1));
i__4865__auto___45774 = G__45775;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44606){
var map__44607 = p__44606;
var map__44607__$1 = cljs.core.__destructure_map(map__44607);
var opts = map__44607__$1;
var statearr_44608_45782 = state;
(statearr_44608_45782[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44610_45783 = state;
(statearr_44610_45783[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44611_45784 = state;
(statearr_44611_45784[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44601){
var G__44602 = cljs.core.first(seq44601);
var seq44601__$1 = cljs.core.next(seq44601);
var G__44603 = cljs.core.first(seq44601__$1);
var seq44601__$2 = cljs.core.next(seq44601__$1);
var G__44604 = cljs.core.first(seq44601__$2);
var seq44601__$3 = cljs.core.next(seq44601__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44602,G__44603,G__44604,seq44601__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44618 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44619){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44619 = meta44619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44620,meta44619__$1){
var self__ = this;
var _44620__$1 = this;
return (new cljs.core.async.t_cljs$core$async44618(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44619__$1));
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44620){
var self__ = this;
var _44620__$1 = this;
return self__.meta44619;
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44618.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44619","meta44619",1505069661,null)], null);
}));

(cljs.core.async.t_cljs$core$async44618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44618");

(cljs.core.async.t_cljs$core$async44618.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44618.
 */
cljs.core.async.__GT_t_cljs$core$async44618 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44619){
return (new cljs.core.async.t_cljs$core$async44618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44619));
});

}

return (new cljs.core.async.t_cljs$core$async44618(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43292__auto___45791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44694){
var state_val_44695 = (state_44694[(1)]);
if((state_val_44695 === (7))){
var inst_44652 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44652)){
var statearr_44696_45798 = state_44694__$1;
(statearr_44696_45798[(1)] = (8));

} else {
var statearr_44697_45799 = state_44694__$1;
(statearr_44697_45799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (20))){
var inst_44645 = (state_44694[(7)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44694__$1,(23),out,inst_44645);
} else {
if((state_val_44695 === (1))){
var inst_44628 = calc_state();
var inst_44629 = cljs.core.__destructure_map(inst_44628);
var inst_44630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44629,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44629,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44629,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44633 = inst_44628;
var state_44694__$1 = (function (){var statearr_44698 = state_44694;
(statearr_44698[(8)] = inst_44631);

(statearr_44698[(9)] = inst_44633);

(statearr_44698[(10)] = inst_44630);

(statearr_44698[(11)] = inst_44632);

return statearr_44698;
})();
var statearr_44699_45800 = state_44694__$1;
(statearr_44699_45800[(2)] = null);

(statearr_44699_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (24))){
var inst_44636 = (state_44694[(12)]);
var inst_44633 = inst_44636;
var state_44694__$1 = (function (){var statearr_44700 = state_44694;
(statearr_44700[(9)] = inst_44633);

return statearr_44700;
})();
var statearr_44702_45801 = state_44694__$1;
(statearr_44702_45801[(2)] = null);

(statearr_44702_45801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (4))){
var inst_44647 = (state_44694[(13)]);
var inst_44645 = (state_44694[(7)]);
var inst_44644 = (state_44694[(2)]);
var inst_44645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44644,(0),null);
var inst_44646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44644,(1),null);
var inst_44647__$1 = (inst_44645__$1 == null);
var state_44694__$1 = (function (){var statearr_44703 = state_44694;
(statearr_44703[(14)] = inst_44646);

(statearr_44703[(13)] = inst_44647__$1);

(statearr_44703[(7)] = inst_44645__$1);

return statearr_44703;
})();
if(cljs.core.truth_(inst_44647__$1)){
var statearr_44707_45802 = state_44694__$1;
(statearr_44707_45802[(1)] = (5));

} else {
var statearr_44708_45803 = state_44694__$1;
(statearr_44708_45803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (15))){
var inst_44637 = (state_44694[(15)]);
var inst_44666 = (state_44694[(16)]);
var inst_44666__$1 = cljs.core.empty_QMARK_(inst_44637);
var state_44694__$1 = (function (){var statearr_44709 = state_44694;
(statearr_44709[(16)] = inst_44666__$1);

return statearr_44709;
})();
if(inst_44666__$1){
var statearr_44710_45804 = state_44694__$1;
(statearr_44710_45804[(1)] = (17));

} else {
var statearr_44711_45805 = state_44694__$1;
(statearr_44711_45805[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (21))){
var inst_44636 = (state_44694[(12)]);
var inst_44633 = inst_44636;
var state_44694__$1 = (function (){var statearr_44712 = state_44694;
(statearr_44712[(9)] = inst_44633);

return statearr_44712;
})();
var statearr_44713_45806 = state_44694__$1;
(statearr_44713_45806[(2)] = null);

(statearr_44713_45806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (13))){
var inst_44659 = (state_44694[(2)]);
var inst_44660 = calc_state();
var inst_44633 = inst_44660;
var state_44694__$1 = (function (){var statearr_44714 = state_44694;
(statearr_44714[(9)] = inst_44633);

(statearr_44714[(17)] = inst_44659);

return statearr_44714;
})();
var statearr_44715_45807 = state_44694__$1;
(statearr_44715_45807[(2)] = null);

(statearr_44715_45807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (22))){
var inst_44687 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44716_45808 = state_44694__$1;
(statearr_44716_45808[(2)] = inst_44687);

(statearr_44716_45808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (6))){
var inst_44646 = (state_44694[(14)]);
var inst_44650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44646,change);
var state_44694__$1 = state_44694;
var statearr_44717_45809 = state_44694__$1;
(statearr_44717_45809[(2)] = inst_44650);

(statearr_44717_45809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (25))){
var state_44694__$1 = state_44694;
var statearr_44718_45810 = state_44694__$1;
(statearr_44718_45810[(2)] = null);

(statearr_44718_45810[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (17))){
var inst_44646 = (state_44694[(14)]);
var inst_44638 = (state_44694[(18)]);
var inst_44669 = (inst_44638.cljs$core$IFn$_invoke$arity$1 ? inst_44638.cljs$core$IFn$_invoke$arity$1(inst_44646) : inst_44638.call(null,inst_44646));
var inst_44670 = cljs.core.not(inst_44669);
var state_44694__$1 = state_44694;
var statearr_44720_45817 = state_44694__$1;
(statearr_44720_45817[(2)] = inst_44670);

(statearr_44720_45817[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (3))){
var inst_44691 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44694__$1,inst_44691);
} else {
if((state_val_44695 === (12))){
var state_44694__$1 = state_44694;
var statearr_44721_45818 = state_44694__$1;
(statearr_44721_45818[(2)] = null);

(statearr_44721_45818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (2))){
var inst_44633 = (state_44694[(9)]);
var inst_44636 = (state_44694[(12)]);
var inst_44636__$1 = cljs.core.__destructure_map(inst_44633);
var inst_44637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44636__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44636__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44636__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44694__$1 = (function (){var statearr_44722 = state_44694;
(statearr_44722[(15)] = inst_44637);

(statearr_44722[(12)] = inst_44636__$1);

(statearr_44722[(18)] = inst_44638);

return statearr_44722;
})();
return cljs.core.async.ioc_alts_BANG_(state_44694__$1,(4),inst_44639);
} else {
if((state_val_44695 === (23))){
var inst_44678 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44678)){
var statearr_44725_45819 = state_44694__$1;
(statearr_44725_45819[(1)] = (24));

} else {
var statearr_44727_45820 = state_44694__$1;
(statearr_44727_45820[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (19))){
var inst_44673 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44728_45821 = state_44694__$1;
(statearr_44728_45821[(2)] = inst_44673);

(statearr_44728_45821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (11))){
var inst_44646 = (state_44694[(14)]);
var inst_44656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44646);
var state_44694__$1 = state_44694;
var statearr_44730_45822 = state_44694__$1;
(statearr_44730_45822[(2)] = inst_44656);

(statearr_44730_45822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (9))){
var inst_44646 = (state_44694[(14)]);
var inst_44637 = (state_44694[(15)]);
var inst_44663 = (state_44694[(19)]);
var inst_44663__$1 = (inst_44637.cljs$core$IFn$_invoke$arity$1 ? inst_44637.cljs$core$IFn$_invoke$arity$1(inst_44646) : inst_44637.call(null,inst_44646));
var state_44694__$1 = (function (){var statearr_44731 = state_44694;
(statearr_44731[(19)] = inst_44663__$1);

return statearr_44731;
})();
if(cljs.core.truth_(inst_44663__$1)){
var statearr_44732_45823 = state_44694__$1;
(statearr_44732_45823[(1)] = (14));

} else {
var statearr_44733_45824 = state_44694__$1;
(statearr_44733_45824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (5))){
var inst_44647 = (state_44694[(13)]);
var state_44694__$1 = state_44694;
var statearr_44735_45825 = state_44694__$1;
(statearr_44735_45825[(2)] = inst_44647);

(statearr_44735_45825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (14))){
var inst_44663 = (state_44694[(19)]);
var state_44694__$1 = state_44694;
var statearr_44736_45826 = state_44694__$1;
(statearr_44736_45826[(2)] = inst_44663);

(statearr_44736_45826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (26))){
var inst_44683 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44737_45827 = state_44694__$1;
(statearr_44737_45827[(2)] = inst_44683);

(statearr_44737_45827[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (16))){
var inst_44675 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44675)){
var statearr_44738_45828 = state_44694__$1;
(statearr_44738_45828[(1)] = (20));

} else {
var statearr_44739_45829 = state_44694__$1;
(statearr_44739_45829[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (10))){
var inst_44689 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44740_45830 = state_44694__$1;
(statearr_44740_45830[(2)] = inst_44689);

(statearr_44740_45830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (18))){
var inst_44666 = (state_44694[(16)]);
var state_44694__$1 = state_44694;
var statearr_44741_45831 = state_44694__$1;
(statearr_44741_45831[(2)] = inst_44666);

(statearr_44741_45831[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (8))){
var inst_44645 = (state_44694[(7)]);
var inst_44654 = (inst_44645 == null);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44654)){
var statearr_44742_45832 = state_44694__$1;
(statearr_44742_45832[(1)] = (11));

} else {
var statearr_44743_45833 = state_44694__$1;
(statearr_44743_45833[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__43126__auto__ = null;
var cljs$core$async$mix_$_state_machine__43126__auto____0 = (function (){
var statearr_44746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44746[(0)] = cljs$core$async$mix_$_state_machine__43126__auto__);

(statearr_44746[(1)] = (1));

return statearr_44746;
});
var cljs$core$async$mix_$_state_machine__43126__auto____1 = (function (state_44694){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44694);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44747){var ex__43129__auto__ = e44747;
var statearr_44750_45834 = state_44694;
(statearr_44750_45834[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44694[(4)]))){
var statearr_44751_45835 = state_44694;
(statearr_44751_45835[(1)] = cljs.core.first((state_44694[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45836 = state_44694;
state_44694 = G__45836;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43126__auto__ = function(state_44694){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43126__auto____1.call(this,state_44694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43126__auto____0;
cljs$core$async$mix_$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43126__auto____1;
return cljs$core$async$mix_$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44753 = f__43293__auto__();
(statearr_44753[(6)] = c__43292__auto___45791);

return statearr_44753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45837 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45837(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45838 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45838(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45839 = (function() {
var G__45840 = null;
var G__45840__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45840__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45840 = function(p,v){
switch(arguments.length){
case 1:
return G__45840__1.call(this,p);
case 2:
return G__45840__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45840.cljs$core$IFn$_invoke$arity$1 = G__45840__1;
G__45840.cljs$core$IFn$_invoke$arity$2 = G__45840__2;
return G__45840;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44767 = arguments.length;
switch (G__44767) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45839(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45839(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__44774 = arguments.length;
switch (G__44774) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44771_SHARP_){
if(cljs.core.truth_((p1__44771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44771_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44771_SHARP_.call(null,topic)))){
return p1__44771_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44771_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44778 = meta44778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44779,meta44778__$1){
var self__ = this;
var _44779__$1 = this;
return (new cljs.core.async.t_cljs$core$async44777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44778__$1));
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44779){
var self__ = this;
var _44779__$1 = this;
return self__.meta44778;
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44778","meta44778",-1620161753,null)], null);
}));

(cljs.core.async.t_cljs$core$async44777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44777");

(cljs.core.async.t_cljs$core$async44777.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44777.
 */
cljs.core.async.__GT_t_cljs$core$async44777 = (function cljs$core$async$__GT_t_cljs$core$async44777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44778){
return (new cljs.core.async.t_cljs$core$async44777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44778));
});

}

return (new cljs.core.async.t_cljs$core$async44777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43292__auto___45850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44861){
var state_val_44862 = (state_44861[(1)]);
if((state_val_44862 === (7))){
var inst_44857 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44864_45851 = state_44861__$1;
(statearr_44864_45851[(2)] = inst_44857);

(statearr_44864_45851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (20))){
var state_44861__$1 = state_44861;
var statearr_44865_45852 = state_44861__$1;
(statearr_44865_45852[(2)] = null);

(statearr_44865_45852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (1))){
var state_44861__$1 = state_44861;
var statearr_44866_45853 = state_44861__$1;
(statearr_44866_45853[(2)] = null);

(statearr_44866_45853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (24))){
var inst_44840 = (state_44861[(7)]);
var inst_44849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44840);
var state_44861__$1 = state_44861;
var statearr_44867_45854 = state_44861__$1;
(statearr_44867_45854[(2)] = inst_44849);

(statearr_44867_45854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (4))){
var inst_44792 = (state_44861[(8)]);
var inst_44792__$1 = (state_44861[(2)]);
var inst_44793 = (inst_44792__$1 == null);
var state_44861__$1 = (function (){var statearr_44868 = state_44861;
(statearr_44868[(8)] = inst_44792__$1);

return statearr_44868;
})();
if(cljs.core.truth_(inst_44793)){
var statearr_44869_45856 = state_44861__$1;
(statearr_44869_45856[(1)] = (5));

} else {
var statearr_44870_45857 = state_44861__$1;
(statearr_44870_45857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (15))){
var inst_44834 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44871_45859 = state_44861__$1;
(statearr_44871_45859[(2)] = inst_44834);

(statearr_44871_45859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (21))){
var inst_44854 = (state_44861[(2)]);
var state_44861__$1 = (function (){var statearr_44872 = state_44861;
(statearr_44872[(9)] = inst_44854);

return statearr_44872;
})();
var statearr_44873_45860 = state_44861__$1;
(statearr_44873_45860[(2)] = null);

(statearr_44873_45860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (13))){
var inst_44816 = (state_44861[(10)]);
var inst_44818 = cljs.core.chunked_seq_QMARK_(inst_44816);
var state_44861__$1 = state_44861;
if(inst_44818){
var statearr_44874_45861 = state_44861__$1;
(statearr_44874_45861[(1)] = (16));

} else {
var statearr_44875_45862 = state_44861__$1;
(statearr_44875_45862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (22))){
var inst_44846 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
if(cljs.core.truth_(inst_44846)){
var statearr_44876_45863 = state_44861__$1;
(statearr_44876_45863[(1)] = (23));

} else {
var statearr_44877_45864 = state_44861__$1;
(statearr_44877_45864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (6))){
var inst_44792 = (state_44861[(8)]);
var inst_44840 = (state_44861[(7)]);
var inst_44842 = (state_44861[(11)]);
var inst_44840__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44792) : topic_fn.call(null,inst_44792));
var inst_44841 = cljs.core.deref(mults);
var inst_44842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44841,inst_44840__$1);
var state_44861__$1 = (function (){var statearr_44878 = state_44861;
(statearr_44878[(7)] = inst_44840__$1);

(statearr_44878[(11)] = inst_44842__$1);

return statearr_44878;
})();
if(cljs.core.truth_(inst_44842__$1)){
var statearr_44879_45865 = state_44861__$1;
(statearr_44879_45865[(1)] = (19));

} else {
var statearr_44880_45866 = state_44861__$1;
(statearr_44880_45866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (25))){
var inst_44851 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44881_45867 = state_44861__$1;
(statearr_44881_45867[(2)] = inst_44851);

(statearr_44881_45867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (17))){
var inst_44816 = (state_44861[(10)]);
var inst_44825 = cljs.core.first(inst_44816);
var inst_44826 = cljs.core.async.muxch_STAR_(inst_44825);
var inst_44827 = cljs.core.async.close_BANG_(inst_44826);
var inst_44828 = cljs.core.next(inst_44816);
var inst_44802 = inst_44828;
var inst_44803 = null;
var inst_44804 = (0);
var inst_44805 = (0);
var state_44861__$1 = (function (){var statearr_44882 = state_44861;
(statearr_44882[(12)] = inst_44827);

(statearr_44882[(13)] = inst_44804);

(statearr_44882[(14)] = inst_44805);

(statearr_44882[(15)] = inst_44802);

(statearr_44882[(16)] = inst_44803);

return statearr_44882;
})();
var statearr_44883_45868 = state_44861__$1;
(statearr_44883_45868[(2)] = null);

(statearr_44883_45868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (3))){
var inst_44859 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44861__$1,inst_44859);
} else {
if((state_val_44862 === (12))){
var inst_44836 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44884_45869 = state_44861__$1;
(statearr_44884_45869[(2)] = inst_44836);

(statearr_44884_45869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (2))){
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44861__$1,(4),ch);
} else {
if((state_val_44862 === (23))){
var state_44861__$1 = state_44861;
var statearr_44885_45870 = state_44861__$1;
(statearr_44885_45870[(2)] = null);

(statearr_44885_45870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (19))){
var inst_44792 = (state_44861[(8)]);
var inst_44842 = (state_44861[(11)]);
var inst_44844 = cljs.core.async.muxch_STAR_(inst_44842);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44861__$1,(22),inst_44844,inst_44792);
} else {
if((state_val_44862 === (11))){
var inst_44816 = (state_44861[(10)]);
var inst_44802 = (state_44861[(15)]);
var inst_44816__$1 = cljs.core.seq(inst_44802);
var state_44861__$1 = (function (){var statearr_44887 = state_44861;
(statearr_44887[(10)] = inst_44816__$1);

return statearr_44887;
})();
if(inst_44816__$1){
var statearr_44888_45871 = state_44861__$1;
(statearr_44888_45871[(1)] = (13));

} else {
var statearr_44889_45872 = state_44861__$1;
(statearr_44889_45872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (9))){
var inst_44838 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44890_45873 = state_44861__$1;
(statearr_44890_45873[(2)] = inst_44838);

(statearr_44890_45873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (5))){
var inst_44799 = cljs.core.deref(mults);
var inst_44800 = cljs.core.vals(inst_44799);
var inst_44801 = cljs.core.seq(inst_44800);
var inst_44802 = inst_44801;
var inst_44803 = null;
var inst_44804 = (0);
var inst_44805 = (0);
var state_44861__$1 = (function (){var statearr_44891 = state_44861;
(statearr_44891[(13)] = inst_44804);

(statearr_44891[(14)] = inst_44805);

(statearr_44891[(15)] = inst_44802);

(statearr_44891[(16)] = inst_44803);

return statearr_44891;
})();
var statearr_44892_45876 = state_44861__$1;
(statearr_44892_45876[(2)] = null);

(statearr_44892_45876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (14))){
var state_44861__$1 = state_44861;
var statearr_44896_45877 = state_44861__$1;
(statearr_44896_45877[(2)] = null);

(statearr_44896_45877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (16))){
var inst_44816 = (state_44861[(10)]);
var inst_44820 = cljs.core.chunk_first(inst_44816);
var inst_44821 = cljs.core.chunk_rest(inst_44816);
var inst_44822 = cljs.core.count(inst_44820);
var inst_44802 = inst_44821;
var inst_44803 = inst_44820;
var inst_44804 = inst_44822;
var inst_44805 = (0);
var state_44861__$1 = (function (){var statearr_44897 = state_44861;
(statearr_44897[(13)] = inst_44804);

(statearr_44897[(14)] = inst_44805);

(statearr_44897[(15)] = inst_44802);

(statearr_44897[(16)] = inst_44803);

return statearr_44897;
})();
var statearr_44898_45878 = state_44861__$1;
(statearr_44898_45878[(2)] = null);

(statearr_44898_45878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (10))){
var inst_44804 = (state_44861[(13)]);
var inst_44805 = (state_44861[(14)]);
var inst_44802 = (state_44861[(15)]);
var inst_44803 = (state_44861[(16)]);
var inst_44810 = cljs.core._nth(inst_44803,inst_44805);
var inst_44811 = cljs.core.async.muxch_STAR_(inst_44810);
var inst_44812 = cljs.core.async.close_BANG_(inst_44811);
var inst_44813 = (inst_44805 + (1));
var tmp44893 = inst_44804;
var tmp44894 = inst_44802;
var tmp44895 = inst_44803;
var inst_44802__$1 = tmp44894;
var inst_44803__$1 = tmp44895;
var inst_44804__$1 = tmp44893;
var inst_44805__$1 = inst_44813;
var state_44861__$1 = (function (){var statearr_44899 = state_44861;
(statearr_44899[(13)] = inst_44804__$1);

(statearr_44899[(14)] = inst_44805__$1);

(statearr_44899[(17)] = inst_44812);

(statearr_44899[(15)] = inst_44802__$1);

(statearr_44899[(16)] = inst_44803__$1);

return statearr_44899;
})();
var statearr_44900_45879 = state_44861__$1;
(statearr_44900_45879[(2)] = null);

(statearr_44900_45879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (18))){
var inst_44831 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44901_45880 = state_44861__$1;
(statearr_44901_45880[(2)] = inst_44831);

(statearr_44901_45880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (8))){
var inst_44804 = (state_44861[(13)]);
var inst_44805 = (state_44861[(14)]);
var inst_44807 = (inst_44805 < inst_44804);
var inst_44808 = inst_44807;
var state_44861__$1 = state_44861;
if(cljs.core.truth_(inst_44808)){
var statearr_44902_45881 = state_44861__$1;
(statearr_44902_45881[(1)] = (10));

} else {
var statearr_44903_45882 = state_44861__$1;
(statearr_44903_45882[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_44904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44904[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_44904[(1)] = (1));

return statearr_44904;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_44861){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44861);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44905){var ex__43129__auto__ = e44905;
var statearr_44906_45883 = state_44861;
(statearr_44906_45883[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44861[(4)]))){
var statearr_44907_45884 = state_44861;
(statearr_44907_45884[(1)] = cljs.core.first((state_44861[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45885 = state_44861;
state_44861 = G__45885;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_44861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_44861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44908 = f__43293__auto__();
(statearr_44908[(6)] = c__43292__auto___45850);

return statearr_44908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44910 = arguments.length;
switch (G__44910) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44913 = arguments.length;
switch (G__44913) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__44915 = arguments.length;
switch (G__44915) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43292__auto___45894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_44960){
var state_val_44961 = (state_44960[(1)]);
if((state_val_44961 === (7))){
var state_44960__$1 = state_44960;
var statearr_44962_45895 = state_44960__$1;
(statearr_44962_45895[(2)] = null);

(statearr_44962_45895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (1))){
var state_44960__$1 = state_44960;
var statearr_44963_45896 = state_44960__$1;
(statearr_44963_45896[(2)] = null);

(statearr_44963_45896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (4))){
var inst_44921 = (state_44960[(7)]);
var inst_44920 = (state_44960[(8)]);
var inst_44923 = (inst_44921 < inst_44920);
var state_44960__$1 = state_44960;
if(cljs.core.truth_(inst_44923)){
var statearr_44964_45897 = state_44960__$1;
(statearr_44964_45897[(1)] = (6));

} else {
var statearr_44965_45898 = state_44960__$1;
(statearr_44965_45898[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (15))){
var inst_44946 = (state_44960[(9)]);
var inst_44951 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44946);
var state_44960__$1 = state_44960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44960__$1,(17),out,inst_44951);
} else {
if((state_val_44961 === (13))){
var inst_44946 = (state_44960[(9)]);
var inst_44946__$1 = (state_44960[(2)]);
var inst_44947 = cljs.core.some(cljs.core.nil_QMARK_,inst_44946__$1);
var state_44960__$1 = (function (){var statearr_44966 = state_44960;
(statearr_44966[(9)] = inst_44946__$1);

return statearr_44966;
})();
if(cljs.core.truth_(inst_44947)){
var statearr_44967_45899 = state_44960__$1;
(statearr_44967_45899[(1)] = (14));

} else {
var statearr_44968_45900 = state_44960__$1;
(statearr_44968_45900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (6))){
var state_44960__$1 = state_44960;
var statearr_44969_45902 = state_44960__$1;
(statearr_44969_45902[(2)] = null);

(statearr_44969_45902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (17))){
var inst_44953 = (state_44960[(2)]);
var state_44960__$1 = (function (){var statearr_44971 = state_44960;
(statearr_44971[(10)] = inst_44953);

return statearr_44971;
})();
var statearr_44972_45906 = state_44960__$1;
(statearr_44972_45906[(2)] = null);

(statearr_44972_45906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (3))){
var inst_44958 = (state_44960[(2)]);
var state_44960__$1 = state_44960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44960__$1,inst_44958);
} else {
if((state_val_44961 === (12))){
var _ = (function (){var statearr_44973 = state_44960;
(statearr_44973[(4)] = cljs.core.rest((state_44960[(4)])));

return statearr_44973;
})();
var state_44960__$1 = state_44960;
var ex44970 = (state_44960__$1[(2)]);
var statearr_44974_45910 = state_44960__$1;
(statearr_44974_45910[(5)] = ex44970);


if((ex44970 instanceof Object)){
var statearr_44975_45911 = state_44960__$1;
(statearr_44975_45911[(1)] = (11));

(statearr_44975_45911[(5)] = null);

} else {
throw ex44970;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (2))){
var inst_44919 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44920 = cnt;
var inst_44921 = (0);
var state_44960__$1 = (function (){var statearr_44976 = state_44960;
(statearr_44976[(7)] = inst_44921);

(statearr_44976[(11)] = inst_44919);

(statearr_44976[(8)] = inst_44920);

return statearr_44976;
})();
var statearr_44977_45915 = state_44960__$1;
(statearr_44977_45915[(2)] = null);

(statearr_44977_45915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (11))){
var inst_44925 = (state_44960[(2)]);
var inst_44926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44960__$1 = (function (){var statearr_44978 = state_44960;
(statearr_44978[(12)] = inst_44925);

return statearr_44978;
})();
var statearr_44979_45916 = state_44960__$1;
(statearr_44979_45916[(2)] = inst_44926);

(statearr_44979_45916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (9))){
var inst_44921 = (state_44960[(7)]);
var _ = (function (){var statearr_44980 = state_44960;
(statearr_44980[(4)] = cljs.core.cons((12),(state_44960[(4)])));

return statearr_44980;
})();
var inst_44932 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44921) : chs__$1.call(null,inst_44921));
var inst_44933 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44921) : done.call(null,inst_44921));
var inst_44934 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44932,inst_44933);
var ___$1 = (function (){var statearr_44981 = state_44960;
(statearr_44981[(4)] = cljs.core.rest((state_44960[(4)])));

return statearr_44981;
})();
var state_44960__$1 = state_44960;
var statearr_44982_45920 = state_44960__$1;
(statearr_44982_45920[(2)] = inst_44934);

(statearr_44982_45920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (5))){
var inst_44944 = (state_44960[(2)]);
var state_44960__$1 = (function (){var statearr_44983 = state_44960;
(statearr_44983[(13)] = inst_44944);

return statearr_44983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44960__$1,(13),dchan);
} else {
if((state_val_44961 === (14))){
var inst_44949 = cljs.core.async.close_BANG_(out);
var state_44960__$1 = state_44960;
var statearr_44984_45924 = state_44960__$1;
(statearr_44984_45924[(2)] = inst_44949);

(statearr_44984_45924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (16))){
var inst_44956 = (state_44960[(2)]);
var state_44960__$1 = state_44960;
var statearr_44985_45929 = state_44960__$1;
(statearr_44985_45929[(2)] = inst_44956);

(statearr_44985_45929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (10))){
var inst_44921 = (state_44960[(7)]);
var inst_44937 = (state_44960[(2)]);
var inst_44938 = (inst_44921 + (1));
var inst_44921__$1 = inst_44938;
var state_44960__$1 = (function (){var statearr_44986 = state_44960;
(statearr_44986[(14)] = inst_44937);

(statearr_44986[(7)] = inst_44921__$1);

return statearr_44986;
})();
var statearr_44987_45930 = state_44960__$1;
(statearr_44987_45930[(2)] = null);

(statearr_44987_45930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44961 === (8))){
var inst_44942 = (state_44960[(2)]);
var state_44960__$1 = state_44960;
var statearr_44988_45931 = state_44960__$1;
(statearr_44988_45931[(2)] = inst_44942);

(statearr_44988_45931[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_44989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44989[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_44989[(1)] = (1));

return statearr_44989;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_44960){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_44960);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e44990){var ex__43129__auto__ = e44990;
var statearr_44991_45932 = state_44960;
(statearr_44991_45932[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_44960[(4)]))){
var statearr_44992_45933 = state_44960;
(statearr_44992_45933[(1)] = cljs.core.first((state_44960[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45934 = state_44960;
state_44960 = G__45934;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_44960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_44960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_44993 = f__43293__auto__();
(statearr_44993[(6)] = c__43292__auto___45894);

return statearr_44993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45000 = arguments.length;
switch (G__45000) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___45937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45032){
var state_val_45033 = (state_45032[(1)]);
if((state_val_45033 === (7))){
var inst_45011 = (state_45032[(7)]);
var inst_45012 = (state_45032[(8)]);
var inst_45011__$1 = (state_45032[(2)]);
var inst_45012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45011__$1,(0),null);
var inst_45013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45011__$1,(1),null);
var inst_45014 = (inst_45012__$1 == null);
var state_45032__$1 = (function (){var statearr_45034 = state_45032;
(statearr_45034[(7)] = inst_45011__$1);

(statearr_45034[(8)] = inst_45012__$1);

(statearr_45034[(9)] = inst_45013);

return statearr_45034;
})();
if(cljs.core.truth_(inst_45014)){
var statearr_45035_45939 = state_45032__$1;
(statearr_45035_45939[(1)] = (8));

} else {
var statearr_45036_45940 = state_45032__$1;
(statearr_45036_45940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (1))){
var inst_45001 = cljs.core.vec(chs);
var inst_45002 = inst_45001;
var state_45032__$1 = (function (){var statearr_45037 = state_45032;
(statearr_45037[(10)] = inst_45002);

return statearr_45037;
})();
var statearr_45038_45941 = state_45032__$1;
(statearr_45038_45941[(2)] = null);

(statearr_45038_45941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (4))){
var inst_45002 = (state_45032[(10)]);
var state_45032__$1 = state_45032;
return cljs.core.async.ioc_alts_BANG_(state_45032__$1,(7),inst_45002);
} else {
if((state_val_45033 === (6))){
var inst_45028 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
var statearr_45039_45942 = state_45032__$1;
(statearr_45039_45942[(2)] = inst_45028);

(statearr_45039_45942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (3))){
var inst_45030 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45032__$1,inst_45030);
} else {
if((state_val_45033 === (2))){
var inst_45002 = (state_45032[(10)]);
var inst_45004 = cljs.core.count(inst_45002);
var inst_45005 = (inst_45004 > (0));
var state_45032__$1 = state_45032;
if(cljs.core.truth_(inst_45005)){
var statearr_45041_45943 = state_45032__$1;
(statearr_45041_45943[(1)] = (4));

} else {
var statearr_45042_45944 = state_45032__$1;
(statearr_45042_45944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (11))){
var inst_45002 = (state_45032[(10)]);
var inst_45021 = (state_45032[(2)]);
var tmp45040 = inst_45002;
var inst_45002__$1 = tmp45040;
var state_45032__$1 = (function (){var statearr_45043 = state_45032;
(statearr_45043[(11)] = inst_45021);

(statearr_45043[(10)] = inst_45002__$1);

return statearr_45043;
})();
var statearr_45044_45945 = state_45032__$1;
(statearr_45044_45945[(2)] = null);

(statearr_45044_45945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (9))){
var inst_45012 = (state_45032[(8)]);
var state_45032__$1 = state_45032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45032__$1,(11),out,inst_45012);
} else {
if((state_val_45033 === (5))){
var inst_45026 = cljs.core.async.close_BANG_(out);
var state_45032__$1 = state_45032;
var statearr_45045_45946 = state_45032__$1;
(statearr_45045_45946[(2)] = inst_45026);

(statearr_45045_45946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (10))){
var inst_45024 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
var statearr_45046_45947 = state_45032__$1;
(statearr_45046_45947[(2)] = inst_45024);

(statearr_45046_45947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (8))){
var inst_45011 = (state_45032[(7)]);
var inst_45012 = (state_45032[(8)]);
var inst_45013 = (state_45032[(9)]);
var inst_45002 = (state_45032[(10)]);
var inst_45016 = (function (){var cs = inst_45002;
var vec__45007 = inst_45011;
var v = inst_45012;
var c = inst_45013;
return (function (p1__44994_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44994_SHARP_);
});
})();
var inst_45017 = cljs.core.filterv(inst_45016,inst_45002);
var inst_45002__$1 = inst_45017;
var state_45032__$1 = (function (){var statearr_45047 = state_45032;
(statearr_45047[(10)] = inst_45002__$1);

return statearr_45047;
})();
var statearr_45048_45948 = state_45032__$1;
(statearr_45048_45948[(2)] = null);

(statearr_45048_45948[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45049[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45049[(1)] = (1));

return statearr_45049;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45032){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45032);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45050){var ex__43129__auto__ = e45050;
var statearr_45051_45949 = state_45032;
(statearr_45051_45949[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45032[(4)]))){
var statearr_45052_45950 = state_45032;
(statearr_45052_45950[(1)] = cljs.core.first((state_45032[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45951 = state_45032;
state_45032 = G__45951;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45053 = f__43293__auto__();
(statearr_45053[(6)] = c__43292__auto___45937);

return statearr_45053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45055 = arguments.length;
switch (G__45055) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___45953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45079){
var state_val_45080 = (state_45079[(1)]);
if((state_val_45080 === (7))){
var inst_45061 = (state_45079[(7)]);
var inst_45061__$1 = (state_45079[(2)]);
var inst_45062 = (inst_45061__$1 == null);
var inst_45063 = cljs.core.not(inst_45062);
var state_45079__$1 = (function (){var statearr_45081 = state_45079;
(statearr_45081[(7)] = inst_45061__$1);

return statearr_45081;
})();
if(inst_45063){
var statearr_45082_45958 = state_45079__$1;
(statearr_45082_45958[(1)] = (8));

} else {
var statearr_45083_45959 = state_45079__$1;
(statearr_45083_45959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (1))){
var inst_45056 = (0);
var state_45079__$1 = (function (){var statearr_45084 = state_45079;
(statearr_45084[(8)] = inst_45056);

return statearr_45084;
})();
var statearr_45085_45960 = state_45079__$1;
(statearr_45085_45960[(2)] = null);

(statearr_45085_45960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (4))){
var state_45079__$1 = state_45079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45079__$1,(7),ch);
} else {
if((state_val_45080 === (6))){
var inst_45074 = (state_45079[(2)]);
var state_45079__$1 = state_45079;
var statearr_45086_45961 = state_45079__$1;
(statearr_45086_45961[(2)] = inst_45074);

(statearr_45086_45961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (3))){
var inst_45076 = (state_45079[(2)]);
var inst_45077 = cljs.core.async.close_BANG_(out);
var state_45079__$1 = (function (){var statearr_45087 = state_45079;
(statearr_45087[(9)] = inst_45076);

return statearr_45087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45079__$1,inst_45077);
} else {
if((state_val_45080 === (2))){
var inst_45056 = (state_45079[(8)]);
var inst_45058 = (inst_45056 < n);
var state_45079__$1 = state_45079;
if(cljs.core.truth_(inst_45058)){
var statearr_45088_45962 = state_45079__$1;
(statearr_45088_45962[(1)] = (4));

} else {
var statearr_45089_45963 = state_45079__$1;
(statearr_45089_45963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (11))){
var inst_45056 = (state_45079[(8)]);
var inst_45066 = (state_45079[(2)]);
var inst_45067 = (inst_45056 + (1));
var inst_45056__$1 = inst_45067;
var state_45079__$1 = (function (){var statearr_45090 = state_45079;
(statearr_45090[(8)] = inst_45056__$1);

(statearr_45090[(10)] = inst_45066);

return statearr_45090;
})();
var statearr_45091_45964 = state_45079__$1;
(statearr_45091_45964[(2)] = null);

(statearr_45091_45964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (9))){
var state_45079__$1 = state_45079;
var statearr_45092_45965 = state_45079__$1;
(statearr_45092_45965[(2)] = null);

(statearr_45092_45965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (5))){
var state_45079__$1 = state_45079;
var statearr_45093_45966 = state_45079__$1;
(statearr_45093_45966[(2)] = null);

(statearr_45093_45966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (10))){
var inst_45071 = (state_45079[(2)]);
var state_45079__$1 = state_45079;
var statearr_45094_45967 = state_45079__$1;
(statearr_45094_45967[(2)] = inst_45071);

(statearr_45094_45967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45080 === (8))){
var inst_45061 = (state_45079[(7)]);
var state_45079__$1 = state_45079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45079__$1,(11),out,inst_45061);
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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45095[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45095[(1)] = (1));

return statearr_45095;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45079){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45079);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45096){var ex__43129__auto__ = e45096;
var statearr_45097_45972 = state_45079;
(statearr_45097_45972[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45079[(4)]))){
var statearr_45098_45973 = state_45079;
(statearr_45098_45973[(1)] = cljs.core.first((state_45079[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45974 = state_45079;
state_45079 = G__45974;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45099 = f__43293__auto__();
(statearr_45099[(6)] = c__43292__auto___45953);

return statearr_45099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45101 = (function (f,ch,meta45102){
this.f = f;
this.ch = ch;
this.meta45102 = meta45102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45103,meta45102__$1){
var self__ = this;
var _45103__$1 = this;
return (new cljs.core.async.t_cljs$core$async45101(self__.f,self__.ch,meta45102__$1));
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45103){
var self__ = this;
var _45103__$1 = this;
return self__.meta45102;
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45104 = (function (f,ch,meta45102,_,fn1,meta45105){
this.f = f;
this.ch = ch;
this.meta45102 = meta45102;
this._ = _;
this.fn1 = fn1;
this.meta45105 = meta45105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45106,meta45105__$1){
var self__ = this;
var _45106__$1 = this;
return (new cljs.core.async.t_cljs$core$async45104(self__.f,self__.ch,self__.meta45102,self__._,self__.fn1,meta45105__$1));
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45106){
var self__ = this;
var _45106__$1 = this;
return self__.meta45105;
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45100_SHARP_){
var G__45107 = (((p1__45100_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45100_SHARP_) : self__.f.call(null,p1__45100_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45107) : f1.call(null,G__45107));
});
}));

(cljs.core.async.t_cljs$core$async45104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45102","meta45102",-1031247140,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45101","cljs.core.async/t_cljs$core$async45101",1916783875,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45105","meta45105",264706182,null)], null);
}));

(cljs.core.async.t_cljs$core$async45104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45104");

(cljs.core.async.t_cljs$core$async45104.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45104.
 */
cljs.core.async.__GT_t_cljs$core$async45104 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45104(f__$1,ch__$1,meta45102__$1,___$2,fn1__$1,meta45105){
return (new cljs.core.async.t_cljs$core$async45104(f__$1,ch__$1,meta45102__$1,___$2,fn1__$1,meta45105));
});

}

return (new cljs.core.async.t_cljs$core$async45104(self__.f,self__.ch,self__.meta45102,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45108 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45108) : self__.f.call(null,G__45108));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45102","meta45102",-1031247140,null)], null);
}));

(cljs.core.async.t_cljs$core$async45101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45101");

(cljs.core.async.t_cljs$core$async45101.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45101.
 */
cljs.core.async.__GT_t_cljs$core$async45101 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45101(f__$1,ch__$1,meta45102){
return (new cljs.core.async.t_cljs$core$async45101(f__$1,ch__$1,meta45102));
});

}

return (new cljs.core.async.t_cljs$core$async45101(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45109 = (function (f,ch,meta45110){
this.f = f;
this.ch = ch;
this.meta45110 = meta45110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45111,meta45110__$1){
var self__ = this;
var _45111__$1 = this;
return (new cljs.core.async.t_cljs$core$async45109(self__.f,self__.ch,meta45110__$1));
}));

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45111){
var self__ = this;
var _45111__$1 = this;
return self__.meta45110;
}));

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45110","meta45110",2005648986,null)], null);
}));

(cljs.core.async.t_cljs$core$async45109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45109");

(cljs.core.async.t_cljs$core$async45109.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45109.
 */
cljs.core.async.__GT_t_cljs$core$async45109 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45109(f__$1,ch__$1,meta45110){
return (new cljs.core.async.t_cljs$core$async45109(f__$1,ch__$1,meta45110));
});

}

return (new cljs.core.async.t_cljs$core$async45109(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45112 = (function (p,ch,meta45113){
this.p = p;
this.ch = ch;
this.meta45113 = meta45113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45114,meta45113__$1){
var self__ = this;
var _45114__$1 = this;
return (new cljs.core.async.t_cljs$core$async45112(self__.p,self__.ch,meta45113__$1));
}));

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45114){
var self__ = this;
var _45114__$1 = this;
return self__.meta45113;
}));

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45113","meta45113",2024456959,null)], null);
}));

(cljs.core.async.t_cljs$core$async45112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45112");

(cljs.core.async.t_cljs$core$async45112.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45112.
 */
cljs.core.async.__GT_t_cljs$core$async45112 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45112(p__$1,ch__$1,meta45113){
return (new cljs.core.async.t_cljs$core$async45112(p__$1,ch__$1,meta45113));
});

}

return (new cljs.core.async.t_cljs$core$async45112(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45116 = arguments.length;
switch (G__45116) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___45986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45137){
var state_val_45138 = (state_45137[(1)]);
if((state_val_45138 === (7))){
var inst_45133 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45139_45987 = state_45137__$1;
(statearr_45139_45987[(2)] = inst_45133);

(statearr_45139_45987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (1))){
var state_45137__$1 = state_45137;
var statearr_45140_45988 = state_45137__$1;
(statearr_45140_45988[(2)] = null);

(statearr_45140_45988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (4))){
var inst_45119 = (state_45137[(7)]);
var inst_45119__$1 = (state_45137[(2)]);
var inst_45120 = (inst_45119__$1 == null);
var state_45137__$1 = (function (){var statearr_45141 = state_45137;
(statearr_45141[(7)] = inst_45119__$1);

return statearr_45141;
})();
if(cljs.core.truth_(inst_45120)){
var statearr_45142_45989 = state_45137__$1;
(statearr_45142_45989[(1)] = (5));

} else {
var statearr_45143_45990 = state_45137__$1;
(statearr_45143_45990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (6))){
var inst_45119 = (state_45137[(7)]);
var inst_45124 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45119) : p.call(null,inst_45119));
var state_45137__$1 = state_45137;
if(cljs.core.truth_(inst_45124)){
var statearr_45144_45991 = state_45137__$1;
(statearr_45144_45991[(1)] = (8));

} else {
var statearr_45145_45992 = state_45137__$1;
(statearr_45145_45992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (3))){
var inst_45135 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45137__$1,inst_45135);
} else {
if((state_val_45138 === (2))){
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45137__$1,(4),ch);
} else {
if((state_val_45138 === (11))){
var inst_45127 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45146_45994 = state_45137__$1;
(statearr_45146_45994[(2)] = inst_45127);

(statearr_45146_45994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (9))){
var state_45137__$1 = state_45137;
var statearr_45147_45995 = state_45137__$1;
(statearr_45147_45995[(2)] = null);

(statearr_45147_45995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (5))){
var inst_45122 = cljs.core.async.close_BANG_(out);
var state_45137__$1 = state_45137;
var statearr_45148_45996 = state_45137__$1;
(statearr_45148_45996[(2)] = inst_45122);

(statearr_45148_45996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (10))){
var inst_45130 = (state_45137[(2)]);
var state_45137__$1 = (function (){var statearr_45149 = state_45137;
(statearr_45149[(8)] = inst_45130);

return statearr_45149;
})();
var statearr_45150_45997 = state_45137__$1;
(statearr_45150_45997[(2)] = null);

(statearr_45150_45997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (8))){
var inst_45119 = (state_45137[(7)]);
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45137__$1,(11),out,inst_45119);
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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45151 = [null,null,null,null,null,null,null,null,null];
(statearr_45151[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45151[(1)] = (1));

return statearr_45151;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45137){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45137);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45152){var ex__43129__auto__ = e45152;
var statearr_45153_45998 = state_45137;
(statearr_45153_45998[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45137[(4)]))){
var statearr_45154_45999 = state_45137;
(statearr_45154_45999[(1)] = cljs.core.first((state_45137[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46000 = state_45137;
state_45137 = G__46000;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45155 = f__43293__auto__();
(statearr_45155[(6)] = c__43292__auto___45986);

return statearr_45155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45157 = arguments.length;
switch (G__45157) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45219){
var state_val_45220 = (state_45219[(1)]);
if((state_val_45220 === (7))){
var inst_45215 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45221_46006 = state_45219__$1;
(statearr_45221_46006[(2)] = inst_45215);

(statearr_45221_46006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (20))){
var inst_45185 = (state_45219[(7)]);
var inst_45196 = (state_45219[(2)]);
var inst_45197 = cljs.core.next(inst_45185);
var inst_45171 = inst_45197;
var inst_45172 = null;
var inst_45173 = (0);
var inst_45174 = (0);
var state_45219__$1 = (function (){var statearr_45222 = state_45219;
(statearr_45222[(8)] = inst_45172);

(statearr_45222[(9)] = inst_45173);

(statearr_45222[(10)] = inst_45171);

(statearr_45222[(11)] = inst_45196);

(statearr_45222[(12)] = inst_45174);

return statearr_45222;
})();
var statearr_45223_46008 = state_45219__$1;
(statearr_45223_46008[(2)] = null);

(statearr_45223_46008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (1))){
var state_45219__$1 = state_45219;
var statearr_45224_46009 = state_45219__$1;
(statearr_45224_46009[(2)] = null);

(statearr_45224_46009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (4))){
var inst_45160 = (state_45219[(13)]);
var inst_45160__$1 = (state_45219[(2)]);
var inst_45161 = (inst_45160__$1 == null);
var state_45219__$1 = (function (){var statearr_45225 = state_45219;
(statearr_45225[(13)] = inst_45160__$1);

return statearr_45225;
})();
if(cljs.core.truth_(inst_45161)){
var statearr_45226_46010 = state_45219__$1;
(statearr_45226_46010[(1)] = (5));

} else {
var statearr_45227_46011 = state_45219__$1;
(statearr_45227_46011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (15))){
var state_45219__$1 = state_45219;
var statearr_45231_46012 = state_45219__$1;
(statearr_45231_46012[(2)] = null);

(statearr_45231_46012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (21))){
var state_45219__$1 = state_45219;
var statearr_45232_46013 = state_45219__$1;
(statearr_45232_46013[(2)] = null);

(statearr_45232_46013[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (13))){
var inst_45172 = (state_45219[(8)]);
var inst_45173 = (state_45219[(9)]);
var inst_45171 = (state_45219[(10)]);
var inst_45174 = (state_45219[(12)]);
var inst_45181 = (state_45219[(2)]);
var inst_45182 = (inst_45174 + (1));
var tmp45228 = inst_45172;
var tmp45229 = inst_45173;
var tmp45230 = inst_45171;
var inst_45171__$1 = tmp45230;
var inst_45172__$1 = tmp45228;
var inst_45173__$1 = tmp45229;
var inst_45174__$1 = inst_45182;
var state_45219__$1 = (function (){var statearr_45233 = state_45219;
(statearr_45233[(14)] = inst_45181);

(statearr_45233[(8)] = inst_45172__$1);

(statearr_45233[(9)] = inst_45173__$1);

(statearr_45233[(10)] = inst_45171__$1);

(statearr_45233[(12)] = inst_45174__$1);

return statearr_45233;
})();
var statearr_45234_46015 = state_45219__$1;
(statearr_45234_46015[(2)] = null);

(statearr_45234_46015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (22))){
var state_45219__$1 = state_45219;
var statearr_45235_46016 = state_45219__$1;
(statearr_45235_46016[(2)] = null);

(statearr_45235_46016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (6))){
var inst_45160 = (state_45219[(13)]);
var inst_45169 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45160) : f.call(null,inst_45160));
var inst_45170 = cljs.core.seq(inst_45169);
var inst_45171 = inst_45170;
var inst_45172 = null;
var inst_45173 = (0);
var inst_45174 = (0);
var state_45219__$1 = (function (){var statearr_45236 = state_45219;
(statearr_45236[(8)] = inst_45172);

(statearr_45236[(9)] = inst_45173);

(statearr_45236[(10)] = inst_45171);

(statearr_45236[(12)] = inst_45174);

return statearr_45236;
})();
var statearr_45237_46018 = state_45219__$1;
(statearr_45237_46018[(2)] = null);

(statearr_45237_46018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (17))){
var inst_45185 = (state_45219[(7)]);
var inst_45189 = cljs.core.chunk_first(inst_45185);
var inst_45190 = cljs.core.chunk_rest(inst_45185);
var inst_45191 = cljs.core.count(inst_45189);
var inst_45171 = inst_45190;
var inst_45172 = inst_45189;
var inst_45173 = inst_45191;
var inst_45174 = (0);
var state_45219__$1 = (function (){var statearr_45238 = state_45219;
(statearr_45238[(8)] = inst_45172);

(statearr_45238[(9)] = inst_45173);

(statearr_45238[(10)] = inst_45171);

(statearr_45238[(12)] = inst_45174);

return statearr_45238;
})();
var statearr_45239_46022 = state_45219__$1;
(statearr_45239_46022[(2)] = null);

(statearr_45239_46022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (3))){
var inst_45217 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45219__$1,inst_45217);
} else {
if((state_val_45220 === (12))){
var inst_45205 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45240_46023 = state_45219__$1;
(statearr_45240_46023[(2)] = inst_45205);

(statearr_45240_46023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (2))){
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45219__$1,(4),in$);
} else {
if((state_val_45220 === (23))){
var inst_45213 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45241_46024 = state_45219__$1;
(statearr_45241_46024[(2)] = inst_45213);

(statearr_45241_46024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (19))){
var inst_45200 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45242_46025 = state_45219__$1;
(statearr_45242_46025[(2)] = inst_45200);

(statearr_45242_46025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (11))){
var inst_45171 = (state_45219[(10)]);
var inst_45185 = (state_45219[(7)]);
var inst_45185__$1 = cljs.core.seq(inst_45171);
var state_45219__$1 = (function (){var statearr_45243 = state_45219;
(statearr_45243[(7)] = inst_45185__$1);

return statearr_45243;
})();
if(inst_45185__$1){
var statearr_45244_46026 = state_45219__$1;
(statearr_45244_46026[(1)] = (14));

} else {
var statearr_45245_46027 = state_45219__$1;
(statearr_45245_46027[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (9))){
var inst_45207 = (state_45219[(2)]);
var inst_45208 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45219__$1 = (function (){var statearr_45246 = state_45219;
(statearr_45246[(15)] = inst_45207);

return statearr_45246;
})();
if(cljs.core.truth_(inst_45208)){
var statearr_45247_46028 = state_45219__$1;
(statearr_45247_46028[(1)] = (21));

} else {
var statearr_45248_46029 = state_45219__$1;
(statearr_45248_46029[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (5))){
var inst_45163 = cljs.core.async.close_BANG_(out);
var state_45219__$1 = state_45219;
var statearr_45249_46030 = state_45219__$1;
(statearr_45249_46030[(2)] = inst_45163);

(statearr_45249_46030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (14))){
var inst_45185 = (state_45219[(7)]);
var inst_45187 = cljs.core.chunked_seq_QMARK_(inst_45185);
var state_45219__$1 = state_45219;
if(inst_45187){
var statearr_45250_46031 = state_45219__$1;
(statearr_45250_46031[(1)] = (17));

} else {
var statearr_45251_46032 = state_45219__$1;
(statearr_45251_46032[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (16))){
var inst_45203 = (state_45219[(2)]);
var state_45219__$1 = state_45219;
var statearr_45252_46033 = state_45219__$1;
(statearr_45252_46033[(2)] = inst_45203);

(statearr_45252_46033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45220 === (10))){
var inst_45172 = (state_45219[(8)]);
var inst_45174 = (state_45219[(12)]);
var inst_45179 = cljs.core._nth(inst_45172,inst_45174);
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45219__$1,(13),out,inst_45179);
} else {
if((state_val_45220 === (18))){
var inst_45185 = (state_45219[(7)]);
var inst_45194 = cljs.core.first(inst_45185);
var state_45219__$1 = state_45219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45219__$1,(20),out,inst_45194);
} else {
if((state_val_45220 === (8))){
var inst_45173 = (state_45219[(9)]);
var inst_45174 = (state_45219[(12)]);
var inst_45176 = (inst_45174 < inst_45173);
var inst_45177 = inst_45176;
var state_45219__$1 = state_45219;
if(cljs.core.truth_(inst_45177)){
var statearr_45253_46034 = state_45219__$1;
(statearr_45253_46034[(1)] = (10));

} else {
var statearr_45254_46035 = state_45219__$1;
(statearr_45254_46035[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____0 = (function (){
var statearr_45255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45255[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__);

(statearr_45255[(1)] = (1));

return statearr_45255;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____1 = (function (state_45219){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45219);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45256){var ex__43129__auto__ = e45256;
var statearr_45257_46036 = state_45219;
(statearr_45257_46036[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45219[(4)]))){
var statearr_45258_46037 = state_45219;
(statearr_45258_46037[(1)] = cljs.core.first((state_45219[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46038 = state_45219;
state_45219 = G__46038;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__ = function(state_45219){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____1.call(this,state_45219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43126__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45259 = f__43293__auto__();
(statearr_45259[(6)] = c__43292__auto__);

return statearr_45259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

return c__43292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45261 = arguments.length;
switch (G__45261) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45263 = arguments.length;
switch (G__45263) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45265 = arguments.length;
switch (G__45265) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45289){
var state_val_45290 = (state_45289[(1)]);
if((state_val_45290 === (7))){
var inst_45284 = (state_45289[(2)]);
var state_45289__$1 = state_45289;
var statearr_45291_46047 = state_45289__$1;
(statearr_45291_46047[(2)] = inst_45284);

(statearr_45291_46047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (1))){
var inst_45266 = null;
var state_45289__$1 = (function (){var statearr_45292 = state_45289;
(statearr_45292[(7)] = inst_45266);

return statearr_45292;
})();
var statearr_45293_46048 = state_45289__$1;
(statearr_45293_46048[(2)] = null);

(statearr_45293_46048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (4))){
var inst_45269 = (state_45289[(8)]);
var inst_45269__$1 = (state_45289[(2)]);
var inst_45270 = (inst_45269__$1 == null);
var inst_45271 = cljs.core.not(inst_45270);
var state_45289__$1 = (function (){var statearr_45294 = state_45289;
(statearr_45294[(8)] = inst_45269__$1);

return statearr_45294;
})();
if(inst_45271){
var statearr_45295_46049 = state_45289__$1;
(statearr_45295_46049[(1)] = (5));

} else {
var statearr_45296_46050 = state_45289__$1;
(statearr_45296_46050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (6))){
var state_45289__$1 = state_45289;
var statearr_45297_46051 = state_45289__$1;
(statearr_45297_46051[(2)] = null);

(statearr_45297_46051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (3))){
var inst_45286 = (state_45289[(2)]);
var inst_45287 = cljs.core.async.close_BANG_(out);
var state_45289__$1 = (function (){var statearr_45298 = state_45289;
(statearr_45298[(9)] = inst_45286);

return statearr_45298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45289__$1,inst_45287);
} else {
if((state_val_45290 === (2))){
var state_45289__$1 = state_45289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45289__$1,(4),ch);
} else {
if((state_val_45290 === (11))){
var inst_45269 = (state_45289[(8)]);
var inst_45278 = (state_45289[(2)]);
var inst_45266 = inst_45269;
var state_45289__$1 = (function (){var statearr_45299 = state_45289;
(statearr_45299[(7)] = inst_45266);

(statearr_45299[(10)] = inst_45278);

return statearr_45299;
})();
var statearr_45300_46052 = state_45289__$1;
(statearr_45300_46052[(2)] = null);

(statearr_45300_46052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (9))){
var inst_45269 = (state_45289[(8)]);
var state_45289__$1 = state_45289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45289__$1,(11),out,inst_45269);
} else {
if((state_val_45290 === (5))){
var inst_45266 = (state_45289[(7)]);
var inst_45269 = (state_45289[(8)]);
var inst_45273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45269,inst_45266);
var state_45289__$1 = state_45289;
if(inst_45273){
var statearr_45302_46053 = state_45289__$1;
(statearr_45302_46053[(1)] = (8));

} else {
var statearr_45303_46054 = state_45289__$1;
(statearr_45303_46054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (10))){
var inst_45281 = (state_45289[(2)]);
var state_45289__$1 = state_45289;
var statearr_45304_46055 = state_45289__$1;
(statearr_45304_46055[(2)] = inst_45281);

(statearr_45304_46055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45290 === (8))){
var inst_45266 = (state_45289[(7)]);
var tmp45301 = inst_45266;
var inst_45266__$1 = tmp45301;
var state_45289__$1 = (function (){var statearr_45305 = state_45289;
(statearr_45305[(7)] = inst_45266__$1);

return statearr_45305;
})();
var statearr_45306_46056 = state_45289__$1;
(statearr_45306_46056[(2)] = null);

(statearr_45306_46056[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45307[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45307[(1)] = (1));

return statearr_45307;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45289){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45289);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45308){var ex__43129__auto__ = e45308;
var statearr_45309_46057 = state_45289;
(statearr_45309_46057[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45289[(4)]))){
var statearr_45310_46058 = state_45289;
(statearr_45310_46058[(1)] = cljs.core.first((state_45289[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46059 = state_45289;
state_45289 = G__46059;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45311 = f__43293__auto__();
(statearr_45311[(6)] = c__43292__auto___46043);

return statearr_45311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45313 = arguments.length;
switch (G__45313) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45351){
var state_val_45352 = (state_45351[(1)]);
if((state_val_45352 === (7))){
var inst_45347 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45353_46063 = state_45351__$1;
(statearr_45353_46063[(2)] = inst_45347);

(statearr_45353_46063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (1))){
var inst_45314 = (new Array(n));
var inst_45315 = inst_45314;
var inst_45316 = (0);
var state_45351__$1 = (function (){var statearr_45354 = state_45351;
(statearr_45354[(7)] = inst_45316);

(statearr_45354[(8)] = inst_45315);

return statearr_45354;
})();
var statearr_45355_46064 = state_45351__$1;
(statearr_45355_46064[(2)] = null);

(statearr_45355_46064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (4))){
var inst_45319 = (state_45351[(9)]);
var inst_45319__$1 = (state_45351[(2)]);
var inst_45320 = (inst_45319__$1 == null);
var inst_45321 = cljs.core.not(inst_45320);
var state_45351__$1 = (function (){var statearr_45356 = state_45351;
(statearr_45356[(9)] = inst_45319__$1);

return statearr_45356;
})();
if(inst_45321){
var statearr_45357_46065 = state_45351__$1;
(statearr_45357_46065[(1)] = (5));

} else {
var statearr_45358_46066 = state_45351__$1;
(statearr_45358_46066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (15))){
var inst_45341 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45359_46067 = state_45351__$1;
(statearr_45359_46067[(2)] = inst_45341);

(statearr_45359_46067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (13))){
var state_45351__$1 = state_45351;
var statearr_45360_46068 = state_45351__$1;
(statearr_45360_46068[(2)] = null);

(statearr_45360_46068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (6))){
var inst_45316 = (state_45351[(7)]);
var inst_45337 = (inst_45316 > (0));
var state_45351__$1 = state_45351;
if(cljs.core.truth_(inst_45337)){
var statearr_45361_46069 = state_45351__$1;
(statearr_45361_46069[(1)] = (12));

} else {
var statearr_45362_46070 = state_45351__$1;
(statearr_45362_46070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (3))){
var inst_45349 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45351__$1,inst_45349);
} else {
if((state_val_45352 === (12))){
var inst_45315 = (state_45351[(8)]);
var inst_45339 = cljs.core.vec(inst_45315);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45351__$1,(15),out,inst_45339);
} else {
if((state_val_45352 === (2))){
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45351__$1,(4),ch);
} else {
if((state_val_45352 === (11))){
var inst_45331 = (state_45351[(2)]);
var inst_45332 = (new Array(n));
var inst_45315 = inst_45332;
var inst_45316 = (0);
var state_45351__$1 = (function (){var statearr_45363 = state_45351;
(statearr_45363[(7)] = inst_45316);

(statearr_45363[(8)] = inst_45315);

(statearr_45363[(10)] = inst_45331);

return statearr_45363;
})();
var statearr_45364_46071 = state_45351__$1;
(statearr_45364_46071[(2)] = null);

(statearr_45364_46071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (9))){
var inst_45315 = (state_45351[(8)]);
var inst_45329 = cljs.core.vec(inst_45315);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45351__$1,(11),out,inst_45329);
} else {
if((state_val_45352 === (5))){
var inst_45324 = (state_45351[(11)]);
var inst_45316 = (state_45351[(7)]);
var inst_45315 = (state_45351[(8)]);
var inst_45319 = (state_45351[(9)]);
var inst_45323 = (inst_45315[inst_45316] = inst_45319);
var inst_45324__$1 = (inst_45316 + (1));
var inst_45325 = (inst_45324__$1 < n);
var state_45351__$1 = (function (){var statearr_45365 = state_45351;
(statearr_45365[(11)] = inst_45324__$1);

(statearr_45365[(12)] = inst_45323);

return statearr_45365;
})();
if(cljs.core.truth_(inst_45325)){
var statearr_45366_46072 = state_45351__$1;
(statearr_45366_46072[(1)] = (8));

} else {
var statearr_45367_46073 = state_45351__$1;
(statearr_45367_46073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (14))){
var inst_45344 = (state_45351[(2)]);
var inst_45345 = cljs.core.async.close_BANG_(out);
var state_45351__$1 = (function (){var statearr_45369 = state_45351;
(statearr_45369[(13)] = inst_45344);

return statearr_45369;
})();
var statearr_45370_46074 = state_45351__$1;
(statearr_45370_46074[(2)] = inst_45345);

(statearr_45370_46074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (10))){
var inst_45335 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45371_46075 = state_45351__$1;
(statearr_45371_46075[(2)] = inst_45335);

(statearr_45371_46075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (8))){
var inst_45324 = (state_45351[(11)]);
var inst_45315 = (state_45351[(8)]);
var tmp45368 = inst_45315;
var inst_45315__$1 = tmp45368;
var inst_45316 = inst_45324;
var state_45351__$1 = (function (){var statearr_45372 = state_45351;
(statearr_45372[(7)] = inst_45316);

(statearr_45372[(8)] = inst_45315__$1);

return statearr_45372;
})();
var statearr_45373_46076 = state_45351__$1;
(statearr_45373_46076[(2)] = null);

(statearr_45373_46076[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45374[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45374[(1)] = (1));

return statearr_45374;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45351){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45351);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45375){var ex__43129__auto__ = e45375;
var statearr_45376_46078 = state_45351;
(statearr_45376_46078[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45351[(4)]))){
var statearr_45377_46082 = state_45351;
(statearr_45377_46082[(1)] = cljs.core.first((state_45351[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46083 = state_45351;
state_45351 = G__46083;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45378 = f__43293__auto__();
(statearr_45378[(6)] = c__43292__auto___46062);

return statearr_45378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45380 = arguments.length;
switch (G__45380) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43292__auto___46090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_45425){
var state_val_45426 = (state_45425[(1)]);
if((state_val_45426 === (7))){
var inst_45421 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45427_46092 = state_45425__$1;
(statearr_45427_46092[(2)] = inst_45421);

(statearr_45427_46092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (1))){
var inst_45381 = [];
var inst_45382 = inst_45381;
var inst_45383 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45425__$1 = (function (){var statearr_45428 = state_45425;
(statearr_45428[(7)] = inst_45382);

(statearr_45428[(8)] = inst_45383);

return statearr_45428;
})();
var statearr_45429_46093 = state_45425__$1;
(statearr_45429_46093[(2)] = null);

(statearr_45429_46093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (4))){
var inst_45386 = (state_45425[(9)]);
var inst_45386__$1 = (state_45425[(2)]);
var inst_45387 = (inst_45386__$1 == null);
var inst_45388 = cljs.core.not(inst_45387);
var state_45425__$1 = (function (){var statearr_45430 = state_45425;
(statearr_45430[(9)] = inst_45386__$1);

return statearr_45430;
})();
if(inst_45388){
var statearr_45431_46094 = state_45425__$1;
(statearr_45431_46094[(1)] = (5));

} else {
var statearr_45432_46095 = state_45425__$1;
(statearr_45432_46095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (15))){
var inst_45382 = (state_45425[(7)]);
var inst_45413 = cljs.core.vec(inst_45382);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45425__$1,(18),out,inst_45413);
} else {
if((state_val_45426 === (13))){
var inst_45408 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45433_46096 = state_45425__$1;
(statearr_45433_46096[(2)] = inst_45408);

(statearr_45433_46096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (6))){
var inst_45382 = (state_45425[(7)]);
var inst_45410 = inst_45382.length;
var inst_45411 = (inst_45410 > (0));
var state_45425__$1 = state_45425;
if(cljs.core.truth_(inst_45411)){
var statearr_45434_46097 = state_45425__$1;
(statearr_45434_46097[(1)] = (15));

} else {
var statearr_45435_46098 = state_45425__$1;
(statearr_45435_46098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (17))){
var inst_45418 = (state_45425[(2)]);
var inst_45419 = cljs.core.async.close_BANG_(out);
var state_45425__$1 = (function (){var statearr_45436 = state_45425;
(statearr_45436[(10)] = inst_45418);

return statearr_45436;
})();
var statearr_45437_46099 = state_45425__$1;
(statearr_45437_46099[(2)] = inst_45419);

(statearr_45437_46099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (3))){
var inst_45423 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45425__$1,inst_45423);
} else {
if((state_val_45426 === (12))){
var inst_45382 = (state_45425[(7)]);
var inst_45401 = cljs.core.vec(inst_45382);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45425__$1,(14),out,inst_45401);
} else {
if((state_val_45426 === (2))){
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45425__$1,(4),ch);
} else {
if((state_val_45426 === (11))){
var inst_45382 = (state_45425[(7)]);
var inst_45386 = (state_45425[(9)]);
var inst_45390 = (state_45425[(11)]);
var inst_45398 = inst_45382.push(inst_45386);
var tmp45438 = inst_45382;
var inst_45382__$1 = tmp45438;
var inst_45383 = inst_45390;
var state_45425__$1 = (function (){var statearr_45439 = state_45425;
(statearr_45439[(12)] = inst_45398);

(statearr_45439[(7)] = inst_45382__$1);

(statearr_45439[(8)] = inst_45383);

return statearr_45439;
})();
var statearr_45440_46100 = state_45425__$1;
(statearr_45440_46100[(2)] = null);

(statearr_45440_46100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (9))){
var inst_45383 = (state_45425[(8)]);
var inst_45394 = cljs.core.keyword_identical_QMARK_(inst_45383,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45425__$1 = state_45425;
var statearr_45441_46101 = state_45425__$1;
(statearr_45441_46101[(2)] = inst_45394);

(statearr_45441_46101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (5))){
var inst_45391 = (state_45425[(13)]);
var inst_45386 = (state_45425[(9)]);
var inst_45383 = (state_45425[(8)]);
var inst_45390 = (state_45425[(11)]);
var inst_45390__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45386) : f.call(null,inst_45386));
var inst_45391__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45390__$1,inst_45383);
var state_45425__$1 = (function (){var statearr_45442 = state_45425;
(statearr_45442[(13)] = inst_45391__$1);

(statearr_45442[(11)] = inst_45390__$1);

return statearr_45442;
})();
if(inst_45391__$1){
var statearr_45443_46102 = state_45425__$1;
(statearr_45443_46102[(1)] = (8));

} else {
var statearr_45444_46103 = state_45425__$1;
(statearr_45444_46103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (14))){
var inst_45386 = (state_45425[(9)]);
var inst_45390 = (state_45425[(11)]);
var inst_45403 = (state_45425[(2)]);
var inst_45404 = [];
var inst_45405 = inst_45404.push(inst_45386);
var inst_45382 = inst_45404;
var inst_45383 = inst_45390;
var state_45425__$1 = (function (){var statearr_45445 = state_45425;
(statearr_45445[(14)] = inst_45403);

(statearr_45445[(15)] = inst_45405);

(statearr_45445[(7)] = inst_45382);

(statearr_45445[(8)] = inst_45383);

return statearr_45445;
})();
var statearr_45446_46104 = state_45425__$1;
(statearr_45446_46104[(2)] = null);

(statearr_45446_46104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (16))){
var state_45425__$1 = state_45425;
var statearr_45447_46105 = state_45425__$1;
(statearr_45447_46105[(2)] = null);

(statearr_45447_46105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (10))){
var inst_45396 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
if(cljs.core.truth_(inst_45396)){
var statearr_45448_46106 = state_45425__$1;
(statearr_45448_46106[(1)] = (11));

} else {
var statearr_45449_46107 = state_45425__$1;
(statearr_45449_46107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (18))){
var inst_45415 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45450_46108 = state_45425__$1;
(statearr_45450_46108[(2)] = inst_45415);

(statearr_45450_46108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (8))){
var inst_45391 = (state_45425[(13)]);
var state_45425__$1 = state_45425;
var statearr_45451_46109 = state_45425__$1;
(statearr_45451_46109[(2)] = inst_45391);

(statearr_45451_46109[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43126__auto__ = null;
var cljs$core$async$state_machine__43126__auto____0 = (function (){
var statearr_45452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45452[(0)] = cljs$core$async$state_machine__43126__auto__);

(statearr_45452[(1)] = (1));

return statearr_45452;
});
var cljs$core$async$state_machine__43126__auto____1 = (function (state_45425){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_45425);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e45453){var ex__43129__auto__ = e45453;
var statearr_45454_46117 = state_45425;
(statearr_45454_46117[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_45425[(4)]))){
var statearr_45455_46118 = state_45425;
(statearr_45455_46118[(1)] = cljs.core.first((state_45425[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46122 = state_45425;
state_45425 = G__46122;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
cljs$core$async$state_machine__43126__auto__ = function(state_45425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43126__auto____1.call(this,state_45425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43126__auto____0;
cljs$core$async$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43126__auto____1;
return cljs$core$async$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_45456 = f__43293__auto__();
(statearr_45456[(6)] = c__43292__auto___46090);

return statearr_45456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
