import React, { useRef } from 'react';

const Event = ({ eventlist }) => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += dir === 'next' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="py-4">
      <h3 className=" ps-4 ms-5 fw-bold">The Best Of Live Events</h3>
      <div className="d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <button className="btn btn-outline-secondary me-2" onClick={() => scroll('prev')}>
          <i className="bi bi-chevron-left"></i> Prev
        </button>

        <div
          className="d-flex px-3 hide-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            gap: '20px',
            width: '100%',
            overflowX: 'auto',
          }}
          ref={sliderRef}
        >
          {eventlist.map((item, i) => (
            <div
              className="card"
              key={i}
              style={{
                minWidth: '260px',
                maxWidth: '250px',
                border: 'none',
                background: 'none',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>

        <button className="btn btn-outline-secondary ms-2" onClick={() => scroll('next')}>
          Next <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Event;
