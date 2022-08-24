import { buttonCreatePost, createForm } from '../components/buttonCreatePost'
import { clearNotification, notification } from '../components/notification'
import { createNewPost } from '../components/createNewPost'
import { clearError, setError, errorText, errorTitle } from '../components/error'
import { sendData } from './api'


const formButton = document.querySelector('.form__button')
const title = document.getElementById('title')
const textarea = document.getElementById('textarea')


formButton.addEventListener('click', formButtonHandler)

title.addEventListener('input', function () {
	title.style.border = '1px solid rgb(141, 58, 189)'
})

async function formButtonHandler(e) {
	e.preventDefault()

	isValid()

	if (isValid()) {
		sendDataToServer()
		title.value = ''
		textarea.value = ''
		notification.style.top = '40px'
		clearNotification()
		buttonCreatePost.classList.remove('hide')
		createForm.classList.add('hide')

		setTimeout(() => {
			createNewPost()
		}, 300);
	}
}

function sendDataToServer() {
	Object.keys(localStorage).forEach(elem => {
		if (isValid) {
			const data = {
				title: elem,
				text: localStorage[elem]
			}
			sendData(data)
		}
	})
}


function isValid() {
	let isFormValid = true

	localStorage.setItem(title.value, textarea.value)

	Object.keys(localStorage).forEach(elem => {
		const validator = localStorage[elem]
		let isValid = true
		isValid = localStorage[elem].length && isValid

		if (isValid) clearError(errorText, textarea)
		if (isValid) clearError(errorTitle, title)
		isFormValid = isFormValid && isValid

		if (elem.length == 0 || validator.length == 0) {
			setError(errorTitle, elem, title)
			setError(errorText, validator, textarea)
			isFormValid = false
		}

	})

	return isFormValid
}









