import React from "react";


const LatestNews = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Latest News</h2>
      <p className="text-center mb-5 text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> 
        incididunt ut labore lacus vel facilisis.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <span>By Admin | Snacks</span>
              <h5 className="card-title mt-2">
                Urna pretium elit mauris cursus at elit Vestibulum.
              </h5>
              <button className="btn p-0 text-success">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="position-relative">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg"
                alt="News 1"
                className="card-img-bottom"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "#212529",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>10</div>
                <div style={{ textTransform: "uppercase", fontSize: "12px" }}>oct</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <span>By Admin | Food</span>
              <h5 className="card-title mt-2">
                Best guide to Shopping for organic ingredients.
              </h5>
              <button className="btn p-0 text-success">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="position-relative">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg"
                alt="News 2"
                className="card-img-bottom"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "#212529",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>09</div>
                <div style={{ textTransform: "uppercase", fontSize: "12px" }}>sep</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <span>By Admin | Snacks</span>
              <h5 className="card-title mt-2">
                Cursus at elit vestibulum urna pretium elit mauris.
              </h5>
              <button className="btn p-0 text-success">
                Read More<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="position-relative">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg"
                alt="News 3"
                className="card-img-bottom"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "#212529",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>12</div>
                <div style={{ textTransform: "uppercase", fontSize: "12px" }}>oct</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
