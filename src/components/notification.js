const notificationButton = document.querySelector('.notification__button')
export const notification = document.querySelector('.notification')


notificationButton.addEventListener('click', () => {
	notification.style.top = '-150%'
})

export function clearNotification() {
	setTimeout(() => {
		notification.style.top = '-150%'
	}, 3000)
}