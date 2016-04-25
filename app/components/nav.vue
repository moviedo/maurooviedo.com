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
  <header class="navbar navbar-default navbar-fixed-top">
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
        
        <a class="navbar-brand" href="#">Home</a>
      </div>

      <nav class="collapse navbar-collapse"
            v-bind:class="{ 'in': isToggled }"
            aria-expanded="{{ isToggled.toString() }}">
        <ul class="nav navbar-nav navbar-right">
          <li class="active">
            <a href="#">About</a>
          </li>
          
          <li>
            <a href="#">Contact</a>
          </li>
          
          <li>
            <a href="#">Reading</a>
          </li>
        </ul>
      </nav>
      
    </div>
  </header>
  
</template>
