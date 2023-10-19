let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id:1,
        name: 'Product Name',
        image: 'basreng.jpg',
        price: 350
    },
    {
        id:1,
        name: 'Product Name 2',
        image: 'basreng.jpg',
        price: 450
    },    
    {
        id:1,
        name: 'Product Name 3',
        image: 'keripikakca.jpg',
        price: 550
    },    
    {
        id:1,
        name: 'Product Name 4',
        image: 'keripiktempe.jpg',
        price: 650
    },
    {
        id:1,
        name: 'Product Name 5',
        image: 'keripikkaca.jpg',
        price: 750
    },
    {
        id:1,
        name: 'Product Name 6',
        image: 'keripiktempe.jpg',
        price: 850
    }
];
let listCarts = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `<img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>` ;
        list.appendChild(newDiv);
    }) 
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCard();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `<div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>`
        }
    })
}