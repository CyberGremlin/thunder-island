import * as React from "react"

const Profile = ( { profiling }) => {
  return (
    <article>
      <figure>
        <img src="" alt="" />
        <figcaption></figcaption>
      </figure>
      <p>{ profiling.content }</p>
</article>
  )
}

export default Profile