import React from "react";

function PopularProducts() {
    return (
        <div className="container py-3">
            <h2 className="text-center fw-bold">Popular Products</h2>
            <p className="text-center text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore lacus vel facilisis.
            </p>

            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center fw-bold text-success p-3" role="button">
                            All <span>&rarr;</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center fw-semibold p-3" role="button">
                            Snack <span>&rarr;</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center fw-semibold p-3" role="button">
                            Vegetable <span>&rarr;</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center fw-semibold p-3" role="button">
                            Fruit <span>&rarr;</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center fw-semibold p-3" role="button">
                            Bakery <span>&rarr;</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg"
                                    className="card-img-top"
                                    alt="Vegetables"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Vegetables</p>
                                    <div className="text-warning mb-2">
                                        ★★★★☆ <small>(4.5)</small>
                                    </div>
                                    <h6 className="fw-bold">Fresh organic villa farm lemon 500gm pack</h6>
                                    <div className="text-success fw-bold">
                                        $120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/9.jpg"
                                    className="card-img-top"
                                    alt="Snacks"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Snacks</p>
                                    <div className="text-warning mb-2">
                                        ★★★★★ <small>(5.0)</small>
                                    </div>
                                    <h6 className="fw-bold">Best snakes with hazel nut pack 200gm</h6>
                                    <div className="text-success fw-bold">
                                        $145 <span className="text-decoration-line-through text-muted ms-2">$150</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg"
                                    className="card-img-top"
                                    alt="Fruits"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Fruits</p>
                                    <div className="text-warning mb-2">
                                        ★★★★☆ <small>(4.5)</small>
                                    </div>
                                    <h6 className="fw-bold">Fresh organic apple 1kg simla marmimg</h6>
                                    <div className="text-success fw-bold">
                                        $120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg"
                                    className="card-img-top"
                                    alt="Bakery"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Bakery</p>
                                    <div className="text-warning mb-2">
                                        ★★★★★ <small>(5.0)</small>
                                    </div>
                                    <h6 className="fw-bold">Delicious white baked fresh bread and toast</h6>
                                    <div className="text-success fw-bold">
                                        $20 <span className="text-decoration-line-through text-muted ms-2">$22.10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mt-4" style={{ top: "50px" }}>
                    <div
                        className="card text-white text-start p-3 border-0"
                        style={{
                            backgroundImage:
                                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "16px",
                            overflow: "hidden",
                            minHeight: "400px",
                        }}
                    >
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                                <h4 className="fw-light">Juicy</h4>
                                <h2 className="fw-bold text-warning">FRUITS</h2>
                                <p className="mb-3">100% Natural</p>
                                <a
                                    href="#"
                                    className="btn btn-light fw-semibold px-4 text-success"
                                    style={{ borderRadius: "8px" }}
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="col-md-9 mt-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/11.jpg"
                                    className="card-img-top"
                                    alt="Vegetables"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Snecks</p>
                                    <div className="text-warning mb-2">
                                        ★★★★☆ <small>(5.0)</small>
                                    </div>
                                    <h6 className="fw-bold">Sweet crunchy nut mix 250gm pack</h6>
                                    <div className="text-success fw-bold">
                                        $120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg"
                                    className="card-img-top"
                                    alt="Snacks"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Fruits</p>
                                    <div className="text-warning mb-2">
                                        ★★★★★ <small>(3.2)</small>
                                    </div>
                                    <h6 className="fw-bold">Organic fresh venila farm watermelon 5kg</h6>
                                    <div className="text-success fw-bold">
                                        $50.30 <span className="text-decoration-line-through text-muted ms-2">$72.60</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/10.jpg"
                                    className="card-img-top"
                                    alt="Fruits"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Snecks</p>
                                    <div className="text-warning mb-2">
                                        ★★★★☆ <small>(5.0)</small>
                                    </div>
                                    <h6 className="fw-bold">Sweet crunchy nut mix 250gm pack</h6>
                                    <div className="text-success fw-bold">
                                        $120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 text-center p-2">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg"
                                    className="card-img-top"
                                    alt="Bakery"
                                />
                                <div className="card-body">
                                    <p className="text-muted">Bakery</p>
                                    <div className="text-warning mb-2">
                                        ★★★★★ <small>(5.0)</small>
                                    </div>
                                    <h6 className="fw-bold">Delicious white baked fresh bread and toast</h6>
                                    <div className="text-success fw-bold">
                                        $20<span className="text-decoration-line-through text-muted ms-2">$22.10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularProducts;
