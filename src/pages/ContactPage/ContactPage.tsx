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

  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const timer1 = setTimeout(() => {
      setFormStatus("Sent!");
      const timer2 = setTimeout(() => {
        setFormStatus("Send");
        clearTimeout(timer1);
        clearTimeout(timer2);
      }, 500);
    }, 1000);
  };

  function handleInput(event: { target: { name: any; value: any } }) {
    setForm((prevForm: Contact) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="contact-container">
      <h2 className="contact__title">CONTACT ME</h2>
      <form onSubmit={onSubmit} className="contact__form">
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
          onSubmit={onSubmit}
          type="submit"
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
