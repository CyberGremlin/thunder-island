import * as React from "react"
import {
  profile 
} from "./Profile.module.css"

import { StaticImage } from "gatsby-plugin-image"

const Profile = ( { person } ) => {

  const name = person.frontmatter.author
  const content = person.html
  const alt = person.frontmatter.alt
  const src = person.frontmatter.src
console.log(src)
  return (
    <article className={ profile }>
      <h3>About { name }</h3>
      <div>
        <StaticImage src="../../images/alex-portrait.jpg" alt={ alt } />
      </div>
      <p>{ content }</p>
    </article>
  )
}

export default Profile