import { getData } from "./api";
import { transform } from "./transform.data";

export async function dataAra() {
    const data = await getData(
        "https://project-68a00-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    );
    const posts = transform(data);
    let arr = [];
    posts.map((post) => {
        arr.push(post.id);
    });

    Array.from(document.querySelectorAll(".delete-post")).forEach((elem) => {
        elem.addEventListener("click", async function (e) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === elem.id) {
                    elem.parentElement.parentElement.remove();
                    await del(arr[i]);
                }
            }
        });
    });
}

async function del(id) {
    await fetch(
        `https://project-68a00-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`,
        {
            method: "delete",
        }
    );
}
