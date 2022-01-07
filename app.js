console.log("Let's get this party started!");

let gifForm = document.querySelector("#gifRequest");
let body = document.querySelector("body");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function addGif(response) {
    let randomIdx = getRandomInt(response.data.length); 
    let newDiv = document.createElement("div"); 
    let img = document.createElement("img");
    let imgSrc = response.data[randomIdx].images.original.url; 
    img.src = imgSrc; 
    newDiv.appendChild(img);  

     //add remove button
     let newButton = document.createElement("button"); 
     newButton.innerText = "remove gif"; 
     newDiv.appendChild(newButton);
     
     body.appendChild(newDiv); 
     
    }

gifForm.addEventListener("submit", async function(e){
    e.preventDefault(); 

    let searchTerm = document.querySelector("#searchTerm").value; 

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });

   
    addGif(response.data); 
    })
    
    body.addEventListener("click", function(evt) {
        if(evt.target.tagName === "BUTTON") {
            evt.target.parentElement.remove(); 
        }
    })