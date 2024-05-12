var currentSlide = 0;

function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var images = document.querySelectorAll(".img");
  
  // Ottieni l'indice dell'immagine cliccata
  currentSlide = Array.from(images).indexOf(imgElement);

  // Mostra la modal
  modal.style.display = "block";

  // Imposta l'immagine corrente nella modal
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

function showSlide(n) {
  var modalImg = document.getElementById("modalImg");
  var images = document.querySelectorAll(".img");

  // Gestisci il cambio di slide se si raggiunge il limite
  if (n < 0) {
    currentSlide = images.length - 1;
  } else if (n >= images.length) {
    currentSlide = 0;
  }

  // Mostra l'immagine corrispondente all'indice corrente
  modalImg.src = images[currentSlide].src;
}
