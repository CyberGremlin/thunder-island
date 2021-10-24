import * as React from "react"

import {
  recipeCard,
  row,
  imageWrapper,
  textWrapper
} from "./Recipe.module.css"


import Layout from "../../../components/layout/Layout"
import SingleColumn from "../../../components/layout/SingleColumn"
import LinkBtn from "../../../components/clickable/buttons-links/LinkBtn"

import { StaticImage } from "gatsby-plugin-image"

const Recipe = ( { recipe, props } ) => {

  const title = recipe.title
  const mainCategory = recipe.categories.nodes[0].name
  const subCategories = recipe.categories.nodes.map( (category) => <h5>{ category.name }</h5>).filter( ( _, index ) =>  index > 0 )
  const src = recipe.src
  const alt = recipe.alt
  const slug = recipe.slug
  const innerText = "Go Back"
  const excerpt = recipe.excerpt
  const postDate = recipe.postDate
  const author = recipe.author.name
  const photographer = recipe.photographer

  return (
    <Layout>
      <SingleColumn>
        <article className={ recipeCard }>
          <header>
            <h3>{ title }</h3>
            <h4>{ mainCategory }</h4> 
            { props.showSubCategories && subCategories }
            { props.showAuthor && <address rel="author">recipe by{ author }</address> }
          </header>
          <div className={ textWrapper }>
              <p>{ excerpt }</p>
            </div>
          <div className={ row }>
            <div className={ imageWrapper }>
              <StaticImage src="../../../content/food-and-health/recipes/butternut-squash-and-carrot-soup/butternut-squash-and-carrot-soup-landscape.png" alt={ alt } />
              { props.hasPhotographer && photographer ? <cite>photo by { photographer }</cite> : null}
            </div>
            
          </div>
          <div>Nutrition</div>
            { props.showDate && <time datetime={ postDate }> { postDate } </time> }
          <div className={ row }>
            <LinkBtn to={ slug } innerText={ innerText } />
          </div>
        </article>
      </SingleColumn>
    </Layout>
  )
}

export default Recipe