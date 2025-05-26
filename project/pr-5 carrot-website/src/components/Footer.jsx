import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTimes, FaDribbble, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-3 border-top">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="fw-bold d-flex align-items-center">
              <img
                src="https://img.icons8.com/emoji/48/carrot-emoji.png"
                alt="logo"
                width="40"
                className="me-2"
              />
              Carrot
            </h4>
            <p className="text-muted">
              Carrot is the biggest market of grocery products. Get your daily needs from our store.
            </p>
            <p className="text-muted mb-2">
              <FaMapMarkerAlt className="me-2 text-success" />
              51 Green St. Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
            </p>
            <p className="text-muted mb-2">
              <FaEnvelope className="me-2 text-success" />
              example@email.com
            </p>
            <p className="text-muted">
              <FaPhoneAlt className="me-2 text-success" />
              +91 123 4567890
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 pt-2">
            <h5 className="fw-bold">Company</h5>
            <p className="text-muted mb-3">About Us</p>
            <p className="text-muted mb-3">Delivery Information</p>
            <p className="text-muted mb-3">Privacy Policy</p>
            <p className="text-muted mb-3">Terms & Conditions</p>
            <p className="text-muted mb-3">Contact Us</p>
            <p className="text-muted">Support Center</p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 pt-2">
            <h5 className="fw-bold">Category</h5>
            <p className="text-muted mb-3">Dairy & Bakery</p>
            <p className="text-muted mb-3">Fruits & Vegetable</p>
            <p className="text-muted mb-3">Snack & Spice</p>
            <p className="text-muted mb-3">Juice & Drinks</p>
            <p className="text-muted mb-3">Chicken & Meat</p>
            <p className="text-muted">Fast Food</p>
          </div>

          <div className="col-lg-5 col-md-6 pt-2">
            <h5 className="fw-bold">Subscribe Our Newsletter</h5>
            <div className="input-group my-4">
              <input type="text" className="form-control" placeholder="Search here..." />
              <button className="btn btn-light border border-1 border-secondary" type="button">
                <IoIosSend />
              </button>
            </div>

            <div className="d-flex gap-2 mb-4">
              <button type="button" className="btn btn-outline-dark btn-md">
                <FaFacebookF />
              </button>
              <button type="button" className="btn btn-outline-dark btn-md">
                <FaTimes />
              </button>
              <button type="button" className="btn btn-outline-dark btn-md">
                <FaDribbble />
              </button>
              <button type="button" className="btn btn-outline-dark btn-md">
                <FaInstagram />
              </button>
            </div>

            <div className="d-flex gap-2">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg"
                alt="insta1"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
              />
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/2.jpg"
                alt="insta2"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
              />
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg"
                alt="insta3"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
              />
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg"
                alt="insta4"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
              />
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg"
                alt="insta5"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>

        <div className="text-center border-top pt-3 text-muted">
          © 2025 <span className="text-success fw-bold">Carrot</span>, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
