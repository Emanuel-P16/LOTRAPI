APIKEYLOTR ="JbeNSOlKgmtXkourFWex "
APIURLLORDMOVIES ="https://the-one-api.dev/v2/movie"
APIURLLORDBOOKS ="https://the-one-api.dev/v2/book"
APIURLLORDCHARACTER ="https://the-one-api.dev/v2/character"
APIKEYOMDB ="&apikey=bfe5262b"
APIURLOMBD ="http://www.omdbapi.com/?t="
//http://www.omdbapi.com/?t=The+Hobbit%3A+An+Unexpected+Journey
//"http://www.omdbapi.com/?apikey=bfe5262b&?t=The+Hobbit%3A+An+Unexpected+Journey"
const movieContainer = document.querySelector(".movieContainer")
const generalContainer = document.querySelector(".generalContainer")
async function getMovies(){
    const resp = await fetch(APIURLLORDMOVIES
    ,{
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
        render(respDataOMBD,"movies")
    /*newDiv.innerHTML = ` 
    
    <img src=${respDataOMBD.Poster} alt="">
    <div class="movieDetails">
        <h3>${respDataOMBD.Title}</h3>
        <span>${respDataOMBD.Metascore}</span>
        `
        //movieContainer.appendChild(newDiv)
        movieContainer.appendChild(newDiv)*/
    }
}
async function getBooks(){
  
    const resp = await fetch(APIURLLORDBOOKS
        ,{
            headers:{ 
        'Accept': 'application/json',
        'Authorization': 'Bearer JbeNSOlKgmtXkourFWex ',    
        }
        });
        const respData = await resp.json();
        render(respData,"books");
}
// crear funcion de renderizado para no tener tanto codigo basura
// crear un slider para cada "seccion" 
// al realizar un HOVER que aparezcan los datos tecnicos de cada elemento hovereado
//getMovies()
async function render(object,type){
    let imageSource = "https://images-na.ssl-images-amazon.com/images/I/91rq1j7GYhL.jpg"
    newContainer = document.createElement("div");
    newContainer.classList.add(`${type}`+"Container");
   if (type === "books") {
        object.docs.forEach((objectInfo) =>{
        
        newContainer.innerHTML = newContainer.innerHTML + `
         <div class=${type}>
         <img src=${imageSource} alt="">
            <div class="${type}details"
                <h3>${objectInfo.name}</h3>
                <span></span>
            </div>
         </div>
        `

        })
    } else {
        
            console.log(object)
            newContainer.innerHTML = newContainer.innerHTML + `
             <div class=${type}>
             <img src=${object.Poster} alt="">
                <div class="${type}details"
                    <h3>${object.Title}</h3>
                    <span></span>
                </div>
             </div>
            `
    
            
    }
   
    generalContainer.appendChild(newContainer)


}
getMovies()
//getBooks()


