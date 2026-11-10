<template>
  <div class="recovery-container">
    
    <!-- Top Header: Back Button & Title -->
    <header class="top-nav">
      <button class="back-btn" @click="goBack">
        &larr;
      </button>
      <span class="nav-title">Account recovery</span>
    </header>

    <!-- Main Content Area -->
    <div class="content-body">
      
      <!-- Key Icon Illustration Box -->
      <div class="icon-box">
        <span class="recovery-key-icon">🔑</span>
      </div>

      <!-- Header Copy -->
      <div class="header-section">
        <span class="category-tag">LET'S GET YOU BACK IN</span>
        <h2>Forgot your password?</h2>
        <p class="subtitle">No worries. Enter your account email and we'll send you a link to reset your password.</p>
      </div>

      <!-- Recovery Form -->
      <form @submit.prevent="handleReset" class="form-section">
        
        <!-- Email Field -->
        <div class="input-group">
          <label>Email</label>
          <div class="input-with-icon">
            <input type="email" v-model="email" placeholder="alex.morgan@email.com" required />
            <span class="input-icon">✉️</span>
          </div>
        </div>

        <!-- Reset Password Button -->
        <button type="submit" class="btn-reset">
          Reset Password &rarr;
        </button>

      </form>

      <!-- Back to Login Link -->
      <div class="footer-back-login">
        <router-link to="/login" class="back-login-link">Back to Log In</router-link>
      </div>

    </div>

    <!-- Bottom Help Card -->
    <div class="bottom-help-card">
      <div class="help-icon">❓</div>
      <div class="help-content">
        <h4>Can't find the email?</h4>
        <p>Check your spam folder or contact support@skillstack.academy</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');

// Go back to the previous screen (Login)
function goBack() {
  router.push('/login');
}

// Handle password reset submission (mock action)
function handleReset() {
  // Here you could trigger success feedback or alert
  alert('Password reset link sent to ' + email.value);
  router.push('/login');
}
</script>

<style scoped>
.recovery-container {
  max-width: 420px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

/* Top Navigation Bar */
.top-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
}

.back-btn {
  background: none;
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
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #f8fafc;
}

.nav-title {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
}

/* Content Body */
.content-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

/* Key Icon Box */
.icon-box {
  width: 72px;
  height: 72px;
  background-color: #f0fdf4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-top: 0.25rem;
}

/* Heading Section */
.header-section {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.category-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #15803d;
  letter-spacing: 0.5px;
}

.header-section h2 {
  font-size: 1.65rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0.1rem 0;
}

.subtitle {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
}

/* Form Styles */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 0.25rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.input-group label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0f172a;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  border-radius: 12px;
  font-size: 0.88rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #15803d;
  background-color: #fff;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon input {
  padding-right: 2.5rem;
}

.input-icon {
  position: absolute;
  right: 0.9rem;
  font-size: 0.85rem;
  color: #94a3b8;
}

.btn-reset {
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

.btn-reset:hover {
  background-color: #166534;
}

/* Footer Back Link */
.footer-back-login {
  text-align: center;
  margin-top: 0.25rem;
}

.back-login-link {
  color: #15803d;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
}

/* Bottom Help Card */
.bottom-help-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.85rem 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-top: 1rem;
}

.help-icon {
  font-size: 1.25rem;
}

.help-content h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.15rem;
}

.help-content p {
  font-size: 0.72rem;
  color: #64748b;
  line-height: 1.35;
  margin: 0;
}
</style>