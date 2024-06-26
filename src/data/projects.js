const data = [
  {
    linkDemo: "https://news-hub.pages.dev/",
    linkImg: "/res/news-hub.png",
    altImg: "News Hub",
    title: "News Hub",
    description:
      "A Vue App to locate articles and breaking news headlines",
    tags: "Vue.js, Vue Router, Pinia, Tailwind CSS, Cloudflare Functions, NewsAPI",
    linkWiki: "https://github.com/completejavascript/news-hub",
  },
  {
    linkDemo: "https://spacex-launch-archives.pages.dev/",
    linkImg: "/res/spacex-launch-archives.png",
    altImg: "SpaceX Launch Archives",
    title: "SpaceX Launch Archives",
    description: "A React App for tracking all SpaceX Launches in history",
    tags: "React, TypeScript, GraphQL, Apollo GraphQL, Tailwind CSS",
    linkWiki: "https://github.com/completejavascript/spacex-launch-archives",
  },
  {
    linkDemo: "https://share-yt-vid.netlify.app/",
    linkImg: "/res/share-yt-vid.png",
    altImg: "Share Youtube Video",
    title: "Share Youtube Video",
    description: "A Web Application with Firebase for sharing youtube videos",
    tags: "React Context, React Hooks, React Router, Firebase, Jest",
    linkWiki: "https://github.com/completejavascript/share-yt-vid",
  },
  {
    linkDemo: "https://gb-template.netlify.app/",
    linkImg: "/res/gb-blog-template.png",
    altImg: "Gatsby Blog Template",
    title: "Gatsby Blog Template",
    description: "A GatsbyJS Blog Template for blogging purpose.",
    tags: "React, GatsbyJS, Shiba.CSS",
    linkWiki: "https://github.com/completejavascript/gatsby-blog-template",
  },
  {
    linkDemo: "https://about.phamvanlam.com/shiba-css/",
    linkImg: "/res/shiba-css.png",
    altImg: "Shiba.CSS",
    title: "Shiba.CSS",
    description:
      "A simple and lightweight CSS Framework built with Sass for building responsive web apps.",
    tags: "SCSS, CSS framework",
    linkWiki: "https://github.com/completejavascript/shiba-css",
  },
  {
    linkDemo: "https://about.phamvanlam.com/tic-tac-toe/",
    linkImg: "/res/tic-tac-toe-game.png",
    altImg: "Tic-Tac-Toe Game",
    title: "Tic-Tac-Toe Game",
    description:
      "Unbeatable Tic-Tac-Toe game using React and Minimax Algorithm",
    tags: "React, Create-react-app, Minimax Algorithm",
    linkWiki: "https://github.com/completejavascript/tic-tac-toe",
  },
  {
    linkDemo: "https://api-completejavascript.vercel.app/",
    linkImg: "/res/api-complete-javascript.png",
    altImg: "Complete JavaScript's Public APIs",
    title: "Complete JavaScript's Public APIs",
    description:
      "A collection of some public RESTful APIs from Complete JavaScript",
    tags: "Node.js, Express, MongoDB, Pug, Mocha, Chai, Swagger-jsdoc",
    linkWiki:
      "https://github.com/completejavascript/api-completejavascript-com",
  },
  {
    linkDemo: "https://about.phamvanlam.com/the-algorithms-blog/",
    linkImg: "/res/algorithms-blog.png",
    altImg: "Algorithms blog",
    title: "Algorithms Blog",
    description: "My Algorithms Blog in Vietnamese with Gatsby.js and Netlify",
    tags: "React, GatsbyJS",
    linkWiki: "https://github.com/completejavascript/the-algorithms-blog",
  },
  {
    linkDemo: "https://about.phamvanlam.com/pomodoro-clock/",
    linkImg: "/res/pomodoro-clock.png",
    altImg: "Pomodoro Clock",
    title: "Pomodoro Clock",
    description: "A pomodoro clock for Pomodoro Technique Timer",
    tags: "React, Create-react-app",
    linkWiki: "https://github.com/completejavascript/pomodoro-clock",
  },
  {
    linkDemo: "https://about.phamvanlam.com/calculator/",
    linkImg: "/res/calculator.png",
    altImg: "Calculator",
    title: "Standard Calculator",
    description:
      "A basic Calculator with five functions for addition, subtraction, division, multiplication and modulo operation",
    tags: "React, Create-react-app",
    linkWiki: "https://github.com/completejavascript/calculator",
  },
  {
    linkDemo: "https://about.phamvanlam.com/drum-machine/",
    linkImg: "/res/drum-machine.png",
    altImg: "Drum machine",
    title: "Drum Machine",
    description: "A simple Drum Machine with Create-react-app",
    tags: "React, Create-react-app",
    linkWiki: "https://github.com/completejavascript/drum-machine",
  },
  {
    linkDemo: "https://about.phamvanlam.com/markdown-editor/",
    linkImg: "/res/markdown-editor.png",
    altImg: "Markdown Editor",
    title: "Markdown Editor",
    description:
      "A very simple but useful Markdown Editor with CodeMirror, Markedjs and Create-react-app",
    tags: "React, CodeMirror, Markedjs, Create-react-app",
    linkWiki: "https://github.com/completejavascript/markdown-editor",
  },
  {
    linkDemo: "https://about.phamvanlam.com/find-dog-you-love/",
    linkImg: "/res/find-dog-you-love.png",
    altImg: "Find Dog You Love",
    title: "Find Dog You Love",
    description:
      "List all Dog Breeds Images using Dog.CEO API. So people, who love dogs, can find a dog they love easily",
    tags: "ES6, jQuery, Dog API",
    linkWiki: "https://github.com/completejavascript/find-dog-you-love",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-the-twitchtv-json-api/",
    linkImg: "/res/fcc-the-twitchtv-json-api.png",
    altImg: "Twitchtv JSON API",
    title: "Use the Twitch.tv JSON API",
    description:
      "A simple Twitch app displaying channel streaming status using Twitch.tv JSON API",
    tags: "ES6, jQuery, Twitch.tv API",
    linkWiki: "https://github.com/completejavascript/fcc-the-twitchtv-json-api",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-wikipedia-viewer/",
    linkImg: "/res/fcc-build-wikipedia-viewer.png",
    altImg: "Wikipedia Viewer",
    title: "Wikipedia Viewer",
    description:
      "Search Something on Wikipedia.org or View a Random Wikipedia Article",
    tags: "ES6, Vanilla js, Wikipedia API",
    linkWiki: "https://github.com/completejavascript/fcc-wikipedia-viewer",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-local-weather/",
    linkImg: "/res/fcc-show-local-weather.png",
    altImg: "Show local weather",
    title: "Weather App",
    description:
      "Showing the Local Weather on Currently, Next 48 Hours and Next 7 Days",
    tags: "JQuery, DarkSky API, Skycons",
    linkWiki: "https://github.com/completejavascript/fcc-local-weather",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-random-quote-machine/",
    linkImg: "/res/fcc-build-random-quote-machine.png",
    altImg: "Build a random quote machine",
    title: "Random Quote Machine",
    description:
      "Machine for Showing Random Quote, Sharing on Twitter, Tumblr and Facebook Comment Plugin Embedded",
    tags: "JQuery, Forismatic API",
    linkWiki: "https://github.com/completejavascript/fcc-random-quote-machine",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-personal-portfolio/",
    linkImg: "/res/fcc-build-personal-portfolio.png",
    altImg: "Build a personal portfolio image",
    title: "Personal Portfolio",
    description:
      "Personal Portfolio Landing Page for Sharing Personal Infomation, Skills, Projects,...",
    tags: "JQuery, Mustache.js",
    linkWiki: "https://github.com/completejavascript/fcc-personal-portfolio",
  },
  {
    linkDemo: "https://about.phamvanlam.com/fcc-tribute-page/",
    linkImg: "/res/fcc-build-tribute-page.png",
    altImg: "Build a tribute page project image",
    title: "Tribute Page",
    description: "Tribute Page for Brendan Eich - Founder of JavaScript",
    tags: "Bootstrap, JQuery",
    linkWiki: "https://github.com/completejavascript/fcc-tribute-page",
  },
];

export default data;
