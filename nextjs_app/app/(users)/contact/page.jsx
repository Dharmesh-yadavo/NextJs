import { contactAction } from "./contact.action";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="common_heading text-3xl font-bold mb-8 text-center">
            Get In Touch
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <form className="space-y-6" action={contactAction}>
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

              <button
                type="submit"
                className="w-full bg-pink-600 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
