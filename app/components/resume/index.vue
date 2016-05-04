<script>
  import Experience from './experience';
  import Education from './education';
  import model from './model';

  export default {
    components: {
      MauroEdu: Education,
      MauroExp: Experience
    },
    data: function() {
      return model;
    }
  };
</script>

<template>
  <div class="container">
    <section>
      <div class="page-header">
        <h2>{{ statement.title }}</h2>
      </div>
      <p>{{{ statement.data }}}</p>
    </section>
    
    <mauro-exp :data.once="experience">
    </mauro-exp>
    
    <mauro-edu :data.once="eduction">
    </mauro-edu>
  </div>
</template>
