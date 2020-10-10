"use strict";

define(['startMove'], function (startMove) {
  function index() {
    var GspBannerButtonL = document.querySelector(".BodyBottomLast .LeftOther .GspBannerButton .GspBannerButtonL");
    var GspBannerButtonR = document.querySelector(".BodyBottomLast .LeftOther .GspBannerButton .GspBannerButtonR");
    var oGspUl = document.querySelector(".BodyBottomLast .LeftOther .GspBanner");
    var oGspLi = document.querySelector(".GspLi");
    var GspBannerButton = document.querySelector(".BodyBottomLast .LeftOther .GspBannerButton");
    var GSXBannerButtonL = document.querySelector(".BodyBottomLast .LeftOther .GSXBannerButton .GSXBannerButtonL");
    var GSXBannerButtonR = document.querySelector(".BodyBottomLast .LeftOther .GSXBannerButton .GSXBannerButtonR");
    var oGSXUl = document.querySelector(".BodyBottomLast .LeftOther .GSXBanner");
    var oGSXLi = document.querySelector(".GSXLi");
    var GSXBannerButton = document.querySelector(".BodyBottomLast .LeftOther .GSXBannerButton");
    var M2BannerButtonL = document.querySelector(".BodyBottomLast .LeftOther .M2BannerButton .M2BannerButtonL");
    var M2BannerButtonR = document.querySelector(".BodyBottomLast .LeftOther .M2BannerButton .M2BannerButtonR");
    var oM2Ul = document.querySelector(".BodyBottomLast .LeftOther .M2Banner");
    var oM2Li = document.querySelector(".M2Li");
    var M2BannerButton = document.querySelector(".BodyBottomLast .LeftOther .M2BannerButton"); // GSP

    var iNow = 1;
    var isRunning = false;

    function tab() {
      isRunning = true;
      startMove.startMove(oGspUl, {
        left: iNow * -200
      }, function () {
        if (iNow == 5) {
          iNow = 1;
          oGspUl.style.left = "-200px";
        } else if (iNow == 0) {
          iNow = 4;
          oGspUl.style.left = iNow * -200 + "px";
        }

        isRunning = false;
      });
    }

    GspBannerButtonL.onclick = function () {
      if (!isRunning) {
        iNow--;
        tab();
      }

      return false;
    };

    GspBannerButtonR.onclick = function () {
      if (!isRunning) {
        iNow++;
        tab();
      }

      return false;
    };

    oGspLi.onmouseenter = function () {
      GspBannerButton.style.display = "flex";
    };

    oGspLi.onmouseleave = function () {
      GspBannerButton.style.display = "none";
    }; // GSX


    var iNow_1 = 1;
    var isRunning_1 = false;

    function tab_1() {
      isRunning_1 = true;
      startMove.startMove(oGSXUl, {
        left: iNow_1 * -200
      }, function () {
        if (iNow_1 == 5) {
          iNow_1 = 1;
          oGSXUl.style.left = "-200px";
        } else if (iNow_1 == 0) {
          iNow_1 = 4;
          oGSXUl.style.left = iNow_1 * -200 + "px";
        }

        isRunning_1 = false;
      });
    }

    GSXBannerButtonL.onclick = function () {
      if (!isRunning_1) {
        iNow_1--;
        tab_1();
      }

      return false;
    };

    GSXBannerButtonR.onclick = function () {
      if (!isRunning_1) {
        iNow_1++;
        tab_1();
      }

      return false;
    };

    oGSXLi.onmouseenter = function () {
      GSXBannerButton.style.display = "flex";
    };

    oGSXLi.onmouseleave = function () {
      GSXBannerButton.style.display = "none";
    }; // M2


    var iNow_2 = 1;
    var isRunning_2 = false;

    function tab_2() {
      isRunning_2 = true;
      startMove.startMove(oM2Ul, {
        left: iNow_2 * -200
      }, function () {
        if (iNow_2 == 3) {
          iNow_2 = 1;
          oM2Ul.style.left = "-200px";
        } else if (iNow_2 == 0) {
          iNow_2 = 2;
          oM2Ul.style.left = iNow_2 * -200 + "px";
        }

        isRunning_2 = false;
      });
    }

    M2BannerButtonL.onclick = function () {
      if (!isRunning_2) {
        iNow_2--;
        tab_2();
      }

      return false;
    };

    M2BannerButtonR.onclick = function () {
      if (!isRunning_2) {
        iNow_2++;
        tab_2();
      }

      return false;
    };

    oM2Li.onmouseenter = function () {
      M2BannerButton.style.display = "flex";
    };

    oM2Li.onmouseleave = function () {
      M2BannerButton.style.display = "none";
    };

    console.log("index加载完毕");
  }

  return {
    index: index
  };
});