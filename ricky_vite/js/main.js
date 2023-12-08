const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    themeBtn: document.querySelector('.theme-btn'),
    sour: document.querySelector('.sour'),
    sweet: document.querySelector('.sweet'),
    spicy: document.querySelector('.spicy'),
    all: document.querySelector('.all'),
}

const URLs = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    //data.data.forEach((data)=> console.log(data.name));
    //document.querySelector("h1").textContent = data;
    function insertCards(arr){
        arr.data.forEach((card) => {
            DOMSelectors.column.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                    <h3 class = "name">${card.name}</h3>
                    <img src="${card.img}" class="img">
                    <h4>Price: ${card.price}</h4>
                </div>`
            )
        });
    }
    insertCards(data);
} catch (error) {
    console.log(error, "There was an error 🤓");
    document.querySelector("h1").textContent = "Error 🤓🤓🤓"
}
}
getData(URLs);
data.data.forEach((card) => {
    DOMSelectors.column.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h3 class = "name">${card.name}</h3>
            <img src="${card.img}" class="img">
            <h4>Price: ${card.price}</h4>
        </div>`
    )
});