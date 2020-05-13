$('.burger-menu').click(function() {
  $(this).toggleClass('burger-menu--active');
});

// dynamic width using js '1.0'
const titleMargin = document.querySelector('.block-title').offsetLeft; // get 'margin'
let titleWidth = document.querySelector('.block-title').clientWidth; // get 'width'
titleWidth = titleWidth * 0.8 + titleMargin; // increase the width by the margin 'value'
document.querySelector('.block-title-wrapper').style.width = `${titleWidth}px`; // assign 'width'

const titleHeight = document.querySelector('.block-title').clientHeight + 50; // get 'height'
document.querySelector('.block-title-wrapper').style.height = `${titleHeight}px`; // assign 'height'
