const cartCounter = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");


let cartItems = 0;


addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartItems++;
    cartCounter.textContent = cartItems;
  });
});