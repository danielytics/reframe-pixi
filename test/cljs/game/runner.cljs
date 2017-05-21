(ns game.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [game.core-test]))

(doo-tests 'game.core-test)
