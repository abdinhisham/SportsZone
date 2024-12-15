// Sample product data for demonstration purposes
const products = [
  { id: 1, name: "Sports Equipment", price: 199.99 },
  { id: 2, name: "Sports Clothing", price: 49.99 },
  { id: 3, name: "Accessories", price: 19.99 }
];

// Cart data structure
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartUI();
  }
}

// Function to update the cart UI
function updateCartUI() {
  // Update cart count
  const cartCount = cart.length;
  document.getElementById('cart-count').textContent = cartCount;

  // Update cart items
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
      <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Update total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

// Example of adding products to the cart
addToCart(1);  // Add Sports Equipment
addToCart(2);  // Add Sports Clothing

// Handle checkout button click
document.getElementById('checkout-btn').addEventListener('click', function() {
  alert('Proceeding to Checkout');
});

// Call updateCartUI on initial page load to update the cart
updateCartUI();