let NavBar = document.getElementById('navigation');
let toggleButton = document.getElementById('toggleButton');



toggleButton.addEventListener('click' , function() {
   NavBar.classList.toggle('active')
})