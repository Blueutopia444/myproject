
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Women from './pages/Women';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/women" exact element={<Women />} />
          <Route path="/men" exact element={<Women />} />
          <Route path="/kids" exact element={<Women />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product" exact element={<ProductDetail />} />
          <Route path="/" element={<Women />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
