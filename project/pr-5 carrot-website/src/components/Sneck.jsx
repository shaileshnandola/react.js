import React from 'react';

const Sneck = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div
            className="text-dark p-4 rounded-4"
            style={{
              backgroundImage:
                'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px',
              position: 'relative',
            }}
          >
            <div style={{ padding: '20px', borderRadius: '12px' }}>
              <h5 className="fw-bold">
                Fresh <br />
                Snacks & Sweets
              </h5>
              <p>
                <span className="fw-bold text-success">20%</span>{' '}
                <span className="text-muted">Off on first order</span>
              </p>
              <button type="button" className="btn btn-success fw-semibold px-4 py-1">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="text-dark p-4 rounded-4"
            style={{
              backgroundImage:
                'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px',
              position: 'relative',
            }}
          >
            <div style={{ padding: '20px', borderRadius: '12px' }}>
              <h5 className="fw-bold">
                Fresh & Healthy <br />
                Organic Fruits
              </h5>
              <p>
                <span className="fw-bold text-success">35%</span>{' '}
                <span className="text-muted">Off on first order</span>
              </p>
              <button type="button" className="btn btn-success fw-semibold px-4 py-1">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="text-dark p-4 rounded-4"
            style={{
              backgroundImage:
                'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px',
              position: 'relative',
            }}
          >
            <div style={{ padding: '20px', borderRadius: '12px' }}>
              <h5 className="fw-bold">
                Healthy <br />
                Bakery Products
              </h5>
              <p>
                <span className="fw-bold text-success">30%</span>{' '}
                <span className="text-muted">Off on first order</span>
              </p>
              <button type="button" className="btn btn-success fw-semibold px-4 py-1">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sneck;
