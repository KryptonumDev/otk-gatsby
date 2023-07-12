import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ChevronDown, Logo } from "../atoms/Icons";
import { Clamp } from "../../utils/functions";

const Nav = () => {
  const {
    global
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        tel
        email
      }
    }
  `)

  return (
    <>
      <WrapperTopBar>
        <div className="max-width">
          <p className="workingHours">GODZINY PRACY: PON – PT : 8.00 – 18.00</p>
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
      <WrapperNav>
        <div className="max-width">
          <Link to="/" aria-label="Strona główna" className="logo">
            <Logo />
          </Link>
          <ul className="list">
            <li>
              <Link to='/'>Strona główna</Link>
            </li>
            <li>
              <Link to='/'>Poradnia rodzinna</Link>
            </li>
            <li>
              <span>
                <span>Dla pacjenta</span>
                <ChevronDown />
              </span>
              <ul className="dropdown">
                <li>
                  <Link to='/'>Poznaj nas</Link>
                </li>
                <li>
                  <Link to='/'>Pytania i odpowiedzi</Link>
                </li>
                <li>
                  <Link to='/'>Darmowy ebook</Link>
                </li>
                <li>
                  <Link to='/'>Profilaktyka</Link>
                </li>
                <li>
                  <Link to='/'>Gdzie zrobić badania?</Link>
                </li>
                <li>
                  <Link to='/'>Ankieta satysfakcji</Link>
                </li>
                <li>
                  <Link to='/'>Regulamin</Link>
                </li>
                <li>
                  <Link to='/'>Cennik</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>Personel</Link>
            </li>
            <li>
              <Link to='/'>Zapisz się</Link>
            </li>
            <li>
              <Link to='/'>Kontakt</Link>
            </li>
            <li>
              <Link to='/' className="nav-cta">Odwiedź nas!</Link>
            </li>
          </ul>
        </div>
      </WrapperNav>
    </>
  );
}

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
    font-size: ${Clamp(16, 16, 18)};
    li {
      list-style-type: none;
      > span {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
      }
      &:hover,
      &:focus-within {
        .dropdown {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
      }
    }
    .dropdown {
      transition: opacity .2s var(--easing), transform .4s var(--easing), visibility .4s;
      opacity: 0;
      transform: translateY(-8px);
      visibility: hidden;
      position: absolute;
      background-color: var(--neutral-100);
      padding: 20px 16px;
      margin: 0 -16px;
      border: 1px solid #0FE3AF;
      li {
        &:not(:last-child){
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #0FE3AF;
        }
      }
    }
  }
  .nav-cta {
    padding: 16px 34px;
    background-color: var(--primary-500);
    color: var(--neutral-100);
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