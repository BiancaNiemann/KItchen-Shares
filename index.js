import { meals } from '/data.js'
import { hacks } from './hacks.js'

//EVENT LISTENERS
document.addEventListener('click', function(e){
    if(e.target.dataset.select){
        handleSelectClick(e.target.dataset.select)
    }
    else if (e.target.id === "go-back"){
        handleBackBtn()
    }
    else if (e.target.id === "vege-only"){
        handleVegeClick(e.target.checked)
    }
    //else if(e.target.dataset.hacks){
     //   handleHackClick (e.target.dataset.hacks)
    //}
})

//HANDLE HACK CLICK
function handleHackClick(hackId){
    console.log(hackId)
}

//HANDLE CHANGE ON CLICK OF MENU ITEM
function handleSelectClick(mealId){
    
    document.getElementById("meal-type-selections").classList.toggle('hidden')
    document.getElementById("meal-name").classList.toggle('hidden')
    
    meals.forEach(meal => {
        if (meal.uuid === mealId){
            getMealType(mealId)
        }
    })
}

//HANDLE CHANGE ON CLICK OF BACK BUTTON
function handleBackBtn(){
    document.getElementById("meal-type-selections").classList.toggle('hidden')
    document.getElementById("meal-name").classList.toggle('hidden')
    document.getElementById('hacks-box-left').classList.toggle('hidden')
    document.getElementById('hacks-box-right').classList.toggle('hidden')
    document.getElementById('vege').classList.toggle('hidden')
}


//HANDLE VEGETERIAN ONLY OPTION OR NOT AND RENDER MENU
function handleVegeClick(ticked){

    let matchVege = ''
    matchVege = meals.filter(meal=> {
        if (ticked){
            return meal.isVege === true
        } else {
            return meal
        }
    
   })
   
   //MEAL SELECTION MENU
    let bfast = ''
    let soup = ''
    let salad = ''
    let main = ''
    let dessert = ''
    
    for (let meal of matchVege){
        if (meal.mealType === 'main'){
            main += `
            <div class="ontop" >
                <img src="./images/${meal.image}" alt="${meal.alt}" class="thumbnail">
                <h5 class="thumbnail-name" id="select-${meal.uuid}" data-select="${meal.uuid}">${meal.name}</h5>
            </div>
            `
        }
        else if (meal.mealType === 'soup'){
            soup += `
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

    document.getElementById('breakfast').innerHTML = bfast

    document.getElementById('salad').innerHTML = salad

    document.getElementById('mainMeal').innerHTML = main

    document.getElementById('dessert').innerHTML = dessert

    document.getElementById('soup').innerHTML = soup

}

//RENDERS HANDY-BOX ON LEFT
function handyBoxLeft(){
    let handyBoxLeft = ""
    hacks.forEach(hack =>{
        let instruct = ''
        hack.instruct.forEach(item =>{
        instruct += `<li>${item}</li>`
        return instruct
        }) 
        
        handyBoxLeft += `
        <div class="handy-box">
            <h3 class="handy-box-title">Handy Hacks!!</h3>
            <h5 id="hack-title-left" data-hacks=${hack.id}>- ${hack.title}<h5>
            <ul class="hack-title">${instruct}</ul>
        </div>
        `
    })
	document.getElementById("hacks-box-left").innerHTML += handyBoxLeft
}

//RENDERS HANDY-BOX ON RIGHT
function handyBoxRight(){
    let handyBoxRight = ""

    handyBoxRight += `
                <div class="handy-box">
                    <h3 class="handy-box-title">The latest news!!</h3>
                    <h5 id="hack-title-right" data-hacks=${hacks.id}>Whats new in our kitchen!!</h5>
                    <p>A kenwood mixer</p>
                    <p>Making pasta</p>
                </div>
			`
        document.getElementById("hacks-box-right").innerHTML += handyBoxRight
    }

//RENDERS MEAL TYPE LIST
function mealListing(){
    let listing = ""

    listing += `
        <h2 class="meal-type">Breakfast</h2>
        <div id="breakfast" class="grid-box"></div>
        <h2 class="meal-type">Salads</h2>
        <div id="salad" class="grid-box"></div>
        <h2 class="meal-type">Main Meals</h2>
        <div id="mainMeal" class="grid-box"></div>
        <h2 class="meal-type">Dessert</h2>
        <div id="dessert" class="grid-box"></div>
        <h2 class="meal-type">Soups</h2>
        <div id="soup" class="grid-box"></div>
    `
    document.getElementById('meal-type-selections').innerHTML = listing
}
mealListing()


//RENDERS FULL RECIPE    
function getMealType(mealId){

    document.getElementById('hacks-box-left').classList.toggle('hidden')
    document.getElementById('hacks-box-right').classList.toggle('hidden')
    document.getElementById('vege').classList.toggle('hidden')
    
    let mealHtml = ''
    
    meals.filter(meal =>{
        if (meal.uuid === mealId){
           
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
            <div class="container " id="container">
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
    })
        
    
    }

function render(){
    handleVegeClick()
    getMealType()
    handyBoxLeft()
    handyBoxRight()
}

render()