import * as React from "react"
import {
  profile 
} from "../styles/Profile.module.css"

import { StaticImage } from "gatsby-plugin-image"

const Profile = ( { person } ) => {

  const name = person.name
  const content = person.content

  return (
    <article className={ profile }>
      <h3>About { name }</h3>
      <div>
          <StaticImage src="../static/profile.jpg" alt="the author" />
      </div>
      <p>{ content  }</p>
    </article>
  )
}

export default Profile