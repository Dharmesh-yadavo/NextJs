"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

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
    // used only in server actions to redirect
    redirect("/");
  } catch (error) {
    console.log(error);
    // its used to use redirect in try-catch block & outside we can use it normally without erri
    if (error.message === "NEXT_REDIRECT") throw error;
    if (error) return { success: false, message: "error while submitting" };
  }
};
