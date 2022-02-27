goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43462){
var map__43466 = p__43462;
var map__43466__$1 = cljs.core.__destructure_map(map__43466);
var m = map__43466__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43493_43799 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43494_43800 = null;
var count__43495_43801 = (0);
var i__43496_43802 = (0);
while(true){
if((i__43496_43802 < count__43495_43801)){
var f_43804 = chunk__43494_43800.cljs$core$IIndexed$_nth$arity$2(null,i__43496_43802);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43804], 0));


var G__43805 = seq__43493_43799;
var G__43806 = chunk__43494_43800;
var G__43807 = count__43495_43801;
var G__43808 = (i__43496_43802 + (1));
seq__43493_43799 = G__43805;
chunk__43494_43800 = G__43806;
count__43495_43801 = G__43807;
i__43496_43802 = G__43808;
continue;
} else {
var temp__5753__auto___43809 = cljs.core.seq(seq__43493_43799);
if(temp__5753__auto___43809){
var seq__43493_43810__$1 = temp__5753__auto___43809;
if(cljs.core.chunked_seq_QMARK_(seq__43493_43810__$1)){
var c__4679__auto___43811 = cljs.core.chunk_first(seq__43493_43810__$1);
var G__43812 = cljs.core.chunk_rest(seq__43493_43810__$1);
var G__43813 = c__4679__auto___43811;
var G__43814 = cljs.core.count(c__4679__auto___43811);
var G__43815 = (0);
seq__43493_43799 = G__43812;
chunk__43494_43800 = G__43813;
count__43495_43801 = G__43814;
i__43496_43802 = G__43815;
continue;
} else {
var f_43817 = cljs.core.first(seq__43493_43810__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43817], 0));


var G__43818 = cljs.core.next(seq__43493_43810__$1);
var G__43819 = null;
var G__43820 = (0);
var G__43821 = (0);
seq__43493_43799 = G__43818;
chunk__43494_43800 = G__43819;
count__43495_43801 = G__43820;
i__43496_43802 = G__43821;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43822 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43822], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43822)))?cljs.core.second(arglists_43822):arglists_43822)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43524_43838 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43525_43839 = null;
var count__43526_43840 = (0);
var i__43527_43841 = (0);
while(true){
if((i__43527_43841 < count__43526_43840)){
var vec__43550_43842 = chunk__43525_43839.cljs$core$IIndexed$_nth$arity$2(null,i__43527_43841);
var name_43843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43550_43842,(0),null);
var map__43553_43844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43550_43842,(1),null);
var map__43553_43845__$1 = cljs.core.__destructure_map(map__43553_43844);
var doc_43846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43553_43845__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43553_43845__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43843], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43847], 0));

if(cljs.core.truth_(doc_43846)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43846], 0));
} else {
}


var G__43853 = seq__43524_43838;
var G__43854 = chunk__43525_43839;
var G__43855 = count__43526_43840;
var G__43856 = (i__43527_43841 + (1));
seq__43524_43838 = G__43853;
chunk__43525_43839 = G__43854;
count__43526_43840 = G__43855;
i__43527_43841 = G__43856;
continue;
} else {
var temp__5753__auto___43857 = cljs.core.seq(seq__43524_43838);
if(temp__5753__auto___43857){
var seq__43524_43858__$1 = temp__5753__auto___43857;
if(cljs.core.chunked_seq_QMARK_(seq__43524_43858__$1)){
var c__4679__auto___43859 = cljs.core.chunk_first(seq__43524_43858__$1);
var G__43860 = cljs.core.chunk_rest(seq__43524_43858__$1);
var G__43861 = c__4679__auto___43859;
var G__43862 = cljs.core.count(c__4679__auto___43859);
var G__43863 = (0);
seq__43524_43838 = G__43860;
chunk__43525_43839 = G__43861;
count__43526_43840 = G__43862;
i__43527_43841 = G__43863;
continue;
} else {
var vec__43569_43864 = cljs.core.first(seq__43524_43858__$1);
var name_43865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43569_43864,(0),null);
var map__43572_43866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43569_43864,(1),null);
var map__43572_43867__$1 = cljs.core.__destructure_map(map__43572_43866);
var doc_43868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572_43867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572_43867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43865], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43869], 0));

if(cljs.core.truth_(doc_43868)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43868], 0));
} else {
}


var G__43873 = cljs.core.next(seq__43524_43858__$1);
var G__43874 = null;
var G__43875 = (0);
var G__43876 = (0);
seq__43524_43838 = G__43873;
chunk__43525_43839 = G__43874;
count__43526_43840 = G__43875;
i__43527_43841 = G__43876;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43577 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43578 = null;
var count__43579 = (0);
var i__43580 = (0);
while(true){
if((i__43580 < count__43579)){
var role = chunk__43578.cljs$core$IIndexed$_nth$arity$2(null,i__43580);
var temp__5753__auto___43879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43879__$1)){
var spec_43880 = temp__5753__auto___43879__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43880)], 0));
} else {
}


var G__43882 = seq__43577;
var G__43883 = chunk__43578;
var G__43884 = count__43579;
var G__43885 = (i__43580 + (1));
seq__43577 = G__43882;
chunk__43578 = G__43883;
count__43579 = G__43884;
i__43580 = G__43885;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43577);
if(temp__5753__auto____$1){
var seq__43577__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43577__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43577__$1);
var G__43888 = cljs.core.chunk_rest(seq__43577__$1);
var G__43889 = c__4679__auto__;
var G__43890 = cljs.core.count(c__4679__auto__);
var G__43891 = (0);
seq__43577 = G__43888;
chunk__43578 = G__43889;
count__43579 = G__43890;
i__43580 = G__43891;
continue;
} else {
var role = cljs.core.first(seq__43577__$1);
var temp__5753__auto___43893__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43893__$2)){
var spec_43894 = temp__5753__auto___43893__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43894)], 0));
} else {
}


var G__43895 = cljs.core.next(seq__43577__$1);
var G__43896 = null;
var G__43897 = (0);
var G__43898 = (0);
seq__43577 = G__43895;
chunk__43578 = G__43896;
count__43579 = G__43897;
i__43580 = G__43898;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43903 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43904 = cljs.core.ex_cause(t);
via = G__43903;
t = G__43904;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43627 = datafied_throwable;
var map__43627__$1 = cljs.core.__destructure_map(map__43627);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43627__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43627__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43627__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43628 = cljs.core.last(via);
var map__43628__$1 = cljs.core.__destructure_map(map__43628);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43628__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43629 = data;
var map__43629__$1 = cljs.core.__destructure_map(map__43629);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43629__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43629__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43629__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43630 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43630__$1 = cljs.core.__destructure_map(map__43630);
var top_data = map__43630__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43636 = phase;
var G__43636__$1 = (((G__43636 instanceof cljs.core.Keyword))?G__43636.fqn:null);
switch (G__43636__$1) {
case "read-source":
var map__43645 = data;
var map__43645__$1 = cljs.core.__destructure_map(map__43645);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43655 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43655__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43655,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43655);
var G__43655__$2 = (cljs.core.truth_((function (){var fexpr__43662 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43662.cljs$core$IFn$_invoke$arity$1 ? fexpr__43662.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43662.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43655__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43655__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43655__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43655__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43663 = top_data;
var G__43663__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43663,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43663);
var G__43663__$2 = (cljs.core.truth_((function (){var fexpr__43664 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43664.cljs$core$IFn$_invoke$arity$1 ? fexpr__43664.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43664.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43663__$1);
var G__43663__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43663__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43663__$2);
var G__43663__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43663__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43663__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43663__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43663__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43666 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(3),null);
var G__43669 = top_data;
var G__43669__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43669,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43669);
var G__43669__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43669__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43669__$1);
var G__43669__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43669__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43669__$2);
var G__43669__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43669__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43669__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43669__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43669__$4;
}

break;
case "execution":
var vec__43671 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43625_SHARP_){
var or__4253__auto__ = (p1__43625_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__43676 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43676.cljs$core$IFn$_invoke$arity$1 ? fexpr__43676.cljs$core$IFn$_invoke$arity$1(p1__43625_SHARP_) : fexpr__43676.call(null,p1__43625_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__43678 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43678__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43678,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43678);
var G__43678__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43678__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43678__$1);
var G__43678__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43678__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43678__$2);
var G__43678__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43678__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43678__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43678__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43678__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43636__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43710){
var map__43711 = p__43710;
var map__43711__$1 = cljs.core.__destructure_map(map__43711);
var triage_data = map__43711__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43713 = phase;
var G__43713__$1 = (((G__43713 instanceof cljs.core.Keyword))?G__43713.fqn:null);
switch (G__43713__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43714 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43715 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43716 = loc;
var G__43717 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43722_43945 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43723_43946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43724_43947 = true;
var _STAR_print_fn_STAR__temp_val__43725_43948 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43724_43947);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43725_43948);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43704_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43704_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43723_43946);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43722_43945);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43714,G__43715,G__43716,G__43717) : format.call(null,G__43714,G__43715,G__43716,G__43717));

break;
case "macroexpansion":
var G__43733 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43734 = cause_type;
var G__43735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43736 = loc;
var G__43737 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43733,G__43734,G__43735,G__43736,G__43737) : format.call(null,G__43733,G__43734,G__43735,G__43736,G__43737));

break;
case "compile-syntax-check":
var G__43738 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43739 = cause_type;
var G__43740 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43741 = loc;
var G__43742 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43738,G__43739,G__43740,G__43741,G__43742) : format.call(null,G__43738,G__43739,G__43740,G__43741,G__43742));

break;
case "compilation":
var G__43744 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43745 = cause_type;
var G__43746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43747 = loc;
var G__43748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43744,G__43745,G__43746,G__43747,G__43748) : format.call(null,G__43744,G__43745,G__43746,G__43747,G__43748));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43752 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43753 = symbol;
var G__43754 = loc;
var G__43755 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43757_43953 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43758_43954 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43759_43955 = true;
var _STAR_print_fn_STAR__temp_val__43760_43956 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43759_43955);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43760_43956);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43706_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43706_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43758_43954);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43757_43953);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43752,G__43753,G__43754,G__43755) : format.call(null,G__43752,G__43753,G__43754,G__43755));
} else {
var G__43766 = "Execution error%s at %s(%s).\n%s\n";
var G__43767 = cause_type;
var G__43768 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43769 = loc;
var G__43770 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43766,G__43767,G__43768,G__43769,G__43770) : format.call(null,G__43766,G__43767,G__43768,G__43769,G__43770));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43713__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
