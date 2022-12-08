import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const meals = [
    /*{
        name: "Oma's Mac 'n Cheese",
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
    },*/
    {
        name: "Dinky's Snail shaped pasta with tomato and Lamb",
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
        name: "Dinky's Cottage Pie",
        mealType: "main",
        mealSearch: ['mince', 'potatoe', 'Cottage Pie'],
        isVege : false,
        image:"cottage-pie.JPG",
        alt: "Cottage Pie in dish",
        ingredients: [
            'Seasoning of choice (pepper, salt, Oregano, Thyme)',
            '500gr Fresh Mince',
            '1 Large Onion finely diced',
            'A few cloves fresh Garlic, crushed',
            '1 can Passata',
            'Beef stock liquid',
            'Balsamic vinegar',
            'Ketchup',
            'Mashed Pumpkin',
            'Mashed Potatoe',
            'Blob of Butter',
            'Grated nutmeg',
        ],
        instructions:[
            'Mom always used a good grade of beef mince, and never made Shepherds Pie using mutton mince.',
            'She used mash rather than sliced potatoes as a topping, which we all preferred',
            'When pumpkin was in season, Mom would add it in between the mince and the potato',
            'Back then beef mince was always good quality so one did not have to look for mince that did not look grey or have too much gristle in it. Nowadays, I pay the price and but better quality mince, as buying the cheap staff is not worth it.',
            'Always a good idea to braise and brown the mince first, adding a little at a time into your saucepan that has a little hot oil in it. That way the mince separates and browns, rather than boiling and not gaining colour. ',
            'Add your seasoning of choice, which can be as plain as salt and pepper to salt, pepper, dried Thyme, Oregano and Sage, as well as some cracked black pepper and any other spices that you may enjoy with mince. I add clove powder and Spanish Paprika powder.',
            'Time to add some chopped onions, with a finer dice being better than a chunky chop. Add some garlic (not something that was big back when we grew up) and stir in to combine mince and onion. Mom used to add a can of tomato puree and a small can of tomato paste, but I just add Passata, finding the Pomodoro favour to be greater. To that, once stirred add, some beef stock liquid, enough to get to a reasonably thin mixture once stirred in, and let the mix simmer away until it thickens up and the mince is cooked.',
            'At this time I balance flavours with Balsamic vinegar and good old Ketchup (in our house, that has to be All Gold), and check seasoning as well as add some more dried herbs.',
            'Into a casserole or Lasagne dish that meat goes, keeping back some of the liquid so as not to be to "watery"',
            'Top with prepared mash, or with mashed pumpkin and then mash.',
            'Dot the top with some butter, and a little grated Nutmeg, as well as some extra salt. Into oven, centre rack at 180 Deg C for 20 minutes or so.',
            'Serve alongside a green salad and enjoy.',
            'NB Potato hint - drain and dry the cooked potatoes in your oven for a few minutes, then add warmed Half and Half slowly while mashing. Do not use a whisk or blender or you will end up with a gluey mix. Add butter and stir in.  ',
            'Using warmed milk and cream mix stops the potato starch toughening, and adding butter last, rather than first, stops the butter splitting. (The things we learn from Cookery channel)'
        ],
        notes: [
            'Cottage Pie uses ground beef, whereas Shepherds Pie uses lamb.',
            'Cottage Pie came around in 1791, and it was considered a “poor mans dinner.”',
            "Shepherd’s Pie has always used mashed potatoes as a topping, whereas traditionally, Cottage Pie used sliced potatos."
        ],
        uuid: uuidv4()
    },
    {
        name: "Super simple minestrone soup",
        mealType: "soup",
        mealSearch: ['soup', 'beans'],
        isVege : true,
        image:"minestrone-soup.jpg",
        alt: " ",
        ingredients: [
            '1 cup minced white onion (about 1 small onion)',
            '1/2 cup chopped zucchini/courgette',
            '1/2 cup frozen cut green beans',
            '1/4 cup minced celery ',
            '4 teaspoons minced garlic (about 4 cloves)',
            '4 cups vegetable broth/stock (Ina Paarmans is excellent)',
            '2 cans red kidney beans, drained',
            '2  cans small white beans or butter beans ',
            '1  can diced tomatoes',
            '1/2 cup carrot (julienned or shredded)',
            '2 tablespoons minced fresh parsley',
            '1 1/2 teaspoons dried oregano',
            '1 1/2 teaspoons salt',
            '1/2 teaspoon ground black pepper',
            '1/2 teaspoon dried basil',
            '1/4 teaspoon dried thyme',
            '3 cups hot water',
            '4 cups fresh Baby Spinach ( Or normal chard)',
            '1/2 cup small shell pasta',

        ],
        instructions:[
            'Heat three tablespoons of olive oil over medium heat in a large soup pot.',
            'Saute onion, celery, garlic, green beans, and zucchini in the oil for 5 minutes or until onions begin to turn translucent.',
            'Add vegetable broth to pot, plus drained tomatoes, beans, carrot, hot water, and spices.',
            'Bring soup to a boil, then reduce heat and allow to simmer for 20 minutes.',
            'Add spinach leaves and pasta and cook for an additional 20 minutes or until desired consistency.',
            'Makes about eight 1 1/2 cup servings.',
        ],
        notes: [
            'Could not be more simple!',
        ],
        uuid: uuidv4()
    },
    {
        name: "Sweet Potato & Butternut Soup",
        mealType: "soup",
        mealSearch: ['soup', 'beans'],
        isVege : true,
        image:"butternut-soup.jpg",
        alt: " ",
        ingredients: [
            '2 large carrots, peeled and grated',
            '1 apple, peeled and grated (toss in some lemon water to stop it oxidising)',
            '2 or 3 cloves of garlic (I used bought crushed garlic). Leave out if you have neither',
            '2 medium size onions, finely chopped',
            '400g pumpkin or butternut flesh, diced into smallish cubes',
            '2 large sweet potatoes ',
        ],
        instructions:[
            'Saute the onion, garlic, carrots, apple and veg in some cooking oil, to get a touch of caramelization. Season with salt and pepper.',
            'Stir in either chicken or veg stock to more than cover the veg (you can use a stock cubedissolved in hot water)  ',
            'Simmer until done, adding a little nutmeg if you have',
            'I blitzed the soup for an even texture, but you can leave it as is.',
            'Balance with a little seasoning if needed.',
            'Remove from heat and stir in a blob of cold margarine or butter',
        ],
        notes: [
            'So simple, and very satisfying',
        ],
        uuid: uuidv4()
    },
    {
        name: "Uncle Roly's yummy Milk Tart(Old Style)",
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