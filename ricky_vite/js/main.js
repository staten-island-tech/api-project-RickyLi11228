const DOMSelectors = {
    form: document.querySelector("#form"),
    btn: document.getElementById("#btn"),
}
const URL = `https://coffee.alexflipnote.dev/random`;
async function getData(URL) {
try {
    const response = await fetch(URL);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    document.querySelector("img").src = data.src;
} catch (error) {
    console.log(error, "There was an error");
    document.querySelector("h1").textContent = "Error"
}
}
getData(URL);

    