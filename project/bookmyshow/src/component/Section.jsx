import React, { useRef } from 'react';

const Section = ({ sectionlist }) => {
  const sliderRef = useRef(null);


  const scroll = (dir) => {
    const scrollAmount = window.innerWidth > 600 
      ? window.innerWidth / 2 
      : window.innerWidth - 100;

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += dir === 'next' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div>
      <header className="banner" style={{ backgroundColor: "rgb(43, 49, 72)" }}>
        <div className="logo-section container d-flex align-items-center py-3">
          <div className="play-icon text-white me-3">▶</div>
          <div className="text-white">
            <h2 className="mb-1">PREMIERE</h2>
            <p className="mb-0">Watch new movies at home, every Friday</p>
          </div>
        </div>
      </header>
      <section className="section" style={{ backgroundColor: "rgb(43, 49, 72)" }}>
        <div className="container text-white">
          <h2>{sectionlist.title}</h2>
          <p>{sectionlist.description}</p>
        </div>

        <div className="d-flex align-items-center justify-content-center position-relative overflow-hidden pb-4">
          
          <button className="btn btn-outline-light me-2" onClick={() => scroll('prev')}>
            <i className="bi bi-chevron-left"></i> Prev
          </button>

          <div
            className="d-flex px-3 hide-scrollbar"
            ref={sliderRef}
            style={{
              scrollBehavior: 'smooth',
              gap: '40px',
              width: '100%',
              overflowX: 'auto',
            }}
          >
            {sectionlist.Premierescards?.map((movie, idx) => (
              <div
                className="movie-card text-white p-2"
                key={idx}
                style={{
                  borderRadius: "12px",
                  minWidth: "200px",
                  maxWidth: "250px",
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />
                <div className="badge bg-danger mt-2" style={{ width: "fit-content" }}>
                  PREMIERE
                </div>
                <h5 className="mt-2 mb-1">{movie.title}</h5>
                <p className="mb-0">{movie.language}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-light ms-2" onClick={() => scroll('next')}>
            Next <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section;
