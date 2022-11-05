document.querySelector("#menu-toggle").addEventListener("click",() =>{
    document.querySelector("#nav-menu").classList.toggle("nav-active");
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        document.querySelector("header").style.backgroundColor = "#f4f4f4";
        document.querySelector(".scroll-top").style.bottom = "20px";
    }else{
        document.querySelector("header").style.backgroundColor = "#ffd900Bf";
        document.querySelector(".scroll-top").style.bottom = "-100px";
    }
})

document.querySelector(".scroll-top").addEventListener("click",() =>{
    window.scroll(0,0);
})


document.querySelector("#setting-toggle").addEventListener("click", () => {
    document.querySelector(".setting-box").classList.toggle("setting-box-active")
})

let images = Array.from(document.querySelectorAll(".setting-box img"));

images.map((image) =>{
    image.addEventListener("click", () => {
        images.forEach( (img) => {
            img.style.opacity = "1";
        })
        document.querySelector(".landing-image").src = image.src;
        image.style.opacity = "0.5";
    })
})


const url = {
    apikey : "api_key=67916c97f3b08ff41183b3374dea88c8",
    baseUrl : "https://api.themoviedb.org/3/discover/movie?"
}

const imgUrl = "https://image.tmdb.org/t/p/w500/";


const popularUrl = url.baseUrl + url.apikey + "&language=en-US&sort_by=popularity.desc";

fetchMovie(popularUrl);
function fetchMovie(path){
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data))
}

function showMovie(data){
    let res = data.results;
   
    res.forEach(movie => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
                <div class="img-box">
                    <img src="${imgUrl+movie.poster_path}" alt="">
                </div>
                <div class="detail">
                    <h3>${movie.original_title}</h3>
                    <span>${movie.popularity.toFixed(1)}</span>
                </div>
                <div class="overview">
                    <h5>Overview</h5>
                    <p>
                        ${movie.overview}
                    </p>
                    <p>
                        Publish at <strong>${movie.release_date}</strong>
                    </p>
                </div>
        
        `;
        document.querySelector(".movie-container").appendChild(div);
    })
}