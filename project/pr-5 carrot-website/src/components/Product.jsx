import React from 'react';
import { RiRedPacketLine, RiCustomerService2Line, RiMoneyDollarBoxLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";

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
                <RiRedPacketLine size={40} color="#5cb49e" />
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
                <RiCustomerService2Line size={40} color="#5cb49e" />
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
                <FiTruck size={40} color="#5cb49e" />
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
                <RiMoneyDollarBoxLine size={40} color="#5cb49e" />
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
