import { db } from "@/config/db.jsx";

const DynamicPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("fetching doctors");

  return (
    <>
      <p>Total Doctors: {doctors.length}</p>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}> {doctor.first_name} </li>;
        })}
      </ul>
    </>
  );
};

export default DynamicPage;
