import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  posting,
  row,
  imageWrapper,
  textWrapper,
 } from "../styles/PostingMedium.module.css"

import LinkBtn from "./LinkBtn"

const PostingMedium = ( { post, ...props } ) => {
  const title = post.title
  const mainCategory = post.categories.nodes[0].name
  const subCategories = post.categories.nodes.map( (category) => <h5>{ category.name }</h5>).filter( ( _, index ) =>  index > 0 )
  const src = post.src
  const alt = post.alt
  const slug = post.slug
  const innerText = props.innerText
  const excerpt = post.excerpt
  const postDate = post.postDate
  const author = post.author.name
  const photographer = post.photographer
  
  return(
    <article className={ posting }>
      <div>
        <h3>{ title }</h3>
        <h4>{ mainCategory }</h4> 
        { props.showSubCategories && subCategories }
        { props.showDate && <time datetime={ postDate }> { postDate } </time> }
        { props.showAuthor && <address rel="author">{ author }</address> }
      </div>
      <div className={ row }>
        <div className={ imageWrapper }>
        <StaticImage src="../images/bacon-and-eggs-portrait.png" alt={ alt } />
        { props.hasPhotographer && photographer ? <cite>photo by { photographer }</cite> : null}
        </div>
        <div className={ textWrapper }>
          <p>{ excerpt }</p>
        </div>
      </div>
      <div className={ row }>
        <LinkBtn to="/" innerText={ innerText } />
      </div>
    </article> 
  )
}

export default PostingMedium