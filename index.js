"use strict"

 const productsData = {
    electronics: [
      { name: 'Phone', price: 1000, category: 'electronics' },
      { name: 'Laptop', price: 2000 }
    ],
    clothing: [
      { name: 'T-shirt', price: 20 },
      { name: 'Jeans', price: 50 }
    ],
    books: [
      { name: 'Novel', price: 10 },
      { name: 'Poetry', price: 15 }
    ]
  };

  function showProducts(category) {
    var productsBlock = document.getElementById('products');
    productsBlock.innerHTML = '';

    const products = productsData[category];
    for (var i = 0; i < products.length; i++) {
      const product = products[i];
      const productElement = document.createElement('div');
      productElement.innerHTML = '<p class = "product" onclick="showProductInfo(\'' + category + '\', ' + i + ')">' + product.name + '</p>';
      productsBlock.appendChild(productElement);
    }
  }

  function showProductInfo(category, index) {
    const productInfoBlock = document.getElementById('product-info');
    productInfoBlock.innerHTML = '';

    const product = productsData[category][index];
    const productInfoElement = document.createElement('div');
    productInfoElement.innerHTML = 
    '<p class = "purchase">' + product.name + '</p>' +
    '<p class = "price">Cost: $' + product.price + '</p>' +
    '<button onclick="buyProduct()">Buy</button>';
    productInfoBlock.appendChild(productInfoElement);
  }

  function buyProduct() {
    alert('Item purchased');

    const productsBlock = document.getElementById('products');
    productsBlock.innerHTML = '';

    const productInfoBlock = document.getElementById('product-info');
    productInfoBlock.innerHTML = '';
  }
