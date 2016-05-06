<script>
  import { tooltip } from 'vue-strap'
  import model from './model';

  export default {
    components: {
      tooltip: tooltip
    },
    data: function() {
      return model;
    },
    methods: {
      determineRows: determineRows,
      determineCols: determineCols
    }
  };
  
  let columns = 3;
  function determineRows(list) {
    return Math.ceil(list.length/columns);
  }
  
  function determineCols(list, row) {
    return list.slice(row, row + columns);
  }
</script>

<template>
  <section>
    <div class="jumbotron">
      <div class="text-center">
        <h1>My Reading List</h1>
        <p>
          My curated list of interesting articles.
        </p>
      </div>
    </div>
    
    <div class="container">
      
      <div class="row" v-for="row in determineRows(readingList)">
        
        <div class="col-md-4 col-lg-4"
              v-for="reading in determineCols(readingList, row)">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title">{{ reading.title }}</h3>
            </div>
            
            <div class="panel-body text-center">
              <ul class="list-group" v-for="item in reading.links">
                <li class="list-group-item">
                  <tooltip
                    trigger="hover"
                    effect="scale"
                    placement="top"
                    :content="item.description">
                  <a target="_blank" rel="noopener noreferrer" href="{{ item.url }}">{{ item.name }}</a>
                  </tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
