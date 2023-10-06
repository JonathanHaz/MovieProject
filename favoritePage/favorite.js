    //Print Favorites
    document.addEventListener('DOMContentLoaded', () => {
      const movieList = document.getElementById('movie-list');
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
      if (favorites.length === 0) {
        
        movieList.innerHTML += `
          <div class='containerDiv'>
            <img src="../Resources/Pictures/Blank_square.svg.png" alt="">
            <p class="maintitle">No Favorite Movie</p>
            <span>Please add a movie by clicking on the heart</span>
          </div>
        `;
      } else {
        favorites.forEach(movie => {
          movieList.innerHTML += `
            <div class='containerDiv' data-aos="flip-left" data-aos-duration="1000">
                <img src="${movie.img}">
                <p class="maintitle">${movie.title} 
                <i class="far fa-heart heart-icon fas" style="color: red;"></i>
                </p>
                <span>${movie.overview}</span>
                <p class="release-date">${movie.release_date}</p>
            </div>
          `;
        });
      }
    
      document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', removeFavorite);
      });
    });
    
    //Remove Heart
    function removeFavorite(event) {
      const heart = event.target;
      const movieDiv = heart.closest('.containerDiv');
      const movieTitle = movieDiv.querySelector('.maintitle').innerText.trim();
    
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites = favorites.filter(movie => movie.title !== movieTitle);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    
      movieDiv.remove();
    }
    
    //Menu Icon
    function toggleNavLinks() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }