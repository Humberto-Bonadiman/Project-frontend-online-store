import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      notHaveItems: true,
    };
  }

  componentDidMount() {
    this.saveCart();
  }

  saveCart = () => {
    const { cartItems } = this.state;
    const prodSaved = cartItems;
    prodSaved.push(JSON.parse(localStorage.getItem('cartList')));
    this.setState({
      cartItems: prodSaved,
      notHaveItems: !localStorage.getItem('cartHaveItem'),
    });
    console.log(cartItems);
  }

  render() {
    const { cartItems, notHaveItems } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {notHaveItems ? <p>Seu carrinho está vazio</p>
          : (
            <ul>
              {cartItems[0].map((item) => (
                <li
                  data-testid="shopping-cart-product-name"
                  key={ item }
                >
                  { item.title }
                  <span
                    data-testid="shopping-cart-product-quantity"
                  >
                    Quantidade: 1
                  </span>
                </li>
              ))}
            </ul>)}
      </div>
      // recuperar o localStorage no componentDidMount
    );
  }
}

export default Cart;
