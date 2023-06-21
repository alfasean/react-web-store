import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Component/product.js'
import Navbar from './Component/nav.js'
import Hero from './Component/hero.js'


function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Product />
    </div>
  );
}

export default App;
