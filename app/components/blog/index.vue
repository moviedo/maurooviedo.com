<script>
  import model from './model';
  
  export default {
    data: function() {
      return {
        query: undefined,
        posts: model.allPosts(),
        latestPosts: model.latestPosts()
      }
    }
  };
</script>

<template>
  <section>
    <div class="jumbotron">
      <div class="text-center">
        <h1>Welcome</h1>
        <p>
          Web developer, programmer, and generally interested in JavaScript, Python, Elixir, and Dev Ops.
        </p>
      </div>
    </div>
    
    <div class="container">
      <div class="col-md-6 col-lg-6">
        <form>
          <div class="form-group">
            <label for="search-post">
              <h2>Search Posts</h2>
            </label>
            
            <div class="input-group">
              <input type="text"
                  v-model="query"
                  class="form-control"
                  id="search-post"
                  placeholder="Search for..."/>
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Search</button>
              </span>
            </div>
            
            <ul class="list-group" v-show="query">
              <li class="list-group-item"
                  v-for="post in posts | filterBy query in 'title'">
                <a href="#">
                  {{ post.title }}
                </a>
              </li>
            </ul>
          </div>
        </form>
        
      </div>
      
      <div class="col-md-6 col-lg-6">
        <h2>Latest Posts</h2>
        
        <ul class="list-group"
            v-for="(key, post) in latestPosts">
          
          <li class="list-group-item">
            <a v-link="{ name: 'post', params: { blogToken: key } }">
              {{ post.title }}
            </a>
            
            Posted: <span>{{ post.date }}</span>
          </li>
        
        </ul>
      <div>
    </div>
  </section>
</template>
