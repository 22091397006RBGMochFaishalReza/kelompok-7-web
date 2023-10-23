let openShopping = document.querySelector('.shop');
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let listCard = document.querySelector('.listCard');
        let body = document.querySelector('body');
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
                name: 'Nama Produk 1',
                image: 'makaroni.jpg',
                price: 30000 
            },
            {
                id: 2,
                name: 'Nama Produk 2',
                image: 'basreng.jpg',
                price: 25000
            },
            {
                id: 3,
                name: 'Nama Produk 3',
                image: 'keripik.jpg',
                price: 20000
            },
            {
                id: 4,
                name: 'Nama Produk 4',
                image: 'mia ayam.jpg',
                price: 10000
            },
            {
                id: 5,
                name: 'Nama Produk 5',
                image: 'bakso.jpg',
                price: 10000 
            },
            {
                id: 6,
                name: 'Nama Produk 6',
                image: 'nasi goreng.jpg',
                price: 12000 
            }
        ];

        let listCards = {};

        function initApp() {
            products.forEach((value, key) => {
                let newDiv = document.createElement('div');
                newDiv.classList.add('item');
                newDiv.innerHTML = `<img src="assets/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCart(${key})">Tambah ke Keranjang</button>`;
                list.appendChild(newDiv);
            });
        }

        initApp();

        function addToCart(key) {
            if (listCards[key] == null) {
                listCards[key] = { ...products[key], quantity: 1 };
            } else {
                listCards[key].quantity++;
            }
            reloadCart();
        }

        function removeItem(key) {
            if (listCards[key] && listCards[key].quantity > 0) {
                listCards[key].quantity--;
                if (listCards[key].quantity === 0) {
                    delete listCards[key];
                }
                reloadCart();
            }
        }

        function reloadCart() {
            listCard.innerHTML = '';
            let count = 0;
            let totalPrice = 0;
            for (let key in listCards) {
                if (listCards[key] != null) {
                    const item = listCards[key];
                    totalPrice += item.price * item.quantity;
                    count += item.quantity;
                    let newDiv = document.createElement('li');
                    newDiv.innerHTML = `
                        <div><img src="assets/${item.image}"/></div>
                        <div>
                            <button class="remove-button" onclick="removeItem(${key})">-</button>
                            ${item.name}
                            <button class="add-button" onclick="addToCart(${key})">+</button>
                        </div>
                        <div class="count">${item.quantity}</div>
                        <div class="price">${item.price.toLocaleString()}</div>`; 
                    listCard.appendChild(newDiv);
                }
            }
            // Menampilkan total harga dengan tanda koma
            total.textContent = totalPrice.toLocaleString();
            quantity.textContent = count;
        }
