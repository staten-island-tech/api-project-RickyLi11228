const URLs = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    document.querySelector("h1").textContent = data.data;
} catch (error) {
    console.log(error, "There was an error 🤓");
    document.querySelector("h1").textContent = "Error 🤓🤓🤓"
}
}
getData(URLs);