const feltsLink = document.querySelector('#felts_link');
const feltsImg = document.querySelector('#felts_img');

feltsLink.style.color = 'red';

feltsLink.addEventListener('click', showfelts);
feltsImg.addEventListener('click', showfelts);


const feltsProducts = [
    {
        id: '1',
        image: 'img/felts-eps/150-green.png',
        name: '150 - green'
    },

    {
        id: '2',
        image: 'img/felts-eps/white-25-30-2.png',
        name: 'white - 25 - 30 - 2'
    }
]

function showfelts(feltsProducts) {
    const productsContainer = document.querySelector('.catalog-content');
    productsContainer.innerHTML = '';
    for (const product of feltsProducts) {
        productsContainer.innerHTML = `
        
            <div class="felts_product">
                <img class="felts_product__image" src="${feltsProducts.image}" alt="${product.name}">
                
            </div>
        `;
    }


}
