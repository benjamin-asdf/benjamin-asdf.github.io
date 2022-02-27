goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35186){
var map__35187 = p__35186;
var map__35187__$1 = cljs.core.__destructure_map(map__35187);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35187__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35187__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35187__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35187__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35188_35219 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35189_35220 = null;
var count__35190_35221 = (0);
var i__35191_35222 = (0);
while(true){
if((i__35191_35222 < count__35190_35221)){
var vec__35204_35223 = chunk__35189_35220.cljs$core$IIndexed$_nth$arity$2(null,i__35191_35222);
var k_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35223,(0),null);
var cb_35225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35223,(1),null);
try{var G__35208_35226 = cljs.core.deref(re_frame.trace.traces);
(cb_35225.cljs$core$IFn$_invoke$arity$1 ? cb_35225.cljs$core$IFn$_invoke$arity$1(G__35208_35226) : cb_35225.call(null,G__35208_35226));
}catch (e35207){var e_35227 = e35207;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35224,"while storing",cljs.core.deref(re_frame.trace.traces),e_35227], 0));
}

var G__35228 = seq__35188_35219;
var G__35229 = chunk__35189_35220;
var G__35230 = count__35190_35221;
var G__35231 = (i__35191_35222 + (1));
seq__35188_35219 = G__35228;
chunk__35189_35220 = G__35229;
count__35190_35221 = G__35230;
i__35191_35222 = G__35231;
continue;
} else {
var temp__5753__auto___35232 = cljs.core.seq(seq__35188_35219);
if(temp__5753__auto___35232){
var seq__35188_35233__$1 = temp__5753__auto___35232;
if(cljs.core.chunked_seq_QMARK_(seq__35188_35233__$1)){
var c__4679__auto___35234 = cljs.core.chunk_first(seq__35188_35233__$1);
var G__35235 = cljs.core.chunk_rest(seq__35188_35233__$1);
var G__35236 = c__4679__auto___35234;
var G__35237 = cljs.core.count(c__4679__auto___35234);
var G__35238 = (0);
seq__35188_35219 = G__35235;
chunk__35189_35220 = G__35236;
count__35190_35221 = G__35237;
i__35191_35222 = G__35238;
continue;
} else {
var vec__35209_35239 = cljs.core.first(seq__35188_35233__$1);
var k_35240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209_35239,(0),null);
var cb_35241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209_35239,(1),null);
try{var G__35213_35242 = cljs.core.deref(re_frame.trace.traces);
(cb_35241.cljs$core$IFn$_invoke$arity$1 ? cb_35241.cljs$core$IFn$_invoke$arity$1(G__35213_35242) : cb_35241.call(null,G__35213_35242));
}catch (e35212){var e_35243 = e35212;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35240,"while storing",cljs.core.deref(re_frame.trace.traces),e_35243], 0));
}

var G__35244 = cljs.core.next(seq__35188_35233__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__35188_35219 = G__35244;
chunk__35189_35220 = G__35245;
count__35190_35221 = G__35246;
i__35191_35222 = G__35247;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
