"use strict";
const Psicólogos = [
    { name: 'Dr. João Silva', specialization: 'Psicologia Clínica', description: 'Especializado em terapia cognitivo-comportamental.' },
    { name: 'Dra. Maria Souza', specialization: 'Psicanálise', description: 'Experiência em tratamento de transtornos de ansiedade.' },
];
const psicólogosList = document.getElementById('psychologist-list');
if (psicólogosList) {
    Psicólogos.forEach(psych => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${psych.name}</h2><p><strong>${psych.specialization}</strong></p><p>${psych.description}</p>`;
        psicólogosList.appendChild(div);
    });
}
