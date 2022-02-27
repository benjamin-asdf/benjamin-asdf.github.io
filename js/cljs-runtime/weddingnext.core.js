goog.provide('weddingnext.core');
weddingnext.core.weddingnext = (function weddingnext$core$weddingnext(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weddingnext.components.door.door], null)], null);
});
weddingnext.core.start = (function weddingnext$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [weddingnext.core.weddingnext], null),document.getElementById("weddingnext"));
});
weddingnext.core.init = (function weddingnext$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

console.log("start");

return weddingnext.core.start();
});
weddingnext.core.stop = (function weddingnext$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=weddingnext.core.js.map
