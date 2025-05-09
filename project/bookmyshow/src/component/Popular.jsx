import React, { useRef } from 'react';

const Popular = ({poplist}) => {
    const sliderRef = useRef(null);
    
      const scroll = (dir) => {
        const scrollAmount = window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
        sliderRef.current.scrollLeft += dir === 'next' ? scrollAmount : -scrollAmount;
      };
  return (
    <div className="py-4">
    <h3 className=" ps-4 ms-5 fw-bold">Popular Event</h3>
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
        {poplist.map((item, i) => (
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
                height: '430px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '20px' }}>{item.title}</h5>
              <p className="card-text" style={{ fontSize: '18px', color: '#555' }}>
                {item.venue}
              </p>
              <p className="card-text" style={{ fontSize: '18px', color: '#555' }}>
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-outline-secondary ms-2" onClick={() => scroll('next')}>
        Next <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
  )
}

export default Popular;
