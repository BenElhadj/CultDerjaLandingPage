<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const assetBase = import.meta.env.BASE_URL
const faqs = [
  { q: 'CultDerja, c’est quoi ?', a: 'CultDerja est une application pour apprendre à parler l’arabe tunisien à travers des dialogues, des situations de la vie quotidienne et des contenus qui font découvrir la culture tunisienne.' },
  { q: 'Faut-il déjà parler arabe ?', a: 'Non. Tu peux commencer progressivement, découvrir les mots et expressions essentiels, écouter leur prononciation et apprendre à construire tes premières phrases.' },
  { q: 'Est-ce que je peux apprendre à mon rythme ?', a: 'Oui. Tu avances à ton rythme grâce au parcours guidé, aux exercices, au dictionnaire et aux révisions. L’objectif est de gagner en confiance pour échanger naturellement.' }
]
const openFaq = ref(0)
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#accueil" aria-label="CultDerja, accueil">
        <img class="brand-logo" :src="`${assetBase}images/logo.webp`" alt="" aria-hidden="true">
        <img class="brand-wordmark" :src="`${assetBase}images/cultderja.webp`" alt="CultDerja">
      </a>
      <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Ouvrir le menu">☰</button>
      <nav :class="['nav-links', { opened: menuOpen }]" aria-label="Navigation principale">
        <a href="#experience" @click="menuOpen = false">Pourquoi CultDerja ?</a>
        <a href="#concept" @click="menuOpen = false">Le Concept</a>
        <a href="#ancrage" @click="menuOpen = false">L’Ancrage culturel</a>
        <a href="#faq" @click="menuOpen = false">FAQ</a>
        <a class="nav-cta" href="https://cultderja-apprendre-le-tunisien.ai.studio" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">Découvrir l’application<span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-copy">
          <h1>Apprends à parler<br>tunisien <span>comme<br>elle se vit.</span></h1>
          <p class="hero-lead">Apprends à parler tunisien à travers des dialogues inspirés de la vraie vie. Découvre les expressions, les habitudes et les codes culturels pour mieux comprendre tes proches et prendre part aux conversations.</p>
          <div class="hero-actions"><a class="button button-primary" href="#decouvrir">Découvrir l’application</a></div>
        </div>
        <div class="hero-visual" aria-label="Aperçu de l’application CultDerja">
          <div class="sun-disc"></div><div class="ornament ornament-one">✳</div><div class="ornament ornament-two">✳</div>
          <div class="floating-tag tag-top"><span class="tag-icon"><img :src="`${assetBase}images/logo.webp`" alt="" aria-hidden="true"></span><span><b>Sortie prochaine</b><small>sur iOS & Android</small></span></div>
          <div class="phone phone-back"><img :src="`${assetBase}images/acceuil.webp`" alt="Écran d'accueil de CultDerja"></div>
          <div class="hero-lamma"><img :src="`${assetBase}images/lamma.webp`" alt="Scène de la vie quotidienne tunisienne dans CultDerja"></div>
        </div>
      </section>

      <section id="experience" class="experience section-wrap">
        <div class="section-title"><span></span><strong>Pourquoi CultDerja ?</strong><span></span></div>
        <div class="experience-layout">
          <div class="section-heading">
            <div><h2>Pour profiter des<br>moments qui comptent</h2></div>
            <p>Les histoires de famille, les petites blagues, les discussions autour d’un repas… Apprends l’arabe tunisien avec CultDerja pour partager pleinement les moments avec ceux que tu aimes.</p>
          </div>
          <div class="showcase-grid">
            <article class="showcase-card card-blue"><div class="card-copy"><span class="number">01</span><h3>Prendre part aux conversations dans les repas de famille</h3><p>Comprends les échanges et participe pleinement aux moments partagés autour de la table.</p></div><div class="screen-frame screen-tall"><img :src="`${assetBase}images/repas_familial_tunisien.webp`" alt="Écran d'accueil de CultDerja"></div></article>
            <article class="showcase-card card-sand"><div class="card-copy"><span class="number">02</span><h3>Comprendre les blagues et les sous-entendus</h3><p>Découvre l’humour et les expressions qui donnent tout leur sens aux conversations.</p></div><div class="screen-frame"><img :src="`${assetBase}images/lesson_detail.webp`" alt="Dialogue illustré pour apprendre la derja en contexte"></div></article>
            <article class="showcase-card card-pale"><div class="card-copy"><span class="number">03</span><h3>Écouter et partager les histoires de famille</h3><p>Comprends les récits, les souvenirs et les histoires racontés par tes proches.</p></div><div class="screen-frame"><img :src="`${assetBase}images/reunion_familiale_tunisienne.webp`" alt="Famille tunisienne réunie autour d'un moment de partage"></div></article>
          </div>
        </div>
      </section>

      <section id="concept" class="journey">
        <div class="section-title"><span></span><strong>Le concept</strong><span></span></div>
        <div class="journey-inner">
          <div class="journey-copy"><h2>Du premier mot<br>aux vraies conversations.</h2></div>
          <div class="journey-screens" aria-label="Captures des fonctionnalités de CultDerja">
            <div class="journey-screen"><img :src="`${assetBase}images/parcours.webp`" alt="Parcours d'apprentissage de CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/flash_card.webp`" alt="Flashcards de vocabulaire dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/ecoute_pratique.webp`" alt="Exercice d'écoute et de pratique dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/jouer.webp`" alt="Jeu pour apprendre la derja dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/conjugaison.webp`" alt="Exercice de conjugaison dans CultDerja"></div>
          </div>
        </div>
      </section>

      <section id="ancrage" class="values section-wrap">
        <div class="section-title"><span></span><strong>L’ancrage culturel</strong><span></span></div>
        <div class="journey-inner">
          <div class="journey-copy"><h2>Plus qu’une langue,<br><em>une culture</em></h2><p>Apprendre la derja, c’est aussi découvrir toute une culture. Explore l’histoire de la Tunisie, ses lieux emblématiques, les traditions et les cuisines. Parce qu’une langue prend tout son sens, quand on découvre le monde qui l’entoure.</p></div>
          <div class="journey-collage"><div class="collage-image collage-large"><img :src="`${assetBase}images/recette_brik_tunisienne.webp`" alt="Moment de partage au sein d'une famille tunisienne"></div><div class="collage-image collage-small"><img :src="`${assetBase}images/amphitheatre_el_ jam.webp`" alt="Amphithéâtre d’El Jem en Tunisie"></div><div class="quote-card"><img :src="`${assetBase}images/chechia_tunisienne.webp`" alt="Chéchia tunisienne traditionnelle"></div></div>
        </div>
      </section>

      <section id="faq" class="faq-section"><div class="section-title"><span></span><strong>Questions fréquentes</strong><span></span></div><div class="faq-inner"><div><h2>Tu veux en savoir<br>un peu plus ?</h2><p>Quelques réponses pour commencer sereinement.</p></div><div class="faq-list"><article v-for="(faq, index) in faqs" :key="faq.q" class="faq-item" :class="{ active: openFaq === index }"><button @click="openFaq = openFaq === index ? -1 : index" :aria-expanded="openFaq === index"><span>{{ faq.q }}</span><span class="faq-plus">{{ openFaq === index ? '−' : '+' }}</span></button><p v-if="openFaq === index">{{ faq.a }}</p></article></div></div></section>

      <section id="decouvrir" class="final-cta"><div class="cta-spark">✳</div><div class="section-title"><span></span><strong>Yalla, on commence ?</strong><span></span></div><h2>Fais partie des premières personnes<br>à découvrir CultDerja.</h2><p>Rejoins l’aventure et sois parmi les premières personnes informées de la sortie de CultDerja sur iOS et Android.</p><a class="button button-primary" href="#accueil">Je rejoins l’aventure <span>↑</span></a><span class="cta-arabic" lang="ar" dir="rtl">مرحبا بيك</span></section>
    </main>
    <footer class="footer"><a class="brand" href="#accueil" aria-label="CultDerja, accueil"><img class="brand-logo" :src="`${assetBase}images/logo.webp`" alt="" aria-hidden="true"><img class="brand-wordmark" :src="`${assetBase}images/cultderja.webp`" alt="CultDerja"></a><p>Apprends à parler tunisien comme elle se vit.</p><a href="#accueil">Retour en haut ↑</a><small>© 2026 CultDerja</small></footer>
  </div>
</template>
