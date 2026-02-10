import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Logo, Mail, Tel } from "../atoms/Icons";
import Button from "../atoms/Button";
import { Clamp } from "../../utils/functions";
import Social from "../moleculas/Social";
import Markdown from "../../utils/Markdown";
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => {
  const {
    global,
    global: {
      footer
    }
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        tel
        email
        footer {
          heading
          paragraph
          cta {
            theme
            text
            href
          }
          legal_Text
          legal_Images {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <FooterWrapper>
        <Shape1 className="shape1" />
        <Shape2 className="shape2" />
        <div className="max-width">
          <div className="column">
            <Link to="/" aria-label="Strona główna" className="logo">
              <Logo variant="light" />
            </Link>
            <div className="contact">
              <a href={`tel:${global.tel.replace(/\s/g, '')}`}>
                <div className="icon">
                  <Tel />
                </div>
                <span>{global.tel}</span>
              </a>
              <a href={`mailto:${global.email}`}>
                <div className="icon">
                  <Mail />
                </div>
                <span>{global.email}</span>
              </a>
            </div>
            <Social as="div" />
          </div>
          <div className="text">
            <h3>{footer.heading}</h3>
            <p>{footer.paragraph}</p>
          </div>
          <Button variant="light" theme={footer.cta.theme} to={footer.cta.href}>{footer.cta.text}</Button>
          <p className="copyright">Ośrodek Zdrowia w Turośni Kościelnej &copy; {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</p>
          <p className="privacyPolicy">
            <Link to="/polityka-prywatnosci" className="link">Polityka prywatności</Link>
          </p>
          <p className="projectBy">
            <span>Projekt i realizacja:</span>
            <a href="https://bartnikstudio.pl/" aria-label="Bartnik" target="_blank" rel="noreferrer noopener">
              <BartnikLogo />
            </a>
            <span aria-hidden="true" className="separator">x</span>
            <a href="https://kryptonum.eu/pl" aria-label="Agencja interaktywna Kryptonum">
              <FooterKryptonumLogo />
            </a>
          </p>
        </div>
      </FooterWrapper>
      <LeaglInfoWrapper className="max-width">
        <Markdown className="legal-text">{footer.legal_Text}</Markdown>
        <ul>
          {footer.legal_Images.map((logo, i) => (
            <li key={i}>
              <GatsbyImage
                image={logo.asset.gatsbyImageData}
                alt={logo.asset.altText || ''}
                className="img"
                objectFit="contain"
              />
            </li>
          ))}
        </ul>
      </LeaglInfoWrapper>
    </>
  );
}

const FooterWrapper = styled.footer`
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
  background-color: var(--primary-500);
  color: #fff;
  .text {
    font-size: ${Clamp(24, 24, 42)};
    h3 {
      font-size: 1em;
      margin-bottom: 12px;
    }
    p {
      font-size: .8em;
    }
    margin: ${Clamp(48, 48, 62, 'px')} 0 ${Clamp(24, 24, 48, 'px')};
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
          background-color: var(--secondary-500);
          transition: transform .4s var(--easing);
        }
      }
      &:hover .icon::before {
        transform: scale(1.1);
      }
    }
  }
  .copyright {
    margin-top: ${Clamp(48, 48, 62, 'px')};
  }
  .projectBy {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    .separator {
      margin: 0 0.5rem;
    }
    svg {
      display: block;
    }
  }
  .privacyPolicy {
    margin: 0.75rem 0 2.5rem;
    a {
      font-size: 0.875rem;
      color: inherit;
    }
  }
  @media (max-width: 999px){
    .column {
      grid-template-columns: 1fr;
    }
    .social {
      margin-left: -10px;
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
`

const LeaglInfoWrapper = styled.div`
  color: var(--primary-500);
  padding: 55px 0;
  .legal-text {
    max-width: 78rem;
  }
  p {
    &:not(:last-child){
      margin-bottom: 12px;
    }
  }
  ul {
    margin-top: ${Clamp(32, 48, 62, 'px')};
    width: fit-content;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto auto auto;
    @media (max-width: 699px){
      width: 100%;
      grid-template-columns: 1fr 1fr;
    }
    gap: 24px ${Clamp(24, 48, 72, 'px')};
    list-style-type: none;
    .img {
      max-width: 160px;
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
const FooterKryptonumLogo = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='111' height='24' fill='none'>
    <path
      fill='#fff'
      d='M12.975 12c0 .739-.226 1.46-.65 2.079a3.938 3.938 0 01-1.735 1.4v6.386H7.41v-6.387a3.934 3.934 0 01-1.735-1.4A3.671 3.671 0 015.025 12c0-.738.226-1.46.65-2.078a3.934 3.934 0 011.735-1.4V2.135h3.18V8.52a3.935 3.935 0 011.736 1.4c.424.618.65 1.34.649 2.079z'
    ></path>
    <path
      fill='#fff'
      d='M18.685 2v4.553l-3.321 3.17-1.59-1.517-1.023.977a4.692 4.692 0 00-.796-.76L18.685 2zm-3.32 12.277l3.32 3.17v4.554l-6.728-6.423c.295-.223.562-.477.795-.76l1.023.977 1.59-1.518zM4.233 12a4.398 4.398 0 001.023 2.818L1.053 18.83v-4.553l1.59-1.517v-1.518l-1.59-1.518V5.171l4.203 4.012a4.397 4.397 0 00-1.023 2.818zm20.887 6V6.48h1.672v5.376l4.824-5.376h2.08L28.6 12.104 34.072 18h-2.144l-5.136-5.504V18H25.12zm10.078 0V9.36h1.488v2.096l-.208-.272c.107-.277.245-.53.416-.76a2.33 2.33 0 01.592-.576 2.53 2.53 0 01.728-.368c.272-.09.55-.144.832-.16a3.19 3.19 0 01.816.04v1.568a2.709 2.709 0 00-.944-.064 2.065 2.065 0 00-.944.328 2.12 2.12 0 00-.648.64c-.154.25-.267.53-.336.84-.07.304-.104.627-.104.968V18h-1.688zm7.137 3.84l1.672-4.552.024 1.344-3.768-9.272h1.744l2.816 7.16h-.512l2.688-7.16h1.696l-4.768 12.48h-1.592zm11.67-3.6c-.828 0-1.52-.2-2.08-.6-.56-.405-.985-.952-1.273-1.64-.288-.688-.432-1.464-.432-2.328 0-.864.142-1.64.424-2.328.288-.688.71-1.23 1.264-1.624.56-.4 1.248-.6 2.064-.6.81 0 1.51.2 2.096.6a3.86 3.86 0 011.368 1.624c.32.683.48 1.459.48 2.328 0 .864-.16 1.643-.48 2.336a3.88 3.88 0 01-1.352 1.632c-.581.4-1.275.6-2.08.6zm-4.065 3.6V9.36h1.488v6.216h.192v6.264h-1.68zm3.832-5.112c.534 0 .974-.136 1.32-.408a2.41 2.41 0 00.784-1.096c.176-.464.264-.981.264-1.552a4.26 4.26 0 00-.264-1.536 2.385 2.385 0 00-.792-1.096c-.357-.272-.813-.408-1.368-.408-.523 0-.955.128-1.296.384-.336.256-.587.613-.752 1.072-.16.459-.24.987-.24 1.584 0 .597.08 1.125.24 1.584.16.459.413.819.76 1.08.347.261.795.392 1.344.392zM64.626 18a7.156 7.156 0 01-1.6.136 3.62 3.62 0 01-1.4-.304c-.41-.187-.72-.48-.927-.88a2.573 2.573 0 01-.304-1.088 43.203 43.203 0 01-.017-1.264V6.96h1.68v7.56c0 .347.003.648.008.904.011.256.067.472.168.648.192.33.496.52.913.568.42.043.914.024 1.48-.056V18zm-5.904-7.296V9.36h5.904v1.344h-5.904zM69.81 18.24c-.864 0-1.613-.195-2.248-.584a3.935 3.935 0 01-1.472-1.608c-.34-.688-.511-1.48-.511-2.376 0-.901.175-1.693.528-2.376a3.87 3.87 0 011.48-1.6c.634-.384 1.376-.576 2.224-.576.864 0 1.613.195 2.248.584.634.39 1.125.925 1.471 1.608.347.683.52 1.47.52 2.36 0 .901-.175 1.696-.528 2.384a3.935 3.935 0 01-1.472 1.608c-.634.384-1.38.576-2.24.576zm0-1.576c.827 0 1.443-.277 1.849-.832.41-.56.615-1.28.615-2.16 0-.901-.207-1.621-.623-2.16-.411-.544-1.025-.816-1.84-.816-.56 0-1.022.128-1.385.384-.362.25-.632.6-.807 1.048-.176.443-.264.957-.264 1.544 0 .907.207 1.632.624 2.176.416.544 1.026.816 1.832.816zM81.873 18v-4.248c0-.336-.03-.68-.088-1.032a3.093 3.093 0 00-.32-.992 1.878 1.878 0 00-.665-.736c-.282-.187-.653-.28-1.112-.28-.298 0-.58.05-.847.152a1.766 1.766 0 00-.705.472c-.197.219-.354.507-.472.864-.111.357-.167.792-.167 1.304l-1.04-.392c0-.784.146-1.475.44-2.072a3.306 3.306 0 011.263-1.408c.55-.336 1.214-.504 1.992-.504.598 0 1.1.096 1.505.288.405.192.733.445.983.76.257.31.451.648.585 1.016.133.368.224.728.272 1.08.047.352.072.661.072.928V18H81.87zM75.8 18V9.36h1.496v2.496h.2V18H75.8zm13.108.232c-.597 0-1.098-.096-1.504-.288a2.843 2.843 0 01-.992-.752 3.606 3.606 0 01-.576-1.024 5.252 5.252 0 01-.272-1.08 6.972 6.972 0 01-.072-.928v-4.8h1.696v4.248c0 .336.027.683.08 1.04.059.352.166.68.32.984.16.304.382.55.664.736.288.187.662.28 1.12.28.299 0 .582-.048.848-.144.267-.101.499-.261.696-.48.203-.219.36-.507.472-.864.118-.357.176-.792.176-1.304l1.04.392c0 .784-.146 1.477-.44 2.08a3.317 3.317 0 01-1.264 1.4c-.55.336-1.213.504-1.992.504zM91.763 18v-2.496h-.2V9.36h1.688V18h-1.488zm14.084 0l.008-5.384c0-.624-.16-1.11-.48-1.456-.32-.352-.741-.528-1.264-.528-.32 0-.613.075-.88.224a1.65 1.65 0 00-.64.656c-.16.288-.24.65-.24 1.088l-.808-.408c-.011-.608.117-1.141.384-1.6.272-.459.64-.813 1.104-1.064a3.175 3.175 0 011.56-.384c.933 0 1.656.28 2.168.84.512.56.768 1.304.768 2.232L107.519 18h-1.672zm-10.36 0V9.36h1.488v2.496h.192V18h-1.68zm5.184 0l.008-5.352c0-.63-.16-1.123-.48-1.48-.315-.357-.739-.536-1.272-.536-.528 0-.955.181-1.28.544-.32.363-.48.837-.48 1.424l-.8-.512c0-.565.136-1.07.408-1.512.272-.443.64-.792 1.104-1.048a3.21 3.21 0 011.576-.384c.613 0 1.136.13 1.568.392.432.256.76.616.984 1.08.229.464.344 1.003.344 1.616L102.343 18h-1.672z'
    ></path>
  </svg>
);
const BartnikLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="16" fill="none" viewBox="0 0 144 32"><path fill="#fff" d="M5.228 31.328H.388V.528L5.228 0v11.616c1.364-1.496 3.74-2.552 6.468-2.552 6.556 0 10.912 4.4 10.912 11.264 0 6.864-4.356 11.264-10.912 11.264-2.904 0-5.06-1.188-6.468-2.552v2.288Zm-.088-11c0 3.784 2.508 6.6 6.336 6.6 3.828 0 6.38-2.816 6.38-6.6s-2.552-6.6-6.38-6.6-6.336 2.816-6.336 6.6ZM43.769 9.328h4.928v22h-4.928V29.04c-.924 1.188-3.344 2.552-6.292 2.552-6.292 0-11.044-4.664-11.044-11.264S31.185 9.064 37.477 9.064c2.904 0 5.368 1.364 6.292 2.552V9.328Zm.176 11c0-3.608-2.728-6.6-6.292-6.6-3.652 0-6.468 2.992-6.468 6.6 0 3.608 2.816 6.6 6.468 6.6 3.564 0 6.292-2.992 6.292-6.6ZM54.013 31.328v-22h4.84v2.288c1.056-1.408 2.596-2.552 5.676-2.552v4.664h-.44c-3.08 0-5.236 2.2-5.236 5.456v12.144h-4.84ZM71.718 9.328v-8.8L76.558 0v9.328h6.6v4.576h-6.6v17.424h-4.84V13.904h-4.445V9.328h4.445ZM87.915 31.328v-22h4.84v2.508c1.012-1.32 2.992-2.772 6.028-2.772 5.456 0 8.448 3.212 8.448 9.064v13.2h-4.84V19.184c0-3.872-1.628-5.544-4.796-5.544s-4.84 2.288-4.84 5.544v12.144h-4.84ZM113.052 31.328v-22h4.84v22h-4.84ZM128.376 16.764l5.016-7.436h5.544l-4.62 6.6 9.152 15.4h-5.5l-6.644-11.22-2.948 4.268v6.952h-4.84V.528l4.84-.528v16.764Z" /></svg>
)

export default Footer;
