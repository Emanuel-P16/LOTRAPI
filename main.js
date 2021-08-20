APIKEYLOTR ="JbeNSOlKgmtXkourFWex "
APIURLLORDMOVIES ="https://the-one-api.dev/v2/movie"
APIURLLORDBOOKS ="https://the-one-api.dev/v2/book"
APIURLLORDCHARACTER ="https://the-one-api.dev/v2/character"
APIKEYOMDB ="&apikey=bfe5262b"
APIURLOMBD ="http://www.omdbapi.com/?t="
//http://www.omdbapi.com/?t=The+Hobbit%3A+An+Unexpected+Journey
//"http://www.omdbapi.com/?apikey=bfe5262b&?t=The+Hobbit%3A+An+Unexpected+Journey"

const generalContainer = document.querySelector(".generalContainer")

// if (generalContainer != null) {generalContainer.addEventListener("mouseover",function(event){
//     const moviesContainer = document.querySelector(".moviesContainer")
//     // event.target.parentElement.style.transform = "scale(1.5)"
//     // console.log(event)
// })}
// if (generalContainer != null) {generalContainer.addEventListener("mouseout",function(event){
//     const moviesContainer = document.querySelector(".moviesContainer")
//     // event.target.parentElement.style.transform = "scale(1)"
//     // console.log(event)
// })}
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
    const newDiv = document.createElement("div");
    newDiv.classList.add("movie");
    if (respDataOMBD.Title === undefined)  {
        
    }else {
        render(respDataOMBD,"movies")
    
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
            <div class="${type}Details">
                <span>
                <h3>${objectInfo.name}</h3>
                </span>
            </div>
         </div>
        `

        })
    } else {
        
            
            newContainer.innerHTML = newContainer.innerHTML + `
             <div class=${type}>
             <img src=${object.Poster} alt="">
                <div class="${type}Details">
                     <span>
                    <h3>${object.Title}</h3>
                    <h3>la concha de tu madre allboys</h3>
                   </span>
                </div>
             </div>
            `
    
            
    }
   
    generalContainer.appendChild(newContainer)


}
getMovies()
//getBooks()


