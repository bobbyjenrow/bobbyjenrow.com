import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, {keyframes} from 'react-emotion'
import {css, injectGlobal} from 'emotion'

const childFactoryCreator = (props) => child => React.cloneElement(child, props)

const Wrapper = styled('div')`

`
const Routes = styled('section')`
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
`
const transitionGroupCSS = css(`
  position: relative;
  height: 100%;
`)
const Transitions = ({transition = '', duration = 0, pageKey, children}) => (
  <Wrapper>

    <TransitionGroup className={transitionGroupCSS}
     childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
    >
      <CSSTransition key={pageKey}>
        <Routes>
          { children }
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);

export default Transitions;

const slideInRight = keyframes`
0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(200%); }
75% { opacity: .5; transform: translateZ(-500px); }
100% { opacity: 1; transform: translateZ(0) translateX(0); }
`
const slideOutRight = keyframes`
0% { }
25% { opacity: .5; transform: translateZ(-500px); }
75% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
100% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
`
const slideRight = injectGlobal(`
  .slide-right-enter{
    animation: ${slideInRight} 1s ease-out;  }
  .slide-right-exit{
    animation: ${slideOutRight} 1s ease-out;  }
  .slide-right-exit-active {
    animation: ${slideOutRight} 1s ease-out;
  }
  .slide-right-enter-active{
    animation: ${slideInRight} 1s ease-out;
}
  `)


  const slideInLeft = keyframes`
  0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
  75% { opacity: .5; transform: translateZ(-500px); }
  100% { opacity: 1; transform: translateZ(0) translateX(0); }
  `
  const slideOutLeft = keyframes`
  0% { }
  25% { opacity: .5; transform: translateZ(-500px); }
  75% { opacity: .5; transform: translateZ(-500px) translateX(200%); }
  100% { opacity: .5; transform: translateZ(-500px) translateX(200%); }
  `
  const slideLeft = injectGlobal(`
    .slide-left-enter{
      animation: ${slideInLeft} 1s ease-out;  }
    .slide-left-exit{
      animation: ${slideOutLeft} 1s ease-out;  }
    .slide-left-exit-active {
      animation: ${slideOutLeft} 1s ease-out;
    }
    .slide-left-enter-active{
      animation: ${slideInLeft} 1s ease-out;
}
    `)
const fadeIn = keyframes`
0% {opacity: 0;}
25% {opacity: .5;}
75% {opacity: .5;}
100%{opacity: 1;}
`
const fadeOut = keyframes`
0% {opacity: 1;}
25% {opacity: .5;}
75% {opacity: .5;}
100%{opacity: 0;}
`
const fade = injectGlobal(`
  .fade-enter{
    animation: ${fadeIn} 1s ease-out;  }
  .fade-exit{
    animation: ${fadeOut} 1s ease-out;  }
  .fade-exit-active {
    animation: ${fadeIn} 1s ease-out;
  }
  .fade-enter-active
    animation: ${fadeOut} 1s ease-out;

`)
