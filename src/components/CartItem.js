import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  decrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity ? prevState.quantity - 1 : 0,
    }));
  }

  render() {
    const { quantity } = this.state;
    const { item: { title, price } } = this.props;
    return (
      <ul>
        <li
          data-testid="shopping-cart-product-name"
        >
          { title }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increment }
          >
            +
          </button>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade:
            {quantity}
          </span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decrement }
          >
            -
          </button>
          <span>
            {price}
          </span>

        </li>
      </ul>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItem;
