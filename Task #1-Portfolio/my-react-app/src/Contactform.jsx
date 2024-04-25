import React from 'react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to backend or display a success message)
    alert('Form submitted!');
  };

  return (
    <div className="contact-form-container">
      <h3>Contact Me</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
