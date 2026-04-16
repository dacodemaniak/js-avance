# JS-Avancé

Application pure JS de démonstration des possibilités avancées de JS.


## Objectifs

- Découvrir les dernières évolutions de Javascript
- Manipuler les fonctions avancées de Javascript (le code, le modèle objet, les modules, les
itérations, etc.)
- Maîtriser la syntaxe moderne
- Sécuriser son site
- Choisir la version la plus adaptée à son besoin

# Programme

## Découvrir les dernières évolutions de JS et choisir la version la plus adaptée à vos besoins

- Principes et nouveautés de ES2024
    - Syntaxes de bases d'écriture du langage
    - Mots-clés (let, const)
    - Fonctions
    - Les fonctions fléchées
    - Les fonctions de manipulation de données : map, filter, forEach…
    - La programmation orientée objet
    - Définition des classes
    - L'opérateur new
    - Modification d'un objet : getter / setter
- Autres nouveautés et rétrocompatibilité (compiliers, polyfills)

> TP : Création d'une page HTML avec une feuille de style CSS ou SCSS. Le JS permettra de traverser le DOM pour opérer des ajouts de contenus, modifications de présentation.

## Maîtriser la syntaxe moderne

- Gestionnaires de builds et dépendances
    - npm et npm install
    - Le cycle de vie de npm
    - Utilisation des scripts npm
- Les outils de haut niveau : Vite / Webpack / Babel
- Les outils de debogage

> Intialiser un projet avec npm, configurer .gitignore, ajouter des dépendances et formaliser les scripts de lancement du projet. Créer un premier module et utiliser le debugger Chrome pour tracer l'exécution.

## Manipuler les fonctions avancées de JS (code, OO Model, Modules, Itérations...)

- Principes et nouveautés de ES2024
    - Syntaxes de bases d'écriture du langage
        - Mots-clés (let, const)
        - Fonctions
        - Les fonctions fléchées
        - Les fonctions de manipulation de données : map, filter, forEach…
    - La programmation orientée objet
        - Définition des classes
        - L'opérateur new
        - Modification d'un objet : getter / setter
        - Héritage
        - Rétrocompatibilité
        - Table des compatibilités
        - Polyfills
        - Compilateurs
> Création d'une hiérarchie de classes structurelles organisées en couches (Repository / Model / Service / Controller)

## Utiliser les API de haut niveau

- Les technologies de rendu côté client
    - Graphisme avec Canvas
    - La 3D avec WebGL et js
    - La dataviz avec JS
- Le traitement de données côté Client
    - Le stockage local : SessionStorage, LocalStorage, IndexedDB
    - Les traitements en arrière-plan : Web Workers, Service Workers

> Exemple de travaux pratiques : le formateur utilise l'API Three.JS pour afficher un modèle 3D simple, ou un modèle plus complexe issu d'un logiciel de modélisation 3D comme Blender. Les participants réalisent une page HTML qui intègre une technologie de rendu avancée (3D ou datavisualisation)

## Mettre en pratique la POO avec les Web Components

- La notion de SPA (Single Page Application)
- Les problématiques de structure des applications HTML modernes avec les SPA
- L'utilisation de l'API Custom Elements pour créer des composants réutilisables

> le formateur utilise l'API DOM Custom Elements pour un composant simple (par exemple un composant pour l'affichage de données météo). Le composant peut être réutilisé (par exemple afficher les prévisions météo sur une semaine avec 5 à 7 occurrences du composant). Les participants réalisent une nouvelle page HTML ou complètent leur page précédente en intégrant des composants.

## Mettre en oeuvre la librairie JQuery

- Les limites du Javascript natif
- Identifier et utiliser les librairies utiles
- Identifier le rôle des principaux frameworks

> Installation de la librairie JQuery et reprendre à l'aide de la librairie les exemples réalisés lors de la première étape.

## Appréhender la notion de JS côté serveur avec NodeJS

- Introduction à NodeJS
- L'environnement NodeJS (express, ...)
- Le temps réel avec les websockets et la librairie io

> Initialiser un projet NodeJS avec Express et Socket.IO. Réaliser une interaction temps réel avec la Dataviz du module précédent pour animer la production de tableaux de bord.