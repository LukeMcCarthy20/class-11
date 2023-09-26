'use strict';
console.log('js Conntected...');


let img1 = document.querySelector('section img:first-child');
let img2 = document.querySelector('section img:nth-child(2)');
let img3 = document.querySelector('section img:nth-child(3)');

let productContainer = document.querySelector('section');

let resultButton = document.querySelector('section + div');





let clicks = 0;

let maxAttempts = 5;

Products.allProductsArray = [];

function Products(name, src) {
  this.name = name;
  this.img = src;
  this.views = 0;
  Products.allProductsArray.push(this);

}

function randomNumber() {
  return Math.round(Math.random() * Products.allProductsArray.length);
}


function renderProducts() {
  let product1 = randomNumber();
  let product2 = randomNumber();
  let product3 = randomNumber();
  console.log(product1, product2, product3);

  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product1 = randomNumber();
    product2 = randomNumber();
    product3 = randomNumber();

  }
  Products.allProductsArray[product1].views++;
  Products.allProductsArray[product2].views++;
  Products.allProductsArray[product3].views++;


  img1.src = Products.allProductsArray[product1].img;
  img2.src = Products.allProductsArray[product2].img;
  img3.src = Products.allProductsArray[product3].img;

  img1.alt = Products.allProductsArray[product1].name;
  img2.alt = Products.allProductsArray[product2].name;
  img3.alt = Products.allProductsArray[product3].name;

}






new Products('Bag', 'images/assets/bag.jpg');
new Products('Banana', 'images/assets/banana.jpg');
new Products('Bathroom', 'images/assets/bathroom.jpg');
new Products('Boots', 'images/assets/boots.jpg');
new Products('Breakfast', 'images/assets/breakfast.jpg');
new Products('Bubblegum', 'images/assets/bubblegum.jpg');
new Products('Chair', 'images/assets/chair.jpg');
new Products('Cthulhu', 'images/assets/cthulhu.jpg');
new Products('Dog duck', 'images/assets/dog-duck.jpg');
new Products('Dragon', 'images/assets/dragon.jpg');
new Products('Pen', 'images/assets/pen.jpg');
new Products('Pet Sweep', 'images/assets/pet-sweep.jpg');
new Products('Scissors', 'images/assets/scissors.jpg');
new Products('Sharks', 'images/assets/shark.jpg');
new Products('Sweep', 'images/assets/sweep.png');
new Products('tauntaun', 'images/assets/tauntaun.jpg');
new Products('Unicorn', 'images/assets/unicorn.jpg');
new Products('Water-can', 'images/assets/water-can.jpg');
new Products('tauntaun', 'images/assets/wine-glass.jpg');




let imgSection = document.getElementById('imgSection');

function imgSectionClick (event){
  console.log('Working...');

  // for (let i = 0; i < product ){

  // }





}










renderProducts();


imgSection.addEventListener('click', imgSectionClick);
