var model = {};
export default model;

// porperties
var posts,
    postsHash = {},
    latest;

// methods
model.allPosts = () => { return posts };
model.latestPosts = latestPosts;
model.fromPostHash = fromPostHash;


function latestPosts() {
  latest = latest || sortAndLimit(posts)
  return latest;
}

function sortAndLimit(posts) {
  let length  = posts.length;
  
  if (length == 0)
    return posts
  else if (length > 1)
    return posts.sort(byDate).slice(0,10);
  else {
    add2Hash(posts[0]);
    return posts;
  }
    
  
  function byDate(post1, post2) {
    var date1 = new Date(post1.date),
        date2 = new Date(post2.date);
    add2Hash(post1);
    add2Hash(post2);
    return date2.getTime() - date1.getTime();
  }
  
}

function add2Hash(post) {
  if( !postsHash[post.token] )
    postsHash[post.token] = post;
}

function fromPostHash(token) {
  if (!postsHash[token])
    sortAndLimit(posts);
    
  return postsHash[token] || {};
}

posts = [
  {
    title: "My Current Interests: May 2016",
    token: "my-current-interests:-may-2016",
    date: "Wed May 04 2016",
    post: `
    I'm currently learning <a target="_blank" rel="noopener noreferrer" target="_blank" href="http://elixir-lang.org">Elixir/Phoenix</a> and working with <a rel="noopener noreferrer" target="_blank" href="https://vuejs.org">Vue.js</a>.
    <br/>
    
    <h3>My impressions of Vue.js so far.</h3>
    <p>
    It's very easy to pick up if you have a background in <a target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/react/">React</a> or <a target="_blank" rel="noopener noreferrer" href="https://angularjs.org">Angular</a>. Essentially taking all the best aspects of angular and react but with a minimium api footprint. Also, <a rel="noopener noreferrer" target="_blank" href="http://brunch.io">Brunch</a> makes it very easy to work with.
    </p>
    
    <h3>My impressions of Elixir.</h3>
    <p>
    I haven't finished learning Elixir basics just yet, but so far it's very enjoyable. Brings back memories of my college Programming Paradigm class. Very functional in a pretty wrapper is the best way to discribe it. Say what you will about functional programming, but it's gives you great tools for concurrent programming.
    </p>
    `
  }
];
