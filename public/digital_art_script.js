$(function () {
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
    imgDiv.appendTo($(".gallery"));
    imgUrl = imgUrl.replace('.png','-min.png');
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
})

$(document).on("click", ".img-c.active, .backdrop", function () {
  $(this).remove();
  $(".backdrop").remove();
})