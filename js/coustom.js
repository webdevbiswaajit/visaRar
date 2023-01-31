$(function () {
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".dropdown_toggle").click(function () {
    $(".dropdown ").slideToggle("300");
  });
});

// ==================Drop down=============

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".nav_black ").css("background", "#021D3A");
    } else {
      $(".nav_black ").css("background", "");
    }
  });
});

// ==========Nav scroll===============
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ===============================
new Typed("#typed", {
  strings: [
    "Residency Visa Screening",
    "Occupational Health Screening ",
    "Corporate Group Screening",
  ],
  typeSpeed: 80,
  delaySpeed: 120,
  loop: true,
});
$("#select_box")
  .change(function () {
    var select = $(this).find(":selected").val();
    $(".hide").hide();
    $("#" + select).show();
  })
  .change();
// ==================Prefarde Date visa==============
var date = document.getElementById("date");

function checkValue(str, max) {
  if (str.charAt(0) !== "0" || str == "00") {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str =
      num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
        ? "0" + num
        : num.toString();
  }
  return str;
}

date.addEventListener("input", function (e) {
  this.type = "text";
  var input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split("/").map(function (v) {
    return v.replace(/\D/g, "");
  });
  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);
  var output = values.map(function (v, i) {
    return v.length == 2 && i < 2 ? v + " / " : v;
  });
  this.value = output.join("").substr(0, 14);
});

date.addEventListener("blur", function (e) {
  this.type = "text";
  var input = this.value;
  var values = input.split("/").map(function (v, i) {
    return v.replace(/\D/g, "");
  });
  var output = "";

  if (values.length == 3) {
    var year =
      values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
    var month = parseInt(values[0]) - 1;
    var day = parseInt(values[1]);
    var d = new Date(year, month, day);
    if (!isNaN(d)) {
      document.getElementById("result").innerText = d.toString();
      var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
      output = dates
        .map(function (v) {
          v = v.toString();
          return v.length == 1 ? "0" + v : v;
        })
        .join(" / ");
    }
  }
  this.value = output;
});
