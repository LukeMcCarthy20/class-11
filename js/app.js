'use strict';
console.log('js Connected...');

let totalClicks = 0;
let allProducts = [];
let previouslyPickedProducts = [];
let productImageSectionTag = document.getElementById('allProducts');
let image1 = document.getElementById('image1_img');
let image2 = document.getElementById('image2_img');
let image3 = document.getElementById('image3_img');
let image1OnThePage;
let image2OnThePage;
let image3OnThePage;
let resultsList = document.getElementById('resultsList');

let Products = function (productName, imageSrc) {
  this.productName = productName;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
};


function randomNumber() {
  return Math.round(Math.random() * Products.allProducts.length);
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
  image1.imageSrc = Products.allProducts[product1].img;
  image2.imageSrc = Products.allProducts[product2].img;
  image3.imageSrc = Products.allProducts[product3].img;

}




















function handleClickOnProduct(event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }
  totalClicks++;
  image1OnThePage.views++;
  image2OnThePage.views++;
  image3OnThePage.views++;

  if (event.target.id === 'image1_img') {
    image1OnThePage.clicks++;
  }

  if (event.target.id === 'image2_img') {
    image2OnThePage.clicks++;
  }

  if (event.target.id === 'image3_img') {
    image3OnThePage.clicks++;
  }

  const tempPickedProducts = [];
  let image1Index;

  do {
    image1Index = Math.floor(Math.random() * allProducts.length);
  } while (
    previouslyPickedProducts.includes(allProducts[image1Index]) ||
    tempPickedProducts.includes(allProducts[image1Index])
  );

  tempPickedProducts.push(allProducts[image1Index]);

  let image2Index;

  do {
    image2Index = Math.floor(Math.random() * allProducts.length);
  } while (
    previouslyPickedProducts.includes(allProducts[image2Index]) ||
    tempPickedProducts.includes(allProducts[image2Index])
  );

  tempPickedProducts.push(allProducts[image2Index]);

  let image3Index;

  do {
    image3Index = Math.floor(Math.random() * allProducts.length);
  } while (
    previouslyPickedProducts.includes(allProducts[image3Index]) ||
    tempPickedProducts.includes(allProducts[image3Index])
  );

  tempPickedProducts.push(allProducts[image3Index]);

  image1OnThePage = allProducts[image1Index];
  image2OnThePage = allProducts[image2Index];
  image3OnThePage = allProducts[image3Index];

  image1.src = image1OnThePage.imageSrc;
  image2.src = image2OnThePage.imageSrc;
  image3.src = image3OnThePage.imageSrc;

  previouslyPickedProducts = [];
  previouslyPickedProducts.push(allProducts[image1Index]);
  previouslyPickedProducts.push(allProducts[image2Index]);
  previouslyPickedProducts.push(allProducts[image3Index]);

  if (totalClicks === 25) {
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
  }
}

function clear(){
  let ul = document.getElementById('product-clicks-list');
  while (ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
}



function handleResultsList() {
  clear();
  document.getElementById('product-clicks-list');
  document.getElementById('product-clicks-list');
  let ul = document.getElementById('product-clicks-list');

  for (let i = 0; i < allProducts.length; i++) {
    let currentProduct = allProducts[i];
    let li = document.createElement('li');
    li.textContent = currentProduct.productName + ' got ' + currentProduct.clicks + ' votes';
    ul.appendChild(li);
  }
}

productImageSectionTag.addEventListener('click', handleClickOnProduct);
resultsList.addEventListener('click', handleResultsList);

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

image1OnThePage = allProducts[0];
image2OnThePage = allProducts[1];
image3OnThePage = allProducts[2];

renderProducts();
