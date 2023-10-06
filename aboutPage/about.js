document.getElementById('container').innerHTML = `
<h1>About Me</h1>
<p data-aos="fade-left" data-aos-delay="400">I'm Jonathan, a Passionate Fullstack Developer, Currently studying at IITC College</p>

<h2>Background🌍</h2>
<p data-aos="fade-left" data-aos-delay="400">I was born in Paris. From a young age, I loved video games and sci-fi movies,<br> which definitely strengthen my passion for development in my later years.</p>
<p data-aos="fade-left" data-aos-delay="400">When I was 5, in 2005, my family and I relocated to Israel, settling in Ashkelon, where we have lived ever since.</p>
<p data-aos="fade-left" data-aos-delay="400">After completing high school, I enlisted in the army, serving in the Golani Brigade as a combat medic,<br> and even got a Certificate of Excellence.</p>
<p data-aos="fade-left" data-aos-delay="400">Once I finished my military service, I took on the role of a trip guard/medic for organizations like Birthright.<br> I also traveled to the US for a month, an amazing experience that significantly honed my English skills.</p>

<h2>My Skills💡</h2>
<ul class="skills">
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>

</ul>

<h2>My Hobbies🎨</h2>
<ul class="hobbies">
<li>Video Games</li>
<li>Cooking</li>
<li>Hiking</li>
    <li>Programming</li>
    </ul>
    
    <h2>Military Service</h2>
    <ul class="military">
    <li><strong>Profession:</strong> Combat Medic</li>
    <li><strong>Unit:</strong> Golani 12🔰</li>
    <li><strong>Service Years:</strong> 2018 - 2021</li>
    </ul>
    <img src="../Resources/Pictures/profilepic-removebg-preview.png" alt="Jonathan's Image" id="profile-pic" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
    <img id="hexagon" src="../Resources/Pictures/—Pngtree—cool hexagon glitch border frame_5991312.png" alt="hexagon" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
    
    <div  style="text-align: center;">
    <h2>Contact Me <i class="fa-solid fa-link"></i></h2>
    <a href="www.linkedin.com/in/jonathanhaz" target="_blank">
    <img src="../Resources/Pictures/linkedin.png" alt="LinkedIn Logo" width="30">
    </a>
    <a href = "mailto: yonatanhazan1337@gmail.com">
    <img src="../Resources/Pictures/gmail.png" alt="Twitter Logo" width="30">
    </a>
    <a href="https://github.com/JonathanHaz" target="_blank">
    <img src="../Resources/Pictures/gith.png" alt="GitHub Logo" width="30">
    </a>
    </div>
    </div>
    `
    function toggleNavLinks() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      }