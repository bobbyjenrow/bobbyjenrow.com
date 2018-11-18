import React from 'react';
import {PageWrapper} from '../styled/Page'
import ScrollNav from '../components/ScrollNav'
import styled from 'react-emotion'


const Content = styled('div')`
  max-width: 748px;
  padding: 2rem;
  text-align: justify;
  position: relative;
  margin-bottom: 200px;
  & .skill-title{
    text-align: center;
  }
`
const Intro = styled('section')`
  padding: 0  0 5rem 0;
`
const Skills = styled('div')`
  width: 100%;
  max-width: 748px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 4rem;

`
const Skill = styled('a')`
  display: block;
  text-align: center;
  padding: 1rem;
  &:hover{
    cursor: pointer;
  }
`
const Bio = styled('section')`
  display: flex;
  justify-content: center;
    padding: 0 0 5rem 0;
`
const BioCaptions = styled('section')`
  text-align: right;
  color: var(--accent);
  margin-right: .5rem;
  & p{
    margin: 0;
  }
`
const BioData = styled('section')`
  text-align: left;
  margin-left: .5rem;
  & p{
    margin: 0;
  }
`
const Section = styled('section')`
margin-top: 2rem;
margin-bottom: 4rem;
`
// Components to use

const About = ({page}) => (
  <PageWrapper className="container">
  {console.log('about')}
    <Content className="content">
      <Intro >
      <h1 style={{textAlign: 'center'}}>About me</h1>
      <p style={{textAlign: 'center'}}>I do a lot of different things. Maybe this makes me indecisive, but I have a great time doing it. Interested in what I'm up to? Have a look down below to find out.</p>
      </Intro>
      <Bio>
        <BioCaptions>
        <p>from</p>
        <p>studied</p>
        <p>at</p>
        </BioCaptions>
        <BioData>
        <p>{page.data.bio.home}</p>
        <p>{page.data.bio.degree}</p>
        <p>{page.data.bio.school}</p>
        </BioData>
      </Bio>
      <h2 className="skill-title" >skills</h2>
    <Skills>
      {
        page.data.sections.map((s,i)=>(
          <Skill href={`#${s.name}`} >{s.name}</Skill>
        ))
      }
    </Skills>
      {
        page.data.sections.map((s,i)=>(
          <Section id={s.name}>
            <h2>{s.name}</h2>
            <p>{s.body}</p>
          </Section>
        ))
      }
    </Content>
    <ScrollNav left={page.prev} right={page.next}/>
  </PageWrapper>
);

export default About;
