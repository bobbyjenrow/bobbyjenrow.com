import React from 'react';
import styled from 'react-emotion'
import {Link} from 'react-router-dom'
// Components to use

const Container = styled('div')`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

const Error404 = ({}) => (
  <Container className="container">
    <div className="content">
      <h1 className="headline">Oops!</h1>
      <h4 className="tagline">Something went wrong...</h4>
      <Link to={{pathname:'/', state: {animation: {duration: 300, transition: 'fade'}}}} >Go back home?</Link>
    </div>
    <div className="nav">
    </div>
  </Container>
);

export default Error404;
