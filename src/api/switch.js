///main categories: [Food and Health, Learn English, Portfolios]
//subCategories: [Health, Recipes, CEFR Levels, Language Chunk, Expats in Malta, Writing, Web Development]
//Tags: [Beef and Lamb, Breakfast and Lunch, Carnivore, CEFR A1, CEFR A2, CEFR B1, CEFR B2, CEFR C1, CEFR C2, Chicken and Pork, `Dairy, Eggs, Nuts and Fruit`, Desserts, Family Life, Fish and Seafood, Information, Lessons, Low Calorie, Low Net Carbs, Low Total Carbs, Main, Paleo, Paleo-ish, Photographs, Practice, Reviews, Salads and Soups, Side, Snacks and Appetisers, Stories and Poems, Vegetables]

function getHierarchyState (userChoice) {
  switch ( category ) {
  case "Expats in Malta": {
    const data = {
      mainCategory: "Portfolios",
      subCategories: "Expats in Malta"
    }
    return data
  }
  case "Family Life": {
    const data = {
      mainCategory: "Portfolios",
      subCategory: "Expats in Malta",
      tags: "Family Life"
    }
    return data
  }
  case "Health": {
    const data = {
      mainCategory: "Food and Health",
      subCategory: [ "Health", "Writing" ]
    }
    return data
  }
  case "Information": {
    const data = {
      mainCategory: "Food and Health",
      subCategory: [ "Health", "Writing" ],
      tags: ["Information"]
    }
    return data
  }
  case "Learn English": {
    const data = {
      mainCategory: "Learn English",
    }
    return data
  }
  case "Photographs": {
    const data = {
      mainCategory: "Portfolios",
      subCategories: ["Expats in Malta"],
      tags: ["Photographs"]
    }
    return data
  }
  case "Portfolios": {
    const data = {
      mainCategory: "Portfolios"
    }
    return data
  }
   case "Recipes": {
    const data = {
      mainCategory: "Food and Health",
      subCategory: [ "Recipes" ]
    }
    return data
  }
     case "Reviews": {
    const data = {
      mainCategory: "Portfolios",
      subCategory: [ "Writing" ]
    }
    return data
  }
  case "Stories and Poems": {
    const data = {
      mainCategory: "Portfolios",
      subCategories: ["Writing"],
      tags: [ "Stories and Poems" ]
    }
    return data 
  }
  case "Web Development": {
    const data = {
      mainCategory: "Portofolios",
      subCategory: [ "Web Development" ]
    }
    return data
  }
  case "Writing": {
    const data = {
      mainCategory: "Portofolios",
      subCategory: [ "Writing" ]
    }
    return data
  }
  default:
    const data = {
      mainCategory: "",
      subCategory: [ ]
    }
    return data
}
}