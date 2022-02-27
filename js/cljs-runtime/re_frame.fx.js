goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35576 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35577 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35577);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35695 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35695)){
var new_db_35696 = temp__5753__auto___35695;
var fexpr__35580_35697 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35580_35697.cljs$core$IFn$_invoke$arity$1 ? fexpr__35580_35697.cljs$core$IFn$_invoke$arity$1(new_db_35696) : fexpr__35580_35697.call(null,new_db_35696));
} else {
}

var seq__35581 = cljs.core.seq(effects_without_db);
var chunk__35582 = null;
var count__35583 = (0);
var i__35584 = (0);
while(true){
if((i__35584 < count__35583)){
var vec__35598 = chunk__35582.cljs$core$IIndexed$_nth$arity$2(null,i__35584);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(1),null);
var temp__5751__auto___35698 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35698)){
var effect_fn_35699 = temp__5751__auto___35698;
(effect_fn_35699.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35699.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35699.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35700 = seq__35581;
var G__35701 = chunk__35582;
var G__35702 = count__35583;
var G__35703 = (i__35584 + (1));
seq__35581 = G__35700;
chunk__35582 = G__35701;
count__35583 = G__35702;
i__35584 = G__35703;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35581);
if(temp__5753__auto__){
var seq__35581__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35581__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35581__$1);
var G__35704 = cljs.core.chunk_rest(seq__35581__$1);
var G__35705 = c__4679__auto__;
var G__35706 = cljs.core.count(c__4679__auto__);
var G__35707 = (0);
seq__35581 = G__35704;
chunk__35582 = G__35705;
count__35583 = G__35706;
i__35584 = G__35707;
continue;
} else {
var vec__35603 = cljs.core.first(seq__35581__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(1),null);
var temp__5751__auto___35708 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35708)){
var effect_fn_35709 = temp__5751__auto___35708;
(effect_fn_35709.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35709.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35709.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35710 = cljs.core.next(seq__35581__$1);
var G__35711 = null;
var G__35712 = (0);
var G__35713 = (0);
seq__35581 = G__35710;
chunk__35582 = G__35711;
count__35583 = G__35712;
i__35584 = G__35713;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35164__auto___35714 = re_frame.interop.now();
var duration__35165__auto___35715 = (end__35164__auto___35714 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35165__auto___35715,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35164__auto___35714);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35576);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35716 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35716)){
var new_db_35717 = temp__5753__auto___35716;
var fexpr__35608_35718 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35608_35718.cljs$core$IFn$_invoke$arity$1 ? fexpr__35608_35718.cljs$core$IFn$_invoke$arity$1(new_db_35717) : fexpr__35608_35718.call(null,new_db_35717));
} else {
}

var seq__35612 = cljs.core.seq(effects_without_db);
var chunk__35613 = null;
var count__35614 = (0);
var i__35615 = (0);
while(true){
if((i__35615 < count__35614)){
var vec__35641 = chunk__35613.cljs$core$IIndexed$_nth$arity$2(null,i__35615);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35641,(1),null);
var temp__5751__auto___35719 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35719)){
var effect_fn_35720 = temp__5751__auto___35719;
(effect_fn_35720.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35720.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35720.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35721 = seq__35612;
var G__35722 = chunk__35613;
var G__35723 = count__35614;
var G__35724 = (i__35615 + (1));
seq__35612 = G__35721;
chunk__35613 = G__35722;
count__35614 = G__35723;
i__35615 = G__35724;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35612);
if(temp__5753__auto__){
var seq__35612__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35612__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35612__$1);
var G__35725 = cljs.core.chunk_rest(seq__35612__$1);
var G__35726 = c__4679__auto__;
var G__35727 = cljs.core.count(c__4679__auto__);
var G__35728 = (0);
seq__35612 = G__35725;
chunk__35613 = G__35726;
count__35614 = G__35727;
i__35615 = G__35728;
continue;
} else {
var vec__35644 = cljs.core.first(seq__35612__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(1),null);
var temp__5751__auto___35730 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35730)){
var effect_fn_35731 = temp__5751__auto___35730;
(effect_fn_35731.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35731.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35731.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35732 = cljs.core.next(seq__35612__$1);
var G__35733 = null;
var G__35734 = (0);
var G__35735 = (0);
seq__35612 = G__35732;
chunk__35613 = G__35733;
count__35614 = G__35734;
i__35615 = G__35735;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35647){
var map__35648 = p__35647;
var map__35648__$1 = cljs.core.__destructure_map(map__35648);
var effect = map__35648__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35649 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35650 = null;
var count__35651 = (0);
var i__35652 = (0);
while(true){
if((i__35652 < count__35651)){
var effect = chunk__35650.cljs$core$IIndexed$_nth$arity$2(null,i__35652);
re_frame.fx.dispatch_later(effect);


var G__35736 = seq__35649;
var G__35737 = chunk__35650;
var G__35738 = count__35651;
var G__35739 = (i__35652 + (1));
seq__35649 = G__35736;
chunk__35650 = G__35737;
count__35651 = G__35738;
i__35652 = G__35739;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35649);
if(temp__5753__auto__){
var seq__35649__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35649__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35649__$1);
var G__35740 = cljs.core.chunk_rest(seq__35649__$1);
var G__35741 = c__4679__auto__;
var G__35742 = cljs.core.count(c__4679__auto__);
var G__35743 = (0);
seq__35649 = G__35740;
chunk__35650 = G__35741;
count__35651 = G__35742;
i__35652 = G__35743;
continue;
} else {
var effect = cljs.core.first(seq__35649__$1);
re_frame.fx.dispatch_later(effect);


var G__35744 = cljs.core.next(seq__35649__$1);
var G__35745 = null;
var G__35746 = (0);
var G__35747 = (0);
seq__35649 = G__35744;
chunk__35650 = G__35745;
count__35651 = G__35746;
i__35652 = G__35747;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35655 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35656 = null;
var count__35657 = (0);
var i__35658 = (0);
while(true){
if((i__35658 < count__35657)){
var vec__35669 = chunk__35656.cljs$core$IIndexed$_nth$arity$2(null,i__35658);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35748 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35748)){
var effect_fn_35749 = temp__5751__auto___35748;
(effect_fn_35749.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35749.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35749.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35750 = seq__35655;
var G__35751 = chunk__35656;
var G__35752 = count__35657;
var G__35753 = (i__35658 + (1));
seq__35655 = G__35750;
chunk__35656 = G__35751;
count__35657 = G__35752;
i__35658 = G__35753;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35655);
if(temp__5753__auto__){
var seq__35655__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35655__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35655__$1);
var G__35754 = cljs.core.chunk_rest(seq__35655__$1);
var G__35755 = c__4679__auto__;
var G__35756 = cljs.core.count(c__4679__auto__);
var G__35757 = (0);
seq__35655 = G__35754;
chunk__35656 = G__35755;
count__35657 = G__35756;
i__35658 = G__35757;
continue;
} else {
var vec__35673 = cljs.core.first(seq__35655__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35673,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35673,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35758 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35758)){
var effect_fn_35759 = temp__5751__auto___35758;
(effect_fn_35759.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35759.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35759.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35760 = cljs.core.next(seq__35655__$1);
var G__35761 = null;
var G__35762 = (0);
var G__35763 = (0);
seq__35655 = G__35760;
chunk__35656 = G__35761;
count__35657 = G__35762;
i__35658 = G__35763;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35680 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35681 = null;
var count__35682 = (0);
var i__35683 = (0);
while(true){
if((i__35683 < count__35682)){
var event = chunk__35681.cljs$core$IIndexed$_nth$arity$2(null,i__35683);
re_frame.router.dispatch(event);


var G__35766 = seq__35680;
var G__35767 = chunk__35681;
var G__35768 = count__35682;
var G__35769 = (i__35683 + (1));
seq__35680 = G__35766;
chunk__35681 = G__35767;
count__35682 = G__35768;
i__35683 = G__35769;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35680);
if(temp__5753__auto__){
var seq__35680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35680__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35680__$1);
var G__35770 = cljs.core.chunk_rest(seq__35680__$1);
var G__35771 = c__4679__auto__;
var G__35772 = cljs.core.count(c__4679__auto__);
var G__35773 = (0);
seq__35680 = G__35770;
chunk__35681 = G__35771;
count__35682 = G__35772;
i__35683 = G__35773;
continue;
} else {
var event = cljs.core.first(seq__35680__$1);
re_frame.router.dispatch(event);


var G__35774 = cljs.core.next(seq__35680__$1);
var G__35775 = null;
var G__35776 = (0);
var G__35777 = (0);
seq__35680 = G__35774;
chunk__35681 = G__35775;
count__35682 = G__35776;
i__35683 = G__35777;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35684 = cljs.core.seq(value);
var chunk__35685 = null;
var count__35686 = (0);
var i__35687 = (0);
while(true){
if((i__35687 < count__35686)){
var event = chunk__35685.cljs$core$IIndexed$_nth$arity$2(null,i__35687);
clear_event(event);


var G__35778 = seq__35684;
var G__35779 = chunk__35685;
var G__35780 = count__35686;
var G__35781 = (i__35687 + (1));
seq__35684 = G__35778;
chunk__35685 = G__35779;
count__35686 = G__35780;
i__35687 = G__35781;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35684);
if(temp__5753__auto__){
var seq__35684__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35684__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35684__$1);
var G__35782 = cljs.core.chunk_rest(seq__35684__$1);
var G__35783 = c__4679__auto__;
var G__35784 = cljs.core.count(c__4679__auto__);
var G__35785 = (0);
seq__35684 = G__35782;
chunk__35685 = G__35783;
count__35686 = G__35784;
i__35687 = G__35785;
continue;
} else {
var event = cljs.core.first(seq__35684__$1);
clear_event(event);


var G__35786 = cljs.core.next(seq__35684__$1);
var G__35787 = null;
var G__35788 = (0);
var G__35789 = (0);
seq__35684 = G__35786;
chunk__35685 = G__35787;
count__35686 = G__35788;
i__35687 = G__35789;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
