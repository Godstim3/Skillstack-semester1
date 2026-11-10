<template>
  <div class="onboarding-container">
    
    <!-- Top Header Asset exported from Figma -->
    <div class="header-asset-container">
      <img :src="textHeaderImg" alt="SkillStack Academy Header" class="top-header-img" @click="goToDashboard" />
    </div>

    <!-- Hero Card with Laptop SVG Asset Background -->
    <div class="hero-card" :style="{ backgroundImage: `url(${laptopImg})` }">
      <span class="badge">01 / CODING</span>
      <h3 class="hero-title">Build something that matters.</h3>
    </div>

    <!-- Secondary Skill Cards (UI/UX Design & Data Science) using exact exported SVGs -->
    <div class="cards-grid">
      <div class="asset-card">
        <img :src="uiuxImg" alt="UI/UX Design" class="card-asset-img" />
      </div>

      <div class="asset-card">
        <img :src="dataAnalyticsImg" alt="Data Science" class="card-asset-img" />
      </div>
    </div>

    <!-- Main Headline & Subtitle Section -->
    <div class="headline-section">
      <span class="category-tag">SKILLS FOR WHAT'S NEXT</span>
      <h2>Your ambition.<br />A whole new skill set.</h2>
      <p>Learn coding, design and data science with practical courses that move you forward.</p>
    </div>

    <!-- Footer Controls (Pagination Dots + Action Buttons) -->
    <footer class="footer-action">
      <div class="controls-row">
        <div class="pagination">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <button class="next-link" @click="goToDashboard">Next &rarr;</button>
      </div>

      <button class="btn-get-started" @click="goToDashboard">
        Get Started &rarr;
      </button>
    </footer>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Importing your exact exported Figma assets from the 'asset' folder
import textHeaderImg from '../asset/text-header.svg';
import laptopImg from '../asset/laptop.svg';
import uiuxImg from '../asset/Uiux.svg';
import dataAnalyticsImg from '../asset/Data analytics.svg';

const router = useRouter();

// Navigation handler to proceed to the course catalog dashboard
function goToDashboard() {
  router.push('/register');
}
</script>

<style scoped>
.onboarding-container {
  max-width: 420px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

/* Top Header Asset Styling */
.header-asset-container {
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.top-header-img {
  width: 100%;
  height: auto;
  display: block;
}

/* Hero Feature Card Styling */
.hero-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.08);
}

.badge {
  align-self: flex-start;
  background: white;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.68rem;
  font-weight: 700;
  color: #15803d;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.hero-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

/* Secondary Cards Grid for Exported SVG Cards */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 0.4rem 0;
}

.asset-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-asset-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
}

/* Headline Text Section */
.headline-section {
  margin: 0.1rem 0;
}

.category-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #15803d;
  letter-spacing: 0.5px;
}

.headline-section h2 {
  font-size: 1.55rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin: 0.25rem 0;
}

.headline-section p {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.35;
}

/* Footer Action Controls */
.footer-action {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination {
  display: flex;
  gap: 0.35rem;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #e2e8f0;
}

.dot.active {
  width: 26px;
  background-color: #15803d;
}

.next-link {
  background: none;
  border: none;
  color: #15803d;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}

.btn-get-started {
  width: 100%;
  background-color: #15803d;
  color: white;
  border: none;
  padding: 0.85rem;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.btn-get-started:hover {
  background-color: #166534;
}
</style>