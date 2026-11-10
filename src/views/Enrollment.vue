<template>
  <div class="enrollment-container">
    
    <!-- Top Nav Header -->
    <header class="top-nav">
      <button class="nav-btn" @click="goBack">&larr;</button>
      <span class="nav-title">Secure enrollment</span>
    </header>

    <!-- Demo Banner -->
    <div class="demo-badge">
      <span>🛸 DEMO CHECKOUT - No real payment is taken</span>
    </div>

    <h2 class="main-title">Invest in your next chapter.</h2>

    <!-- Shopping Cart Items List (Faculty Requirement) -->
    <section class="cart-section">
      <div v-if="cart.length === 0" class="empty-cart">
        <p>Your cart is empty.</p>
        <button class="btn-browse" @click="goBack">Browse Courses</button>
      </div>

      <div v-else class="cart-card">
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <div class="item-left">
            <div class="item-icon">💻</div>
            <div class="item-details">
              <h4>{{ item.subject }}</h4>
              <p>📍 {{ item.location }}</p>
            </div>
          </div>
          
          <div class="item-right">
            <span class="item-price">£{{ item.price }}</span>
            <!-- Remove from Cart: Restores space back to catalog (Faculty Requirement) -->
            <button class="btn-remove" @click="removeFromCart(index)">✕</button>
          </div>
        </div>

        <div class="cart-divider"></div>

        <div class="cart-summary">
          <div class="summary-row">
            <span>Course price</span>
            <span>£{{ cartTotal.toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Additional fees</span>
            <span>£0.00</span>
          </div>
          <div class="summary-row total-row">
            <strong>Total</strong>
            <strong class="total-price">£{{ cartTotal.toFixed(2) }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Checkout Details & Form Validation (Faculty Requirement) -->
    <section class="payment-section" v-if="cart.length > 0">
      <div class="section-title-row">
        <h3>Checkout Details</h3>
        <span class="sub-tag">VALIDATION REQUIRED</span>
      </div>

      <!-- Full Name Field (Letters Only Regex) -->
      <div class="form-group">
        <label>Full Name (Letters only)</label>
        <input 
          type="text" 
          v-model="name" 
          placeholder="e.g. Alex Morgan" 
          class="form-input"
          :class="{ 'invalid-input': name.length > 0 && !isNameValid }"
        />
        <span v-if="name.length > 0 && !isNameValid" class="error-msg">
          Name must contain letters and spaces only.
        </span>
      </div>

      <!-- Phone Number Field (Numbers Only Regex - Faculty Requirement) -->
      <div class="form-group">
        <label>Phone Number (Numbers only)</label>
        <input 
          type="text" 
          v-model="phone" 
          placeholder="e.g. 07123456789" 
          class="form-input"
          :class="{ 'invalid-input': phone.length > 0 && !isPhoneValid }"
        />
        <span v-if="phone.length > 0 && !isPhoneValid" class="error-msg">
          Phone must contain numbers only.
        </span>
      </div>

      <!-- Submit Checkout Button (Disabled until valid) -->
      <button 
        class="btn-checkout" 
        :disabled="!isFormValid"
        @click="submitOrder"
      >
        Complete Secure Enrollment 🔒
      </button>

      <!-- Confirmation Message -->
      <div v-if="orderSubmitted" class="confirmation-toast">
        ✅ Order submitted successfully! Thank you for enrolling.
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form Input States
const name = ref('');
const phone = ref('');
const orderSubmitted = ref(false);

// Sample Reactive Cart Array (Passed from state/catalog)
const cart = ref([
  { id: 1, subject: 'Full-Stack Web Dev', location: 'Hendon', price: 29.99, space: 4 }
]);

// Total Price Calculation
const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price, 0);
});

// Regex Validations (Faculty Requirement)
const isNameValid = computed(() => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name.value.trim());
});

const isPhoneValid = computed(() => {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone.value.trim());
});

// Overall Form Validity Check
const isFormValid = computed(() => {
  return isNameValid.value && isPhoneValid.value && cart.value.length > 0;
});

// Remove item from cart and return space back to lesson catalog
function removeFromCart(index) {
  const removedItem = cart.value[index];
  if (removedItem.space !== undefined) {
    removedItem.space++; // Restore available space
  }
  cart.value.splice(index, 1);
}

// Order Submission Handler
function submitOrder() {
  if (isFormValid.value) {
    orderSubmitted.value = true;
    setTimeout(() => {
      cart.value = [];
      name.value = '';
      phone.value = '';
      orderSubmitted.value = false;
      router.push('/dashboard');
    }, 2500);
  }
}

function goBack() {
  router.push('/course-details');
}
</script>

<style scoped>
.enrollment-container {
  max-width: 440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1rem 1.25rem 4rem 1.25rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.top-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.nav-btn {
  background: white;
  border: 1px solid #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
}

.nav-title {
  font-weight: 700;
  font-size: 1.05rem;
  color: #0f172a;
  margin-left: auto;
}

.demo-badge {
  background-color: #f0fdf4;
  border: 1px solid #dcfce7;
  padding: 0.65rem 0.85rem;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #15803d;
  margin-bottom: 1rem;
}

.main-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 1.25rem;
}

.cart-card {
  border: 2px solid #38bdf8;
  border-radius: 20px;
  padding: 1.1rem;
  background-color: #fafafa;
  margin-bottom: 1.5rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.item-icon {
  width: 38px;
  height: 38px;
  background: #e0f2fe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-details h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.item-details p {
  font-size: 0.75rem;
  color: #64748b;
  margin: 0;
}

.item-right {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.item-price {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
}

.btn-remove {
  background: #fee2e2;
  color: #ef4444;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 700;
}

.cart-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 0.8rem 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.4rem;
}

.total-row {
  font-size: 1.05rem;
  color: #0f172a;
  margin-top: 0.6rem;
}

.total-price {
  color: #15803d;
  font-weight: 800;
}

.payment-section {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title-row h3 {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: #0f172a;
}

.sub-tag {
  font-size: 0.62rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.5px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #0f172a;
}

.form-input {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #15803d;
  background-color: #ffffff;
}

.invalid-input {
  border-color: #ef4444 !important;
}

.error-msg {
  font-size: 0.72rem;
  color: #ef4444;
  font-weight: 600;
}

.btn-checkout {
  width: 100%;
  background-color: #15803d;
  color: white;
  border: none;
  padding: 0.95rem;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s;
}

.btn-checkout:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}

.confirmation-toast {
  background-color: #dcfce7;
  color: #15803d;
  padding: 0.85rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
}
</style>