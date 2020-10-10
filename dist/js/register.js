"use strict";

define(['require', 'jquery'], function () {
  'use strict';

  function register() {
    $("#txtCustomerID").blur(function () {
      document.getElementById("txtCustomerID").style.backgroundColor = "#f7f7f7";
      document.getElementById("txtCustomerIDFalse").style.display = "block";
    });
    $("#txtCustomerID").focus(function () {
      document.getElementById("txtCustomerID").style.backgroundColor = "#ffffff";
      document.getElementById("txtCustomerIDFalse").style.display = "none";
    });
    $("#txtPassword").blur(function () {
      document.getElementById("txtPassword").style.backgroundColor = "#f7f7f7";
      document.getElementById("txtPasswordFalse").style.display = "block";
    });
    $("#txtPassword").focus(function () {
      document.getElementById("txtPassword").style.backgroundColor = "#ffffff";
      document.getElementById("txtPasswordFalse").style.display = "none";
    });
    $("#txtYXYZM").blur(function () {
      document.getElementById("txtYXYZM").style.backgroundColor = "#f7f7f7";
      document.getElementById("txtYXYZMFalse").style.display = "block";
    });
    $("#txtYXYZM").focus(function () {
      document.getElementById("txtYXYZM").style.backgroundColor = "#ffffff";
      document.getElementById("txtYXYZMFalse").style.display = "none";
    });
    $("#ForBox").click(function () {
      if ($("#ForBox").hasClass("ForBoxImg")) {
        $("#ForBox").removeClass("ForBoxImg");
      } else {
        $("#ForBox").addClass("ForBoxImg");
      }
    });
    console.log("register_main加载完成");
  }

  return {
    register: register
  };
});