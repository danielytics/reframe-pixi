(ns game.events
    (:require
      [re-frame.core :as re-frame :refer [reg-event-db]]
      [game.db :as db]))

(defn get-texture [id]
  (.-texture (aget js/PIXI.loader.resources id)))

(reg-event-db
  :initialize-db
  (fn  [_ _]
    db/default-db))

(reg-event-db
  :pixi/start
  (fn [db _]
   (assoc
     db
     :pixi
     {:renderer {:started true
                 :stage (new js/PIXI.Container)}
      :sprites {}})))

(reg-event-db
  :pixi.sprites/create
  (fn [db [_ {:keys [image x y id]}]]
    (let [stage (get-in db [:pixi :renderer :stage])
          sprite (new js/PIXI.Sprite (get-texture image))]
      (set! (.-width sprite) 80)
      (set! (.-height sprite) 80)
      (.addChild stage sprite)
      (update-in
        db
        [:pixi :sprites]
        assoc
        (keyword (str id))
        {:x x :y y :js-obj sprite}))))

(reg-event-db
  :pixi.sprites/move
  (fn [db [_ {:keys [x y id]}]]
    (update-in
      db
      [:pixi :sprites (keyword (str id))]
      (fn [sprite]
        (-> sprite
            (update :x #(+ x %))
            (update :y #(+ y %)))))))
