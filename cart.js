// cart.js

// Store the cart count in localStorage
function updateCartCount(productCount) {
    localStorage.setItem('cartCount', productCount);
}

// Retrieve and display the cart count in the notification badge
function displayCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    const notificationElement = document.getElementById('cart-notification');
    if (notificationElement) {
        notificationElement.textContent = cartCount;
    }
}

// Automatically display the cart count when the page loads
document.addEventListener('DOMContentLoaded', displayCartCount);
