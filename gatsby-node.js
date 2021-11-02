const path = require( 'path' )

module.exports.createPages = async ( { graphql, actions } ) => {

  const { createPage } = actions

  const recipePath = path.resolve( "./src/templates/recipe.js" )
  const recipes = await graphql( `
query allSlugs {
  allMarkdownRemark(filter: {frontmatter: {type: {in: "recipe"}}}) {
    nodes {
      id
      frontmatter {
        slug
        xid
      }
    }
  }
}
  `)
  recipes.data.allMarkdownRemark.nodes.forEach( node => {
    createPage( {
      component: recipePath,
      path: `/${node.frontmatter.slug}`,
      context: {
        id: node.id,
        xid: node.xid
      }
    } )
   })
}