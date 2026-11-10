<template>
  <div class="profile-container">
    
    <!-- Top Header: Back, Title, Settings Icon -->
    <header class="top-nav">
      <button class="nav-btn" @click="goBack">&larr;</button>
      <span class="nav-title">My profile</span>
      <button class="nav-btn settings-btn">⚙️</button>
    </header>

    <!-- User Identity Block -->
    <div class="user-identity-section">
      <div class="avatar-container">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Alex Morgan" class="avatar-img" />
      </div>
      <div class="user-meta">
        <h2>Alex Morgan</h2>
        <p class="email">alex.morgan@email.com</p>
        <span class="status-badge">STUDENT · MEMBER SINCE OCT 2026</span>
      </div>
    </div>

    <!-- Stats Summary Grid -->
    <div class="stats-card-grid">
      <div class="stat-item">
        <span class="stat-number">3</span>
        <span class="stat-label">Enrolled</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">2</span>
        <span class="stat-label">Active</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">1</span>
        <span class="stat-label">Certificate</span>
      </div>
    </div>

    <!-- Keep Your Momentum Section -->
    <section class="section-block">
      <div class="section-title-row">
        <h3>Keep your momentum</h3>
        <span class="active-count">2 active</span>
      </div>

      <!-- Momentum Card 1 -->
      <div class="momentum-card">
        <div class="momentum-header">
          <div class="momentum-icon-box green">💻</div>
          <div class="momentum-info">
            <h4>Full-Stack Web Dev</h4>
            <p>Up next: React components</p>
          </div>
          <span class="progress-percent">42%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 42%;"></div>
        </div>
      </div>

      <!-- Momentum Card 2 -->
      <div class="momentum-card">
        <div class="momentum-header">
          <div class="momentum-icon-box mint">🎨</div>
          <div class="momentum-info">
            <h4>UI/UX Design</h4>
            <p>Up next: User research basics</p>
          </div>
          <span class="progress-percent">20%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 20%;"></div>
        </div>
      </div>
    </section>

    <!-- Learning Timeline Section -->
    <section class="section-block">
      <h3>Your learning timeline</h3>
      
      <div class="timeline-item">
        <div class="timeline-icon green-check">✓</div>
        <div class="timeline-content">
          <h4>Completed JavaScript essentials</h4>
          <p>Today · Full-Stack Web Dev</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon green-badge">🏆</div>
        <div class="timeline-content">
          <h4>Earned your first certificate</h4>
          <p>Yesterday · Python Foundations</p>
        </div>
      </div>
    </section>

    <!-- Account Settings Section -->
    <section class="section-block account-section">
      <h3>Account</h3>

      <div class="account-link-card" @click="openPersonalDetails">
        <div class="link-left">
          <span class="link-icon">👤</span>
          <span>Personal details</span>
        </div>
        <span class="arrow">&rsaquo;</span>
      </div>

      <div class="account-link-card" @click="openNotifications">
        <div class="link-left">
          <span class="link-icon">🛡️</span>
          <span>Notifications & privacy</span>
        </div>
        <span class="arrow">&rsaquo;</span>
      </div>
    </section>

    <!-- Bottom Navigation Bar -->
    <nav class="bottom-nav">
      <router-link to="/dashboard" class="nav-item">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </router-link>
      <router-link to="/course-details" class="nav-item">
        <span class="nav-icon">📖</span>
        <span class="nav-label">Courses</span>
      </router-link>
      <router-link to="/enrollment" class="nav-item">
        <span class="nav-icon">🔖</span>
        <span class="nav-label">Enrolled</span>
      </router-link>
      <router-link to="/profile" class="nav-item active">
        <span class="nav-icon">👤</span>
        <span class="nav-label">Profile</span>
      </router-link>
    </nav>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('/dashboard');
}

function openPersonalDetails() {
  alert('Opening personal details settings...');
}

function openNotifications() {
  alert('Opening notifications & privacy settings...');
}
</script>

<style scoped>
.profile-container {
  max-width: 440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1rem 1.25rem 6rem 1.25rem;
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
}

/* Top Navigation Bar */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.nav-btn {
  background: white;
  border: 1px solid #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  color: #0f172a;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.nav-title {
  font-weight: 700;
  font-size: 1rem;
  color: #0f172a;
}

/* User Identity Block */
.user-identity-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.avatar-container {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #15803d;
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-meta h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.email {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0.1rem 0 0.3rem 0;
}

.status-badge {
  font-size: 0.6rem;
  font-weight: 700;
  color: #15803d;
  background-color: #dcfce7;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  align-self: flex-start;
  letter-spacing: 0.3px;
}

/* Stats Card Grid */
.stats-card-grid {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
}

.stat-label {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 28px;
  background-color: #e2e8f0;
}

/* Section Blocks */
.section-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-block h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.active-count {
  font-size: 0.75rem;
  font-weight: 600;
  color: #15803d;
}

/* Momentum Cards */
.momentum-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}

.momentum-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.momentum-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.momentum-icon-box.green {
  background-color: #dcfce7;
  color: #15803d;
}

.momentum-icon-box.mint {
  background-color: #e0f2fe;
  color: #0284c7;
}

.momentum-info {
  flex-grow: 1;
}

.momentum-info h4 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.momentum-info p {
  font-size: 0.7rem;
  color: #64748b;
  margin: 0;
}

.progress-percent {
  font-size: 0.82rem;
  font-weight: 700;
  color: #15803d;
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background-color: #f1f5f9;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background-color: #15803d;
  border-radius: 3px;
}

/* Timeline Items */
.timeline-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.timeline-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
}

.timeline-icon.green-check {
  background-color: #dcfce7;
  color: #15803d;
}

.timeline-icon.green-badge {
  background-color: #fef9c3;
  color: #ca8a04;
}

.timeline-content h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.timeline-content p {
  font-size: 0.7rem;
  color: #64748b;
  margin: 0;
}

/* Account Links */
.account-link-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.account-link-card:hover {
  background-color: #f8fafc;
}

.link-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #0f172a;
}

.link-icon {
  font-size: 0.9rem;
}

.arrow {
  font-size: 1.2rem;
  color: #94a3b8;
}

/* Bottom Navigation Bar */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 440px;
  margin: 0 auto;
  background: white;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-around;
  padding: 0.6rem 0.5rem;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.03);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #94a3b8;
  gap: 0.15rem;
  font-size: 0.65rem;
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-item.active {
  color: #15803d;
}
</style>