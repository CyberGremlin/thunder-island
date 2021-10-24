import React from "react"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"
import Spacer from "../../components/layout/Spacer"
import Section from "../../components/layout/Section"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"


const FoodAndHealthPage = () => {
  
  const title = "Food and Health"

  const categories = [
    {
      link: "/food-and-health/recipes",
      name: "Recipes",
      bg: ""
    },
    {
      link: "/food-and-health/health",
      name: "Health",
      bg: ""
    }
  ]
  
  return (
    <Layout title = { title }>
      <SingleColumn>
        <Section>
          <Spacer size="small"/>
          <ButtonGrid data={ categories } />
          <Spacer size="small"/>
        </Section>
      </SingleColumn>
      </Layout>
  )
  }

export default FoodAndHealthPage