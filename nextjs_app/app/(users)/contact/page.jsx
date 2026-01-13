"use client";
import { Loader } from "lucide-react";
import { contactAction } from "./contact.action";
import { useActionState, useEffect, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

//!  Form Action in Client Component
// const contactAction = async (formData) => {
//   const { fullName, email, message } = Object.fromEntries(formData.entries());
//   console.log(fullName, email, message);
// };

const Contact = () => {
  // const [state, formAction, isPending] = useActionState(contactAction, null);
  const [isPending, startTransition] = useTransition();
  const [contactFormRes, setContactFormRes] = useState(null);

  const handleContactSubmit = (formData) => {
    const { fullName, email, message } = Object.fromEntries(formData);
    startTransition(async () => {
      await contactAction({ fullName, email, message });
      setContactFormRes(res);
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="common_heading text-3xl font-bold mb-8 text-center">
            Get In Touch
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <form className="space-y-6" action={handleContactSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  name="fullName"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <Submit />
            </form>
          </div>

          {/* <section>
            {state && (
              <p
                className={` p-4 mt-5 text-center capitalize ${
                  state.success ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {state.message}
              </p>
            )}
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Submit = () => {
  //! if using useActionState, then we dont need to pass props to re-render on form status change
  const { pending, data, method, action } = useFormStatus(); // to re-render on form status change
  const router = useRouter();
  useEffect(() => {
    if (pending) {
      router.push("/");
    }
  }, [pending, router]);

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-pink-600 py-3 rounded-lg"
    >
      {pending ? (
        <Loader className="animate-spin" />
      ) : (
        <span> Send Message</span>
      )}
    </button>
  );
};
