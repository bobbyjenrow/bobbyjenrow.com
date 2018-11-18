import React, {Component} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'

import {pages} from '../state/mock-data';
import styled from 'react-emotion'
import createHistory from 'history/createBrowserHistory'
// Import Pages
import Home from '../pages/home'
import About from '../pages/about'
import Project from '../pages/project'
import Error404 from '../pages/error404'
import Transitions from './Transitions'


const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--background)
`


const componentSwitch = (page,type)=>{
  switch (type) {
    case 'home':
      return () => <Home page={page} />;
    case 'about':
      return () => <About page={page} />;
    case 'project':
      return () => <Project page={page} />;
    default:
      return () => <About page={page} />;
  }
}
const PageContainer = ({location})=>{
  let animation = location.state ? location.state.animation : {duration: 300, transition: 'fade'};
  return (
    <Wrapper location={location}>
    {console.log(location)}
      <Transitions pageKey={location.key} {...animation} >
            <Switch location={location}>
            {
              pages &&
              pages.map((p,i) => <Route key={i} exact path={p.url} render={componentSwitch(p , p.type)} />
              )
            }
            <Route component={Error404}/>
            </Switch>
      </Transitions>


    </Wrapper>
  )
};


export default withRouter(PageContainer);
