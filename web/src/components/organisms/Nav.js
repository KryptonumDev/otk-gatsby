import React, { useState, useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Button from "../atoms/Button";
import Social from "../moleculas/Social";
import { ChevronDown, External, Logo, LogoSurazu } from "../atoms/Icons";
import { Clamp } from "../../utils/functions";

const Nav = ({ location }) => {
  const {
    global
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        tel
        email
        nav {
          workingHours
          questionnaire
        }
      }
    }
  `)

  const [navOpened, setNavOpened] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, []);
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setNavOpened(false);
    }
  }
  const handleNavToggle = () => setNavOpened(!navOpened);
  const handleLink = () => setNavOpened(false);

  return (
    <>
      <WrapperSkipToMainContent href="#main">Przejdź do głównej treści</WrapperSkipToMainContent>
      <WrapperTopBar>
        <div className="max-width">
          <p className="workingHours">{global.nav.workingHours}</p>
          <div className="contact">
            <a href='https://lekarzebezkolejki.pl/osrodektk' target='_blank' rel="noreferrer" title='Umów się do lekarza'>
              <Calendar />
              <span>Umów się do lekarza <span className="sr-only">(otwiera się w nowej karcie)</span></span>
            </a>
            <a href={`tel:${global.tel.replace(/\s/g, '')}`} title='Zadzwoń'>
              <Tel />
              <span>{global.tel}</span>
            </a>
            <a href={`mailto:${global.email}`} title='Wyślij maila'>
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
            title='Strona główna'
          >
            {location.pathname === '/filia-w-surazu' ? <LogoSurazu /> : <Logo />}
          </Link>
          <button
            id="nav-toggle"
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
            title='Nawigacja'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="list">
            <li>
              <Link to='/' onClick={() => handleLink()} title='Strona główna'>Strona główna</Link>
            </li>
            <li>
              <Link to='/poradnia-medycyny-rodzinnej' onClick={() => handleLink()} title='Poradnia rodzinna'>Poradnia rodzinna</Link>
            </li>
            <li tabIndex='0'>
              <span>
                <span>Dla pacjenta</span>
                <ChevronDown />
              </span>
              <ul className="dropdown">
                <li>
                  <Link to='/pytania' onClick={() => handleLink()} title='Pytania i odpowiedzi'>Pytania i odpowiedzi</Link>
                </li>
                <li>
                  <Link to='/pierwszy-rok-zycia-dziecka-ebook' onClick={() => handleLink()} title='Darmowy ebook'>Darmowy ebook</Link>
                </li>
                <li>
                  <Link to='/profilaktyka-i-diagnostyka' onClick={() => handleLink()} title='Profilaktyka'>Profilaktyka</Link>
                </li>
                <li>
                  <Link to='/gdzie-zrobic-badania' onClick={() => handleLink()} title='Gdzie zrobić badania?'>Gdzie zrobić badania?</Link>
                </li>
                {global.nav.questionnaire && (
                  <li>
                    <a href={global.nav.questionnaire} target="_blank" rel="noreferrer" onClick={() => handleLink()} title='Ankieta satysfakcji'>
                      <span>Ankieta satysfakcji <span className="sr-only">(otwiera się w nowej karcie)</span></span>
                      <External />
                    </a>
                  </li>
                )}
                <li>
                  <Link to='/osrodek-zdrowia-regulamin' onClick={() => handleLink()} title='Regulamin'>Regulamin</Link>
                </li>
                <li>
                  <Link to='/cennik' onClick={() => handleLink()} title='Cennik'>Cennik</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/personel-osrodka-zdrowia' onClick={() => handleLink()} title='Personel'>Personel</Link>
            </li>
            <li>
              <Link to='/mapa-strony' onClick={() => handleLink()} title='Mapa strony'>Mapa strony</Link>
            </li>
            <li>
              <Link to='/kontakt' onClick={() => handleLink()} title='Kontakt'>Kontakt</Link>
            </li>
            <li>
              <Link to='/filia-w-surazu' onClick={() => handleLink()} title='Filia w Surażu'>Filia w Surażu</Link>
            </li>
            <Social as='li' />
            <li>
              <Button
                theme="primary"
                to="/osrodek-zdrowia-zapisy"
                className="nav-cta"
                onClick={() => handleLink()}
                title='Zapisz się'
              >Zapisz się</Button>
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
  box-shadow: 0px -5px 13px 0px rgb(14 36 40 / 10%);
  > .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list {
    display: flex;
    align-items: center;
    gap: ${Clamp(16, 16, 32, 'px')};
    font-size: ${Clamp(16, 8, 18)};
    color: var(--primary-200);
    a:not(.nav-cta) {
      &[aria-current="page"]{
        font-weight: 600;
      }
      transition: opacity .3s;
      &:hover {
        opacity: .8;
      }
    }
    li {
      list-style-type: none;
      a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      > span {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
        svg {
          transition: transform .3s;
        }
      }
      @media (min-width: 1400px){
        &:hover,
        &:focus-within {
          > span svg {
            transform: rotateX(-180deg);
          }
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
      min-width: 250px;
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
    gap: 6px;
    order: 2;
    span {
      display: block;
      width: 48px;
      height: 4px;
      background-color: var(--primary-500);
      &:nth-child(2) {
        background-color: var(--secondary-500);
        z-index: -1;
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
  }

  // ### MOBILE
  @media (max-width: 1399px){
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
      margin: 13px -10px;
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
      height: calc(100dvh - 89px);
      flex-direction: column;
      align-items: start;
      background: linear-gradient(var(--neutral-100), rgba(255, 255, 255, 0.9));
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      gap: 16px;
      li {
        width: 100%;
        &:not(:nth-last-child(-n+3)){
          border-bottom: 1px solid var(--secondary-500);
          padding-bottom: 16px;
          &[tabIndex] {
            padding-bottom: 0;
            > span {
              padding-bottom: 16px;
            }
          }
        }
        > span {
          padding: 0;
        }
        &:focus,
        &:focus-within {
          pointer-events: none;
          > span svg {
            transform: rotateX(-180deg);
          }
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
            padding-top: 8px;
          }
          &:last-child {
            padding-bottom: 32px;
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
        width: clamp(208px, calc(278vw / 7.68), 278px);
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
    gap: 12px 48px;
    justify-content: space-between;
  }
  .workingHours {
    text-transform: uppercase;
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    gap: 12px ${Clamp(24, 24, 48, 'px')};
    a {
      span {
        transition: opacity .3s;
      }
      &:hover span {
        opacity: .8;
      }
      svg {
        width: 16px;
        height: 16px;
      }
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 8px;
    }
  }
`

const WrapperSkipToMainContent = styled.a`
  background-color: var(--neutral-100);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0%;
  top: 0;
  padding: 13px;
  &:focus-visible {
    opacity: 1;
    pointer-events: auto;
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

const Calendar = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox="0 0 24 24" fill='none'>
    <path
      stroke='#EFF0F3'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M3 10h18m-5-8v4M8 2v4M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z'
    ></path>
  </svg>
)

export default Nav;
