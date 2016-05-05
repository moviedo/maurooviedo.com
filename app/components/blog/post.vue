<script>
  export default {
    
  };
</script>

<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2 class="panel-title">{{ title }}</h2>
      </div>
      
      <p class="panel-body">
        {{ post }}
      </p>
      
      <div class="panel-footer">
        Posted: {{ date }}
      </div>
    </div>
  </div>
</template>
