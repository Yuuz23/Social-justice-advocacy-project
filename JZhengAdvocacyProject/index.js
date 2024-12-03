function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("light-mode");
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;
    const opacity = Math.min(1, Math.max(0, (windowHeight - elementTop - elementVisible) / windowHeight));
    reveals[i].style.opacity = opacity;

    if (opacity === 1.5) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Define the reduceMotion function
function reduceMotion() {
  const reveals = document.querySelectorAll(".reveal");
  const transition = {
    transitionProperty: "transform, opacity",
    transitionDuration: "0.001s, 0.001s",
    transitionTimingFunction: "linear, linear",
    transitionDelay: "0s, 0s"
  };

  // Check if the reduceMotion button is clicked
  const reduceMotionBtn = document.getElementById("reduceMotion");
  const isReducedMotion = reduceMotionBtn.getAttribute("aria-pressed") === "true";

  // Update the transition object with new values based on user preference
  if (isReducedMotion) {
    transition.transitionDuration = "0s, 0s";
    transition.transitionTimingFunction = "none, none";
  }

  // Update the style of each revealable container
  for (let i = 0; i < reveals.length; i++) {
    reveals[i].style.transitionProperty = transition.transitionProperty;
    reveals[i].style.transitionDuration = transition.transitionDuration;
    reveals[i].style.transitionTimingFunction = transition.transitionTimingFunction;
    reveals[i].style.transitionDelay = transition.transitionDelay;
  }
}

// Call the reduceMotion function when the button is clicked
const reduceMotionBtn = document.getElementById("reduceMotion");
reduceMotionBtn.addEventListener("click", () => {
  reduceMotionBtn.setAttribute("aria-pressed", !Boolean(reduceMotionBtn.getAttribute("aria-pressed")));
  reduceMotion();
});



