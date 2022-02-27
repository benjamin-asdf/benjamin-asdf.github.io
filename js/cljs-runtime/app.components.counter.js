goog.provide('app.components.counter');
app.components.counter.counter = (function app$components$counter$counter(){
var c = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-12.text-center","div.mt-12.text-center",-513676325),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-xl","h3.font-bold.text-xl",-2041242749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-counter","update-counter",-70438766),(1)], null));
})], null),"Counter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-4","p.mb-4",1550257197),"(dummy re-frame state)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.inline-block.mx-3","div.font-bold.inline-block.mx-3",1022964941),c], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-counter","update-counter",-70438766),(function (db,p__53798){
var vec__53799 = p__53798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53799,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53799,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,n));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-counter","reset-counter",1992307188),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),(0));
}));

//# sourceMappingURL=app.components.counter.js.map
