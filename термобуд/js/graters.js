const graterLink = document.querySelector('#graters');

graterLink.style.color = 'red';

graterLink.addEventListener('click', showGraters);

const graters = [
        {
                id: '3',
                image: 'img/graters.PNG',
                name: 'graters',
                description: 'Терки використовуються для ремонтних робіт, вирівнювання стін ітд.'
        }
]

function showGraters() {
        const productsContainer = document.querySelector('.catalog-content');

        for (const grater of graters) {
                productsContainer.innerHTML += `
        
            
                <img class="felts_product__image" src="${grater.image}" alt="${grater.name}">
                <p class="graters-descriprion">${grater.description}</p>
            
        `;
        }


}

