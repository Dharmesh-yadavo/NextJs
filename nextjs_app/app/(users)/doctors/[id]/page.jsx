import { db } from "@/config/db";
import { notFound } from "next/navigation";
import React from "react";

const page = async (props) => {
  const params = await props.params;
  //   console.log(params);
  const [doctors] = await db.execute(
    "select * from doctors where doctor_id=?",
    [params.id]
  );
  //   console.log(doctors);

  if (doctors.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen flex justify-center items-start p-6">
      {/* Container */}
      <div className="w-full max-w-6xl text-gray-100">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">
          Doctor List
        </h1>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {doctors.map((doctor) => (
            <div
              key={doctor.doctor_id}
              className="w-full max-w-sm rounded-xl bg-gray-800 border border-gray-700 p-5 shadow-md hover:shadow-xl hover:border-gray-600 transition"
            >
              <h2 className="text-xl font-semibold text-white">
                Dr. {doctor.first_name} {doctor.last_name}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Gender:{" "}
                <span className="capitalize text-gray-300">
                  {doctor.gender}
                </span>
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Specialization:{" "}
                <span className="font-medium text-blue-400">
                  {doctor.specialization}
                </span>
              </p>

              {/* Actions */}
              <div className="mt-4 flex justify-center gap-3">
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 transition">
                  View Profile
                </button>

                <button className="rounded-lg border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
