$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['top', 'background', 'philosophy', 'courses', 'rates', 'contact'], //'testimonials'],
    responsiveWidth: 992,
    responsiveHeight: 700
  });
});

$("#philo-icon").mouseover(function() {
  $(this).css("color", "#ddd");
});

$("#philo-icon").mouseout(function() {
  $(this).css("color", "#b02334");
});

$("#philo-icon").click(function() {
  if ($("#philo-topleft-panel").css("display") == "none") {
    $("#philo-topleft-panel").fadeIn();
  } else {
    $("#philo-topleft-panel").fadeOut();
  }
  if ($("#philo-topright-panel").css("display") == "none") {
    $("#philo-topright-panel").fadeIn("slow");
  } else {
    $("#philo-topright-panel").fadeOut();
  }
  if ($("#philo-bottom-panel").css("display") == "none") {
    $("#philo-bottom-panel").fadeIn(700);
  } else {
    $("#philo-bottom-panel").fadeOut();
  }
});

$(".philo-left").mouseleave(function() {
  $("#philo-topleft-panel").fadeOut();
  $("#philo-topright-panel").fadeOut();
  $("#philo-bottom-panel").fadeOut();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
  if ($(window).width() > 400) {
    $("#courses-right").append($(".modal"));
  } else {
    $("#essay-editing-panel").append($(".modal"));
  }
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$(window).resize(function() {
  if ($(this).width() > 400) {
    if (($("#essay-editing-panel .modal").length != 0) && (modal.style.display == "block")) {
      modal.style.display = "none";
    }
  } else {
    if (($("#courses-right .modal").length != 0) && (modal.style.display == "block")) {
      modal.style.display = "none";
    }
  }
});
