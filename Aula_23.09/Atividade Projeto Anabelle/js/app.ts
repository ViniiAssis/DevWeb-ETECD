const contactForm = document.getElementById('contact-form') as HTMLFormElement;

if (contactForm) {
    contactForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
        alert('Formulário enviado com sucesso!');
    });
}
