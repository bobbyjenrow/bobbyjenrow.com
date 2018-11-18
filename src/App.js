import React, { Component } from 'react';
import {pages} from './state/mock-data';
import {injectGlobal} from 'emotion';
import styled from 'react-emotion';
import PageContainer from './components/PageContainer'
// Routing
import {BrowserRouter as Router} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
          <PageContainer />
      </Router>
    );
  }
}

// Global Styles
injectGlobal(`
@import url('https://fonts.googleapis.com/css?family=Poppins|Raleway|Source+Code+Pro');
:root{
  /* Colors */
  --primary: #111A26;
  --accent:  salmon;
  --accent-l: color(salmon lightness(40%));
  --text: #DEE3E7;
  --background: #111A26;
  /* Fonts */
  --base-font-size: 20px;
  --font-family-body: 'Raleway', sans-serif;
  --font-family-heading: 'Poppins', sans-serif;
  --font-family-code: 'Source Code Pro', sans-serif;
}
*{
  box-sizing: border-box;
}

html,body,#root{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--primary);
}

body{
  font-size:  var(--base-font-size);
  font-family: var(--font-family-body);
  font-weight: 300;
  color: var(--text);
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6{
  font-family: var(--font-family-heading);
  font-weight: 300;
}
a{
  color: var(--accent);
  text-decoration: none;
}
a:hover{
  color: var(--accent-l);
}

code {
  font-family: "Source Code Pro", Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`)


export default App;
