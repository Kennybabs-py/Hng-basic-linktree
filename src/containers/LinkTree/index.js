import "./styles.css";

import profileImage from "assets/profile_img.webp";
import SlackIcon from "assets/slack.svg";
import GithubIcon from "assets/github.svg";
import BackIcon from "assets/BackIcon.svg";

function LinkTree() {
  return (
    <main>
      <section className="back">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={BackIcon} alt="back" />
        </a>
      </section>

      {/* profile section */}
      <section className="profile">
        <img src={profileImage} alt="user" id="profile__img" />
        <p id="twitter">Kehinde Babalola</p>

        {/* slack username */}
        <p id="slack" hidden>
          kennybabs
        </p>
      </section>

      {/* links to services */}
      <section className="link">
        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
          id="books"
        >
          <h2>Zuri Books</h2>
          <p>Your stop-shop for books on coding</p>
        </a>

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=kennybabs"
          target="_blank"
          rel="noopener noreferrer"
          id="book__python"
        >
          Grab a copy of books on basics of python language
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
          id="pitch"
        >
          Background check for programmers{" "}
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
          id="book__design"
        >
          Get your copy of Zuri's limited edition book on design
        </a>
      </section>

      {/* slack and github logos */}
      <section className="logos">
        <img src={SlackIcon} alt="slack" />
        <img src={GithubIcon} alt="github" />
      </section>
    </main>
  );
}

export default LinkTree;
