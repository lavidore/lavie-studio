// JavaScript code for cart functionality
const cartItems = [];
let total = 0;

function addToCart(itemName, price) {
  // Check if the item is already in the cart
  const existingItem = cartItems.find(item => item.itemName === itemName);

  if (existingItem) {
    // If the item exists, increment its quantity
    existingItem.quantity += 1;
  } else {
    // If the item is not in the cart, add it with quantity 1
    const cartItem = { itemName, price, quantity: 1 };
    cartItems.push(cartItem);
  }

  total += price;

  updateCartDisplay();
  updateLocalStorage();
}

function updateCartDisplay() {
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous items
    cartItemsList.innerHTML = '';

    // Populate cart items
    cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      <div class="cart-button">
          <span>${item.itemName} (${item.quantity}) - ${item.price * item.quantity}đ</span>
          <span class="decrease-button" onclick="decreaseCartItem(${index})"><i class='bx bx-minus'></i></span>
          <span class="remove-button" onclick="removeCartItem(${index})"><i class='bx bx-x-circle'></i></span>
      </div>
      `;
      cartItemsList.appendChild(listItem);
    });

    // Update total price
    cartTotal.textContent = `${total}đ`;

    // Show the cart dropdown
    cartDropdown.style.display = 'block';
    updateLocalStorage();
  }
  function hideCartDropdown() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = 'none';
  }
  function decreaseCartItem(index) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity -= 1;
      total -= cartItems[index].price;
    } else {
      // If quantity is 1, remove the item
      total -= cartItems[index].price;
      cartItems.splice(index, 1);
    }
    updateCartDisplay();
  }
  function removeCartItem(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    total -= removedItem.price * removedItem.quantity;
    updateCartDisplay();
  }

  function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('total', total);
  }