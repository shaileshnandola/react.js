import React from 'react';

const Image = ({ imglist }) => {
  if (!Array.isArray(imglist)) {
    return null;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {imglist.map((img, index) => (
          <div className="col-12 mb-3" key={index}>
            <img src={img.image} className="img-fluid w-100" alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
