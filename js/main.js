const modal = document.querySelector('.modal');
const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.btn-close');
const btnCancel = modal.querySelector('.button--secondary');
const mainIndex = document.getElementById('index');
const mainRestaraunt = document.getElementById('restaurant');
const cardsBlockIndex = mainIndex.querySelector('.cards');
const cardsIndex = cardsBlockIndex.querySelectorAll('.card');
const logos = document.querySelectorAll('.logo-link');
const cardsBlockRestaraunt = mainRestaraunt.querySelector('.cards');
const cardsRestaraunt = cardsBlockRestaraunt.querySelectorAll('.card');
const rowsBlock = modal.querySelector('.modal-main');
const total = modal.querySelector('.modal-total');
let rows = modal.querySelectorAll('.cart-row');
let totalPrice = 0;
let namesArr = [];

const templateRow = rows[0];

const modalOpenClose = () => {
    modal.classList.toggle('modal-close'); 
}

const toggelSection = () => {
    mainIndex.classList.toggle('not--active');
    mainRestaraunt.classList.toggle('not--active');
};

function getRowByName (name) {
    let searchRow = null;

    for (let row of rows) {
        const item = row.querySelector('.product-name');
        if (item.textContent === name) {
            searchRow = row;
            break;
        }
    }

    return searchRow;
};

btnCart.addEventListener('click', modalOpenClose);
btnClose.addEventListener('click', modalOpenClose);
btnCancel.addEventListener('click', modalOpenClose);

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modalOpenClose();
    }
});

cardsRestaraunt.forEach((card, i) => {
    const nameProductBlock = card.querySelector('.cart-title');
    const priceProductBlock = card.querySelector('.price');
    const addToCartButtonProductBlock = card.querySelector('.button--primary');

    const nameProduct = nameProductBlock.textContent;
    const priceProduct = +priceProductBlock.textContent;

    let countItem = null;
    let priceItem = null;
    let productItem = null;
    let count = 0;

    addToCartButtonProductBlock.addEventListener('click', () => {

        if (namesArr.includes(nameProduct)) {
            const existRow = getRowByName(nameProduct);
            countItem = existRow.querySelector('.count');
            priceItem = existRow.querySelector('.price');

            count = +countItem.textContent;
            count++;
            countItem.textContent = count;
            priceItem.textContent = priceProduct * count;
        }
        else {
            namesArr.push(nameProduct);
            const newRow = templateRow.cloneNode(true);
            newRow.classList.remove('not--active');

            productItem = newRow.querySelector('.product-name');
            priceItem = newRow.querySelector('.price');
            countItem = newRow.querySelector('.count');
            const btnMunis = newRow.querySelector('.minus');
            const btnPlus = newRow.querySelector('.plus');

            count = +countItem.textContent;
            productItem.textContent = nameProduct;
            priceItem.textContent = priceProduct;

            btnMunis.addEventListener('click', (e) => {
                if (count > 0) {
                    count--;
                    countItem.textContent = count;
                    priceItem.textContent = priceProduct * count;
                
                    totalPrice -= priceProduct;
                    total.textContent = totalPrice;
                }
            });
        
            btnPlus.addEventListener('click', (e) => {
                count++;
                countItem.textContent = count;
                priceItem.textContent = priceProduct * count;

                totalPrice += priceProduct;
                total.textContent = totalPrice;
            });

            rowsBlock.append(newRow);

            rows = modal.querySelectorAll('.cart-row');
        }

        totalPrice += priceProduct;
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