import React from 'react';

const ProductItem = ({ product, setSelectedProduct }) => {
  return (
    <li className="list-group-item" onClick={() => setSelectedProduct(product)}>
      {product.name}
    </li>
  );
};

export default ProductItem;
