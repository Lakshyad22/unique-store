const addToCartButtons = document.querySelectorAll('.product button');
const cartCountElement = document.getElementById('cart-count');

let cart = [];
localStorage.removeItem('cart');
function updateCartCount() {
  cartCountElement.textContent = cart.length;
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const productId = event.target.dataset.id;
  const productName = event.target.previousElementSibling.textContent;
  const productPrice = event.target.previousElementSibling.previousElementSibling.textContent;
  const productImage = event.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
  const product = { id: productId, name: productName, price: productPrice, image: productImage };
  cart.push(product);
  updateCartCount();
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Added product ${productId} to cart!`);
}

const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
  updateCartCount();
}
