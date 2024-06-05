// console.log()
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });

    // Dynamic content creation example
    if (document.getElementById('project-list')) {
        const projects
