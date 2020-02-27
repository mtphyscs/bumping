import React from "react";
import {FacebookShareButton, TwitterShareButton} from "react-share";
import { TwitterIcon, FacebookIcon } from "react-share";
import './Footer.css'



class Footer extends React.Component {
    render() {
        return (
            <div>
                <div>
        <footer className="footer">
          <br></br>
          <div className="content has-text-centered">
            <FacebookShareButton
              children=""
              url=" https://github.com"
              round="true"
            >
              <FacebookIcon round="true"></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton
              children=""
              url=" https://github.com"
              round="true"
            >
              <TwitterIcon round="true"></TwitterIcon>
            </TwitterShareButton>
            <br></br>
          </div>
        </footer>
      </div>
            </div>
        );
    }
}

export default Footer;