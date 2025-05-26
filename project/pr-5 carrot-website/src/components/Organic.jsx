import React from "react";

const Organic = () => {
  return (
    <div className="container my-5 pt-5">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100 text-center p-2">
                <img
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg"
                  className="card-img-top"
                  alt="Vegetables"
                />
                <div className="card-body">
                  <p className="text-muted mb-1">Vegetables</p>
                  <div className="text-warning mb-2">★★★★★ <small>(4.5)</small></div>
                  <h6 className="card-title fs-6 fw-bold">
                    Fresh organic villa farm lemon 500gm pack
                  </h6>
                  <div className="text-success fw-bold">
                    $120.25{" "}
                    <span className="text-decoration-line-through text-muted ms-2">
                      $123.25
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-2">
                <img
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg"
                  className="card-img-top"
                  alt="Fruits"
                />
                <div className="card-body">
                  <p className="text-muted mb-1">Fruits</p>
                  <div className="text-warning mb-2">★★★★★ <small>(4.5)</small></div>
                  <h6 className="card-title fs-6 fw-bold">
                    Fresh organic apple 1kg simla marmimg
                  </h6>
                  <div className="text-success fw-bold">
                    $120.25{" "}
                    <span className="text-decoration-line-through text-muted ms-2">
                      $123.25
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-2">
                <img
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg"
                  className="card-img-top"
                  alt="Snacks"
                />
                <div className="card-body">
                  <p className="text-muted mb-1">Snacks</p>
                  <div className="text-warning mb-2">★★★★★ <small>(5.0)</small></div>
                  <h6 className="card-title fs-6 fw-bold">
                    Best snakes with hazel nut pack 200gm
                  </h6>
                  <div className="text-success fw-bold">
                    $145{" "}
                    <span className="text-decoration-line-through text-muted ms-2">
                      $150
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div
            className="card border-0 position-relative h-100"
            style={{ background: "#f9f9f9" }}
          >
            <img
              src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg"
              alt="Banner"
              className="card-img"
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end text-center p-4">
              <div className="w-100">
                <h5 className="fw-bold text-dark">Organic & Healthy Vegetables</h5>
                <p className="text-dark mb-2">
                  <strong>25%</strong> OFF
                </p>
                <button
                  className="btn btn-success fw-semibold px-4 text-white"
                  style={{ borderRadius: "8px", width: "200px" }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
