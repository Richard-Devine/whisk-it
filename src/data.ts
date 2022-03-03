import mintAeroBrownies from './images/Mint Aero Brownie.jpg'
import crunchieBrownies from './images/Crunchie Bar Brownie.jpg'
import cookiesAndCreamBrownies from './images/Cookies and Cream Brownie.jpg'
//import cremeEggBrownie from './images/Cr'
import bakewellBlondie from './images/Bakewell Blondie.jpg'
import biscoffBlondie from './images/Biscoff Blondie.jpg'
//import milkyWayCrispyRollBlondie from './images/'
import galaxyCookieBar from './images/Galaxy Cookie Bar.jpg'
import happyHippoCookieBar from './images/Happy Hippo Cookie Bars.jpg'
import halfAndHalf from './images/Half and Half.jpg'
import selectionBox from './images/Brownie-Blondie Selection.jpg'
import terryChocolateOrangeBrownie from './images/Terry Chocolate Orange Brownie.jpg'
import whiteChocolateSmartieBlondie from './images/White Chocolate Smartie Blondie.jpg'
import miniEggEasterEggBrownie from './images/Mini Egg Easter Egg Brownie.jpg'
import cremeEggEasterEggBrownie from './images/Crème Egg Easter Egg Brownie.jpg'
import mintAeroEasterEggBrownie from './images/Mint Areo Easter Egg Brownie.jpg'
import cremeEggScotchEgg from './images/Brownie Scotch Crème Egg.jpg'


export const data = [{id: 1, title: 'Mint Aero Brownies', imageURL: mintAeroBrownies, description: 'Our signature fudgey brownie recipe crammed full with mint flavoured aero balls.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, may contain Nuts, may contain Peanuts'},
    {id: 2, title: 'Crunchie Brownies', imageURL: crunchieBrownies, description: 'Fudgey brownie base with chocolate honeycomb pieces folded in. Topped with a chocolate ganache layer and MORE chocolate honeycomb. Honeycomb heaven! ', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, may contain Nuts'},
    {id: 3, title: 'Cookies and Cream Brownies', imageURL: cookiesAndCreamBrownies, description: 'Fudgey brownie base with chocolate Oreo’s folded throughout. Topped with a layer of our creamy white chocolate and Oreo mix, finished with extra Oreos. ', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, may contain Nuts'},
    {id: 4, title: 'Crème Egg Brownie', imageURL: "cremeEggBrownie", description: 'Easter favourite! Enjoy a slab of our fudgey brownie that is filled with chocolate chunks and crème egg pieces. The brownies are topped with more crème eggs.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, may contain Nuts'},
    {id: 5, title: 'Bakewell Blondie', imageURL: bakewellBlondie, description: 'Our best selling Blondie! Our signature fudgey Blondie recipe loaded with white chocolate chunks, fruity cherry jam with a strong almond flavour. ', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Nuts'},
    {id: 6, title: 'Biscoff Blondie', imageURL: biscoffBlondie, description: 'Our signature fudgey Blondie with Biscoff melted throughout, white chocolate chunks and topped with the famous Biscoff biscuits.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
    {id: 7, title: 'Milky Way Crispy Roll Blondie', imageURL: "milkyWayCrispyRollBlondie", description: 'Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
    {id: 8, title: 'Galaxy Cookie Bar', imageURL: galaxyCookieBar, description: 'Our best selling cookie bar, this is our signature soft and chewy cookie bar recipe that has copious amounts of Galaxy chocolate folded throughout and added to the top once baked. ', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
    {id: 9, title: 'Happy Hippo Cookie Bar', imageURL: happyHippoCookieBar, description: 'Soft and chewy cookie bar packed full of Kinder chocolate chunks and Kinder Happy Hippos giving you the famous hazelnut Kinder flavour! ', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
    {id: 10, title: 'Half and Half Box', imageURL: halfAndHalf, description: 'Choose 2 of our regular flavours of any brownie, blondie or cookie bar to have 4 pieces of each flavour.', price: '15', offer: true, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
    {id: 11, title: 'Box of 4 different flavours', imageURL: selectionBox, description: "Choose 4 of our regular flavours of any brownie, blondie or cookie bar to have 2 pieces of each flavour. The perfect decision for someone who can't decide!", price: '18', offer: true, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'}]



/*{id: id, title: 'Terry Chocolate Orange Brownie', imageURL: terryChocolateOrangeBrownie, description: 'Our signature brownie with melted chocolate orange folded through, milk chocolate chunks and MORE chocolate orange pieces. The  brownie is then topped with a drizzle of chocolate orange chocolate and a segment.', price: '10.50', offer: true, allergens: 'allergens'},
    {id: id, title: 'White Smartie Blondie', imageURL: whiteChocolateSmartieBlondie, description: 'Chewy and fudgey blondie that is packed full of white chocolate chunks and white Smartie chocolate pieces.', price: '10.50', offer: true, allergens: 'allergens'},
    {id: id, title: 'Mini Egg Blondie Easter Egg', imageURL: miniEggEasterEggBrownie, description: 'Easter egg shaped Mini Egg Blondie, perfect for an Easter treat.', price: '10.50', offer: true/false, allergens: 'allergens'},
    {id: id, title: 'Crème Egg Brownie Easter Egg', imageURL: cremeEggEasterEggBrownie, description: 'Easter egg shaped Crème Egg Blondie, perfect for an Easter treat.', price: '10.50', offer: true/false, allergens: 'allergens'},
    {id: id, title: 'Mint Aero Brownie Easter Egg', imageURL: mintAeroEasterEggBrownie, description: 'Easter egg shaped Mint Aero Brownie, perfect for an Easter treat.', price: '10.50', offer: true/false, allergens: 'allergens'},
    {id: id, title: 'Crème Egg Scotched Egg', imageURL: cremeEggScotchEgg, description: 'A whole Crème egg wrapped on our signature fudgey brownie, which is then rolled in milk chocolate and finished with chocolate sprinkles.', price: '10.50', offer: true/false, allergens: 'allergens'}*/



// TEMPLATE: {id: id, title: 'title', imageURL: 'www.somewhere.com/image3', description: 'description', price: '10.50', offer: true/false, allergens: 'allergens'}
//export const allImages = [image]