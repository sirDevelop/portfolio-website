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

$(document).ready(function () {
  let notification = document.getElementById("email-notification-text")
    .innerHTML;

  //if the inner text is not empty, meaning that email has been sent
  if (notification) {
    $.Toast("Success", "Email has been sent", "success", {
      has_icon: true,
      has_close_btn: true,
      stack: true,
      position_class: "toast-top-center",
      fullscreen: false,
      timeout: 1000,
      sticky: false,
      has_progress: true,
      rtl: false,
    });
    setTimeout(function () {
      document.getElementById("email-notification-text").innerHTML = "";
      window.location.href = "/";
    }, 1000);
  }
});
