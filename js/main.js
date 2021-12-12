const modal = document.querySelector('.modal');
const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.btn-close');
const total = modal.querySelector('.modal-total');
const rows = modal.querySelectorAll('.cart-row');
let totalPrice = 0;

const modalOpenClose = () => {
    modal.classList.toggle('modal-close'); 
}

btnCart.addEventListener('click', modalOpenClose);
btnClose.addEventListener('click', modalOpenClose);

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modalOpenClose();
    }
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