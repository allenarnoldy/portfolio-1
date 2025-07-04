import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 fade-in">Get In Touch</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 fade-in delay-1">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for project inquiries, collaborations, or just to say hello!
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-indigo-600 mr-4 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:allen@example.com" className="text-gray-600 hover:text-indigo-600 transition">
                    allen@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-indigo-600 mr-4 mt-1">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-indigo-600 transition">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-indigo-600 mr-4 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {["linkedin-in", "github", "twitter", "dribbble"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 fade-in delay-2">
            <form className="space-y-4">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
