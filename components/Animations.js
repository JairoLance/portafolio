"use client";
import { useEffect } from "react";

const TARGETS =
  ".eyebrow, .section-title, .spec, .card, .job, .skill-group, .edu, .about-photo, .about-text, .contact";

export default function Animations() {
  useEffect(() => {
    const els = [...document.querySelectorAll(TARGETS)].filter((e) => !e.closest(".hero"));
    els.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", `${(i % 4) * 90}ms`);
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));

    const move = (e) => {
      const t = e.target.closest?.(".spot");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${e.clientX - r.left}px`);
      t.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const hero = document.querySelector(".hero");
    const tilt = (e) => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      hero.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    document.addEventListener("pointermove", tilt);
    document.addEventListener("pointermove", move);
    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointermove", tilt);
    };
  }, []);
  return null;
}
