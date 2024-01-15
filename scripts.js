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


