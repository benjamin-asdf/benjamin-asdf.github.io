goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46182 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46182(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46183 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46183(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45486 = coll;
var G__45487 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45486,G__45487) : shadow.dom.lazy_native_coll_seq.call(null,G__45486,G__45487));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45527 = arguments.length;
switch (G__45527) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45538 = arguments.length;
switch (G__45538) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45549 = arguments.length;
switch (G__45549) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45557 = arguments.length;
switch (G__45557) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45574 = arguments.length;
switch (G__45574) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45586 = arguments.length;
switch (G__45586) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45594){if((e45594 instanceof Object)){
var e = e45594;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45594;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45606 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45607 = null;
var count__45608 = (0);
var i__45609 = (0);
while(true){
if((i__45609 < count__45608)){
var el = chunk__45607.cljs$core$IIndexed$_nth$arity$2(null,i__45609);
var handler_46190__$1 = ((function (seq__45606,chunk__45607,count__45608,i__45609,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45606,chunk__45607,count__45608,i__45609,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46190__$1);


var G__46191 = seq__45606;
var G__46192 = chunk__45607;
var G__46193 = count__45608;
var G__46194 = (i__45609 + (1));
seq__45606 = G__46191;
chunk__45607 = G__46192;
count__45608 = G__46193;
i__45609 = G__46194;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45606);
if(temp__5753__auto__){
var seq__45606__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45606__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45606__$1);
var G__46195 = cljs.core.chunk_rest(seq__45606__$1);
var G__46196 = c__4679__auto__;
var G__46197 = cljs.core.count(c__4679__auto__);
var G__46198 = (0);
seq__45606 = G__46195;
chunk__45607 = G__46196;
count__45608 = G__46197;
i__45609 = G__46198;
continue;
} else {
var el = cljs.core.first(seq__45606__$1);
var handler_46199__$1 = ((function (seq__45606,chunk__45607,count__45608,i__45609,el,seq__45606__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45606,chunk__45607,count__45608,i__45609,el,seq__45606__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46199__$1);


var G__46200 = cljs.core.next(seq__45606__$1);
var G__46201 = null;
var G__46202 = (0);
var G__46203 = (0);
seq__45606 = G__46200;
chunk__45607 = G__46201;
count__45608 = G__46202;
i__45609 = G__46203;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45626 = arguments.length;
switch (G__45626) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45644 = cljs.core.seq(events);
var chunk__45645 = null;
var count__45646 = (0);
var i__45647 = (0);
while(true){
if((i__45647 < count__45646)){
var vec__45660 = chunk__45645.cljs$core$IIndexed$_nth$arity$2(null,i__45647);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45660,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46205 = seq__45644;
var G__46206 = chunk__45645;
var G__46207 = count__45646;
var G__46208 = (i__45647 + (1));
seq__45644 = G__46205;
chunk__45645 = G__46206;
count__45646 = G__46207;
i__45647 = G__46208;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45644);
if(temp__5753__auto__){
var seq__45644__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45644__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45644__$1);
var G__46209 = cljs.core.chunk_rest(seq__45644__$1);
var G__46210 = c__4679__auto__;
var G__46211 = cljs.core.count(c__4679__auto__);
var G__46212 = (0);
seq__45644 = G__46209;
chunk__45645 = G__46210;
count__45646 = G__46211;
i__45647 = G__46212;
continue;
} else {
var vec__45665 = cljs.core.first(seq__45644__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46213 = cljs.core.next(seq__45644__$1);
var G__46214 = null;
var G__46215 = (0);
var G__46216 = (0);
seq__45644 = G__46213;
chunk__45645 = G__46214;
count__45646 = G__46215;
i__45647 = G__46216;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45669 = cljs.core.seq(styles);
var chunk__45670 = null;
var count__45671 = (0);
var i__45672 = (0);
while(true){
if((i__45672 < count__45671)){
var vec__45686 = chunk__45670.cljs$core$IIndexed$_nth$arity$2(null,i__45672);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46219 = seq__45669;
var G__46220 = chunk__45670;
var G__46221 = count__45671;
var G__46222 = (i__45672 + (1));
seq__45669 = G__46219;
chunk__45670 = G__46220;
count__45671 = G__46221;
i__45672 = G__46222;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45669);
if(temp__5753__auto__){
var seq__45669__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45669__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45669__$1);
var G__46223 = cljs.core.chunk_rest(seq__45669__$1);
var G__46224 = c__4679__auto__;
var G__46225 = cljs.core.count(c__4679__auto__);
var G__46226 = (0);
seq__45669 = G__46223;
chunk__45670 = G__46224;
count__45671 = G__46225;
i__45672 = G__46226;
continue;
} else {
var vec__45693 = cljs.core.first(seq__45669__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45693,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46227 = cljs.core.next(seq__45669__$1);
var G__46228 = null;
var G__46229 = (0);
var G__46230 = (0);
seq__45669 = G__46227;
chunk__45670 = G__46228;
count__45671 = G__46229;
i__45672 = G__46230;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45704_46231 = key;
var G__45704_46232__$1 = (((G__45704_46231 instanceof cljs.core.Keyword))?G__45704_46231.fqn:null);
switch (G__45704_46232__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46234 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_46234,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_46234,"aria-");
}
})())){
el.setAttribute(ks_46234,value);
} else {
(el[ks_46234] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45741){
var map__45742 = p__45741;
var map__45742__$1 = cljs.core.__destructure_map(map__45742);
var props = map__45742__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45742__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45744 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45744,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45744,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45744,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45749 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45749,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45749;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45752 = arguments.length;
switch (G__45752) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45755){
var vec__45757 = p__45755;
var seq__45758 = cljs.core.seq(vec__45757);
var first__45759 = cljs.core.first(seq__45758);
var seq__45758__$1 = cljs.core.next(seq__45758);
var nn = first__45759;
var first__45759__$1 = cljs.core.first(seq__45758__$1);
var seq__45758__$2 = cljs.core.next(seq__45758__$1);
var np = first__45759__$1;
var nc = seq__45758__$2;
var node = vec__45757;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45760 = nn;
var G__45761 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45760,G__45761) : create_fn.call(null,G__45760,G__45761));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45763 = nn;
var G__45764 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45763,G__45764) : create_fn.call(null,G__45763,G__45764));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45766 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(1),null);
var seq__45769_46239 = cljs.core.seq(node_children);
var chunk__45770_46240 = null;
var count__45771_46241 = (0);
var i__45772_46242 = (0);
while(true){
if((i__45772_46242 < count__45771_46241)){
var child_struct_46243 = chunk__45770_46240.cljs$core$IIndexed$_nth$arity$2(null,i__45772_46242);
var children_46244 = shadow.dom.dom_node(child_struct_46243);
if(cljs.core.seq_QMARK_(children_46244)){
var seq__45792_46245 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46244));
var chunk__45794_46246 = null;
var count__45795_46247 = (0);
var i__45796_46248 = (0);
while(true){
if((i__45796_46248 < count__45795_46247)){
var child_46250 = chunk__45794_46246.cljs$core$IIndexed$_nth$arity$2(null,i__45796_46248);
if(cljs.core.truth_(child_46250)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46250);


var G__46251 = seq__45792_46245;
var G__46252 = chunk__45794_46246;
var G__46253 = count__45795_46247;
var G__46254 = (i__45796_46248 + (1));
seq__45792_46245 = G__46251;
chunk__45794_46246 = G__46252;
count__45795_46247 = G__46253;
i__45796_46248 = G__46254;
continue;
} else {
var G__46255 = seq__45792_46245;
var G__46256 = chunk__45794_46246;
var G__46257 = count__45795_46247;
var G__46258 = (i__45796_46248 + (1));
seq__45792_46245 = G__46255;
chunk__45794_46246 = G__46256;
count__45795_46247 = G__46257;
i__45796_46248 = G__46258;
continue;
}
} else {
var temp__5753__auto___46259 = cljs.core.seq(seq__45792_46245);
if(temp__5753__auto___46259){
var seq__45792_46260__$1 = temp__5753__auto___46259;
if(cljs.core.chunked_seq_QMARK_(seq__45792_46260__$1)){
var c__4679__auto___46261 = cljs.core.chunk_first(seq__45792_46260__$1);
var G__46262 = cljs.core.chunk_rest(seq__45792_46260__$1);
var G__46263 = c__4679__auto___46261;
var G__46264 = cljs.core.count(c__4679__auto___46261);
var G__46265 = (0);
seq__45792_46245 = G__46262;
chunk__45794_46246 = G__46263;
count__45795_46247 = G__46264;
i__45796_46248 = G__46265;
continue;
} else {
var child_46266 = cljs.core.first(seq__45792_46260__$1);
if(cljs.core.truth_(child_46266)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46266);


var G__46267 = cljs.core.next(seq__45792_46260__$1);
var G__46268 = null;
var G__46269 = (0);
var G__46270 = (0);
seq__45792_46245 = G__46267;
chunk__45794_46246 = G__46268;
count__45795_46247 = G__46269;
i__45796_46248 = G__46270;
continue;
} else {
var G__46271 = cljs.core.next(seq__45792_46260__$1);
var G__46272 = null;
var G__46273 = (0);
var G__46274 = (0);
seq__45792_46245 = G__46271;
chunk__45794_46246 = G__46272;
count__45795_46247 = G__46273;
i__45796_46248 = G__46274;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46244);
}


var G__46275 = seq__45769_46239;
var G__46276 = chunk__45770_46240;
var G__46277 = count__45771_46241;
var G__46278 = (i__45772_46242 + (1));
seq__45769_46239 = G__46275;
chunk__45770_46240 = G__46276;
count__45771_46241 = G__46277;
i__45772_46242 = G__46278;
continue;
} else {
var temp__5753__auto___46279 = cljs.core.seq(seq__45769_46239);
if(temp__5753__auto___46279){
var seq__45769_46280__$1 = temp__5753__auto___46279;
if(cljs.core.chunked_seq_QMARK_(seq__45769_46280__$1)){
var c__4679__auto___46282 = cljs.core.chunk_first(seq__45769_46280__$1);
var G__46283 = cljs.core.chunk_rest(seq__45769_46280__$1);
var G__46284 = c__4679__auto___46282;
var G__46285 = cljs.core.count(c__4679__auto___46282);
var G__46286 = (0);
seq__45769_46239 = G__46283;
chunk__45770_46240 = G__46284;
count__45771_46241 = G__46285;
i__45772_46242 = G__46286;
continue;
} else {
var child_struct_46287 = cljs.core.first(seq__45769_46280__$1);
var children_46288 = shadow.dom.dom_node(child_struct_46287);
if(cljs.core.seq_QMARK_(children_46288)){
var seq__45811_46290 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46288));
var chunk__45813_46291 = null;
var count__45814_46292 = (0);
var i__45815_46293 = (0);
while(true){
if((i__45815_46293 < count__45814_46292)){
var child_46294 = chunk__45813_46291.cljs$core$IIndexed$_nth$arity$2(null,i__45815_46293);
if(cljs.core.truth_(child_46294)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46294);


var G__46295 = seq__45811_46290;
var G__46296 = chunk__45813_46291;
var G__46297 = count__45814_46292;
var G__46298 = (i__45815_46293 + (1));
seq__45811_46290 = G__46295;
chunk__45813_46291 = G__46296;
count__45814_46292 = G__46297;
i__45815_46293 = G__46298;
continue;
} else {
var G__46299 = seq__45811_46290;
var G__46300 = chunk__45813_46291;
var G__46301 = count__45814_46292;
var G__46302 = (i__45815_46293 + (1));
seq__45811_46290 = G__46299;
chunk__45813_46291 = G__46300;
count__45814_46292 = G__46301;
i__45815_46293 = G__46302;
continue;
}
} else {
var temp__5753__auto___46303__$1 = cljs.core.seq(seq__45811_46290);
if(temp__5753__auto___46303__$1){
var seq__45811_46304__$1 = temp__5753__auto___46303__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45811_46304__$1)){
var c__4679__auto___46305 = cljs.core.chunk_first(seq__45811_46304__$1);
var G__46306 = cljs.core.chunk_rest(seq__45811_46304__$1);
var G__46307 = c__4679__auto___46305;
var G__46308 = cljs.core.count(c__4679__auto___46305);
var G__46309 = (0);
seq__45811_46290 = G__46306;
chunk__45813_46291 = G__46307;
count__45814_46292 = G__46308;
i__45815_46293 = G__46309;
continue;
} else {
var child_46310 = cljs.core.first(seq__45811_46304__$1);
if(cljs.core.truth_(child_46310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46310);


var G__46311 = cljs.core.next(seq__45811_46304__$1);
var G__46312 = null;
var G__46313 = (0);
var G__46314 = (0);
seq__45811_46290 = G__46311;
chunk__45813_46291 = G__46312;
count__45814_46292 = G__46313;
i__45815_46293 = G__46314;
continue;
} else {
var G__46315 = cljs.core.next(seq__45811_46304__$1);
var G__46316 = null;
var G__46317 = (0);
var G__46318 = (0);
seq__45811_46290 = G__46315;
chunk__45813_46291 = G__46316;
count__45814_46292 = G__46317;
i__45815_46293 = G__46318;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46288);
}


var G__46319 = cljs.core.next(seq__45769_46280__$1);
var G__46320 = null;
var G__46321 = (0);
var G__46322 = (0);
seq__45769_46239 = G__46319;
chunk__45770_46240 = G__46320;
count__45771_46241 = G__46321;
i__45772_46242 = G__46322;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45842 = cljs.core.seq(node);
var chunk__45843 = null;
var count__45844 = (0);
var i__45845 = (0);
while(true){
if((i__45845 < count__45844)){
var n = chunk__45843.cljs$core$IIndexed$_nth$arity$2(null,i__45845);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46324 = seq__45842;
var G__46325 = chunk__45843;
var G__46326 = count__45844;
var G__46327 = (i__45845 + (1));
seq__45842 = G__46324;
chunk__45843 = G__46325;
count__45844 = G__46326;
i__45845 = G__46327;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45842);
if(temp__5753__auto__){
var seq__45842__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45842__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45842__$1);
var G__46330 = cljs.core.chunk_rest(seq__45842__$1);
var G__46331 = c__4679__auto__;
var G__46332 = cljs.core.count(c__4679__auto__);
var G__46333 = (0);
seq__45842 = G__46330;
chunk__45843 = G__46331;
count__45844 = G__46332;
i__45845 = G__46333;
continue;
} else {
var n = cljs.core.first(seq__45842__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46334 = cljs.core.next(seq__45842__$1);
var G__46335 = null;
var G__46336 = (0);
var G__46337 = (0);
seq__45842 = G__46334;
chunk__45843 = G__46335;
count__45844 = G__46336;
i__45845 = G__46337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45849 = arguments.length;
switch (G__45849) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45858 = arguments.length;
switch (G__45858) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45875 = arguments.length;
switch (G__45875) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46344 = arguments.length;
var i__4865__auto___46345 = (0);
while(true){
if((i__4865__auto___46345 < len__4864__auto___46344)){
args__4870__auto__.push((arguments[i__4865__auto___46345]));

var G__46346 = (i__4865__auto___46345 + (1));
i__4865__auto___46345 = G__46346;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45889_46347 = cljs.core.seq(nodes);
var chunk__45890_46348 = null;
var count__45891_46349 = (0);
var i__45892_46350 = (0);
while(true){
if((i__45892_46350 < count__45891_46349)){
var node_46351 = chunk__45890_46348.cljs$core$IIndexed$_nth$arity$2(null,i__45892_46350);
fragment.appendChild(shadow.dom._to_dom(node_46351));


var G__46352 = seq__45889_46347;
var G__46353 = chunk__45890_46348;
var G__46354 = count__45891_46349;
var G__46355 = (i__45892_46350 + (1));
seq__45889_46347 = G__46352;
chunk__45890_46348 = G__46353;
count__45891_46349 = G__46354;
i__45892_46350 = G__46355;
continue;
} else {
var temp__5753__auto___46356 = cljs.core.seq(seq__45889_46347);
if(temp__5753__auto___46356){
var seq__45889_46357__$1 = temp__5753__auto___46356;
if(cljs.core.chunked_seq_QMARK_(seq__45889_46357__$1)){
var c__4679__auto___46358 = cljs.core.chunk_first(seq__45889_46357__$1);
var G__46359 = cljs.core.chunk_rest(seq__45889_46357__$1);
var G__46360 = c__4679__auto___46358;
var G__46361 = cljs.core.count(c__4679__auto___46358);
var G__46362 = (0);
seq__45889_46347 = G__46359;
chunk__45890_46348 = G__46360;
count__45891_46349 = G__46361;
i__45892_46350 = G__46362;
continue;
} else {
var node_46363 = cljs.core.first(seq__45889_46357__$1);
fragment.appendChild(shadow.dom._to_dom(node_46363));


var G__46364 = cljs.core.next(seq__45889_46357__$1);
var G__46365 = null;
var G__46366 = (0);
var G__46367 = (0);
seq__45889_46347 = G__46364;
chunk__45890_46348 = G__46365;
count__45891_46349 = G__46366;
i__45892_46350 = G__46367;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45887){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45887));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45901_46371 = cljs.core.seq(scripts);
var chunk__45903_46372 = null;
var count__45904_46373 = (0);
var i__45905_46374 = (0);
while(true){
if((i__45905_46374 < count__45904_46373)){
var vec__45917_46375 = chunk__45903_46372.cljs$core$IIndexed$_nth$arity$2(null,i__45905_46374);
var script_tag_46376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917_46375,(0),null);
var script_body_46377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917_46375,(1),null);
eval(script_body_46377);


var G__46378 = seq__45901_46371;
var G__46379 = chunk__45903_46372;
var G__46380 = count__45904_46373;
var G__46381 = (i__45905_46374 + (1));
seq__45901_46371 = G__46378;
chunk__45903_46372 = G__46379;
count__45904_46373 = G__46380;
i__45905_46374 = G__46381;
continue;
} else {
var temp__5753__auto___46382 = cljs.core.seq(seq__45901_46371);
if(temp__5753__auto___46382){
var seq__45901_46383__$1 = temp__5753__auto___46382;
if(cljs.core.chunked_seq_QMARK_(seq__45901_46383__$1)){
var c__4679__auto___46384 = cljs.core.chunk_first(seq__45901_46383__$1);
var G__46385 = cljs.core.chunk_rest(seq__45901_46383__$1);
var G__46386 = c__4679__auto___46384;
var G__46387 = cljs.core.count(c__4679__auto___46384);
var G__46388 = (0);
seq__45901_46371 = G__46385;
chunk__45903_46372 = G__46386;
count__45904_46373 = G__46387;
i__45905_46374 = G__46388;
continue;
} else {
var vec__45921_46389 = cljs.core.first(seq__45901_46383__$1);
var script_tag_46390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45921_46389,(0),null);
var script_body_46391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45921_46389,(1),null);
eval(script_body_46391);


var G__46392 = cljs.core.next(seq__45901_46383__$1);
var G__46393 = null;
var G__46394 = (0);
var G__46395 = (0);
seq__45901_46371 = G__46392;
chunk__45903_46372 = G__46393;
count__45904_46373 = G__46394;
i__45905_46374 = G__46395;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45925){
var vec__45926 = p__45925;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45938 = arguments.length;
switch (G__45938) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45954 = cljs.core.seq(style_keys);
var chunk__45955 = null;
var count__45956 = (0);
var i__45957 = (0);
while(true){
if((i__45957 < count__45956)){
var it = chunk__45955.cljs$core$IIndexed$_nth$arity$2(null,i__45957);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46401 = seq__45954;
var G__46402 = chunk__45955;
var G__46403 = count__45956;
var G__46404 = (i__45957 + (1));
seq__45954 = G__46401;
chunk__45955 = G__46402;
count__45956 = G__46403;
i__45957 = G__46404;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45954);
if(temp__5753__auto__){
var seq__45954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45954__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45954__$1);
var G__46405 = cljs.core.chunk_rest(seq__45954__$1);
var G__46406 = c__4679__auto__;
var G__46407 = cljs.core.count(c__4679__auto__);
var G__46408 = (0);
seq__45954 = G__46405;
chunk__45955 = G__46406;
count__45956 = G__46407;
i__45957 = G__46408;
continue;
} else {
var it = cljs.core.first(seq__45954__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46409 = cljs.core.next(seq__45954__$1);
var G__46410 = null;
var G__46411 = (0);
var G__46412 = (0);
seq__45954 = G__46409;
chunk__45955 = G__46410;
count__45956 = G__46411;
i__45957 = G__46412;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45969,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45976 = k45969;
var G__45976__$1 = (((G__45976 instanceof cljs.core.Keyword))?G__45976.fqn:null);
switch (G__45976__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45969,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45977){
var vec__45978 = p__45977;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45978,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45978,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45968){
var self__ = this;
var G__45968__$1 = this;
return (new cljs.core.RecordIter((0),G__45968__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45970,other45971){
var self__ = this;
var this45970__$1 = this;
return (((!((other45971 == null)))) && ((((this45970__$1.constructor === other45971.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45970__$1.x,other45971.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45970__$1.y,other45971.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45970__$1.__extmap,other45971.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45969){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45981 = k45969;
var G__45981__$1 = (((G__45981 instanceof cljs.core.Keyword))?G__45981.fqn:null);
switch (G__45981__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45969);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45968){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45982 = cljs.core.keyword_identical_QMARK_;
var expr__45983 = k__4511__auto__;
if(cljs.core.truth_((pred__45982.cljs$core$IFn$_invoke$arity$2 ? pred__45982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45983) : pred__45982.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45983)))){
return (new shadow.dom.Coordinate(G__45968,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45982.cljs$core$IFn$_invoke$arity$2 ? pred__45982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45983) : pred__45982.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45983)))){
return (new shadow.dom.Coordinate(self__.x,G__45968,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45968),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45968){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45968,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45975){
var extmap__4542__auto__ = (function (){var G__45993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45975,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45975)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45993);
} else {
return G__45993;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45975),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45975),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46003,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46014 = k46003;
var G__46014__$1 = (((G__46014 instanceof cljs.core.Keyword))?G__46014.fqn:null);
switch (G__46014__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46003,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46017){
var vec__46019 = p__46017;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46019,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46019,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46002){
var self__ = this;
var G__46002__$1 = this;
return (new cljs.core.RecordIter((0),G__46002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46004,other46005){
var self__ = this;
var this46004__$1 = this;
return (((!((other46005 == null)))) && ((((this46004__$1.constructor === other46005.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46004__$1.w,other46005.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46004__$1.h,other46005.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46004__$1.__extmap,other46005.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46003){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46041 = k46003;
var G__46041__$1 = (((G__46041 instanceof cljs.core.Keyword))?G__46041.fqn:null);
switch (G__46041__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46003);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46002){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46044 = cljs.core.keyword_identical_QMARK_;
var expr__46045 = k__4511__auto__;
if(cljs.core.truth_((pred__46044.cljs$core$IFn$_invoke$arity$2 ? pred__46044.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46045) : pred__46044.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46045)))){
return (new shadow.dom.Size(G__46002,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46044.cljs$core$IFn$_invoke$arity$2 ? pred__46044.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46045) : pred__46044.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46045)))){
return (new shadow.dom.Size(self__.w,G__46002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46002),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46002){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46002,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46007){
var extmap__4542__auto__ = (function (){var G__46061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46007,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46061);
} else {
return G__46061;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46007),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46007),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__46427 = (i + (1));
var G__46428 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46427;
ret = G__46428;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46084){
var vec__46085 = p__46084;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46085,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46091 = arguments.length;
switch (G__46091) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46430 = ps;
var G__46431 = (i + (1));
el__$1 = G__46430;
i = G__46431;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46110 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46110,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46110,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46110,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46113_46435 = cljs.core.seq(props);
var chunk__46114_46436 = null;
var count__46115_46437 = (0);
var i__46116_46438 = (0);
while(true){
if((i__46116_46438 < count__46115_46437)){
var vec__46126_46439 = chunk__46114_46436.cljs$core$IIndexed$_nth$arity$2(null,i__46116_46438);
var k_46440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126_46439,(0),null);
var v_46441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126_46439,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46440);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46440),v_46441);


var G__46442 = seq__46113_46435;
var G__46443 = chunk__46114_46436;
var G__46444 = count__46115_46437;
var G__46445 = (i__46116_46438 + (1));
seq__46113_46435 = G__46442;
chunk__46114_46436 = G__46443;
count__46115_46437 = G__46444;
i__46116_46438 = G__46445;
continue;
} else {
var temp__5753__auto___46446 = cljs.core.seq(seq__46113_46435);
if(temp__5753__auto___46446){
var seq__46113_46447__$1 = temp__5753__auto___46446;
if(cljs.core.chunked_seq_QMARK_(seq__46113_46447__$1)){
var c__4679__auto___46448 = cljs.core.chunk_first(seq__46113_46447__$1);
var G__46449 = cljs.core.chunk_rest(seq__46113_46447__$1);
var G__46450 = c__4679__auto___46448;
var G__46451 = cljs.core.count(c__4679__auto___46448);
var G__46452 = (0);
seq__46113_46435 = G__46449;
chunk__46114_46436 = G__46450;
count__46115_46437 = G__46451;
i__46116_46438 = G__46452;
continue;
} else {
var vec__46129_46453 = cljs.core.first(seq__46113_46447__$1);
var k_46454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46129_46453,(0),null);
var v_46455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46129_46453,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46454);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46454),v_46455);


var G__46456 = cljs.core.next(seq__46113_46447__$1);
var G__46457 = null;
var G__46458 = (0);
var G__46459 = (0);
seq__46113_46435 = G__46456;
chunk__46114_46436 = G__46457;
count__46115_46437 = G__46458;
i__46116_46438 = G__46459;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46133 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46133,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46133,(1),null);
var seq__46136_46460 = cljs.core.seq(node_children);
var chunk__46138_46461 = null;
var count__46139_46462 = (0);
var i__46140_46463 = (0);
while(true){
if((i__46140_46463 < count__46139_46462)){
var child_struct_46464 = chunk__46138_46461.cljs$core$IIndexed$_nth$arity$2(null,i__46140_46463);
if((!((child_struct_46464 == null)))){
if(typeof child_struct_46464 === 'string'){
var text_46465 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46465),child_struct_46464].join(''));
} else {
var children_46466 = shadow.dom.svg_node(child_struct_46464);
if(cljs.core.seq_QMARK_(children_46466)){
var seq__46154_46467 = cljs.core.seq(children_46466);
var chunk__46156_46468 = null;
var count__46157_46469 = (0);
var i__46158_46470 = (0);
while(true){
if((i__46158_46470 < count__46157_46469)){
var child_46471 = chunk__46156_46468.cljs$core$IIndexed$_nth$arity$2(null,i__46158_46470);
if(cljs.core.truth_(child_46471)){
node.appendChild(child_46471);


var G__46472 = seq__46154_46467;
var G__46473 = chunk__46156_46468;
var G__46474 = count__46157_46469;
var G__46475 = (i__46158_46470 + (1));
seq__46154_46467 = G__46472;
chunk__46156_46468 = G__46473;
count__46157_46469 = G__46474;
i__46158_46470 = G__46475;
continue;
} else {
var G__46476 = seq__46154_46467;
var G__46477 = chunk__46156_46468;
var G__46478 = count__46157_46469;
var G__46479 = (i__46158_46470 + (1));
seq__46154_46467 = G__46476;
chunk__46156_46468 = G__46477;
count__46157_46469 = G__46478;
i__46158_46470 = G__46479;
continue;
}
} else {
var temp__5753__auto___46480 = cljs.core.seq(seq__46154_46467);
if(temp__5753__auto___46480){
var seq__46154_46481__$1 = temp__5753__auto___46480;
if(cljs.core.chunked_seq_QMARK_(seq__46154_46481__$1)){
var c__4679__auto___46482 = cljs.core.chunk_first(seq__46154_46481__$1);
var G__46483 = cljs.core.chunk_rest(seq__46154_46481__$1);
var G__46484 = c__4679__auto___46482;
var G__46485 = cljs.core.count(c__4679__auto___46482);
var G__46486 = (0);
seq__46154_46467 = G__46483;
chunk__46156_46468 = G__46484;
count__46157_46469 = G__46485;
i__46158_46470 = G__46486;
continue;
} else {
var child_46487 = cljs.core.first(seq__46154_46481__$1);
if(cljs.core.truth_(child_46487)){
node.appendChild(child_46487);


var G__46488 = cljs.core.next(seq__46154_46481__$1);
var G__46489 = null;
var G__46490 = (0);
var G__46491 = (0);
seq__46154_46467 = G__46488;
chunk__46156_46468 = G__46489;
count__46157_46469 = G__46490;
i__46158_46470 = G__46491;
continue;
} else {
var G__46492 = cljs.core.next(seq__46154_46481__$1);
var G__46493 = null;
var G__46494 = (0);
var G__46495 = (0);
seq__46154_46467 = G__46492;
chunk__46156_46468 = G__46493;
count__46157_46469 = G__46494;
i__46158_46470 = G__46495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46466);
}
}


var G__46496 = seq__46136_46460;
var G__46497 = chunk__46138_46461;
var G__46498 = count__46139_46462;
var G__46499 = (i__46140_46463 + (1));
seq__46136_46460 = G__46496;
chunk__46138_46461 = G__46497;
count__46139_46462 = G__46498;
i__46140_46463 = G__46499;
continue;
} else {
var G__46500 = seq__46136_46460;
var G__46501 = chunk__46138_46461;
var G__46502 = count__46139_46462;
var G__46503 = (i__46140_46463 + (1));
seq__46136_46460 = G__46500;
chunk__46138_46461 = G__46501;
count__46139_46462 = G__46502;
i__46140_46463 = G__46503;
continue;
}
} else {
var temp__5753__auto___46504 = cljs.core.seq(seq__46136_46460);
if(temp__5753__auto___46504){
var seq__46136_46505__$1 = temp__5753__auto___46504;
if(cljs.core.chunked_seq_QMARK_(seq__46136_46505__$1)){
var c__4679__auto___46506 = cljs.core.chunk_first(seq__46136_46505__$1);
var G__46507 = cljs.core.chunk_rest(seq__46136_46505__$1);
var G__46508 = c__4679__auto___46506;
var G__46509 = cljs.core.count(c__4679__auto___46506);
var G__46510 = (0);
seq__46136_46460 = G__46507;
chunk__46138_46461 = G__46508;
count__46139_46462 = G__46509;
i__46140_46463 = G__46510;
continue;
} else {
var child_struct_46511 = cljs.core.first(seq__46136_46505__$1);
if((!((child_struct_46511 == null)))){
if(typeof child_struct_46511 === 'string'){
var text_46512 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46512),child_struct_46511].join(''));
} else {
var children_46513 = shadow.dom.svg_node(child_struct_46511);
if(cljs.core.seq_QMARK_(children_46513)){
var seq__46160_46514 = cljs.core.seq(children_46513);
var chunk__46162_46515 = null;
var count__46163_46516 = (0);
var i__46164_46517 = (0);
while(true){
if((i__46164_46517 < count__46163_46516)){
var child_46518 = chunk__46162_46515.cljs$core$IIndexed$_nth$arity$2(null,i__46164_46517);
if(cljs.core.truth_(child_46518)){
node.appendChild(child_46518);


var G__46519 = seq__46160_46514;
var G__46520 = chunk__46162_46515;
var G__46521 = count__46163_46516;
var G__46522 = (i__46164_46517 + (1));
seq__46160_46514 = G__46519;
chunk__46162_46515 = G__46520;
count__46163_46516 = G__46521;
i__46164_46517 = G__46522;
continue;
} else {
var G__46523 = seq__46160_46514;
var G__46524 = chunk__46162_46515;
var G__46525 = count__46163_46516;
var G__46526 = (i__46164_46517 + (1));
seq__46160_46514 = G__46523;
chunk__46162_46515 = G__46524;
count__46163_46516 = G__46525;
i__46164_46517 = G__46526;
continue;
}
} else {
var temp__5753__auto___46527__$1 = cljs.core.seq(seq__46160_46514);
if(temp__5753__auto___46527__$1){
var seq__46160_46528__$1 = temp__5753__auto___46527__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46160_46528__$1)){
var c__4679__auto___46529 = cljs.core.chunk_first(seq__46160_46528__$1);
var G__46530 = cljs.core.chunk_rest(seq__46160_46528__$1);
var G__46531 = c__4679__auto___46529;
var G__46532 = cljs.core.count(c__4679__auto___46529);
var G__46533 = (0);
seq__46160_46514 = G__46530;
chunk__46162_46515 = G__46531;
count__46163_46516 = G__46532;
i__46164_46517 = G__46533;
continue;
} else {
var child_46534 = cljs.core.first(seq__46160_46528__$1);
if(cljs.core.truth_(child_46534)){
node.appendChild(child_46534);


var G__46535 = cljs.core.next(seq__46160_46528__$1);
var G__46536 = null;
var G__46537 = (0);
var G__46538 = (0);
seq__46160_46514 = G__46535;
chunk__46162_46515 = G__46536;
count__46163_46516 = G__46537;
i__46164_46517 = G__46538;
continue;
} else {
var G__46539 = cljs.core.next(seq__46160_46528__$1);
var G__46540 = null;
var G__46541 = (0);
var G__46542 = (0);
seq__46160_46514 = G__46539;
chunk__46162_46515 = G__46540;
count__46163_46516 = G__46541;
i__46164_46517 = G__46542;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46513);
}
}


var G__46543 = cljs.core.next(seq__46136_46505__$1);
var G__46544 = null;
var G__46545 = (0);
var G__46546 = (0);
seq__46136_46460 = G__46543;
chunk__46138_46461 = G__46544;
count__46139_46462 = G__46545;
i__46140_46463 = G__46546;
continue;
} else {
var G__46547 = cljs.core.next(seq__46136_46505__$1);
var G__46548 = null;
var G__46549 = (0);
var G__46550 = (0);
seq__46136_46460 = G__46547;
chunk__46138_46461 = G__46548;
count__46139_46462 = G__46549;
i__46140_46463 = G__46550;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46553 = arguments.length;
var i__4865__auto___46554 = (0);
while(true){
if((i__4865__auto___46554 < len__4864__auto___46553)){
args__4870__auto__.push((arguments[i__4865__auto___46554]));

var G__46556 = (i__4865__auto___46554 + (1));
i__4865__auto___46554 = G__46556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46166){
var G__46167 = cljs.core.first(seq46166);
var seq46166__$1 = cljs.core.next(seq46166);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46167,seq46166__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46169 = arguments.length;
switch (G__46169) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__43292__auto___46559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43293__auto__ = (function (){var switch__43125__auto__ = (function (state_46174){
var state_val_46175 = (state_46174[(1)]);
if((state_val_46175 === (1))){
var state_46174__$1 = state_46174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46174__$1,(2),once_or_cleanup);
} else {
if((state_val_46175 === (2))){
var inst_46171 = (state_46174[(2)]);
var inst_46172 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46174__$1 = (function (){var statearr_46176 = state_46174;
(statearr_46176[(7)] = inst_46171);

return statearr_46176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46174__$1,inst_46172);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43126__auto__ = null;
var shadow$dom$state_machine__43126__auto____0 = (function (){
var statearr_46177 = [null,null,null,null,null,null,null,null];
(statearr_46177[(0)] = shadow$dom$state_machine__43126__auto__);

(statearr_46177[(1)] = (1));

return statearr_46177;
});
var shadow$dom$state_machine__43126__auto____1 = (function (state_46174){
while(true){
var ret_value__43127__auto__ = (function (){try{while(true){
var result__43128__auto__ = switch__43125__auto__(state_46174);
if(cljs.core.keyword_identical_QMARK_(result__43128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43128__auto__;
}
break;
}
}catch (e46178){var ex__43129__auto__ = e46178;
var statearr_46179_46567 = state_46174;
(statearr_46179_46567[(2)] = ex__43129__auto__);


if(cljs.core.seq((state_46174[(4)]))){
var statearr_46180_46568 = state_46174;
(statearr_46180_46568[(1)] = cljs.core.first((state_46174[(4)])));

} else {
throw ex__43129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46569 = state_46174;
state_46174 = G__46569;
continue;
} else {
return ret_value__43127__auto__;
}
break;
}
});
shadow$dom$state_machine__43126__auto__ = function(state_46174){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43126__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43126__auto____1.call(this,state_46174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43126__auto____0;
shadow$dom$state_machine__43126__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43126__auto____1;
return shadow$dom$state_machine__43126__auto__;
})()
})();
var state__43294__auto__ = (function (){var statearr_46181 = f__43293__auto__();
(statearr_46181[(6)] = c__43292__auto___46559);

return statearr_46181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43294__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
