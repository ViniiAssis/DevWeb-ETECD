"use strict";
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
        alert('Formulário enviado com sucesso!');
    });
}
