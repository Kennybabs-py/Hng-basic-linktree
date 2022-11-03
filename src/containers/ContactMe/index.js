import Input from "components/Input";
import InputLabel from "components/Label";
import "./styles.scss";

function ContactMe() {
  return (
    <main className="contact__me">
      <section className="header">
        <h2>Contact Me</h2>

        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </section>

      <section className="form__container">
        <form action="">
          <div className="names__box">
            <div>
              <InputLabel htmlFor="firstName" content="First name" />

              <Input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
                name="firstName"
              />
            </div>

            <div>
              <InputLabel htmlFor="lastName" content="Last name" />

              <Input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                name="lastName"
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
            />
          </div>

          <div className="message__box"></div>
        </form>
      </section>
    </main>
  );
}

export default ContactMe;
