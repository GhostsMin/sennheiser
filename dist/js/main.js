"use strict";

require.config({
  paths: {
    startMove: "startMove",
    banner: "banner",
    jquery: "jquery-1.10.1.min",
    ajax: "ajax",
    index: "index"
  },
  shim: {
    "index": ["startMove"],
    "banner": ["startMove"],
    "ajax": ["jquery"]
  }
});

require(["banner", "ajax", "index"], function (banner, ajax, index) {
  banner.banner();
  ajax.ajax();
  index.index();
});