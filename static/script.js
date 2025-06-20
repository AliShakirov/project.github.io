// Основной JS для King Mobile

document.addEventListener('DOMContentLoaded', function() {
    // Приветствие в консоль
    console.log('King Mobile: сайт загружен!');

    // Пример заготовки для баннера (автосмена текста или картинок)
    // const heroTexts = [
    //     'iPhone 16 Pro — флагман без компромиссов',
    //     'Скидка 10% на все товары',
    //     'Доставка по России за 2-3 дня'
    // ];
    // let current = 0;
    // setInterval(() => {
    //     // Здесь можно реализовать смену текста или картинок
    // }, 5000);

    // Здесь можно добавить другие интерактивные функции
});

// Моковые данные товаров
const products = [
    { title: "Galaxy S21", desc: "128GB, Black", img: "https://images.unsplash.com/photo-1611078489935-0cb964de46b1?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Samsung", price: 70000 },
    { title: "iPhone 14 Pro", desc: "128GB, Space Black", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 120000 },
    { title: "Pixel 7", desc: "128GB, Obsidian", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Google", price: 80000 },
    { title: "OnePlus 11", desc: "256GB, Titan Black", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "OnePlus", price: 90000 },
    { title: "Xiaomi 13", desc: "256GB, Black", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Xiaomi", price: 60000 },
    { title: "iPhone Xr", desc: "256GB, Black", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 50000 },
    { title: "iPhone 16", desc: "512GB, Black", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 150000 },
    { title: "iPhone 11 Pro", desc: "256GB, White", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 90000 },
    { title: "iPhone 13 Pro", desc: "512GB, Blue", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 140000 },
    { title: "iPhone 15 Pro Max", desc: "512GB, White", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", category: "Смартфоны", brand: "Apple", price: 180000 },
];

const PRODUCTS_PER_PAGE = 6;
let filtered = products;
let currentPage = 1;

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    filtered.slice(start, end).forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.title}">
            <div class="product-title">${prod.title}</div>
            <div class="product-desc">${prod.desc}</div>
        `;
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
    renderProducts();
    renderPagination();
}

document.addEventListener('DOMContentLoaded', () => {
    // Фильтрация
    document.getElementById('filterForm').addEventListener('submit', e => {
        e.preventDefault();
        const cat = e.target.category.value.trim().toLowerCase();
        const brand = e.target.brand.value.trim().toLowerCase();
        const price = +e.target.price.value;
        filtered = products.filter(p =>
            (cat === '' || p.category.toLowerCase().includes(cat)) &&
            (brand === '' || p.brand.toLowerCase().includes(brand)) &&
            p.price <= price
        );
        currentPage = 1;
        update();
    });
    // Сброс фильтров
    document.getElementById('resetFilters').addEventListener('click', () => {
        document.getElementById('filterForm').reset();
        document.getElementById('priceValue').textContent = 100000;
        filtered = products;
        currentPage = 1;
        update();
    });
    // Слайдер цены
    document.getElementById('priceRange').addEventListener('input', e => {
        document.getElementById('priceValue').textContent = e.target.value;
    });
    // Инициализация
    update();
});