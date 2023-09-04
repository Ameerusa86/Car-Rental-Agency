"use client";

import Image from "next/image";
import { CarsBrands } from "../../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* Brands Wrapper */}
        <div className="grid grid-cols-3 gap-6 w-full h-full place-items-center xl:flex  xl:flex-wrap xl:gap-x-6 xl:justify-between xl:items-center">
          {CarsBrands.map((car) => (
            <div>
              <Image
                key={car.img}
                src={car.img}
                width={60}
                height={60}
                alt=""
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
