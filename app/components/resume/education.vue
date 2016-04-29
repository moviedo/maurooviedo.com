<script>
  export default {
    props: {
      data: {
        type: Object
      }
    }
  };

</script>

<template>
    <section>
      <div class="page-header">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="row">
        <p class="col-md-6 colo-lg-6">
          {{ data.school }}
        </p>
        <p class="col-md-6 colo-lg-6">
          {{ data.location }}
        </p>
        <p class="col-md-6 colo-lg-6">
          {{ data.degree }}
        </p>
        
        <br/>
      </div>
    </section>
</template>
