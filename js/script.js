var savol = document.querySelector('#ask-question');
var overlay = document.querySelector('#overlay');
var modalwindow = document.querySelector('#modal');
var closex = document.querySelector('.xxx');


savol.addEventListener('click', function() {
  overlay.classList.toggle('visible')
  modalwindow.classList.toggle('opened')
  closex.classList.toggle('opened')
  
  
});


overlay.addEventListener('click', function() {
  // overlay.classList.remove('visible');
  
});

closex.addEventListener('click', function() {
  modalwindow.classList.remove('opened')
  overlay.classList.remove('visible')
});



