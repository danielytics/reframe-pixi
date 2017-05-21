// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25795__auto__ = (((value == null))?null:value);
var m__25796__auto__ = (devtools.format._header[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,value);
} else {
var m__25796__auto____$1 = (devtools.format._header["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25795__auto__ = (((value == null))?null:value);
var m__25796__auto__ = (devtools.format._has_body[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,value);
} else {
var m__25796__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25795__auto__ = (((value == null))?null:value);
var m__25796__auto__ = (devtools.format._body[goog.typeOf(x__25795__auto__)]);
if(!((m__25796__auto__ == null))){
return m__25796__auto__.call(null,value);
} else {
var m__25796__auto____$1 = (devtools.format._body["_"]);
if(!((m__25796__auto____$1 == null))){
return m__25796__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37859 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37859["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37860 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37860["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37861 = temp__4655__auto____$2;
return (o37861["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37862 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37862["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37863 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37863["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37864 = temp__4655__auto____$2;
return (o37864["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37865 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37865["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37866 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37866["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37867 = temp__4655__auto____$2;
return (o37867["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37868 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37868["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37869 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37869["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37870 = temp__4655__auto____$2;
return (o37870["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37871 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37871["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37872 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37872["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37873 = temp__4655__auto____$2;
return (o37873["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37874 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37874["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37875 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37875["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37876 = temp__4655__auto____$2;
return (o37876["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37877 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37877["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37878 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37878["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37879 = temp__4655__auto____$2;
return (o37879["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37881 = arguments.length;
var i__26208__auto___37882 = (0);
while(true){
if((i__26208__auto___37882 < len__26207__auto___37881)){
args__26214__auto__.push((arguments[i__26208__auto___37882]));

var G__37883 = (i__26208__auto___37882 + (1));
i__26208__auto___37882 = G__37883;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37880){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37880));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37885 = arguments.length;
var i__26208__auto___37886 = (0);
while(true){
if((i__26208__auto___37886 < len__26207__auto___37885)){
args__26214__auto__.push((arguments[i__26208__auto___37886]));

var G__37887 = (i__26208__auto___37886 + (1));
i__26208__auto___37886 = G__37887;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37884){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37884));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37889 = arguments.length;
var i__26208__auto___37890 = (0);
while(true){
if((i__26208__auto___37890 < len__26207__auto___37889)){
args__26214__auto__.push((arguments[i__26208__auto___37890]));

var G__37891 = (i__26208__auto___37890 + (1));
i__26208__auto___37890 = G__37891;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37888){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37888));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37893 = arguments.length;
var i__26208__auto___37894 = (0);
while(true){
if((i__26208__auto___37894 < len__26207__auto___37893)){
args__26214__auto__.push((arguments[i__26208__auto___37894]));

var G__37895 = (i__26208__auto___37894 + (1));
i__26208__auto___37894 = G__37895;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37892){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37892));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37897 = arguments.length;
var i__26208__auto___37898 = (0);
while(true){
if((i__26208__auto___37898 < len__26207__auto___37897)){
args__26214__auto__.push((arguments[i__26208__auto___37898]));

var G__37899 = (i__26208__auto___37898 + (1));
i__26208__auto___37898 = G__37899;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37896){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37896));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37901 = arguments.length;
var i__26208__auto___37902 = (0);
while(true){
if((i__26208__auto___37902 < len__26207__auto___37901)){
args__26214__auto__.push((arguments[i__26208__auto___37902]));

var G__37903 = (i__26208__auto___37902 + (1));
i__26208__auto___37902 = G__37903;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37900){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37900));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37905 = arguments.length;
var i__26208__auto___37906 = (0);
while(true){
if((i__26208__auto___37906 < len__26207__auto___37905)){
args__26214__auto__.push((arguments[i__26208__auto___37906]));

var G__37907 = (i__26208__auto___37906 + (1));
i__26208__auto___37906 = G__37907;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37904){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37904));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37915 = arguments.length;
var i__26208__auto___37916 = (0);
while(true){
if((i__26208__auto___37916 < len__26207__auto___37915)){
args__26214__auto__.push((arguments[i__26208__auto___37916]));

var G__37917 = (i__26208__auto___37916 + (1));
i__26208__auto___37916 = G__37917;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((1) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26215__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37911){
var vec__37912 = p__37911;
var state_override = cljs.core.nth.call(null,vec__37912,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37912,state_override){
return (function (p1__37908_SHARP_){
return cljs.core.merge.call(null,p1__37908_SHARP_,state_override);
});})(vec__37912,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37909){
var G__37910 = cljs.core.first.call(null,seq37909);
var seq37909__$1 = cljs.core.next.call(null,seq37909);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37910,seq37909__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37919 = arguments.length;
var i__26208__auto___37920 = (0);
while(true){
if((i__26208__auto___37920 < len__26207__auto___37919)){
args__26214__auto__.push((arguments[i__26208__auto___37920]));

var G__37921 = (i__26208__auto___37920 + (1));
i__26208__auto___37920 = G__37921;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37918){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37918));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37924 = arguments.length;
var i__26208__auto___37925 = (0);
while(true){
if((i__26208__auto___37925 < len__26207__auto___37924)){
args__26214__auto__.push((arguments[i__26208__auto___37925]));

var G__37926 = (i__26208__auto___37925 + (1));
i__26208__auto___37925 = G__37926;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((1) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26215__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37922){
var G__37923 = cljs.core.first.call(null,seq37922);
var seq37922__$1 = cljs.core.next.call(null,seq37922);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37923,seq37922__$1);
});


//# sourceMappingURL=format.js.map?rel=1495401537640