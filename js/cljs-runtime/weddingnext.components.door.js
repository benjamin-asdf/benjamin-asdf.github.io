goog.provide('weddingnext.components.door');
weddingnext.components.door.user_input = (function weddingnext$components$door$user_input(input){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"merle")){
return alert("next page");
} else {
return null;
}
});
weddingnext.components.door.answer_input = (function weddingnext$components$door$answer_input(input){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(input,e.target.value);
})], null)], null);
});
weddingnext.components.door.door = (function weddingnext$components$door$door(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(" deine Antwort");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Willkommen",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(val),"merle"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"soon"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1vw",new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null)], null),"Dein magischer Stein zeigt dir eine ","grosse Tuere. ","Auf der Tuere sind Buchstaben, deren strahlen ","dich an Sternenlich erinnert. ","Es is ein Raetsel. ","Wer das Password kennt, fuer den oeffnet sich die Tuere. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute","div.absolute",1404644568),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"yellowgreen",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1vw",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"double",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10vw",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4vw",new cljs.core.Keyword(null,"border","border",1444987323),"10px"], null)], null),"Sprich Kind und tritt ein"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [weddingnext.components.door.answer_input,val], null)], null)], null))], null);
});

//# sourceMappingURL=weddingnext.components.door.js.map
