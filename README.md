# Vue 3 + Vite + Tailwind

Développement de la partie frontend d'une application de type e-commerce avec Vuejs. Cet exercice est réalisé afin de développer mes compétences sur ce framework ainsi que me familiariser avec Tailwind, framework css puissant, moderne et flexible.

## Objectifs généraux

- ✅ Construction de la maquette sur Figma
	- [Accessible ici](https://www.figma.com/file/oDbFGk4bk9xg2QZ3MNLtRg/Vuejs-shop-entrainement?node-id=0%3A1)
- ✅ Initialisation de l'application
- ✅ Définition de la structure globale des fichiers et configuration des libraires
- Définition de toutes les routes
- Création des components et views
- Construction de la logique des composants
- Configuration du theme Tailwind
- Stylisation avec Tailwind (avec responsive)
- Gérer les états avec VueX


## Objectifs de l'app

- Récupération des produits depuis un fichier JSON
- Ajouter en favori des produits (en session storage)
- Ajouter au panier (en session storage)
- Panier interactif et fonctionnel
- Plusieurs page avec Vue-router
	- Accueil: "/"
	- Compte: "/account"
	- Produit: "/produit/:id"
- Possibilité de trier par catégorie sur la page d'accueil
- Possibilité de chercher un produit par son nom (search)

## La stack
[Vue 3](https://v3.vuejs.org/) + [Vuex](https://vuex.vuejs.org/) + [Vue-Router](https://router.vuejs.org/) + [Vite](https://vitejs.dev/) + [Tailwind](https://tailwindcss.com/docs/guides/vite)

## Installer le projet

1. Clone this repository

2. Change into the project's directory
    ```
    cd /path/to/repository
    ```
3. Install the dependencies
    ```
    npm install
    ```
4. Lauch the vite server
    ```
   vite
    ```