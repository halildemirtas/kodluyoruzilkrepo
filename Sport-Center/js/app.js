let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});

let menu = document.querySelector(".menu");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    menu.classList.remove("scrolling");
  } else {
    menu.classList.add("scrolling");
  }
});

document.getElementById("btn-yoga").addEventListener("click", function () {
  showInfo("yoga");
});

document.getElementById("btn-group").addEventListener("click", function () {
  showInfo("group");
});

document.getElementById("btn-solo").addEventListener("click", function () {
  showInfo("solo");
});

document.getElementById("btn-streching").addEventListener("click", function () {
  showInfo("streching");
});

// classes page

function showInfo(infoType) {
  document.querySelectorAll(".info").forEach(function (info) {
    info.style.display = "none";
  });

  document.getElementById("info-" + infoType).style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  let yogaButton = document.getElementById("btn-yoga");
  if (yogaButton) {
    yogaButton.focus();
    window.scrollTo(0, 0);
  }
});

// Calculate BMI

document
  .getElementById("btn-calculate")
  .addEventListener("click", calculateBMI);

function calculateBMI() {
  console.log("BMI hesapla");
  let height = document.getElementById("heightInput").value;
  let weight = document.getElementById("weightInput").value;

  let bmi = weight / (height / 100) ** 2;

  let arrowImage = document.querySelector(".arrow");
  arrowImage.style.left = calculateLeftFromBMI(bmi) + "%";
}

function calculateLeftFromBMI(bmi) {
  let leftPosition;

  if (bmi >= 0 && bmi <= 18.5) {
    leftPosition = 14;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    leftPosition = 31;
  } else if (bmi >= 25 && bmi <= 29.9) {
    leftPosition = 47;
  } else if (bmi >= 30 && bmi <= 34.9) {
    leftPosition = 63;
  } else if (bmi >= 35) {
    leftPosition = 80;
  } else {
    leftPosition = 14;
  }

  return leftPosition;
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".form");
  let sendButton = form.querySelector('button[type="submit"]');
  let inputName = form.querySelector("#yourName");
  let inputEmail = form.querySelector("#yourEmail");
  let textareaMessage = form.querySelector("#message");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    inputName.value = "";
    inputEmail.value = "";
    textareaMessage.value = "";
  });

  document.getElementById("menu-icon").addEventListener("click", function () {
    document.querySelectorAll(".menu").forEach(function (menu) {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  });
});
