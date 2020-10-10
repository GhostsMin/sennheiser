"use strict";

require.config({
  paths: {
    jquery: "jquery-1.10.1.min",
    register: "register"
  },
  shim: {
    "register": ["jquery"]
  }
});

require(["register"], function (register) {
  register.register();
});