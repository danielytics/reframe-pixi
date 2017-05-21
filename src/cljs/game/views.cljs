(ns game.views
    (:require
      [re-frame.core :as re-frame :refer [dispatch]]
      [reagent.core :as reagent]))

(defn pixi-renderer-internal []
  (let [renderer-id "pixi-renderer"
        renderer    (js/PIXI.autoDetectRenderer 500 500 #js {:antiAlias false 
                                                             :transparent false
                                                             :resolution 1})
        update-fn   (fn f [component]
                      (let [{:keys [sprites stage foo]} (reagent/props component)]
                        (doseq [[id {:keys [x y js-obj]}] sprites]
                          (set! (.-x js-obj) x)
                          (set! (.-y js-obj) y))
                        (.render renderer stage)))]
                        ;(js/requestAnimationFrame (partial f  component))))]
    (reagent/create-class
      {:reagent-render 
        (fn []
          [:div {:id renderer-id}])
       :component-did-mount
        (fn [component]
          (.appendChild (.getElementById js/document renderer-id) (.-view renderer))
          (set! (.. renderer -view -style -border) "1px dashed black")
          (update-fn component))
       :component-did-update update-fn
       :display-name "pixi-renderer"})))

(defn pixi-renderer []
  (let [renderer  (re-frame/subscribe [:pixi/state :renderer])
        sprites   (re-frame/subscribe [:pixi/state :sprites])]
    (fn []
      (let [{:keys [started stage]} @renderer
            props {:sprites @sprites :stage stage}]
        (if started
          [pixi-renderer-internal props]
          [:div.pixi.loading "Loading..."])))))
