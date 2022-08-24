export async function sendData(data) {
    try {
        const request = new Request(
            "https://project-68a00-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
            {
                method: "post",
                body: JSON.stringify(data),
            }
        );
        const response = await fetch(request);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getData(url) {
    try {
        const request = new Request(url, { method: "get" });
        const response = await fetch(request);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
