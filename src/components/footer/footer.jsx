import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="#instagram">
          <BsInstagram className="social" />
        </a>
        <a href="#facebook">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="#dribble">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href="#youtube">
          <TiSocialYoutube className="social" />
        </a>

        <a href="#github">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;