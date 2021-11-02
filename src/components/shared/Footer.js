import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import {
  footer,
  imageWrapper,
  credits
} from "./Footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query siteMeta {
  site {
    siteMetadata {
      title
      author
      stack
      stackTech
    }
  }
}
  `)
  return (
    <footer className={ footer }>
      <div className={ imageWrapper }>
        <StaticImage src="./thunder-island-logo-footer.png" alt="thunder island logo" />
      </div>
      <div className={ credits }>
        <div>
          <p>JAMstack</p>
          <p>{ data.site.siteMetadata.stackTech.map( ( tech, index ) => index === data.site.siteMetadata.stackTech.length -1 ? `with ${tech}` : `${tech}, `) }</p>
        </div>
        <div>
          <p>Logo Design</p>
          <p>by Claire Murray</p>
        </div>
        <div>
          <p>@Copyright { data.site.siteMetadata.title } { new Date().getFullYear() }</p>
          <p>Design and Content by { data.site.siteMetadata.author } </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer