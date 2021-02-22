// Swiper Gallery
const swiperGallery = new Swiper(".gallery__swiper-container", {
        navigation: {
          nextEl: ".gallery__next",
          prevEl: ".gallery__prev",
        },
        loop: true,
        pagination: {
        el: '.gallery__pagination-item',
        type: 'fraction',
      },
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      breakpoints: {
        1700: {
          spaceBetween: 50,
        },
        1440: {
          spaceBetween: 30,
        },
        1200: {
          spaceBetween: 30,
          // slidesPerView: 2,
        },
      },
      });

// Choices
  const elementChoices = document.querySelector('.gallery__select');
  const choices = new Choices(elementChoices, {
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: '',
  })

  // Accordeon
  $(function () {
        $(".accordeon").accordion({
          heightStyle: "content",
          header: ".accordeon__header",
          collapsible: true,
          active: 0,
        });
      });

// Flag Buttons
  const container = document.querySelector('.language-list')
  let buttons = document.querySelectorAll('.language-list__item');

  container.addEventListener('click', function(e) {
    const target = e.target;
    Array.from(buttons).forEach(function(button) {
      button.classList.remove('active');
    })
    target.classList.add('active');
  })

  // Catalogue Tabs
  let tabsUnit = document.querySelectorAll('.language-list__item');
  let unit = document.querySelectorAll('.catalogue__unit');

  tabsUnit.forEach(function(unitBtn) {
    unitBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      unit.forEach(function(unitContent) {
        unitContent.classList.remove('active-unit');
        document.querySelector(`[data-target = "${path}"]`).classList.add('active-unit');
        document.querySelector('.catalogue__unit.active-unit .catalogue-tab:first-child').classList.add('tab-placeholder');
      })
    })
  })

  let tabsItem = document.querySelectorAll('.accordeon__link');
  let tab = document.querySelectorAll('.catalogue-tab');

  tabsItem.forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      tab.forEach(function(tabContent) {
        tabContent.classList.remove('active-tab');
        document.querySelector('.catalogue__unit.active-unit .catalogue-tab:first-child').classList.remove('tab-placeholder');
        document.querySelector(`[data-target = "${path}"]`).classList.add('active-tab');
      })
    })
  })

  // Tabs items
  const cont = document.querySelectorAll('.accordeon__list');
  let selectedItem;

  cont.forEach(function(el) {
    el.addEventListener('click', function(e) {
      el.querySelector('.accordeon__link:first-child').classList.remove('accordeon-link-active');
      const target = e.target;
      while (target !== this) {
        if (target.className === 'accordeon__link') {
          highlight(target);
          return;
        }
        target = target.parentNode;
      }
      function highlight(node) {
        if (selectedItem) {
          selectedItem.classList.remove('accordeon-link-active');
        }
        selectedItem = node;
        selectedItem.classList.add('accordeon-link-active');
      }
    })
  });

  // Hide Events
  const hiddenButton = document.querySelector('.events__btn--show');
  const hiddenEvents = document.querySelectorAll('.events__card:nth-child(n + 4)');

  hiddenButton.addEventListener('click', function() {
    hiddenEvents.forEach(function(e) {
      e.style.display = 'block';
    })
    hiddenButton.classList.add('btn-hidden');
  })

// Books Swiper
const swiperBooks = new Swiper('.books__swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".books__next",
        prevEl: ".books__prev"
      },
      loop: true,
      pagination: {
        el: '.books__pagination-item',
        type: 'fraction',
        clickable: true,
      },
    });

// Tooltips
tippy("#tooltip-one", {
        content:
          "Пример современных тенденций - современная методология разработки",
        theme: "grey",
      });
      tippy("#tooltip-two", {
        content:
          "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
        theme: "grey",
      });
      tippy("#tooltip-three", {
        content: "В стремлении повысить качество",
        theme: "grey",
      });

// Partners Swiper
const swiperPartners = new Swiper('.partners__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev"
  },
  loop: true,
  breakpoints: {
    1700: {
      spaceBetween: 20,
    },
  },
});

// Map
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75846306898368,37.601079499999905],
            zoom: 16,
            controls: [],
        });
        myMap.controls.add('zoomControl', {
          position: {
            bottom: '332px',
            right: '10px',
          },
          size: 'small',
        });
        myMap.controls.add('geolocationControl', {
          position: {
            bottom: '300px',
            right: '10px',
          }
        })
        let myPlacemark = new ymaps.Placemark ([
          55.75846306898368,37.601079499999905
        ], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map_marker.svg',
          iconImageSize: [20, 20],
        })
        myMap.geoObjects.add(myPlacemark);
    }

// Inputmask Plugin
const input = document.querySelector('.map__form-phone');
const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(input);

// JustValidate Plugin
new JustValidate('.map__form', {
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 20,
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = input.Inputmask.unmaskedvalue()

        return Number(phone) && phone.lenght === 10;
      }
    }
  },
  messages: {
    name: 'Необходимо заполнить поле',
    phone: 'Необходимо заполнить поле',
  }
})

// Smooth Scroll Nav Menu
document.querySelectorAll('.nav__link').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Smooth Scroll Hero Button
let toBottom = document.querySelector('.hero__btn');
toBottom.addEventListener('click', function(ev) {
  ev.preventDefault();

  let href = this.getAttribute('href').substring(1);

  const scrollTar = document.getElementById(href);
  const topOff = 0;
  const elPos = scrollTar.getBoundingClientRect().top;
  const offsetPos = elPos - topOff;

  window.scrollBy({
    top: offsetPos,
    behavior: 'smooth'
  })
})
