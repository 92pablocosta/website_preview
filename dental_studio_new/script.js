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

});

/* ── Flashlight card mouse tracker ── */
function setMouse(event, el) {
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mouse-x", `${event.clientX - r.left}px`);
  el.style.setProperty("--mouse-y", `${event.clientY - r.top}px`);
}
