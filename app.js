const showToggle = document.querySelector('.toggle');

const toggleButton = document.querySelector('.nav-toggle');


toggleButton.addEventListener('click', () => {
    
    (showToggle.classList.contains('links')) ? 
        showToggle.classList.remove('links') :
        showToggle.classList.add('links');
});



