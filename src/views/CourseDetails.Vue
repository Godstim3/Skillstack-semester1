<template>
  <div class="courses-container">
    
    <!-- Top Navigation Header -->
    <header class="top-nav">
      <button class="nav-btn" @click="goBack">&larr;</button>
      <span class="nav-title">Course Catalog</span>
      <button class="cart-btn" @click="toggleCart">
        🛒 <span class="cart-badge">{{ cart.length }}</span>
      </button>
    </header>

    <!-- Sorting Controls (Faculty Requirement) -->
    <section class="sort-section">
      <div class="sort-group">
        <label>Sort by:</label>
        <select v-model="sortBy" class="select-box">
          <option value="subject">Subject</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
          <option value="space">Availability (Spaces)</option>
        </select>
      </div>

      <div class="sort-group">
        <label>Order:</label>
        <select v-model="sortOrder" class="select-box">
          <option value="asc">Ascending (A-Z / Low-High)</option>
          <option value="desc">Descending (Z-A / High-Low)</option>
        </select>
      </div>
    </section>

    <!-- Lesson List rendered dynamically using v-for (Faculty Requirement) -->
    <section class="lessons-grid">
      <div v-for="lesson in sortedLessons" :key="lesson.id" class="lesson-card">
        <div class="lesson-image-wrapper">
          <img :src="lesson.image" :alt="lesson.subject" class="lesson-img" />
          <span class="price-tag">£{{ lesson.price }}</span>
        </div>

        <div class="lesson-info">
          <h3>{{ lesson.subject }}</h3>
          <p class="location">📍 {{ lesson.location }}</p>
          <p class="availability" :class="{ 'sold-out': lesson.space === 0 }">
            {{ lesson.space > 0 ? `${lesson.space} spaces available` : 'Sold Out' }}
          </p>

          <!-- Add to Cart Button: Always visible, enabled only when space > 0 -->
          <button 
            class="btn-add-cart" 
            :disabled="lesson.space === 0"
            @click="addToCart(lesson)"
          >
            {{ lesson.space > 0 ? 'Add to Cart' : 'Unavailable' }}
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sorting state
const sortBy = ref('subject');
const sortOrder = ref('asc');

// Shopping cart state
const cart = ref([]);

// Mock lessons array containing at least 10 items (Faculty Requirement)
const lessons = ref([
  { id: 1, subject: 'Web Development', location: 'Hendon', price: 90, space: 5, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80' },
  { id: 2, subject: 'UI/UX Design', location: 'Colindale', price: 80, space: 3, image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&auto=format&fit=crop&q=80' },
  { id: 3, subject: 'Data Science', location: 'Brent Cross', price: 100, space: 5, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80' },
  { id: 4, subject: 'Python Programming', location: 'Golders Green', price: 75, space: 2, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=80' },
  { id: 5, subject: 'Mobile App Development', location: 'Hendon', price: 95, space: 5, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&auto=format&fit=crop&q=80' },
  { id: 6, subject: 'Cyber Security Basics', location: 'Wembley', price: 110, space: 4, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&auto=format&fit=crop&q=80' },
  { id: 7, subject: 'Cloud Computing', location: 'Colindale', price: 120, space: 5, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=80' },
  { id: 8, subject: 'Digital Marketing', location: 'Brent Cross', price: 65, space: 5, image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&auto=format&fit=crop&q=80' },
  { id: 9, subject: 'Machine Learning', location: 'Hendon', price: 130, space: 1, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&auto=format&fit=crop&q=80' },
  { id: 10, subject: 'Database Management', location: 'Golders Green', price: 85, space: 5, image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&auto=format&fit=crop&q=80' }
]);

// Computed property for sorting lessons dynamically (Faculty Requirement)
const sortedLessons = computed(() => {
  return [...lessons.value].sort((a, b) => {
    let modifier = sortOrder.value === 'asc' ? 1 : -1;
    let aVal = a[sortBy.value];
    let bVal = b[sortBy.value];

    if (typeof aVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (aVal - bVal) * modifier;
  });
});

// Add to cart interaction: reduces remaining space by 1 (Faculty Requirement)
function addToCart(lesson) {
  if (lesson.space > 0) {
    lesson.space--;
    cart.value.push(lesson);
  }
}

function goBack() {
  router.push('/dashboard');
}

function toggleCart() {
  router.push('/enrollment');
}
</script>

<style scoped>
.courses-container {
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1.5rem;
  background-color: #f8fafc;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.nav-btn, .cart-btn {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.nav-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f172a;
}

.sort-section {
  display: flex;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}

.sort-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.sort-group label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
}

.select-box {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 0.85rem;
  background: #f8fafc;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
}

.lesson-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.lesson-image-wrapper {
  position: relative;
  height: 130px;
}

.lesson-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.price-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(15, 23, 42, 0.8);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.lesson-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-grow: 1;
}

.lesson-info h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.location {
  font-size: 0.78rem;
  color: #64748b;
  margin: 0;
}

.availability {
  font-size: 0.75rem;
  font-weight: 600;
  color: #15803d;
  margin: 0 0 0.5rem 0;
}

.availability.sold-out {
  color: #dc2626;
}

.btn-add-cart {
  width: 100%;
  background-color: #15803d;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  transition: background-color 0.2s;
}

.btn-add-cart:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}
</style>