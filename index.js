import { meals } from '/data.js'

const mealName = document.getElementById('meal-name')
//const mealSelector = document.getElementById('meal-selector')
//mealSelector.innerHtml = `<h1>test</h1>`
    
function getMealType(){
    let mealHtml = ''
    
    for (let meal of meals){

        let ingredientsArray = meal.ingredients
        let ingredient = ingredientsArray.map((type) => {
            return `<li  class="ingredient">${type}</li>`
        }).join('')
    
    
        let instructionsArray = meal.instructions
        let instruction = instructionsArray.map((instruct) => {
            return `<li class="instruction">${instruct}</li>`
            
        }).join('')

        let notesArray = meal.notes
        let note = notesArray.map((noted)=> {
            return `<li>${noted}</li>`
        }).join('')

        mealHtml += `
            <div class='container'>
                <div class="top-bar">
                    <h3 class="header">${meal.name}</h3>
                    <img class="image" src="./images/${meal.image}" alt="${meal.alt}"/>
                </div>
                <div class="meal-info">
                    <div class="ingredients">
                        <h4>Ingredients</h4>
                        <ul>${ingredient}</ul>
                    </div>
                    <div class="instructions">
                        <h4>Instructions</h4>
                    <ol>${instruction}</ol>
                    </div>
                </div>
                <h4 class="note-name">Notes</h4>
                <ul class="notes">${note}</ul>
           </div>
        ` 
   }

    
    mealName.innerHTML = mealHtml
}

getMealType()




