import * as React from "react"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import ButtonBar from "../../components/clickable/button-bar/ButtonBar"
import Spacer from "../../components/layout/Spacer"
import Section from "../../components/layout/Section"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"


const FoodAndHealthPage = () => {
  
  const title = "Food and Health"
  const categoryChoices = ["Recipes", "Information"]
  const recipeChoices = [ "By Diet", "By Ingredient", "By Course" ]
  const dietChoices = [  "Paleo", "Paleo-ish", "Low Net Carbs", "Low Total Carbs", "Low Calorie", "Carnivore", "All Recipes"]
  const ingredientChoices = [ "Beef and Lamb", "Chicken and Pork", "Fish and Seafood", "Vegetables", "Dairy, Egg, Nuts and Fruit", "Desserts" ]
  const courseChoices = [ "Breakfast and Lunch", "Main", "Side", "Snacks and Appetisers", "Desserts" ]
  
  return (
    <Layout title = { title }>
      <ButtonBar
        buttons={ categoryChoices }
      />
      <ButtonBar
        buttons={ recipeChoices }
      />
        <ButtonBar
        buttons={ dietChoices }
      />
        <ButtonBar
        buttons={ ingredientChoices }
      />
        <ButtonBar
        buttons={ courseChoices }
      />
      <SingleColumn>
        <Section>
          <Spacer size="small"/>
          <ButtonGrid boxInfo={ categoryChoices } />
          <Spacer size="small"/>
        </Section>
        <Section>
          <Spacer size="small"/>
          <h3>By Diet</h3>
          <Spacer size="small"/>
          <ButtonGrid boxInfo={ dietChoices } />
          <Spacer size="small"/>
        </Section>
        <Section>
          <Spacer size="small"/>
          <h3>By Main Ingredient</h3>
          <Spacer size="small"/>
          <ButtonGrid boxInfo={ ingredientChoices } />
          <Spacer size="small"/>
        </Section>
        <Section>
          <Spacer size="small"/>
          <h3>By Course</h3>
          <Spacer size="small"/>
          <ButtonGrid boxInfo={ courseChoices } />
          <Spacer size="small"/>
        </Section>
      </SingleColumn>
    </Layout>     
  )
  }

export default FoodAndHealthPage