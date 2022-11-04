import { Contact } from "models";
import React, { FC, useState } from "react";
import "./ContactPage.scss";

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  } as Contact);

  function handleInput(event: { target: { name: any; value: any } }) {
    setForm((prevForm: Contact) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  }

  const [status] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <h2 className="contact__title">CONTACT ME</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__first-line-wrapper">
          <input
            placeholder="Name"
            className="contact__form-control"
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
            required
          />
          <input
            placeholder="Email"
            className="contact__form-control"
            type="email"
            id="email"
            name="email"
            onChange={handleInput}
            required
          />
        </div>
        <textarea
          placeholder="Message"
          className="contact__textarea"
          id="message"
          name="message"
          onChange={handleInput}
          required
        />
        <button
          className="contact__submit-btn"
          onSubmit={handleSubmit}
          type="submit"
        >
          {status}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
