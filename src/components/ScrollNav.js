import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'react-emotion'
import {css} from 'emotion'
import { Switch, Route, withRouter } from "react-router-dom";


const Container = styled('div')`
padding-bottom: 1rem;
position: fixed;
bottom: 0;
left: 0;
right: 0;
display: flex;
flex-flow: column;
justify-content: center;
background-color: var(--primary);
`
const NavContainer = styled('div')`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-top: 1rem;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 1rem;
`
const FooterNav = styled('nav')`
display: flex;
justify-content: center;
width: 100%;
`
const GithubLink = () => (
  <a target="_blank" href="http://github.com/bobbyjenrow">
    <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Alter-home" transform="translate(-172.000000, -620.000000)" fill="#DEE3E7">
              <path d="M187.999,620 C179.164,620 172,627.163 172,636.001 C172,643.069 176.584,649.066 182.943,651.182 C183.743,651.329 184.035,650.835 184.035,650.411 C184.035,650.031 184.021,649.025 184.013,647.69 C179.562,648.657 178.623,645.545 178.623,645.545 C177.896,643.697 176.847,643.205 176.847,643.205 C175.394,642.212 176.957,642.232 176.957,642.232 C178.562,642.345 179.407,643.881 179.407,643.881 C180.835,646.326 183.152,645.62 184.064,645.21 C184.209,644.176 184.623,643.471 185.08,643.071 C181.527,642.667 177.792,641.295 177.792,635.164 C177.792,633.417 178.415,631.989 179.439,630.87 C179.274,630.465 178.725,628.839 179.595,626.636 C179.595,626.636 180.939,626.206 183.995,628.276 C185.272,627.921 186.64,627.744 188.001,627.737 C189.36,627.744 190.729,627.921 192.007,628.276 C195.061,626.206 196.402,626.636 196.402,626.636 C197.275,628.839 196.726,630.465 196.561,630.87 C197.587,631.989 198.206,633.417 198.206,635.164 C198.206,641.31 194.465,642.663 190.901,643.059 C191.475,643.553 191.987,644.529 191.987,646.022 C191.987,648.161 191.967,649.886 191.967,650.411 C191.967,650.839 192.255,651.337 193.067,651.18 C199.42,649.06 204,643.067 204,636.001 C204,627.163 196.836,620 187.999,620" id="Fill-34"></path>
          </g>
      </g>
    </svg>
  </a>
)
const link = css(`
  display: flex;
  align-items: center;
`)

const arrow = css(`
  display: block;
`)

const ArrowIcon = ({stroke="#DEE3E7", direction}) => {
  const flipRight="translate(78.856157, 139.825818) rotate(180.000000) translate(-78.856157, -139.825818)"
  return (
    <svg width="30px" height="52px" viewBox="0 0 158 280" fill='none'>
      <polyline
      id="Path-Copy"
      strokeLinecap="round" strokeLinejoin="round"
      stroke={stroke}
      strokeWidth="40"
      points="137.712314 20 20 140.947625 137.712314 259.651637"
      transform={direction == 'right' ? flipRight : ''}
      ></polyline>
    </svg>
)};

const ScrollNav = ({right,left}) => {
  const leftLocation = {pathname: left.url, state: {order: left.order, animation: {transition: 'slide-left', duration: 1000}}};
  const rightLocation = {pathname: right.url, state: {order: right.order, animation: {transition: 'slide-right', duration: 1000}}};
  return(
  <Container className="scrollnav-container">
        <NavContainer>
          <Link className={link} to={leftLocation}>
          <ArrowIcon className={arrow}/>
          <span className={css`margin-left: 1.5rem;`}>{left.name}</span>
          </Link>
          <Link className={link} to={rightLocation}>
          <span className={css`margin-right: 1.5rem;`}>{right.name}</span>
          <ArrowIcon className={arrow} direction="right" />
          </Link>
          </NavContainer>
          <FooterNav>
            <GithubLink />
          </FooterNav>
  </Container>
);
}
export default ScrollNav;
