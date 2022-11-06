import { useState } from "react";

import Input from "components/Input";
import InputLabel from "components/Label";
import Textarea from "components/Textarea";

import "./styles.scss";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <main className="contact__me">
      <section className="header">
        <h2>Contact Me</h2>

        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </section>

      <section className="form__container">
        <form>
          <div className="names__box">
            <div>
              <InputLabel htmlFor="firstName" content="First name" />

              <Input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <InputLabel htmlFor="lastName" content="Last name" />

              <Input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="email__box">
            <InputLabel htmlFor="email" content="Email" />

            <Input
              type="email"
              placeholder="yourname@email.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="message__box">
            <InputLabel htmlFor="message" content="Message" />

            <Textarea
              id="message"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox__box">
            <Input
              type="checkbox"
              name="agreement"
              id="agreement"
              value="agreed"
              onChange={handleChange}
            />
            <InputLabel
              htmlFor="agreement"
              content="You agree to provide your data to Kehinde Babalola who may contact you."
            />
          </div>

          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
