import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Heading from '../../atoms/Heading';

const sitemap = [
  {
    title: 'Strona główna',
    url: '/'
  },
  {
    title: 'Poradnia rodzinna',
    url: '/poradnia-medycyny-rodzinnej'
  },
  {
    title: 'Pytania i odpowiedzi',
    url: '/pytania'
  },
  {
    title: 'Darmowy ebook',
    url: '/pierwszy-rok-zycia-dziecka-ebook'
  },
  {
    title: 'Profilaktyka',
    url: '/profilaktyka-i-diagnostyka'
  },
  {
    title: 'Gdzie zrobić badania?',
    url: '/gdzie-zrobic-badania'
  },
  {
    title: 'Regulamin',
    url: '/osrodek-zdrowia-regulamin'
  },
  {
    title: 'Cennik',
    url: '/cennik'
  },
  {
    title: 'Personel',
    url: '/personel-osrodka-zdrowia'
  },
  {
    title: 'Mapa strony',
    url: '/mapa-strony'
  },
  {
    title: 'Kontakt',
    url: '/kontakt'
  },
  {
    title: 'Filia w Surażu',
    url: '/filia-w-surazu'
  },
  {
    title: 'Zapisz się',
    url: '/osrodek-zdrowia-zapisy'
  },
  {
    title: 'Polityka prywatności',
    url: '/polityka-prywatnosci'
  },
]

const Sitemap = ({ data: {
  sitemap_Heading,
  sitemap_Paragraph,
} }) => {
  return (
    <Wrapper className="max-width">
      <header>
        <Heading type="h2">{sitemap_Heading}</Heading>
        <hr />
        <Markdown className='paragraph'>{sitemap_Paragraph}</Markdown>
      </header>
      <ul className="wrapper">
        {sitemap.map((page, i) => (
          <li key={i}>
            <Link to={page.url} className="link" title={page.title}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    max-width: 768px;
    .paragraph {
      font-size: ${Clamp(20, 20, 24)};
    }
  }
  .wrapper {
    margin-top: ${Clamp(24, 24, 48, 'px')};
    list-style-type: none;
    li {
      &:not(:last-child){
        margin-bottom: ${Clamp(8, 12, 16, 'px')};
      }
    }
    a {
      font-size: ${Clamp(20, 20, 24)};
    }
  }
`

export default Sitemap;
