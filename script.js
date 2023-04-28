const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const form = document.querySelector('.form');
const email = document.querySelector('.input');


form.addEventListener('submit', e => {
	e.preventDefault();

	validateInput();
});

const setError = (element, message) => {
	const errorMessage = document.querySelector('.input__error-text');
	const errorIcon = document.querySelector('.input__error-icon');

	element.classList.add('error-input');
	errorMessage.innerHTML = message;
	errorIcon.style.display = 'block'
};

const setSuccess = element => {
	const errorMessage = document.querySelector('.input__error-text'); 
	const errorIcon = document.querySelector('.input__error-icon');
	
	errorMessage.innerHTML = '';
	element.classList.remove('error-input');
	errorIcon.style.display = 'none';

	element.classList.add('success-input');
}

const isValidEmail = email => {
	return EMAIL_REGEXP.test(String(email).toLowerCase());
}

const validateInput = () => {
	const emailValue = email.value.trim();

	if (emailValue === '') {
		setError(email, 'Email is required');
	}
	else if (!isValidEmail(emailValue)) {
		setError(email, 'Please provide a valid email')
	}
	else {
		setSuccess(email);
	}
};