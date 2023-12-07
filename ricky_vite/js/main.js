const URLs = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    data.data.forEach((data)=> console.log(data.name));
    document.querySelector("h1").textContent = data.data;
    const array = data.data
    console.log(array)
    function insertCards(arr){
        arr.data.forEach((data) => {
            DOMSelectors.column.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                    <h3 class = "name">${data.name}</h3>
                    <img src="${data.img}" class="img">
                    <h4>Price: ${data.price}</h4> 
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
