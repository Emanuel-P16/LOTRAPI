APIKEYLOTR ="JbeNSOlKgmtXkourFWex "
APIURLLOTR ="https://the-one-api.dev/v2/movie"
APIKEYOMDB ="&apikey=bfe5262b"
APIURLOMBD ="https://www.omdbapi.com/?t="
//http://www.omdbapi.com/?t=The+Hobbit%3A+An+Unexpected+Journey
//"http://www.omdbapi.com/?apikey=bfe5262b&?t=The+Hobbit%3A+An+Unexpected+Journey"
const movieContainer = document.querySelector(".movieContainer")

async function getMovies(){
    const resp = await fetch(APIURLLOTR,{
        headers:{ 
    'Accept': 'application/json',
    'Authorization': 'Bearer JbeNSOlKgmtXkourFWex ',    
    }
    });
    const respData = await resp.json();
    respData.docs.forEach((movie) => {
    const element = movie.name;
    getImageMovie(element)
    //console.log(respDataOMBD)
  
   });
  
}

async function getImageMovie(element){
    let searchInput = element
    const resp = await fetch(`${APIURLOMBD}${searchInput}${APIKEYOMDB}`)
    respDataOMBD = await resp.json()
   //console.log(respDataOMBD)
    const newDiv = document.createElement("div");
    newDiv.classList.add("movie");
    //console.log(respDataOMBD.Title)
    if (respDataOMBD.Title === undefined)  {
        console.log("llegue acá")
    }else {
    newDiv.innerHTML = ` 
    
    <img src=${respDataOMBD.Poster} alt="">
    <div class="movieDetails">
        <h3>${respDataOMBD.Title}</h3>
        <span>${respDataOMBD.Metascore}</span>
        `
        //movieContainer.appendChild(newDiv)
        movieContainer.appendChild(newDiv)
    }
}
getMovies()


