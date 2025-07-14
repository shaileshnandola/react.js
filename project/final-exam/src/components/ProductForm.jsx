import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function ProductForm() {
  const [show, setShow] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    thumbnail: ''
  });

  const post = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/products`);
      const res = await data.json();
      setShow(res.products);
      setFiltered(res.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    post();
  }, []);

  useEffect(() => {
    let results = show.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'asc') {
      results.sort((a, b) => a.price - b.price);
    } else {
      results.sort((a, b) => b.price - a.price);
    }

    setFiltered(results);
  }, [searchTerm, sortOrder, show]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { title, description, price, category } = newProduct;
    const isComplete = title && description && price && category;
    if (!isComplete) return alert('Please fill all fields');

    const newItem = {
      ...newProduct,
      price: Number(newProduct.price),
      id: show.length + 1
    };

    setShow([...show, newItem]);
    setNewProduct({
      title: '',
      description: '',
      price: '',
      category: '',
      thumbnail: ''
    });
  };

  const handleDelete = (index) => {
    const del = show.filter((_, i) => i !== index);
    setShow(del);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛍️ Product Catalog</h2>

      <form className="mb-4">
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-2">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={newProduct.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-1">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="thumbnail"
              className="form-control"
              placeholder="Image URL"
              value={newProduct.thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              + Add Product
            </button>
          </div>
        </div>
      </form>

      <div className="row g-4">
        {filtered.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow border-0">
              <img
                src={item.thumbnail || 'https://via.placeholder.com/200'}
                className="card-img-top"
                alt="product"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="text-primary">{item.title}</h5>
                <p className="text-muted small flex-grow-1">{item.description}</p>
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">₹{item.price}</span>
                  <span className="badge bg-secondary">{item.category}</span>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductForm;
