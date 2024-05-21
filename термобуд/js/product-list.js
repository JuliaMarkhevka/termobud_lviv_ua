const products = [
    {
        id: '1',
        name: '150 фельцований зелений',
        image: 'img/150-green.png'
    },
    {
        id: '2',
        name: 'Білий 25 EPS 30 ТЕРМО 2',
        image: 'img/white-25-30-2.png'
    },
    {
        id: '3',
        name: 'Білий 25 EPS 30 ТЕРМО 3',
        image: 'img/white=25-30-3.png'
    },
    {
        id: '4',
        name: 'Білий 25 EPS 40 ТЕРМО 1',
        image: 'img/white-25-40-1.png'
    },
];

renderProducts(products);


function renderProducts(products) {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += `
            <div class="products-card">
                <img class="products__image" src="${product.image}" alt="${product.name}">
                
                <h3 class="products__title">${product.name}</h3>
            </div>`;
    }
}