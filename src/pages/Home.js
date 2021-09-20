import React from 'react';
import { Link } from 'react-router-dom';
import ItensCards from '../components/ItensCards';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.returnCategories = this.returnCategories.bind(this);

    this.state = {
      search: '',
      searchResults: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.returnCategories();
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
      searchResults: resultsCategoryAndQuery,
    });
  }

  async returnCategories() {
    const apiResponse = await getCategories();
    this.setState({ categories: apiResponse });
  }

  render() {
    const { search, searchResults, categories } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
        <ul>
          { categories
            .map(({ name, id }) => <li data-testid="category" key={ id }>{ name }</li>) }
        </ul>
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
          { searchResults.map((product) => (<ItensCards
            key={ product.id }
            product={ product }
          />)) }
        </div>
      </div>
    );
  }
}

export default Home;
