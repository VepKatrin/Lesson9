const modal = document.querySelector('.modal');
const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.btn-close');

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