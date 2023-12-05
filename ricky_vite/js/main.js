const URLs = `https://randomfox.ca/floof/`;
async function getData(URLs) {
    const response = await fetch(URLs);
    const data = await response.json();
    document.querySelector("img").src = data.image;
}
getData(URLs);
