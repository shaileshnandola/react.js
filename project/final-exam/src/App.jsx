import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList setSelectedProduct={setSelectedProduct} />}/>
          <Route path="/add" element={
              <ProductForm
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
