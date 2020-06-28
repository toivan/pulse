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
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
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
});