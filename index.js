import { meals } from '/data.js'

//EVENT LISTENERS
document.addEventListener('click', function(e){
    if(e.target.dataset.select){
        handleSelectClick(e.target.dataset.select)
    }
    else if (e.target.id = "go-back"){
        handleBackBtn()
    }
})

//HANDLE CHANGE ON CLICK OF MENU ITEM
function handleSelectClick(mealId){
    
    document.getElementById("meal-type-selections").classList.toggle('hidden')
    document.getElementById("container").classList.toggle('hidden')
    
    getMealType(mealId)
}

//HANDLE CHANGE ON CLICK OF BACK BUTTON
function handleBackBtn(){
    document.getElementById("meal-type-selections").classList.toggle('hidden')
    document.getElementById("container").classList.toggle('hidden')
}

//MEAL SELECTION MENU
function mealMenu(){
    let bfast = ''
    let salad = ''
    let main = ''
    let dessert = ''
    
    
    for (let meal of meals){
        if (meal.mealType === 'main'){
            main += `
            <div class="ontop" >
                <img src="./images/${meal.image}" alt="${meal.alt}" class="thumbnail">
                <h5 class="thumbnail-name" id="select-${meal.uuid}" data-select="${meal.uuid}">${meal.name}</h5>
            </div>
            `

        }
        else if (meal.mealType === 'breakfast'){
            bfast += `
            <div class="ontop" >
                <img src="./images/${meal.image}" alt="${meal.alt}" class="thumbnail">
                <h5 class="thumbnail-name" id="select-${meal.uuid}" data-select="${meal.uuid}">${meal.name}</h5>
            </div>
            `
        }
        else if (meal.mealType === 'salad'){
            salad += `
            <div class="ontop" >
                <img src="./images/${meal.image}" alt="${meal.alt}" class="thumbnail">
                <h5 class="thumbnail-name" id="select-${meal.uuid}" data-select="${meal.uuid}">${meal.name}</h5>
            </div>
            `
        }
        else if (meal.mealType = 'dessert'){
            dessert += `
            <div class="ontop" >
                <img src="./images/${meal.image}" alt="${meal.alt}" class="thumbnail">
                <h5 class="thumbnail-name" id="select-${meal.uuid}" data-select="${meal.uuid}">${meal.name}</h5>
            </div>
            `
        }
    }

    document.getElementById('breakfast').innerHTML += bfast

    document.getElementById('salad').innerHTML += salad

    document.getElementById('mainMeal').innerHTML += main

    document.getElementById('dessert').innerHTML += dessert
   
}
mealMenu()

//RENDERS FULL RECIPE    
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
            <div class='container hidden' id="container">
                <div class="top-bar">
                    <h3 class="header">${meal.name}</h3>
                    <button class="go-back" id="go-back">Go back</button>
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

    
   document.getElementById('meal-name').innerHTML = mealHtml
}

getMealType()




