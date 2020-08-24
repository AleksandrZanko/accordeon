let buttons = $('.questions__button');
let texts = $('.questions__item-text');

buttons.on('click', function(e) {
	e.preventDefault();
	let activeButton = $(this);
	let activeText = activeButton.siblings('.questions__item-text');
	if (activeButton.hasClass("questions__button--active")) {
		activeButton.toggleClass('questions__button--active');
		activeText.slideToggle();
	} else {
		buttons.removeClass('questions__button--active');
		texts.slideUp();

		activeButton.addClass('questions__button--active');
		activeText.slideDown();
		activeText.addClass('questions__item-text--active');
	}
	
})



