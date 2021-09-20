import React from 'react';
import ItensCards from '../components/ItensCards';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      search: '',
      apiResults: [],
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async handleClick() {
    const { search } = this.state;
    const categoryAndQuery = await getProductsFromCategoryAndQuery('', search);
    const resultsCategoryAndQuery = categoryAndQuery.results;
    this.setState({
      apiResults: resultsCategoryAndQuery,
    });
  }

  render() {
    const { search, apiResults } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <label htmlFor="search">
            Buscar:
            <input
              type="text"
              data-testid="query-input"
              name="search"
              value={ search }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="query-button"
          >
            Procurar
          </button>
        </form>
        <div>
          { apiResults.map((product) => (<ItensCards
            key={ product.id }
            product={ product }
          />)) }
        </div>
      </div>
    );
  }
}

export default Home;
