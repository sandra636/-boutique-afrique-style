const products = [
    { id: 1, name: "Masque Traditionnel", price: 45 },
    { id: 2, name: "Tissu Wax", price: 35 },
    { id: 3, name: "Bracelet Beadwork", price: 25 },
    { id: 4, name: "Sculpture en Bois", price: 60 },
    { id: 5, name: "Sac Artisanal", price: 50 },
    { id: 6, name: "Tableau Peint", price: 75 }
];

let cartCount = 0;

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/250x200?text=${encodeURIComponent(product.name)}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}€</p>
            <button onclick="addToCart()">Ajouter au panier</button>
        `;
        grid.appendChild(card);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

document.addEventListener('DOMContentLoaded', renderProducts);
