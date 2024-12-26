// Reveal Section
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden-section");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hidden-section");
});

//Lazy Loading Image
// const imgTargets = document.querySelectorAll("img[data-src]");
// console.log(imgTargets);
// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });

//   observer.unobserve(entry.target);
// };
// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
// });
// imgTargets.forEach((img) => imgObserver.observe(img));

// chatgpt
const images = document.querySelectorAll("img[data-src]");

// Intersection Observer for lazy loading images
const lazyLoad = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      // Set the src attribute to the data-src value

      img.src = img.dataset.src;

      // Add a load event listener to remove the blur when the image is fully loaded
      img.onload = () => {
        img.classList.remove("lazy-img");
      };

      // Stop observing the current image
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(lazyLoad, {
  root: null, // Observe in the viewport
  rootMargin: "0px",
  threshold: 0.1, // Trigger when 10% of the image is in view
});

// Add the blur class initially and observe each image
images.forEach((img) => {
  img.classList.add("lazy-img");
  observer.observe(img);
});

//Menu Fade Animation
const navLink = document.querySelectorAll(".nav-link");
const navLinks = document.querySelector(".nav-links");
const handleHover = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;

    navLink.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
  }
};
navLinks.addEventListener("mouseover", handleHover.bind(0.5));
navLinks.addEventListener("mouseout", handleHover.bind(1));

// Select all product items
const products = document.querySelectorAll("#product1 .pro");

// Add mouseover and mouseout event listeners to each product
products.forEach((product) => {
  product.addEventListener("mouseover", () => {
    product.style.transform = "scale(1.1)"; // Increase size
    product.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
    product.style.boxShadow = "20px 20px 50px rgba(0, 0, 0, 0.1)"; // Enhanced shadow effect
  });

  product.addEventListener("mouseout", () => {
    product.style.transform = "scale(1)"; // Revert to original size
    product.style.boxShadow = "20px 20px 30px rgba(0, 0, 0, 0.02)"; // Revert shadow
  });
});

//Image Slider
const proImages = document.querySelectorAll(".small-img");
const mainImg = document.getElementById("MainImg");

const imgGroup = document.querySelector(".small-img-group");

imgGroup.addEventListener("click", function (e) {
  const link = e.target;
  if (!link.classList.contains("small-img")) return;

  mainImg.src = link.getAttribute("src");
});
