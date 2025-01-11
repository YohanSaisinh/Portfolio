// Ajoute un effet de survol aux liens
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#e74c3c';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '#f39c12';
    });
});

// Animation des cartes projets
document.querySelectorAll('.projet').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
