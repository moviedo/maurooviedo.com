<script>
  import { accordion, panel } from 'vue-strap'
  
  export default {
    components: {
      accordion: accordion,
      panel: panel
    },
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
    
    <template v-for="exp in data.data">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <strong>{{ exp.company }}</strong>
        </div>
      </div>
      
      <div class="row">
        <p class="col-md-3 col-lg-3">
          {{ exp.duration }}<br/>
          {{ exp.location }}
        </p>
        
        <div class="col-md-9 col-lg-9">
          <accordion :one-at-atime="false" v-for="res in exp.responsibilities">
            <panel :header="res.summary">
              <ul v-for="detail in res.details">
                <li>{{{ detail }}}</li>
              </ul>
            </panel>
          </accordion>
          
        </div>
        
        
      </div>
    </template>
  </section>
</template>
