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
  const emailSuccess = getCookie("emailSuccess");
  console.log(emailSuccess);
  console.log(emailSuccess == "true");
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
