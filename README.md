# MINI-PROJET-WEB
## Introduction

Voici le readme du mini-projet qui a consisté à créer une interface permettant de générer dynamiquement un **un tableau de besoins journaliers en protéines** en fonction de différents paramètres choisis par l'utilisateur notamment : 

1. **Sélectionner un ou plusieurs objectifs** parmi ceux proposés
2. **Définir un poids minimum** (en kg)
3. **Définir un poids maximum** (en kg)
4. **Choisir le nombre de lignes** à afficher entre le poids minimum et le poids maximum

## Mode d'emploi
Après avoir cloner le projet sur <a href="https://github.com/yoann-rabahi-bdml2-devWeb/mini-projet-web.git">le repo de l'organisation</a> :

- Vous placez dans <span style="color:red">"./MINI-PROJET/mini-projet-app"</span>
- Démarrer le serveur avec la commande : `npm run dev`

## dépendances
### package.json

```json
{
  "name": "mini-projet-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    ....
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    ...
  }
}
```
### node + npm
```bash
node -v  # v20.18.0
npm -v   # 11.5.2
```

## Arborescence du src (avec FileTree)
```txt
src
 ┣ assets
 ┃ ┗ react.svg
 ┣ components
 ┃ ┣ Header
 ┃ ┃ ┣ Header.css
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ ProteinForm
 ┃ ┃ ┣ ProteinForm.css
 ┃ ┃ ┗ ProteinForm.tsx
 ┃ ┗ ProteinTable
 ┃ ┃ ┣ ProteinTable.css
 ┃ ┃ ┗ ProteinTable.tsx
 ┣ data
 ┃ ┗ Objectives.tsx
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┗ main.tsx
```