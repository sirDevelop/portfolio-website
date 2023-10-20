const themeDot = document.querySelectorAll(".theme-dot");

let theme = localStorage.getItem("theme");

if (theme) {
  setTheme(theme);
} else {
  setTheme("light");
}

for (var i = 0; i < themeDot.length; i++) {
  themeDot[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href =
      "../public/css_themes/default.css";
  } else if (mode == "blue") {
    document.getElementById("theme-style").href =
      "../public/css_themes/blue.css";
  } else if (mode == "red") {
    document.getElementById("theme-style").href =
      "../public/css_themes/red.css";
  } else if (mode == "purple") {
    document.getElementById("theme-style").href =
      "../public/css_themes/purple.css";
  }

  localStorage.setItem("theme", mode);
}

$(document).ready(function () {
  const emailSuccess = getCookie("emailSuccess");
  // console.log(emailSuccess);
  // console.log(emailSuccess == "true");
  if (emailSuccess) {
    $.Toast("Success!", "Email has been sent", "success", {
      has_icon: true,
      has_close_btn: true,
      stack: true,
      position_class: "toast-top-left",
      fullscreen: false,
      timeout: 6000,
      sticky: false,
      has_progress: true,
      rtl: false,
    });
    deleteCookie("emailSuccess");
  }

  let imgPath = ["/public/image/divine-noise-fractal.png", "/public/image/chaos-flower-fractal.png",
    "/public/image/turquoise-cymbals-fractal.png", "/public/image/yellow-feng-shui-fractal.png",
    "/public/image/cellular-origins-fractal.png", "/public/image/astro-observer-fractal.png",
    "/public/image/blue-emergence-fractal.png", "/public/image/pink-orb-fractal.png",
    "/public/image/illustrious-magician-fractal.png", "/public/image/burst-fractal.png",
    "/public/image/puzzled-fire-fractal.png", "/public/image/spiral-chaos-fractal.png",
    "/public/image/jade-phoenix-fractal.png", "/public/image/resonant-fireworks-fractal.png",
    "/public/image/vortex-light-fractal.png", "/public/image/emerald-jade-fractal.png",
    "/public/image/lava-inferno-fractal.png", "/public/image/bleeding-star-fractal.png",
    "/public/image/blue-rose-fractal.png", "/public/image/neural-network-fractal.png",
    "/public/image/curious-amoeba-fractal.png", "/public/image/morning-eagle-fractal.png",
    "/public/image/blue-vortex-fractal.png", "/public/image/eye-burst-fractal.png",
    "/public/image/artery-fractal.png", "/public/image/phoenix-fractal.png",
    "/public/image/neutron-fractal.png", "/public/image/chrysalis-flower-fractal.png",
    "/public/image/icy-mint-fractal.png", "/public/image/worlds-fractal.png",
    "/public/image/rose-fractal.png", "/public/image/disco-spiral-fractal.png",
    "/public/image/blue-velvet-fractal.png", "/public/image/neuron-fractal.png",
    "/public/image/poseidon-fractal.png", "/public/image/golden-phoenix-fractal.png",
    "/public/image/color-wheel-fractal.png", "/public/image/sun-rose-fractal.png",
    "/public/image/starlight-butterfly-fractal.png", "/public/image/icicle-lights-fractal.png",
    "/public/image/space-rubiks-fractal.png", "/public/image/philosopher-fractal.png",
    "/public/image/nebulous-planet-fractal.png", "/public/image/lost-heart-fractal.png",
    "/public/image/magma-jellyfish-fractal.png", "/public/image/emerald-matrix-fractal.png",
    "/public/image/vitruvian-flower-fractal.png", "/public/image/autograph-fractal.png",
    "/public/image/valentines-vortex-fractal.png", "/public/image/glowing-orbit-fractal.png",
    "/public/image/rainbow-coral-fractal.png", "/public/image/electric-phoenix-fractal.png",
    "/public/image/beating-heart-fractal.png", "/public/image/rose-pendant-fractal.png",
    "/public/image/exotic-silk-fractal.png", "/public/image/bone-fracture-fractal.png",
    "/public/image/dark-matter-fractal.png", "/public/image/emerging-flame-fractal.png",
    "/public/image/perfect-rose-fractal.png", "/public/image/broken-phoenix-fractal.png",
    "/public/image/blue-sprite-fractal.png", "/public/image/infinite-coral-fractal.png",
    "/public/image/window-sprite-fractal.png", "/public/image/matrix-coin-fractal.png",
    "/public/image/lava-drip-fractal.png", "/public/image/infinite-circle-fractal.png"];

  imgPath.forEach(imgUrl => {
    let imgDiv = $("<div class='img-w'></div>");
    imgDiv.appendTo($("#gallery"));
    imgUrl = imgUrl.replace('.png', '-min.png');
    imgDiv.css('background-image', 'url(..' + imgUrl + ')');
    imgDiv.wrap("<div class='img-c'></div>");
  });

  $(".img-c").on("click", function () {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();

    $(".active").not($(this)).remove();
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active");
    copy.addClass("positioned");
    copy.wrap("<div class='backdrop'></div>");

  });

  $(document).on("click", ".img-c.active, .backdrop", function () {
    $(this).remove();
    $(".backdrop").remove();
  })
});

function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let liTags = document.getElementById("facts").getElementsByTagName('li');
for (let i = 0; i < liTags.length; i++) {
  if (i % 2 == 1) {
    liTags[i].style.border = "2px solid";
    liTags[i].style.borderLeft = "none";
    liTags[i].style.borderRight = "none";
    if (i == liTags.length - 1) {
      liTags[i].style.borderBottom = "none";
    }
  }

  liTags[i].style.width = "95%";
  liTags[i].style.paddingBottom = "10px";
}

//Profile Image Slide Animation
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function hideSection(name) {
  var intro = document.getElementById("intro");
  var digital_art = document.getElementById("digital_art");
  var more = document.getElementById("more");
  var past_projects = document.getElementById("past_projects");
  
  if (name == "digital_art") {
    intro.style.display = "block";
    digital_art.style.display = "none";
    more.style.display = "block";
    past_projects.style.display = "block";
  } else {
    intro.style.display = "none";
    digital_art.style.display = "block";
    more.style.display = "none";
    past_projects.style.display = "none";
  }
}