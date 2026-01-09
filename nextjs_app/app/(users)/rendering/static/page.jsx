import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Static doctors");

  return (
    <>
      <p>Total Doctors: {doctors.length}</p>
      <DoctorList doctors={doctors} />
    </>
  );
};

export default StaticPage;

const DoctorList = ({ doctors }) => {
  return (
    <>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}> {doctor.first_name} </li>;
        })}
      </ul>
    </>
  );
};
