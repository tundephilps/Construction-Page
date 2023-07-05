import React from "react";
import service1 from "../assets/images/service-1.jpg";

import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import service4 from "../assets/images/service-4.jpg";
import service5 from "../assets/images/service-5.jpg";
import service6 from "../assets/images/service-6.jpg";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-end mb-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="border-start border-5 ps-4" id="goldborder">
                <h6 class="text-body text-uppercase mb-2">Our Services</h6>
                <h1 class="display-6 mb-0">
                  Construction And Renovation Solutions
                </h1>
              </div>
            </div>
            <div
              class="col-lg-6 text-lg-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a class="btn  py-3 px-5" id="gold" href="">
                More Services
              </a>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service1} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Building Construction</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" href="" id="goldicon">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3" id="goldicon">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service2} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Home Maintainance</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" id="goldicon" href="">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service3} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Renovation and Painting</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" href="" id="goldicon">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service4} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Wiring and installation</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" href="" id="goldicon">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service5} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Tiling and Painting</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" href="" id="goldicon">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light overflow-hidden h-100">
                <img class="img-fluid" src={service6} alt="" />
                <div class="service-text position-relative text-center h-100 p-4">
                  <h5 class="mb-3">Interior Design</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a class="small" href="" id="goldicon">
                    READ MORE
                    <i class="fa fa-arrow-right ms-3">
                      <FaArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
