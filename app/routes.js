import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from './components/blog';
import Post from './components/blog/post';
import About from './components/about';
import Reading from './components/reading';
import Contact from './components/contact';

// Install VueRouter
Vue.use(VueRouter);

// Create a router instance.
var router = new VueRouter();
export default router;

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
router.map({
  '/': {
    name: 'home',
    component: Blog
  },
  '/about': {
    name: 'about',
    component: About
  },
  '/reading': {
    name: 'reading',
    component: Reading
  },
  '/contact': {
    name: 'contact',
    component: Contact
  },
  '/blog': {
    name: 'blog',
    component: Blog
  },
  '/blog/:blogToken': {
    name: 'post',
    component: Post
  },
});
