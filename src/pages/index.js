import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FaCoffee, FaPenNib, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnim from 'rc-scroll-anim';

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import { DuAn } from "../../data/DuAn";
import TaiSao from "../components/TaiSao";
import About from "../components/About";

import "../styles/main.scss";

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

const CardPortfolio = props => (
  <div className={`card-portfolio ${props.selected === 'all' ? 'active' : props.tags.includes(props.selected) ? 'active' : 'inactive'}`}>
    <div className="card-image">
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <span className="caption">
          <FaExternalLinkAlt />
        </span>
        <img src={props.thumbnail} alt={props.name} />
      </a>
    </div>
    <div className="card-title">
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        {props.name} <FaExternalLinkAlt />
      </a>
    </div>
    <div className="tags">
      {props.tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

class BlogIndex extends React.Component {
  state = {
    selected: 'all',
  }
  changeFilter = (e) => {
    this.setState({selected: e.currentTarget.dataset.type || 'all'})
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className="content">
          <div className="index-container">
            <div className="master">
              <div className="master-inner">
                <ScrollElement style={{ height: "100vh" }} id="Scroll-Pack">
                  <div id="sectionAbout">
                    <About />
                  </div>
                </ScrollElement>
                <section className="section section-portfolio" id="sectionPortfolio">
                  <div className="inner">
                    <div className="container">
                      <div className="section-header">
                        <h1>
                          <strong>Dự Án</strong>
                          <span className="second">Yêu Thích</span>
                        </h1>
                      </div>
                      <div className="section-body">
                        <div className="navbar navbar-expand-lg navbar-light navbar-filter">
                          <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className={this.state.selected === 'all' && 'active'}>
                                <a data-type='all'  onClick={this.changeFilter}>All</a>
                              </li>
                              <li className={this.state.selected === 'design' && 'active'}>
                                <a  data-type='design' onClick={this.changeFilter}>Design</a>
                              </li>
                              <li className={this.state.selected === 'css' && 'active'}>
                                <a data-type='css' onClick={this.changeFilter}>HTML/CSS</a>
                              </li>
                              <li className={this.state.selected === 'wordpress' && 'active'}>
                                <a data-type='wordpress' onClick={this.changeFilter}>Wordpress</a>
                              </li>
                              <li className={this.state.selected === 'reactjs' && 'active'}>
                                <a data-type='reactjs' onClick={this.changeFilter}>React JS</a>
                              </li>
                              <li className={this.state.selected === 'other' && 'active'}>
                                <a data-type='other' onClick={this.changeFilter}>Khác</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card-portfolio">
                              <div className="card-image">
                                <img src="images/add-project.jpg" />
                              </div>
                              <div className="card-title">
                                <button className="btn btn-primary">
                                  Thêm dự án của bạn ?
                                </button>
                              </div>
                            </div>
                          </div>
                          {Object.keys(DuAn).map(name => {
                            return (
                              <div key={name} className="col-sm-4">
                                <CardPortfolio selected={this.state.selected} {...DuAn[name]} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <TaiSao />               
              </div>
            </div>
          </div>
          <div className="copy-right">
            <small>© 2018 luubinhan</small>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex