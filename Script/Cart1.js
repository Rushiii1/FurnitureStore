var cartItems = JSON.parse(localStorage.getItem("cartlist")) || [];


var total = 0;
var cartTotalElement = document.getElementById("cart-total");
// Function to render the cart items on the page
function renderCartItems() {
  var cartItemsContainer = document.getElementById("cart-items");
 
  cartItemsContainer.innerHTML = "";
 ;

  if (cartItems.length === 0) {
    cartItemsContainer.textContent = "Your cart is empty.";
  } else {
     total = 0
    cartItems.forEach(function (product) {
      var productItem = document.createElement("div");
      productItem.className = "product-item";

      var productImage = document.createElement("img");
      productImage.className = "product-image";
      productImage.src = product.image_url;
      productImage.alt = "Product Image";
      productItem.appendChild(productImage);

      var productName = document.createElement("div");
      productName.className = "product-name";
      productName.textContent = product.name;
      productItem.appendChild(productName);

      var productPrice = document.createElement("div");
      productPrice.className = "product-price";
      productPrice.textContent = "Price: " + product.price.toFixed(2);
      productItem.appendChild(productPrice);


  
      var removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        removeCartItem(product);
      });
      productItem.appendChild(removeButton);

      cartItemsContainer.appendChild(productItem);      
      total += product.price;
      
    });
    

    cartTotalElement.textContent = "Total: $" + total.toFixed(2);
  }
}

// Function to remove a product from the cart
function removeCartItem(product) {
  var index = cartItems.findIndex(function (item) {
    
    return item.id === product.id;
  });

   if (index !== -1) {
    cartItems.splice(index, 1);
    localStorage.setItem("cartlist", JSON.stringify(cartItems));
    renderCartItems();
  }
}

// Function to handle the checkout process
// function checkout() {
//   // Perform any necessary actions for the checkout process
//   // ...

//   // Clear the cart after checkout
//   cartItems = [];
//   localStorage.setItem("cartlist", JSON.stringify(cartItems));
//   renderCartItems();

//   alert("Checkout complete. Thank you for your purchase!");
// }

// Render the initial cart items on page load
renderCartItems();

// Add event listener to the checkout button
var next = document.getElementById("next-button");
next.addEventListener("click", Proceed);

function Proceed(){
  localStorage.setItem("amount",JSON.stringify(total));
    location.href="Delivery.html";
}