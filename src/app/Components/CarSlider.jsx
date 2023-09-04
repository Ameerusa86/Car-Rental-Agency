"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

// Icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Framer Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../../variants";
import { cars } from "../../../data";
import Image from "next/image";

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image src={car.image} width={380} height={284} alt="" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </div>
                  </div>
                  {/* Stars */}
                  <div className="flex gap-x-2 text-accent h-max">
                    {cars.map((star, index) => (
                      <div key={index}>
                        <Image src={star.stars} width={25} height={25} alt="" />
                      </div>
                    ))}
                    {/* <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar /> */}
                  </div>
                </div>
                {/* Car Info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((info, index) => {
                    return (
                      <div className="flex flex-col items-center" key={index}>
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={info.icon}
                            width={24}
                            height={24}
                            alt="car info"
                          />
                        </div>
                        <div className="text-[12px] uppercase">{info.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
