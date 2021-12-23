import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  addToCart = (title) => {
    const product = { title };
    let cartList = [];
    if (localStorage.getItem('cartList')) {
      cartList = JSON.parse(localStorage.getItem('cartList'));
    }
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }

  render() {
    const { match: { params: { id, name } } } = this.props;
    return (
      <>
        <h2 data-testid="product-detail-name">{ name }</h2>
        <h4>{id}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addToCart(name) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
