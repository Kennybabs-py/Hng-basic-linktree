import "./styles.css";
import zuri_logo from "assets/zuri_logo.svg";
import I4G_logo from "assets/I4G.svg";

function Footer() {
  return (
    <footer>
      <section className="container">
        <img src={zuri_logo} alt="Zuri internship" />

        <span>HNG Internship 9 Frontend Task</span>

        <img src={I4G_logo} alt="Ingressive for good" />
      </section>
    </footer>
  );
}

export default Footer;
