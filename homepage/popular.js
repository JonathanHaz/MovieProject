const Day = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJhNmI1MWQ5MmE1MDQzZDQ1OWQ4MjFkMzE4OWJlYyIsInN1YiI6IjY1MTU1YzdjZWE4NGM3MDEwYzExNTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13fQG-JP0iRsb-p2ChSGFTTqFq7TagxIoJjrrRLenyQ'
  }
};
//Print Top Movies of the Day
function topDayMovie() {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${numPage}`, Day)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        const movies = data.results[i];
        const movieTitle = movies.title;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(movie => movie.title === movieTitle);

        document.getElementById("movie-list").innerHTML += `
          <div class='containerDiv' data-aos="flip-left" data-aos-duration="1000">
            <img src="http://image.tmdb.org/t/p/w500${movies.poster_path}">
            <p class="maintitle">${movies.title} 
            <i class="far fa-heart heart-icon ${isFavorite ? 'fas' : 'far'}" style="color: ${isFavorite ? 'red' : ''}"></i>
           </p>
           <span>${movies.overview}</span>
           <p class="release-date">${movies.release_date}</p>
          </div>
        `;
      }

      document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', toggleHeartColor);
      });
    });
}

const Week = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJhNmI1MWQ5MmE1MDQzZDQ1OWQ4MjFkMzE4OWJlYyIsInN1YiI6IjY1MTU1YzdjZWE4NGM3MDEwYzExNTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13fQG-JP0iRsb-p2ChSGFTTqFq7TagxIoJjrrRLenyQ'
  }
};
//Print Top Movies Of the Week
function topWeeklyMovie() {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${numPage}`, Week)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        const movies = data.results[i];
        const movieTitle = movies.title;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(movie => movie.title === movieTitle);

        document.getElementById("movie-list").innerHTML += `
          <div class='containerDiv' data-aos="flip-left" data-aos-duration="1000">
            <img src="http://image.tmdb.org/t/p/w500${movies.poster_path}">
            <p class="maintitle">${movies.title} 
            <i class="far fa-heart heart-icon ${isFavorite ? 'fas' : 'far'}" style="color: ${isFavorite ? 'red' : ''}"></i>
           </p>
            <span>${movies.overview}</span>
            <p class="release-date">${movies.release_date}</p>
          </div>
        `;
      }

      document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', toggleHeartColor);
      });
    });
}

//Select Day or Week
function ChangeSelctedMovie() {
  document.getElementById("movie-list").innerHTML = ''
  if (document.getElementById("select").value == "day") {
    topDayMovie()
  } else if (document.getElementById("select").value == "week") {
    topWeeklyMovie()
  }
}

document.getElementById("select").addEventListener("change", ChangeSelctedMovie)

//Previous and Next Buttons
let numPage = 1
document.getElementById("next").addEventListener("click", function() {
  if (numPage < 5) {
    numPage++;
    ChangeSelctedMovie();
  }
});

document.getElementById("previous").addEventListener("click", function() {
  if (numPage > 1) {
    numPage--;
    ChangeSelctedMovie();
  }
});

//Print 1-5 Buttons
function generatePageNumbers() {
  const pageNumbersDiv = document.getElementById("page-numbers");

  pageNumbersDiv.innerHTML = "";

  const totalPages = 5;

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("a");
    pageNumber.classList.add("page-number");
    pageNumber.textContent = i;
    pageNumber.addEventListener("click", function () {
      numPage = i;
      ChangeSelctedMovie();
    });
    pageNumbersDiv.appendChild(pageNumber);
  }
}
generatePageNumbers();

//Add To Favorite
function toggleHeartColor(event) {
  let heart = event.target;

  const movieDiv = heart.closest('.containerDiv');
  const movieTitle = movieDiv.querySelector('.maintitle').innerText.trim();
  const movieImg = movieDiv.querySelector('img').src;
  const movieOverview = movieDiv.querySelector('span').innerText.trim();
  const movieReleaseDate = movieDiv.querySelector('.release-date').innerText.trim();

  if (!heart.classList.contains('heart-icon')) {
    heart = heart.closest('.heart-icon');
  }

  if (heart.classList.contains('far')) {
    heart.classList.remove('far');
    heart.classList.add('fas');
    heart.style.color = 'red';

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({
      title: movieTitle,
      img: movieImg,
      overview: movieOverview,
      release_date: movieReleaseDate,
    });
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } else {
    heart.classList.remove('fas');
    heart.classList.add('far');
    heart.style.color = '';

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(movie => movie.title !== movieTitle);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

