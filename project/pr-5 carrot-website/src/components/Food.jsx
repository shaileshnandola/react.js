import React from "react";

const Food = () => {
  return (
    <div
      className="py-5 mb-4"
      style={{
        backgroundImage:
          'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/deal/bg-deal.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:'500px'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div
              className="p-4 border-0 rounded mt-5 pt-4"
              style={{
                backgroundColor: "#fff5ee",
                maxWidth: "500px",
               
              }}
            >
              <p className="text-success fw-bold mb-2 fs-5">
                35% <span className="text-dark fw-normal">OFF</span>
              </p>
              <h2 className="fw-bold mb-3">Great deal on organic food.</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
