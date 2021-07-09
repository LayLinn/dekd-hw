const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slide-btn');
const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');

let currentIndex = 0;

const cycleSlide = () => {
	setSlide(++currentIndex);
};

let interval = setInterval(() => cycleSlide(), 4000);

const selectSlide = (index) => {
	setSlide(index);
	clearInterval(interval);
};

const setSlide = (index) => {
	if (index >= slides.length) {
		index = 0;
	}
	if (index < 0) {
		index = slides.length - 1;
	}
	slides.forEach((slide) => {
		slide.classList.remove('active-slide');
	});

	buttons.forEach((button) => {
		button.classList.remove('active-btn');
	});

	slides[index].classList.add('active-slide');
	buttons[index].classList.add('active-btn');
	currentIndex = index;
};

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', () => selectSlide(i));
}

prev.addEventListener('click', () => selectSlide(currentIndex - 1));
next.addEventListener('click', () => selectSlide(currentIndex + 1));
