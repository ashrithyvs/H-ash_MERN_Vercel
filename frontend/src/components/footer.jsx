import { ReactComponent as Facebook } from "./images/facebook.svg";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";

function Footer() {
  return (
    <div className="container mx-auto">
      <span
        className="text-center font-weight-lighter"
        style={{
          fontFamily: "Exo, sans-serif",
          fontSize: "37px",
          letterSpacing: "7px",
          display: "block",
        }}
      >
        #h-ash
      </span>
      <div className="container d-flex col-md-3 justify-content-between mt-2  ">
        <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
          <Facebook />
        </a>
        <a
          target="_blank"
          href="https://github.com/ashrithyvs"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/AshrithYakkali"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ashrith-yakkali-a60379191"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </div>
      <p
        className="text-center mt-2 mb-0 pb-3 text-muted"
        style={{ fontSize: "80%" }}
      >
        © 2021 #h-ash. Designed & Developed by Ashrith Yakkali
      </p>
    </div>
  );
}

export default Footer;
