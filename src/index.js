//бургер
const burgerIcon = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__navigation");
const span = document.querySelector(".burger__icon");
const opacity = document.querySelector(".opacity");


burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	span.classList.toggle('active');
	opacity.classList.toggle('active');
})

document.addEventListener('click', event => {
if(event.target.className !== 'burger__icon active' && 
event.target.className !== 'span active' && 
event.target.className !== 'menu__body active') {
	burgerIcon.classList.remove('active');
	burgerMenu.classList.remove('active');
	span.classList.remove('active');
	opacity.classList.remove('active');
}
})


