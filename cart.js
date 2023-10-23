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
                name: 'Product Name 1',
                image: 'makaroni.jpg',
                price: 350
            },
            {
                id: 2,
                name: 'Product Name 2',
                image: 'basreng.jpg',
                price: 450
            },
            {
                id: 3,
                name: 'Product Name 3',
                image: 'keripikakca.jpg',
                price: 550
            },
            {
                id: 4,
                name: 'Product Name 4',
                image: 'keripiktempe.jpg',
                price: 650
            },
            {
                id: 5,
                name: 'Product Name 5',
                image: 'keripikkaca.jpg',
                price: 750
            },
            {
                id: 6,
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
                newDiv.innerHTML = `<img src="assets/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCart(${key})">Add to Cart</button>`;
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
            listCards[key].quantity--;
            if (listCards[key].quantity === 0) {
                delete listCards[key];
            }
            reloadCart();
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
                        <div>${item.name}</div>
                        <div class="count">${item.quantity}</div>
                        <button onclick="addToCart(${key})">Tambah</button>
                        <button onclick="removeItem(${key})">Hapus</button>`;
                    listCard.appendChild(newDiv);
                }
            }
            total.textContent = totalPrice.toLocaleString();
            quantity.textContent = count;
        }
