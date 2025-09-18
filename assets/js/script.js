let lastScrollY = window.scrollY;
    const nav = document.querySelector("nav");
    let ticking = false;

    function updateNav() {
      if (window.scrollY > lastScrollY) {
        nav.classList.add("hide");
        nav.classList.remove("show");
      } else {
        nav.classList.add("show");
        nav.classList.remove("hide");
      }
      lastScrollY = window.scrollY;
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    });