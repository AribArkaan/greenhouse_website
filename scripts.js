document.getElementById("learnMoreButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// -----------------
document.getElementById("learnMoreButton2").addEventListener("click", function() {
    document.getElementById("popup2").style.display = "block";
});

document.getElementById("closeButton2").addEventListener("click", function() {
    document.getElementById("popup2").style.display = "none";
});

// -----------------
document.getElementById("learnMoreButton3").addEventListener("click", function() {
    document.getElementById("popup3").style.display = "block";
});

document.getElementById("closeButton3").addEventListener("click", function() {
    document.getElementById("popup3").style.display = "none";
});

// -------------------

document.getElementById("learnMoreButton4").addEventListener("click", function() {
    document.getElementById("popup4").style.display = "block";
});

document.getElementById("closeButton4").addEventListener("click", function() {
    document.getElementById("popup4").style.display = "none";
});


// nav animasi bar 
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
  
          // Optional: Highlight the active link
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav a, .profile-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
  
          // Optional: Highlight the active link
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  });
  



  


