import React, { useState, useRef, useEffect } from "react";
import { Script, Link } from "gatsby";
import styled from "styled-components";
import Button from "../atoms/Button";
import Switch from "../atoms/Switch";

const GTM_CONTAINER_ID = 'GTM-T7CWTTQ8';

const groups = [
  {
    id: 'necessary',
    name: 'Niezbędne',
    description: `Niezbędne pliki cookie pomagają uczynić naszą stronę użyteczną, umożliwiając działanie podstawowych funkcji, takich jak nawigacja po stronie internetowej czy dostęp do bezpiecznych obszarów strony. Bez tych plików cookie niektóre podstawowe funkcje strony nie będą działać prawidłowo.`,
  },
  {
    id: 'marketing',
    name: 'Marketingowe',
    description: `Pliki cookie marketingowe są używane do śledzenia odwiedzających na stronach internetowych. Ich celem jest wyświetlanie reklam, które są istotne i interesujące dla indywidualnych użytkowników, a tym samym bardziej wartościowe dla wydawców i zewnętrznych reklamodawców.`,
  },
  {
    id: 'analytics',
    name: 'Analityczne',
    description: `Pliki cookie analityczne pomagają nam zrozumieć, w jaki sposób użytkownicy wchodzą w interakcje z naszą stroną internetową, zbierając i raportując informacje anonimowo. Te dane są wykorzystywane do doskonalenia struktury i treści strony.`,
  },
  {
    id: 'preferences',
    name: 'Preferencyjne',
    description: `Pliki cookie preferencyjne pozwalają stronie internetowej zapamiętywać informacje, które zmieniają sposób, w jaki strona się zachowuje lub wygląda, takie jak preferowany język lub region, w którym się znajdujesz.`,
  },
]

const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';').map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, ...cookieParts] = cookie.split('=');
    if (cookieName === name) {
      const cookieValue = cookieParts.join('=');
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

const setCookie = (name, value, days = 1) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = days ? '; expires=' + date.toUTCString() : '';
  const cookieValue = encodeURIComponent(value || '');
  document.cookie = `${name}=${cookieValue}${expires}; path=/; SameSite=Strict`;
};

function setConsent(consent) {
  const consentMode = {
    functionality_storage: consent.necessary ? 'granted' : 'denied',
    security_storage: consent.necessary ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    personalization_storage: consent.preferences ? 'granted' : 'denied',
  };
  window.gtag('consent', 'update', consentMode);
  setCookie('cookie-consent', JSON.stringify(consentMode), 365);
}

export default function CookieConsent() {
  const wrapper = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    if (getCookie('cookie-consent') === null) {
      window.gtag('consent', 'default', {
        functionality_storage: 'denied',
        security_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        personalization_storage: 'denied',
      });
      setShowBanner(true);
    } else {
      window.gtag('consent', 'default', JSON.parse(getCookie('cookie-consent')));
    }
    // prettier-ignore
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_CONTAINER_ID);
  }, []);

  const acceptAll = () => {
    setConsent({
      necessary: true,
      marketing: true,
      analytics: true,
      preferences: true,
    });
    setShowBanner(false);
  };

  const rejectAll = () => {
    setConsent({
      necessary: true,
      marketing: false,
      analytics: false,
      preferences: false,
    });
    setShowBanner(false);
  };

  const acceptPart = () => {
    if (!showPreferences) {
      setShowPreferences(true);
      wrapper.current.querySelector('[data-header-initial]').style.display = 'none';
      wrapper.current.querySelector('[data-header-settings]').style.removeProperty('display');
      wrapper.current.querySelector('.settings').style.removeProperty('display');
    } else {
      setConsent({
        necessary: true,
        marketing: wrapper.current.querySelector('input[id="marketing"]').checked,
        analytics: wrapper.current.querySelector('input[id="analytics"]').checked,
        preferences: wrapper.current.querySelector('input[id="preferences"]').checked,
      });
      setShowBanner(false);
    }
  };

  return (
    <>
      <Script id="gtm">{`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}`}</Script>
      <CookieConsentWrapper ref={wrapper} aria-hidden={!showBanner} className="cookie-consent">
        <section className="content">
          <header className="header">
            <div data-header-initial>
              <h2 className="heading">Korzystając ze strony zgadzasz się na użycie ciasteczek</h2>
              <p>Korzystając ze strony zgadzasz się na użycie ciasteczek. <Link to="/polityka-prywatnosci" className="link">Dowiedz się więcej</Link>.</p>
            </div>
            <div data-header-settings style={{ display: 'none' }}>
              <h3 className="heading">Ustawienia cookies</h3>
              <p>Korzystając ze strony zgadzasz się na użycie ciasteczek. <Link to="/polityka-prywatnosci" className="link">Dowiedz się więcej</Link>.</p>
            </div>
          </header>
          <div className="settings" style={{ display: 'none' }} data-lenis-prevent>
            {groups.map(({ id, name, description }) => (
              <label key={id} htmlFor={id} data-group={id} style={{ ...(id === 'necessary' && { cursor: 'not-allowed' }) }}>
                <Switch
                  {...(id === 'necessary' && {
                    style: { cursor: 'not-allowed' },
                  })}
                  inputProps={{
                    id,
                    ...(id === 'necessary' && {
                      disabled: true,
                      checked: true,
                    }),
                  }}
                  className="switch"
                />
                <p>{name}</p>
                <p className="description">{description}</p>
              </label>
            ))}
          </div>
          <div className="actions">
            <div>
              <Button onClick={rejectAll} theme="secondary">Odmowa</Button>
              <Button onClick={acceptPart} theme="secondary">
                {showPreferences ? 'Potwierdź preferencje' : 'Ustaw preferencje'}
              </Button>
            </div>
            <Button onClick={acceptAll}>Zgoda na wszystkie</Button>
          </div>
        </section>
      </CookieConsentWrapper>
    </>
  );
}

const CookieConsentWrapper = styled.aside`
  :global(html:has(&[aria-hidden='false'])) {
    overflow: hidden;
  }

  padding: clamp(1rem, calc(1.5vw / 0.48), 1.5rem) var(--page-margin);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;

  &[aria-hidden='true'] {
    display: none;
  }

  .content {
    padding: clamp(1rem, calc(1.5vw / 0.48), 1.5rem);
    max-height: calc(100vh - clamp(1rem, calc(1.5vw / 0.48), 1.5rem) * 2);
    max-height: calc(100dvh - clamp(1rem, calc(1.5vw / 0.48), 1.5rem) * 2);
    border: 1px solid var(--primary-300, #f4efe8);
    background-color: var(--primary-100, #fffefd);
    max-width: 60rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, calc(2rem / 0.48), 2rem);

    .heading {
      font-size: clamp(1.125rem, calc(1.5vw / 0.48), 1.75rem);
      margin-bottom: clamp(0.75rem, calc(1.25vw / 0.48), 1.25rem);
    }

    .settings {
      display: flex;
      flex-direction: column;
      gap: clamp(0.75rem, calc(1.25vw / 0.48), 1.25rem);
      overflow-y: auto;
      overscroll-behavior: contain;

      label {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.25rem clamp(1rem, calc(1.5vw / 0.48), 1.5rem);

        .switch {
          position: sticky;
          top: 0;
          grid-row: 1 / span 2;
        }

        .description {
          font-size: 0.875rem;
        }
      }
    }
  }

  .actions {
    &,
    & > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
    }
    & {
      gap: 1rem;
    }
    & > div {
      flex-grow: 1;
    }
    button {
      flex-grow: 1;
    }
  }
`
