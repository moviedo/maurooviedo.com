export default {
  experience: {
    title: "Experience",
    data: [
      {
        duration: "March 2015 – Current",
        company: "Zipari",
        location: "New York, NY",
        responsibilities: [
          {
            summary: 'Lead developer working with sales team to build and deploy demo environments.',
            details: [
              'Architected multi-demo deployment using Jenkins and Chef.',
              'Setup EC2 instances with Chef.',
              'Automated demo configurations with <strong>python</strong> scripts.',
              'Setup git workflow for working with multiple client demos.',
            ]
          },
          {
            summary: 'Lead developer in charge of AWS dev ops.',
            details: [
              'Maintained old infrastructure using **Puppet** for automation & deployment.',
              'Migrated old infrastructure to **Chef** for automation & deployment.',
              'Maintained old **Jenkins** scripts and created new scripts.',
              'Deployed production features and resolved **python** related production issues.',
            ]
          },
          {
            summary: 'Collaborated with developers to build and deploy SaaS products using python & angular.',
            details: [
              'Helped build and deploy search product, Scout.',
              'Helped rebuild and deploy insurance shopping product, Square.',
              'Updated and maintained other services that relied on <strong>django</strong> and/or <strong>flask</strong>.',
              'Introduced standardized front-end workflow using **brunch**.'
            ]
          },
          {
            summary: 'Administered marketing Wordpress site.',
            details: [
              'Deployed <strong>Wordpress</strong> site on <strong>AWS</strong>.',
              'Administered site from brute-force attack.',
              'Setup monitoring and database backups.',
            ]
          },
        ]
      },
      {
        duration: "February 2014 – March 2015",
        company: "Dom and Tom",
        location: "New York, NY",
        responsibilities: [
          {
            summary: 'Interacted with clients, developers, designers and project managers to meet client needs.',
            details: [
              'Helped clients scope out projects and aticulate ideas into functional applications',
              'Updated/migrated web properties from different platforms.'
            ]
          },
          {
            summary: 'Collaborated with other developers to build javascript Single Page Applications.',
            details: [
              'Worked extensively with <strong>Marionette.js</strong> to build single view web applications.',
              'Worked with <strong>Grunt</strong> for javascript preprocessing.'
            ]
          },
          {
            summary: 'Worked with Laravel Php framework, for server-side web development.',
            details: [
              'Build <strong>REST</strong>ful APIs for mobile application.',
              'Leveraged <strong>OAuth2</strong> library for mobile app authentication.'
            ]
          }
        ]
      },
      {
        duration: "September 2013 – February 2014",
        company: "Food To Eat",
        location: "New York, NY",
        responsibilities: [
          {
            summary: "Collaborated with lead developer to build online food ordering platform focused on food trucks.",
            details: [
              'Leveraged <strong>backbone.js</strong> to build customer facing portion of application.',
              'Focused on using <strong>OpenLayers</strong> and <strong>Geodjango</strong> to create user interface for adding food truck locations and to display food delivery zones.'
            ]
          },
          {
            summary: 'Worked with Twilio API service to create order notification system.',
            details: [
              'Wired up <strong>Twilio</strong> with <strong>django</strong>  application in order to send encoded text messages to POS printer.'
            ]
          },
          {
            summary: 'Introduced RequireJS into application development.',
            details: [
              'Used <strong>RequireJS</strong> to build modular components and to ease development flow.'
            ]
          },
          {
            summary: 'Added facebook integrating into platform.',
            details: [
              'Created friend finding service using facebook graph api.'
            ]
          }
        ]
      },
      {
        duration: "June 2013 – August 2013",
        company: "PublicStuff",
        location: "New York, NY",
        responsibilities: [
        ]
      },
      {
        duration: "October 2012 – March 2013",
        company: "Insticator",
        location: "New York, NY",
        responsibilities: [
        ]
      },
      {
        duration: "June 2012 – August 2012",
        company: "VIP Art",
        location: "New York, NY",
        responsibilities: [
        ]
      }
    ]
  },
  
  statement: {
    title: "Personal Statement",
    data: `
    I'm an experienced Full Stack web developer who likes working on challenging problems with smart people. I use my skills as a Full Stack developer to gain insight on the bigger picture when breaking down problems and finding solutions that meet given constraints. I like working with groups to solve problems, but I'm perfectly capable of working individually.<br/>
    <br/>
    Given the opportunity I would love to work with an organization that practices test driven development and/or code reviews.
    `
  },
  
  eduction: {
    title: "Education",
    school: "CUNY: The City College of New York",
    degree: "Bachelors of Science in Computer Science",
    location: "New York, NY"
  },
  
  interests: {
    title: "Current Interests",
    data: `
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
  
};
