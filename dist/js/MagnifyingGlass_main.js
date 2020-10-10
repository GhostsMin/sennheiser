"use strict";

require.config({
  paths: {
    jquery: "jquery-1.10.1.min",
    MagnifyingGlass: "MagnifyingGlass"
  },
  shim: {
    "MagnifyingGlass": ["jquery"]
  }
});

require(["MagnifyingGlass"], function (MagnifyingGlass) {
  MagnifyingGlass.MagnifyingGlass();
});