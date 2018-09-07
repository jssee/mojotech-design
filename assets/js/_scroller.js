import "intersection-observer";
import scrollama from "scrollama";
import { tween, styler, stagger, transform, easing } from "popmotion";
const { smooth, transformMap } = transform;

export function scrollController() {
  const scroller = scrollama();
  const bodyStyler = styler(document.querySelector("body"));
  let theme = "light";
  function mixBackground({ element }) {
    if (element.dataset.themeset == "light" && theme == "dark") {
      tween({
        from: { background: "#171c1f", color: "#e9edef" },
        to: { background: "#e9edef", color: "#171c1f" },
        duration: 200,
        ease: easing.linear
      }).start(bodyStyler.set);
      theme = "light";
    } else if (element.dataset.themeset == "dark" && theme == "light") {
      tween({
        from: { background: "#e9edef", color: "#171c1f" },
        to: { background: "#171c1f", color: "#e9edef" },
        duration: 200,
        ease: easing.linear
      }).start(bodyStyler.set);
      theme = "dark";
    } else {
      console.log("");
    }
  }

  scroller
    .setup({
      step: "[data-themeset]",
      threshhold: 2,
      offset: 0.8
    })
    .onStepEnter(mixBackground);
}

export function fadeController() {
  const fadeInScroller = scrollama();
  const fadeInUpScroller = scrollama();

  function handleFadeIn({ element }) {
    element.classList.add("in-view");
  }

  fadeInScroller
    .setup({
      step: ".fade-in",
      offset: 0.9,
      once: true
    })
    .onStepEnter(handleFadeIn);

  fadeInUpScroller
    .setup({
      step: ".fade-in",
      offset: 0.1
    })
  .onStepEnter(handleFadeIn);
}
