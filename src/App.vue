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
        <a href="#parcours" @click="menuOpen = false">L’ancrage culturel</a>
        <a href="#faq" @click="menuOpen = false">FAQ</a>
        <a class="nav-cta" href="https://cultderja-apprendre-le-tunisien.ai.studio" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">Découvrire l'application<span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-copy">
          <!-- <div class="eyebrow"><span class="eyebrow-dot"></span> La langue du quotidien, la culture en plus</div> -->
          <h1>Apprends la derja tunisienne<span><br>comme elle<br>se vit.</span></h1>
          <p class="hero-lead" style="color: black --force;">Apprends à parler tunisien à travers des dialogues inspirés de la vraie vie. Découvre les expressions, les habitudes et les codes culturels pour mieux comprendre tes proches et prendre part aux conversations.</p>
          <!-- <div class="hero-note"><span class="note-stars">✳ ✳ ✳</span><span>Apprendre une langue, c’est aussi rencontrer une culture.</span></div> -->
        </div>
        <div class="hero-visual" aria-label="Aperçu de l’application CultDerja">
          <div class="sun-disc"></div><div class="ornament ornament-one">✳</div><div class="ornament ornament-two">✳</div>
          <div class="floating-tag tag-top"><span class="tag-icon"><img :src="`${assetBase}images/logo.webp`" alt="" aria-hidden="true"></span><span><b>Sortie prochaine</b><small>sur iOS & Android</small></span></div>
          <div class="phone phone-back"><img :src="`${assetBase}images/acceuil.webp`" alt="Écran d'accueil de CultDerja"></div>
          <div class="hero-lamma"><img :src="`${assetBase}images/lamma.webp`" alt="Scène de la vie quotidienne tunisienne dans CultDerja"></div>
          <div class="floating-tag tag-bottom"><span class="mini-spark">✦</span><span><b>La derja comme elle se vit</b><small>Des situations de la vraie vie</small></span></div>
          <!-- <div class="visual-caption">تونس <span>—</span> Tunisie, au fil des mots</div> -->
        </div>
        <!-- <div class="hero-bottom"><span>01 / Apprendre</span><span class="bottom-line"></span><span>02 / Pratiquer</span><span class="bottom-line"></span><span>03 / Découvrir</span></div> -->
      </section>

      <section id="experience" class="experience section-wrap">
        <div class="section-heading">
          <div><span class="kicker">Pourquoi CultDerja ?</span><h2>Ne passe plus à côté<br>des conversations.</h2></div>
          <p>Les histoires de famille, les petites blagues, les discussions autour d’un repas… Apprends l’arabe tunisien pour prendre part aux conversations et partager pleinement les moments qui comptent.</p>
        </div>
        <div class="showcase-grid">
          <article class="showcase-card card-blue"><div class="card-copy"><span class="number">01</span><h3>Prendre part aux repas de famille</h3><p>Comprends les échanges autour de la table et participe aux conversations avec tes proches.</p></div><div class="screen-frame screen-tall"><img :src="`${assetBase}images/Repas_familial_tunisien.webp`" alt="Écran d'accueil de CultDerja"></div></article>
          <article class="showcase-card card-sand"><div class="card-copy"><span class="number">02</span><h3>Comprendre les blagues et les sous-entendus</h3><p>Saisis les expressions, l’humour et toutes les nuances qui donnent leur sens aux échanges.</p></div><div class="screen-frame"><img :src="`${assetBase}images/lesson_detail.webp`" alt="Dialogue illustré pour apprendre la derja en contexte"></div></article>
          <article class="showcase-card card-pale"><div class="card-copy"><span class="number">03</span><h3>Écouter et partager les histoires</h3><p>Retrouve le plaisir de comprendre les récits et les souvenirs racontés en derja.</p></div><div class="screen-frame"><img :src="`${assetBase}images/Reunion_familiale_tunisienne.webp`" alt="Famille tunisienne réunie autour d'un moment de partage"></div></article>
        </div>
      </section>

      <section id="parcours" class="journey">
        <div class="journey-inner">
          <div class="journey-copy"><span class="kicker kicker-light">L’expérience CultDerja</span><h2>Du premier mot<br>aux vraies conversations.</h2></div>
          <div class="journey-screens" aria-label="Captures des fonctionnalités de CultDerja">
            <div class="journey-screen"><img :src="`${assetBase}images/parcours.webp`" alt="Parcours d'apprentissage de CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/flash_card.webp`" alt="Flashcards de vocabulaire dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/ecoute_pratique.webp`" alt="Exercice d'écoute et de pratique dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/jouer.webp`" alt="Jeu pour apprendre la derja dans CultDerja"></div>
            <div class="journey-screen"><img :src="`${assetBase}images/conjugaison.webp`" alt="Exercice de conjugaison dans CultDerja"></div>
          </div>
        </div>
      </section>

      <section class="values section-wrap">
        <div class="journey-inner">
          <div class="journey-copy"><span class="kicker kicker-light">Plus qu’une langue, une culture</span><h2>La derja, c’est aussi<br><em>tout ce qui nous relie.</em></h2><p>La derja ne se résume pas à des mots. Elle porte des expressions, des traditions et des codes sociaux qui donnent tout leur sens aux conversations. Avec CultDerja, découvre la langue dans son contexte culturel.</p><a class="button button-light" href="#decouvrir">Découvrire l'application<span>→</span></a></div>
          <div class="journey-collage"><div class="collage-image collage-large"><img :src="`${assetBase}images/Recette_brik_tunisienne.webp`" alt="Moment de partage au sein d'une famille tunisienne"></div><div class="collage-image collage-small"><img :src="`${assetBase}images/amphitheatre_el_ jam.webp`" alt="Découverte de la culture tunisienne dans l’application"></div><div class="quote-card"><img :src="`${assetBase}images/chechia_tunisienne.webp`" alt="Chéchia tunisienne traditionnelle"></div></div>
        </div>
      </section>

      <section id="faq" class="faq-section"><div class="faq-inner"><div><span class="kicker">Questions fréquentes</span><h2>Tu veux en savoir<br>un peu plus ?</h2><p>Quelques réponses pour commencer sereinement.</p></div><div class="faq-list"><article v-for="(faq, index) in faqs" :key="faq.q" class="faq-item" :class="{ active: openFaq === index }"><button @click="openFaq = openFaq === index ? -1 : index" :aria-expanded="openFaq === index"><span>{{ faq.q }}</span><span class="faq-plus">{{ openFaq === index ? '−' : '+' }}</span></button><p v-if="openFaq === index">{{ faq.a }}</p></article></div></div></section>

      <section id="decouvrir" class="final-cta"><div class="cta-spark">✳</div><span class="kicker">Yalla, on commence ?</span><h2>Fais partie des premières personnes<br>à découvrir CultDerja.</h2><p>Rejoins l’aventure et sois parmi les premières personnes informées de la sortie de CultDerja sur iOS et Android.</p><a class="button button-primary" href="#accueil">Je rejoins l’aventure <span>↑</span></a><span class="cta-arabic" lang="ar" dir="rtl">مرحبا بيك</span></section>
    </main>
    <footer class="footer"><a class="brand" href="#accueil" aria-label="CultDerja, accueil"><img class="brand-logo" :src="`${assetBase}images/logo.webp`" alt="" aria-hidden="true"><img class="brand-wordmark" :src="`${assetBase}images/cultderja.webp`" alt="CultDerja"></a><p>Apprends la derja tunisienne comme elle se vit.</p><a href="#accueil">Retour en haut ↑</a><small>© 2026 CultDerja</small></footer>
  </div>
</template>
