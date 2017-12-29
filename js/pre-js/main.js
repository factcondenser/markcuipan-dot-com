$(function() {
  $("a[href*=#]:not([href=#])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
      var a = $(this.hash);
      a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
      if (a.length) {
        $("html,body").animate({
          scrollTop: a.offset().top
        }, 1000);
        return false
      }
    }
  })
});

time = new Date().getTime();
$(window).scroll(function(c) {
  var curTime = new Date().getTime();
  var scrolledFromTop = $(window).scrollTop();
  if (curTime - time > 50 && scrolledFromTop < 700) {
    var opacity = (scrolledFromTop / 300);
    $(".scroll-img").css("opacity", opacity);
    $(".location-label").css("opacity", 0.1 + Math.min(opacity / 2, 0.4));
    time = curTime
  }
});

$(document).ready(function() {
  var foldersHash = {
    Madison0: "Madison, Wisconsin",
    Madison1: "Madison, Wisconsin",
    Hk0: "Hong Kong",
    Hk1: "Hong Kong",
    Beijing: "Beijing, China"
  };
  var foldersKeys = Object.keys(foldersHash);
  var intraFolderIndex = Math.floor(Math.random() * 3);
  var foldersIndex = Math.floor(Math.random() * foldersKeys.length);
  var folderKey = foldersKeys[foldersIndex];
  var bgPath = "img/" + folderKey + "/bg" + intraFolderIndex + ".jpg";
  var bgBlurPath = "img/" + folderKey + "/bg" + intraFolderIndex + "-blur.jpg";
  var img = "url(" + bgPath + ")";
  var blurImg = "url(" + bgBlurPath + ")";
  $(".img-src").css("background-image", blurImg);
  $(".scroll-img").css("background-image", img);
  $(".location-label").text(foldersHash[foldersIndex])
});

$(".icon").tooltip({
  placement: "bottom",
  delay: 100
});
var html5_audiotypes = {
  mp3: "audio/mpeg",
  mp4: "audio/mp4",
  ogg: "audio/ogg",
  wav: "audio/wav"
};

function createsoundbite(d) {
  var b = document.createElement("audio");
  if (b.canPlayType) {
    for (var c = 0; c < arguments.length; c++) {
      var a = document.createElement("source");
      a.setAttribute("src", arguments[c]);
      if (arguments[c].match(/\.(\w+)$/i)) {
        a.setAttribute("type", html5_audiotypes[RegExp.$1])
      }
      b.appendChild(a)
    }
    b.load();
    b.playclip = function() {
      b.pause();
      b.currentTime = 0;
      b.play()
    };
    return b
  } else {
    return {
      playclip: function() {
        throw new Error("Your browser doesn't support HTML5 audio unfortunately")
      }
    }
  }
}
var englishname = createsoundbite("http://markcuipan.com/audio/markcuipan.mp3");
var chinesename = createsoundbite("http://markcuipan.com/audio/panzizao.mp3");

function changeToGif(x, str) {
  x.src = "./img/proj/" + str + ".gif";
}

function changeToJpg(x, str) {
  x.src = "./img/proj/" + str + ".jpg";
}
