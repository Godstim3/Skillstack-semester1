<template>
  <div class="login-container">
    
    <!-- Top Brand Header -->
    <header class="top-bar">
      <div class="brand">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">SkillStack</span>
          <span class="brand-subtitle">ACADEMY</span>
        </div>
      </div>
    </header>

    <!-- Heading Section -->
    <div class="header-section">
      <span class="category-tag">GOOD TO SEE YOU AGAIN</span>
      <h2>Welcome back.</h2>
      <p class="subtitle">Big goals start with small steps.<br />Let's pick up where you left off.</p>
    </div>

    <!-- Login Form -->
    <form @submit.prevent="handleLogin" class="form-section">
      
      <!-- Email Field -->
      <div class="input-group">
        <label>Email</label>
        <div class="input-with-icon">
          <input type="email" v-model="form.email" placeholder="alex.morgan@email.com" required />
          <span class="input-icon">✉️</span>
        </div>
      </div>

      <!-- Password Field -->
      <div class="input-group">
        <label>Password</label>
        <div class="input-with-icon">
          <input :type="showPassword ? 'text' : 'password'" v-model="form.password" placeholder="............" required />
          <span class="input-icon toggle-password" @click="showPassword = !showPassword">👁️‍🗨️</span>
        </div>
      </div>

      <!-- Remember Me & Forgot Password Row -->
      <!-- Remember Me & Forgot Password Row -->
      <div class="options-row">
        <label class="checkbox-container">
          <input type="checkbox" v-model="form.rememberMe" />
          <span class="checkmark"></span>
          Remember me
        </label>
        <router-link to="/forgot-password" class="forgot-link">Forgotpassword?</router-link>
      </div>

      <!-- Login Button -->
      <button type="submit" class="btn-login">
        Log In &rarr;
      </button>

    </form>

    <!-- Create Account Link -->
    <div class="footer-register">
      <p>New to SkillStack? <router-link to="/register" class="register-link">Create an account</router-link></p>
    </div>

    <!-- Bottom Motivational Card -->
    <div class="bottom-card">
      <div class="card-icon">🌱</div>
      <div class="card-content">
        <h4>A little progress, every day.</h4>
        <p>Your courses, projects and next big breakthrough are waiting for you.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  email: '',
  password: '',
  rememberMe: false
});

const showPassword = ref(false);

// Navigation handler to proceed to the course catalog dashboard on successful login
function handleLogin() {
  router.push('/dashboard');
}
</script>

<style scoped>
.login-container {
  max-width: 420px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

/* Top Brand */
.top-bar {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-icon {
  width: 36px;
  height: 36px;
  background-color: #15803d;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #0f172a;
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 0.65rem;
  font-weight: 700;
  color: #15803d;
  letter-spacing: 0.5px;
}

/* Heading Section */
.header-section {
  margin-bottom: 0.5rem;
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
  margin: 0.2rem 0;
}

.subtitle {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.35;
}

/* Form Styles */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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

.input-group input[type="email"],
.input-group input[type="password"],
.input-group input[type="text"] {
  width: 100%;
  padding: 0.7rem 0.9rem;
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
  cursor: pointer;
  font-size: 0.85rem;
  color: #94a3b8;
}

/* Options Row (Remember Me & Forgot Password) */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin: 0.2rem 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #334155;
  cursor: pointer;
}

.checkbox-container input {
  accent-color: #15803d;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.forgot-link {
  color: #15803d;
  text-decoration: none;
  font-weight: 600;
}

.btn-login {
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

.btn-login:hover {
  background-color: #166534;
}

/* Footer Register */
.footer-register {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.82rem;
  color: #64748b;
}

.register-link {
  color: #15803d;
  font-weight: 600;
  text-decoration: none;
}

/* Bottom Motivational Card */
.bottom-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.85rem 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-top: 0.75rem;
}

.card-icon {
  font-size: 1.25rem;
}

.card-content h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.15rem;
}

.card-content p {
  font-size: 0.72rem;
  color: #64748b;
  line-height: 1.35;
  margin: 0;
}
</style>