"use strict";

define(["startMove"], function (startMove) {
  function banner() {
    var oBanner = document.querySelector(".banner");
    var oUl = document.querySelector(".banner .imgBox");
    var oBannerLeft = document.querySelector(".banner .bannerLeft");
    var oBannerRight = document.querySelector(".banner .bannerRight");
    var iNow = 1;
    var timer = null;
    var isRunning = false; // 开始调用一次 

    timerInner(); //自动轮播

    function timerInner() {
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 3500);
    } //轮播函数


    function tab() {
      isRunning = true;
      startMove.startMove(oUl, {
        left: iNow * -1500
      }, function () {
        if (iNow == 6) {
          iNow = 1;
          oUl.style.left = "-1500px";
        } else if (iNow == 0) {
          iNow = 5;
          oUl.style.left = iNow * -1500 + "px";
        }

        isRunning = false;
        ;
      });
    } //鼠标移入


    oBanner.onmouseenter = function () {
      clearInterval(timer);
    };

    oBanner.onmouseleave = function () {
      timerInner();
    }; // 鼠标点击


    oBannerLeft.onclick = function () {
      if (!isRunning) {
        iNow--;
        tab();
      }

      return false;
    };

    oBannerRight.onclick = function () {
      if (!isRunning) {
        iNow++;
        tab();
      }

      return false;
    };

    console.log("banner加载完毕");
  }

  return {
    banner: banner
  };
});