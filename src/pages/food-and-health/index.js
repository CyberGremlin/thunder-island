import * as React from "react"

import Navbar from "../../components/Navbar"
import ButtonBar from "../../components/ButtonBar"
import Header from "../../components/Header" 
import Spacer from "../../components/Spacer"
import Section from "../../components/Section"
import Grid from "../../components/Grid"
import Footer from "../../components/Footer"

class FoodAndHealth extends React.Component {
  constructor ( props ) { 
    super( props )
    this.state = {
        categoryChoice: "",
        dietChoice: "",
        ingredientChoice: "",
        courseChoice: ""
    }
  }
  render () {
    
  const categoryChoices = [ "By Diet", "By Ingredient", "By Course" ]
  const dietChoices = [  "Paleo", "Keto", "Atkins'", "Paleo-ish", "Whole30", "Low Calorie", "All Recipes"]
  const ingredientChoices = [ "Beef", "Chicken", "Lamb", "Pork", "Seafood", "Vegetable", "Dairy, Fungi and Nuts" ]
  const courseChoices = [ "Breakfast and Lunch", "Main", "Side", "Snacks and Soups", "Desserts" ]
  
  return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <ButtonBar buttons={ categoryChoices } />
      <Spacer size="large" />
      <main>
         <Section>
          <h2>By Diet</h2>
          <Grid boxInfo={ categoryChoices } />
        </Section>
        <Section>
          <h2>By Diet</h2>
          <Grid boxInfo={ dietChoices } />
        </Section>
        <Spacer size="small" />
        <Section>
          <h2>By Main Ingredient</h2>
          <Grid boxInfo={ ingredientChoices } />
        </Section>
        <Spacer size="small" />
        <Section>
          <h2>By Course</h2>
          <Grid boxInfo={ courseChoices } />
        </Section>
      </main>
      <Spacer size="small" />
      <Footer />
      </>
  )
  }
  
}

export default FoodAndHealth