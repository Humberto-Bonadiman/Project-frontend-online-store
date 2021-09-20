import React from 'react';
import PropTypes from 'prop-types';

class ItensCards extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `Foto do ${title}` } />
        <p>{ price }</p>
      </section>
    );
  }
}

ItensCards.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItensCards;
