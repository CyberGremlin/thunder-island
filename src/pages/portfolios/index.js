import * as React from "react"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import Spacer from "../../components/layout/Spacer"
import Breadcrumbs from "../../components/clickable/breadcrumbs/Breadcrumbs"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"


const PortfoliosPage = () => {

  const title = "My Portfolios"
  const portfolios = [
    {
      link: "/portfolios/writing",
      name: "Writing",
      bg: "../../../../static/images/writing-bg.png"
    },
    {
      link: "/portfolios/web-development",
      name: "Web Development",
      bg: "../../../../static/images/web-dev-bg.png"
    },
    {
      link: "/portfolios/expats-in-malta",
      name: "Expats in Malta",
      bg: ""
    }
  ]
  const writingPortfolio = [
    {
      link: "/portfolios/writing/stories-and-poems",
      name: "Stories and Poems",
      bg: ""
    },
    {
      link: "/portfolios/writing/reviews",
      name: "Reviews",
      bg: ""
    }
  ]
  const expatPortfolio = [
    {
      link: "/portfolios/expats-in-malta/photographs",
      name: "Photographs",
      bg: "../../../../static/images/photographs-bg.png"
    },
    {
      link: "/portfolios/expats-in-malta/family-life",
      name: "Family Life",
      bg: "../../../../static/images/photographs-bg.png"
    },
  ]
  const webDevPortfolio = [
    {
      link: "/portfolios/web-development/mint-gallery",
      name: "Web Development",
      bg: "../../../../static/images/web-dev-bg.png"
    }
  ]
  const photographyAlbums = [
    "Eerie Malta",
    "Blue Malta",
    "Wildlife in Malta",
    "Hiking in Malta",
    "Playing in Malta",
    "The Beach in Malta"
  ]


  return (
      <Layout title={ title }>
      <Breadcrumbs crumbs={ portfolios } />
        <SingleColumn>
          <ButtonGrid data={ portfolios } />
          <Spacer size="small" />
          <ButtonGrid data={ writingPortfolio } />
          <Spacer size="small" />
          <ButtonGrid data={ expatPortfolio } />
          <Spacer size="small" />
          <ButtonGrid data={ webDevPortfolio } />
        </SingleColumn>
      </Layout>
       
    )
  }
    
export default PortfoliosPage