//Navbar Scroll
if (window.innerWidth > 1000) { 
    document.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 80) {
        navbar.style.backgroundColor = 'rgba(122, 9, 60, 0.4)';
      } else {
        navbar.style.backgroundColor = 'rgba(122, 9, 60, 0.7)';
      }
    });
  }
  
//Menu Icon
  function toggleNavLinks() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  