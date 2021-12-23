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
      categoryFilter: '',
      cartList: [],
    };
  }

  componentDidMount() {
    this.returnCategories();
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { name, value } = event.target;
    await this.setState({
      [name]: value,
    });
    const { search, categoryFilter } = this.state;
    const categoryAndQuery = await getProductsFromCategoryAndQuery(
      categoryFilter, search,
    );
    const resultsCategoryAndQuery = categoryAndQuery.results;
    this.setState({
      searchResults: resultsCategoryAndQuery,
    });
  }

  addToCart = (title, price) => {
    const { cartList } = this.state;
    const product = {
      title,
      price,
    };
    const prevState = cartList;
    prevState.push(product);
    this.setState({
      cartList: prevState,
    });
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }

  async returnCategories() {
    const apiResponse = await getCategories();
    this.setState({ categories: apiResponse });
  }

  render() {
    const { search, searchResults, categories } = this.state;
    return (
      <div>
        <section className="search-header">
          <form className="search-home-form">
            <label htmlFor="search">
              <input
                type="text"
                data-testid="query-input"
                name="search"
                value={ search }
                onChange={ this.handleChange }
                className="search-input"
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="query-button"
              className="search-button"
            >
              Procurar
            </button>
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
            className="cart-button"
          >
/* */
            Carrinho
          </Link>
        </section>
        <section className="content-section">
          <aside className="category-list">
            <ul>
              { categories
                .map(({ name, id }) => (
                  <li
                    key={ id }
                  >
                    <button
                      data-testid="category"
                      type="button"
                      value={ id }
                      name="categoryFilter"
                      onClick={ this.handleClick }
                    >
                      { name }
                    </button>
                  </li>)) }
            </ul>
          </aside>
          <aside className="search-result">
            { searchResults.map((product) => (<ItensCards
              key={ product.id }
              product={ product }
            />)) }
          </aside>
        </section>
            Procurar
          </button>
        </form>
        <div>
          { searchResults.map((product) => (<ItensCards
            key={ product.id }
            product={ product }
            addToCart={ this.addToCart }
          />)) }
        </div>
/* */
      </div>
    );
  }
}

export default Home;
