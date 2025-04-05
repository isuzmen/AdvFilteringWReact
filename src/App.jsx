import { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1,
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, prevPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected ||
          prevPrice === selected,
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ),
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
