$(function(){

$('.header-slider').slick({
	fade: true,
	prevArrow: `<button class="arr arr-prev"><img src="img/arrow-left.svg" alt="arrow"></button>`,
	nextArrow: `<button class="arr arr-next"><img src="img/arrow-right.svg" alt="arrow"></button>`,
	asNavFor: '.header-dots',
	slidesToShow: 1,
	slidesToScroll: 1
})

$('.header-dots').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.header-slider'
})



  
});