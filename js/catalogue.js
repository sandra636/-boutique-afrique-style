const products = [
    { id: 1, name: "Masque Traditionnel", price: 4500 },
    { id: 2, name: "Tissu Wax", price: 3500 },
    { id: 3, name: "Bracelet Beadwork", price: 2500 },
    { id: 4, name: "Sculpture en Bois", price: 6000 },
    { id: 5, name: "Sac Artisanal", price: 5000 },
    { id: 6, name: "Tableau Peint", price: 7500 }
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
            <p>${product.price}FCFA</p>
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
