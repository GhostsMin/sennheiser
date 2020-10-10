"use strict";

require.config({
  paths: {
    jquery: "jquery-1.10.1.min",
    shopping: "shopping"
  },
  shim: {
    "shopping": ["jquery"]
  }
});

require(["shopping"], function (shopping) {
  shopping.shopping();
});