"use strict";

define(['require', 'jquery'], function () {
  function MagnifyingGlass() {
    var oAddButton = document.getElementById("AddButton");
    var oMinusButton = document.getElementById("MinusButton");
    var oShoppingNumber = document.getElementById("ShoppingNumber"); // 加减按钮

    var nowNumber = oShoppingNumber.value;

    oAddButton.onclick = function () {
      nowNumber++;
      oShoppingNumber.value = nowNumber;
      return false;
    };

    oMinusButton.onclick = function () {
      nowNumber--;
      oShoppingNumber.value = nowNumber;

      if (nowNumber == 0) {
        nowNumber = 1;
        oShoppingNumber.value = nowNumber;
      }

      return false;
    }; // 放大镜


    $("#img_1").mouseenter(function () {
      // $("#smallImg_1").src = "../img/ia_20000034.png";
      document.getElementById("smallImg_1").src = "../img/ia_20000033.png";
      document.getElementById("bigImg_1").src = "../img/ia_20000033.png";
    });
    $("#img_2").mouseenter(function () {
      // $("#smallImg_1").src = "../img/ia_20000034.png";
      document.getElementById("smallImg_1").src = "../img/ia_20000034.png";
      document.getElementById("bigImg_1").src = "../img/ia_20000034.png";
    });
    $("#img_3").mouseenter(function () {
      // $("#smallImg_1").src = "../img/ia_20000034.png";
      document.getElementById("smallImg_1").src = "../img/ia_20000035.png";
      document.getElementById("bigImg_1").src = "../img/ia_20000035.png";
    });
    $("#img_4").mouseenter(function () {
      // $("#smallImg_1").src = "../img/ia_20000034.png";
      document.getElementById("smallImg_1").src = "../img/ia_20000036.png";
      document.getElementById("bigImg_1").src = "../img/ia_20000036.png";
    });
    $(function () {
      $(".ImgBox").mouseenter(function () {
        $("#imgMark_1,.bigImgBox").show();
      }).mouseleave(function () {
        $("#imgMark_1,.bigImgBox").hide();
      }).mousemove(function (ev) {
        var l = ev.clientX - $(this).offset().left - 150;
        var t = ev.clientY - $(this).offset().top - 50; //限制出界

        l = Math.max(0, l);
        l = Math.min(250, l);
        t = Math.max(0, t);
        t = Math.min(250, t);
        $("#imgMark_1").css({
          left: l,
          top: t
        });
        $("#bigImg_1").css({
          left: -2 * l,
          top: -2 * t
        });
      });
    });
    $("#AntCreditPay").mouseenter(function () {
      $("#AddShoppingCart").html("花呗分期>");
    }); // oAntCreditPay.onblur = function(){
    //   oAddShoppingCart.innerHTML = "加入购物车";
    // }

    console.log("MagnifyingGlass加载完毕");
  }

  return {
    MagnifyingGlass: MagnifyingGlass
  };
});