import React from 'react';

const Slider = () => {
  const images = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1745830048072_web101.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877554805_revplaycard1240x300.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744804585447_summercampaignwebbanneramusementpark.jpg"
  ];

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner active">
        {images.map((img, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
