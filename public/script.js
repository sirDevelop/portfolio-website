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
  } else if (mode == "green") {
    document.getElementById("theme-style").href =
      "../public/css_themes/green.css";
  } else if (mode == "purple") {
    document.getElementById("theme-style").href =
      "../public/css_themes/purple.css";
  }

  localStorage.setItem("theme", mode);
}
