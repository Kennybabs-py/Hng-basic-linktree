import Input from "components/Input";
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
              <Input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </div>
          </div>

          <div className="email__box"></div>

          <div className="message__box"></div>
        </form>
      </section>
    </main>
  );
}

export default ContactMe;
