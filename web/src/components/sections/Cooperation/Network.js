import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Heading from "../../atoms/Heading";

const Network = ({ heading, paragraph, clinics }) => {
  const [currentHostname, setCurrentHostname] = React.useState('');

  React.useEffect(() => {
    setCurrentHostname(window.location.hostname);
  }, []);

  const isCurrentSite = (clinicUrl) => {
    try {
      const url = new URL(clinicUrl);
      return currentHostname.includes(url.hostname) || url.hostname.includes(currentHostname);
    } catch {
      return false;
    }
  };

  const activeClinics = clinics?.filter(c => c.isActive) || [];

  return (
    <Wrapper>
      <div className="max-width">
        <header>
          <Heading type="h2" className="heading">{heading}</Heading>
          <hr />
          {paragraph && (
            <Markdown className="paragraph">{paragraph}</Markdown>
          )}
        </header>
        {activeClinics.length > 0 && (
          <div className="clinics-grid">
            {activeClinics.map((clinic, i) => {
              const isCurrent = isCurrentSite(clinic.url);
              const Tag = isCurrent ? 'div' : 'a';
              return (
                <Tag
                  key={i}
                  href={isCurrent ? undefined : clinic.url}
                  className={`clinic-card ${isCurrent ? 'current' : ''}`}
                  target={isCurrent ? undefined : '_blank'}
                  rel={isCurrent ? undefined : 'noopener noreferrer'}
                >
                  {clinic.logo?.asset?.url && (
                    <img
                      src={clinic.logo.asset.url}
                      alt={`Logo ${clinic.name}`}
                      className="clinic-logo"
                    />
                  )}
                  <div className="clinic-info">
                    <h3 className="clinic-name">{clinic.name}</h3>
                    <p className="clinic-city">{clinic.city}</p>
                    {clinic.address && <p className="clinic-address">{clinic.address}</p>}
                    {clinic.phone && <p className="clinic-phone">{clinic.phone}</p>}
                    {clinic.email && <p className="clinic-email">{clinic.email}</p>}
                  </div>
                  {isCurrent && <span className="current-badge">Aktualnie przeglądasz</span>}
                </Tag>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--primary-500);
  color: var(--neutral-100);
  padding: ${Clamp(64, 82, 120, 'px')} 0;
  position: relative;
  overflow: hidden;

  header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto ${Clamp(42, 48, 64, 'px')};
    .heading h2 {
      font-size: ${Clamp(28, 32, 38)};
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 22)};
    }
  }
  .clinics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Clamp(16, 24, 32, 'px')};
  }
  .clinic-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: ${Clamp(24, 28, 32, 'px')};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    transition: all 0.3s var(--easing);
    &:not(.current):hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-4px);
    }
    &.current {
      border-color: rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.08);
    }
  }
  .clinic-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  .clinic-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .clinic-name {
    font-size: ${Clamp(16, 18, 20)};
    font-weight: 600;
  }
  .clinic-city {
    font-size: ${Clamp(14, 15, 16)};
    opacity: 0.85;
  }
  .clinic-address,
  .clinic-phone,
  .clinic-email {
    font-size: ${Clamp(12, 13, 14)};
    opacity: 0.7;
  }
  .current-badge {
    font-size: ${Clamp(11, 12, 13)};
    background: rgba(255, 255, 255, 0.15);
    padding: 4px 12px;
    border-radius: 100px;
    font-weight: 500;
    opacity: 0.8;
  }
  @media (max-width: 799px) {
    .clinics-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }
  @media (min-width: 800px) and (max-width: 1099px) {
    .clinics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Network;
