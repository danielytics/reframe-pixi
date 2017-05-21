(ns figwheel.connect.dev (:require [game.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/game.core.mount-root (apply js/game.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'game.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

