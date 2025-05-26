import React from 'react';

const Product = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div
              className="text-center border-0"
              style={{ backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '24px' }}
            >
              <div className="mb-3">
                <i className="fas fa-box-open fa-2x text-success"></i>
              </div>
              <h5 className="fw-bold">Product Packing</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="text-center border-0"
              style={{ backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '24px' }}
            >
              <div className="mb-3">
                <i className="fas fa-headset fa-2x text-success"></i>
              </div>
              <h5 className="fw-bold">24X7 Support</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="text-center border-0"
              style={{ backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '24px' }}
            >
              <div className="mb-3">
                <i className="fas fa-truck fa-2x text-success"></i>
              </div>
              <h5 className="fw-bold">Delivery in 5 Days</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="text-center shadow-sm border-0"
              style={{ backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '24px' }}
            >
              <div className="mb-3">
                <i className="fas fa-money-bill-wave fa-2x text-success"></i>
              </div>
              <h5 className="fw-bold">Payment Secure</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
