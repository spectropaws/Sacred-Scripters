"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";

import "swiper/css";
import "./Carousel.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "#/images/landing/poster-1.jpg";
import slide_image_2 from "#/images/landing/poster-2.jpg";
import slide_image_3 from "#/images/landing/poster-3.jpg";
import slide_image_4 from "#/images/landing/poster-4.jpg";
import slide_image_5 from "#/images/landing/poster-6.jpg";

function Carousel() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon icon={arrowForwardOutline}></IonIcon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
