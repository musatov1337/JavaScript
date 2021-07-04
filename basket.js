const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                </div>`;
    }
}
const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [{
        name: 'GeForce 780',
        price: 12000
    },
    {
        name: 'Asus ROG',
        price: 17000
    },
    {
        name: 'Intel Pentium',
        price: 7500
    },],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.buttn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();
