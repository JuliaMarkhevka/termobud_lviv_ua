const epsLink = document.querySelector('#eps');



epsLink.addEventListener('click', showEps);

const products = [
    {
        id: '1',
        image: 'img/green150.png',
        name: '150 - green',
        link: 'Фельцований'

    },

    {
        id: '2',
        image: 'img/felts-eps/white-25-30-2.png',
        name: 'white - 25 - 30 - 2',
        link: 'Графітовий'
    }
]



function showEps(products) {
    const productsContainer = document.querySelector('.catalog-content');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += `
        
            <div class="felts_product">
                <a href="" id="felts_img"><img class="felts_product__image" src="${product.image}" alt="${product.name}"></a>
                <a href="#" class="content-block__link" type="obey">${product.link}</a>
            </div>
        `;
    }


}

// showEps(products);


