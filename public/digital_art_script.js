$(function () {
  let imgPath = ["/public/images/divine-noise-fractal.png", "/public/images/chaos-flower-fractal.png", 
  "/public/images/turquoise-cymbals-fractal.png", "/public/images/yellow-feng-shui-fractal.png", 
  "/public/images/cellular-origins-fractal.png", "/public/images/astro-observer-fractal.png", 
  "/public/images/blue-emergence-fractal.png", "/public/images/pink-orb-fractal.png", 
  "/public/images/illustrious-magician-fractal.png", "/public/images/burst-fractal.png",
  "/public/images/puzzled-fire-fractal.png", "/public/images/spiral-chaos-fractal.png",
  "/public/images/jade-phoenix-fractal.png", "/public/images/resonant-fireworks-fractal.png",
  "/public/images/vortex-light-fractal.png", "/public/images/emerald-jade-fractal.png",
  "/public/images/lava-inferno-fractal.png", "/public/images/bleeding-star-fractal.png",
  "/public/images/blue-rose-fractal.png", "/public/images/neural-network-fractal.png",
  "/public/images/curious-amoeba-fractal.png", "/public/images/morning-eagle-fractal.png",
  "/public/images/blue-vortex-fractal.png", "/public/images/eye-burst-fractal.png",
  "/public/images/artery-fractal.png", "/public/images/phoenix-fractal.png",
  "/public/images/neutron-fractal.png", "/public/images/chrysalis-flower-fractal.png",
  "/public/images/icy-mint-fractal.png", "/public/images/worlds-fractal.png",
  "/public/images/rose-fractal.png", "/public/images/disco-spiral-fractal.png",
  "/public/images/blue-velvet-fractal.png", "/public/images/neuron-fractal.png",
  "/public/images/poseidon-fractal.png", "/public/images/golden-phoenix-fractal.png",
  "/public/images/color-wheel-fractal.png", "/public/images/sun-rose-fractal.png",
  "/public/images/starlight-butterfly-fractal.png", "/public/images/icicle-lights-fractal.png",
  "/public/images/space-rubiks-fractal.png", "/public/images/philosopher-fractal.png",
  "/public/images/nebulous-planet-fractal.png", "/public/images/lost-heart-fractal.png",
  "/public/images/magma-jellyfish-fractal.png",  "/public/images/emerald-matrix-fractal.png",
  "/public/images/vitruvian-flower-fractal.png", "/public/images/autograph-fractal.png",
  "/public/images/valentines-vortex-fractal.png", "/public/images/glowing-orbit-fractal.png",
  "/public/images/rainbow-coral-fractal.png", "/public/images/electric-phoenix-fractal.png",
  "/public/images/beating-heart-fractal.png", "/public/images/rose-pendant-fractal.png",
  "/public/images/exotic-silk-fractal.png", "/public/images/bone-fracture-fractal.png",
  "/public/images/dark-matter-fractal.png", "/public/images/emerging-flame-fractal.png",
  "/public/images/perfect-rose-fractal.png", "/public/images/broken-phoenix-fractal.png",
  "/public/images/blue-sprite-fractal.png", "/public/images/infinite-coral-fractal.png",
  "/public/images/window-sprite-fractal.png", "/public/images/matrix-coin-fractal.png",
  "/public/images/lava-drip-fractal.png", "/public/images/infinite-circle-fractal.png"];

  imgPath.forEach(imgUrl => {
    let imgDiv = $("<div class='img-w'></div>");
    imgDiv.appendTo($(".gallery"));
    imgDiv.css('background-image', 'url(' + 'https://s3.us-east-2.amazonaws.com' + imgUrl + ')');

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
})

$(document).on("click", ".img-c.active, .backdrop", function () {
  $(this).remove();
  $(".backdrop").remove();
})