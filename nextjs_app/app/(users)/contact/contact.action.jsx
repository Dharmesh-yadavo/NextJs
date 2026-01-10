"use server";

import { db } from "@/config/db";

export const contactAction = async (previousState, formData) => {
  //   console.log("previousState", previousState);
  try {
    //   const fullName = formData.get("fullName");
    //   const email = formData.get("email");
    const { fullName, email, message } = Object.fromEntries(formData.entries());
    // console.log(fullName, email, message);
    await db.execute(
      `insert into contact_form (full_name, email, message) values (?, ? , ?)`,
      [fullName, email, message]
    );
    return { success: true, message: "form submitted successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "error while submitting" };
  }
};
