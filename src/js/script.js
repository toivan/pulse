/* var name = "Иван";
let number = 7;
const pi = 3.14; */
// number
// string - "", '', ``
// true/false
// null
// undefined
/* let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
} */
// Symbol

// alert(1234)
/* console.log("jfdbjfdk") */
/* console.log(number);
let answer = confirm("Вам есть 18?");
console.log(answer); */

/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* console.log(4+'fdd')
 */

/* let isChecked = true,
    isClose = true; */

/* console.log(isChecked && isClose); и
 */
/* console.log(isChecked || isClose); или */

/* if (2*4 == 7*1) {
    console.log('Верно');
} else {
    console.log('Ошибка');
}
 */

/* let answer = confirm("Вам есть 18?");
if (answer) {
    console.log('Проходите')
} else {
    console.log('Не проходите')
}

const num = 50;

if (num < 49) {
    console.log('Неправильно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
} */

/* for(let i = 1; i < 8; i++) {
    console.log(i);
}

function logging(a, b) {
    console.log( a + b );
}

logging(3, 5); */


$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
/*         adaptiveHeight: true, */
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
    
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

/*       $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });

      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      }); */

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      // Modal

      /* $('[data-modal=consultation]').fadeOut(); */ //проверка
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
      });
/*       $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn();        
      }); */

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        })
      });

/*       $('#consultation-form').validate();
      $('#consultation form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true,
          }
        },
        messages: {
          name: {
            required: "Напишите свое имя",
            minlength: jQuery.validator.format("Минимум {0} символа")
          },
          phone: "Напишите свой номер телефона",
          email: {
            required: "Напишите свой адрес электронной почты",
            email: "Неправильно введен адрес электронной почты"
          }
        }
      });
      $('#order form').validate(); */

      function validateForms(form){
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            phone: "required",
            email: {
              required: true,
              email: true,
            }
          },
          messages: {
            name: {
              required: "Напишите свое имя",
              minlength: jQuery.validator.format("Минимум {0} символа")
            },
            phone: "Напишите свой номер телефона",
            email: {
              required: "Напишите свой адрес электронной почты",
              email: "Неправильно введен адрес электронной почты"
            }
          }
        });
      };

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $('input[name=phone]').mask("+7 (999) 999-99-99");
      
      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn();

          $('form').trigger('reset');
        });
        return false;
      });

      // smooth scroll and pageup

      $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
          $('.pageup').fadeIn();
        } else  {
          $('.pageup').fadeOut();
        }
      });

      $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });

      new WOW().init();
});