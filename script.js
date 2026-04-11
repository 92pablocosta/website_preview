document.addEventListener("DOMContentLoaded", () => {

  /* ── Nav entrance ── */
  setTimeout(() => {
    document.querySelector("header")?.classList.add("loaded");
  }, 120);

  /* ── Hero headline entrance ── */
  setTimeout(() => {
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) heroTitle.classList.add("reveal-active");
  }, 480);

  /* ── Scroll-reveal observer ── */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        if (
          entry.target.querySelector(".trc") ||
          entry.target.matches("h1,h2,h3")
        ) {
          entry.target.classList.add("reveal-active");
        }
        revealObs.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
  document.querySelectorAll("h2, h3").forEach((el) => {
    if (el.querySelector(".trc")) revealObs.observe(el);
  });

  /* ── CTA heading — separate observer ── */
  const ctaH = document.getElementById("cta-heading");
  if (ctaH) {
    const ctaObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-active");
          ctaObs.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );
    ctaObs.observe(ctaH);
  }

  /* ── Hero carousel ── */
  const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
  const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
  const heroCarousel = document.getElementById("hero-carousel");

  if (heroSlides.length > 1) {
    let index = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer = null;

    const setActiveSlide = (nextIndex) => {
      index = nextIndex;
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === index);
      });
      heroDots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
      });
    };

    const startAutoplay = () => {
      if (reduceMotion) return;
      stopAutoplay();
      timer = setInterval(() => {
        setActiveSlide((index + 1) % heroSlides.length);
      }, 5000);
    };

    const stopAutoplay = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    heroDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const next = Number(dot.dataset.heroDot);
        if (Number.isNaN(next)) return;
        setActiveSlide(next);
        startAutoplay();
      });
    });

    if (heroCarousel) {
      heroCarousel.addEventListener("mouseenter", stopAutoplay);
      heroCarousel.addEventListener("mouseleave", startAutoplay);
    }

    setActiveSlide(0);
    startAutoplay();
  }

  /* ── Subtle image parallax ── */
  const parallaxImages = Array.from(document.querySelectorAll(".parallax-img"));
  const canUseParallax =
    parallaxImages.length > 0 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.innerWidth >= 768;

  if (canUseParallax) {
    let ticking = false;

    const applyParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      parallaxImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const speed = Number(img.dataset.parallaxSpeed || 0.06);
        const elementCenter = rect.top + rect.height / 2;
        const distance = elementCenter - viewportCenter;
        const shift = Math.max(-22, Math.min(22, distance * -speed));

        img.style.setProperty("--parallax-y", `${shift}px`);
      });

      ticking = false;
    };

    const requestParallax = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(applyParallax);
    };

    requestParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);
  }

});

/* ── Flashlight card mouse tracker ── */
function setMouse(event, el) {
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mouse-x", `${event.clientX - r.left}px`);
  el.style.setProperty("--mouse-y", `${event.clientY - r.top}px`);
}
