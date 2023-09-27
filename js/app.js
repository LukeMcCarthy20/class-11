'use strict';
console.log('js Conntected...');



let totalClicks = 0;

let allProducts = [];

let previouslyPickedProducts = [];

let productImageSectionTag = document.getElementById('allProducts');

let Image1 = document.getElementById('image1_img');

let image2 = document.getElementById('image2_img');

let image3 = document.getElementById('image3_img');

let Image1OnThePage;

let Image2OnThePage;

let Image3OnThePage;

let resultsList = document.getElementById('resultsList');

let Products = function (productName, imageSrc) {

  this.productName = productName;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);





}