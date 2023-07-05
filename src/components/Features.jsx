import React from "react";
import feature from "../assets/images/feature.jpg";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="border-start border-5  ps-4 mb-5" id="goldborder">
                <h6 class="text-body text-uppercase mb-2">Why Choose Us!</h6>
                <h1 class="display-6 mb-0">
                  Our Specialization And Company Features
                </h1>
              </div>
              <p class="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div class="row gy-5 gx-4">
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="d-flex align-items-center mb-3">
                    <i
                      class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                      id="goldicon"
                    >
                      <FaCheck />
                    </i>
                    <h6 class="mb-0">Large number of services provided</h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div class="d-flex align-items-center mb-3 ">
                    <i
                      class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                      id="goldicon"
                    >
                      <FaCheck />
                    </i>
                    <h6 class="mb-0">25+ years of professional experience</h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div class="d-flex align-items-center mb-3">
                    <i
                      class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                      id="goldicon"
                    >
                      <FaCheck />
                    </i>
                    <h6 class="mb-0">A large number of grateful customers</h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div class="d-flex align-items-center mb-3">
                    <i
                      class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                      id="goldicon"
                    >
                      <FaCheck />
                    </i>
                    <h6 class="mb-0">Always reliable and affordable prices</h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                class="position-relative overflow-hidden ps-5 pt-5 h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  class="position-absolute w-100 h-100"
                  src={feature}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div
                  class="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  style={{ width: "200px", height: "200px" }}
                >
                  <div
                    class="d-flex flex-column justify-content-center text-center  h-100 p-3"
                    id="gold"
                  >
                    <h1 class="text-white">25</h1>
                    <h2 class="text-white">Years</h2>
                    <h5 class="text-white mb-0">Experience</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
