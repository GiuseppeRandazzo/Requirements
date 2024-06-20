"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("buttonLogin");
  const divContainer = document.getElementById("container");
  const btnLogout = document.getElementById("buttonLogout");

  checkStatus();

  function checkStatus() {
    const log = window.localStorage.getItem("isLogged");

    if (log == "true") {
      btnLogin.setAttribute("hidden", true);
      divContainer.removeAttribute("hidden");
    } else {
      btnLogin.removeAttribute("hidden");
      divContainer.setAttribute("hidden", true);
    }
  }

  function login() {
    window.localStorage.setItem("isLogged", "true");
    checkStatus();
  }
  function logout() {
    window.localStorage.setItem("isLogged", "false");
    checkStatus();
  }

  btnLogin.addEventListener("click", login);
  btnLogout.addEventListener("click", logout);
});
