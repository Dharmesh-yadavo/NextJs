"use client";
import Image from "next/image";
import React from "react";
import coder from "@/public/coder.png";
import { easeInOut, motion } from "motion/react";

// export const metadata = {
//   title: "Service Page",
//   description: "OG",
// };

//! using motion for animation - so we have to make client component
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const ServicePage = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-400 text-3xl font-bold text-center mb-16">
          Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            // initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, ease: easeInOut }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 flex items-center justify-center text-2xl font-bold mb-6  text-blue-600"
            >
              <Image
                src="/coder.png"
                alt="coder img"
                width={100}
                height={100}
                className="rounded-full"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.4 }}
              className="text-gray-900 text-xl font-bold mb-1"
            >
              Thapa Technical
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.5 }}
              className="text-gray-600 text-sm font-semibold mb-1 uppercase"
            >
              Frontend Developer
            </motion.p>
            <p className="text-gray-400 text-sm">React & TypeScript</p>
          </motion.div>

          {/* Card 2 */}
          <div className="bg-white relative rounded-2xl p-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mb-6 bg-purple-100 text-purple-600">
              <Image
                src={coder}
                alt="coder img"
                fill={true}
                // quality={70}
                // priority={false}
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <h2 className="text-gray-900 text-xl font-bold mb-1">
              Vinod Thapa
            </h2>
            <p className="text-gray-600 text-sm font-semibold mb-1 uppercase">
              Full Stack Developer
            </p>
            <p className="text-gray-400 text-sm">Node.js & React</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mb-6 bg-purple-100 text-purple-600">
              MJ
            </div>
            <h2 className="text-gray-900 text-xl font-bold mb-1">
              Mike Johnson
            </h2>
            <p className="text-gray-600 text-sm font-semibold mb-1 uppercase">
              Backend Developer
            </p>
            <p className="text-gray-400 text-sm">Node.js & Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
