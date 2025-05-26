import React from 'react';

const Banner = () => {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div
            className="d-flex align-items-center"
            style={{
              padding: '64px 32px',
              minHeight: '500px',
              backgroundImage:
                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p style={{ color: '#1e8449', fontWeight: 600, fontSize: '19px' }}>
                    <span style={{ borderBottom: '2px solid #1e8449' }}>100%</span> Organic Fruits
                  </p>
                  <h1 style={{ fontWeight: 900, fontSize: '48px', color: '#000' }}>
                    Explore fresh & <br /> juicy fruits.
                  </h1>
                  <p style={{ color: '#555', fontSize: '16px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                  </p>
                  <a
                    href="#"
                    className="btn btn-success btn-lg fw-bold px-4 py-2"
                    style={{ fontSize: '16px' }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div
            className="d-flex align-items-center"
            style={{
              padding: '64px 32px',
              minHeight: '500px',
              backgroundImage:
                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner-2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <p style={{ color: '#000', fontWeight: 600, fontSize: '19px' }}>100% Fresh Vegetables</p>
                  <h1 style={{ fontWeight: 900, fontSize: '50px', color: '#000' }}>
                    The best way to <br /> stuff your wallet.
                  </h1>
                  <p style={{ color: '#555', fontSize: '16px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                  </p>
                  <a
                    href="#"
                    className="btn btn-success btn-lg fw-bold px-4 py-2"
                    style={{ fontSize: '16px' }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
