import React from 'react';
import CartItem from '../components/CartItem';

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
    let prodSaved = [];
    if (localStorage.getItem('cartList')) {
      prodSaved = JSON.parse(localStorage.getItem('cartList'));
    }
    this.setState({
      cartItems: prodSaved,
      notHaveItems: prodSaved.length === 0,
    });
    // console.log(prodSaved);
  }

  render() {
    const { cartItems, notHaveItems } = this.state;
    console.log(cartItems);
    return (
      <div data-testid="shopping-cart-empty-message">
        {notHaveItems ? <p>Seu carrinho está vazio</p>
          : (
            <ul>
              {cartItems.map((item) => (
                <CartItem item={ item } key={ item.id } />
              ))}
            </ul>)}
      </div>
      // recuperar o localStorage no componentDidMount
    );
  }
}

export default Cart;
