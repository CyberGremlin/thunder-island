import * as React from "react"
import {
  profile 
} from "./Profile.module.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Profile = ( { person } ) => {

  console.log(person)

  const { frontmatter, html } = person
  const { title, portraitImage, alt } = frontmatter
  
  return (
    <article className={ profile }>
      <h3>{ title }</h3>
      <div>
        <GatsbyImage image={ getImage(portraitImage) } alt={ alt } />
      </div>
      <p>{ html }</p>
    </article>
  )
}

export default Profile