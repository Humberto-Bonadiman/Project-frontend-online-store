import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      produtoCarrinho: [],
    };
  }

  componentDidMount() {
    this.saveCart();
  }

  saveCart = () => {
    const { produtoCarrinho } = this.state;
    const prodSaved = produtoCarrinho;
    prodSaved.push(JSON.parse(localStorage.getItem('teste')));
    this.setState({
      produtoCarrinho: prodSaved,
    });
  }

  render() {
    const { produtoCarrinho } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {produtoCarrinho.length === 0 ? <p>Seu carrinho está vazio</p>
          : produtoCarrinho.map((item) => (
            <li
              data-testid="shopping-cart-product-name"
              key={ item.id }
            >
              {item.title}
              <span
                data-testid="shopping-cart-product-quantity"
              >
                1
              </span>
            </li>))}
      </div>
      // recuperar o localStorage no componentDidMount
    );
  }
}

export default Cart;
