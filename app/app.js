import Vue from 'vue';
import './directives';
import Nav from './components/nav';
import router from './routes';


var App = Vue.extend({
  components: {
    MauroNav: Nav,
  }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector.
router.start(App, 'html');
