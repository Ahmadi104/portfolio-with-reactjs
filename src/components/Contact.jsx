import React from "react";

function Contact() {
  return (
    <div className="bg-gray-800 py-12 px-6 md:px-16 flex">
      <section
        id="contact"
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Feel free to reach out to me for collaborations or just a friendly
          chat!
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
