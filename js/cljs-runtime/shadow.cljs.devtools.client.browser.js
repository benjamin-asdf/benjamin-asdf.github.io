goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47441 = arguments.length;
var i__4865__auto___47442 = (0);
while(true){
if((i__4865__auto___47442 < len__4864__auto___47441)){
args__4870__auto__.push((arguments[i__4865__auto___47442]));

var G__47443 = (i__4865__auto___47442 + (1));
i__4865__auto___47442 = G__47443;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47154){
var G__47155 = cljs.core.first(seq47154);
var seq47154__$1 = cljs.core.next(seq47154);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47155,seq47154__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47156 = cljs.core.seq(sources);
var chunk__47157 = null;
var count__47158 = (0);
var i__47159 = (0);
while(true){
if((i__47159 < count__47158)){
var map__47169 = chunk__47157.cljs$core$IIndexed$_nth$arity$2(null,i__47159);
var map__47169__$1 = cljs.core.__destructure_map(map__47169);
var src = map__47169__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47170){var e_47444 = e47170;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47444);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47444.message)].join('')));
}

var G__47445 = seq__47156;
var G__47446 = chunk__47157;
var G__47447 = count__47158;
var G__47448 = (i__47159 + (1));
seq__47156 = G__47445;
chunk__47157 = G__47446;
count__47158 = G__47447;
i__47159 = G__47448;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47156);
if(temp__5753__auto__){
var seq__47156__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47156__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47156__$1);
var G__47449 = cljs.core.chunk_rest(seq__47156__$1);
var G__47450 = c__4679__auto__;
var G__47451 = cljs.core.count(c__4679__auto__);
var G__47452 = (0);
seq__47156 = G__47449;
chunk__47157 = G__47450;
count__47158 = G__47451;
i__47159 = G__47452;
continue;
} else {
var map__47171 = cljs.core.first(seq__47156__$1);
var map__47171__$1 = cljs.core.__destructure_map(map__47171);
var src = map__47171__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47172){var e_47453 = e47172;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47453);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47453.message)].join('')));
}

var G__47454 = cljs.core.next(seq__47156__$1);
var G__47455 = null;
var G__47456 = (0);
var G__47457 = (0);
seq__47156 = G__47454;
chunk__47157 = G__47455;
count__47158 = G__47456;
i__47159 = G__47457;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47173 = cljs.core.seq(js_requires);
var chunk__47174 = null;
var count__47175 = (0);
var i__47176 = (0);
while(true){
if((i__47176 < count__47175)){
var js_ns = chunk__47174.cljs$core$IIndexed$_nth$arity$2(null,i__47176);
var require_str_47458 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47458);


var G__47459 = seq__47173;
var G__47460 = chunk__47174;
var G__47461 = count__47175;
var G__47462 = (i__47176 + (1));
seq__47173 = G__47459;
chunk__47174 = G__47460;
count__47175 = G__47461;
i__47176 = G__47462;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47173);
if(temp__5753__auto__){
var seq__47173__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47173__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47173__$1);
var G__47463 = cljs.core.chunk_rest(seq__47173__$1);
var G__47464 = c__4679__auto__;
var G__47465 = cljs.core.count(c__4679__auto__);
var G__47466 = (0);
seq__47173 = G__47463;
chunk__47174 = G__47464;
count__47175 = G__47465;
i__47176 = G__47466;
continue;
} else {
var js_ns = cljs.core.first(seq__47173__$1);
var require_str_47467 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47467);


var G__47468 = cljs.core.next(seq__47173__$1);
var G__47469 = null;
var G__47470 = (0);
var G__47471 = (0);
seq__47173 = G__47468;
chunk__47174 = G__47469;
count__47175 = G__47470;
i__47176 = G__47471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47180){
var map__47181 = p__47180;
var map__47181__$1 = cljs.core.__destructure_map(map__47181);
var msg = map__47181__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47182(s__47183){
return (new cljs.core.LazySeq(null,(function (){
var s__47183__$1 = s__47183;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47183__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47188 = cljs.core.first(xs__6308__auto__);
var map__47188__$1 = cljs.core.__destructure_map(map__47188);
var src = map__47188__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__47183__$1,map__47188,map__47188__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47181,map__47181__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47182_$_iter__47184(s__47185){
return (new cljs.core.LazySeq(null,((function (s__47183__$1,map__47188,map__47188__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47181,map__47181__$1,msg,info,reload_info){
return (function (){
var s__47185__$1 = s__47185;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47185__$1);
if(temp__5753__auto____$1){
var s__47185__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47185__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__47185__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__47187 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__47186 = (0);
while(true){
if((i__47186 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__47186);
cljs.core.chunk_append(b__47187,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47472 = (i__47186 + (1));
i__47186 = G__47472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47187),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47182_$_iter__47184(cljs.core.chunk_rest(s__47185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47187),null);
}
} else {
var warning = cljs.core.first(s__47185__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47182_$_iter__47184(cljs.core.rest(s__47185__$2)));
}
} else {
return null;
}
break;
}
});})(s__47183__$1,map__47188,map__47188__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47181,map__47181__$1,msg,info,reload_info))
,null,null));
});})(s__47183__$1,map__47188,map__47188__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47181,map__47181__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47182(cljs.core.rest(s__47183__$1)));
} else {
var G__47473 = cljs.core.rest(s__47183__$1);
s__47183__$1 = G__47473;
continue;
}
} else {
var G__47474 = cljs.core.rest(s__47183__$1);
s__47183__$1 = G__47474;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47189_47475 = cljs.core.seq(warnings);
var chunk__47190_47476 = null;
var count__47191_47477 = (0);
var i__47192_47478 = (0);
while(true){
if((i__47192_47478 < count__47191_47477)){
var map__47195_47479 = chunk__47190_47476.cljs$core$IIndexed$_nth$arity$2(null,i__47192_47478);
var map__47195_47480__$1 = cljs.core.__destructure_map(map__47195_47479);
var w_47481 = map__47195_47480__$1;
var msg_47482__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47480__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47480__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47480__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47480__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47485)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47483),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47484),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47482__$1)].join(''));


var G__47486 = seq__47189_47475;
var G__47487 = chunk__47190_47476;
var G__47488 = count__47191_47477;
var G__47489 = (i__47192_47478 + (1));
seq__47189_47475 = G__47486;
chunk__47190_47476 = G__47487;
count__47191_47477 = G__47488;
i__47192_47478 = G__47489;
continue;
} else {
var temp__5753__auto___47490 = cljs.core.seq(seq__47189_47475);
if(temp__5753__auto___47490){
var seq__47189_47491__$1 = temp__5753__auto___47490;
if(cljs.core.chunked_seq_QMARK_(seq__47189_47491__$1)){
var c__4679__auto___47492 = cljs.core.chunk_first(seq__47189_47491__$1);
var G__47493 = cljs.core.chunk_rest(seq__47189_47491__$1);
var G__47494 = c__4679__auto___47492;
var G__47495 = cljs.core.count(c__4679__auto___47492);
var G__47496 = (0);
seq__47189_47475 = G__47493;
chunk__47190_47476 = G__47494;
count__47191_47477 = G__47495;
i__47192_47478 = G__47496;
continue;
} else {
var map__47196_47497 = cljs.core.first(seq__47189_47491__$1);
var map__47196_47498__$1 = cljs.core.__destructure_map(map__47196_47497);
var w_47499 = map__47196_47498__$1;
var msg_47500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196_47498__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196_47498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196_47498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196_47498__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47503)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47501),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47502),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47500__$1)].join(''));


var G__47504 = cljs.core.next(seq__47189_47491__$1);
var G__47505 = null;
var G__47506 = (0);
var G__47507 = (0);
seq__47189_47475 = G__47504;
chunk__47190_47476 = G__47505;
count__47191_47477 = G__47506;
i__47192_47478 = G__47507;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47179_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47179_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47197){
var map__47198 = p__47197;
var map__47198__$1 = cljs.core.__destructure_map(map__47198);
var msg = map__47198__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47199 = cljs.core.seq(updates);
var chunk__47201 = null;
var count__47202 = (0);
var i__47203 = (0);
while(true){
if((i__47203 < count__47202)){
var path = chunk__47201.cljs$core$IIndexed$_nth$arity$2(null,i__47203);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47313_47508 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47317_47509 = null;
var count__47318_47510 = (0);
var i__47319_47511 = (0);
while(true){
if((i__47319_47511 < count__47318_47510)){
var node_47512 = chunk__47317_47509.cljs$core$IIndexed$_nth$arity$2(null,i__47319_47511);
if(cljs.core.not(node_47512.shadow$old)){
var path_match_47513 = shadow.cljs.devtools.client.browser.match_paths(node_47512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47513)){
var new_link_47514 = (function (){var G__47345 = node_47512.cloneNode(true);
G__47345.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47345;
})();
(node_47512.shadow$old = true);

(new_link_47514.onload = ((function (seq__47313_47508,chunk__47317_47509,count__47318_47510,i__47319_47511,seq__47199,chunk__47201,count__47202,i__47203,new_link_47514,path_match_47513,node_47512,path,map__47198,map__47198__$1,msg,updates,reload_info){
return (function (e){
var seq__47346_47515 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47348_47516 = null;
var count__47349_47517 = (0);
var i__47350_47518 = (0);
while(true){
if((i__47350_47518 < count__47349_47517)){
var map__47354_47519 = chunk__47348_47516.cljs$core$IIndexed$_nth$arity$2(null,i__47350_47518);
var map__47354_47520__$1 = cljs.core.__destructure_map(map__47354_47519);
var task_47521 = map__47354_47520__$1;
var fn_str_47522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354_47520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354_47520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47524 = goog.getObjectByName(fn_str_47522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47523)].join(''));

(fn_obj_47524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47524.cljs$core$IFn$_invoke$arity$2(path,new_link_47514) : fn_obj_47524.call(null,path,new_link_47514));


var G__47525 = seq__47346_47515;
var G__47526 = chunk__47348_47516;
var G__47527 = count__47349_47517;
var G__47528 = (i__47350_47518 + (1));
seq__47346_47515 = G__47525;
chunk__47348_47516 = G__47526;
count__47349_47517 = G__47527;
i__47350_47518 = G__47528;
continue;
} else {
var temp__5753__auto___47529 = cljs.core.seq(seq__47346_47515);
if(temp__5753__auto___47529){
var seq__47346_47530__$1 = temp__5753__auto___47529;
if(cljs.core.chunked_seq_QMARK_(seq__47346_47530__$1)){
var c__4679__auto___47531 = cljs.core.chunk_first(seq__47346_47530__$1);
var G__47532 = cljs.core.chunk_rest(seq__47346_47530__$1);
var G__47533 = c__4679__auto___47531;
var G__47534 = cljs.core.count(c__4679__auto___47531);
var G__47535 = (0);
seq__47346_47515 = G__47532;
chunk__47348_47516 = G__47533;
count__47349_47517 = G__47534;
i__47350_47518 = G__47535;
continue;
} else {
var map__47355_47536 = cljs.core.first(seq__47346_47530__$1);
var map__47355_47537__$1 = cljs.core.__destructure_map(map__47355_47536);
var task_47538 = map__47355_47537__$1;
var fn_str_47539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355_47537__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355_47537__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47541 = goog.getObjectByName(fn_str_47539,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47540)].join(''));

(fn_obj_47541.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47541.cljs$core$IFn$_invoke$arity$2(path,new_link_47514) : fn_obj_47541.call(null,path,new_link_47514));


var G__47542 = cljs.core.next(seq__47346_47530__$1);
var G__47543 = null;
var G__47544 = (0);
var G__47545 = (0);
seq__47346_47515 = G__47542;
chunk__47348_47516 = G__47543;
count__47349_47517 = G__47544;
i__47350_47518 = G__47545;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47512);
});})(seq__47313_47508,chunk__47317_47509,count__47318_47510,i__47319_47511,seq__47199,chunk__47201,count__47202,i__47203,new_link_47514,path_match_47513,node_47512,path,map__47198,map__47198__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47513], 0));

goog.dom.insertSiblingAfter(new_link_47514,node_47512);


var G__47546 = seq__47313_47508;
var G__47547 = chunk__47317_47509;
var G__47548 = count__47318_47510;
var G__47549 = (i__47319_47511 + (1));
seq__47313_47508 = G__47546;
chunk__47317_47509 = G__47547;
count__47318_47510 = G__47548;
i__47319_47511 = G__47549;
continue;
} else {
var G__47550 = seq__47313_47508;
var G__47551 = chunk__47317_47509;
var G__47552 = count__47318_47510;
var G__47553 = (i__47319_47511 + (1));
seq__47313_47508 = G__47550;
chunk__47317_47509 = G__47551;
count__47318_47510 = G__47552;
i__47319_47511 = G__47553;
continue;
}
} else {
var G__47554 = seq__47313_47508;
var G__47555 = chunk__47317_47509;
var G__47556 = count__47318_47510;
var G__47557 = (i__47319_47511 + (1));
seq__47313_47508 = G__47554;
chunk__47317_47509 = G__47555;
count__47318_47510 = G__47556;
i__47319_47511 = G__47557;
continue;
}
} else {
var temp__5753__auto___47558 = cljs.core.seq(seq__47313_47508);
if(temp__5753__auto___47558){
var seq__47313_47559__$1 = temp__5753__auto___47558;
if(cljs.core.chunked_seq_QMARK_(seq__47313_47559__$1)){
var c__4679__auto___47560 = cljs.core.chunk_first(seq__47313_47559__$1);
var G__47561 = cljs.core.chunk_rest(seq__47313_47559__$1);
var G__47562 = c__4679__auto___47560;
var G__47563 = cljs.core.count(c__4679__auto___47560);
var G__47564 = (0);
seq__47313_47508 = G__47561;
chunk__47317_47509 = G__47562;
count__47318_47510 = G__47563;
i__47319_47511 = G__47564;
continue;
} else {
var node_47565 = cljs.core.first(seq__47313_47559__$1);
if(cljs.core.not(node_47565.shadow$old)){
var path_match_47566 = shadow.cljs.devtools.client.browser.match_paths(node_47565.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47566)){
var new_link_47567 = (function (){var G__47356 = node_47565.cloneNode(true);
G__47356.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47566),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47356;
})();
(node_47565.shadow$old = true);

(new_link_47567.onload = ((function (seq__47313_47508,chunk__47317_47509,count__47318_47510,i__47319_47511,seq__47199,chunk__47201,count__47202,i__47203,new_link_47567,path_match_47566,node_47565,seq__47313_47559__$1,temp__5753__auto___47558,path,map__47198,map__47198__$1,msg,updates,reload_info){
return (function (e){
var seq__47357_47568 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47359_47569 = null;
var count__47360_47570 = (0);
var i__47361_47571 = (0);
while(true){
if((i__47361_47571 < count__47360_47570)){
var map__47365_47572 = chunk__47359_47569.cljs$core$IIndexed$_nth$arity$2(null,i__47361_47571);
var map__47365_47573__$1 = cljs.core.__destructure_map(map__47365_47572);
var task_47574 = map__47365_47573__$1;
var fn_str_47575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47365_47573__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47365_47573__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47577 = goog.getObjectByName(fn_str_47575,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47576)].join(''));

(fn_obj_47577.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47577.cljs$core$IFn$_invoke$arity$2(path,new_link_47567) : fn_obj_47577.call(null,path,new_link_47567));


var G__47578 = seq__47357_47568;
var G__47579 = chunk__47359_47569;
var G__47580 = count__47360_47570;
var G__47581 = (i__47361_47571 + (1));
seq__47357_47568 = G__47578;
chunk__47359_47569 = G__47579;
count__47360_47570 = G__47580;
i__47361_47571 = G__47581;
continue;
} else {
var temp__5753__auto___47582__$1 = cljs.core.seq(seq__47357_47568);
if(temp__5753__auto___47582__$1){
var seq__47357_47583__$1 = temp__5753__auto___47582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47357_47583__$1)){
var c__4679__auto___47584 = cljs.core.chunk_first(seq__47357_47583__$1);
var G__47585 = cljs.core.chunk_rest(seq__47357_47583__$1);
var G__47586 = c__4679__auto___47584;
var G__47587 = cljs.core.count(c__4679__auto___47584);
var G__47588 = (0);
seq__47357_47568 = G__47585;
chunk__47359_47569 = G__47586;
count__47360_47570 = G__47587;
i__47361_47571 = G__47588;
continue;
} else {
var map__47366_47589 = cljs.core.first(seq__47357_47583__$1);
var map__47366_47590__$1 = cljs.core.__destructure_map(map__47366_47589);
var task_47591 = map__47366_47590__$1;
var fn_str_47592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47366_47590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47366_47590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47594 = goog.getObjectByName(fn_str_47592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47593)].join(''));

(fn_obj_47594.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47594.cljs$core$IFn$_invoke$arity$2(path,new_link_47567) : fn_obj_47594.call(null,path,new_link_47567));


var G__47595 = cljs.core.next(seq__47357_47583__$1);
var G__47596 = null;
var G__47597 = (0);
var G__47598 = (0);
seq__47357_47568 = G__47595;
chunk__47359_47569 = G__47596;
count__47360_47570 = G__47597;
i__47361_47571 = G__47598;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47565);
});})(seq__47313_47508,chunk__47317_47509,count__47318_47510,i__47319_47511,seq__47199,chunk__47201,count__47202,i__47203,new_link_47567,path_match_47566,node_47565,seq__47313_47559__$1,temp__5753__auto___47558,path,map__47198,map__47198__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47566], 0));

goog.dom.insertSiblingAfter(new_link_47567,node_47565);


var G__47599 = cljs.core.next(seq__47313_47559__$1);
var G__47600 = null;
var G__47601 = (0);
var G__47602 = (0);
seq__47313_47508 = G__47599;
chunk__47317_47509 = G__47600;
count__47318_47510 = G__47601;
i__47319_47511 = G__47602;
continue;
} else {
var G__47603 = cljs.core.next(seq__47313_47559__$1);
var G__47604 = null;
var G__47605 = (0);
var G__47606 = (0);
seq__47313_47508 = G__47603;
chunk__47317_47509 = G__47604;
count__47318_47510 = G__47605;
i__47319_47511 = G__47606;
continue;
}
} else {
var G__47607 = cljs.core.next(seq__47313_47559__$1);
var G__47608 = null;
var G__47609 = (0);
var G__47610 = (0);
seq__47313_47508 = G__47607;
chunk__47317_47509 = G__47608;
count__47318_47510 = G__47609;
i__47319_47511 = G__47610;
continue;
}
}
} else {
}
}
break;
}


var G__47611 = seq__47199;
var G__47612 = chunk__47201;
var G__47613 = count__47202;
var G__47614 = (i__47203 + (1));
seq__47199 = G__47611;
chunk__47201 = G__47612;
count__47202 = G__47613;
i__47203 = G__47614;
continue;
} else {
var G__47615 = seq__47199;
var G__47616 = chunk__47201;
var G__47617 = count__47202;
var G__47618 = (i__47203 + (1));
seq__47199 = G__47615;
chunk__47201 = G__47616;
count__47202 = G__47617;
i__47203 = G__47618;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47199);
if(temp__5753__auto__){
var seq__47199__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47199__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47199__$1);
var G__47619 = cljs.core.chunk_rest(seq__47199__$1);
var G__47620 = c__4679__auto__;
var G__47621 = cljs.core.count(c__4679__auto__);
var G__47622 = (0);
seq__47199 = G__47619;
chunk__47201 = G__47620;
count__47202 = G__47621;
i__47203 = G__47622;
continue;
} else {
var path = cljs.core.first(seq__47199__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47367_47623 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47371_47624 = null;
var count__47372_47625 = (0);
var i__47373_47626 = (0);
while(true){
if((i__47373_47626 < count__47372_47625)){
var node_47627 = chunk__47371_47624.cljs$core$IIndexed$_nth$arity$2(null,i__47373_47626);
if(cljs.core.not(node_47627.shadow$old)){
var path_match_47628 = shadow.cljs.devtools.client.browser.match_paths(node_47627.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47628)){
var new_link_47629 = (function (){var G__47399 = node_47627.cloneNode(true);
G__47399.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47399;
})();
(node_47627.shadow$old = true);

(new_link_47629.onload = ((function (seq__47367_47623,chunk__47371_47624,count__47372_47625,i__47373_47626,seq__47199,chunk__47201,count__47202,i__47203,new_link_47629,path_match_47628,node_47627,path,seq__47199__$1,temp__5753__auto__,map__47198,map__47198__$1,msg,updates,reload_info){
return (function (e){
var seq__47400_47630 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47402_47631 = null;
var count__47403_47632 = (0);
var i__47404_47633 = (0);
while(true){
if((i__47404_47633 < count__47403_47632)){
var map__47408_47634 = chunk__47402_47631.cljs$core$IIndexed$_nth$arity$2(null,i__47404_47633);
var map__47408_47635__$1 = cljs.core.__destructure_map(map__47408_47634);
var task_47636 = map__47408_47635__$1;
var fn_str_47637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47408_47635__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47408_47635__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47639 = goog.getObjectByName(fn_str_47637,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47638)].join(''));

(fn_obj_47639.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47639.cljs$core$IFn$_invoke$arity$2(path,new_link_47629) : fn_obj_47639.call(null,path,new_link_47629));


var G__47640 = seq__47400_47630;
var G__47641 = chunk__47402_47631;
var G__47642 = count__47403_47632;
var G__47643 = (i__47404_47633 + (1));
seq__47400_47630 = G__47640;
chunk__47402_47631 = G__47641;
count__47403_47632 = G__47642;
i__47404_47633 = G__47643;
continue;
} else {
var temp__5753__auto___47644__$1 = cljs.core.seq(seq__47400_47630);
if(temp__5753__auto___47644__$1){
var seq__47400_47645__$1 = temp__5753__auto___47644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47400_47645__$1)){
var c__4679__auto___47646 = cljs.core.chunk_first(seq__47400_47645__$1);
var G__47647 = cljs.core.chunk_rest(seq__47400_47645__$1);
var G__47648 = c__4679__auto___47646;
var G__47649 = cljs.core.count(c__4679__auto___47646);
var G__47650 = (0);
seq__47400_47630 = G__47647;
chunk__47402_47631 = G__47648;
count__47403_47632 = G__47649;
i__47404_47633 = G__47650;
continue;
} else {
var map__47409_47651 = cljs.core.first(seq__47400_47645__$1);
var map__47409_47652__$1 = cljs.core.__destructure_map(map__47409_47651);
var task_47653 = map__47409_47652__$1;
var fn_str_47654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409_47652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409_47652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47656 = goog.getObjectByName(fn_str_47654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47655)].join(''));

(fn_obj_47656.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47656.cljs$core$IFn$_invoke$arity$2(path,new_link_47629) : fn_obj_47656.call(null,path,new_link_47629));


var G__47657 = cljs.core.next(seq__47400_47645__$1);
var G__47658 = null;
var G__47659 = (0);
var G__47660 = (0);
seq__47400_47630 = G__47657;
chunk__47402_47631 = G__47658;
count__47403_47632 = G__47659;
i__47404_47633 = G__47660;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47627);
});})(seq__47367_47623,chunk__47371_47624,count__47372_47625,i__47373_47626,seq__47199,chunk__47201,count__47202,i__47203,new_link_47629,path_match_47628,node_47627,path,seq__47199__$1,temp__5753__auto__,map__47198,map__47198__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47628], 0));

goog.dom.insertSiblingAfter(new_link_47629,node_47627);


var G__47661 = seq__47367_47623;
var G__47662 = chunk__47371_47624;
var G__47663 = count__47372_47625;
var G__47664 = (i__47373_47626 + (1));
seq__47367_47623 = G__47661;
chunk__47371_47624 = G__47662;
count__47372_47625 = G__47663;
i__47373_47626 = G__47664;
continue;
} else {
var G__47665 = seq__47367_47623;
var G__47666 = chunk__47371_47624;
var G__47667 = count__47372_47625;
var G__47668 = (i__47373_47626 + (1));
seq__47367_47623 = G__47665;
chunk__47371_47624 = G__47666;
count__47372_47625 = G__47667;
i__47373_47626 = G__47668;
continue;
}
} else {
var G__47669 = seq__47367_47623;
var G__47670 = chunk__47371_47624;
var G__47671 = count__47372_47625;
var G__47672 = (i__47373_47626 + (1));
seq__47367_47623 = G__47669;
chunk__47371_47624 = G__47670;
count__47372_47625 = G__47671;
i__47373_47626 = G__47672;
continue;
}
} else {
var temp__5753__auto___47673__$1 = cljs.core.seq(seq__47367_47623);
if(temp__5753__auto___47673__$1){
var seq__47367_47674__$1 = temp__5753__auto___47673__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47367_47674__$1)){
var c__4679__auto___47675 = cljs.core.chunk_first(seq__47367_47674__$1);
var G__47676 = cljs.core.chunk_rest(seq__47367_47674__$1);
var G__47677 = c__4679__auto___47675;
var G__47678 = cljs.core.count(c__4679__auto___47675);
var G__47679 = (0);
seq__47367_47623 = G__47676;
chunk__47371_47624 = G__47677;
count__47372_47625 = G__47678;
i__47373_47626 = G__47679;
continue;
} else {
var node_47680 = cljs.core.first(seq__47367_47674__$1);
if(cljs.core.not(node_47680.shadow$old)){
var path_match_47681 = shadow.cljs.devtools.client.browser.match_paths(node_47680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47681)){
var new_link_47682 = (function (){var G__47410 = node_47680.cloneNode(true);
G__47410.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47681),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47410;
})();
(node_47680.shadow$old = true);

(new_link_47682.onload = ((function (seq__47367_47623,chunk__47371_47624,count__47372_47625,i__47373_47626,seq__47199,chunk__47201,count__47202,i__47203,new_link_47682,path_match_47681,node_47680,seq__47367_47674__$1,temp__5753__auto___47673__$1,path,seq__47199__$1,temp__5753__auto__,map__47198,map__47198__$1,msg,updates,reload_info){
return (function (e){
var seq__47411_47683 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47413_47684 = null;
var count__47414_47685 = (0);
var i__47415_47686 = (0);
while(true){
if((i__47415_47686 < count__47414_47685)){
var map__47419_47687 = chunk__47413_47684.cljs$core$IIndexed$_nth$arity$2(null,i__47415_47686);
var map__47419_47688__$1 = cljs.core.__destructure_map(map__47419_47687);
var task_47689 = map__47419_47688__$1;
var fn_str_47690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47419_47688__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47419_47688__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47692 = goog.getObjectByName(fn_str_47690,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47691)].join(''));

(fn_obj_47692.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47692.cljs$core$IFn$_invoke$arity$2(path,new_link_47682) : fn_obj_47692.call(null,path,new_link_47682));


var G__47693 = seq__47411_47683;
var G__47694 = chunk__47413_47684;
var G__47695 = count__47414_47685;
var G__47696 = (i__47415_47686 + (1));
seq__47411_47683 = G__47693;
chunk__47413_47684 = G__47694;
count__47414_47685 = G__47695;
i__47415_47686 = G__47696;
continue;
} else {
var temp__5753__auto___47697__$2 = cljs.core.seq(seq__47411_47683);
if(temp__5753__auto___47697__$2){
var seq__47411_47698__$1 = temp__5753__auto___47697__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47411_47698__$1)){
var c__4679__auto___47699 = cljs.core.chunk_first(seq__47411_47698__$1);
var G__47700 = cljs.core.chunk_rest(seq__47411_47698__$1);
var G__47701 = c__4679__auto___47699;
var G__47702 = cljs.core.count(c__4679__auto___47699);
var G__47703 = (0);
seq__47411_47683 = G__47700;
chunk__47413_47684 = G__47701;
count__47414_47685 = G__47702;
i__47415_47686 = G__47703;
continue;
} else {
var map__47420_47704 = cljs.core.first(seq__47411_47698__$1);
var map__47420_47705__$1 = cljs.core.__destructure_map(map__47420_47704);
var task_47706 = map__47420_47705__$1;
var fn_str_47707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420_47705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420_47705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47709 = goog.getObjectByName(fn_str_47707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47708)].join(''));

(fn_obj_47709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47709.cljs$core$IFn$_invoke$arity$2(path,new_link_47682) : fn_obj_47709.call(null,path,new_link_47682));


var G__47710 = cljs.core.next(seq__47411_47698__$1);
var G__47711 = null;
var G__47712 = (0);
var G__47713 = (0);
seq__47411_47683 = G__47710;
chunk__47413_47684 = G__47711;
count__47414_47685 = G__47712;
i__47415_47686 = G__47713;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47680);
});})(seq__47367_47623,chunk__47371_47624,count__47372_47625,i__47373_47626,seq__47199,chunk__47201,count__47202,i__47203,new_link_47682,path_match_47681,node_47680,seq__47367_47674__$1,temp__5753__auto___47673__$1,path,seq__47199__$1,temp__5753__auto__,map__47198,map__47198__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47681], 0));

goog.dom.insertSiblingAfter(new_link_47682,node_47680);


var G__47714 = cljs.core.next(seq__47367_47674__$1);
var G__47715 = null;
var G__47716 = (0);
var G__47717 = (0);
seq__47367_47623 = G__47714;
chunk__47371_47624 = G__47715;
count__47372_47625 = G__47716;
i__47373_47626 = G__47717;
continue;
} else {
var G__47718 = cljs.core.next(seq__47367_47674__$1);
var G__47719 = null;
var G__47720 = (0);
var G__47721 = (0);
seq__47367_47623 = G__47718;
chunk__47371_47624 = G__47719;
count__47372_47625 = G__47720;
i__47373_47626 = G__47721;
continue;
}
} else {
var G__47722 = cljs.core.next(seq__47367_47674__$1);
var G__47723 = null;
var G__47724 = (0);
var G__47725 = (0);
seq__47367_47623 = G__47722;
chunk__47371_47624 = G__47723;
count__47372_47625 = G__47724;
i__47373_47626 = G__47725;
continue;
}
}
} else {
}
}
break;
}


var G__47726 = cljs.core.next(seq__47199__$1);
var G__47727 = null;
var G__47728 = (0);
var G__47729 = (0);
seq__47199 = G__47726;
chunk__47201 = G__47727;
count__47202 = G__47728;
i__47203 = G__47729;
continue;
} else {
var G__47730 = cljs.core.next(seq__47199__$1);
var G__47731 = null;
var G__47732 = (0);
var G__47733 = (0);
seq__47199 = G__47730;
chunk__47201 = G__47731;
count__47202 = G__47732;
i__47203 = G__47733;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47421){
var map__47422 = p__47421;
var map__47422__$1 = cljs.core.__destructure_map(map__47422);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47422__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47423){
var map__47424 = p__47423;
var map__47424__$1 = cljs.core.__destructure_map(map__47424);
var _ = map__47424__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47424__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47425,done,error){
var map__47426 = p__47425;
var map__47426__$1 = cljs.core.__destructure_map(map__47426);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47426__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47427,done,error){
var map__47428 = p__47427;
var map__47428__$1 = cljs.core.__destructure_map(map__47428);
var msg = map__47428__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47428__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47428__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47428__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47429){
var map__47430 = p__47429;
var map__47430__$1 = cljs.core.__destructure_map(map__47430);
var src = map__47430__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47430__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47431 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47431) : done.call(null,G__47431));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47432){
var map__47433 = p__47432;
var map__47433__$1 = cljs.core.__destructure_map(map__47433);
var msg__$1 = map__47433__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47433__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47434){var ex = e47434;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47435){
var map__47436 = p__47435;
var map__47436__$1 = cljs.core.__destructure_map(map__47436);
var env = map__47436__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47436__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47437){
var map__47438 = p__47437;
var map__47438__$1 = cljs.core.__destructure_map(map__47438);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47438__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47438__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__47439){
var map__47440 = p__47439;
var map__47440__$1 = cljs.core.__destructure_map(map__47440);
var svc = map__47440__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
