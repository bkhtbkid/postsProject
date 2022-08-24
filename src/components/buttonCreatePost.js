export const buttonCreatePost = document.querySelector('.create__button')
export const createForm = document.getElementById('create')

buttonCreatePost.addEventListener('click', createPost)

function createPost(e) {
	e.target.classList.add('hide')
	createForm.classList.remove('hide')
}
