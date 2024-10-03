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
