const searchField = document.getElementById("search");
const gifField = document.querySelector("#holder");
const moreButton = document.getElementsByClassName("hidden")[0]
let gifForm = document.querySelector("form");
const body = document.querySelector("form");

var currPage = 0;
var offset = 0;
//Global constants
const apiKey = "zI5sqa9TYOwHYKw5vGj43IK8SbxHOLUD";
const limit = 9;
const rating = "g";
let q = "puppy";



gifForm.addEventListener("submit", async (evt) =>{

    evt.preventDefault();
    gifField.innerHTML = `<div id="holder">
    </div>
    `
    let word = evt.target.search.value;
    console.log("evt.target.search.value = ", word);

    let apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${word}&limit=${limit}&offset=${offset}&rating=${rating}`;
    console.log(apiUrl);

    try{

        let response = await fetch(apiUrl);
        console.log("response is: ", response);
        let responseData = await response.json();
        console.log("responseData is: ", responseData);
        displayResults(responseData);
        document.getElementById("search").value = "";
    } catch(e){
        console.log(e);
    }




});

function displayResults(respData){
    respData.data.forEach(elem => {
        gifField.innerHTML += `
       
        <img src=${elem.images.original.url} >
        
 
        `

    })

}

//moreButton.addEventListener("click", () =>{

//})
