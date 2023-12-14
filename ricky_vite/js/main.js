const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    themeBtn: document.querySelector('.theme-btn'),
    sour: document.querySelector('.sour'),
    sweet: document.querySelector('.sweet'),
    spicy: document.querySelector('.spicy'),
    all: document.querySelector('.all'),
    search: document.querySelector('.search'),
    input: document.querySelector('#input'),
}

const URLs = `https://digimon-api.vercel.app/api/digimon`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    //data.forEach((data)=> console.log(data.name));
    //data.forEach((card) => console.log(card.img));
    function insertCards(arr){
        arr.forEach((card) => {
            DOMSelectors.column.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                    <h3 class = "name">${card.name}</h3>
                    <img src="${card.img}" class="img">
                    <h4>Level: ${card.level}</h4> 
                </div>`
            )
        });
    }
    insertCards(data)
    DOMSelectors.search.addEventListener('click', function() {
        let newArr = data.filter((data) => data.name === input);
        clearfields();
        insertCards(newArr);
    });
    
} catch (error) {
    console.log(error, "There was an error 🤓");
    document.querySelector("h1").textContent = "Error 🤓🤓🤓"
}
}
getData(URLs);
