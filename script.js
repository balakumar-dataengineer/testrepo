function login() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert('Please enter a username.');
        return;
    }
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
}

const cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(div);
    });
    cartTotal.textContent = total;
    document.getElementById('cart-section').style.display = 'block';
}

function makePayment() {
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'block';
}