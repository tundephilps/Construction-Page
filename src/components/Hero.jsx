import React from "react";
import carosel1 from "../assets/images/carousel-1.jpg";

import carosel2 from "../assets/images/carousel-2.jpg";

const Hero = () => {
  return (
    <>
      <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={carosel1} alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                      <h5 class="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to Apex
                      </h5>
                      <h1 class="display-2 text-light mb-3 animated slideInDown">
                        A Construction & Renovation Company
                      </h1>
                      <ol class="breadcrumb mb-4 pb-2 items-center justify-content-center">
                        <li class="breadcrumb-item fs-5 text-light">
                          Commercial
                        </li>
                        <li class="breadcrumb-item fs-5 text-light">
                          Residential
                        </li>
                        <li class="breadcrumb-item fs-5 text-light">
                          Industrial
                        </li>
                      </ol>
                      <a href="" class="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={carosel2} alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                      <h5 class="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to Apex
                      </h5>
                      <h1 class="display-2 text-light mb-3 animated slideInDown">
                        Professional Tiling & Painting Services
                      </h1>
                      <ol class="breadcrumb mb-4 pb-2">
                        <li class="breadcrumb-item fs-5 text-light">
                          Commercial
                        </li>
                        <li class="breadcrumb-item fs-5 text-light">
                          Residential
                        </li>
                        <li class="breadcrumb-item fs-5 text-light">
                          Industrial
                        </li>
                      </ol>
                      <a href="" class="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
