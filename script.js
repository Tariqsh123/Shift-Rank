// Background Animnation 
document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 552.4044389642416
        }
      },
      color: {
        value: ['#65c025', '#ff0000', '#0000ff', '#ff00ff']
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 6
        }
      },
      opacity: {
        value: 0.09620443442314919,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#1d6e26',
        opacity: 0.10422147062507829,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 20.30199213297805,
          duration: 2,
          opacity: 0.6740261388148712,
          speed: 3
        },
        repulse: {
          distance: 113.69115594467708,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
});

// Background Animation End


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