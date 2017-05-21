// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__26214__auto__ = [];
var len__26207__auto___40777 = arguments.length;
var i__26208__auto___40778 = (0);
while(true){
if((i__26208__auto___40778 < len__26207__auto___40777)){
args__26214__auto__.push((arguments[i__26208__auto___40778]));

var G__40779 = (i__26208__auto___40778 + (1));
i__26208__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((1) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26215__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__40772){
var vec__40773 = p__40772;
var context = cljs.core.nth.call(null,vec__40773,(0),null);
var footer = cljs.core.nth.call(null,vec__40773,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__25132__auto__ = e.message;
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str(" "),cljs.core.str(message)].join('')];
var context_msg = [cljs.core.str("In "),cljs.core.str(devtools.util.get_lib_info.call(null)),cljs.core.str((cljs.core.truth_(context)?[cljs.core.str(", "),cljs.core.str(context),cljs.core.str(".")].join(''):".")),cljs.core.str("\n\n")].join('');
var footer_msg = ((cljs.core.some_QMARK_.call(null,footer))?footer:[cljs.core.str("\n\n"),cljs.core.str("---\n"),cljs.core.str("Please report the issue here: "),cljs.core.str(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e40776){var e__$1 = e40776;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq40770){
var G__40771 = cljs.core.first.call(null,seq40770);
var seq40770__$1 = cljs.core.next.call(null,seq40770);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40771,seq40770__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1495401544476