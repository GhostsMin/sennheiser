"use strict";

define(['require', 'jquery'], function () {
  'use strict';

  function shopping() {
    // 全选上
    $("#CheckAll").click(function () {
      if ($("#CheckAll").hasClass("CheckAllImg")) {
        $("#CheckAll").removeClass("CheckAllImg");
        $("#CheckAllOf").removeClass("CheckAllImg");
        $(".radio").removeClass("CheckAllImg");
        $("#AmountAll").html(0);
        $("#IntegrationAll").html(0);
        $("#AmountOfGoodsNumber").html(formatNum(0.00));
      } else {
        $("#CheckAll").addClass("CheckAllImg");
        $("#CheckAllOf").addClass("CheckAllImg");
        $(".radio").addClass("CheckAllImg");
        $("#AmountAll").html(num * unitPrice);
        $("#IntegrationAll").html(num * unitPrice);
        $("#AmountOfGoodsNumber").html(formatNum(num * unitPrice));
      }
    }); // 全选下

    $("#CheckAllOf").click(function () {
      if ($("#CheckAll").hasClass("CheckAllImg")) {
        $("#CheckAll").removeClass("CheckAllImg");
        $("#CheckAllOf").removeClass("CheckAllImg");
        $(".radio").removeClass("CheckAllImg");
        $("#AmountAll").html(0);
        $("#IntegrationAll").html(0);
        $("#AmountOfGoodsNumber").html(formatNum(0.00));
      } else {
        $("#CheckAll").addClass("CheckAllImg");
        $("#CheckAllOf").addClass("CheckAllImg");
        $(".radio").addClass("CheckAllImg");
        $("#AmountAll").html(num * unitPrice);
        $("#IntegrationAll").html(num * unitPrice);
        $("#AmountOfGoodsNumber").html(formatNum(num * unitPrice));
      }
    }); // 数量加减

    var num = 1;
    var unitPrice = 3669;
    var summation = null;
    var integral = null;
    $(".addCommodity").click(function () {
      num++;
      summation = num * unitPrice;
      integral = num * unitPrice;
      $(".numberCommodity").html(num);
      $("#summation").html("￥" + formatNum(summation));
      $("#integral").html("￥" + formatNum(integral));

      if ($(".radio").hasClass("CheckAllImg")) {
        $("#AmountAll").html(num * unitPrice);
        $("#IntegrationAll").html(num * unitPrice);
        $("#AmountOfGoodsNumber").html(formatNum(num * unitPrice));
      }
    });
    $(".reduceCommodity").click(function () {
      num--;

      if (num == 0) {
        num = 1;
      }

      summation = num * unitPrice;
      integral = num * unitPrice;
      $(".numberCommodity").html(num);
      $("#summation").html("￥" + formatNum(summation));
      $("#integral").html("￥" + formatNum(integral));

      if ($(".radio").hasClass("CheckAllImg")) {
        $("#AmountAll").html(num * unitPrice);
        $("#IntegrationAll").html(num * unitPrice);
        $("#AmountOfGoodsNumber").html(formatNum(num * unitPrice));
      }
    }); // 单选

    $(".radio").click(function () {
      if ($(".radio").hasClass("CheckAllImg")) {
        $(".radio").removeClass("CheckAllImg");
        $("#AmountAll").html(0);
        $("#IntegrationAll").html(0);
        $("#AmountOfGoodsNumber").html(formatNum(0.00));
      } else {
        $(".radio").addClass("CheckAllImg");
        $("#AmountAll").html(num * unitPrice);
        $("#IntegrationAll").html(num * unitPrice);
        $("#AmountOfGoodsNumber").html(formatNum(num * unitPrice));
      }
    });

    function formatNum(num) {
      if (/^\D+$/.test(num)) {
        return "_";
      }

      if (/e/.test(num)) {
        var index = num.indexOf("e");
        var startNum = num.substring(0, index);
        var endNum = num.substring(index + 1);
        num = startNum * Math.pow(10, endNum);
      }

      num = num.toFixed(2).toString().split("").reverse();
      var newArr = [];

      for (var i = 0; i < num.length; i++) {
        if (i % 3 == 0 && i > 3) {
          newArr.unshift(",");
        }

        newArr.unshift(num[i]);
      }

      return newArr.join("");
    }

    console.log("shopping加载完毕");
  }

  return {
    shopping: shopping
  };
});