<template>
  <div class="splash-container">
    <!-- Center Logo & Branding -->
    <div class="splash-content">
      <div class="logo-box">
        <!-- Clean vector stack icon matching Figma -->
        <svg class="stack-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.9"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Tagline or title text if needed -->
      <p class="tagline">Level Up Your Tech Stack</p>
    </div>

    <!-- Bottom Loading & Footer Text -->
    <div class="splash-footer">
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
      <p class="footer-sub">Your next chapter starts here</p>
      <span class="footer-brand">LEARN. BUILD. GROW.</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Auto-navigation timer to move from Splash to Dashboard
onMounted(() => {
  setTimeout(() => {
    router.push('/get-started');
  }, 4000);
});
</script>

<style scoped>
.splash-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 3rem 1.5rem;
  text-align: center;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22vh;
}

.logo-box {
  width: 84px;
  height: 84px;
  background-color: #15803d;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 10px 20px -3px rgba(21, 128, 61, 0.25);
  margin-bottom: 1.2rem;
}

.stack-icon {
  width: 40px;
  height: 40px;
}

.tagline {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}

.splash-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 260px;
  margin-bottom: 2.5rem;
}

.progress-container {
  width: 100%;
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-bar {
  width: 45%; 
  height: 100%;
  background-color: #15803d;
  border-radius: 3px;
}

.footer-sub {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 1.5rem 0;
}

.footer-brand {
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #94a3b8;
}
</style>