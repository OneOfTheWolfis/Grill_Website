function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "flex"; // Show modal
    modalImage.src = image.src; // Set the modal image to the clicked one
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none"; // Hide modal
}

document.querySelectorAll('.work-image').forEach(image => {
    image.addEventListener('click', function() {
        openModal(image); // Open modal when the image is clicked
    });
});
const menuButton = document.querySelector('.menu-button');
const popUpMenu = document.getElementById('pop-up-menu');
const englishButton = document.getElementById('english-button');
const germanButton = document.getElementById('german-button');

menuButton.addEventListener('click', () => {
    popUpMenu.classList.toggle('open');
});

function changeLanguage(language) {
    const elementsToChange = document.querySelectorAll('[data-en], [data-de]');

    elementsToChange.forEach(element => {
        if (language === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (language === 'de') {
            element.textContent = element.getAttribute('data-de');
        }
    });

    // Also change the text of the menu items
    document.getElementById('link1').textContent = language === 'en' ? 'About Me' : 'Über mich';
    document.getElementById('link2').textContent = language === 'en' ? 'My Work' : 'Meine Arbeit';
    document.getElementById('link3').textContent = language === 'en' ? 'My Socials' : 'Meine sozialen Medien';
    document.getElementById('link4').textContent = language === 'en' ? 'Download Resume' : 'Lebenslauf herunterladen';
}

englishButton.addEventListener('click', () => {
    changeLanguage('en');
});

germanButton.addEventListener('click', () => {
    changeLanguage('de');
});