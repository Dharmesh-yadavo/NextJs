import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log(doctors);

  return (
    <div className="ml-12 mt-8">
      <p>Total Doctors: {doctors.length}</p>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map((doctor) => {
          return (
            <li key={doctor.doctor_id}>
              {doctor.first_name} {doctor.last_name} - {doctor.specialization}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StaticPage;
