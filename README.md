# CulDerja — Landing Page Vue 3

Landing page responsive réalisée avec Vue 3 et Vite, à partir de la palette et des captures d'écran fournies pour l'application CulDerja.

## Identité visuelle
- Bleu principal : `#1E5F89`
- Terracotta : `#BB704D`
- Accent doré : `#E9B348`
- Typographie : Nunito Sans, avec Noto Sans Arabic pour les éléments en arabe

## Lancer le projet

Prérequis : Node.js 20 ou une version LTS récente.

```bash
npm install
npm run dev
```

Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

Les captures de l'application utilisées dans les aperçus se trouvent dans `public/images/`. Remplace-les par des captures individuelles en meilleure résolution si tu en disposes.

## Personnalisation
- Les sections et le contenu se trouvent dans `src/App.vue`.
- Les couleurs, espacements et règles responsive se trouvent dans `src/styles.css`.
- Le lien « Découvrir l’application » est actuellement un lien de navigation interne. Remplace `href="#decouvrir"` par l'URL de publication de l'application quand elle sera disponible.
