// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//db41fd85
//http://www.omdbapi.com/?apikey=db41fd85&s=${search}
let movie = document.getElementById("movies");
let id;
async function searchMovies(){
    try{
        const search=document.getElementById("search").value;

        const res= await fetch(`http://www.omdbapi.com/?apikey=db41fd85&s=${search}`)

        const data= await res.json();

        const movies =data.Search;

        return movies;
    }
    catch(err){
        console.log("err:",err);
    }
}
function appendM(data){
    movie.innerHTML=null;
    data.forEach(function(el){
        let name = document.createElement('p');
        name.innerText=el.Title;
        let image = document.createElement('img');
        image.src=el.Poster;

        let btn= document.createElement('btn');
        btn.innerText='Book Movie';
        // btn.style.border= '1px solid black';
        btn.style.display='block';
        movie.append(name,image,btn);
        console.log(movies)
    });

}
async function main(){
    let data = await searchMovies();
    if(data==undefined){
        return false;
    }
    appendM(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}
