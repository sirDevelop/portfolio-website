
const slideShowImages = [
	{ title: "Skydive Landing", src: "../public/image/skydive-landing-2.jpg" },
	{ title: "Skydive 1", src: "../public/image/skydive1.jpg" },
	{ title: "Skydive 2", src: "../public/image/skydive2.jpg" },
	{ title: "Skydive 3", src: "../public/image/skydive3.jpg" },
	{ title: "Skydive 4", src: "../public/image/skydive4.jpg" },
	{ title: "Indra 1", src: "../public/image/Indra1.jpg" },
	{ title: "Indra 2", src: "../public/image/Indra2.jpg" },
	{ title: "Marco 1", src: "../public/image/Marco1.jpg" },
	{ title: "Marco 2", src: "../public/image/Marco2.jpg" },
]

const certificates = [
	{ title: "Google Data Analytics Professional Certificate", src: "https://www.coursera.org/account/accomplishments/professional-cert/8J35TQN8QSR6" },
	{ title: "Meta Front-End Developer Professional Certificate", src: "https://www.coursera.org/account/accomplishments/professional-cert/2DYC2QTC9CRA" },
	{ title: "Meta Back-End Developer Professional Certificate", src: "https://www.coursera.org/account/accomplishments/professional-cert/ZNRVZ4EFKVHB" },
]

const posts = [
	{ category: "se", title: "Little Lemon Restaurant Website", text: "This is a fully responsive website that allows you to create user accounts, login/logout, view the menu, place orders, create reservations, and saves order and reservation history. Stack involves React, NodeJS, and MongoDB.", img: "../public/image/little-lemon-app-react.png", link: "https://github.com/sirDevelop/little-lemon-app", linkTitle: "Source Code" },
	{ category: "se", title: "MouthWatering Deals Website", text: "This is a full stack website that allows a user to login via Google OAuth, visit a catalog to browse items and checkout their cart using Stripe. The items on the catalog page can be filtered by category and the user can view their order history. Stack involves React, NodeJS, and MonogDB.", img: "../public/image/ecommerce-website.png", link: "https://github.com/sirDevelop/ecommerce-web-app", linkTitle: "Source Code" },
	{ category: "se", title: "Musical Beat Maker", text: "Web application that allows users to choose between 4 different kicks, 4 different snares, and 4 different hihats to produce a beat. The tempo can be adjusted from 20 bpm up to 300 bpm. Coded in React.", img: "../public/image/beatmaker-project.png", link: "https://github.com/sirDevelop/beat-maker", linkTitle: "Source Code" },
	{ category: "se", title: "Musical Beat Producer", text: "Web application that allows users to create a sequence of beats to form a musical track. User can control up to 16 drum pads using the keyboard or by mouse click, and set the tempo up to 300 bpm. Coded in Angular.", img: "../public/image/producer-project.png", link: "https://github.com/sirDevelop/producer", linkTitle: "Source Code" },
	{ category: "se", title: "This Personal Website!", text: "A full stack personal website involving HTML, CSS, Javascript, and a Node.js backend. Featuring lots of personally created digital artwork, music from Spotify, image galleries, animations, and links to various projects on Github and my LinkedIn.", img: "../public/image/portfolio-website.png", link: "https://github.com/sirDevelop/portfolio-website", linkTitle: "Source Code" },
	{ category: "ds", title: "Analysis of Ski Data", text: "Data from 330 different ski resorts across the country with 32 features are analyzed. Recommendations are given on what amenities should be taken away and added to the resort as well as ideal ticket price to maximize revenue.", img: "../public/image/ds-capstone.png", link: "https://github.com/sirDevelop/DataScienceGuidedCapstone", linkTitle: "Source Code" },
	{ category: "ds", title: "Analysis of Cyclistic Bike Share", text: "An end to end data science project analyzing one year's worth of Cyclistic Rider Data. We created visualizations and insights based on member vs casual rider behavior and recommendations were given on how to convert casual riders to members.", img: "../public/image/cyclistic-project.png", link: "https://github.com/sirDevelop/Cyclistic-Bike-Study", linkTitle: "Source Code" },
	{ category: "ds", title: "Analysis of London Housing Prices", text: "Housing prices of 32 boroughs in London are analyzed over a 2 decade period. After data processing and cleaning, visualizations and supporting conclusions are provided.", img: "../public/image/london-housing-analysis.png", link: "https://github.com/sirDevelop/London-Housing-Data-Analysis", linkTitle: "Source Code" },
	{ category: "ds", title: "Analysis of Fitbit Data for BellaBeat", text: "Analysis of Fitbit data of 33 users across a span of 30 days. The findings are used to give recommendations to the smart device company BellaBeat.", img: "../public/image/bellabeat.png", link: "https://github.com/sirDevelop/BellaBeat-Data-Analysis/tree/main", linkTitle: "Source Code" }
]

const imageVerification = (src, i) => {
	var img = document.querySelector(`img.img-${i}`)
	if (img.complete) {
		loadedImage++
	} else {
		img.addEventListener('load', () => loadedImage++)
		img.addEventListener('error', () => loadedImage++)
	}
}

// certificates section
const certificateInit = () => {
	certsHTML = "<ul>"
	certificates.forEach((certs, i) => {
		certsHTML += `<li><a target="_blank"
		href="${certs.src}">
		${certs.title}
	</a></li>`
	})
	certsHTML += "</ul>"
	$("#certs").append(certsHTML)
}

// creates the past projects section
const postInit = () => {
	let postsHtml = ""
	posts.forEach((post, i) => {
		postsHtml += `<div class="element-item ${post.category} hide col-sm-6 col-md-4 p-3">
			<div class="card">
				<a target="_blank" href="${post.link}">
					<img class="card-img-top img-${i}" src="${post.img}" alt="" /></a>
				<div class="card-body">
					<h5 class="card-title text-dark">${post.title}</h5>
					<p class="card-text">
						${post.text}
					</p>
					<a target="_blank" href="${post.link}">${post.linkTitle}</a>
				</div>
			</div>
		</div>`
	})

	// adds the isotope functionality to the grid
	$.when($(".grid").append(postsHtml)).done(() => {
		posts.forEach((post, i) => {
			imageVerification(post.img, i)
		})
		const isotopeVerification = setInterval(() => {
			if (loadedImage === posts.length) {
				$.when($(".spinner-grow").remove()).done(() => {
					$.when($(".grid div.hide").removeClass("hide")).done(() => {
						var $grid = $('.grid').isotope({
							itemSelector: '.element-item',
							layoutMode: 'fitRows'

						});

						// filter functions
						var filterFns = {
							// show if number is greater than 50
							numberGreaterThan50: function () {
								var number = $(this).find('.number').text();
								return parseInt(number, 10) > 50;
							},
							// show if name ends with -ium
							ium: function () {
								var name = $(this).find('.name').text();
								return name.match(/ium$/);
							}
						};

						// bind filter button click
						$('#filters').on('click', 'li', function () {
							$('#filters li a.active').removeClass("active")
							$(this).children("a").addClass("active")
							var filterValue = $(this).attr('data-filter');
							// use filterFn if matches value
							filterValue = filterFns[filterValue] || filterValue;
							$grid.isotope({ filter: filterValue });
						});

						// bind sort button click
						$('#sorts').on('click', 'button', function () {
							var sortByValue = $(this).attr('data-sort-by');
							$grid.isotope({ sortBy: sortByValue });
						});

						// change is-checked class on buttons
						$('.button-group').each(function (i, buttonGroup) {
							var $buttonGroup = $(buttonGroup);
							$buttonGroup.on('click', 'button', function () {
								$buttonGroup.find('.is-checked').removeClass('is-checked');
								$(this).addClass('is-checked');
							});
						});
						clearInterval(isotopeVerification)
					})
				})
			}
		}, 1000)
	})
}

let loadedImage = 0, slideIndex = 1;

// creates the introduction section
const introductionSectionInit = () => {
	slideShowHTML = "";
	slideShowImages.forEach((image, i) => {
		slideShowHTML += `<div class="mySlides"><img id="profile_pic"
			src="${image.src}" alt="" /></div>`
	})
	slideShowHTML += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>`

	$(".slideshow-container").append(slideShowHTML)

	dotContainerHTML = "";
	[1,2,3,4,5,6,7,8,9].forEach((num, i) => {
		dotContainerHTML += `<span class="dot" onclick="currentSlide(${num})"></span>`
	});

	$(".dot-container").append(dotContainerHTML);
}

function setup() {
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
	introductionSectionInit();
}
setup();
showSlides(slideIndex);

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

const imgPath = ["../public/image/divine-noise-fractal.png", "../public/image/chaos-flower-fractal.png",
	"../public/image/turquoise-cymbals-fractal.png", "../public/image/yellow-feng-shui-fractal.png",
	"../public/image/cellular-origins-fractal.png", "../public/image/astro-observer-fractal.png",
	"../public/image/blue-emergence-fractal.png", "../public/image/pink-orb-fractal.png",
	"../public/image/illustrious-magician-fractal.png", "../public/image/burst-fractal.png",
	"../public/image/puzzled-fire-fractal.png", "../public/image/spiral-chaos-fractal.png",
	"../public/image/jade-phoenix-fractal.png", "../public/image/resonant-fireworks-fractal.png",
	"../public/image/vortex-light-fractal.png", "../public/image/emerald-jade-fractal.png",
	"../public/image/lava-inferno-fractal.png", "../public/image/bleeding-star-fractal.png",
	"../public/image/blue-rose-fractal.png", "../public/image/neural-network-fractal.png",
	"../public/image/curious-amoeba-fractal.png", "../public/image/morning-eagle-fractal.png",
	"../public/image/blue-vortex-fractal.png", "../public/image/eye-burst-fractal.png",
	"../public/image/artery-fractal.png", "../public/image/phoenix-fractal.png",
	"../public/image/neutron-fractal.png", "../public/image/chrysalis-flower-fractal.png",
	"../public/image/icy-mint-fractal.png", "../public/image/worlds-fractal.png",
	"../public/image/rose-fractal.png", "../public/image/disco-spiral-fractal.png",
	"../public/image/blue-velvet-fractal.png", "../public/image/neuron-fractal.png",
	"../public/image/poseidon-fractal.png", "../public/image/golden-phoenix-fractal.png",
	"../public/image/color-wheel-fractal.png", "../public/image/sun-rose-fractal.png",
	"../public/image/starlight-butterfly-fractal.png", "../public/image/icicle-lights-fractal.png",
	"../public/image/space-rubiks-fractal.png", "../public/image/philosopher-fractal.png",
	"../public/image/nebulous-planet-fractal.png", "../public/image/lost-heart-fractal.png",
	"../public/image/magma-jellyfish-fractal.png", "../public/image/emerald-matrix-fractal.png",
	"../public/image/vitruvian-flower-fractal.png", "../public/image/autograph-fractal.png",
	"../public/image/valentines-vortex-fractal.png", "../public/image/glowing-orbit-fractal.png",
	"../public/image/rainbow-coral-fractal.png", "../public/image/electric-phoenix-fractal.png",
	"../public/image/beating-heart-fractal.png", "../public/image/rose-pendant-fractal.png",
	"../public/image/exotic-silk-fractal.png", "../public/image/bone-fracture-fractal.png",
	"../public/image/dark-matter-fractal.png", "../public/image/emerging-flame-fractal.png",
	"../public/image/perfect-rose-fractal.png", "../public/image/broken-phoenix-fractal.png",
	"../public/image/blue-sprite-fractal.png", "../public/image/infinite-coral-fractal.png",
	"../public/image/window-sprite-fractal.png", "../public/image/matrix-coin-fractal.png",
	"../public/image/lava-drip-fractal.png", "../public/image/infinite-circle-fractal.png"];

let imagePageLoaded = 0, imageIndex = 0
const itemsInImagePage = 9
function loadImage() {
	imagePageLoaded++
	for (let i = imageIndex; i < imagePageLoaded * itemsInImagePage; i++) {
		imageIndex++
		if (imgPath[i]) {
			let imgDiv = $("<div class='img-w'></div>");
			imgDiv.appendTo($("#gallery"));
			imgUrl = imgPath[i].replace('.png', '-min.png');
			imgDiv.css('background-image', 'url(' + imgUrl + ')');
			imgDiv.wrap("<div class='img-c'></div>");
		} else {
			$("#load-more").remove()
		}
	}
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
	certificateInit()
	postInit()
	loadImage()

	$(document).on("click", ".img-c", function () {
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

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function openSection(name) {
	let digital_art = document.getElementById("digital_art")
	let intro = document.getElementById("intro")
	let more = document.getElementById("more")
	let past_projects = document.getElementById("past_projects")
	let music = document.getElementById("music")
	let contact = document.getElementById("contact")
	let digitalArt = ""

	switch (name) {
		case "digital_art":
			digitalArt = digital_art.innerHTML
			digital_art.remove()
			$(more).after(`<section id="digital_art" class="sections">${digitalArt}</section>`)
			music.classList.remove("hide")
			intro.classList.add("hide")
			// add to change back default coloring of background
			intro.classList.add("sections")
			more.classList.add("hide")
			past_projects.classList.add("hide")
			contact.classList.add("hide")
			break;
		case "intro":
			postInit()
			intro.classList.remove("hide")
			// add to change back default coloring of background
			intro.classList.add("sections")
			more.classList.remove("hide")
			past_projects.classList.remove("hide")
			contact.classList.remove("hide")
			music.classList.remove("hide")
			digitalArt = digital_art.innerHTML
			digital_art.remove()
			$("#holder").append(`<section id="digital_art" class="sections">${digitalArt}</section>`)
			postInit()
			break;
		case "contact":
			intro.classList.remove("hide")
			// remove to change the default coloring of background
			intro.classList.remove("sections")
			contact.classList.remove("hide")
			more.classList.add("hide")
			music.classList.add("hide")
			past_projects.classList.add("hide")
			digitalArt = digital_art.innerHTML
			digital_art.remove()
			$("#holder").append(`<section id="digital_art" class="sections">${digitalArt}</section>`)
			break;
		default:
	}
}