
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