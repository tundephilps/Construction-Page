import React from "react";
import fact from "../assets/images/fact-1.jpg";

import fact2 from "../assets/images/fact-2.jpg";
import fact3 from "../assets/images/fact-3.jpg";
import fact4 from "../assets/images/fact-4.jpg";

const Facts = () => {
  return (
    <div>
      <div class="container-fluid my-5 p-0">
        <div class="row g-0">
          <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="position-relative">
              <img class="img-fluid w-100" src={fact} alt="" />
              <div class="facts-overlay">
                <h1 class="display-1">01</h1>
                <h4 class="text-white mb-3">Construction</h4>
                <p class="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a class="text-white small" href="">
                  READ MORE<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
            <div class="position-relative">
              <img class="img-fluid w-100" src={fact2} alt="" />
              <div class="facts-overlay">
                <h1 class="display-1">02</h1>
                <h4 class="text-white mb-3">Mechanical</h4>
                <p class="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a class="text-white small" href="">
                  READ MORE<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
            <div class="position-relative">
              <img class="img-fluid w-100" src={fact3} alt="" />
              <div class="facts-overlay">
                <h1 class="display-1">03</h1>
                <h4 class="text-white mb-3">Architecture</h4>
                <p class="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a class="text-white small" href="">
                  READ MORE<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
            <div class="position-relative">
              <img class="img-fluid w-100" src={fact4} alt="" />
              <div class="facts-overlay">
                <h1 class="display-1">04</h1>
                <h4 class="text-white mb-3">Interior Design</h4>
                <p class="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a class="text-white small" href="">
                  READ MORE<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
