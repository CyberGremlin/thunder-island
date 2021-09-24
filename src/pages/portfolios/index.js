import * as React from "react"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import Spacer from "../../components/layout/Spacer"
import ButtonBar from "../../components/clickable/button-bar/ButtonBar"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"

const PortfoliosPage = () => {

    const title = "My Portfolios"
    const portfolios = [ "Writing", "Web Development", "Expats in Malta" ]
    const writingPortfolio = ["Stories and Poems", "Reviews", "Information"]
    const expatPortfolio = [ "Photographs", "Family Life" ]
    const webDevPortfolio = ["Mint Gallery"]

    return (
      <Layout title={ title }>
        <ButtonBar buttons={ portfolios } />
        <ButtonBar buttons={ writingPortfolio } />
        <ButtonBar buttons={ expatPortfolio } />
        <ButtonBar buttons={ webDevPortfolio } />
        <SingleColumn>
          <ButtonGrid boxInfo={ portfolios } />
          <Spacer size="small" />
          <ButtonGrid boxInfo={ writingPortfolio } />
          <Spacer size="small" />
          <ButtonGrid boxInfo={ expatPortfolio } />
          <Spacer size="small" />
          <ButtonGrid boxInfo={ webDevPortfolio } />
        </SingleColumn>
      </Layout> 
    )
  }
    
export default PortfoliosPage