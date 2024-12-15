import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        Turning Keys, Fulfilling Dreams: Your Trusted Partner in Finding a Dream
        Home
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            A premier real estate developer dedicated to crafting exceptional
            living and working spaces. We blend innovative design, sustainable
            practices, and meticulous craftsmanship to deliver high-quality
            properties that stand the test of time. From residential communities
            to commercial developments, we build with vision and integrity,
            shaping the future of urban landscapes.
          </p>
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="bg-blue-600 text-white px-8 py-2 rounded"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;
