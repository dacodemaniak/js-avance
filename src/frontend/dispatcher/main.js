// Point d'entrée principal de l'application
import './style.scss';

console.log('Application JS Avancé initialisée');

// Fonction pour manipuler le DOM
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    if (app) {
        // Exemple d'utilisation des fonctions modernes de JS
        const features = ['ES2024', 'Programmation Orientée Objet', 'Modules', 'Web Components'];
        
        features.forEach(feature => {
            const element = document.createElement('div');
            element.classList.add('feature');
            element.textContent = feature;
            app.querySelector('.content').appendChild(element);
        });
    }
});
