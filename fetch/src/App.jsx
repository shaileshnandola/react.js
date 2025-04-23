import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";



function App() {

  let [product, setProduct] = useState([]);

  const getProduct = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then((data) => {
        setProduct(data.products);
      })
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Product
        productData={product}
      />
    </>
  )
}

export default App