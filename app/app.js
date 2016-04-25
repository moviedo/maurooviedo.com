'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Nav from './components/nav';

Vue.use(VueRouter);

new Vue({
  el: '#mauro-app',
  components: {
    MauroNav: Nav
  }
})
