const cartIcon = document.querySelector('.cartIcon');
const cart = document.querySelector('.cart');
const cartCross = document.querySelector('.cart__topSide-cross');
const sneakers = document.querySelector('.sneakers');
const sneakersBoxes = document.querySelector('.main__sneakersBoxes');

cartIcon.addEventListener('click', function (event) {
    event.preventDefault();
    cart.classList.add('cart__active');
    sneakers.classList.add('sneakers_active');
});

cartCross.addEventListener('click', function (event) {
    event.preventDefault();
    cart.classList.remove('cart__active');
    sneakers.classList.remove('sneakers_active');
});

let products = [
    {
        id: 1,
        name: 'sneakers 2',
        image: 'https://cdn-images.farfetch-contents.com/20/96/21/42/20962142_51402330_480.jpg',
        price: 5000,
        desc: 'Nike Blazer Mid Suede'
    },
    {
        id: 2,
        name: 'sneakers 3',
        image: 'https://cdn-images.farfetch-contents.com/21/84/30/29/21843029_51671941_480.jpg',
        price: 6000,
        desc: 'Nike Blazer Mid Suede'
    },
    {
        id:3,
        name: 'sneakers 4',
        image: 'https://cdn-images.farfetch-contents.com/21/76/49/44/21764944_51625276_480.jpg',
        price: 7000,
        desc: 'Nike Blazer Mid Suede'
    },
    {
        id: 4,
        name: 'sneakers 5',
        image: 'https://cdn-images.farfetch-contents.com/21/39/20/89/21392089_51650749_480.jpg',
        price: 8000,
        desc: 'Nike Blazer Mid Suede'
    },
    {
        id: 5,
        name: 'sneakers 6',
        image: 'https://cdn-images.farfetch-contents.com/20/53/39/90/20533990_50541743_480.jpg',
        price: 9000,
        desc: 'Nike Blazer Mid Suede'
    },
];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('main__sneakersBox');
        newDiv.innerHTML= `
                                <img class="main__sneakersBox-like" src="img/likee.png">
                                <img class="main__sneakersBox-imgSneakers" src="${value.image}">
                                <p class="main__sneakersBox-desc">${value.name}<br>${value.desc}</p>
                                <div class="main__sneakersBox-func">
                                    <div class="main__sneakersBox-price">
                                        <p class="main__sneakersBox-tsena">Цена:</p>
                                        <p class="main__sneakersBox-number">${value.price}</p>
                                    </div>
<!--                                    <img class="main__sneakersBox-add" src="img/added.svg">-->
                                        <input class="main__sneakersBox-add" type="checkbox">
                                </div>
            `;

        sneakersBoxes.appendChild(newDiv);

    });
}

initApp();


