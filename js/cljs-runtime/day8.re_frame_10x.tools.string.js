goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39826 = arguments.length;
var i__4865__auto___39827 = (0);
while(true){
if((i__4865__auto___39827 < len__4864__auto___39826)){
args__4870__auto__.push((arguments[i__4865__auto___39827]));

var G__39828 = (i__4865__auto___39827 + (1));
i__4865__auto___39827 = G__39828;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39811){
var vec__39813 = p__39811;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq39807){
var G__39808 = cljs.core.first(seq39807);
var seq39807__$1 = cljs.core.next(seq39807);
var G__39809 = cljs.core.first(seq39807__$1);
var seq39807__$2 = cljs.core.next(seq39807__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39808,G__39809,seq39807__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39829 = arguments.length;
var i__4865__auto___39830 = (0);
while(true){
if((i__4865__auto___39830 < len__4864__auto___39829)){
args__4870__auto__.push((arguments[i__4865__auto___39830]));

var G__39831 = (i__4865__auto___39830 + (1));
i__4865__auto___39830 = G__39831;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39822){
var vec__39823 = p__39822;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39823,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq39819){
var G__39820 = cljs.core.first(seq39819);
var seq39819__$1 = cljs.core.next(seq39819);
var G__39821 = cljs.core.first(seq39819__$1);
var seq39819__$2 = cljs.core.next(seq39819__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39820,G__39821,seq39819__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
