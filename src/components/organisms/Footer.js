import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Facebook, Instagram, Logo, Mail, Tel, Twitter } from "../atoms/Icons";
import Button from "../atoms/Button";
import { Clamp } from "../../utils/functions";

const Footer = () => {
  return (
    <Wrapper>
      <Shape1 className="shape1" />
      <Shape2 className="shape2" />
      <div className="max-width">
        <div className="column">
          <Link to="/" aria-label="Strona główna" className="logo">
            <Logo variant="light" />
          </Link>
          <div className="contact">
            <a href="tel:85 650 52 79">
              <div className="icon">
                <Tel />
              </div>
              <span>85 650 52 79</span>
            </a>
            <a href="mailto:rejestracja@osrodektk.pl">
              <div className="icon">
                <Mail />
              </div>
              <span>rejestracja@osrodektk.pl</span>
            </a>
          </div>
          <div className="social">
            <a href="todo">
              <Instagram />
            </a>
            <a href="todo">
              <Facebook />
            </a>
            <a href="todo">
              <Twitter />
            </a>
          </div>
        </div>
        <div className="text">
          <h3>Chcesz umówić się do lekarza szybko i bez czekania w kolejce?</h3>
          <p>Nasza przychodnia to nowoczesne podejście i przyjazna atmosfera!</p>
        </div>
        <Button theme='primary'>Umów wizytę</Button>
        <p className="copyright">Copyrights by Ośrodek Zdrowia w Turośni Kościelnej {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  z-index: 2;
  .shape1,
  .shape2 {
    z-index: -1;
    position: absolute;
    &.shape1 {
      left: 0;
      top: 0;
    }
    &.shape2 {
      right: 0;
      bottom: 0;
    }
    @media (max-width: 1920px){
      opacity: .1;
    }
  }
  .max-width {
    max-width: 1366px;
  }
  padding: 84px 0;
  background-color: #00259C;
  color: #fff;
  .logo {
    max-width: 90%;
    svg {
      width: 100%;
    }
  }
  .text {
    font-size: ${Clamp(24, 24, 42)};
    h3 {
      font-size: 1em;
      margin-bottom: 12px;
    }
    p {
      font-size: .8em;
    }
    margin: ${Clamp(48, 48, 62)} 0 ${Clamp(24, 24, 48)};
  }
  .column {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 32px 16px;
  }
  .contact {
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px 48px;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 48px;
        height: 48px;
        svg {
          z-index: 2;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #0FE3AF;
          transition: transform .4s var(--easing);
        }
      }
      &:hover .icon::before {
        transform: scale(1.1);
      }
    }
  }
  .social {
    display: flex;
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
  .copyright {
    margin-top: ${Clamp(48, 48, 62)};
  }
  @media (max-width: 999px){
    .column {
      grid-template-columns: 1fr;
    }
    .contact {
      grid-template-columns: 1fr;
      a {
        .icon {
          width: 42px;
          height: 42px;
        }
      }
    }
  }
  @media (min-width: 499px){
    .copyright {
      text-align: center;
    }
  }
`
const Shape1 = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='258'
    height='509'
    fill='none'
    viewBox='0 0 258 509'
    className={className}
  >
    <path
      stroke='#EDFFFA'
      strokeWidth='3.321'
      d='M255.663 159.373c0 95.688-51.274 182.438-134.413 245.322C38.11 467.58-76.82 506.523-203.838 506.523c-127.019 0-241.95-38.943-325.089-101.828-83.139-62.884-134.413-149.634-134.413-245.322 0-95.688 51.274-182.438 134.413-245.322 83.139-62.885 198.07-101.828 325.089-101.828 127.018 0 241.949 38.943 325.088 101.828 83.139 62.884 134.413 149.634 134.413 245.322z'
    ></path>
  </svg>
)
const Shape2 = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='889'
    height='274'
    fill='none'
    viewBox='0 0 889 274'
    className={className}
  >
    <path
      stroke='#F2FFFC'
      strokeWidth='3.321'
      d='M1427.27 243.498c-10.82-8.993-401.19-499.894-743.551-56.212C409.827 542.232 114.977 921.324 1.789 1066.5'
    ></path>
  </svg>
)
 
export default Footer;