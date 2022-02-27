goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__34531 = Object.getPrototypeOf(obj__$1);
var G__34532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__34531;
protos = G__34532;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$property_names_and_types(var_args){
var G__34518 = arguments.length;
switch (G__34518) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4652__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__34519(s__34520){
return (new cljs.core.LazySeq(null,(function (){
var s__34520__$1 = s__34520;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34520__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__34525 = cljs.core.first(xs__6308__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(0),null);
var map__34528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(1),null);
var map__34528__$1 = cljs.core.__destructure_map(map__34528);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34528__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34528__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4648__auto__ = ((function (s__34520__$1,vec__34525,i,map__34528,map__34528__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__34519_$_iter__34521(s__34522){
return (new cljs.core.LazySeq(null,((function (s__34520__$1,vec__34525,i,map__34528,map__34528__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen){
return (function (){
var s__34522__$1 = s__34522;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__34522__$1);
if(temp__5753__auto____$1){
var s__34522__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34522__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__34522__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__34524 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__34523 = (0);
while(true){
if((i__34523 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__34523);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__34524,(function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5751__auto__ = (function (){var or__4253__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e34529){if((e34529 instanceof Error)){
var e = e34529;
return "var";
} else {
throw e34529;

}
}})()], null);
})());

var G__34534 = (i__34523 + (1));
i__34523 = G__34534;
continue;
} else {
var G__34535 = (i__34523 + (1));
i__34523 = G__34535;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34524),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__34519_$_iter__34521(cljs.core.chunk_rest(s__34522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34524),null);
}
} else {
var key = cljs.core.first(s__34522__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5751__auto__ = (function (){var or__4253__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e34530){if((e34530 instanceof Error)){
var e = e34530;
return "var";
} else {
throw e34530;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__34519_$_iter__34521(cljs.core.rest(s__34522__$2)));
} else {
var G__34536 = cljs.core.rest(s__34522__$2);
s__34522__$1 = G__34536;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34520__$1,vec__34525,i,map__34528,map__34528__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen))
,null,null));
});})(s__34520__$1,vec__34525,i,map__34528,map__34528__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.js_keys(props)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__34519(cljs.core.rest(s__34520__$1)));
} else {
var G__34537 = cljs.core.rest(s__34520__$1);
s__34520__$1 = G__34537;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.js.map
