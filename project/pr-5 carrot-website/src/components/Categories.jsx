import React from 'react';

const Categories = () => {
    return (
        <div className="container py-5" style={{ paddingTop: 100 }}>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card text-center border-0 mb-2 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold text-success m-0">Cake & Milk</h5>
                            <p className="text-muted">(65 items)</p>
                        </div>
                    </div>
                    <div className="card text-center border-0 mb-2 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold m-0">Fresh Meat</h5>
                            <p className="text-muted">(30 items)</p>
                        </div>
                    </div>
                    <div className="card text-center border-0 mb-2 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold m-0">Vegetables</h5>
                            <p className="text-muted">(25 items)</p>
                        </div>
                    </div>
                    <div className="card text-center border-0 mb-2 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold m-0">Apple & Mango</h5>
                            <p className="text-muted">(45 items)</p>
                        </div>
                    </div>
                    <div className="card text-center border-0 mb-2 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold m-0">Strawberry</h5>
                            <p className="text-muted">(68 items)</p>
                        </div>
                    </div>
                    <div className="card text-center border-0 bg-light">
                        <div className="card-body">
                            <h5 className="fw-semibold text-success m-0">View More</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card text-white border-0 position-relative">
                        <img
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/7.jpg"
                            className="card-img"
                            style={{ height: 575, objectFit: 'cover' }}
                            alt="Apple"
                        />
                        <div className="position-absolute top-0 start-0 m-3 bg-dark bg-opacity-50 p-2 rounded">
                            <h1 className="m-0">
                                30<span style={{ fontSize: 24 }}>%</span>
                            </h1>
                            <p className="m-0">OFF</p>
                        </div>
                        <div className="position-absolute bottom-0 start-0 text-white mb-3" style={{ marginLeft: '110px' }}>
                            <h3 className="fw-bold ms-5">Apple</h3>
                            <a
                                href="#"
                                className="btn text-white ms-5"
                                style={{ backgroundColor: '#6ec186' }}
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card text-white border-0 position-relative">
                        <img
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/8.jpg"
                            className="card-img"
                            style={{ height: 575, objectFit: 'cover' }}
                            alt="Mango"
                        />
                        <div className="position-absolute top-0 start-0 m-3 bg-dark bg-opacity-50 p-2 rounded">
                            <h1 className="m-0">
                                25<span style={{ fontSize: 24 }}>%</span>
                            </h1>
                            <p className="m-0">OFF</p>
                        </div>
                        <div className="position-absolute bottom-0 start-0 text-white mb-3" style={{ marginLeft: '110px' }}>
                            <h3 className="fw-bold ms-5">Mango</h3>
                            <a
                                href="#"
                                className="btn text-white ms-5"
                                style={{ backgroundColor: '#6ec186' }}
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;
