import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/action/ProductAction';
import ProductItem from './ProductItem';

const ProductList = ({ setSelectedProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {products.map(p => (
        <ProductItem key={p.id} product={p} setSelectedProduct={setSelectedProduct} />
      ))}
    </ul>
  );
};

export default ProductList;
