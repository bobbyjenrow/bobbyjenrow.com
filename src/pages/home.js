import React from 'react';
import ScrollNav from '../components/ScrollNav'
import styled from 'react-emotion'
import {css} from 'emotion'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const PageWrapper = styled('div')`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;
font-size: 1.4rem;
&.tagline{
  display: block;
  text-align: center;
}
`
const TaglineWrapper = styled('div')`
  display: grid;
  text-align: center;
  & h4{
    margin: 0;
  }
  & .r0{
  }
  & .r1{
    grid-row: 2;
    grid-column: 2;
  }
  & .r2{
    grid-row-start: 3;
    grid-column: 3;
  }
`

const contentFadeIn = {}

const Home = ({page}) => (
  <PageWrapper>
  {console.log('home')}
  <TransitionGroup>
  <CSSTransition timeout={300} classNames={contentFadeIn}>
    <div>
      <h1>{page.data.headline}</h1>
      <TaglineWrapper>
      {
              page.data.tagline.split(', ').map((t,i)=>(
                <h4 key={i} className={`tagline r${i}`}>{t}</h4>))
      }
      </TaglineWrapper>
    </div>
    </CSSTransition>
    </TransitionGroup>
    <ScrollNav left={page.prev} right={page.next}/>
  </PageWrapper>
);

export default Home;
