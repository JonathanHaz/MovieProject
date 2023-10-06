//Default
document.querySelector(".movie-details-container").innerHTML = `
<img src="../Resources/Pictures/Blank_square.svg.png" alt="Movie Image" class="movie-image">
<div class="movie-info">
    <h2 class="movie-title">Movie Title</h2>
    <p class="movie-overview">Description:</p>
    <p class="movie-genres"><strong>Genres:</strong></p>
    <p class="movie-actors"><strong>Actors:</strong></p>
    <p class="movie-duration"><strong>Duration:</strong></p>
    <p class="movie-revenue"><strong>Revenue:</strong></p>
    <p class="movie-release-date"><strong>Release Date:</strong></p>
    <iframe src="https://www.youtube-nocookie.com/embed/1?si=4ZJBUdvHa240g8LV" class="trailer" title="Iframe Example"></iframe>
</div> 
`


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJhNmI1MWQ5MmE1MDQzZDQ1OWQ4MjFkMzE4OWJlYyIsInN1YiI6IjY1MTU1YzdjZWE4NGM3MDEwYzExNTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13fQG-JP0iRsb-p2ChSGFTTqFq7TagxIoJjrrRLenyQ'
  }
};

const byID = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJhNmI1MWQ5MmE1MDQzZDQ1OWQ4MjFkMzE4OWJlYyIsInN1YiI6IjY1MTU1YzdjZWE4NGM3MDEwYzExNTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13fQG-JP0iRsb-p2ChSGFTTqFq7TagxIoJjrrRLenyQ'
  }
};

function searchByID() {
  let movieData;

//Movie details
  fetch(`https://api.themoviedb.org/3/movie/${numPage}?language=en-US`, byID)
    .then(response => response.json())
    .then(data => {
      movieData = data;
//Trailer link
      return fetch(`https://api.themoviedb.org/3/movie/${numPage}/videos?language=en-US`, byID);
    })
    .then(response => response.json())
    .then(trailerData => {
      const key = trailerData.results[0].key;
//Cast details
      return fetch(`https://api.themoviedb.org/3/movie/${numPage}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(creditsData => {
          const actorNames = creditsData.cast.slice(0, 3).map(actor => actor.name).join(', ');  // Get the first three actor names

      document.querySelector(".movie-details-container").innerHTML = `
        <img src="http://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="Movie Image" class="movie-image">
        <div class="movie-info">
            <h2 class="movie-title">${movieData.title}</h2>
            <p class="movie-overview">${movieData.overview}</p>
            <p class="movie-genres"><strong>Genres: ${movieData.genres.map(genre => genre.name).join(', ')}</strong></p>
            <p class="movie-actors"><strong>Actors: ${actorNames}</strong></p>
            <p class="movie-duration"><strong>Duration: ${movieData.runtime} minutes</strong></p>
            <p class="movie-revenue"><strong>Revenue: $${movieData.revenue.toLocaleString()}</strong></p>
            <p class="movie-release-date"><strong>Release Date: ${movieData.release_date}</strong></p>
             <iframe src="https://www.youtube-nocookie.com/embed/${key}?si=4ZJBUdvHa240g8LV" class="trailer"  title="Iframe Example"></iframe>
        </div>
      `;
    });
  })
    .catch(error => {
      console.error("There was an error:", error);
    });
}


//Search
let numPage = 2

document.getElementById('btn').addEventListener("click", (e)=>{
  e.preventDefault
  numPage = document.getElementById('search').value
  searchByID()
})

//Menu Icon
function toggleNavLinks() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
