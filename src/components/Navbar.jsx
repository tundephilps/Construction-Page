import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Drop } from "./Drop";

const Navbar = () => {
  return (
    <div>
      <div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center border-start border-end px-3">
              <small class="fa fa-phone-alt me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center border-end px-3">
              <small class="far fa-envelope-open me-2"></small>
              <small>info@example.com</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center border-end px-3">
              <small class="far fa-clock me-2"></small>
              <small>Mon - Fri : 09 AM - 09 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center">
              <a class="btn btn-square border-end border-start" href="">
                <i class="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a class="btn btn-square border-end" href="">
                <i class="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a class="btn btn-square border-end" href="">
                <i class="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
              <a class="btn btn-square border-end" href="">
                <i class="fab fa-instagram">
                  <FaInstagram />{" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center">
          <h1 class="m-0">
            <i class="fa fa-building text-primary me-3"></i>
            CONSTRUCTIONS
          </h1>
        </a>
        <Drop />
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-3 py-lg-0">
            <a href="" class="nav-item nav-link active">
              Home
            </a>
            <a href="" class="nav-item nav-link">
              About Us
            </a>
            <a href="" class="nav-item nav-link">
              Our Services
            </a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link "
                // data-bs-toggle="dropdown"
              >
                Pages
                <MdKeyboardArrowDown />
              </a>
              <div class="dropdown-menu bg-light m-0">
                <a href="" class="dropdown-item">
                  Features
                </a>
                <a href="" class="dropdown-item">
                  Appointment
                </a>
                <a href="" class="dropdown-item">
                  Our Team
                </a>
                <a href="" class="dropdown-item">
                  Testimonial
                </a>
                <a href="" class="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="" class="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
