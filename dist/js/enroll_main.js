"use strict";

require.config({
  paths: {
    jquery: "jquery-1.10.1.min",
    enroll: "enroll"
  },
  shim: {
    "enroll": ["jquery"]
  }
});

require(["enroll"], function (enroll) {
  enroll.enroll();
});