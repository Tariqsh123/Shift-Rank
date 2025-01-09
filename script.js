//   MAIN HEADING ANIMATION
  const bannerTitle = document.querySelector(".li-banner-title");
const text = "Where ideas evolve into excellence.";
const words = text.split(" ");

bannerTitle.innerHTML = words
  .map((word) => `<span class="word">${word}</span>`)
  .join(" ");
//   MAIN HEADING ANIMATION

// Count Left Heading
const titleElement = document.querySelector('.li-banner-bottom .li-banner-bottom-main-title');
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.5
});
observer.observe(titleElement);
// Count Left Heading


// Count Number 
document.querySelectorAll('.li-banner-bottom-title').forEach((element) => {
    const target = parseInt(element.innerText);
    let count = 0;
    const countUp = () => {
      if (count < target) {
        count++;
        element.innerText = count + "+";
        setTimeout(countUp, 100); 
      }
    };
    element.addEventListener("mouseenter", () => {
      element.innerText = "0+"; 
      count = 0;
      countUp(); 
    });
    element.addEventListener("mouseleave", () => {
      element.innerText = target + "+"; 
    });
  });
// Count Number 
  


// Bussiness Left Text
const businessTitleElement = document.querySelector('.li-business-area .li-business-area-title');
const businessObserverCallback = (entries, businessObserver) => {
  entries.forEach(businessEntry => {
    if (businessEntry.isIntersecting) {
      businessEntry.target.classList.add('visible');
      businessObserver.unobserve(businessEntry.target);
    }
  });
};
const businessObserver = new IntersectionObserver(businessObserverCallback, {
  threshold: 0.5
});
businessObserver.observe(businessTitleElement);
// Bussiness Left Text

// Bussiness Right Images Animation
const businessImagesWrap = document.querySelector('.li-business-area .images-wrap');
const imagesObserverCallback = (entries, imagesObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      imagesObserver.unobserve(entry.target);
    }
  });
};
const imagesObserver = new IntersectionObserver(imagesObserverCallback, {
  threshold: 0.5
});
imagesObserver.observe(businessImagesWrap);
// Bussiness Right Images Animation



// OUR CREATION HEADING ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.li-portfolio-area-title');
    window.addEventListener('scroll', function() {
      const rect = title.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        title.classList.add('show');
      }
    });
  });
// OUR CREATION HEADING ANIMATION
  




// SLIDER HOME
var slider = tns({
    container: '.li-portfolio-slider',
    items: 1,
    autoplay: true,
    gutter: 10,
    mouseDrag: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
        768: {
            items: 2.5,
            gutter: 20,
        },
        991: {
            items: 3.5,
            gutter: 37,
        }
    }
});
// SLIDER HOME