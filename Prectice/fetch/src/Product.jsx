const Product = ({ productData }) => {
    console.log(productData);

    return (
        <div className="container">
            <h1 align="center">Product Api</h1>
            <div className="row">
                {productData.map((product, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "18rem" }}>
                            {/* Fallback image if the product image is missing */}
                            <img
                                src={product.image ? product.image : "/images/default-image.jpg"}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price: {product.price}</p>
                                <p className="card-text">Rating: {product.rating}</p>
                                <p className="card-text">Brand: {product.brand}</p>
                                <p className="card-text">Category: {product.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
