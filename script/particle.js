const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--primary-color")
  .trim();

function initParticles() {
  particlesJS("particles", {
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: primaryColor,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.4,
        random: true,
      },
      size: {
        value: 15,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        random: true,
        straight: false,
        out_mode: "out",
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: primaryColor,
        opacity: 0.2,
        width: 2,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
    },
    retina_detect: true,
  });
}

window.addEventListener("load", function () {
  initParticles();
});
