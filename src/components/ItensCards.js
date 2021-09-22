import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItensCards extends React.Component {
  render() {
    const { addToCart, product: { title, thumbnail, id, price } } = this.props;
    return (
      <section data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `Foto do ${title}` } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}&${title}` }
        >
          Detalhes do produto
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(title) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ItensCards.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItensCards;
