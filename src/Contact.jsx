import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Page</h1>
      <div className="contact-container">
        {/* Contact Section */}
        <div className="form-section">
          <h2>Contact</h2>
          <form>
            <label htmlFor="contact">Contact:</label>
            <input type="text" id="contact" placeholder="Your contact info" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your email" />

            <label htmlFor="instagram">Instagram:</label>
            <input type="text" id="instagram" placeholder="Instagram handle" />

            <label htmlFor="location">Location:</label>
            <textarea
              id="location"
              rows="3"
              placeholder="Your location"
            ></textarea>
          </form>
        </div>

        {/* Feedback Section */}
        <div className="form-section">
          <h2>Feedback</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your name" />

            <label htmlFor="feedbackEmail">Email:</label>
            <input type="email" id="feedbackEmail" placeholder="Your email" />

            <label htmlFor="reviews">Reviews:</label>
            <textarea
              id="reviews"
              rows="3"
              placeholder="Your feedback"
            ></textarea>

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" placeholder="Your phone number" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
