"use strict";

const productsData = {
  electronics: [
    { name: "Phone", price: 1000, category: "electronics" },
    { name: "Laptop", price: 2000 },
  ],
  clothing: [
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
  ],
  books: [
    { name: "Novel", price: 10 },
    { name: "Poetry", price: 15 },
  ],
};

function showProducts(category) {
  const productsBlock = document.getElementById("products");
  productsBlock.innerHTML = "";

  
  const products = productsData[category];
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.createElement("div");
    productElement.innerHTML =
      '<p class = "product" onclick="showProductInfo(\'' +
      category +
      "', " +
      i +
      ')">' +
      product.name +
      "</p>";
    productsBlock.appendChild(productElement);
    
  }
}

function showProductInfo(category, index) {
  
  const productInfoBlock = document.getElementById("product-info");
  productInfoBlock.innerHTML = "";

  const product = productsData[category][index];
  const productInfoElement = document.createElement("div");
  productInfoElement.innerHTML =
    '<p class = "purchase">' +
    product.name +
    "</p>" +
    '<p class = "price">Cost: $' +
    product.price +
    "</p>" +
    '<button onclick="buyProduct()">Buy</button>';
  productInfoBlock.appendChild(productInfoElement);
}

function buyProduct() {

  const formBlock = document.getElementById("form");
  formBlock.innerHTML =
    '<form id =  action="">' +
    '<label for="first-name">Enter your first name</label> <br>' +
    '<input type="text" name="first-name" id="first-name" required> <br>' +
    '<label for="last-name">Enter your last name</label> <br>' +
    '<input type="text" name="last-name" id="last-name" required> <br>' +
    '<label for = "citiesList">Choose your city</label> <br> ' +
    '<select name="cities" id="city">' +
    '<option value="Odesa">Odesa</option>' +
    '<option value="Kiyv">Kiyv</option>' +
    '<option value="Kharkiv">Kharkiv</option>' +
    '<option value="Lviv">Lviv</option>' +
    '<option value="Mykolaiv">Mykolaiv</option>' +
    "</select> <br> " +
    '<label for ="storageList">Choose Nova Poshta storage</label> <br> ' +
    '<select name="storage" id="storage">' +
    '<option value="Nova Poshta. Post office #25">Nova Poshta. Post office #25</option>' +
    '<option value="Nova Poshta. Post office #62">Nova Poshta. Post office #62</option>' +
    '<option value="Nova Poshta. Post office #129">Nova Poshta. Post office #129</option>' +
    '<option value="Nova Poshta. Post office #30">Nova Poshta. Post office #30</option>' +
    '<option value="Nova Poshta. Post office #13">Nova Poshta. Post office #13</option>' +
    '<option value="Nova Poshta. Post office #5">Nova Poshta. Post office #5</option>' +
    '<option value="Nova Poshta. Post office #48">Nova Poshta. Post office #48</option>' +
    '<option value="Nova Poshta. Post office #18">Nova Poshta. Post office #18</option>' +
    '<option value="Nova Poshta. Post office #10">Nova Poshta. Post office #10</option>' +
    '<option value="Nova Poshta. Post office #14">Nova Poshta. Post office #14</option>' +
    "</select> <br>" +
    '<label for="paymentMethod">Choose payment method</label> <br>' +
    '<input type="radio" id =  "payment-method"  name = "payment-method" value = "By credit card"> By credit card' +
    '<input type="radio" id =  "payment-method"  name = "payment-method" value = "By cash when arrive">By cash when arrive <br>' +
    '<label for="quantity">Production quantity </label> <br>' +
    '<input type="number" name="quantity" id="quantity" required> <br>' +
    '<label for="comment">Purchase comment</label> <br>' +
    '<input type="textarea " id = "comment" value=""></input> <br>' +
    '<input type="submit" onclick="submitElement()" value="Submit your purchase"></input>' +
    "</form>";
   
}



function submitElement() {
  const form = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
   
    
  }

  form.addEventListener("submit", handleForm);
 
  
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const city = document.getElementById("city").value;
  const storage = document.getElementById("storage").value;
  const paymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;
  const quantity = document.getElementById("quantity").value;
  const comment = document.getElementById("comment").value;

  if (
    firstName === "" ||
    lastName === "" ||
    city === "" ||
    quantity === "" ||
    paymentMethod === ""
  ) {
    alert("Values cannot be empty");
  } else if (!isNaN(firstName) || !isNaN(lastName)) {
    alert("Name cannot be a number");
  } else if (!paymentMethod) {
    alert("Please select a payment method");
  } else if (quantity < 0) {
    alert("Quantity cannot be negative");
  } else {
    alert("Item purchased");

    const orderInfoElement = document.getElementById("order-info");
    orderInfoElement.innerHTML =
      "<h2>Order</h2>" +
      
      "<p>Name of buyer:" +
      firstName +
      " " +
      lastName +
      "</p>" +
      "<p>City:" +
      city +
      "</p>" +
      "<p>Nova Poshta storage:" +
      storage +
      "</p>" +
      "<p>Payment method:" +
      paymentMethod +
      "</p>" +
      "<p>Quantity of item:" +
      quantity +
      "</p>" +
      "<p>Commentar:" +
      comment +
      "</p>";
     
      
    

    const productsBlock = document.getElementById("products");
    productsBlock.innerHTML = "";

    const productInfoBlock = document.getElementById("product-info");
    productInfoBlock.innerHTML = "";

    const formBlock = document.getElementById("form");
    formBlock.innerHTML = "";
  }
}

