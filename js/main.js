const modal = document.querySelector('.modal');
const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.btn-close');
const mainIndex = document.getElementById('index');
const mainRestaraunt = document.getElementById('restaurant');
const cardsBlockIndex = mainIndex.querySelector('.cards');
const cardsIndex = cardsBlockIndex.querySelectorAll('.card');
const logos = document.querySelectorAll('.logo-link');
const cardsBlockRestaraunt = mainRestaraunt.querySelector('.cards');
const cardsRestaraunt = cardsBlockRestaraunt.querySelectorAll('.card');
const total = modal.querySelector('.modal-total');
const rows = modal.querySelectorAll('.cart-row');
let totalPrice = 0;

const modalOpenClose = () => {
    modal.classList.toggle('modal-close'); 
}

const toggelSection = () => {
    mainIndex.classList.toggle('not--active');
    mainRestaraunt.classList.toggle('not--active');
};

btnCart.addEventListener('click', modalOpenClose);
btnClose.addEventListener('click', modalOpenClose);

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modalOpenClose();
    }
});

cardsRestaraunt.forEach((card, i) => {
    const nameProductBlock = card.querySelector('.cart-title');
    const priceProductBlock = card.querySelector('.price');

    const nameProduct = nameProductBlock.textContent;
    const priceProduct = +priceProductBlock.textContent;

    const productItem = rows[i].querySelector('.product-name');
    const priceItem = rows[i].querySelector('.price');

    productItem.textContent = nameProduct;
    priceItem.textContent = priceProduct;
});

rows.forEach(row => {
    const priceItem = row.querySelector('.price');
    const countItem = row.querySelector('.count');
    const btnMunis = row.querySelector('.minus');
    const btnPlus = row.querySelector('.plus');
    let count = +countItem.textContent;
    let price = +priceItem.textContent;

    totalPrice += price * count;

    btnMunis.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countItem.textContent = count;
            priceItem.textContent = price * count;
            totalPrice -= price;
            total.textContent = totalPrice;
        }
    });

    btnPlus.addEventListener('click', () => {
        count++;
        countItem.textContent = count;
        priceItem.textContent = price * count;
        totalPrice += price;
        total.textContent = totalPrice;
    });
});

total.textContent = totalPrice;

cardsIndex.forEach(card => {
    card.addEventListener('click', () => {
        toggelSection();
    });
});

logos.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();

        if (mainIndex.classList.contains('not--active')) {
            toggelSection();
        }
    });
});