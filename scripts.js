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



//----------------------------- 

const popup = document.querySelector('.popup');

// Fungsi untuk menampilkan pop up
function showPopup() {
  popup.classList.add('show');
}

// Panggil fungsi showPopup() ketika kamu ingin menampilkan pop up
showPopup();

document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen yang diperlukan
    var instagramIcon = document.getElementById('instagram-icon');
    var instagramDropdown = instagramIcon.querySelector('.dropdown-content');

    // Fungsi untuk menampilkan dropdown
    function showDropdown() {
        instagramDropdown.style.display = 'block';
        instagramDropdown.style.animation = 'fadeIn 0.3s ease'; // Animasi fadeIn
    }

    // Fungsi untuk menyembunyikan dropdown
    function hideDropdown() {
        instagramDropdown.style.animation = 'fadeOut 0.3s ease'; // Animasi fadeOut
        setTimeout(function () {
            instagramDropdown.style.display = 'none';
        }, 300); // Menunggu animasi selesai sebelum menyembunyikan
    }

    // Event listener untuk menampilkan dropdown saat hover
    instagramIcon.addEventListener('mouseenter', showDropdown);

    // Event listener untuk menyembunyikan dropdown saat tidak dihover
    instagramIcon.addEventListener('mouseleave', hideDropdown);

    // Event listener untuk menyembunyikan dropdown saat link di dalam dropdown diklik
    instagramDropdown.addEventListener('click', hideDropdown);
});


/*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
      social = document.getElementById(socialCard);
  
    toggle.addEventListener("click", () => {
      //If animation class exist = down-animaiton class add
      if (social.classList.contains("animation")) {
        social.classList.add("down-animation");
  
        setTimeout(() => {
          social.classList.remove("down-animation");
        }, 1000);
      }
      //Add the animation to the div tag card__social
      social.classList.toggle("animation");
    });
  };
  
  showSocial("card-toggle", "card-social");
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -5000 &&
        rect.left >= 20 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to play the video when it comes into view
function playVideoOnScroll() {
    const youtubeVideo = document.getElementById('youtubeVideo');

    // Check if the video is in the viewport
    if (isInViewport(youtubeVideo)) {
        // Play the video
        youtubeVideo.src += "&autoplay=1";
        // Remove the scroll event listener once the video is played
        window.removeEventListener('scroll', playVideoOnScroll);
    }
}

// Add a scroll event listener to trigger the playVideoOnScroll function
window.addEventListener('scroll', playVideoOnScroll);