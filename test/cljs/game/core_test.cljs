(ns game.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [game.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
