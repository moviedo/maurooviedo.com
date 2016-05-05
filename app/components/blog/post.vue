<script>
  import model from './model';
  
  export default {
    data: function() {
      return model.fromPostHash(this.$route.params.blogToken);
    }
  };
</script>

<template>
  <div class="container">
    
    <div v-if="title" class="panel panel-default">
      <div class="panel-heading">
        <h2 class="panel-title">{{ title }}</h2>
      </div>
      
      <p class="panel-body">
        {{{ post }}}
      </p>
      
      <div class="panel-footer">
        Posted: {{ date }}
      </div>
    </div>
    
    <div v-else class="panel panel-default">
      <p class="panel-body">
        PROBLEM FIND POST.
      </p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .container {
    margin-top: 106px;
  }
</style>
