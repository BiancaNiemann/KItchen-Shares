import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const meals = [
    {
        name: "Oma's Mac n Cheese",
        mealType: 'main',
        mealSearch: ['pasta', 'cheese'],
        image:'mac-n-cheese.jpg',
        alt: "Oma's Mac n Cheese",
        isVege : true,
        ingredients: ['500g Elbow Macaroni (this will easily serve six adults)',
            '1 x tin of canned button mushrooms',
            '1 x tin of creamy mushroom soup',
            '1 x tin of creamed sweetcorn',
            '1 x 250g streaky bacon, cut into small slices',
            '2 x onions (medium) chopped into a fine dice'
            ],
        instructions:[
            'Cook off the pasta in boiling and salted water until cooked to al dente and not too soft',
            'Strain in colander, toss a little oil into the pasta to keep the pieces separate',
            'Leave one side',
            'Whilst the mac noodles are cooking, start prep on the rest of the ingredients',
            'Sauté the onions, sweating them off until transparent',
            'Add in the bacon and render it down along with those onions, until soft but not crispy',
            '   (if you are using Tuna instead, add it in toward the end of sauce prep)',
            'Add in the sweetcorn, and the canned mushrooms (drained)',
            'Pour the mushroom soup into a bowl and then stir it up well before adding into the above mix. This prevents clumping',
            'Season with salt, pepper, a few pinches of cayenne pepper (optional) as well as some dried thyme.',
            'Tip the pasta into a baking dish or lasagne bowl, and then add the above mixture, stirring to incorporate evenly and taste test. Adjust seasoning if need be. Top with grated cheese and bake on centre rack of oven at 160 Deg C for twenty minutes to half an hour and remove from oven.',
            'Restrain yourself from tasting the delicous outcome whilst piping hot!',
            'Better to let it rest up on a board for a few minutes, to cool down and to set up properly.',
            'Perfect served with a green salad, but sublime on its own.',
            'This meal should take less than an hour to prep, and allows you to clean the kitchen and set the table whilst it is baking.'
        ],
        notes: [
            'I normally use Penne',
            'You can use the mushroom liquid for a stock or sauce, or add it to the cream and milk for the mac n cheese. Umami flavours are always great.',
            'Must admit, adding sliced green pepper along with the onions allows for a warm Italian flavour.'
        ],
        uuid: uuidv4()
    },
    {
        name: "Dinky's Snail shaped pasta with tomato and Lamb or Mutton",
        mealType: 'main',
        mealSearch: ['pasta', 'mutton', 'lamb'],
        isVege : false,
        image:'snail-pasta.jpg',
        alt: "Snail Pasta",
        ingredients: [
            '1kg lamb/mutton neck or breast',
            'Olive oil',
            '2 carrots finely diced',
            '2 sticks celery finely diced',
            '1 or 2 onions diced',
            '3 cloves or so of garlic, chopped',
            'Salt and pepper',
            'Dried Thyme and some dried Rosemary',
            '1 small can of tomato paste',
            '1 can of tomato puree',
            '1 can of diced tomatoes ',
            'Some dark or white vinegar',
            '2 beef stock cubes dissolved in 750ml boiling water',
            '1 x 500g Snail shaped pasta'
        ],
        instructions:[
            'Heat the olive oil in a large pot over medium-high heat. Add in the meat and cook for 2 to 3 minutes per side, stirring, until all sides are lightly browned. Transfer the lamb to a plate and set aside',
            'Lower the heat to medium and add the carrot, celery, onion, chopped garlic, salt, pepper, thyme and rosemary. Allow to cook for 8-10 minutes until the vegetables have softened and the onions are translucent',
            'Add the tomatoes and stock. Cook for 5 minutes.',
            'Add in the lamb and stir to combine. Now set the stove top to lowest heat and let this mix braise away ever so slowly. Add liquid stock or water if it gets too dry.  Depending on the meat cut, this will take at least an hour, if not more. (This step could be done in a 175 Deg C oven, centre shelf, in a casserole dish, for 3 hours)',
            'Use a slotted spoon to remove all the meat once it is good and tender ',
            'Using a potato masher, mash the vegetables in the sauce so they break down into smaller pieces, thickening the sauce.',    
            'Toward the end of the ragout cooking time, cook the pasta in salted water until al dente and then place in a colander over the cooking pot. Sprinkle with some olive oil and agitate to separate noodles. Set aside.',
            'Now it is time to finish off that comfort food dinner. Combine the ragout, meat and snail  shaped pasta in a large casserole and stir to combine',
            'The ragout sauce should be thick, but thin enough to coat the pasta beautifully.',
            'Warm in oven',
            'Serve in bowls, and be prepared to serve seconds (maybe thirds)'
        ],
        notes: [
            "Lumaconi and Lumache are the Italian names for the snail shaped noodles that fill with sauce making for sumptuous spoonful's of flavour",
            'I add red wine, ground coriander and cumin to mine',
            'Balsamic vinegar gives a better balance, but was not readily available back then',
            'Parmesan and Cilantro or Parsley to top the dish, also modern, but delicious',
            'Could use rigatoni, penne or other pasta shape that will hold the sauce'
        ],
        uuid: uuidv4()
    },
    {
        name: "80's Chicken Curry",
        mealType: "main",
        mealSearch: ['chicken', 'curry'],
        isVege : false,
        image:"chicken-curry.jpg",
        alt: "Chicken curry & Naan bread ",
        ingredients: [
            '3 tbsp oil',
            '1 kg chicken pieces',
            '3 cloves garlic, minced',
            '1 medium onion, chopped',
            '1 Chicken stock cube',
            '3 tbsp Rajah Medium curry powder',
            '2 cups water',
            '1 carrot, sliced',
            '2 potatoes, chopped',
            '1 can of Green Peas',
            'salt and pepper to taste',
            'A tbsp or so of vinegar '
        ],
        instructions:[
            'Pour the oil into a medium-sized pot over medium heat. Sauté the garlic until browned. Add the onions. Sauté the chicken pieces and let brown on all sides.',
            'Sauté the garlic until browned. Add the onions. ',
            'Sauté the chicken pieces and let brown on all sides.',
            'Add the curry powder, vinegar and stock cube (dissolved in the water) as well as some salt and pepper. ',
            'Sauté for a few minutes, then simmer for 15 minutes Add the potatoes and the carrots. Simmer for 20 minutes covered. ',
            'Check and stir when needed. ',
            'Add the peas and then let it simmer again with the lid off until the sauce is thick.',
            'Season with more salt and pepper if needed.'
        ],
        notes: [
            'Simple to the max, but honestly, really good, and not too spicy, so even the kids enjoyed the curry'
        ],
        uuid: uuidv4()
    },
    {
        name: "80's Beef Stew",
        mealType: "main",
        mealSearch: ["beef", 'stew'],
        isVege : false,
        image:"beef-stew.jpg",
        alt: " ",
        ingredients: [
            'Cooking oil for frying (I used Sunflower oil back then)',
            '2 onions chopped',
            '1 green pepper chopped',
            'A few chopped tomatoes',
            '4 potatoes peeled and chopped',
            '3 carrots, chopped',
            'Salt and pepper',
            '30 ml medium Rajah curry powder, sometimes more, sometimes less.',
            'Some Robertsons barbecue spice and a good sprinkle of Clove powder',
            'Back then I never really added garlic or herbs, was not really something I thought of .',
            'Round about 1Kg of stewing beef, Chuck, or Blade',
            '1 Beef or Oxtail stock cube ( I have even used a chicken stock cube)'
        ],
        instructions:[
            'Heat the oil in a pot and fry the onion and green pepper until soft',
            'Add the Rajah Medium Curry Powder, spices and tomato and fry for about two minutes or so',
            'Add the beef and fry until well browned',
            'Add the stock cube dissolved in some of the water, as well as that glug of vinegar and bring it up to the boil, then let it simmer with lid on for a good half an hour. Check if it needs stirring every now and then.',
            'Add the potatoes and carrots, bring back up to the boil and then simmer with lid on for another half an hour. Check and stir occasionally.',
            'Add the soup, dissolved in the rest of the water, stir and allow it all to simmer for 15 minutes until it becomes thick. Lid on if already thick to start with (or add some more water). Lid off if very thin, so that it reduces down.'
        ],
        notes: [
            'This dinner really went down well, even though it did not have the finesse of a modern stew. No garlic, no parsley, just good old fashioned comfort food.',
            'If I made chicken stew, the process was much the same, just that cooking time on the chicken pieces was a little shorter. (Never thought of chicken fillets back then, just good old braai chicken pieces). Instead of only water, I did add milk as well, when adding in the Chicken or Tomato soup and sometimes added dried Thyme'
        ],
        uuid: uuidv4()
    },
    {
        name: "Breakfast Oat Bake",
        mealType: "breakfast",
        mealSearch: ['oats', 'bananas', 'apple'],
        isVege : true,
        image:"oats.jpg",
        alt: "Bowls of oats",
        ingredients: [
            '2 cups Oats',
            '1 cup Milk',
            '2 eggs',
            '2 ripe bananas mashed',
            '1 apple grated'
        ],
        instructions:[
            'Mix all ingredients together',
            "bake at 180 deg for 30min"

        ],
        notes: [
            "I like to serve this with a bit of milk or plain yoghurt on top"
        ],
        uuid: uuidv4()
    },
    {
        name: "Dessert 1",
        mealType: "dessert",
        mealSearch: [],
        isVege : true,
        image:"apple-cake.jpg",
        alt: " ",
        ingredients: [

        ],
        instructions:[

        ],
        notes: [

        ],
        uuid: uuidv4()
    },
    {
        name: "salad 1",
        mealType: "salad",
        mealSearch: [],
        isVege : true,
        image:"GreekSalad.jpg",
        alt: " ",
        ingredients: [

        ],
        instructions:[

        ],
        notes: [

        ],
        uuid: uuidv4()
    },
    {
        name: "Uncle Rolys yummy Milk Tart(Old Style)",
        mealType: "dessert",
        mealSearch: ['pudding', 'milk', 'tart'],
        isVege : true,
        image:"milk-tart.JPG",
        alt: "Picture of Milk Tart",
        ingredients: [
            '4 1/2 cups Milk',
            '3 Tbsp Butter',
            '3 Eggs',
            '3/4 cup Sugar',
            '3 Tbsp Cornflour (Maizena)',
            '3 Tbsp Cake Flour',
            '1 cup Butter',
            '2 cups all-purpose flour',
            '1/2 cup Sugar',
            'Cinnamon'
        ],
        instructions:[
            'Preheat the oven to 180 deg',
            'Mix together the butter, flour and sugar',
            'Press mixture into a tart pan',
            'Bake for about 12-15 minutes, till a light brown',
            'Remove from oven and allow to cool completely',
            '',
            'Boil together Milk and Butter',
            'Mix eggs, sugar, cornflour and flour',
            'Stir mixture into the milk and boil slowly for 10 minutes stirring continuously(NB)',
            'Fill the cooled base with the boiled mixture and sprinkle cinnamon over the top',
            'Allow to cool',
        ],
        notes: [
            'I use self-raising flour for this recipe',
            'Adding some cinnamon to the egg mixture gives it extra flavour',
            'This recipe should give you 2 average (23cm) milk tarts'
        ],
        uuid: uuidv4()
    },
]


    /*{
        name: "",
        mealType: "",
        mealSearch: [],
        isVege : "",
        image:"",
        alt: " ",
        ingredients: [

        ],
        instructions:[

        ],
        notes: [

        ],
        uuid: uuidv4()
    },*/