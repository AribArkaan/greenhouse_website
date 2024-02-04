const popup = document.querySelector('.popup');

function showPopup() {
  popup.classList.add('show');
}

function hidePopup() {
  popup.classList.remove('show');
}

// Add event listeners to show/hide the popup as needed
// (e.g., button clicks, form submissions, or other triggers)
const showButton = document.getElementById('popup'); // Replace with your actual button ID
showButton.addEventListener('click', showPopup);

// Or, for hiding based on clicking outside the popup:
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    hidePopup();
  }
});


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
    const navLinks = document.querySelectorAll('.nav a, learn-more');
  
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
    const navLinks = document.querySelectorAll('.nav a, .button');
  
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
  

  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Menambah nol di depan angka jika angka < 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerText = timeString;

    setTimeout(updateClock, 1000); // Memanggil fungsi setiap detik
  }

  // Panggil fungsi pertama kali
  updateClock();

  



