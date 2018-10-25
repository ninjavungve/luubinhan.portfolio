import React, { Component } from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaCodepen
} from "react-icons/fa";
import {StatefulToolTip} from 'react-portal-tooltip';
import "./UserLinks.css";

const style = {
  style: {
    boxShadow: "none",
    background: '#f47631'
  },
  arrowStyle: {
    borderColor: false,
    color: "#f47631"
  }
};

class UserLinks extends Component {
  renderIcon = name => {
    switch (name) {
      case "github":
        return <FaGithubSquare />;
      case "linkedin":
        return <FaLinkedin />;
      case "twitter":
        return <FaTwitterSquare />;
      case "codepen":
        return <FaCodepen />;
      default:
        return null;
    }
  };
  getLinkElements() {
    const { userLinks } = this.props.config;
    return userLinks.map(link => (
      <a
        title={link.label}
        aria-label={link.label}
        key={link.label}
        target="_blank"
        rel="noopener noreferrer"
        href={link.url}
      >
        <StatefulToolTip
          parent={this.renderIcon(link.iconClassName)}
          position="right"
          arrow="center"
          style={style}
        >
          <div className="my-tip">
            {link.label}
          </div>
        </StatefulToolTip>
      </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
