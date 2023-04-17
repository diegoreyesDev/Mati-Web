//metodo para esconder solo un texto

// let hideText_btn=document.getElementById('hideText_btn');

// let hideText=document.getElementById('hideText');

// hideText_btn.addEventListener('click', toggleText);

// function toggleText() {
//     hideText.classList.toggle('show');

//     if (hideText.classList.contains('show')) {
//         hideText_btn.innerHTML='Ver Menos';
//     }
//     else {
//      hideText_btn.innerHTML='Ver Más';
//     }
// }

const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});


// scroll

$(document).ready(function () {


  $("a").click(function () {
      var gato=this.hash

      $("html, body").animate(
          {
              scrollTop: $(gato).offset().top
          },
          3000
      );
  });
});