var menuList = document.getElementById("menuList");
if (menuList) {
  menuList.style.maxHeight = "0px";
  function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
      menuList.style.maxHeight = "400px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var moon = document.getElementById("moon");
  var toggleButton = document.getElementById("dark-mode-toggle");

  // Retrieve dark mode preference from localStorage
  const currentMode = localStorage.getItem("darkMode");

  // Function to apply dark mode
  function enableDarkMode() {
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enabled");

    // Change the icon if the element exists
    if (moon) {
      moon.src = moon.getAttribute("data-sun");
    }
  }

  // Function to disable dark mode
  function disableDarkMode() {
    document.documentElement.classList.remove("dark-theme");
    localStorage.setItem("darkMode", "disabled");

    // Change the icon if the element exists
    if (moon) {
      moon.src = moon.getAttribute("data-moon");
    }
  }

  // Apply dark mode instantly if enabled
  if (currentMode === "enabled") {
    enableDarkMode();
  }

  // Dark mode toggle using the moon/sun icon
  if (moon) {
    moon.onclick = function () {
      if (document.documentElement.classList.contains("dark-theme")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    };
  }

  // Dark mode toggle using the button
  if (toggleButton) {
    toggleButton.onclick = function () {
      if (document.documentElement.classList.contains("dark-theme")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    };
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
