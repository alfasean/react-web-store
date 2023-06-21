import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from './../Assets/cart.svg';
import './../CSS/style.css';

const Product = () => {
  const url = 'https://fakestoreapi.com/products';
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getData = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProduct(dataProduct);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='container py-3 justify-content-center'>
            <Button className='button-kategori' variant="link" onClick={() => handleCategoryClick('')}>All</Button>{''}
            {categories.map((category, index) => (
              <Button
                key={index}
                className='button-kategori'
                variant="link"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className='col-12 mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search products'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {product
          .filter((produk) => {
            if (selectedCategory === '') {
              return true;
            } else {
              return produk.category === selectedCategory;
            }
          })
          .filter((produk) =>
            produk.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((produk) => (
            <div className='col-3 items' key={produk.id}>
              <Cardproduct
                title={produk.title}
                price={produk.price}
                image={produk.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

function Cardproduct(props) {
  return (
    <Card className='items' style={{ width: '15rem', marginTop: '20px' }}>
      <Card.Img variant='top' src={props.image} style={{ height: '10rem', padding: '20px' }} />
      <Card.Body>
        <Card.Title className='title'>{props.title}</Card.Title>
        <Card.Text>
          <p className='harga'>${props.price}</p>
        </Card.Text>
        <Button className='button-cart'>
          <img src={cart} alt="cart"></img>Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
