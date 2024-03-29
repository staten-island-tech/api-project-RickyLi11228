const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    search: document.querySelector('#search'),
    input: document.querySelector('#input'),
    search2: document.querySelector('#search2'),
    input2: document.querySelector('#input2'),
    intraining: document.querySelector('#intraining'),
    training: document.querySelector('#training'),
    rookie: document.querySelector('#rookie'),
    champion: document.querySelector('#champion'),
    ultimate: document.querySelector('#ultimate'),
    fresh: document.querySelector('#fresh'),
    mega: document.querySelector('#mega'),
    armor: document.querySelector('#armor'),
    all: document.querySelector('#all'),
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
                <img src="${card.img}" class="img" alt="${card.name} Picture">
                <h4>Level: ${card.level}</h4> 
            </div>`
        )
    });
}
function error(){
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<h1>NO DIGIONS FOUND</h1>`
        )
        };

const URLs = `https://digimon-api.vercel.app/api/digimon`;
async function getData(URLs) {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    insertCards(data);
        let buttons = document.querySelectorAll('.btn');
        buttons.forEach((btn) => btn.addEventListener('click', function (event) {
        event.preventDefault();
        clearfields();
        let type = btn.textContent.toLowerCase();
        let newArr = data.filter((data) => data.level.toLowerCase() === type);
        data.forEach((data)=>console.log(data.level))
        insertCards(newArr);
      })
    );
    DOMSelectors.all.addEventListener('click', function() {
        insertCards(data);
    });
}
getData(URLs);
async function search(URLs){
        const response = await fetch(URLs);
        const data = await response.json();
        DOMSelectors.search.addEventListener('click', function() {
            let input = DOMSelectors.input.value;
            let newArr = data.filter((data) => data.name.toLowerCase().includes(input));
            clearfields();
            if (newArr.length != 0) {
                insertCards(newArr);
                console.log(newArr);
              } else {
                error();
              }
        });
        DOMSelectors.search2.addEventListener('click', function() {
            let input2 = DOMSelectors.input2.value;
            let newArr = data.filter((data) => data.level.toLowerCase().includes(input2));
            clearfields();
            if (newArr.length != 0) {
                insertCards(newArr);
              } else {
                error();
              }
        });
}
search(URLs);
