var model = {};
export default model;

// porperties
var posts,
    postsHash = [],
    latest;

// methods
model.allPosts = () => { return posts };
model.latestPosts = latestPosts;


function latestPosts() {
  latest = latest || sortAndLimit(posts)
  return latest;
}

function sortAndLimit(posts) {
  return posts.sort(byDate).slice(0,10);
  
  function byDate(post1, post2) {
    var date1 = new Date(post1.date),
        date2 = new Date(post2.date);
    add2Hash(post1);
    add2Hash(post2);
    return date2.getTime() - date1.getTime();
  }
  
}

function add2Hash(post) {
  if( !postsHash[post.title +':'+ post.date] )
    postsHash[post.title +':'+ post.date] = post;
}

posts = [
  {
    title: "My Current Interests",
    date: "Wed May 04 2016",
    post: `
    I'm currently learning <a href="elixir-lang.org">Elixir/Phoenix</a> and working with <a href="vuejs.org">Vue.js</a>.
    <br/>
    
    <h3>My impressions of Vue.js so far.</h3>
    <p>
    It's very easy to pick up if you have a background in <a href="https://facebook.github.io/react/">React</a> or <a href="angularjs.org">Angular</a>. Essentially taking all the best aspects of angular and react but with a minimium api footprint. Also, <a href="brunch.io">Brunch</a> makes it very easy to work with.
    </p>
    
    <h3>My impressions of Elixir.</h3>
    <p>
    I haven't finished learning Elixir basics just yet, but so far it's very enjoyable. Brings back memories of my college Programming Paradigm class. Very functional in a pretty wrapper is the best way to discribe it. Say what you will about functional programming, but it's gives you great tools for concurrent programming.
    </p>
    `
  }
];
