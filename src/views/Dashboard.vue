<template>
  <div class="app-layout">
    
    <!-- Desktop Sidebar Navigation (Collapsible) -->
    <aside class="desktop-sidebar" :class="{ 'collapsed': isSidebarCollapsed }">
      <div class="sidebar-header-row">
        <div class="sidebar-brand" v-show="!isSidebarCollapsed">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <span class="brand-title">SkillStack</span>
        </div>
        <!-- Collapse Toggle Button -->
        <button class="collapse-toggle-btn" @click="toggleSidebar" :title="isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'">
          {{ isSidebarCollapsed ? '⮞' : '⮜' }}
        </button>
      </div>

      <nav class="sidebar-nav">
        <router-link to="/dashboard" class="sidebar-item active" :title="'Home'">
          <span>🏠</span> <span class="item-text" v-show="!isSidebarCollapsed">Home</span>
        </router-link>
        <router-link to="/course-details" class="sidebar-item" :title="'Courses'">
          <span>📖</span> <span class="item-text" v-show="!isSidebarCollapsed">Courses</span>
        </router-link>
        <router-link to="/enrollment" class="sidebar-item" :title="'Enrolled'">
          <span>🔖</span> <span class="item-text" v-show="!isSidebarCollapsed">Enrolled</span>
        </router-link>
        <router-link to="/profile" class="sidebar-item" :title="'Profile'">
          <span>👤</span> <span class="item-text" v-show="!isSidebarCollapsed">Profile</span>
        </router-link>
      </nav>

      <!-- Logout Button at bottom of Sidebar -->
      <div class="sidebar-footer">
        <button class="logout-btn" @click="confirmLogout" :title="'Logout'">
          <span>🚪</span> <span class="item-text" v-show="!isSidebarCollapsed">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="dashboard-container" :class="{ 'expanded-container': isSidebarCollapsed }">
      
      <!-- Top Header: Notification Bell Only -->
      <header class="top-header">
        <div class="header-right-actions">
          <div class="notification-btn">🔔</div>
        </div>
      </header>

      <!-- Welcome Banner Card -->
      <section class="welcome-banner">
        <div class="banner-text">
          <span class="banner-tag">YOUR NEXT CHAPTER STARTS TODAY</span>
          <h2>Welcome back, Alex!</h2>
          <p>Ready to level up your tech stack today?</p>
        </div>
      </section>

      <!-- Metrics Summary Cards Grid -->
      <section class="metrics-grid">
        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-number">12</span>
            <span class="metric-icon">📊</span>
          </div>
          <span class="metric-label">Total Courses</span>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-number">3</span>
            <span class="metric-icon">🔖</span>
          </div>
          <span class="metric-label">Enrolled</span>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-number">2</span>
            <span class="metric-icon">⚡</span>
          </div>
          <span class="metric-label">Active</span>
        </div>
      </section>

      <!-- Section Heading & Filter Tabs -->
      <section class="courses-section">
        <div class="section-header">
          <h3>Find your next skill</h3>
          <a href="#" class="see-all">See all</a>
        </div>

        <!-- Filter Pills -->
        <div class="filter-tabs">
          <button class="tab active">All tracks</button>
          <button class="tab">Coding</button>
          <button class="tab">Design</button>
          <button class="tab">Data</button>
        </div>

        <!-- 6 Static Course Cards Grid using Catalog Images -->
        <div class="course-cards-grid">
          <div v-for="course in staticCourses" :key="course.id" class="static-course-card">
            <div class="card-img-wrapper">
              <img :src="course.image" :alt="course.title" class="course-asset-img" />
              <span class="card-price">£{{ course.price }}</span>
            </div>
            <div class="card-details">
              <span class="card-meta">{{ course.level }} · {{ course.duration }}</span>
              <h4>{{ course.title }}</h4>
              <div class="card-footer-info">
                <span class="rating">⭐ {{ course.rating }}</span>
                <span class="static-badge">Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mobile Bottom Navigation Bar (Hidden on desktop) -->
      <nav class="bottom-nav mobile-only-flex">
        <router-link to="/dashboard" class="nav-item active">
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
        <router-link to="/profile" class="nav-item">
          <span class="nav-icon">👤</span>
          <span class="nav-label">Profile</span>
        </router-link>
      </nav>

    </main>

    <!-- Logout Confirmation & Success Modal Overlay -->
    <div v-if="showLogoutModal" class="modal-overlay">
      <div class="modal-card">
        <div v-if="!logoutSuccess">
          <h3>Confirm Logout</h3>
          <p>Are you sure you want to log out of SkillStack Academy?</p>
          <div class="modal-actions">
            <button class="btn-cancel" @click="showLogoutModal = false">Cancel</button>
            <button class="btn-confirm-logout" @click="executeLogout">Yes, Logout</button>
          </div>
        </div>
        <div v-else class="success-state">
          <div class="success-icon">✅</div>
          <h3>Logged out successfully!</h3>
          <p>Redirecting to login screen...</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sidebar Collapse State
const isSidebarCollapsed = ref(false);

// Logout Modal & Success States
const showLogoutModal = ref(false);
const logoutSuccess = ref(false);

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
}

function confirmLogout() {
  logoutSuccess.value = false;
  showLogoutModal.value = true;
}

function executeLogout() {
  logoutSuccess.value = true;
  setTimeout(() => {
    showLogoutModal.value = false;
    router.push('/login');
  }, 1500);
}

// 6 Static Courses data with the matching course catalog images
const staticCourses = ref([
  { 
    id: 1, 
    title: 'Cloud Computing', 
    level: 'Beginner', 
    duration: '24 hours', 
    price: 120, 
    rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    title: 'Cyber Security Basics', 
    level: 'Beginner', 
    duration: '18 hours', 
    price: 110, 
    rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    title: 'Data Science', 
    level: 'Intermediate', 
    duration: '30 hours', 
    price: 100, 
    rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    title: 'Database Management', 
    level: 'Advanced', 
    duration: '22 hours', 
    price: 85, 
    rating: 4.7, 
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&auto=format&fit=crop&q=80' 
  },
  { 
    id: 5, 
    title: 'Digital Marketing', 
    level: 'Beginner', 
    duration: '15 hours', 
    price: 65, 
    rating: 4.6, 
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&auto=format&fit=crop&q=80' 
  },
  { 
    id: 6, 
    title: 'Machine Learning', 
    level: 'Intermediate', 
    duration: '20 hours', 
    price: 130, 
    rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&auto=format&fit=crop&q=80' 
  }
]);
</script>

<style scoped>
/* Base Mobile View Defaults */
.app-layout {
  min-height: 100vh;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
}

.desktop-sidebar {
  display: none;
}

.dashboard-container {
  width: 100%;
  max-width: 440px;
  min-height: 100vh;
  padding: 1.5rem 1.25rem 5rem 1.25rem;
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
}

.desktop-only {
  display: none;
}

.mobile-only-flex {
  display: flex;
}

/* Top Header */
.top-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.25rem;
  padding-top: 0.5rem;
}

.header-right-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  width: 38px;
  height: 38px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  cursor: pointer;
}

/* Welcome Banner */
.welcome-banner {
  background: linear-gradient(135deg, #022c22 0%, #064e3b 50%, #15803d 100%);
  border-radius: 20px;
  padding: 1.75rem 2rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 12px 24px -6px rgba(21, 128, 61, 0.25);
  position: relative;
  overflow: hidden;
}

.banner-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #86efac;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: inline-block;
}

.welcome-banner h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0.2rem 0 0.4rem 0;
}

.welcome-banner p {
  font-size: 0.9rem;
  color: #d1fae5;
  margin: 0;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.metric-card {
  background: white;
  padding: 0.85rem;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}

.metric-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
}

.metric-icon {
  font-size: 0.9rem;
}

.metric-label {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
}

/* Courses Section */
.courses-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.see-all {
  font-size: 0.8rem;
  color: #15803d;
  font-weight: 600;
  text-decoration: none;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  padding-bottom: 0.2rem;
}

.tab {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.85rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.tab.active {
  background-color: #15803d;
  color: white;
  border-color: #15803d;
}

/* Static Course Cards Grid */
.course-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}

.static-course-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}

.card-img-wrapper {
  position: relative;
  width: 100%;
  height: 120px;
}

.course-asset-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-price {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(15, 23, 42, 0.85);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
}

.card-details {
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-meta {
  font-size: 0.68rem;
  color: #15803d;
  font-weight: 700;
}

.card-details h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.card-footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #64748b;
}

.static-badge {
  background: #f1f5f9;
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 600;
}

/* Mobile Bottom Navigation Bar */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 440px;
  margin: 0 auto;
  background: white;
  border-top: 1px solid #e2e8f0;
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

/* Modal Overlay Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.modal-card h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.modal-card p {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-cancel, .btn-confirm-logout {
  flex: 1;
  padding: 0.75rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
}

.btn-cancel {
  background: #f1f5f9;
  color: #64748b;
}

.btn-confirm-logout {
  background: #dc2626;
  color: white;
}

.success-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.success-icon {
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
}


/* ==========================================
   DESKTOP RESPONSIVE BREAKPOINT (min-width: 768px)
   ========================================== */
@media (min-width: 768px) {
  .app-layout {
    justify-content: flex-start;
  }

  /* Show Desktop Sidebar (Default Expanded width: 260px) */
  .desktop-sidebar {
    display: flex;
    flex-direction: column;
    width: 260px;
    background: white;
    border-right: 1px solid #e2e8f0;
    padding: 1.5rem 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
    z-index: 10;
  }

  /* Collapsed state for sidebar */
  .desktop-sidebar.collapsed {
    width: 80px;
    padding: 1.5rem 0.5rem;
  }

  .sidebar-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 1.25rem;
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    overflow: hidden;
  }

  .collapse-toggle-btn {
    background: #f1f5f9;
    border: none;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    text-decoration: none;
    color: #64748b;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .desktop-sidebar.collapsed .sidebar-item {
    justify-content: center;
    padding: 0.75rem 0;
  }

  .sidebar-item:hover, .sidebar-item.active {
    background-color: #f0fdf4;
    color: #15803d;
  }

  .sidebar-footer {
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
  }

  .logout-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: #fef2f2;
    color: #dc2626;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
    white-space: nowrap;
  }

  .desktop-sidebar.collapsed .logout-btn {
    justify-content: center;
    padding: 0.75rem 0;
  }

  .logout-btn:hover {
    background: #fee2e2;
  }

  /* Shift Dashboard Content right dynamically based on sidebar state */
  .dashboard-container {
    margin-left: 260px;
    max-width: 1050px;
    padding: 2rem 2.5rem;
    transition: margin-left 0.3s ease;
  }

  .dashboard-container.expanded-container {
    margin-left: 80px;
  }

  .mobile-only {
    display: none !important;
  }

  .mobile-only-flex {
    display: none !important; /* Hide mobile bottom nav */
  }

  /* Expand course card grid into 3 columns on wide desktop screens */
  .course-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}
</style>