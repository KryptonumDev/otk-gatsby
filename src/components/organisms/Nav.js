import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ChevronDown, Facebook, Instagram, Logo, Twitter } from "../atoms/Icons";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";

const Nav = () => {
  const {
    global
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        tel
        email
        facebook
        instagram
        twitter
        nav {
          workingHours
        }
      }
    }
  `)

  const [ navOpened, setNavOpened ] = useState(false)

  const handleNavToggle = () => {
    setNavOpened(!navOpened);
  }

  const handleLink = () => {
    setNavOpened(false);
    console.log('hej')
  }

  return (
    <>
      <WrapperTopBar>
        <div className="max-width">
          <p className="workingHours">{global.nav.workingHours}</p>
          <div className="contact">
            <a href={`tel:${global.tel}`}>
              <Tel />
              <span>{global.tel}</span>
            </a>
            <a href={`mailto:${global.email}`}>
              <Mail />
              <span>{global.email}</span>
            </a>
          </div>
        </div>
      </WrapperTopBar>
      <WrapperNav aria-expanded={navOpened}>
        <div className="max-width">
          <Link
            to="/"
            aria-label="Strona główna"
            className="logo"
            onClick={() => handleLink()}
          >
            <Logo />
          </Link>
          <button
            id="nav-toggle"
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="list">
            <li>
              <Link to='/' onClick={() => handleLink()}>Strona główna</Link>
            </li>
            <li>
              <Link to='/poradnia' onClick={() => handleLink()}>Poradnia rodzinna</Link>
            </li>
            <li tabIndex='0'>
              <span>
                <span>Dla pacjenta</span>
                <ChevronDown />
              </span>
              <ul className="dropdown">
                <li>
                  <Link to='/poznaj-nas' onClick={() => handleLink()}>Poznaj nas</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Pytania i odpowiedzi</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Darmowy ebook</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Profilaktyka</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Gdzie zrobić badania?</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Ankieta satysfakcji</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Regulamin</Link>
                </li>
                <li>
                  <Link to='/' onClick={() => handleLink()}>Cennik</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/' onClick={() => handleLink()}>Personel</Link>
            </li>
            <li>
              <Link to='/' onClick={() => handleLink()}>Zapisz się</Link>
            </li>
            <li>
              <Link to='/kontakt' onClick={() => handleLink()}>Kontakt</Link>
            </li>
            <li className="social">
              <a href={global.instagram} target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href={global.facebook} target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href={global.twitter} target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <Button
                theme="primary"
                to="/"
                className="nav-cta"
                onClick={() => handleLink()}
              >Odwiedź nas!</Button>
            </li>
          </ul>
        </div>
      </WrapperNav>
    </>
  );
}

const WrapperNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 123px;
  background-color: var(--neutral-100);
  > .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list {
    display: flex;
    align-items: center;
    gap: ${Clamp(16, 16, 48, 'px')};
    font-size: ${Clamp(16, 8, 18)};
    li {
      list-style-type: none;
      > span {
        display: flex;
        align-items: center;
        gap: 10px;  
        padding: 16px 0;
      }
      @media (min-width: 1300px){
        &:hover,
        &:focus-within {
          .dropdown {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }
      }
    }
    .dropdown {
      transition: opacity .2s var(--easing), transform .4s var(--easing);
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
      position: absolute;
      background-color: var(--neutral-100);
      padding: 20px 16px;
      margin: 0 -16px;
      border: 1px solid var(--secondary-500);
      li {
        &:not(:last-child){
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--secondary-500);
        }
      }
    }
  }
  #nav-toggle {
    padding: 15px 3.5px;
    margin-right: -3.5px;
    cursor: pointer;
    display: none;
    grid-template-columns: 1fr;
    gap: 5px;
    order: 2;
    span {
      display: block;
      width: 48px;
      height: 5px;
      background-color: var(--primary-500);
      &:nth-child(2) {
        background-color: var(--secondary-500);
      }
      border-radius: 5px;
      transition: transform .4s var(--easing);
    }
  }
  .nav-cta {
    padding: 16px 34px;
    font-size: 1em;
  }
  .social {
    display: none;
    flex-wrap: wrap;
    gap: 12px 24px;
    a {
      transition: opacity .4s, transform .4s;
      &:hover {
        opacity: .8;
      }
      &:active {
        transform: scale(.95);
      }
    }
  }

  // ### MOBILE
  @media (max-width: 1299px){
    &[aria-expanded="true"] {
      .list {
        opacity: 1;
        transform: translate(0);
        pointer-events: all;
      }
      #nav-toggle {
        span {
          &:nth-child(1){
            transform: translateY(10px) rotate(-45deg);
          }
          &:nth-child(2){
            transform: scaleX(0);
          }
          &:nth-child(3){
            transform: translateY(-10px) rotate(45deg);
          }
        }
      }
    }
    height: 89px;
    #nav-toggle {
      display: grid;
    }
    .social {
      display: flex;
      margin: 22px 0;
    }
    .list {
      opacity: 0;
      transform: translateX(-8px);
      pointer-events: none;
      transition: opacity .2s var(--easing), transform .4s var(--easing);
      overflow-y: auto;
      padding: var(--pageMargin);
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      height: calc(100vh - 89px);
      flex-direction: column;
      align-items: start;
      background: linear-gradient(var(--neutral-100), rgba(255, 255, 255, 0.9));
      backdrop-filter: blur(4px);
      gap: 16px;
      li {
        width: 100%;
        &:not(:nth-last-child(-n+3)){
          border-bottom: 1px solid var(--secondary-500);
          padding-bottom: 16px;
        }
        > span {
          padding: 0;
        }
        &:focus,
        &:focus-within {
          pointer-events: none;
          a {
            pointer-events: all;
          }
          .dropdown {
            max-height: 100vh;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }
      }
      .dropdown {
        transition: opacity .2s var(--easing), transform .4s var(--easing), max-height .4s var(--easing);
        max-height: 0;
        position: static;
        background-color: transparent;
        padding: 0;
        margin: 0 0 0 var(--pageMargin);
        border: none;
        li {
          &:first-child {
            padding-top: 16px;
          }
          &:last-child {
            padding-bottom: 16px;
          }
          &:not(:last-child){
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--secondary-500);
          }
        }
      }
    }
  }
  @media (max-width: 449px){
    .logo {
      svg {
        width: 62px;
        .text {
          display: none;
        }
      }
    }
  }
`

const WrapperTopBar = styled.div`
  background-color: var(--primary-500);
  color: #fff;
  padding: 16px 0;
  font-size: ${Clamp(14, 16, 16)};
  > .max-width {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 48px;
    justify-content: space-between;
  }
  .workingHours {
    text-transform: uppercase;
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 48px;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px;
    }
  }
`

const Tel = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='15'
    height='15'
    fill='none'
    viewBox='0 0 15 15'
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.647 7.546a6.067 6.067 0 002.83 2.823.581.581 0 00.574-.044l1.814-1.212a.573.573 0 01.552-.05l3.396 1.458a.573.573 0 01.349.602 3.484 3.484 0 01-3.455 3.041 9.87 9.87 0 01-9.87-9.87A3.483 3.483 0 013.878.84a.573.573 0 01.603.348l1.458 3.404a.58.58 0 01-.043.544L4.684 6.98a.58.58 0 00-.037.566v0z'
    ></path>
  </svg>
)

const Mail = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='15'
    fill='none'
    viewBox='0 0 16 15'
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.083 10.38a2.882 2.882 0 100-5.763 2.882 2.882 0 000 5.763z'
    ></path>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11.91 13.262A6.917 6.917 0 1115 7.498c0 1.593-.576 2.882-2.017 2.882-1.441 0-2.018-1.29-2.018-2.882V4.616'
    ></path>
  </svg>
)
 
export default Nav;