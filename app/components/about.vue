<script>
  import Resume from './resume';
  
  export default {
    components: {
      MauroResume: Resume,
    }
  };
</script>

<template>
  <section>
    <div class="jumbotron">
      <div class="text-center">
        <h1>About Me</h1>
        <p>
          Information on what I've been up to.
        </p>
      </div>
    </div>
    
    <mauro-resume></mauro-resume>
  </section>
</template>
