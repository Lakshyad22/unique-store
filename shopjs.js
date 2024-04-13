const cartCountElement = document.getElementById('cart-count');

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length;
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000);
// }

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productId = event.target.dataset.id;
    const productName = event.target.previousElementSibling.textContent;
    const productPrice = event.target.previousElementSibling.previousElementSibling.textContent;
    const productImage = event.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
    const product = { id: productId, name: productName, price: productPrice, image: productImage };
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Added product ${productId} to cart!`);
}

updateCartCount(); 
