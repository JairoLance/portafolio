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
    document.addEventListener("pointermove", move);
    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", move);
    };
  }, []);
  return null;
}
