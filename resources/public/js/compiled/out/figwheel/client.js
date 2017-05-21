// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36704 = [];
var len__26207__auto___36707 = arguments.length;
var i__26208__auto___36708 = (0);
while(true){
if((i__26208__auto___36708 < len__26207__auto___36707)){
args36704.push((arguments[i__26208__auto___36708]));

var G__36709 = (i__26208__auto___36708 + (1));
i__26208__auto___36708 = G__36709;
continue;
} else {
}
break;
}

var G__36706 = args36704.length;
switch (G__36706) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36704.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26214__auto__ = [];
var len__26207__auto___36712 = arguments.length;
var i__26208__auto___36713 = (0);
while(true){
if((i__26208__auto___36713 < len__26207__auto___36712)){
args__26214__auto__.push((arguments[i__26208__auto___36713]));

var G__36714 = (i__26208__auto___36713 + (1));
i__26208__auto___36713 = G__36714;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36711){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36711));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26214__auto__ = [];
var len__26207__auto___36716 = arguments.length;
var i__26208__auto___36717 = (0);
while(true){
if((i__26208__auto___36717 < len__26207__auto___36716)){
args__26214__auto__.push((arguments[i__26208__auto___36717]));

var G__36718 = (i__26208__auto___36717 + (1));
i__26208__auto___36717 = G__36718;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36715){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36715));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36719){
var map__36722 = p__36719;
var map__36722__$1 = ((((!((map__36722 == null)))?((((map__36722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36722):map__36722);
var message = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25132__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29366__auto___36884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___36884,ch){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___36884,ch){
return (function (state_36853){
var state_val_36854 = (state_36853[(1)]);
if((state_val_36854 === (7))){
var inst_36849 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36855_36885 = state_36853__$1;
(statearr_36855_36885[(2)] = inst_36849);

(statearr_36855_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (1))){
var state_36853__$1 = state_36853;
var statearr_36856_36886 = state_36853__$1;
(statearr_36856_36886[(2)] = null);

(statearr_36856_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (4))){
var inst_36806 = (state_36853[(7)]);
var inst_36806__$1 = (state_36853[(2)]);
var state_36853__$1 = (function (){var statearr_36857 = state_36853;
(statearr_36857[(7)] = inst_36806__$1);

return statearr_36857;
})();
if(cljs.core.truth_(inst_36806__$1)){
var statearr_36858_36887 = state_36853__$1;
(statearr_36858_36887[(1)] = (5));

} else {
var statearr_36859_36888 = state_36853__$1;
(statearr_36859_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (15))){
var inst_36813 = (state_36853[(8)]);
var inst_36828 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36813);
var inst_36829 = cljs.core.first.call(null,inst_36828);
var inst_36830 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36829);
var inst_36831 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36830)].join('');
var inst_36832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36831);
var state_36853__$1 = state_36853;
var statearr_36860_36889 = state_36853__$1;
(statearr_36860_36889[(2)] = inst_36832);

(statearr_36860_36889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (13))){
var inst_36837 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36861_36890 = state_36853__$1;
(statearr_36861_36890[(2)] = inst_36837);

(statearr_36861_36890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (6))){
var state_36853__$1 = state_36853;
var statearr_36862_36891 = state_36853__$1;
(statearr_36862_36891[(2)] = null);

(statearr_36862_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (17))){
var inst_36835 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36863_36892 = state_36853__$1;
(statearr_36863_36892[(2)] = inst_36835);

(statearr_36863_36892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (3))){
var inst_36851 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36853__$1,inst_36851);
} else {
if((state_val_36854 === (12))){
var inst_36812 = (state_36853[(9)]);
var inst_36826 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36812,opts);
var state_36853__$1 = state_36853;
if(cljs.core.truth_(inst_36826)){
var statearr_36864_36893 = state_36853__$1;
(statearr_36864_36893[(1)] = (15));

} else {
var statearr_36865_36894 = state_36853__$1;
(statearr_36865_36894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (2))){
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36853__$1,(4),ch);
} else {
if((state_val_36854 === (11))){
var inst_36813 = (state_36853[(8)]);
var inst_36818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36819 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36813);
var inst_36820 = cljs.core.async.timeout.call(null,(1000));
var inst_36821 = [inst_36819,inst_36820];
var inst_36822 = (new cljs.core.PersistentVector(null,2,(5),inst_36818,inst_36821,null));
var state_36853__$1 = state_36853;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36853__$1,(14),inst_36822);
} else {
if((state_val_36854 === (9))){
var inst_36813 = (state_36853[(8)]);
var inst_36839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36840 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36813);
var inst_36841 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36840);
var inst_36842 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36841)].join('');
var inst_36843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36842);
var state_36853__$1 = (function (){var statearr_36866 = state_36853;
(statearr_36866[(10)] = inst_36839);

return statearr_36866;
})();
var statearr_36867_36895 = state_36853__$1;
(statearr_36867_36895[(2)] = inst_36843);

(statearr_36867_36895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (5))){
var inst_36806 = (state_36853[(7)]);
var inst_36808 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36809 = (new cljs.core.PersistentArrayMap(null,2,inst_36808,null));
var inst_36810 = (new cljs.core.PersistentHashSet(null,inst_36809,null));
var inst_36811 = figwheel.client.focus_msgs.call(null,inst_36810,inst_36806);
var inst_36812 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36811);
var inst_36813 = cljs.core.first.call(null,inst_36811);
var inst_36814 = figwheel.client.autoload_QMARK_.call(null);
var state_36853__$1 = (function (){var statearr_36868 = state_36853;
(statearr_36868[(8)] = inst_36813);

(statearr_36868[(9)] = inst_36812);

return statearr_36868;
})();
if(cljs.core.truth_(inst_36814)){
var statearr_36869_36896 = state_36853__$1;
(statearr_36869_36896[(1)] = (8));

} else {
var statearr_36870_36897 = state_36853__$1;
(statearr_36870_36897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (14))){
var inst_36824 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36871_36898 = state_36853__$1;
(statearr_36871_36898[(2)] = inst_36824);

(statearr_36871_36898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (16))){
var state_36853__$1 = state_36853;
var statearr_36872_36899 = state_36853__$1;
(statearr_36872_36899[(2)] = null);

(statearr_36872_36899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (10))){
var inst_36845 = (state_36853[(2)]);
var state_36853__$1 = (function (){var statearr_36873 = state_36853;
(statearr_36873[(11)] = inst_36845);

return statearr_36873;
})();
var statearr_36874_36900 = state_36853__$1;
(statearr_36874_36900[(2)] = null);

(statearr_36874_36900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (8))){
var inst_36812 = (state_36853[(9)]);
var inst_36816 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36812,opts);
var state_36853__$1 = state_36853;
if(cljs.core.truth_(inst_36816)){
var statearr_36875_36901 = state_36853__$1;
(statearr_36875_36901[(1)] = (11));

} else {
var statearr_36876_36902 = state_36853__$1;
(statearr_36876_36902[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto___36884,ch))
;
return ((function (switch__29254__auto__,c__29366__auto___36884,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____0 = (function (){
var statearr_36880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____1 = (function (state_36853){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_36853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e36881){if((e36881 instanceof Object)){
var ex__29258__auto__ = e36881;
var statearr_36882_36903 = state_36853;
(statearr_36882_36903[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_36853;
state_36853 = G__36904;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__ = function(state_36853){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____1.call(this,state_36853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29255__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___36884,ch))
})();
var state__29368__auto__ = (function (){var statearr_36883 = f__29367__auto__.call(null);
(statearr_36883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___36884);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___36884,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36905_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36905_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36908 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36908){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36907){if((e36907 instanceof Error)){
var e = e36907;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36908], null));
} else {
var e = e36907;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36908))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36909){
var map__36918 = p__36909;
var map__36918__$1 = ((((!((map__36918 == null)))?((((map__36918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36918):map__36918);
var opts = map__36918__$1;
var build_id = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36918,map__36918__$1,opts,build_id){
return (function (p__36920){
var vec__36921 = p__36920;
var seq__36922 = cljs.core.seq.call(null,vec__36921);
var first__36923 = cljs.core.first.call(null,seq__36922);
var seq__36922__$1 = cljs.core.next.call(null,seq__36922);
var map__36924 = first__36923;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var msg = map__36924__$1;
var msg_name = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36922__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36921,seq__36922,first__36923,seq__36922__$1,map__36924,map__36924__$1,msg,msg_name,_,map__36918,map__36918__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36921,seq__36922,first__36923,seq__36922__$1,map__36924,map__36924__$1,msg,msg_name,_,map__36918,map__36918__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36918,map__36918__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36932){
var vec__36933 = p__36932;
var seq__36934 = cljs.core.seq.call(null,vec__36933);
var first__36935 = cljs.core.first.call(null,seq__36934);
var seq__36934__$1 = cljs.core.next.call(null,seq__36934);
var map__36936 = first__36935;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var msg = map__36936__$1;
var msg_name = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36934__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36938){
var map__36950 = p__36938;
var map__36950__$1 = ((((!((map__36950 == null)))?((((map__36950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36950):map__36950);
var on_compile_warning = cljs.core.get.call(null,map__36950__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36950__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36950,map__36950__$1,on_compile_warning,on_compile_fail){
return (function (p__36952){
var vec__36953 = p__36952;
var seq__36954 = cljs.core.seq.call(null,vec__36953);
var first__36955 = cljs.core.first.call(null,seq__36954);
var seq__36954__$1 = cljs.core.next.call(null,seq__36954);
var map__36956 = first__36955;
var map__36956__$1 = ((((!((map__36956 == null)))?((((map__36956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36956):map__36956);
var msg = map__36956__$1;
var msg_name = cljs.core.get.call(null,map__36956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36954__$1;
var pred__36958 = cljs.core._EQ_;
var expr__36959 = msg_name;
if(cljs.core.truth_(pred__36958.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36959))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36958.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36959))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36950,map__36950__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__,msg_hist,msg_names,msg){
return (function (state_37187){
var state_val_37188 = (state_37187[(1)]);
if((state_val_37188 === (7))){
var inst_37107 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37107)){
var statearr_37189_37239 = state_37187__$1;
(statearr_37189_37239[(1)] = (8));

} else {
var statearr_37190_37240 = state_37187__$1;
(statearr_37190_37240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (20))){
var inst_37181 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37191_37241 = state_37187__$1;
(statearr_37191_37241[(2)] = inst_37181);

(statearr_37191_37241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (27))){
var inst_37177 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37192_37242 = state_37187__$1;
(statearr_37192_37242[(2)] = inst_37177);

(statearr_37192_37242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (1))){
var inst_37100 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37100)){
var statearr_37193_37243 = state_37187__$1;
(statearr_37193_37243[(1)] = (2));

} else {
var statearr_37194_37244 = state_37187__$1;
(statearr_37194_37244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (24))){
var inst_37179 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37195_37245 = state_37187__$1;
(statearr_37195_37245[(2)] = inst_37179);

(statearr_37195_37245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (4))){
var inst_37185 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37187__$1,inst_37185);
} else {
if((state_val_37188 === (15))){
var inst_37183 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37196_37246 = state_37187__$1;
(statearr_37196_37246[(2)] = inst_37183);

(statearr_37196_37246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (21))){
var inst_37136 = (state_37187[(2)]);
var inst_37137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37138 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37137);
var state_37187__$1 = (function (){var statearr_37197 = state_37187;
(statearr_37197[(7)] = inst_37136);

return statearr_37197;
})();
var statearr_37198_37247 = state_37187__$1;
(statearr_37198_37247[(2)] = inst_37138);

(statearr_37198_37247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (31))){
var inst_37166 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37166)){
var statearr_37199_37248 = state_37187__$1;
(statearr_37199_37248[(1)] = (34));

} else {
var statearr_37200_37249 = state_37187__$1;
(statearr_37200_37249[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (32))){
var inst_37175 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37201_37250 = state_37187__$1;
(statearr_37201_37250[(2)] = inst_37175);

(statearr_37201_37250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (33))){
var inst_37162 = (state_37187[(2)]);
var inst_37163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37164 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37163);
var state_37187__$1 = (function (){var statearr_37202 = state_37187;
(statearr_37202[(8)] = inst_37162);

return statearr_37202;
})();
var statearr_37203_37251 = state_37187__$1;
(statearr_37203_37251[(2)] = inst_37164);

(statearr_37203_37251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (13))){
var inst_37121 = figwheel.client.heads_up.clear.call(null);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(16),inst_37121);
} else {
if((state_val_37188 === (22))){
var inst_37142 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37143 = figwheel.client.heads_up.append_warning_message.call(null,inst_37142);
var state_37187__$1 = state_37187;
var statearr_37204_37252 = state_37187__$1;
(statearr_37204_37252[(2)] = inst_37143);

(statearr_37204_37252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (36))){
var inst_37173 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37205_37253 = state_37187__$1;
(statearr_37205_37253[(2)] = inst_37173);

(statearr_37205_37253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (29))){
var inst_37153 = (state_37187[(2)]);
var inst_37154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37155 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37154);
var state_37187__$1 = (function (){var statearr_37206 = state_37187;
(statearr_37206[(9)] = inst_37153);

return statearr_37206;
})();
var statearr_37207_37254 = state_37187__$1;
(statearr_37207_37254[(2)] = inst_37155);

(statearr_37207_37254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (6))){
var inst_37102 = (state_37187[(10)]);
var state_37187__$1 = state_37187;
var statearr_37208_37255 = state_37187__$1;
(statearr_37208_37255[(2)] = inst_37102);

(statearr_37208_37255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (28))){
var inst_37149 = (state_37187[(2)]);
var inst_37150 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37151 = figwheel.client.heads_up.display_warning.call(null,inst_37150);
var state_37187__$1 = (function (){var statearr_37209 = state_37187;
(statearr_37209[(11)] = inst_37149);

return statearr_37209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(29),inst_37151);
} else {
if((state_val_37188 === (25))){
var inst_37147 = figwheel.client.heads_up.clear.call(null);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(28),inst_37147);
} else {
if((state_val_37188 === (34))){
var inst_37168 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(37),inst_37168);
} else {
if((state_val_37188 === (17))){
var inst_37127 = (state_37187[(2)]);
var inst_37128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37129 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37128);
var state_37187__$1 = (function (){var statearr_37210 = state_37187;
(statearr_37210[(12)] = inst_37127);

return statearr_37210;
})();
var statearr_37211_37256 = state_37187__$1;
(statearr_37211_37256[(2)] = inst_37129);

(statearr_37211_37256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (3))){
var inst_37119 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37119)){
var statearr_37212_37257 = state_37187__$1;
(statearr_37212_37257[(1)] = (13));

} else {
var statearr_37213_37258 = state_37187__$1;
(statearr_37213_37258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (12))){
var inst_37115 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37214_37259 = state_37187__$1;
(statearr_37214_37259[(2)] = inst_37115);

(statearr_37214_37259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (2))){
var inst_37102 = (state_37187[(10)]);
var inst_37102__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37187__$1 = (function (){var statearr_37215 = state_37187;
(statearr_37215[(10)] = inst_37102__$1);

return statearr_37215;
})();
if(cljs.core.truth_(inst_37102__$1)){
var statearr_37216_37260 = state_37187__$1;
(statearr_37216_37260[(1)] = (5));

} else {
var statearr_37217_37261 = state_37187__$1;
(statearr_37217_37261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (23))){
var inst_37145 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37145)){
var statearr_37218_37262 = state_37187__$1;
(statearr_37218_37262[(1)] = (25));

} else {
var statearr_37219_37263 = state_37187__$1;
(statearr_37219_37263[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (35))){
var state_37187__$1 = state_37187;
var statearr_37220_37264 = state_37187__$1;
(statearr_37220_37264[(2)] = null);

(statearr_37220_37264[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (19))){
var inst_37140 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37140)){
var statearr_37221_37265 = state_37187__$1;
(statearr_37221_37265[(1)] = (22));

} else {
var statearr_37222_37266 = state_37187__$1;
(statearr_37222_37266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (11))){
var inst_37111 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37223_37267 = state_37187__$1;
(statearr_37223_37267[(2)] = inst_37111);

(statearr_37223_37267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (9))){
var inst_37113 = figwheel.client.heads_up.clear.call(null);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(12),inst_37113);
} else {
if((state_val_37188 === (5))){
var inst_37104 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37187__$1 = state_37187;
var statearr_37224_37268 = state_37187__$1;
(statearr_37224_37268[(2)] = inst_37104);

(statearr_37224_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (14))){
var inst_37131 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37131)){
var statearr_37225_37269 = state_37187__$1;
(statearr_37225_37269[(1)] = (18));

} else {
var statearr_37226_37270 = state_37187__$1;
(statearr_37226_37270[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (26))){
var inst_37157 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37157)){
var statearr_37227_37271 = state_37187__$1;
(statearr_37227_37271[(1)] = (30));

} else {
var statearr_37228_37272 = state_37187__$1;
(statearr_37228_37272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (16))){
var inst_37123 = (state_37187[(2)]);
var inst_37124 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37125 = figwheel.client.heads_up.display_exception.call(null,inst_37124);
var state_37187__$1 = (function (){var statearr_37229 = state_37187;
(statearr_37229[(13)] = inst_37123);

return statearr_37229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(17),inst_37125);
} else {
if((state_val_37188 === (30))){
var inst_37159 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37160 = figwheel.client.heads_up.display_warning.call(null,inst_37159);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(33),inst_37160);
} else {
if((state_val_37188 === (10))){
var inst_37117 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37230_37273 = state_37187__$1;
(statearr_37230_37273[(2)] = inst_37117);

(statearr_37230_37273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (18))){
var inst_37133 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37134 = figwheel.client.heads_up.display_exception.call(null,inst_37133);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(21),inst_37134);
} else {
if((state_val_37188 === (37))){
var inst_37170 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37231_37274 = state_37187__$1;
(statearr_37231_37274[(2)] = inst_37170);

(statearr_37231_37274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (8))){
var inst_37109 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(11),inst_37109);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29366__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29254__auto__,c__29366__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____1 = (function (state_37187){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_37187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__29258__auto__ = e37236;
var statearr_37237_37275 = state_37187;
(statearr_37237_37275[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_37187;
state_37187 = G__37276;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__ = function(state_37187){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____1.call(this,state_37187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__,msg_hist,msg_names,msg))
})();
var state__29368__auto__ = (function (){var statearr_37238 = f__29367__auto__.call(null);
(statearr_37238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__,msg_hist,msg_names,msg))
);

return c__29366__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29366__auto___37339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto___37339,ch){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto___37339,ch){
return (function (state_37322){
var state_val_37323 = (state_37322[(1)]);
if((state_val_37323 === (1))){
var state_37322__$1 = state_37322;
var statearr_37324_37340 = state_37322__$1;
(statearr_37324_37340[(2)] = null);

(statearr_37324_37340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (2))){
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(4),ch);
} else {
if((state_val_37323 === (3))){
var inst_37320 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37322__$1,inst_37320);
} else {
if((state_val_37323 === (4))){
var inst_37310 = (state_37322[(7)]);
var inst_37310__$1 = (state_37322[(2)]);
var state_37322__$1 = (function (){var statearr_37325 = state_37322;
(statearr_37325[(7)] = inst_37310__$1);

return statearr_37325;
})();
if(cljs.core.truth_(inst_37310__$1)){
var statearr_37326_37341 = state_37322__$1;
(statearr_37326_37341[(1)] = (5));

} else {
var statearr_37327_37342 = state_37322__$1;
(statearr_37327_37342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (5))){
var inst_37310 = (state_37322[(7)]);
var inst_37312 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37310);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(8),inst_37312);
} else {
if((state_val_37323 === (6))){
var state_37322__$1 = state_37322;
var statearr_37328_37343 = state_37322__$1;
(statearr_37328_37343[(2)] = null);

(statearr_37328_37343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (7))){
var inst_37318 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37329_37344 = state_37322__$1;
(statearr_37329_37344[(2)] = inst_37318);

(statearr_37329_37344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (8))){
var inst_37314 = (state_37322[(2)]);
var state_37322__$1 = (function (){var statearr_37330 = state_37322;
(statearr_37330[(8)] = inst_37314);

return statearr_37330;
})();
var statearr_37331_37345 = state_37322__$1;
(statearr_37331_37345[(2)] = null);

(statearr_37331_37345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29366__auto___37339,ch))
;
return ((function (switch__29254__auto__,c__29366__auto___37339,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29255__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29255__auto____0 = (function (){
var statearr_37335 = [null,null,null,null,null,null,null,null,null];
(statearr_37335[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29255__auto__);

(statearr_37335[(1)] = (1));

return statearr_37335;
});
var figwheel$client$heads_up_plugin_$_state_machine__29255__auto____1 = (function (state_37322){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_37322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e37336){if((e37336 instanceof Object)){
var ex__29258__auto__ = e37336;
var statearr_37337_37346 = state_37322;
(statearr_37337_37346[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37347 = state_37322;
state_37322 = G__37347;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29255__auto__ = function(state_37322){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29255__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29255__auto____1.call(this,state_37322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29255__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29255__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto___37339,ch))
})();
var state__29368__auto__ = (function (){var statearr_37338 = f__29367__auto__.call(null);
(statearr_37338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto___37339);

return statearr_37338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto___37339,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__){
return (function (state_37368){
var state_val_37369 = (state_37368[(1)]);
if((state_val_37369 === (1))){
var inst_37363 = cljs.core.async.timeout.call(null,(3000));
var state_37368__$1 = state_37368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37368__$1,(2),inst_37363);
} else {
if((state_val_37369 === (2))){
var inst_37365 = (state_37368[(2)]);
var inst_37366 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37368__$1 = (function (){var statearr_37370 = state_37368;
(statearr_37370[(7)] = inst_37365);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37368__$1,inst_37366);
} else {
return null;
}
}
});})(c__29366__auto__))
;
return ((function (switch__29254__auto__,c__29366__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____0 = (function (){
var statearr_37374 = [null,null,null,null,null,null,null,null];
(statearr_37374[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__);

(statearr_37374[(1)] = (1));

return statearr_37374;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____1 = (function (state_37368){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_37368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e37375){if((e37375 instanceof Object)){
var ex__29258__auto__ = e37375;
var statearr_37376_37378 = state_37368;
(statearr_37376_37378[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37379 = state_37368;
state_37368 = G__37379;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__ = function(state_37368){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____1.call(this,state_37368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29255__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__))
})();
var state__29368__auto__ = (function (){var statearr_37377 = f__29367__auto__.call(null);
(statearr_37377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_37377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__))
);

return c__29366__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29366__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29367__auto__ = (function (){var switch__29254__auto__ = ((function (c__29366__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37402){
var state_val_37403 = (state_37402[(1)]);
if((state_val_37403 === (1))){
var inst_37396 = cljs.core.async.timeout.call(null,(2000));
var state_37402__$1 = state_37402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37402__$1,(2),inst_37396);
} else {
if((state_val_37403 === (2))){
var inst_37398 = (state_37402[(2)]);
var inst_37399 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37400 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37399);
var state_37402__$1 = (function (){var statearr_37404 = state_37402;
(statearr_37404[(7)] = inst_37398);

return statearr_37404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37402__$1,inst_37400);
} else {
return null;
}
}
});})(c__29366__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29254__auto__,c__29366__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____0 = (function (){
var statearr_37408 = [null,null,null,null,null,null,null,null];
(statearr_37408[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__);

(statearr_37408[(1)] = (1));

return statearr_37408;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____1 = (function (state_37402){
while(true){
var ret_value__29256__auto__ = (function (){try{while(true){
var result__29257__auto__ = switch__29254__auto__.call(null,state_37402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29257__auto__;
}
break;
}
}catch (e37409){if((e37409 instanceof Object)){
var ex__29258__auto__ = e37409;
var statearr_37410_37412 = state_37402;
(statearr_37410_37412[(5)] = ex__29258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37413 = state_37402;
state_37402 = G__37413;
continue;
} else {
return ret_value__29256__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__ = function(state_37402){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____1.call(this,state_37402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29255__auto__;
})()
;})(switch__29254__auto__,c__29366__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29368__auto__ = (function (){var statearr_37411 = f__29367__auto__.call(null);
(statearr_37411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29366__auto__);

return statearr_37411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29368__auto__);
});})(c__29366__auto__,figwheel_version,temp__4657__auto__))
);

return c__29366__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37414){
var map__37418 = p__37414;
var map__37418__$1 = ((((!((map__37418 == null)))?((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var file = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37420 = "";
var G__37420__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37420),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37420);
var G__37420__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37420__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37420__$1);
if(cljs.core.truth_((function (){var and__25120__auto__ = line;
if(cljs.core.truth_(and__25120__auto__)){
return column;
} else {
return and__25120__auto__;
}
})())){
return [cljs.core.str(G__37420__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37420__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37421){
var map__37428 = p__37421;
var map__37428__$1 = ((((!((map__37428 == null)))?((((map__37428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37428):map__37428);
var ed = map__37428__$1;
var formatted_exception = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37430_37434 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37431_37435 = null;
var count__37432_37436 = (0);
var i__37433_37437 = (0);
while(true){
if((i__37433_37437 < count__37432_37436)){
var msg_37438 = cljs.core._nth.call(null,chunk__37431_37435,i__37433_37437);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37438);

var G__37439 = seq__37430_37434;
var G__37440 = chunk__37431_37435;
var G__37441 = count__37432_37436;
var G__37442 = (i__37433_37437 + (1));
seq__37430_37434 = G__37439;
chunk__37431_37435 = G__37440;
count__37432_37436 = G__37441;
i__37433_37437 = G__37442;
continue;
} else {
var temp__4657__auto___37443 = cljs.core.seq.call(null,seq__37430_37434);
if(temp__4657__auto___37443){
var seq__37430_37444__$1 = temp__4657__auto___37443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37430_37444__$1)){
var c__25943__auto___37445 = cljs.core.chunk_first.call(null,seq__37430_37444__$1);
var G__37446 = cljs.core.chunk_rest.call(null,seq__37430_37444__$1);
var G__37447 = c__25943__auto___37445;
var G__37448 = cljs.core.count.call(null,c__25943__auto___37445);
var G__37449 = (0);
seq__37430_37434 = G__37446;
chunk__37431_37435 = G__37447;
count__37432_37436 = G__37448;
i__37433_37437 = G__37449;
continue;
} else {
var msg_37450 = cljs.core.first.call(null,seq__37430_37444__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37450);

var G__37451 = cljs.core.next.call(null,seq__37430_37444__$1);
var G__37452 = null;
var G__37453 = (0);
var G__37454 = (0);
seq__37430_37434 = G__37451;
chunk__37431_37435 = G__37452;
count__37432_37436 = G__37453;
i__37433_37437 = G__37454;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37455){
var map__37458 = p__37455;
var map__37458__$1 = ((((!((map__37458 == null)))?((((map__37458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37458):map__37458);
var w = map__37458__$1;
var message = cljs.core.get.call(null,map__37458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37470 = cljs.core.seq.call(null,plugins);
var chunk__37471 = null;
var count__37472 = (0);
var i__37473 = (0);
while(true){
if((i__37473 < count__37472)){
var vec__37474 = cljs.core._nth.call(null,chunk__37471,i__37473);
var k = cljs.core.nth.call(null,vec__37474,(0),null);
var plugin = cljs.core.nth.call(null,vec__37474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37480 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37470,chunk__37471,count__37472,i__37473,pl_37480,vec__37474,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37480.call(null,msg_hist);
});})(seq__37470,chunk__37471,count__37472,i__37473,pl_37480,vec__37474,k,plugin))
);
} else {
}

var G__37481 = seq__37470;
var G__37482 = chunk__37471;
var G__37483 = count__37472;
var G__37484 = (i__37473 + (1));
seq__37470 = G__37481;
chunk__37471 = G__37482;
count__37472 = G__37483;
i__37473 = G__37484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37470);
if(temp__4657__auto__){
var seq__37470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37470__$1)){
var c__25943__auto__ = cljs.core.chunk_first.call(null,seq__37470__$1);
var G__37485 = cljs.core.chunk_rest.call(null,seq__37470__$1);
var G__37486 = c__25943__auto__;
var G__37487 = cljs.core.count.call(null,c__25943__auto__);
var G__37488 = (0);
seq__37470 = G__37485;
chunk__37471 = G__37486;
count__37472 = G__37487;
i__37473 = G__37488;
continue;
} else {
var vec__37477 = cljs.core.first.call(null,seq__37470__$1);
var k = cljs.core.nth.call(null,vec__37477,(0),null);
var plugin = cljs.core.nth.call(null,vec__37477,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37489 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37470,chunk__37471,count__37472,i__37473,pl_37489,vec__37477,k,plugin,seq__37470__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37489.call(null,msg_hist);
});})(seq__37470,chunk__37471,count__37472,i__37473,pl_37489,vec__37477,k,plugin,seq__37470__$1,temp__4657__auto__))
);
} else {
}

var G__37490 = cljs.core.next.call(null,seq__37470__$1);
var G__37491 = null;
var G__37492 = (0);
var G__37493 = (0);
seq__37470 = G__37490;
chunk__37471 = G__37491;
count__37472 = G__37492;
i__37473 = G__37493;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37494 = [];
var len__26207__auto___37501 = arguments.length;
var i__26208__auto___37502 = (0);
while(true){
if((i__26208__auto___37502 < len__26207__auto___37501)){
args37494.push((arguments[i__26208__auto___37502]));

var G__37503 = (i__26208__auto___37502 + (1));
i__26208__auto___37502 = G__37503;
continue;
} else {
}
break;
}

var G__37496 = args37494.length;
switch (G__37496) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37494.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37497_37505 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37498_37506 = null;
var count__37499_37507 = (0);
var i__37500_37508 = (0);
while(true){
if((i__37500_37508 < count__37499_37507)){
var msg_37509 = cljs.core._nth.call(null,chunk__37498_37506,i__37500_37508);
figwheel.client.socket.handle_incoming_message.call(null,msg_37509);

var G__37510 = seq__37497_37505;
var G__37511 = chunk__37498_37506;
var G__37512 = count__37499_37507;
var G__37513 = (i__37500_37508 + (1));
seq__37497_37505 = G__37510;
chunk__37498_37506 = G__37511;
count__37499_37507 = G__37512;
i__37500_37508 = G__37513;
continue;
} else {
var temp__4657__auto___37514 = cljs.core.seq.call(null,seq__37497_37505);
if(temp__4657__auto___37514){
var seq__37497_37515__$1 = temp__4657__auto___37514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37497_37515__$1)){
var c__25943__auto___37516 = cljs.core.chunk_first.call(null,seq__37497_37515__$1);
var G__37517 = cljs.core.chunk_rest.call(null,seq__37497_37515__$1);
var G__37518 = c__25943__auto___37516;
var G__37519 = cljs.core.count.call(null,c__25943__auto___37516);
var G__37520 = (0);
seq__37497_37505 = G__37517;
chunk__37498_37506 = G__37518;
count__37499_37507 = G__37519;
i__37500_37508 = G__37520;
continue;
} else {
var msg_37521 = cljs.core.first.call(null,seq__37497_37515__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37521);

var G__37522 = cljs.core.next.call(null,seq__37497_37515__$1);
var G__37523 = null;
var G__37524 = (0);
var G__37525 = (0);
seq__37497_37505 = G__37522;
chunk__37498_37506 = G__37523;
count__37499_37507 = G__37524;
i__37500_37508 = G__37525;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26214__auto__ = [];
var len__26207__auto___37530 = arguments.length;
var i__26208__auto___37531 = (0);
while(true){
if((i__26208__auto___37531 < len__26207__auto___37530)){
args__26214__auto__.push((arguments[i__26208__auto___37531]));

var G__37532 = (i__26208__auto___37531 + (1));
i__26208__auto___37531 = G__37532;
continue;
} else {
}
break;
}

var argseq__26215__auto__ = ((((0) < args__26214__auto__.length))?(new cljs.core.IndexedSeq(args__26214__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26215__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37527){
var map__37528 = p__37527;
var map__37528__$1 = ((((!((map__37528 == null)))?((((map__37528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37528):map__37528);
var opts = map__37528__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37526){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37526));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37534){if((e37534 instanceof Error)){
var e = e37534;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37534;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37538){
var map__37539 = p__37538;
var map__37539__$1 = ((((!((map__37539 == null)))?((((map__37539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37539):map__37539);
var msg_name = cljs.core.get.call(null,map__37539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1495401536399