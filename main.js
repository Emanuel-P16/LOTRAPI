APIKEYLOTR ="JbeNSOlKgmtXkourFWex "
APIURLLOTR ="https://the-one-api.dev/v2/movie"
APIKEYOMDB ="bfe5262b"
APIURLOMBD ="http://www.omdbapi.com/?t=The+Hobbit%3A+An+Unexpected+Journey&apikey=bfe5262b"
//http://www.omdbapi.com/?t=The+Hobbit%3A+An+Unexpected+Journey
//"http://www.omdbapi.com/?apikey=bfe5262b&?t=The+Hobbit%3A+An+Unexpected+Journey"

const movieContainer = document.querySelector(".movieContainer")
const movieList = document.querySelector(".movieList")

async function getMovies(){
    const resp = await fetch(APIURLLOTR,{
        headers:{ 
    'Accept': 'application/json',
    'Authorization': 'Bearer JbeNSOlKgmtXkourFWex ',    
    }
    });
    const respData = await resp.json();
    console.log(respData)
   /*for (let index = 0; index < respData.docs.length; index++) {
       const element = respData.docs[index].name;
       newLi = document.createElement("li")
       newLi.className = "elementList"
       newLi.innerText = element
       movieList.appendChild(newLi) 
       console.log(element)
   }*/
  
   respData.docs.forEach((movie) => {
    //console.log(movie)
    const element = movie.name;
    newLi = document.createElement("li")
    newLi.className = "elementList"
    newLi.innerText = element
    movieList.appendChild(newLi) 
   
   });
    //title.innerHTML = respData.docs[0].name
    return respData
}

async function getImageMovie(){
    const resp = await fetch(APIURLOMBD)
    respData = await resp.json()
    console.log(respData)
    return respData
}
//getMovies()
getImageMovie()
