let openShopping = document.querySelector('.shop'); // Ganti dari '.shopping' ke '.shop'
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body'); // Ganti dari '.body' ke 'body'
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Product Name 1',
        image: 'assets/KERIPIK TEMPE.jpg',
        price: 350
    },
    {
        id: 2, // Ubah id menjadi 2
        name: 'Product Name 2',
        image: 'basreng.jpg',
        price: 450
    },
    {
        id: 3, // Ubah id menjadi 3
        name: 'Product Name 3',
        image: 'keripikakca.jpg',
        price: 550
    },
    {
        id: 4, // Ubah id menjadi 4
        name: 'Product Name 4',
        image: 'keripiktempe.jpg',
        price: 650
    },
    {
        id: 5, // Ubah id menjadi 5
        name: 'Product Name 5',
        image: 'keripikkaca.jpg',
        price: 750
    },
    {
        id: 6, // Ubah id menjadi 6
        name: 'Product Name 6',
        image: 'keripiktempe.jpg',
        price: 850
    }
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `<img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Card</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `<div><img src="assets/${value.image}"/></div>
            <div>${value.name}</div>
            <div class="count">${value.quantity}</div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.textContent = totalPrice.toLocaleString();
    quantity.textContent = count;
}
