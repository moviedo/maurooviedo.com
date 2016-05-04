<script>
  export default {
    data: () => {
      return {
        isToggled: false
      };
    },
    methods: {
      toggle: function() {
        this.isToggled = !this.isToggled;
      }
    }
  };
  
  function toggle() {
    
  }
</script>

<template>
  <header role="navigation" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
    
      <div class="navbar-header">
        <button type="button"
                v-on:click="toggle"
                class="navbar-toggle"
                v-bind:class="{ 'collapsed': !isToggled }"
                aria-expanded="{{ isToggled.toString() }}">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        
        <a class="navbar-brand"  v-link="{ name: 'home' }">Home</a>
      </div>

      <nav class="collapse navbar-collapse"
            v-bind:class="{ 'in': isToggled }"
            aria-expanded="{{ isToggled.toString() }}">
        
        <ul class="nav navbar-nav navbar-right">
          <li v-bind:class="{'active': $route.name == 'about' }">
            <a v-link="{ name: 'about' }">About</a>
          </li>
          
          <li v-bind:class="{'active': $route.name == 'reading' }">
            <a v-link="{ name: 'reading' }">Reading</a>
          </li>
          
          <li v-bind:class="{'active': $route.name == 'contact' }">
            <a v-link="{ name: 'contact' }">Contact</a>
          </li>
        </ul>
      </nav>
      
    </div>
  </header>
  
</template>
