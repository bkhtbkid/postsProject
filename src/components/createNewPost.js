import { getData } from "../base/api";
import { dataAra } from "../base/data";
import { transform } from "../base/transform.data";

const content = document.querySelector(".content");
const show = document.getElementById("show-posts");

export async function createNewPost() {
    const data = await getData(
        "https://project-68a00-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    );
    content.innerHTML = "";
    dataAra();
    const posts = transform(data);
    const html = posts.map((post) => renderPosts(post));
    content.insertAdjacentHTML("beforebegin", html.join(" "));
    end = true;
    show.classList.add("hide-button");
    localStorage.clear();
}

show.addEventListener("click", showAllPosts);

let end = false;
function showAllPosts() {
    if (!end) {
        createNewPost();
        end = true;
    }
    if (end === true) {
        show.classList.add("hide-button");
        end = false;
    }
}

function renderPosts(post) {
    const title = post.title;
    const text = post.text;

    let div = document.createElement("div");
    content.prepend(div);
    div.className = "post";
    div.innerHTML = `
	<div class="post-box">
		<h2 class="post-title">${title}</h2>
		<button class="button button-primary delete-post" id="${post.id}">Удалить</button>
	</div>
	<p class="post-text hide">${text}</p>
 `;
    const postTitleAll = Array.from(document.querySelectorAll(".post-title"));

    postTitleAll.forEach((elem) => {
        elem.addEventListener("click", showPost);
        elem.style.backgroundColor = `rgb(${randomNum(0, 255)}, ${randomNum(
            0,
            255
        )}, ${randomNum(0, 255)})`;
    });
}

function showPost() {
    this.parentElement.nextElementSibling.classList.toggle("hide");
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
