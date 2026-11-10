import { createRouter, createWebHistory } from 'vue-router';
import Splash from '../views/Splash.vue';
import GetStarted from '../views/GetStarted.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Dashboard from '../views/Dashboard.vue';
import CourseDetails from '../views/CourseDetails.vue';
import Enrollment from '../views/Enrollment.vue';
import Profile from '../views/Profile.vue';   

const routes = [
  { 
    path: '/', 
    name: 'Splash', 
    component: Splash 
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard 
  },
  {
    path: '/course-details',
    name: 'CourseDetails',
    component: CourseDetails
  },
  {
    path: '/enrollment',
    name: 'Enrollment',
    component: Enrollment
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;