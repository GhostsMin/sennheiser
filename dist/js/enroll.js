"use strict";

define(['require', 'jquery'], function () {
  function enroll() {
    $("#ForBox").click(function () {
      if ($("#ForBox").hasClass("ForBoxImg")) {
        $("#ForBox").removeClass("ForBoxImg");
      } else {
        $("#ForBox").addClass("ForBoxImg");
      }
    });
    console.log("enroll加载完毕");
  }

  return {
    enroll: enroll
  };
});