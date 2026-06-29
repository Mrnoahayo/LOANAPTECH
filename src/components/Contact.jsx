import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log("Form submitted:", formData);

    alert("Message sent successfully!");

    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out anytime.</p>

        <div className="contact-info">
          <div className="info-item">
            <strong>Email:</strong> support@loanaptech.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> + (555) 123-4567
          </div>
          <div className="info-item">
            <strong>Hours:</strong> Mon-Fri, 9am - 5pm EST
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea> <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;