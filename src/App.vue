<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const assetBase = import.meta.env.BASE_URL
const faqs = [
  { q: 'CultDerja, c’est quoi ?', a: 'Une application pour découvrir et pratiquer la derja tunisienne à travers des leçons, des dialogues, du vocabulaire et des activités inspirées de la vie quotidienne.' },
  { q: 'Faut-il déjà parler arabe ?', a: 'Non. Le parcours est pensé pour commencer progressivement, avec des situations concrètes, des mots utiles et l’écriture arabe en complément.' },
  { q: 'Est-ce que je peux apprendre à mon rythme ?', a: 'Oui : avance à ton rythme, retrouve tes révisions et suis ta progression au fil des leçons.' }
]
const openFaq = ref(0)
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#accueil" aria-label="CultDerja, accueil">
        <span class="brand-mark"><span>ع</span></span>
        <span class="brand-name">Cul<span>Derja</span></span>
      </a>
      <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Ouvrir le menu">☰</button>
      <nav :class="['nav-links', { opened: menuOpen }]" aria-label="Navigation principale">
        <a href="#experience" @click="menuOpen = false">L’expérience</a>
        <a href="#parcours" @click="menuOpen = false">Le parcours</a>
        <a href="#faq" @click="menuOpen = false">FAQ</a>
        <a class="nav-cta" href="https://cultderja-apprendre-le-tunisien.ai.studio" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">Découvrir l’application <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span> La langue du quotidien, la culture en plus</div>
          <h1>La derja tunisienne,<br><span>ça se vit.</span></h1>
          <p class="hero-lead">Les mots, les expressions et les petites conversations qui rapprochent. Apprends à parler tunisien, une situation à la fois.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="https://cultderja-apprendre-le-tunisien.ai.studio" target="_blank" rel="noopener noreferrer">Explorer l’expérience <span>→</span></a>
            <a class="text-link" href="#parcours">Voir comment ça marche <span>↓</span></a>
          </div>
          <div class="hero-note"><span class="note-stars">✳ ✳ ✳</span><span>Apprendre une langue, c’est aussi rencontrer une culture.</span></div>
        </div>
        <div class="hero-visual" aria-label="Aperçu de l’application CultDerja">
          <div class="sun-disc"></div><div class="ornament ornament-one">✳</div><div class="ornament ornament-two">✳</div>
          <div class="floating-tag tag-top"><span class="tag-icon">ع</span><span><b>La derja</b><small>à ton rythme</small></span></div>
          <div class="phone phone-back"><img :src="`${assetBase}images/lesson.webp`" alt="Écran de leçon de l’application CultDerja"></div>
          <div class="phone phone-front"><img :src="`${assetBase}images/onboarding.webp`" alt="Écran d’apprentissage illustré de l’application CultDerja"></div>
          <div class="floating-tag tag-bottom"><span class="mini-spark">✦</span><span><b>Parler, écouter, découvrir</b><small>Des situations de la vraie vie</small></span></div>
          <div class="visual-caption">تونس <span>—</span> Tunisie, au fil des mots</div>
        </div>
        <div class="hero-bottom"><span>01 / Apprendre</span><span class="bottom-line"></span><span>02 / Pratiquer</span><span class="bottom-line"></span><span>03 / Découvrir</span></div>
      </section>

      <section class="intro-strip">
        <p>Une langue s’apprend mieux quand elle <em>raconte quelque chose.</em></p>
        <span class="strip-arabic" lang="ar" dir="rtl">أهلا وسهلا</span>
      </section>

      <section id="experience" class="experience section-wrap">
        <div class="section-heading">
          <div><span class="kicker">L’application en quelques images</span><h2>Du premier mot<br>à la conversation.</h2></div>
          <p>Des leçons guidées, des scènes du quotidien et des activités variées pour faire entrer la derja dans ta vie.</p>
        </div>
        <div class="showcase-grid">
          <article class="showcase-card card-blue"><div class="card-copy"><span class="number">01</span><h3>Entre dans la langue</h3><p>Des premières étapes accessibles pour prendre confiance dès le début.</p></div><div class="screen-frame screen-tall"><img :src="`${assetBase}images/onboarding.webp`" alt="Première leçon illustrée"></div></article>
          <article class="showcase-card card-sand"><div class="card-copy"><span class="number">02</span><h3>Apprends en contexte</h3><p>Des dialogues illustrés pour associer les mots aux moments de la vie réelle.</p></div><div class="screen-frame"><img :src="`${assetBase}images/lesson-detail.webp`" alt="Leçon de conversation au café"></div></article>
          <article class="showcase-card card-pale"><div class="card-copy"><span class="number">03</span><h3>Enrichis ton vocabulaire</h3><p>Révise les mots et retrouve les expressions essentielles au quotidien.</p></div><div class="screen-frame"><img :src="`${assetBase}images/dictionary.webp`" alt="Écran du dictionnaire de l’application"></div></article>
        </div>
      </section>

      <section id="parcours" class="journey">
        <div class="journey-inner">
          <div class="journey-copy"><span class="kicker kicker-light">Un apprentissage vivant</span><h2>Pas seulement des mots.<br><em>Des moments à partager.</em></h2><p>Commander un café, saluer la famille, comprendre une expression ou découvrir une tradition : chaque étape t’aide à te sentir plus à l’aise en derja.</p><a class="button button-light" href="#decouvrir">Découvrir le parcours <span>→</span></a></div>
          <div class="journey-collage"><div class="collage-image collage-large"><img :src="`${assetBase}images/culture.webp`" alt="Activités culturelles de l’application"></div><div class="collage-image collage-small"><img :src="`${assetBase}images/profile.webp`" alt="Suivi de progression dans l’application"></div><div class="quote-card"><span>كلمة بكلمة</span><p>Mot après mot,<br>la conversation commence.</p><b>✳</b></div></div>
        </div>
      </section>

      <section class="values section-wrap">
        <div class="section-heading"><div><span class="kicker">Une approche simple</span><h2>À ton rythme,<br>avec du sens.</h2></div><p>Une expérience qui associe pratique, répétition et découverte culturelle, pour apprendre sans se sentir perdu.</p></div>
        <div class="value-grid"><article><span class="value-icon blue-icon">↗</span><h3>Progressif</h3><p>Avance étape par étape, des bases aux échanges plus naturels.</p></article><article><span class="value-icon gold-icon">✳</span><h3>Concret</h3><p>Apprends à partir de scènes, de mots et de situations familières.</p></article><article><span class="value-icon terra-icon">♡</span><h3>Culturel</h3><p>Découvre aussi les usages, les expressions et les repères de la Tunisie.</p></article></div>
      </section>

      <section id="faq" class="faq-section"><div class="faq-inner"><div><span class="kicker">Questions fréquentes</span><h2>Tu veux en savoir<br>un peu plus ?</h2><p>Quelques réponses pour commencer sereinement.</p></div><div class="faq-list"><article v-for="(faq, index) in faqs" :key="faq.q" class="faq-item" :class="{ active: openFaq === index }"><button @click="openFaq = openFaq === index ? -1 : index" :aria-expanded="openFaq === index"><span>{{ faq.q }}</span><span class="faq-plus">{{ openFaq === index ? '−' : '+' }}</span></button><p v-if="openFaq === index">{{ faq.a }}</p></article></div></div></section>

      <section id="decouvrir" class="final-cta"><div class="cta-spark">✳</div><span class="kicker">Yalla, on commence ?</span><h2>La prochaine conversation<br>peut être en derja.</h2><p>Fais le premier pas et découvre une autre façon d’apprendre le tunisien.</p><a class="button button-primary" href="#accueil">Revenir au début <span>↑</span></a><span class="cta-arabic" lang="ar" dir="rtl">مرحبا بيك</span></section>
    </main>
    <footer class="footer"><a class="brand" href="#accueil"><span class="brand-mark"><span>ع</span></span><span class="brand-name">Cul<span>Derja</span></span></a><p>La derja tunisienne, au fil des mots.</p><a href="#accueil">Retour en haut ↑</a><small>© 2026 CultDerja</small></footer>
  </div>
</template>
