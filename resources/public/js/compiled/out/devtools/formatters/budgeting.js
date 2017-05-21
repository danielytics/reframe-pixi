// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__37609__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__37609__auto__["add"]).call(o__37609__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__37609__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__37609__auto__["delete"]).call(o__37609__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__37609__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__37609__auto__["has"]).call(o__37609__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools$formatters$budgeting$determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools$formatters$budgeting$has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__40783 = data;
var target__37614__auto__ = G__40783;
if(cljs.core.truth_(target__37614__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__40783)].join('')),cljs.core.str("\n"),cljs.core.str("target__37614__auto__")].join('')));
}

(target__37614__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__40783;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_40792 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_40792);
} else {
var seq__40788_40793 = cljs.core.seq.call(null,json_ml);
var chunk__40789_40794 = null;
var count__40790_40795 = (0);
var i__40791_40796 = (0);
while(true){
if((i__40791_40796 < count__40790_40795)){
var item_40797 = cljs.core._nth.call(null,chunk__40789_40794,i__40791_40796);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_40797,new_depth_budget_40792);

var G__40798 = seq__40788_40793;
var G__40799 = chunk__40789_40794;
var G__40800 = count__40790_40795;
var G__40801 = (i__40791_40796 + (1));
seq__40788_40793 = G__40798;
chunk__40789_40794 = G__40799;
count__40790_40795 = G__40800;
i__40791_40796 = G__40801;
continue;
} else {
var temp__4657__auto___40802 = cljs.core.seq.call(null,seq__40788_40793);
if(temp__4657__auto___40802){
var seq__40788_40803__$1 = temp__4657__auto___40802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40788_40803__$1)){
var c__25943__auto___40804 = cljs.core.chunk_first.call(null,seq__40788_40803__$1);
var G__40805 = cljs.core.chunk_rest.call(null,seq__40788_40803__$1);
var G__40806 = c__25943__auto___40804;
var G__40807 = cljs.core.count.call(null,c__25943__auto___40804);
var G__40808 = (0);
seq__40788_40793 = G__40805;
chunk__40789_40794 = G__40806;
count__40790_40795 = G__40807;
i__40791_40796 = G__40808;
continue;
} else {
var item_40809 = cljs.core.first.call(null,seq__40788_40803__$1);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_40809,new_depth_budget_40792);

var G__40810 = cljs.core.next.call(null,seq__40788_40803__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40788_40793 = G__40810;
chunk__40789_40794 = G__40811;
count__40790_40795 = G__40812;
i__40791_40796 = G__40813;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__25132__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__25132__auto__)){
return or__25132__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1495401544556