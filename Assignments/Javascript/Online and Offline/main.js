let popUp = document.getElementById("popup");

      window.addEventListener("online", (event) => {
        popUp.style.display = "none";
      });

      window.addEventListener("offline", (event) => {
        popUp.style.display = "block";
      });

    popUp.style.display = navigator.onLine ? "none" : "block";