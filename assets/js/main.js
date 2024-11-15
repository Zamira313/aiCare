document.addEventListener("DOMContentLoaded", () => {
    
    // INDEX - ASSISTANT SECTION HORIZONTAL PROGRESS LINE
    const steps = document.querySelectorAll(".step");
    const progressLine = document.querySelector(".progress-line");
    const stepsContainer = document.querySelector(".steps-container");

    if (steps.length > 0 && progressLine && stepsContainer) {
        window.addEventListener("scroll", () => {
            // Get the container's position relative to the viewport
            const containerTop = stepsContainer.getBoundingClientRect().top;
            const containerHeight = stepsContainer.clientHeight;
            const windowHeight = window.innerHeight;

            // Calculate scroll percentage only when the container is in view
            if (containerTop < windowHeight && containerTop + containerHeight > 0) {
                const scrollPercentage = 1 - (containerTop / windowHeight);
                progressLine.style.width = `${scrollPercentage * 100}%`;
            }
        });
    }

    // OVERVIEW - ADVANTAGES SECTION VERTICAL PROGRESS LINE
    const stepsVertical = document.querySelectorAll(".circle");
    const progressLineVertical = document.querySelector(".progress-line-over");

    if (stepsVertical.length > 0 && progressLineVertical) {
        const observerOptions = {
            threshold: 0.5 // Element must be at least 50% visible to activate
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(stepsVertical).indexOf(entry.target);
                    
                    // Add "active" class to the current step
                    stepsVertical.forEach(s => s.classList.remove("active"));
                    entry.target.classList.add("active");

                    // Update vertical progress line height
                    const progressPercentage = ((index + 1) / stepsVertical.length) * 100;
                    progressLineVertical.style.height = `${progressPercentage}%`;
                }
            });
        }, observerOptions);

        stepsVertical.forEach((stepVertical) => {
            observer.observe(stepVertical);
        });
    }

    // INDEX - PLATFORM SECTION SLIDER
    (function () {
        var productsSliders = document.querySelectorAll(".reviews__slider");

        productsSliders.forEach(function (slider) {
            var productsSlider = slider.querySelector(".swiper--reviews");

            if (productsSlider) {
                new Swiper(productsSlider, {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    watchSlidesProgress: true,
                    
                    mousewheel: {
                        invert: false,
                    },
                     
                    breakpoints: {
                        0: { slidesPerView: 1, spaceBetween: 100 },
                        576: { slidesPerView: 1, spaceBetween: 100 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1200: { slidesPerView: 3, spaceBetween: 20 }
                    }
                });
            }
        });
    })();

    
    
// MODALKA - INDEX2.HTML

// Loop through all elements with the class "open-form-button"
document.querySelectorAll(".open-form-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".overlay").forEach(overlay => {
        overlay.style.display = "flex";
      });
    });
  });
  
  // Loop through all elements with the class "overlay" to close when clicking outside the form
  document.querySelectorAll(".overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) {
        overlay.style.display = "none";
      }
    });
  });
  
  
  
    

    // OVERVIEW PAGE - EXCEL SECTION SLIDER
    (function () {
        var excelSliders = document.querySelectorAll(".excel__slider");

        excelSliders.forEach(function (slider) {
            var excelSlider = slider.querySelector(".swiper--excel");

            if (excelSlider) {
                new Swiper(excelSlider, {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    watchSlidesProgress: true,
                    mousewheel: {
                        invert: false,
                    },
                    breakpoints: {
                        0: { slidesPerView: 1, spaceBetween: 100 },
                        576: { slidesPerView: 1, spaceBetween: 100 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1200: { slidesPerView: 4, spaceBetween: 20 }
                    }
                });
            }
        });
    })();

    // ANIMATE AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
        });
    }


    // BARS MENU HEADER 
    let menuToggler = document.querySelector('.bars_menu a');
    let dropdownToggles = document.querySelectorAll('.mob_nav .dropbtn');

    // Toggle the mobile menu
    menuToggler.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector('.mobile_menu').classList.toggle('show');
        document.querySelector('header').classList.toggle('show');
    });

    // Toggle each dropdown like an accordion
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();

            // Close other dropdowns if a different one is clicked
            dropdownToggles.forEach((otherToggle) => {
                if (otherToggle !== toggle) {
                    otherToggle.nextElementSibling.classList.remove('show');
                }
            });

            // Toggle current dropdown
            this.nextElementSibling.classList.toggle('show');
        });
    });



    // TAB PRICING BTNS
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and contents
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
    });



    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // function init(){
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчанию: «широта, долгота».
    //         // Чтобы не определять координаты центра карты вручную,
    //         // воспользуйтесь инструментом Определение координат.
    //         center: [34.70769588256163, -92.31347062766919],
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 15
    //     });

    //     // var myPlacemark = new ymaps.Placemark([39.740325, -75.542434], {}, {
    //     //     iconLayout: 'default#image',
    //     //     iconImageHref: 'dist/images/marker.svg',
    //     //     icon_imagesize: [68, 89],
    //     // });

    //     var myPlacemark = new ymaps.Placemark([34.70769588256163, -92.31347062766919], {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'assets/imgs/location_ic.svg',
    //         iconImageSize: [40, 40],
    //         iconImageOffset: [-34, -89],
    //         iconImageClipRect: [[0, 0], [40, 40]],
    //         iconImageFilter: {
    //             grayscale: 0  // Grayscale qiymatini o‘zgartiring: 0 - rangli, 1 - qora va oq
    //         }
    //     });
        

    //     myMap.geoObjects.add(myPlacemark);

    // }

    


    // SORT BY - ARTICLES HTML
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const arrow = document.querySelector('.arrow');

    if(dropdownBtn){
        dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
            arrow.classList.toggle('rotate');
            });
    }

    document.addEventListener('click', function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        arrow.classList.remove('rotate');
    }
    });


    
});





