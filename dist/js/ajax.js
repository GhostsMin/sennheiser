"use strict";

define(['jquery'], function ($) {
  function ajax() {
    $.ajax({
      typr: "get",
      url: "../json/BodyFirst.json",
      dataType: "json",
      success: function success(arr) {
        var str_1 = "";
        var str_2 = "";

        for (var i = 0; i < arr.length; i++) {
          if (i < 3) {
            str_1 += "\n                      <li>\n                        <a href=\"".concat(arr[i].a, "\" target=\"_blank\">\n                          <img src=\"").concat(arr[i].src, "\" alt=\"\">\n                          <div class=\"title\">\n                            <h6>").concat(arr[i].h6, "</h6>\n                            <p>").concat(arr[i].p, "</p>\n                          </div>\n                        </a>\n                      </li>\n                    ");
          } else {
            str_2 += "\n                      <li>\n                        <a href=\"\" target=\"_blank\">\n                          <img src=\"".concat(arr[i].src, "\" alt=\"\">\n                          <div class=\"title\">\n                            <h6>").concat(arr[i].h6, "</h6>\n                            <p>").concat(arr[i].p, "</p>\n                          </div>\n                        </a>\n                      </li>\n                    ");
          }
        }

        $(".BodyFirst .FirstTop").html(str_1);
        $(".BodyFirst .FirstBottom").html(str_2);
      },
      error: function error() {}
    });
    console.log("ajax加载完毕");
  }

  return {
    ajax: ajax
  };
});