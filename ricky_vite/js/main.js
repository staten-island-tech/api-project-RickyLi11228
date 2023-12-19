const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    themeBtn: document.querySelector('.theme-btn'),
    sour: document.querySelector('.sour'),
    sweet: document.querySelector('.sweet'),
    spicy: document.querySelector('.spicy'),
    all: document.querySelector('.all'),
    search: document.querySelector('#search'),
    input: document.querySelector('#input'),
}
function clearfields(){
    DOMSelectors.column.innerHTML="";
}
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
const URLs = `https://digimon-api.vercel.app/api/digimon`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    insertCards(data);
} catch (error) {
    console.log(error, "There was an error 🤓");
    document.querySelector("h1").textContent = "Error 🤓🤓🤓"
}
}
getData(URLs);
async function search(URLs){
    try {
        const response = await fetch(URLs);
        const data = await response.json();
        DOMSelectors.search.addEventListener('click', function() {
            let input = DOMSelectors.input.value;
            let newArr = data.filter((data) => data.name.toLowerCase() === input);
            clearfields();
            if (newArr[length] != 1) {
                insertCards(newArr);
              } else {
                document.querySelector("h1").textContent = "Error 🤓🤓🤓"
              }
        });
    } catch (error) {}
}
search(URLs);