// script.js
const chatButton = document.querySelector('.chat-button');

chatButton.addEventListener('click', () => {
  // Votre code pour ouvrir la fenêtre de chat
  console.log('Bouton de chat cliqué');
});

// script pour limage
// Fonction pour ouvrir le modal et afficher l'image
function openModal(imageSrc) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImage');
  
  modalImg.src = imageSrc;
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

// Fonction pour fermer le modal
function closeModal() {
  var modal = document.getElementById('myModal');
  
  modal.classList.add('hide');
  setTimeout(function() {
      modal.classList.remove('show', 'hide');
      modal.classList.add('hidden');
  }, 300); // Assurez-vous que cela correspond à la durée de l'animation
}





// SCRIP POUR NAVBR

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');  // Toggle visibility of the mobile menu
    });

    // JavaScript pour activer le lien en fonction de la page
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll("#menu a");

  menuItems.forEach(item => {
    if (item.getAttribute("href") === currentLocation) {
      item.classList.add("active");
    }
  });
});


//  JavaScript to toggle the mobile menu 

  // Toggle menu for small screens
  const menuBtn = document.getElementById('menu-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });






  