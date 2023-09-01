function createBurger() {

const burgerIcon = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header__navigation");
const span = document.querySelector(".burger__icon");


burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	span.classList.toggle('active');
	document.body.classList.toggle('_lock');
})

  opacity.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
		burgerIcon.classList.remove('active');
		span.classList.remove('active');
		document.body.classList.remove('_lock');

  });

  burgerMenu.addEventListener('click', (e) => {
    const target = e.target;
		console.log(target)
    if (target) {
			burgerMenu.classList.remove('active');
			burgerIcon.classList.remove('active');
			span.classList.remove('active');
			document.body.classList.remove('_lock');
    }
  });




}
createBurger()