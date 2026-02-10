// Single Types
import global, { global_Footer, global_Nav, global_Ebook, global_Newsletter, global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import familyClinic from './singleTypes/familyClinic'
import staffPage from './singleTypes/staffPage'
import contact from './singleTypes/contact'
import registration from './singleTypes/registration'
import faqPage from './singleTypes/faqPage'
import ebook, { ebook_Contents } from './singleTypes/ebook'
import pricing, { pricing_List } from './singleTypes/pricing'
import preventionAndDiagnosis from './singleTypes/preventionAndDiagnosis'
import where from './singleTypes/where'
import regulations, { regulations_RulesList } from './singleTypes/regulations'
import privacyPolicy from './singleTypes/privacyPolicy'
import sitemap from './singleTypes/sitemap'
import notFound from './singleTypes/notFound'
import surazClinic from './singleTypes/surazClinic'

export const singleTypes = [
  homepage,
  familyClinic,
  staffPage,
  contact,
  registration,
  faqPage,
  ebook,
  pricing,
  preventionAndDiagnosis,
  where,
  regulations,
  sitemap,
  privacyPolicy,
  notFound,
  surazClinic
]

// Collection Types
import faq from './collectionTypes/faq'
import staff from './collectionTypes/staff'

export const collectionTypes = [
  faq,
  staff
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import ctaSection from './components/ctaSection'
import imageAndDescription from './components/imageAndDescription'
import imageAndTitle from './components/imageAndTitle'
import faqSection from './components/faqSection'
import staffSection from './components/staffSection'
import titleAndDescription from './components/titleAndDescription'
import YoutubeEmbed from './components/YoutubeEmbed'
import CompanyInfo from './components/CompanyInfo'
import CtaTiles, { CtaTiles_Item } from './components/CtaTiles'

export const schemaTypes = [
  // Single Types
  global,
  global_Footer,
  global_Nav,
  global_Ebook,
  global_Newsletter,
  global_Seo,
  ...singleTypes,
  ebook_Contents,
  pricing_List,
  regulations_RulesList,

  // Collection Types
  ...collectionTypes,

  // Componenets
  cta,
  seo,
  ctaSection,
  imageAndDescription,
  imageAndTitle,
  faqSection,
  staffSection,
  titleAndDescription,
  YoutubeEmbed,
  CompanyInfo,
  CtaTiles,
  CtaTiles_Item,
]
