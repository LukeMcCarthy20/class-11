'use strict';
console.log('js Connected...');
// Global Variables
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
let chartResults = document.getElementById('chartResults');
// Constructor
let Products = function (productName, imageSrc, clicks, timesShown, views) {
  this.productName = productName;
  this.imageSrc = imageSrc;
  if (clicks) {
    this.clicks = clicks;
  } else {
    this.clicks = 0;
  }
  if (timesShown) {
    this.timesShown = timesShown;
  } else {
    this.timesShown = 0;
  }
  if (views) {
    this.views = views;
  } else {
    this.views = 0;
  }
  allProducts.push(this);
};

// Random number to chose an index and display a random image
function randomNumber() {
  return Math.round(Math.random() * allProducts.length);
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
  image1.src = allProducts[product1].imageSrc;
  image2.src = allProducts[product2].imageSrc;
  image3.src = allProducts[product3].imageSrc;

}





let savedProductString = localStorage.getItem('savedProductVoteRound');

// Storing Local Storage
if (savedProductString) {

  let arrayOfNotProductObject = JSON.parse(savedProductString);
  console.log(arrayOfNotProductObject);
  for (let i = 0; i < arrayOfNotProductObject.length; i++) {
    new Products(
      arrayOfNotProductObject[i].productName,
      arrayOfNotProductObject[i].imageSrc,
      arrayOfNotProductObject[i].clicks,
      arrayOfNotProductObject[i].timesShown
    );
  }

// Objects
} else {
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

}







// Event Listeners 

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
    localStorage.setItem('savedProductVoteRound', JSON.stringify(allProducts));
  }
}

function clear() {
  let ul = document.getElementById('product-clicks-list');
  while (ul.firstChild) {
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
    li.textContent = `${ currentProduct.productName } had ${ currentProduct.clicks } votes, and was seen ${ currentProduct.views } times.`;
    ul.appendChild(li);
  }
}

productImageSectionTag.addEventListener('click', handleClickOnProduct);
resultsList.addEventListener('click', handleResultsList);




function handleChartResults() {
  console.log('proof of chart results (handle)');

  productChart();
}




resultsList.addEventListener('click', handleResultsList);
chartResults.addEventListener('click', handleChartResults);






image1OnThePage = allProducts[0];
image2OnThePage = allProducts[1];
image3OnThePage = allProducts[2];
// calling render function
renderProducts();

// Chart

function productChart() {
  console.log('chart...');

  let productNamesArray = [];
  let productClicksArray = [];

  for (let i = 0; i < allProducts.length; i++) {
    let singleProductName = allProducts[i].productName;
    productNamesArray.push(singleProductName);
  }

  for (let i = 0; i < allProducts.length; i++) {
    let singleProductsClicks = allProducts[i].clicks;
    productClicksArray.push(singleProductsClicks);
  }

  let ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNamesArray,
      datasets: [{
        label: 'Product Clicks',
        data: productClicksArray,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(0, 99, 132)',
        borderWidth: 4
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
