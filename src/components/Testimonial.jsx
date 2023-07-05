import Testimonial1 from "../assets/images/testimonial-1.jpg";

import Testimonial2 from "../assets/images/testimonial-2.jpg";
import { FaCheck, FaUserFriends } from "react-icons/fa";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="border-start border-5  ps-4 mb-5" id="goldborder">
              <h6 class="text-body text-uppercase mb-2">Testimonial</h6>
              <h1 class="display-6 mb-0">What Our Happy Clients Say!</h1>
            </div>
            <p class="mb-4">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet
            </p>
            <div class="row g-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-center mb-2">
                  <i
                    class="fa fa-users fa-2x text-primary flex-shrink-0"
                    id="goldicon"
                  >
                    <FaUserFriends />
                  </i>
                  <h1 class="ms-3 mb-0">123+</h1>
                </div>
                <h5 class="mb-0">Happy Clients</h5>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center mb-2">
                  <i
                    class="fa fa-check fa-2x text-primary flex-shrink-0"
                    id="goldicon"
                  >
                    <FaCheck />
                  </i>
                  <h1 class="ms-3 mb-0">123+</h1>
                </div>
                <h5 class="mb-0">Projects Done</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
            <div class="owl-carousel testimonial-carousel">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div class="testimonial-item">
                    <img class="img-fluid mb-4" src={Testimonial1} alt="" />
                    <p class="fs-5">
                      Dolores sed duo clita tempor justo dolor et stet lorem
                      kasd labore dolore lorem ipsum. At lorem lorem magna ut
                      et, nonumy et labore et tempor diam tempor erat.
                    </p>
                    <div
                      class="mb-3"
                      id="gold"
                      style={{ width: "60px", height: "5px" }}
                    ></div>
                    <h5>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div class="testimonial-item">
                    <img class="img-fluid mb-4" src={Testimonial2} alt="" />
                    <p class="fs-5">
                      Dolores sed duo clita tempor justo dolor et stet lorem
                      kasd labore dolore lorem ipsum. At lorem lorem magna ut
                      et, nonumy et labore et tempor diam tempor erat.
                    </p>
                    <div
                      class="mb-3"
                      id="gold"
                      style={{ width: "60px", height: "5px" }}
                    ></div>
                    <h5>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
