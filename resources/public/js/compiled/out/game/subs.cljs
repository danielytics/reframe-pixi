(ns game.subs
 (:require-macros
   [reagent.ratom :refer [reaction]])
 (:require 
   [re-frame.core :as re-frame :refer [reg-sub]]))

(reg-sub
 :pixi/state
 (fn [db [_ key]]
   (get-in db [:pixi key])))

