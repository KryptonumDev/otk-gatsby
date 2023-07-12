import * as React from "react"
import { Seo } from "../global/Seo"

const IndexPage = () => {
  return (
    <h1>Homepage</h1>
  )
}

export default IndexPage

export const Head = () => (
  <Seo
    title="Strona główna"
  />
)
