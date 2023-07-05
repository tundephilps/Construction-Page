import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMap,
  FaMapMarker,
  FaPhone,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { BsArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h1 class="text-white mb-4">
              <i class="fa fa-building text-primary me-3"></i>LOGO
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-square  me-1" href="" id="goldicon">
                <i class="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a class="btn btn-square me-1" href="" id="goldicon">
                <i class="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a class="btn btn-square  me-1" href="" id="goldicon">
                <i class="fab fa-youtube">
                  <FaYoutube />
                </i>
              </a>
              <a class="btn btn-square  me-0" href="" id="goldicon">
                <i class="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Address</h4>
            <p>
              <i class="fa fa-map-marker-alt me-3">
                <FaMapMarker />
              </i>
              123 Street, New York, USA
            </p>
            <p>
              <i class="fa fa-phone-alt me-3">
                <FaPhone />
              </i>
              +012 345 67890
            </p>
            <p>
              <i class="fa fa-envelope me-3">
                <FaEnvelope />
              </i>
              info@example.com
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <a class="btn btn-link" href="">
              About Us
            </a>
            <a class="btn btn-link" href="">
              Contact Us
            </a>
            <a class="btn btn-link" href="">
              Our Services
            </a>
            <a class="btn btn-link" href="">
              Terms & Condition
            </a>
            <a class="btn btn-link" href="">
              Support
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              class="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn  py-2 position-absolute top-0 end-0 mt-2 me-2"
                id="gold"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a href="https://freewebsitecreate.net">Tunde Philps</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
