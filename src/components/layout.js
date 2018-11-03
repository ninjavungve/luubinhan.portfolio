import React from 'react'
import { StatefulToolTip } from "react-portal-tooltip";
import { Link } from "react-scroll";
import Helmet from 'react-helmet';
import { FaCoffee, FaPenNib, FaExternalLinkAlt } from "react-icons/fa";

import logo from "../../static/logos/favi32.png";
import config from "../../data/SiteConfig";
import { DuAn } from "../../data/DuAn";
import UserLinks from "../components/UserLinks/UserLinks.jsx";
import { rhythm, scale } from '../utils/typography'

const Logo = (
  <span className="logo">
    <Link
      activeClass="active"
      to="sectionPortfolio"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <img src={logo} alt={config.siteTitle} />
    </Link>
  </span>
);

const IconCafe = (
  <span className="icon-sidebar">
    <Link
      activeClass="active"
      to="sectionAbout"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <FaCoffee />
    </Link>
  </span>
);
const style = {
  style: {
    boxShadow: "none",
    background: "#f47631"
  },
  arrowStyle: {
    borderColor: false,
    color: "#f47631"
  }
};

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div className="layout">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css?family=Chakra+Petch:400,700&amp;subset=vietnamese" rel="stylesheet" />
        </Helmet>
        <div className="sidebar">
          <div className="inner">
            <div className="top-section">
              <StatefulToolTip
                parent={Logo}
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">Quay lên đầu trang</div>
              </StatefulToolTip>
            </div>
            <div className="middle-section">
              <StatefulToolTip
                parent={
                  <a href="/blog" className="icon-sidebar">
                    <FaPenNib />
                  </a>
                }
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">Blog của mình</div>
              </StatefulToolTip>             
            </div>
            <div className="bottom-section">
              <UserLinks config={config} />
            </div>
          </div>
        </div>
        {children}
      </div>
    )
  }
}

export default Template
