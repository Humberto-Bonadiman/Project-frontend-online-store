import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { quantity } = this.state;
    const { item: { title } } = this.props;
    return (
      <ul>
        <li
          data-testid="shopping-cart-product-name"
        >
          { title }
          <span
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade:
            { quantity }
          </span>
        </li>
      </ul>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default CartItem;
