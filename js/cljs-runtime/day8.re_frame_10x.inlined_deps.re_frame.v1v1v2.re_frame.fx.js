goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32468 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32469 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32469);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32598 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32598)){
var new_db_32599 = temp__5753__auto___32598;
var fexpr__32470_32600 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32470_32600.cljs$core$IFn$_invoke$arity$1 ? fexpr__32470_32600.cljs$core$IFn$_invoke$arity$1(new_db_32599) : fexpr__32470_32600.call(null,new_db_32599));
} else {
}

var seq__32471 = cljs.core.seq(effects_without_db);
var chunk__32472 = null;
var count__32473 = (0);
var i__32474 = (0);
while(true){
if((i__32474 < count__32473)){
var vec__32499 = chunk__32472.cljs$core$IIndexed$_nth$arity$2(null,i__32474);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32499,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32499,(1),null);
var temp__5751__auto___32601 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32601)){
var effect_fn_32602 = temp__5751__auto___32601;
(effect_fn_32602.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32602.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32602.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32603 = seq__32471;
var G__32604 = chunk__32472;
var G__32605 = count__32473;
var G__32606 = (i__32474 + (1));
seq__32471 = G__32603;
chunk__32472 = G__32604;
count__32473 = G__32605;
i__32474 = G__32606;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32471);
if(temp__5753__auto__){
var seq__32471__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32471__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32471__$1);
var G__32607 = cljs.core.chunk_rest(seq__32471__$1);
var G__32608 = c__4679__auto__;
var G__32609 = cljs.core.count(c__4679__auto__);
var G__32610 = (0);
seq__32471 = G__32607;
chunk__32472 = G__32608;
count__32473 = G__32609;
i__32474 = G__32610;
continue;
} else {
var vec__32502 = cljs.core.first(seq__32471__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32502,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32502,(1),null);
var temp__5751__auto___32611 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32611)){
var effect_fn_32612 = temp__5751__auto___32611;
(effect_fn_32612.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32612.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32612.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32613 = cljs.core.next(seq__32471__$1);
var G__32614 = null;
var G__32615 = (0);
var G__32616 = (0);
seq__32471 = G__32613;
chunk__32472 = G__32614;
count__32473 = G__32615;
i__32474 = G__32616;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31831__auto___32617 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31832__auto___32618 = (end__31831__auto___32617 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31832__auto___32618,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31831__auto___32617);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32468);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32619 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32619)){
var new_db_32620 = temp__5753__auto___32619;
var fexpr__32505_32621 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32505_32621.cljs$core$IFn$_invoke$arity$1 ? fexpr__32505_32621.cljs$core$IFn$_invoke$arity$1(new_db_32620) : fexpr__32505_32621.call(null,new_db_32620));
} else {
}

var seq__32506 = cljs.core.seq(effects_without_db);
var chunk__32507 = null;
var count__32508 = (0);
var i__32509 = (0);
while(true){
if((i__32509 < count__32508)){
var vec__32519 = chunk__32507.cljs$core$IIndexed$_nth$arity$2(null,i__32509);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32519,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32519,(1),null);
var temp__5751__auto___32623 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32623)){
var effect_fn_32624 = temp__5751__auto___32623;
(effect_fn_32624.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32624.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32624.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32626 = seq__32506;
var G__32627 = chunk__32507;
var G__32628 = count__32508;
var G__32629 = (i__32509 + (1));
seq__32506 = G__32626;
chunk__32507 = G__32627;
count__32508 = G__32628;
i__32509 = G__32629;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32506);
if(temp__5753__auto__){
var seq__32506__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32506__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32506__$1);
var G__32630 = cljs.core.chunk_rest(seq__32506__$1);
var G__32631 = c__4679__auto__;
var G__32632 = cljs.core.count(c__4679__auto__);
var G__32633 = (0);
seq__32506 = G__32630;
chunk__32507 = G__32631;
count__32508 = G__32632;
i__32509 = G__32633;
continue;
} else {
var vec__32525 = cljs.core.first(seq__32506__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32525,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32525,(1),null);
var temp__5751__auto___32634 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32634)){
var effect_fn_32635 = temp__5751__auto___32634;
(effect_fn_32635.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32635.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32635.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32636 = cljs.core.next(seq__32506__$1);
var G__32637 = null;
var G__32638 = (0);
var G__32639 = (0);
seq__32506 = G__32636;
chunk__32507 = G__32637;
count__32508 = G__32638;
i__32509 = G__32639;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32544){
var map__32545 = p__32544;
var map__32545__$1 = cljs.core.__destructure_map(map__32545);
var effect = map__32545__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32549 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32550 = null;
var count__32551 = (0);
var i__32552 = (0);
while(true){
if((i__32552 < count__32551)){
var effect = chunk__32550.cljs$core$IIndexed$_nth$arity$2(null,i__32552);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32667 = seq__32549;
var G__32668 = chunk__32550;
var G__32669 = count__32551;
var G__32670 = (i__32552 + (1));
seq__32549 = G__32667;
chunk__32550 = G__32668;
count__32551 = G__32669;
i__32552 = G__32670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32549);
if(temp__5753__auto__){
var seq__32549__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32549__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32549__$1);
var G__32672 = cljs.core.chunk_rest(seq__32549__$1);
var G__32673 = c__4679__auto__;
var G__32674 = cljs.core.count(c__4679__auto__);
var G__32675 = (0);
seq__32549 = G__32672;
chunk__32550 = G__32673;
count__32551 = G__32674;
i__32552 = G__32675;
continue;
} else {
var effect = cljs.core.first(seq__32549__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32676 = cljs.core.next(seq__32549__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__32549 = G__32676;
chunk__32550 = G__32677;
count__32551 = G__32678;
i__32552 = G__32679;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32560 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32561 = null;
var count__32562 = (0);
var i__32563 = (0);
while(true){
if((i__32563 < count__32562)){
var vec__32574 = chunk__32561.cljs$core$IIndexed$_nth$arity$2(null,i__32563);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32574,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32574,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32683 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32683)){
var effect_fn_32684 = temp__5751__auto___32683;
(effect_fn_32684.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32684.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32684.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32685 = seq__32560;
var G__32686 = chunk__32561;
var G__32687 = count__32562;
var G__32688 = (i__32563 + (1));
seq__32560 = G__32685;
chunk__32561 = G__32686;
count__32562 = G__32687;
i__32563 = G__32688;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32560);
if(temp__5753__auto__){
var seq__32560__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32560__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32560__$1);
var G__32690 = cljs.core.chunk_rest(seq__32560__$1);
var G__32691 = c__4679__auto__;
var G__32692 = cljs.core.count(c__4679__auto__);
var G__32693 = (0);
seq__32560 = G__32690;
chunk__32561 = G__32691;
count__32562 = G__32692;
i__32563 = G__32693;
continue;
} else {
var vec__32578 = cljs.core.first(seq__32560__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32695 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32695)){
var effect_fn_32697 = temp__5751__auto___32695;
(effect_fn_32697.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32697.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32697.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32698 = cljs.core.next(seq__32560__$1);
var G__32699 = null;
var G__32700 = (0);
var G__32701 = (0);
seq__32560 = G__32698;
chunk__32561 = G__32699;
count__32562 = G__32700;
i__32563 = G__32701;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32582 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32583 = null;
var count__32584 = (0);
var i__32585 = (0);
while(true){
if((i__32585 < count__32584)){
var event = chunk__32583.cljs$core$IIndexed$_nth$arity$2(null,i__32585);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32709 = seq__32582;
var G__32710 = chunk__32583;
var G__32711 = count__32584;
var G__32712 = (i__32585 + (1));
seq__32582 = G__32709;
chunk__32583 = G__32710;
count__32584 = G__32711;
i__32585 = G__32712;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32582);
if(temp__5753__auto__){
var seq__32582__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32582__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32582__$1);
var G__32713 = cljs.core.chunk_rest(seq__32582__$1);
var G__32714 = c__4679__auto__;
var G__32715 = cljs.core.count(c__4679__auto__);
var G__32716 = (0);
seq__32582 = G__32713;
chunk__32583 = G__32714;
count__32584 = G__32715;
i__32585 = G__32716;
continue;
} else {
var event = cljs.core.first(seq__32582__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32729 = cljs.core.next(seq__32582__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32582 = G__32729;
chunk__32583 = G__32730;
count__32584 = G__32731;
i__32585 = G__32732;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32586 = cljs.core.seq(value);
var chunk__32587 = null;
var count__32588 = (0);
var i__32589 = (0);
while(true){
if((i__32589 < count__32588)){
var event = chunk__32587.cljs$core$IIndexed$_nth$arity$2(null,i__32589);
clear_event(event);


var G__32733 = seq__32586;
var G__32734 = chunk__32587;
var G__32735 = count__32588;
var G__32736 = (i__32589 + (1));
seq__32586 = G__32733;
chunk__32587 = G__32734;
count__32588 = G__32735;
i__32589 = G__32736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32586);
if(temp__5753__auto__){
var seq__32586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32586__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32586__$1);
var G__32739 = cljs.core.chunk_rest(seq__32586__$1);
var G__32740 = c__4679__auto__;
var G__32741 = cljs.core.count(c__4679__auto__);
var G__32742 = (0);
seq__32586 = G__32739;
chunk__32587 = G__32740;
count__32588 = G__32741;
i__32589 = G__32742;
continue;
} else {
var event = cljs.core.first(seq__32586__$1);
clear_event(event);


var G__32743 = cljs.core.next(seq__32586__$1);
var G__32744 = null;
var G__32745 = (0);
var G__32746 = (0);
seq__32586 = G__32743;
chunk__32587 = G__32744;
count__32588 = G__32745;
i__32589 = G__32746;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
