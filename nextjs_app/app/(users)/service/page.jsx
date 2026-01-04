import Image from "next/image";
import React from "react";
import coder from "@/public/coder.png";

const ServicePage = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-400 text-3xl font-bold text-center mb-16">
          Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-24 h-24 flex items-center justify-center text-2xl font-bold mb-6  text-blue-600">
              <Image
                src="/coder.png"
                alt="coder img"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h2 className="text-gray-900 text-xl font-bold mb-1">
              Thapa Technical
            </h2>
            <p className="text-gray-600 text-sm font-semibold mb-1 uppercase">
              Frontend Developer
            </p>
            <p className="text-gray-400 text-sm">React & TypeScript</p>
          </div>

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
