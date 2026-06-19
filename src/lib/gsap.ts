import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASE_SNAP = "power3.out";

export const fadeUp = (target: gsap.TweenTarget, delay = 0) =>
  gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: EASE_SNAP },
  );

export const staggerFadeUp = (targets: gsap.TweenTarget, stagger = 0.1) =>
  gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, stagger, ease: EASE_SNAP },
  );

export { gsap, ScrollTrigger };
