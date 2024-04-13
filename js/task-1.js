const categories = document.querySelectorAll("li.item");


let categoriesArray = [];
categories.forEach(function (category) {
    categoriesArray.push(category);
});
let categoriesArrayResult = "Number of categories: " + categoriesArray.length;
console.log(categoriesArrayResult);


// One // 
const categoryOne = categories[0].querySelector("h2").textContent;
const categoryOneUl = categories[0].querySelectorAll("li");
let categoryOneArray = [];
categoryOneUl.forEach(function (category) {
    categoryOneArray.push(category);
});
let categoryOneArrayResult = "Elements: " + categoryOneArray.length;
console.log("Category: " + categoryOne);
console.log(categoryOneArrayResult);

// Two // 
const categoryTwo = categories[1].querySelector("h2").textContent;
const categoryTwoUl = categories[1].querySelectorAll("li");
let categoryTwoArray = [];
categoryTwoUl.forEach(function (category) {
    categoryTwoArray.push(category);
});
let categoryTwoArrayResult = "Elements: " + categoryTwoArray.length;
console.log("Category: " + categoryTwo);
console.log(categoryTwoArrayResult);

// Three // 
const categoryThree = categories[2].querySelector("h2").textContent;
const categoryThreeUl = categories[2].querySelectorAll("li");
let categoryThreeArray = [];
categoryThreeUl.forEach(function (category) {
    categoryThreeArray.push(category);
});
let categoryThreeArrayResult = "Elements: " + categoryThreeArray.length;
console.log("Category: " + categoryThree);
console.log(categoryThreeArrayResult);

