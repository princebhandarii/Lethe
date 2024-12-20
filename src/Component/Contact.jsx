import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs library

function ContactUs() {
  const [formData, setFormData] = useState({
    user_name: "",
    email_id: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track the form submission state
  const [message, setMessage] = useState(""); // Track success or error message

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email_id)) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    for (const key in formData) {
      if (!formData[key]) {
        setMessage("Please fill in all fields.");
        setIsSubmitting(false);
        return;
      }
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_7dzqstm", // Replace with your EmailJS service ID
        "template_ygeeigq", // Replace with your EmailJS template ID
        e.target, // The form element
        "5Fzhb45Zp1gGGcW1M" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message has been sent successfully!");
          setIsSubmitting(false); // Reset submitting state
          setFormData({
            user_name: "",
            email_id: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          setMessage("There was an error sending your message.");
          setIsSubmitting(false); // Reset submitting state
        }
      );
  };

  return (
    <div>
      {/* Header Section */}
      <div className="text-black py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-center text-2xl font-bold mb-8">
            Feel Free to Contact Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name *"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Your Email *"
                    value={formData.email_id}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Machine Name *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Requirement"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-lg w-full mt-4"
                  rows="5"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-red-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {/* Display message */}
              {message && (
                <p
                  className={`mt-4 ${
                    message.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="flex items-start space-x-4 mb-4">
                <i className="fas fa-map-marker-alt text-red-500 text-xl"></i>
                <p>
                  Road No-1, chokha wala compound, B/23, Jawahar road, Udhana
                  GIDC, Udhna Udhyog Nagar, Udhana, Surat, Gujarat 394210
                </p>
              </div>
              <div className="flex items-start space-x-4 mb-4">
                <i className="fas fa-phone text-red-500 text-xl"></i>
                <p>+91-9925419535</p>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-red-500 text-xl"></i>
                <p>db303268@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="overflow-hidden shadow-lg rounded-lg">
            <iframe
              title="Google Map"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6400090116413!2d72.84817657468423!3d21.166719980517374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fd482321a43%3A0x1efc7684673fd187!2sM%26D%20Engineering!5e0!3m2!1sen!2sin!4v1734601350580!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
