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

  burgerMenu.addEventListener('click', () => {

			burgerMenu.classList.remove('active');
			burgerIcon.classList.remove('active');
			span.classList.remove('active');
			document.body.classList.remove('_lock');
    })
	}

createBurger()

function addLanguageChange() {

	const languageBtn = document.querySelector('.language-btn')
	const languageBtnNoText = document.querySelector('.language-btn__image_globe')
	const language = document.querySelector('.language-btn__text')

	languageBtn.addEventListener('click', ()=>{
		language.classList.toggle('russian');
		if(language.classList.contains('russian')){
		language.textContent ='RU'
		}else{
			language.textContent ='En'
		}
	}
	)
	
	languageBtnNoText.addEventListener('click', ()=>{
		languageBtnNoText.classList.toggle('russian');
	}
	)
	
	}
	addLanguageChange()
