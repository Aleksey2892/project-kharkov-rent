$('.burger-menu').click(function() {
  $(this).toggleClass('burger-menu--active');
});

const titleWidth = document.querySelector('.block-title').clientWidth;
console.log(`Получили значение ширины: ${titleWidth}`);

const calc = titleWidth * 0.2;
console.log(`Сделали манипуляции: ${calc}`);

document.querySelector('.block-title-wrapper').style.width = `${calc}px`;

console.log(
  `Присвоили такой результат: ${
    document.querySelector('.block-title-wrapper').style.width
  }`,
);
