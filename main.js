APIKEY ="JbeNSOlKgmtXkourFWex "
APIURL ="https://the-one-api.dev/v2/book"
const headers ={
    'Accept': 'application/json',
    'Authorization': 'Bearer' + APIKEY
}

const title = document.querySelector(".title")
async function getBooks(){
    const resp = await fetch(APIURL,{headers: headers});
    const respData = await resp.json();
    console.log(respData)
    console.log(respData.docs[0].name)
    title.innerHTML = respData.docs[0].name
    return respData
}

getBooks()
