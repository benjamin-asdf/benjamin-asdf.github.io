goog.provide('cljs.spec.alpha');
goog.scope(function(){
  cljs.spec.alpha.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

var cljs$spec$alpha$Spec$conform_STAR_$dyn_38979 = (function (spec,x){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4551__auto__.call(null,spec,x));
} else {
var m__4549__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4549__auto__.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
});
cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
return cljs$spec$alpha$Spec$conform_STAR_$dyn_38979(spec,x);
}
});

var cljs$spec$alpha$Spec$unform_STAR_$dyn_38981 = (function (spec,y){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4551__auto__.call(null,spec,y));
} else {
var m__4549__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4549__auto__.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
});
cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
return cljs$spec$alpha$Spec$unform_STAR_$dyn_38981(spec,y);
}
});

var cljs$spec$alpha$Spec$explain_STAR_$dyn_38985 = (function (spec,path,via,in$,x){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4551__auto__.call(null,spec,path,via,in$,x));
} else {
var m__4549__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4549__auto__.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
});
cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
return cljs$spec$alpha$Spec$explain_STAR_$dyn_38985(spec,path,via,in$,x);
}
});

var cljs$spec$alpha$Spec$gen_STAR_$dyn_38986 = (function (spec,overrides,path,rmap){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4551__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__4549__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4549__auto__.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
});
cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
return cljs$spec$alpha$Spec$gen_STAR_$dyn_38986(spec,overrides,path,rmap);
}
});

var cljs$spec$alpha$Spec$with_gen_STAR_$dyn_38987 = (function (spec,gfn){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4551__auto__.call(null,spec,gfn));
} else {
var m__4549__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4549__auto__.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
});
cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
return cljs$spec$alpha$Spec$with_gen_STAR_$dyn_38987(spec,gfn);
}
});

var cljs$spec$alpha$Spec$describe_STAR_$dyn_38989 = (function (spec){
var x__4550__auto__ = (((spec == null))?null:spec);
var m__4551__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4551__auto__.call(null,spec));
} else {
var m__4549__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4549__auto__.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
});
cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
return cljs$spec$alpha$Spec$describe_STAR_$dyn_38989(spec);
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__38990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__38990;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if((!(cljs.core.ident_QMARK_(spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__4253__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4251__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4251__auto__)){
return x;
} else {
return and__4251__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__4251__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name(cljs.spec.alpha.regex_spec_impl(s,null),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4253__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_(f_n)){
return null;
} else {
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(f_n,"$"));
if(((((2) <= cljs.core.count(xs))) && (cljs.core.every_QMARK_((function (p1__37786_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__37786_SHARP_)));
}),xs)))){
var vec__37791 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.last)(xs);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",xs__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

var cljs$spec$alpha$Specize$specize_STAR_$dyn_38992 = (function() {
var G__38993 = null;
var G__38993__1 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
});
var G__38993__2 = (function (_,form){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4551__auto__.call(null,_,form));
} else {
var m__4549__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4549__auto__.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
});
G__38993 = function(_,form){
switch(arguments.length){
case 1:
return G__38993__1.call(this,_);
case 2:
return G__38993__2.call(this,_,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38993.cljs$core$IFn$_invoke$arity$1 = G__38993__1;
G__38993.cljs$core$IFn$_invoke$arity$2 = G__38993__2;
return G__38993;
})()
;
cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__37814 = arguments.length;
switch (G__37814) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_38992(_);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_38992(_,form);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2);


(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
}));

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
}));

(cljs.spec.alpha.Specize["_"] = true);

(cljs.spec.alpha.specize_STAR_["_"] = (function() {
var G__38998 = null;
var G__38998__1 = (function (o){
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.fn_QMARK_(o);
if(and__4251__auto__){
return cljs.spec.alpha.fn_sym(o.name);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var f_n = temp__5751__auto__;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
var G__38998__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null);
});
G__38998 = function(o,form){
switch(arguments.length){
case 1:
return G__38998__1.call(this,o);
case 2:
return G__38998__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38998.cljs$core$IFn$_invoke$arity$1 = G__38998__1;
G__38998.cljs$core$IFn$_invoke$arity$2 = G__38998__2;
return G__38998;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__37854 = arguments.length;
switch (G__37854) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4253__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.specize_STAR_(s);
}
}));

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4253__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.specize_STAR_(s,form);
}
}));

(cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2);

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__4251__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4251__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if(((cljs.core.seq_QMARK_(form__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second(form__$1))))))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (form instanceof cljs.core.Symbol);
if(and__4251__auto__){
return cljs.core.namespace(form);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5753__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5753__auto__)){
var probs = temp__5753__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__37916_SHARP_){
return (- cljs.core.count(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__37916_SHARP_)));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__37915_SHARP_){
return (- cljs.core.count(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__37915_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37919_39012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37920_39013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37922_39014 = true;
var _STAR_print_fn_STAR__temp_val__37923_39015 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37922_39014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37923_39015);

try{var seq__37927_39016 = cljs.core.seq(problems);
var chunk__37928_39017 = null;
var count__37929_39018 = (0);
var i__37930_39019 = (0);
while(true){
if((i__37930_39019 < count__37929_39018)){
var map__37998_39020 = chunk__37928_39017.cljs$core$IIndexed$_nth$arity$2(null,i__37930_39019);
var map__37998_39021__$1 = cljs.core.__destructure_map(map__37998_39020);
var prob_39022 = map__37998_39021__$1;
var path_39023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_39024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_39021__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_39025], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_39026)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_39026], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_39024)], 0));
}

if(cljs.core.empty_QMARK_(in_39028)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_39028], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_39023)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_39023], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_39027)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_39027)], 0))].join('')], 0));
}

var seq__38000_39030 = cljs.core.seq(prob_39022);
var chunk__38001_39031 = null;
var count__38002_39032 = (0);
var i__38003_39033 = (0);
while(true){
if((i__38003_39033 < count__38002_39032)){
var vec__38017_39035 = chunk__38001_39031.cljs$core$IIndexed$_nth$arity$2(null,i__38003_39033);
var k_39036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38017_39035,(0),null);
var v_39037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38017_39035,(1),null);
if(cljs.core.truth_((function (){var fexpr__38020 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__38020.cljs$core$IFn$_invoke$arity$1 ? fexpr__38020.cljs$core$IFn$_invoke$arity$1(k_39036) : fexpr__38020.call(null,k_39036));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_39036], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_39037], 0));
}


var G__39045 = seq__38000_39030;
var G__39046 = chunk__38001_39031;
var G__39047 = count__38002_39032;
var G__39048 = (i__38003_39033 + (1));
seq__38000_39030 = G__39045;
chunk__38001_39031 = G__39046;
count__38002_39032 = G__39047;
i__38003_39033 = G__39048;
continue;
} else {
var temp__5753__auto___39049 = cljs.core.seq(seq__38000_39030);
if(temp__5753__auto___39049){
var seq__38000_39051__$1 = temp__5753__auto___39049;
if(cljs.core.chunked_seq_QMARK_(seq__38000_39051__$1)){
var c__4679__auto___39052 = cljs.core.chunk_first(seq__38000_39051__$1);
var G__39053 = cljs.core.chunk_rest(seq__38000_39051__$1);
var G__39054 = c__4679__auto___39052;
var G__39055 = cljs.core.count(c__4679__auto___39052);
var G__39056 = (0);
seq__38000_39030 = G__39053;
chunk__38001_39031 = G__39054;
count__38002_39032 = G__39055;
i__38003_39033 = G__39056;
continue;
} else {
var vec__38021_39057 = cljs.core.first(seq__38000_39051__$1);
var k_39058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_39057,(0),null);
var v_39059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_39057,(1),null);
if(cljs.core.truth_((function (){var fexpr__38024 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__38024.cljs$core$IFn$_invoke$arity$1 ? fexpr__38024.cljs$core$IFn$_invoke$arity$1(k_39058) : fexpr__38024.call(null,k_39058));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_39058], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_39059], 0));
}


var G__39062 = cljs.core.next(seq__38000_39051__$1);
var G__39063 = null;
var G__39064 = (0);
var G__39065 = (0);
seq__38000_39030 = G__39062;
chunk__38001_39031 = G__39063;
count__38002_39032 = G__39064;
i__38003_39033 = G__39065;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__39066 = seq__37927_39016;
var G__39067 = chunk__37928_39017;
var G__39068 = count__37929_39018;
var G__39069 = (i__37930_39019 + (1));
seq__37927_39016 = G__39066;
chunk__37928_39017 = G__39067;
count__37929_39018 = G__39068;
i__37930_39019 = G__39069;
continue;
} else {
var temp__5753__auto___39070 = cljs.core.seq(seq__37927_39016);
if(temp__5753__auto___39070){
var seq__37927_39072__$1 = temp__5753__auto___39070;
if(cljs.core.chunked_seq_QMARK_(seq__37927_39072__$1)){
var c__4679__auto___39075 = cljs.core.chunk_first(seq__37927_39072__$1);
var G__39076 = cljs.core.chunk_rest(seq__37927_39072__$1);
var G__39077 = c__4679__auto___39075;
var G__39078 = cljs.core.count(c__4679__auto___39075);
var G__39079 = (0);
seq__37927_39016 = G__39076;
chunk__37928_39017 = G__39077;
count__37929_39018 = G__39078;
i__37930_39019 = G__39079;
continue;
} else {
var map__38025_39081 = cljs.core.first(seq__37927_39072__$1);
var map__38025_39082__$1 = cljs.core.__destructure_map(map__38025_39081);
var prob_39083 = map__38025_39082__$1;
var path_39084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_39085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025_39082__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_39086], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_39087)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_39087], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_39085)], 0));
}

if(cljs.core.empty_QMARK_(in_39089)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_39089], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_39084)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_39084], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_39088)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_39088)], 0))].join('')], 0));
}

var seq__38033_39090 = cljs.core.seq(prob_39083);
var chunk__38034_39091 = null;
var count__38035_39092 = (0);
var i__38036_39093 = (0);
while(true){
if((i__38036_39093 < count__38035_39092)){
var vec__38046_39094 = chunk__38034_39091.cljs$core$IIndexed$_nth$arity$2(null,i__38036_39093);
var k_39095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046_39094,(0),null);
var v_39096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046_39094,(1),null);
if(cljs.core.truth_((function (){var fexpr__38050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__38050.cljs$core$IFn$_invoke$arity$1 ? fexpr__38050.cljs$core$IFn$_invoke$arity$1(k_39095) : fexpr__38050.call(null,k_39095));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_39095], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_39096], 0));
}


var G__39102 = seq__38033_39090;
var G__39103 = chunk__38034_39091;
var G__39104 = count__38035_39092;
var G__39105 = (i__38036_39093 + (1));
seq__38033_39090 = G__39102;
chunk__38034_39091 = G__39103;
count__38035_39092 = G__39104;
i__38036_39093 = G__39105;
continue;
} else {
var temp__5753__auto___39107__$1 = cljs.core.seq(seq__38033_39090);
if(temp__5753__auto___39107__$1){
var seq__38033_39108__$1 = temp__5753__auto___39107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38033_39108__$1)){
var c__4679__auto___39109 = cljs.core.chunk_first(seq__38033_39108__$1);
var G__39110 = cljs.core.chunk_rest(seq__38033_39108__$1);
var G__39111 = c__4679__auto___39109;
var G__39112 = cljs.core.count(c__4679__auto___39109);
var G__39113 = (0);
seq__38033_39090 = G__39110;
chunk__38034_39091 = G__39111;
count__38035_39092 = G__39112;
i__38036_39093 = G__39113;
continue;
} else {
var vec__38055_39114 = cljs.core.first(seq__38033_39108__$1);
var k_39115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055_39114,(0),null);
var v_39116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055_39114,(1),null);
if(cljs.core.truth_((function (){var fexpr__38058 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__38058.cljs$core$IFn$_invoke$arity$1 ? fexpr__38058.cljs$core$IFn$_invoke$arity$1(k_39115) : fexpr__38058.call(null,k_39115));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_39115], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_39116], 0));
}


var G__39122 = cljs.core.next(seq__38033_39108__$1);
var G__39123 = null;
var G__39124 = (0);
var G__39125 = (0);
seq__38033_39090 = G__39122;
chunk__38034_39091 = G__39123;
count__38035_39092 = G__39124;
i__38036_39093 = G__39125;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__39126 = cljs.core.next(seq__37927_39072__$1);
var G__39127 = null;
var G__39128 = (0);
var G__39129 = (0);
seq__37927_39016 = G__39126;
chunk__37928_39017 = G__39127;
count__37929_39018 = G__39128;
i__37930_39019 = G__39129;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37920_39013);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37919_39012);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38062_39133 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38063_39134 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38064_39135 = true;
var _STAR_print_fn_STAR__temp_val__38065_39136 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38064_39135);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38065_39136);

try{cljs.spec.alpha.explain(spec,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38063_39134);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38062_39133);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5751__auto__ = (function (){var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__4253__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var gfn = temp__5753__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var g = temp__5751__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38066_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__38066_SHARP_);
}),g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__38070 = arguments.length;
switch (G__38070) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
}));

(cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2);

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.ident_QMARK_(k);
if(and__4251__auto__){
return cljs.core.namespace(k);
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_39154__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec_39154__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5753__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5753__auto__)){
var arg_spec = temp__5753__auto__;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__38081 = arguments.length;
switch (G__38081) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
}));

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5751__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
}));

(cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4);

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__38090 = arguments.length;
switch (G__38090) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first(f))){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((1),cljs.core.rest(f));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(f))){
return cljs.spec.alpha.and_k_gen(cljs.core.rest(f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((0),s);
}));

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([min_count,cljs.core.count(s)], 0)),cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s)], 0))], 0)),(function (p__38100){
var vec__38101 = p__38100;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(0),null);
var gens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,gens));
})], 0));
}));

(cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2);

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__38107){
var map__38108 = p__38107;
var map__38108__$1 = cljs.core.__destructure_map(map__38108);
var argm = map__38108__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = (function (p1__38104_SHARP_){
var or__4253__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__38104_SHARP_) : k__GT_s.call(null,p1__38104_SHARP_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__38104_SHARP_;
}
});
var id = cljs.core.random_uuid();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38113 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__38108,req,id,p__38107,req_keys,opt_specs,k__GT_s,pred_forms,meta38114){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__38108 = map__38108;
this.req = req;
this.id = id;
this.p__38107 = p__38107;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta38114 = meta38114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38115,meta38114__$1){
var self__ = this;
var _38115__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38113(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__38108,self__.req,self__.id,self__.p__38107,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta38114__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38115){
var self__ = this;
var _38115__$1 = this;
return self__.meta38114;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__38122 = m;
var vec__38124 = G__38122;
var seq__38125 = cljs.core.seq(vec__38124);
var first__38126 = cljs.core.first(seq__38125);
var seq__38125__$1 = cljs.core.next(seq__38125);
var vec__38127 = first__38126;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(1),null);
var ks = seq__38125__$1;
var keys = vec__38124;
var ret__$1 = ret;
var G__38122__$1 = G__38122;
while(true){
var ret__$2 = ret__$1;
var vec__38133 = G__38122__$1;
var seq__38134 = cljs.core.seq(vec__38133);
var first__38135 = cljs.core.first(seq__38134);
var seq__38134__$1 = cljs.core.next(seq__38134);
var vec__38136 = first__38135;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(1),null);
var ks__$1 = seq__38134__$1;
var keys__$1 = vec__38133;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5751__auto__)){
var s = temp__5751__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__39328 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__39329 = ks__$1;
ret__$1 = G__39328;
G__38122__$1 = G__39329;
continue;
}
} else {
var G__39330 = ret__$2;
var G__39331 = ks__$1;
ret__$1 = G__39330;
G__38122__$1 = G__39331;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__38143 = cljs.core.keys(m);
var vec__38144 = G__38143;
var seq__38145 = cljs.core.seq(vec__38144);
var first__38146 = cljs.core.first(seq__38145);
var seq__38145__$1 = cljs.core.next(seq__38145);
var k = first__38146;
var ks = seq__38145__$1;
var keys = vec__38144;
var ret__$1 = ret;
var G__38143__$1 = G__38143;
while(true){
var ret__$2 = ret__$1;
var vec__38150 = G__38143__$1;
var seq__38151 = cljs.core.seq(vec__38150);
var first__38152 = cljs.core.first(seq__38151);
var seq__38151__$1 = cljs.core.next(seq__38151);
var k__$1 = first__38152;
var ks__$1 = seq__38151__$1;
var keys__$1 = vec__38150;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__39334 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__39335 = ks__$1;
ret__$1 = G__39334;
G__38143__$1 = G__39335;
continue;
} else {
var G__39336 = ret__$2;
var G__39337 = ks__$1;
ret__$1 = G__39336;
G__38143__$1 = G__39337;
continue;
}
} else {
return ret__$2;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
}),self__.pred_exprs,self__.pred_forms)));
if(temp__5753__auto__){
var probs = temp__5753__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38105_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__38105_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}),probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38154){
var vec__38155 = p__38154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155,(1),null);
if((((!(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)))))) || (cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
}),cljs.core.seq(x)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var rgen = (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k)], null);
});
var ogen = (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
}),null)))], null);
}
});
var reqs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,reqs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.and_k_gen(self__.req),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt),cljs.spec.alpha.and_k_gen(self__.req_un),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt_un)], 0)),(function (p__38159){
var vec__38160 = p__38159;
var req_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(0),null);
var opt_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(1),null);
var req_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(2),null);
var opt_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(3),null);
var qks = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_ks,opt_ks));
var unqks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name),cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_un_ks,opt_un_ks)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38106_SHARP_){
var G__38164 = cljs.core.first(p1__38106_SHARP_);
var fexpr__38163 = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(qks,unqks));
return (fexpr__38163.cljs$core$IFn$_invoke$arity$1 ? fexpr__38163.cljs$core$IFn$_invoke$arity$1(G__38164) : fexpr__38163.call(null,G__38164));
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(reqs,opts))));
})], 0));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__38165 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__38165) : cljs.spec.alpha.map_spec_impl.call(null,G__38165));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__38166 = cljs.core.PersistentVector.EMPTY;
var G__38166__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__38166,new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__38166);
var G__38166__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__38166__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__38166__$1);
var G__38166__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__38166__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__38166__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__38166__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__38166__$3;
}
})());
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__38108","map__38108",-1631894896,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__38107","p__38107",-1862415941,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta38114","meta38114",1420846325,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38113.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38113.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38113");

(cljs.spec.alpha.t_cljs$spec$alpha38113.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38113");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38113.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38113 = (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha38113(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__38108__$2,req__$1,id__$1,p__38107__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta38114){
return (new cljs.spec.alpha.t_cljs$spec$alpha38113(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__38108__$2,req__$1,id__$1,p__38107__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta38114));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38113(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__38108__$1,req,id,p__38107,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__38173 = arguments.length;
switch (G__38173) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
}));

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__38174 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__38174,gfn);
} else {
return G__38174;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return cljs.spec.alpha.regex_spec_impl(pred,gfn);
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__38175 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__38175,gfn);
} else {
return G__38175;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38176 = (function (form,pred,gfn,cpred_QMARK_,unc,meta38177){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta38177 = meta38177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38178,meta38177__$1){
var self__ = this;
var _38178__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38176(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta38177__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38178){
var self__ = this;
var _38178__$1 = this;
return self__.meta38177;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta38177","meta38177",1087216796,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38176.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38176.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38176");

(cljs.spec.alpha.t_cljs$spec$alpha38176.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38176");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38176.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38176 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha38176(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta38177){
return (new cljs.spec.alpha.t_cljs$spec$alpha38176(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta38177));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38176(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
}));

(cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5);

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__38202 = arguments.length;
switch (G__38202) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
}));

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = (function (p1__38179_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__4251__auto__ = cljs.core._get_method(mm,(function (){var fexpr__38203 = cljs.core._dispatch_fn(mm);
return (fexpr__38203.cljs$core$IFn$_invoke$arity$1 ? fexpr__38203.cljs$core$IFn$_invoke$arity$1(p1__38179_SHARP_) : fexpr__38203.call(null,p1__38179_SHARP_));
})());
if(cljs.core.truth_(and__4251__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__38179_SHARP_) : mm.call(null,p1__38179_SHARP_));
} else {
return and__4251__auto__;
}
});
var dval = (function (p1__38180_SHARP_){
var fexpr__38204 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__38204.cljs$core$IFn$_invoke$arity$1 ? fexpr__38204.cljs$core$IFn$_invoke$arity$1(p1__38180_SHARP_) : fexpr__38204.call(null,p1__38180_SHARP_));
});
var tag = (((retag instanceof cljs.core.Keyword))?(function (p1__38181_SHARP_,p2__38182_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38181_SHARP_,retag,p2__38182_SHARP_);
}):retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38207 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta38208){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta38208 = meta38208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38209,meta38208__$1){
var self__ = this;
var _38209__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38207(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta38208__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38209){
var self__ = this;
var _38209__$1 = this;
return self__.meta38208;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5751__auto__)){
var pred = temp__5751__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (p__38213){
var vec__38218 = p__38213;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38183_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__38183_SHARP_,k) : self__.tag.call(null,p1__38183_SHARP_,k));
}),cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null)))], 0));
}),null)));
}
});
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38229){
var vec__38230 = p__38229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38230,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
}),cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.retag,null,(1),null))], 0))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta38208","meta38208",-624203561,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38207.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38207.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38207");

(cljs.spec.alpha.t_cljs$spec$alpha38207.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38207");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38207.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38207 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha38207(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta38208){
return (new cljs.spec.alpha.t_cljs$spec$alpha38207(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta38208));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38207(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4);

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__38251 = arguments.length;
switch (G__38251) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
}));

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38257 = (function (forms,preds,gfn,specs,cnt,meta38258){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta38258 = meta38258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38259,meta38258__$1){
var self__ = this;
var _38259__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38257(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta38258__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38259){
var self__ = this;
var _38259__$1 = this;
return self__.meta38258;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if((!(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__39353 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__39354 = (i + (1));
ret = G__39353;
i = G__39354;
continue;
}
}
break;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__39355 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__39356 = (i + (1));
ret = G__39355;
i = G__39356;
continue;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(self__.preds),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta38258","meta38258",-418817843,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38257.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38257.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38257");

(cljs.spec.alpha.t_cljs$spec$alpha38257.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38257");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38257.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38257 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha38257(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta38258){
return (new cljs.spec.alpha.t_cljs$spec$alpha38257(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta38258));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38257(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__38309 = cljs.core.count(preds);
switch (G__38309) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var G__39375 = (i + (1));
i = G__39375;
continue;
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38313 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta38314){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta38314 = meta38314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38315,meta38314__$1){
var self__ = this;
var _38315__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38313(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta38314__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38315){
var self__ = this;
var _38315__$1 = this;
return self__.meta38314;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,p__38316){
var self__ = this;
var vec__38317 = p__38316;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
}),self__.keys,self__.forms,self__.preds));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
}),null)));
}
});
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38313.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38313.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38313");

(cljs.spec.alpha.t_cljs$spec$alpha38313.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38313");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38313.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38313 = (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha38313(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta38314){
return (new cljs.spec.alpha.t_cljs$spec$alpha38313(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta38314));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38313(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__38330 = preds;
var vec__38332 = G__38330;
var seq__38333 = cljs.core.seq(vec__38332);
var first__38334 = cljs.core.first(seq__38333);
var seq__38333__$1 = cljs.core.next(seq__38333);
var pred = first__38334;
var preds__$1 = seq__38333__$1;
var G__38331 = forms;
var vec__38335 = G__38331;
var seq__38336 = cljs.core.seq(vec__38335);
var first__38337 = cljs.core.first(seq__38336);
var seq__38336__$1 = cljs.core.next(seq__38336);
var form = first__38337;
var forms__$1 = seq__38336__$1;
var ret__$1 = ret;
var G__38330__$1 = G__38330;
var G__38331__$1 = G__38331;
while(true){
var ret__$2 = ret__$1;
var vec__38338 = G__38330__$1;
var seq__38339 = cljs.core.seq(vec__38338);
var first__38340 = cljs.core.first(seq__38339);
var seq__38339__$1 = cljs.core.next(seq__38339);
var pred__$1 = first__38340;
var preds__$2 = seq__38339__$1;
var vec__38341 = G__38331__$1;
var seq__38342 = cljs.core.seq(vec__38341);
var first__38343 = cljs.core.first(seq__38342);
var seq__38342__$1 = cljs.core.next(seq__38342);
var form__$1 = first__38343;
var forms__$2 = seq__38342__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__39398 = nret;
var G__39399 = preds__$2;
var G__39400 = forms__$2;
ret__$1 = G__39398;
G__38330__$1 = G__39399;
G__38331__$1 = G__39400;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__38350 = forms;
var vec__38352 = G__38350;
var seq__38353 = cljs.core.seq(vec__38352);
var first__38354 = cljs.core.first(seq__38353);
var seq__38353__$1 = cljs.core.next(seq__38353);
var form = first__38354;
var forms__$1 = seq__38353__$1;
var G__38351 = preds;
var vec__38355 = G__38351;
var seq__38356 = cljs.core.seq(vec__38355);
var first__38357 = cljs.core.first(seq__38356);
var seq__38356__$1 = cljs.core.next(seq__38356);
var pred = first__38357;
var preds__$1 = seq__38356__$1;
var ret__$1 = ret;
var G__38350__$1 = G__38350;
var G__38351__$1 = G__38351;
while(true){
var ret__$2 = ret__$1;
var vec__38358 = G__38350__$1;
var seq__38359 = cljs.core.seq(vec__38358);
var first__38360 = cljs.core.first(seq__38359);
var seq__38359__$1 = cljs.core.next(seq__38359);
var form__$1 = first__38360;
var forms__$2 = seq__38359__$1;
var vec__38361 = G__38351__$1;
var seq__38362 = cljs.core.seq(vec__38361);
var first__38363 = cljs.core.first(seq__38362);
var seq__38362__$1 = cljs.core.next(seq__38362);
var pred__$1 = first__38363;
var preds__$2 = seq__38362__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__39408 = nret;
var G__39409 = forms__$2;
var G__39411 = preds__$2;
ret__$1 = G__39408;
G__38350__$1 = G__39409;
G__38351__$1 = G__39411;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__38367 = cljs.core.count(preds);
switch (G__38367) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__39419 = nret;
var G__39420 = (i + (1));
ret = G__39419;
i = G__39420;
continue;
}
} else {
return ret;
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38370 = (function (forms,preds,gfn,specs,cform,meta38371){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta38371 = meta38371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38372,meta38371__$1){
var self__ = this;
var _38372__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38370(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta38371__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38372){
var self__ = this;
var _38372__$1 = this;
return self__.meta38371;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38365_SHARP_,p2__38364_SHARP_){
return cljs.spec.alpha.unform(p2__38364_SHARP_,p1__38365_SHARP_);
}),x,cljs.core.reverse(self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta38371","meta38371",1386589725,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38370.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38370.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38370");

(cljs.spec.alpha.t_cljs$spec$alpha38370.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38370");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38370.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38370 = (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha38370(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta38371){
return (new cljs.spec.alpha.t_cljs$spec$alpha38370(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta38371));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38370(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4253__auto__ = kfn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4253__auto__ = kform;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = count;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!(((((function (){var or__4253__auto__ = min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4253__auto__ = max_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4253__auto__ = min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4253__auto__ = max_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = distinct;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(cljs.core.empty_QMARK_(x)))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38403 = (function (forms,preds,gfn,meta38404){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta38404 = meta38404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38405,meta38404__$1){
var self__ = this;
var _38405__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38403(self__.forms,self__.preds,self__.gfn,meta38404__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38405){
var self__ = this;
var _38405__$1 = this;
return self__.meta38404;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38395_SHARP_,p2__38396_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__38395_SHARP_,x,p2__38396_SHARP_);
}),self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38397_SHARP_){
return cljs.spec.alpha.unform(p1__38397_SHARP_,x);
}),cljs.core.reverse(self__.preds)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38398_SHARP_,p2__38399_SHARP_){
return cljs.spec.alpha.explain_1(p1__38398_SHARP_,p2__38399_SHARP_,path,via,in$,x);
}),self__.forms,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38400_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__38400_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38401_SHARP_,p2__38402_SHARP_){
return cljs.spec.alpha.gensub(p1__38401_SHARP_,overrides,path,rmap,p2__38402_SHARP_);
}),self__.preds,self__.forms))], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta38404","meta38404",-1008063548,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38403.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38403.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38403");

(cljs.spec.alpha.t_cljs$spec$alpha38403.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38403");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38403.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38403 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha38403(forms__$1,preds__$1,gfn__$1,meta38404){
return (new cljs.spec.alpha.t_cljs$spec$alpha38403(forms__$1,preds__$1,gfn__$1,meta38404));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38403(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__38432 = arguments.length;
switch (G__38432) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
}));

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__38433,gfn){
var map__38434 = p__38433;
var map__38434__$1 = cljs.core.__destructure_map(map__38434);
var opts = map__38434__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38434__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty(conform_into):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
}),null));
var check_QMARK_ = (function (p1__38425_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__38425_SHARP_);
});
var kfn__$1 = (function (){var or__4253__auto__ = kfn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (i,v){
return i;
});
}
})();
var addcv = (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});
var cfns = (function (x){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,(function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
}),cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(x);
if(and__4251__auto__){
var or__4253__auto__ = (function (){var and__4251__auto____$1 = kind;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__4251__auto____$1;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),(function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not(conform_keys)))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
}),cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_(conform_into)) || (((cljs.core.seq_QMARK_(conform_into)) || (((cljs.core.not(conform_into)) && (((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x)))))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__38427_SHARP_){
return cljs.core.empty((function (){var or__4253__auto__ = conform_into;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__38427_SHARP_;
}
})());
}),addcv,cljs.core.identity], null);

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38444 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,map__38434,describe_form,distinct,spec,kfn,gen_into,p__38433,count,min_count,opts,kind,conform_all,conform_into,meta38445){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.map__38434 = map__38434;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.p__38433 = p__38433;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta38445 = meta38445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38446,meta38445__$1){
var self__ = this;
var _38446__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38444(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.map__38434,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.p__38433,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta38445__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38446){
var self__ = this;
var _38446__$1 = this;
return self__.meta38445;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__38449 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38449,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38449,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38449,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__38455 = cljs.core.seq(x);
var vec__38456 = G__38455;
var seq__38457 = cljs.core.seq(vec__38456);
var first__38458 = cljs.core.first(seq__38457);
var seq__38457__$1 = cljs.core.next(seq__38457);
var v = first__38458;
var vs = seq__38457__$1;
var vseq = vec__38456;
var ret__$1 = ret;
var i__$1 = i;
var G__38455__$1 = G__38455;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__38460 = G__38455__$1;
var seq__38461 = cljs.core.seq(vec__38460);
var first__38462 = cljs.core.first(seq__38461);
var seq__38461__$1 = cljs.core.next(seq__38461);
var v__$1 = first__38462;
var vs__$1 = seq__38461__$1;
var vseq__$1 = vec__38460;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__39468 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__39469 = (i__$2 + (1));
var G__39470 = vs__$1;
ret__$1 = G__39468;
i__$1 = G__39469;
G__38455__$1 = G__39470;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__4336__auto__ = (1);
var y__4337__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i))){
var G__39475 = (i + step);
i = G__39475;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__38468 = cljs.core.seq(x);
var vec__38469 = G__38468;
var seq__38470 = cljs.core.seq(vec__38469);
var first__38471 = cljs.core.first(seq__38470);
var seq__38470__$1 = cljs.core.next(seq__38470);
var v = first__38471;
var vs = seq__38470__$1;
var vseq = vec__38469;
var i__$1 = i;
var G__38468__$1 = G__38468;
while(true){
var i__$2 = i__$1;
var vec__38472 = G__38468__$1;
var seq__38473 = cljs.core.seq(vec__38472);
var first__38474 = cljs.core.first(seq__38473);
var seq__38473__$1 = cljs.core.next(seq__38473);
var v__$1 = first__38474;
var vs__$1 = seq__38473__$1;
var vseq__$1 = vec__38472;
if((((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1)){
var G__39476 = (i__$2 + (1));
var G__39477 = vs__$1;
i__$1 = G__39476;
G__38468__$1 = G__39477;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__38475 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__38481 = cljs.core.seq(x);
var vec__38482 = G__38481;
var seq__38483 = cljs.core.seq(vec__38482);
var first__38484 = cljs.core.first(seq__38483);
var seq__38483__$1 = cljs.core.next(seq__38483);
var v = first__38484;
var vs = seq__38483__$1;
var vseq = vec__38482;
var ret__$1 = ret;
var i__$1 = i;
var G__38481__$1 = G__38481;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__38487 = G__38481__$1;
var seq__38488 = cljs.core.seq(vec__38487);
var first__38489 = cljs.core.first(seq__38488);
var seq__38488__$1 = cljs.core.next(seq__38488);
var v__$1 = first__38489;
var vs__$1 = seq__38488__$1;
var vseq__$1 = vec__38487;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__39478 = (function (){var G__38490 = ret__$2;
var G__38491 = i__$2;
var G__38492 = v__$1;
var G__38493 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__38490,G__38491,G__38492,G__38493) : add.call(null,G__38490,G__38491,G__38492,G__38493));
})();
var G__39479 = (i__$2 + (1));
var G__39480 = vs__$1;
ret__$1 = G__39478;
i__$1 = G__39479;
G__38481__$1 = G__39480;
continue;
}
break;
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__38497 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__38496 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__38496.cljs$core$IFn$_invoke$arity$1 ? fexpr__38496.cljs$core$IFn$_invoke$arity$1(G__38497) : fexpr__38496.call(null,G__38497));
})());
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.gen_into], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38428_SHARP_){
if(cljs.core.empty_QMARK_(p1__38428_SHARP_)){
return p1__38428_SHARP_;
} else {
return cljs.core.empty(p1__38428_SHARP_);
}
}),cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),(function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38429_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__38429_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__38429_SHARP_);
}
}),(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4253__auto__ = self__.min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4253__auto__ = self__.max_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var x__4336__auto__ = self__.gen_max;
var y__4337__auto__ = ((2) * (function (){var or__4253__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (0);
}
})());
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__4253__auto__ = self__.min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__4253__auto__ = self__.min_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = self__.max_count;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var x__4336__auto__ = self__.gen_max;
var y__4337__auto__ = ((2) * (function (){var or__4253__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (0);
}
})());
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
})], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"map__38434","map__38434",1272378194,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"p__38433","p__38433",-1992120228,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta38445","meta38445",-183414161,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38444.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38444.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38444");

(cljs.spec.alpha.t_cljs$spec$alpha38444.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38444");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38444.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38444 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha38444(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__38434__$2,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,p__38433__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta38445){
return (new cljs.spec.alpha.t_cljs$spec$alpha38444(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__38434__$2,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,p__38433__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta38445));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38444(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,map__38434__$1,describe_form,distinct,spec,kfn__$1,gen_into,p__38433,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__38513){
var map__38514 = p__38513;
var map__38514__$1 = cljs.core.__destructure_map(map__38514);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__38516){
var map__38518 = p__38516;
var map__38518__$1 = cljs.core.__destructure_map(map__38518);
var vec__38519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__38520 = cljs.core.seq(vec__38519);
var first__38521 = cljs.core.first(seq__38520);
var seq__38520__$1 = cljs.core.next(seq__38520);
var p1 = first__38521;
var pr = seq__38520__$1;
var ps = vec__38519;
var vec__38522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__38523 = cljs.core.seq(vec__38522);
var first__38524 = cljs.core.first(seq__38523);
var seq__38523__$1 = cljs.core.next(seq__38523);
var k1 = first__38524;
var kr = seq__38523__$1;
var ks = vec__38522;
var vec__38525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__38526 = cljs.core.seq(vec__38525);
var first__38527 = cljs.core.first(seq__38526);
var seq__38526__$1 = cljs.core.next(seq__38526);
var f1 = first__38527;
var fr = seq__38526__$1;
var forms = vec__38525;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__38529 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__38529) : cljs.spec.alpha.pcat_STAR_.call(null,G__38529));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39488 = arguments.length;
var i__4865__auto___39489 = (0);
while(true){
if((i__4865__auto___39489 < len__4864__auto___39488)){
args__4870__auto__.push((arguments[i__4865__auto___39489]));

var G__39490 = (i__4865__auto___39489 + (1));
i__4865__auto___39489 = G__39490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
}));

(cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq38530){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38530));
}));

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid()], null);
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4253__auto__ = ks;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38539_SHARP_){
var G__38542 = cljs.core.first(p1__38539_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38542) : f.call(null,G__38542));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4253__auto__ = cljs.core.seq(ks);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4253__auto__ = cljs.core.seq(forms);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38540_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38540_SHARP_,(2));
}),pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__38551 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__38554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(0),null);
var seq__38555 = cljs.core.seq(vec__38554);
var first__38556 = cljs.core.first(seq__38555);
var seq__38555__$1 = cljs.core.next(seq__38555);
var p1 = first__38556;
var pr = seq__38555__$1;
var ps__$1 = vec__38554;
var vec__38557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38557,(0),null);
var ks__$1 = vec__38557;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39494 = arguments.length;
var i__4865__auto___39495 = (0);
while(true){
if((i__4865__auto___39495 < len__4864__auto___39494)){
args__4870__auto__.push((arguments[i__4865__auto___39495]));

var G__39496 = (i__4865__auto___39495 + (1));
i__4865__auto___39495 = G__39496;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
}));

(cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq38562){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38562));
}));

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4251__auto__ = p1;
if(cljs.core.truth_(and__4251__auto__)){
return p2;
} else {
return and__4251__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__4253__auto__ = p1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = (function (){var G__38571 = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__38570 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null);
return (fexpr__38570.cljs$core$IFn$_invoke$arity$1 ? fexpr__38570.cljs$core$IFn$_invoke$arity$1(G__38571) : fexpr__38570.call(null,G__38571));
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__38572 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38572__$1 = cljs.core.__destructure_map(map__38572);
var p__$1 = map__38572__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__38576 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38576)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38576)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38576)){
var and__4251__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__4251__auto__)){
var ret = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1),ps,cljs.core.next(forms));
return (!(cljs.spec.alpha.invalid_QMARK_(ret)));
} else {
return and__4251__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38576)){
var or__4253__auto__ = (p1 === p2);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38576)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38576)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38576)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__38581 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38581__$1 = cljs.core.__destructure_map(map__38581);
var p__$1 = map__38581__$1;
var vec__38582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__38583 = cljs.core.seq(vec__38582);
var first__38584 = cljs.core.first(seq__38583);
var seq__38583__$1 = cljs.core.next(seq__38583);
var p0 = first__38584;
var pr = seq__38583__$1;
var ps = vec__38582;
var vec__38585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38585,(0),null);
var ks = vec__38585;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__38589 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38589)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38589)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38589)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38589)){
return cljs.spec.alpha.add_ret(p1,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38589)){
return cljs.spec.alpha.add_ret(p0,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38589)){
var vec__38592 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__38595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38595,(0),null);
var vec__38598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38598,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38589)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__38609 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38609__$1 = cljs.core.__destructure_map(map__38609);
var p__$1 = map__38609__$1;
var vec__38610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__38611 = cljs.core.seq(vec__38610);
var first__38612 = cljs.core.first(seq__38611);
var seq__38611__$1 = cljs.core.next(seq__38611);
var p0 = first__38612;
var pr = seq__38611__$1;
var ps = vec__38610;
var vec__38613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38613,(0),null);
var ks = vec__38613;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap(ks,ps);
var G__38617 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38617)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38617)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38617)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38602_SHARP_,p2__38601_SHARP_){
return cljs.spec.alpha.unform(p2__38601_SHARP_,p1__38602_SHARP_);
}),x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38617)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__38603_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__38603_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__38603_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38617)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__38604_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__38604_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__38604_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__38619 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__38620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__38619,G__38620) : cljs.spec.alpha.op_unform.call(null,G__38619,G__38620));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38617)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__38622 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38622,(1),null);
var G__38625 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__38626 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__38625,G__38626) : cljs.spec.alpha.op_unform.call(null,G__38625,G__38626));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38617)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__38630 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38630__$1 = cljs.core.__destructure_map(map__38630);
var p__$1 = map__38630__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__38633 = r;
var G__38634 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__38632 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__38632.cljs$core$IFn$_invoke$arity$2 ? fexpr__38632.cljs$core$IFn$_invoke$arity$2(G__38633,G__38634) : fexpr__38632.call(null,G__38633,G__38634));
}
});
var G__38635 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38635)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38635)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38635)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38635)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38635)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38635)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38635)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__38640 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38640__$1 = cljs.core.__destructure_map(map__38640);
var p__$1 = map__38640__$1;
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__38641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__38642 = cljs.core.seq(vec__38641);
var first__38643 = cljs.core.first(seq__38642);
var seq__38642__$1 = cljs.core.next(seq__38642);
var p0 = first__38643;
var pr = seq__38642__$1;
var ps = vec__38641;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__38644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__38645 = cljs.core.seq(vec__38644);
var first__38646 = cljs.core.first(seq__38645);
var seq__38645__$1 = cljs.core.next(seq__38645);
var k0 = first__38646;
var kr = seq__38645__$1;
var ks = vec__38644;
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__38647 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38647)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38647)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38647)){
var temp__5753__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5753__auto__)){
var p1__$1 = temp__5753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38647)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__38649 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next(forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__38650 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__38649,G__38650) : cljs.spec.alpha.deriv.call(null,G__38649,G__38650));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38647)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38639_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__38639_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__38639_SHARP_,x));
}),ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38647)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__38651 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__38652 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__38651,G__38652) : cljs.spec.alpha.deriv.call(null,G__38651,G__38652));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38647)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__38653 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38653__$1 = cljs.core.__destructure_map(map__38653);
var p__$1 = map__38653__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__38654 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38654)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38654)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38654)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38654)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = cljs.core.seq(ks);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38654)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38654)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38654)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__38655 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(0),null);
var input__$1 = vec__38655;
var map__38658 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38658__$1 = cljs.core.__destructure_map(map__38658);
var p__$1 = map__38658__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5751__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});
if(cljs.core.truth_(p__$1)){
var G__38660 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38660)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38660)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38660)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5751__auto__)){
var p1__$1 = temp__5751__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__38662 = new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1);
var G__38663 = p1;
var G__38664 = path;
var G__38665 = via__$1;
var G__38666 = in$;
var G__38667 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__38662,G__38663,G__38664,G__38665,G__38666,G__38667) : cljs.spec.alpha.op_explain.call(null,G__38662,G__38663,G__38664,G__38665,G__38666,G__38667));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38660)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4253__auto__ = cljs.core.seq(ks);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4253__auto__ = cljs.core.seq(forms);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__38668 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38671){
var vec__38672 = p__38671;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38672,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
}),pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__4253__auto__ = form__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if(((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred)))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38660)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (k,form__$1,pred){
var G__38675 = (function (){var or__4253__auto__ = form__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__38676 = pred;
var G__38677 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38678 = via__$1;
var G__38679 = in$;
var G__38680 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__38675,G__38676,G__38677,G__38678,G__38679,G__38680) : cljs.spec.alpha.op_explain.call(null,G__38675,G__38676,G__38677,G__38678,G__38679,G__38680));
}),(function (){var or__4253__auto__ = cljs.core.seq(ks);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4253__auto__ = cljs.core.seq(forms);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38660)){
var G__38689 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__38690 = p1;
var G__38691 = path;
var G__38692 = via__$1;
var G__38693 = in$;
var G__38694 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__38689,G__38690,G__38691,G__38692,G__38693,G__38694) : cljs.spec.alpha.op_explain.call(null,G__38689,G__38690,G__38691,G__38692,G__38693,G__38694));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38660)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var origp = p;
var map__38696 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__38696__$1 = cljs.core.__destructure_map(map__38696);
var p__$1 = map__38696__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = (function (ps__$1,ks__$1,forms__$1){
var gen = (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4251__auto__ = rmap__$1;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = id;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = k;
if(cljs.core.truth_(and__4251__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
var G__38697 = p__$2;
var G__38698 = overrides;
var G__38699 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38700 = rmap__$1;
var G__38701 = (function (){var or__4253__auto__ = f__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__38697,G__38698,G__38699,G__38700,G__38701) : cljs.spec.alpha.re_gen.call(null,G__38697,G__38698,G__38699,G__38700,G__38701));
}),null)));
} else {
var G__38702 = p__$2;
var G__38703 = overrides;
var G__38704 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38705 = rmap__$1;
var G__38706 = (function (){var or__4253__auto__ = f__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__38702,G__38703,G__38704,G__38705,G__38706) : cljs.spec.alpha.re_gen.call(null,G__38702,G__38703,G__38704,G__38705,G__38706));
}
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__4253__auto__ = cljs.core.seq(ks__$1);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4253__auto__ = cljs.core.seq(forms__$1);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});
var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,cljs.spec.alpha.spec_name(origp));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,cljs.spec.alpha.spec_name(p__$1));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var gfn__$1 = temp__5753__auto__;
var G__38707 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept","accept",1874130431),G__38707)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,(gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38707)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,(gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null))], 0));
} else {
return (gfn__$1.cljs$core$IFn$_invoke$arity$0 ? gfn__$1.cljs$core$IFn$_invoke$arity$0() : gfn__$1.call(null));

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__38708 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__38708)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38708)){
var temp__5753__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5753__auto__)){
var g = temp__5753__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__38708)){
var G__38709 = p1;
var G__38710 = overrides;
var G__38711 = path;
var G__38712 = rmap__$1;
var G__38713 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__38709,G__38710,G__38711,G__38712,G__38713) : cljs.spec.alpha.re_gen.call(null,G__38709,G__38710,G__38711,G__38712,G__38713));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__38708)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__38708)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__38708)){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5753__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5753__auto__)){
var g = temp__5753__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__38695_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__38695_SHARP_);
}),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38708)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__38714){
while(true){
var vec__38715 = p__38714;
var seq__38716 = cljs.core.seq(vec__38715);
var first__38717 = cljs.core.first(seq__38716);
var seq__38716__$1 = cljs.core.next(seq__38716);
var x = first__38717;
var xs = seq__38716__$1;
var data = vec__38715;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5751__auto__)){
var dp = temp__5751__auto__;
var G__39550 = dp;
var G__39551 = xs;
p = G__39550;
p__38714 = G__39551;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__38723 = input;
var vec__38724 = G__38723;
var seq__38725 = cljs.core.seq(vec__38724);
var first__38726 = cljs.core.first(seq__38725);
var seq__38725__$1 = cljs.core.next(seq__38725);
var x = first__38726;
var xs = seq__38725__$1;
var data = vec__38724;
var i = (0);
var p__$1 = p;
var G__38723__$1 = G__38723;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__38727 = G__38723__$1;
var seq__38728 = cljs.core.seq(vec__38727);
var first__38729 = cljs.core.first(seq__38728);
var seq__38728__$1 = cljs.core.next(seq__38728);
var x__$1 = first__38729;
var xs__$1 = seq__38728__$1;
var data__$1 = vec__38727;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5751__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var dp = temp__5751__auto__;
var G__39552 = dp;
var G__39553 = xs__$1;
var G__39554 = (i__$2 + (1));
p__$1 = G__39552;
G__38723__$1 = G__39553;
i__$1 = G__39554;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_(p__$2)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__4253__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38733 = (function (re,gfn,meta38734){
this.re = re;
this.gfn = gfn;
this.meta38734 = meta38734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38735,meta38734__$1){
var self__ = this;
var _38735__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38733(self__.re,self__.gfn,meta38734__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38735){
var self__ = this;
var _38735__$1 = this;
return self__.meta38734;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta38734","meta38734",-1148939869,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38733.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38733.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38733");

(cljs.spec.alpha.t_cljs$spec$alpha38733.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38733");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38733.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38733 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha38733(re__$1,gfn__$1,meta38734){
return (new cljs.spec.alpha.t_cljs$spec$alpha38733(re__$1,gfn__$1,meta38734));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38733(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_(cargs)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4251__auto__ = (!(cljs.spec.alpha.invalid_QMARK_(cret)));
if(and__4251__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__4251__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),(function (p1__38748_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__38748_SHARP_);
})], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5751__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__38752 = temp__5751__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38752,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha38756 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta38757){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta38757 = meta38757;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38758,meta38757__$1){
var self__ = this;
var _38758__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38756(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta38757__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38758){
var self__ = this;
var _38758__$1 = this;
return self__.meta38757;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e38762){if((e38762 instanceof Error)){
var t = e38762;
return t;
} else {
throw e38762;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_(cret)){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function() { 
var G__39560__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38769_39561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38770_39562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38771_39563 = true;
var _STAR_print_fn_STAR__temp_val__38772_39564 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38771_39563);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38772_39564);

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38770_39562);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38769_39561);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__39560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39565__i = 0, G__39565__a = new Array(arguments.length -  0);
while (G__39565__i < G__39565__a.length) {G__39565__a[G__39565__i] = arguments[G__39565__i + 0]; ++G__39565__i;}
  args = new cljs.core.IndexedSeq(G__39565__a,0,null);
} 
return G__39560__delegate.call(this,args);};
G__39560.cljs$lang$maxFixedArity = 0;
G__39560.cljs$lang$applyTo = (function (arglist__39567){
var args = cljs.core.seq(arglist__39567);
return G__39560__delegate(args);
});
G__39560.cljs$core$IFn$_invoke$arity$variadic = G__39560__delegate;
return G__39560;
})()
], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null))], 0))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta38757","meta38757",1669608638,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38756.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38756.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38756");

(cljs.spec.alpha.t_cljs$spec$alpha38756.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38756");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38756.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38756 = (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha38756(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta38757){
return (new cljs.spec.alpha.t_cljs$spec$alpha38756(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta38757));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38756(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38779#","p1__38779#",1223080813,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__38779#","p1__38779#",1223080813,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__38779#","p1__38779#",1223080813,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38780#","p1__38780#",1102011452,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__38780#","p1__38780#",1102011452,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__38779_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__38779_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__38779_SHARP_));
}),null,true,(function (p1__38780_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38920){
var vec__38922 = p__38920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38922,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__38780_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38925 = (function (spec,meta38926){
this.spec = spec;
this.meta38926 = meta38926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38927,meta38926__$1){
var self__ = this;
var _38927__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38925(self__.spec,meta38926__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38927){
var self__ = this;
var _38927__$1 = this;
return self__.meta38926;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(cljs.core.deref(self__.spec),path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(cljs.core.deref(self__.spec),overrides,path,rmap);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__38928 = cljs.spec.alpha.with_gen_STAR_(cljs.core.deref(self__.spec),gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__38928) : cljs.spec.alpha.nonconforming.call(null,G__38928));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_(cljs.core.deref(self__.spec)),null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta38926","meta38926",1905822680,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38925.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38925.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38925");

(cljs.spec.alpha.t_cljs$spec$alpha38925.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38925");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38925.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38925 = (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha38925(spec__$2,meta38926){
return (new cljs.spec.alpha.t_cljs$spec$alpha38925(spec__$2,meta38926));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38925(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha38930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha38930 = (function (form,pred,gfn,spec,meta38931){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta38931 = meta38931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38932,meta38931__$1){
var self__ = this;
var _38932__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha38930(self__.form,self__.pred,self__.gfn,self__.spec,meta38931__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38932){
var self__ = this;
var _38932__$1 = this;
return self__.meta38931;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
}),null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
}),null)))], null)], null)], 0));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta38931","meta38931",1033026857,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha38930.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha38930.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha38930");

(cljs.spec.alpha.t_cljs$spec$alpha38930.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.spec.alpha/t_cljs$spec$alpha38930");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha38930.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha38930 = (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha38930(form__$1,pred__$1,gfn__$1,spec__$1,meta38931){
return (new cljs.spec.alpha.t_cljs$spec$alpha38930(form__$1,pred__$1,gfn__$1,spec__$1,meta38931));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha38930(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__38942 = arguments.length;
switch (G__38942) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38940_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38940_SHARP_,cljs.spec.alpha.conform(spec,p1__38940_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
}));

(cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3);

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4251__auto__ = cljs.core.inst_QMARK_(inst);
if(and__4251__auto__){
var t = cljs.core.inst_ms(inst);
return (((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end))));
} else {
return and__4251__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof cljs.spec.alpha.goog$module$goog$math$Long)){
var and__4251__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4251__auto__)){
return val.lessThan(end);
} else {
return and__4251__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4251__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4251__auto__)){
return val.lessThan(end);
} else {
return and__4251__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return (cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag);
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x)){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477))], 0));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38956_39586 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38957_39587 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38958_39588 = true;
var _STAR_print_fn_STAR__temp_val__38959_39589 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38958_39588);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38959_39589);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38957_39587);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38956_39586);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join('')));
}
});

//# sourceMappingURL=cljs.spec.alpha.js.map
