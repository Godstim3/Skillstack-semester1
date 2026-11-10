<template>
  <div class="register-container">
    
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
      <span class="category-tag">YOUR NEXT CHAPTER</span>
      <h2>Start your skill stack.</h2>
      <p class="subtitle">Create an account. Build skills that open doors.</p>
    </div>

    <!-- Registration Form -->
    <form @submit.prevent="handleRegister" class="form-section">
      
      <!-- First Name -->
      <div class="input-group">
        <label>First Name</label>
        <input type="text" v-model="form.firstName" placeholder="Alex" required />
      </div>

      <!-- Last Name -->
      <div class="input-group">
        <label>Last Name</label>
        <input type="text" v-model="form.lastName" placeholder="Morgan" required />
      </div>

      <!-- Email -->
      <div class="input-group">
        <label>Email</label>
        <div class="input-with-icon">
          <input type="email" v-model="form.email" placeholder="alex.morgan@email.com" required />
          <span class="input-icon">✉️</span>
        </div>
      </div>

      <!-- Password -->
      <div class="input-group">
        <label>Password</label>
        <div class="input-with-icon">
          <input :type="showPassword ? 'text' : 'password'" v-model="form.password" placeholder="............" required />
          <span class="input-icon toggle-password" @click="showPassword = !showPassword">👁️‍🗨️</span>
        </div>
        <small class="helper-text">Use 8+ characters, a number and a symbol.</small>
      </div>

      <!-- Terms and Conditions -->
      <p class="terms-text">
        By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>

      <!-- Sign Up Button -->
      <button type="submit" class="btn-signup">
        Sign Up &rarr;
      </button>

    </form>

    <!-- Footer Login Link -->
    <div class="footer-login">
      <p>Already part of the academy? <router-link to="/dashboard" class="login-link">Log in</router-link></p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});

const showPassword = ref(false);

// Mock registration action navigating to dashboard
function handleRegister() {
  router.push('/Login');
}
</script>

<style scoped>
.register-container {
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
  margin-bottom: 0.5rem;
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
  margin-bottom: 0.75rem;
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
}

/* Form Styles */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex-grow: 1;
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

.helper-text {
  font-size: 0.68rem;
  color: #94a3b8;
}

.terms-text {
  font-size: 0.72rem;
  color: #64748b;
  line-height: 1.35;
  margin: 0.1rem 0;
}

.terms-text a {
  color: #15803d;
  text-decoration: none;
  font-weight: 600;
}

.btn-signup {
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
  margin-top: 0.3rem;
  transition: background-color 0.2s;
}

.btn-signup:hover {
  background-color: #166534;
}

/* Footer Login */
.footer-login {
  text-align: center;
  margin-top: 0.75rem;
  font-size: 0.82rem;
  color: #64748b;
}

.login-link {
  color: #15803d;
  font-weight: 600;
  text-decoration: none;
}
</style>