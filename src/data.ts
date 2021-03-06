import mintAeroBrownies from "./images/full-size/Mint Aero Brownie.webp";
import crunchieBrownies from "./images/full-size/Crunchie Bar Brownie.webp";
import cookiesAndCreamBrownies from "./images/full-size/Cookies and Cream Brownie.webp";
import bakewellBlondie from "./images/full-size/Bakewell Blondie.webp";
import biscoffBlondie from "./images/full-size/Biscoff Blondie.webp";
import milkyWayCrispyRollBlondie from "./images/full-size/Milky Way Crispy Roll Blondie.webp";
import galaxyCookieBar from "./images/full-size/Galaxy Cookie Bar Pile.webp";
import happyHippoCookieBar from "./images/full-size/Happy Hippo Cookie Bars.webp";
import halfAndHalf from "./images/full-size/Half and Half.webp";
import selectionBox from "./images/full-size/Brownie-Blondie Selection.webp";
import guylianSeashellBrownie from "./images/full-size/Guylian Seashell Brownie.webp";
import daimBarBrownie from "./images/full-size/Diam Bar Brownie.webp";
import oreoBlondie from "./images/full-size/Oreo Blondies Table.webp";
import tobleroneBrownie from "./images/full-size/Toberlone Brownie.webp";
import jaffaCakeBrownie from "./images/full-size/Jaffa Cake Brownie.webp";
import lemonAndWhiteChocBlondie from "./images/full-size/Lemon and White Chocolate Blondie.webp";
import whiteChocolateSmartieBlondie from "./images/full-size/White Chocolate Smartie Blondie.webp";


export const data = [{id: 0, title: "Mint Aero Brownies", imageURL: mintAeroBrownies, description: "Our signature fudgey brownie recipe crammed full with mint flavoured Aero balls.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts, may contain Peanuts"},
    {id: 1, title: "Crunchie Brownies", imageURL: crunchieBrownies, description: "Fudgey brownie base with chocolate honeycomb pieces folded in. Topped with a chocolate ganache layer and MORE chocolate honeycomb. Honeycomb heaven! ", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"},
    {id: 2, title: "Cookies and Cream Brownies", imageURL: cookiesAndCreamBrownies, description: "Fudgey brownie base with chocolate Oreo???s folded throughout. Topped with a layer of our creamy white chocolate and Oreo mix, finished with extra Oreos. ", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"},
    {id: 4, title: "Bakewell Blondie", imageURL: bakewellBlondie, description: "Our best selling Blondie! Our signature fudgey Blondie recipe loaded with white chocolate chunks, fruity cherry jam with a strong almond flavour. ", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Nuts"},
    {id: 5, title: "Biscoff Blondie", imageURL: biscoffBlondie, description: "Our signature fudgey Blondie with Biscoff melted throughout, white chocolate chunks and topped with the famous Biscoff biscuits.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 6, title: "Milky Way Crispy Roll Blondie", imageURL: milkyWayCrispyRollBlondie, description: "Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 7, title: "Galaxy Cookie Bar", imageURL: galaxyCookieBar, description: "Our best selling cookie bar, this is our signature soft and chewy cookie bar recipe that has copious amounts of Galaxy chocolate folded throughout and added to the top once baked. ", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 8, title: "Happy Hippo Cookie Bar", imageURL: happyHippoCookieBar, description: "Soft and chewy cookie bar packed full of Kinder chocolate chunks and Kinder Happy Hippos giving you the famous hazelnut Kinder flavour! ", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 9, title: "Half and Half Box", imageURL: halfAndHalf, description: "Choose 2 of our regular flavours of any brownie, blondie or cookie bar to have 4 pieces of each flavour.", price: 1500, offer: true, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts", select: 2, options:{1:"none selected", 2:"none selected"}},
    {id: 10, title: "Box of 4 different flavours", imageURL: selectionBox, description: "Choose 4 flavours of any brownie, blondie or cookie bar to have 2 pieces of each flavour. The perfect decision for someone who can't decide!", price: 1800, offer: true, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts", select: 4, options:{1:"none selected", 2:"none selected",3:"none selected", 4:"none selected"}},
    {id: 11, title: "Lemon and White Chocolate Blondie", imageURL: lemonAndWhiteChocBlondie, description: "Our signature soft and fudgy blondie. The sweet white chocolate is balanced out with zesty lemon juice to give a perfectly balanced flavor.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"},
    {id: 12, title: "Jaffa Cake Brownie", imageURL: jaffaCakeBrownie, description: "Our chewy and fudgy rich chocolate brownie with an added zest of orange marmalade, giving the full Jaffa Cake flavor. The brownies are topped with a whole Jaffa Cake.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 13, title: "Toblerone Brownie", imageURL: tobleroneBrownie, description: "Our signature brownie full of the chewy and nutty triangular pieces of Swiss chocolate, plus extra milk chocolate chunks.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, Nuts"},
    {id: 14, title: "Oreo Blondie", imageURL: oreoBlondie, description: "Our soft and fudgey blondie recipe packed full of white chocolate chunks and crushed Oreos.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"},
    {id: 15, title: "Daim Bar Brownie", imageURL: daimBarBrownie, description: "Our signature brownie packed full of crunchie almond caramel pieces and extra milk chocolate chunks.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 16, title: "Guylian Brownie", imageURL: guylianSeashellBrownie, description: "Our signature brownie with milk and white chocolate chunks and Guylian Seashells folded throughout. Topped with more of the world's favourite Belgian chocolates.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, Nuts"},
    {id: 17, title: "White Smartie Blondie", imageURL: whiteChocolateSmartieBlondie, description: "Chewy and fudgey blondie that is packed full of white chocolate chunks and white Smartie chocolate pieces.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"}];

/* SOON TO BE ADDED:

    import miniEggEasterEggBrownie from "./images/full-size/Mini Egg Easter Egg Brownie.webp";
    import cremeEggEasterEggBrownie from "./images/full-size/Cr??me Egg Easter Egg Brownie.webp";
    import mintAeroEasterEggBrownie from "./images/full-size/Mint Areo Easter Egg Brownie.webp";
    import cremeEggScotchEgg from "./images/full-size/Brownie Scotch Cr??me Egg.webp";


   {id: id, title: "Mini Egg Blondie Easter Egg", imageURL: miniEggEasterEggBrownie, description: "Easter egg shaped Mini Egg Blondie, perfect for an Easter treat.", price: 1050, offer: true/false, allergens: "allergens"},
   {id: id, title: "Cr??me Egg Brownie Easter Egg", imageURL: cremeEggEasterEggBrownie, description: "Easter egg shaped Cr??me Egg Blondie, perfect for an Easter treat.", price: 1050, offer: true/false, allergens: "allergens"},
   {id: id, title: "Mint Aero Brownie Easter Egg", imageURL: mintAeroEasterEggBrownie, description: "Easter egg shaped Mint Aero Brownie, perfect for an Easter treat.", price: 1050, offer: true/false, allergens: "allergens"},
   {id: id, title: "Cr??me Egg Scotched Egg", imageURL: cremeEggScotchEgg, description: "A whole Cr??me egg wrapped on our signature fudgey brownie, which is then rolled in milk chocolate and finished with chocolate sprinkles.", price: 1050, offer: true/false, allergens: "allergens"}
   {id: 3, title: "Cr??me Egg Brownie", imageURL: cremeEggBrownie, description: "Easter favourite! Enjoy a slab of our fudgey brownie that is filled with chocolate chunks and cr??me egg pieces. The brownies are topped with more cr??me eggs.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, may contain Nuts"},
   */


/* PREVIOUS PRODUCTS:

    import easterBlondie from "./images/full-size/Easter Blondie.webp";
    import easterBrownie from "./images/full-size/Easter Brownie.webp";
    import terryChocolateOrangeBrownie from "./images/full-size/Terry Chocolate Orange Brownie.webp"
    import cremeEggBrownie from "./images/full-size/Creme Egg Brownie Pre Cut.webp";

    {id: 19, title: "Easter Blondies", imageURL: easterBlondie, description: "Our signature white Chocolate flavoured blondie packed full and topped with Easter goodies, including Terry's Chocolate Orange eggs, Smartie eggs, Mini eggs, Terry's White Chocolate Orange eggs, Creme eggs and Malteaser bunnies.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    {id: 20, title: "Easter Brownies", imageURL: easterBrownie, description: "Our signature Chocolatey, fudgey Brownie, packed full and topped with Easter goodies, including Terry's Chocolate Orange eggs, Smartie eggs, Mini eggs, Terry's White Chocolate Orange eggs, Creme eggs and Malteaser bunnies.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"}
    {id: 18, title: "Terry's Chocolate Orange Brownie", imageURL: terryChocolateOrangeBrownie, description: "Our signature brownie with melted chocolate orange folded through, milk chocolate chunks and MORE chocolate orange pieces. The brownie is then topped with a drizzle of chocolate orange chocolate and a segment.", price: 1300, offer: false, allergens: "Wheat, Eggs, Dairy, Soya, may contain Nuts"},
    */


/* TEMPLATE:
    {id: id, title: "title", imageURL: "www.somewhere.com/image3", description: "description", price: 1300, offer: true/false, allergens: "allergens"}
*/
