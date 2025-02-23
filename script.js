document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('nav button');
    const navUl = document.querySelector('nav ul');

    menuButton.addEventListener('click', () => {
        navUl.classList.toggle('hidden');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! To make this work fully, someone needs to set up the backend.');
    });
});