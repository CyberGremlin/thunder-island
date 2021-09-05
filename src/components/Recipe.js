import * as React from "react"

import image from "../../static/profile.jpg"

const Recipe = () => {
  return (
    <>
        <article>
          <h2>Recipe Title</h2>
          <h3>Suitable for these Diets</h3>
          <div>
            <div>net carbs</div>
            <div>total carbs</div>
            <div>fat</div>
            <div>protein</div>
            <div>calories</div>
          </div>
          <div>
            <img src={ image } alt="placehodler" />
            <p>Excerpt</p>
          </div>
            <div>Recipe Ingredients</div>
            <div>Recipe Method</div>
            <div>Recipe nutrition</div>
        </article>
    </>
  )
}

export default Recipe