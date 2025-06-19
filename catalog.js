// Моковые данные товаров
const products = [
    { title: "Galaxy S21", desc: "128GB, Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/776906/1_776906.jpg?timestamp=2025-01-21_20-36-14", category: "Смартфоны", brand: "Samsung", price: 70000, available: true, date: '2023-10-01' },
    { title: "iPhone 14 Pro", desc: "128GB, Space Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/577284/1_577284.jpeg", category: "Смартфоны", brand: "Apple", price: 120000, available: true, date: '2023-09-15' },
    { title: "Pixel 7", desc: "128GB, Obsidian", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/685317/1_685317.jpg", category: "Смартфоны", brand: "Google", price: 80000, available: false, date: '2023-08-10' },
    { title: "OnePlus 11", desc: "256GB, Titan Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/646550/1_646550.jpg", category: "Смартфоны", brand: "OnePlus", price: 90000, available: true, date: '2023-07-20' },
    { title: "Xiaomi 13", desc: "256GB, Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/684834/1_684834.jpg", category: "Смартфоны", brand: "Xiaomi", price: 60000, available: true, date: '2023-06-18' },
    { title: "iPhone 13 Mini", desc: "128GB, Blue", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/304240/1_304240.jpg", category: "Смартфоны", brand: "Apple", price: 85000, available: false, date: '2023-05-10' },
    { title: "Huawei P50", desc: "256GB, Gold", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/736372/2_736372.jpg", category: "Смартфоны", brand: "Huawei", price: 65000, available: true, date: '2023-04-01' },
    { title: "MacBook Pro", desc: "16\", M1 Pro", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/696024/1_696024.jpg", category: "Ноутбуки", brand: "Apple", price: 200000, available: true, date: '2023-10-05' },
    { title: "Dell XPS 13", desc: "13\", 512GB SSD", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/742497/0_742497.jpg", category: "Ноутбуки", brand: "Dell", price: 150000, available: false, date: '2023-09-01' },
    { title: "Lenovo ThinkPad X1", desc: "14\", 1TB SSD", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/770385/1_770385.jpg?timestamp=2024-12-05_09-51-00", category: "Ноутбуки", brand: "Lenovo", price: 130000, available: true, date: '2023-08-15' },
    { title: "Huawei MateBook D15", desc: "15.6\", 512GB SSD", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/568892/1_568892.jpg", category: "Ноутбуки", brand: "Huawei", price: 90000, available: true, date: '2023-07-10' },
    { title: "Apple Watch 8", desc: "45mm, Silver", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/617706/2_617706.jpg", category: "Смарт-часы", brand: "Apple", price: 60000, available: true, date: '2023-06-01' },
    { title: "Galaxy Watch 5", desc: "44mm, Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/594162/2_594162.jpg", category: "Смарт-часы", brand: "Samsung", price: 40000, available: false, date: '2023-05-01' },
    { title: "Huawei Watch GT 3", desc: "46mm, Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/562196/2_562196.jpg", category: "Смарт-часы", brand: "Huawei", price: 35000, available: true, date: '2023-04-01' },
    { title: "Sony WH-1000XM4", desc: "Black", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/225137/2_225137.jpg", category: "Наушники", brand: "Sony", price: 30000, available: true, date: '2023-03-01' },
    { title: "AirPods Pro", desc: "White", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/688575/3_688575.jpg", category: "Наушники", brand: "Apple", price: 25000, available: true, date: '2023-02-01' },
    { title: "JBL Tune 510BT", desc: "Blue", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/260558/2_260558.jpeg", category: "Наушники", brand: "JBL", price: 8000, available: false, date: '2023-01-01' },
    { title: "iPad Pro 12.9", desc: "256GB, Silver", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/749917/2_749917.jpg?timestamp=2024-07-23_11-30-06", category: "Планшеты", brand: "Apple", price: 140000, available: true, date: '2022-12-01' },
    { title: "Samsung Galaxy Tab S8", desc: "128GB, Graphite", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/785587/2_785587.jpg", category: "Планшеты", brand: "Samsung", price: 90000, available: true, date: '2022-11-01' },
    { title: "Huawei MatePad 11", desc: "128GB, Grey", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/746703/2_746703.jpg?timestamp=2024-07-04_14-55-39", category: "Планшеты", brand: "Huawei", price: 60000, available: false, date: '2022-10-01' },
    { title: "Apple MagSafe Charger", desc: "Wireless", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/46287/1_46287.jpg", category: "Аксессуары", brand: "Apple", price: 7000, available: true, date: '2022-09-01' },
    { title: "Samsung Wireless Charger", desc: "White", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/780790/1_780790.jpg", category: "Аксессуары", brand: "Samsung", price: 6000, available: true, date: '2022-08-01' },
    { title: "JBL Flip 6", desc: "Bluetooth Speaker", img: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/533303/2_533303.jpg", category: "Аксессуары", brand: "JBL", price: 11000, available: true, date: '2022-07-01' },
];

const PRODUCTS_PER_PAGE = 8;
let filtered = products;
let currentPage = 1;
let checkedCategories = [];
let checkedBrands = [];
let onlyAvailable = false;
let sortBy = 'default';
let favorites = new Set();

function getCategories() {
    const cats = new Set(products.map(p => p.category));
    return [...cats];
}

function getBrands() {
    const brands = new Set(products.map(p => p.brand));
    return [...brands];
}

function renderCategoryCheckboxes() {
    const cats = getCategories();
    const container = document.getElementById('categoryCheckboxes');
    container.innerHTML = '';
    cats.forEach(cat => {
        const id = 'cat_' + cat.replace(/\s/g, '_');
        container.innerHTML += `
            <label class="checkbox-label">
                <input type="checkbox" name="category" value="${cat}" id="${id}">
                <span>${cat}</span>
            </label>
        `;
    });
}

function renderBrandCheckboxes() {
    const brands = getBrands();
    const container = document.getElementById('brandCheckboxes');
    container.innerHTML = '';
    brands.forEach(brand => {
        const id = 'brand_' + brand.replace(/\s/g, '_');
        container.innerHTML += `
            <label class="checkbox-label">
                <input type="checkbox" name="brand" value="${brand}" id="${id}">
                <span>${brand}</span>
            </label>
        `;
    });
}

function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name='${name}']:checked`)).map(cb => cb.value);
}

function filterAndUpdate() {
    checkedCategories = getCheckedValues('category');
    checkedBrands = getCheckedValues('brand');
    onlyAvailable = document.getElementById('availableCheckbox').checked;
    sortBy = document.getElementById('sortSelect').value;
    const priceMin = +document.getElementById('priceMin').value || 0;
    const priceMax = +document.getElementById('priceMax').value || Infinity;

    let temp = products.filter(p =>
        (checkedCategories.length === 0 || checkedCategories.includes(p.category)) &&
        (checkedBrands.length === 0 || checkedBrands.includes(p.brand)) &&
        (!onlyAvailable || p.available) &&
        p.price >= priceMin &&
        p.price <= priceMax
    );

    // Сортировка
    if (sortBy === 'price-asc') temp.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') temp.sort((a, b) => b.price - a.price);
    else if (sortBy === 'alpha') temp.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === 'newest') temp.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered = temp;
    currentPage = 1;
    update();
}

function getCart() {
    return JSON.parse(localStorage.getItem('cartList') || '[]');
}

function setCart(cart) {
    localStorage.setItem('cartList', JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    if (!cart.find(p => p.title === product.title)) {
        cart.push(product);
        setCart(cart);
    }
}

function removeFromCart(title) {
    let cart = getCart();
    cart = cart.filter(p => p.title !== title);
    setCart(cart);
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favoritesList') || '[]');
}

function setFavorites(favs) {
    localStorage.setItem('favoritesList', JSON.stringify(favs));
}

function addToFavorites(product) {
    const favs = getFavorites();
    if (!favs.find(p => p.title === product.title)) {
        favs.push(product);
        setFavorites(favs);
    }
}

function removeFromFavorites(title) {
    let favs = getFavorites();
    favs = favs.filter(p => p.title !== title);
    setFavorites(favs);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    filtered.slice(start, end).forEach(prod => {
        const isFav = getFavorites().some(p => p.title === prod.title);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.title}">
            <div class="product-title">${prod.title}</div>
            <div class="product-desc">${prod.desc}</div>
            <div class="product-price">${prod.price.toLocaleString()} ₽</div>
            ${prod.available ? '<div class="in-stock">В наличии</div>' : '<div class="out-of-stock">Нет в наличии</div>'}
            <div class="card-actions">
                <button class="btn-fav${isFav ? ' active' : ''}" title="В избранное" data-title="${prod.title}">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="btn-cart" title="В корзину">
                    Добавить в корзину
                </button>
            </div>
        `;
        // Переход на карточку товара по клику на карточку (кроме кнопок)
        card.onclick = function(e) {
            if (e.target.closest('.btn-fav') || e.target.closest('.btn-cart')) return;
            window.location.href = `product.html?title=${encodeURIComponent(prod.title)}`;
        };
        // Избранное
        card.querySelector('.btn-fav').onclick = function(e) {
            e.stopPropagation();
            const title = prod.title;
            if (getFavorites().some(p => p.title === title)) {
                removeFromFavorites(title);
                this.classList.remove('active');
            } else {
                addToFavorites(prod);
                this.classList.add('active');
            }
        };
        // Корзина
        card.querySelector('.btn-cart').onclick = function(e) {
            e.stopPropagation();
            addToCart(prod);
            this.textContent = 'В корзине';
            this.disabled = true;
        };
        // Если уже в корзине — дизейблим кнопку
        if (getCart().some(p => p.title === prod.title)) {
            card.querySelector('.btn-cart').textContent = 'В корзине';
            card.querySelector('.btn-cart').disabled = true;
        }
        grid.appendChild(card);
    });
}

function renderPagination() {
    const pag = document.getElementById('pagination');
    pag.innerHTML = '';
    const pages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
    if (pages <= 1) return;
    const prev = document.createElement('button');
    prev.innerHTML = '&lt;';
    prev.disabled = currentPage === 1;
    prev.onclick = () => { currentPage--; update(); };
    pag.appendChild(prev);

    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => { currentPage = i; update(); };
        pag.appendChild(btn);
    }

    const next = document.createElement('button');
    next.innerHTML = '&gt;';
    next.disabled = currentPage === pages;
    next.onclick = () => { currentPage++; update(); };
    pag.appendChild(next);
}

function update() {
    renderCategoryCheckboxes();
    renderBrandCheckboxes();
    renderProducts();
    renderPagination();
    // Восстановить состояние чекбоксов после рендера
    checkedCategories.forEach(cat => {
        const el = document.querySelector(`input[name='category'][value='${cat}']`);
        if (el) el.checked = true;
    });
    checkedBrands.forEach(brand => {
        const el = document.querySelector(`input[name='brand'][value='${brand}']`);
        if (el) el.checked = true;
    });
    document.getElementById('availableCheckbox').checked = onlyAvailable;
    document.getElementById('sortSelect').value = sortBy;
    // Счётчик найденных товаров
    document.getElementById('foundCount').textContent = `Найдено: ${filtered.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryCheckboxes();
    renderBrandCheckboxes();
    document.getElementById('filterForm').addEventListener('submit', e => {
        e.preventDefault();
        filterAndUpdate();
    });
    document.getElementById('resetFilters').addEventListener('click', () => {
        checkedCategories = [];
        checkedBrands = [];
        onlyAvailable = false;
        sortBy = 'default';
        document.getElementById('filterForm').reset();
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        filterAndUpdate();
    });
    document.getElementById('categoryCheckboxes').addEventListener('change', filterAndUpdate);
    document.getElementById('brandCheckboxes').addEventListener('change', filterAndUpdate);
    document.getElementById('availableCheckbox').addEventListener('change', filterAndUpdate);
    document.getElementById('sortSelect').addEventListener('change', filterAndUpdate);
    update();
}); 