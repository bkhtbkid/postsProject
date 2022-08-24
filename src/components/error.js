export const errorTitle = document.querySelector('.error-title')
export const errorText = document.querySelector('.error-text')

export function clearError(elem, dom) {
	dom.style.border = '1px solid rgb(133, 133, 133)'
	elem.classList.add('hide')
}

export function setError(item, el, dom) {
	if (el.length == 0) {
		item.classList.remove('hide')
		localStorage.clear()
		dom.style.border = '1px solid red'
	}
	if (el.length > 0) {
		dom.style.border = '1px solid rgb(133, 133, 133)'
		item.classList.add('hide')
	}
}