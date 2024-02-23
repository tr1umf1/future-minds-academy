const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist")

loadGernes();
loadMovies();

function loadGernes() {
    let buildGernes="";
0
    for(i=0; i<allMovies.length; i++){
    buildGernes += '<option value="'+ i +'">'+ allMovies[i].gerne +'</option>';
    }
    movieGernes.innerHTML = buildGernes;
}

function loadMovies(index) {
    let buildLi ="";
    let movieGerne = allMovies[index].movies;

    for (let i = 0; i < movieGerne.length; i++) {
        buildLi = '<li>';
        buildLi += '<li class="selected-movie">';
        buildLi += '<h4>' + movieGerne[i].title + '</h4>';
        buildLi += '<img src="assets/img' + movieGerne[i].thumb + '" alt="' + movieGerne[i].title + '">';
        buildLi += '<p class="description">' + movieGerne[i].desc + '</p>';
        buildLi += '<div class="row movie-stats m0 p0">';
        buildLi += '<div class="col m0 p0">Date: <span>' + movieGerne[i].date + '</span> </div>';
        buildLi += '<div class="col m0 p0">Length: <span>' + movieGerne[i].length + '</span> </div>';
        buildLi += '</div>';
        buildLi += '</li>';
    }
    movielist.innerHTML = buildLi;
    movielist.childNodes[0].classList.add_("selected-movie");
}