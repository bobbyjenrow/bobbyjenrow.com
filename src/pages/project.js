import React from 'react';
import {PageWrapper} from '../styled/Page'
import {css,cx} from 'emotion'
import ScrollNav from '../components/ScrollNav'
import styled from 'react-emotion'

const Content = styled('div')`
max-width: 748px;
padding: 2rem;
text-align: justify;
position: relative;
margin-bottom: 200px;
display: grid;

@media screen and (min-width: 748px){
  grid-template-columns: 1fr 1fr;
}
@media screen and (min-width: 1148px){
  max-width: 1200px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
`
const ProjectItemsCaption = styled('article')`

  max-width: 400px;
  @media screen and (min-width: 748px){
    padding: 2rem;
        grid-row: 1 / span 3;
  }
  @media screen and (min-width: 1148px){
    grid-row: 1 / span 3;
  }
`
const ProjectItem = styled('article')`
  max-width: 400px;

  ${dynamicImageStyle}
  & .skill{
    font-size: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
  }
  & .skill-box{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    color: var(--accent);
  }
  & .skill-title{
    text-align: center;
    margin: 0;
  }
  @media screen and (min-width: 748px){
    padding: 2rem;
  }
`
const Image = styled('img')`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 2px;
`

const dynamicImageStyle = (props) => css(`
  background: url(${props.image});
`)

const Project = ({page}) => (
  <PageWrapper className="container">
  {console.log('project')}
  <Content className="content">
    <ProjectItemsCaption>
    <h1>{page.name}</h1>
    <p>{page.data.body}</p>
    </ProjectItemsCaption>
        {
          page.data.projects.map((p,i)=>(
            <ProjectItem key={i} image={p.imageUrl}>
<Image src={p.imageUrl} alt=""/>
              <h4>{p.name}</h4>
              <p>{p.body}</p>
              <h5 className="skill-title">skills</h5>
              <div className="skill-box">
                {
                  p.skills.map((s,i)=>(<span className="skill">{s}</span>))
                }
              </div>
            </ProjectItem>
          ))
        }
  </Content>
    <ScrollNav left={page.prev} right={page.next}/>
  </PageWrapper>
);
              // <Image src={p.imageUrl} alt=""/>
export default Project;
