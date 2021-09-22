import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { match: { params: { id, name } } } = this.props;
    return (
      <>
        <h2 data-testid="product-detail-name">{ name }</h2>
        <h4>{id}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
        >
          Adicionar ao carrinho
        </button>
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
