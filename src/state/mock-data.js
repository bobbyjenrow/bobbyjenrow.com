const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const loremPic = 'https://picsum.photos/1200/1200'
const aboutData =
{body: lorem,
  bio: {home: 'Detroit, MI', school: "The Ohio State University", degree: "Biology, Pre-Health"},
  sections: [
    {name: 'coach', body: `Being a competitive year-round swim coach has occupied most of my professional life for the past decade. I love the art of working with people and helping them to become better versions of themselves. I find flow in navigating the difficulties of human interaction, and overcoming the inherently critical nature of athletics to build a positive, nurturing environment.`},
    {name: 'hike', body: `I spent six months in 2014 hiking the Appalachian trail (NoBo). You'd be surprised how liberating it is to have only one job -- walking in one direction, everyday. I love the hiker lifestyle, and also nerding out about ultralight gear choices!`},
    {name: 'code', body: `I like to write composable javascript. Functional design patterns, one-way data flow, and component-based reusable code make me smile! I also enjoy hackintoshing, raspberry pi-ing, crypocurrency mining, and other DIY type things. Check out my projects page for things that I've done. Check out my github link at the bottom for other things that aren't necessarily hosted yet.`},
    {name: 'climb', body: `Mostly bouldering, but also sport. Definitely a gym rat. I try to get up to Rumbling Bald for real rock when I can. I do climbing for the love of motion and the flow of moving through challenging sequences. Getting to the top is only incidental.`},
    {name: 'swim', body: `I grew up swimming. My parents were coaches. I swam in college. I love the community and everything it's done to make me who I am.`},
    {name: 'meditate', body: `Meditation influences every aspect of my life. How I relate to other people, to myself, and to things entirely out of my control. I've been doing it for about a decade, during which I've been on plenty of retreats. Currently practicing shamatha-vipassana, but not enlightened yet... probably. `}
  ],
  skills:['meditate','climb','hike','coach','mentor','code','swim']};
const projectsData = {
  body: `This is a collection of hobby projects I've worked on. Some are more polished than others, but click the links and check them out!`,
  projects: [
    {name: 'Recipes App', imageUrl: loremPic , body: `A single page application with a react + redux powered front end and and node + express back end. The client fetches recipes from the API and the data is filtered by search text.`, url: 'www.google.com', skills:['react', 'redux', 'node', 'express','mongodb','mongoose','webpack'] },
    {name: 'Wordpress Theme', imageUrl: loremPic, body: `A wordpress theme experiment for a fictional client.`, url: 'www.google.com', skills:['sass','postcss','webpack','wordpress'] },
    {name: 'No Smile Left Behind', imageUrl: loremPic, body: `Website developed for a dentist. No longer being used by the client, but hosted for your enjoyment.`, url: 'www.google.com', skills:['phenomic-cms', 'react', 'graphql'] },
  ]
  };


class Page {
  constructor(name,type='project',url,data,next,prev){
    this.name = name;
    this.url = url;
    this.data = data;
    this.type = type;
    this.next = next;
    this.prev = prev;
  }
}

export const pages =
    [
      new Page(
        'projects',
        'project',
        '/projects',
        projectsData,
        {name: 'home', url: '/'},
        {name: 'about' , url: '/about'}
      ),
      new Page(
        'home',
        'home' ,
        '/',
        {headline: "Bobby", tagline: "developer, coach, philosopher"},
        {name: 'about', url: '/about'},
        {name: 'projects' , url: '/projects'}
       ),
      new Page(
        'about',
        'about' ,
        '/about',
        aboutData,
        {name: 'projects', url: '/projects'},
        {name: 'home' , url: '/'}
        ),
    ];
