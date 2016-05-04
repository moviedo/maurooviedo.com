import Vue from 'vue';
import Nav from './components/nav';
import router from './routes';


var App = Vue.extend({
  components: {
    MauroNav: Nav,
  },
  methods: {
    getTitle: getTitle
  }
});


function getTitle(path) {
  if (path === '/')
    return 'home';
  else
    return path.slice(1);
}

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector.
router.start(App, 'html');
