
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    

const movieDisplay = document.querySelector(".movies");
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector("#search-btn");


searchBtn.addEventListener("click", ()=>{
    const query = searchInput.value;
    console.log(query);
})

const getMovies = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
       showMovies(data.results);
   
};


const showMovies = (data) =>{
    movieDisplay.innerHTML = "";
data.forEach((item) =>{
const box = document.createElement("div");
box.classList.add(".box")
box.innerHTML = `
<img src="${IMGPATH + item.poster_path}" >
            <h1>${item.original_title}</h1>
           
`;
box.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
box.style.borderRadius = "8px";
box.style.width = "28%";
box.style.height = "340px";

const img = box.querySelector("img");
img.style.width = "100%";
img.style.height = "70%";
img.style.borderRadius = "8px";

movieDisplay.appendChild(box);
})
}
searchInput.addEventListener("keyup", function(event){
    if (event.target.value !== ""){
getMovies(SEARCHAPI +  event.target.value)
    }
    else{
        getMovies(APIURL); 
    }
})

getMovies(APIURL);
