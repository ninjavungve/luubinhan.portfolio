import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className='master'>
            <div className="master-inner">
              <section className="section section-portfolio">
                <div className="inner">
                  <div className="container">
                    <div className="section-header">
                      <h1>Home</h1>
                    </div>
                    <div className="section-body">
                      <div className="row">
                        <div className="col-sm">
                          <div className="card-portfolio">
                            <div className="card-image">
                            <img src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-1.jpg" alt=""/>
                            </div>
                            <div className="card-title">
                              Gourmet / Restaurant
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="card-portfolio">
                            <div className="card-image">
                              <img src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-2.jpg"/>
                            </div>
                            <div className="card-title">
                              Gourmet / Restaurant
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="card-portfolio">
                            <div className="card-image">
                              <img src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-3.jpg" />
                            </div>
                            <div className="card-title">
                              Coffee Shop
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="scroll-top-wrapper">
          <a className="scroll_top" href="#top">
            <i className="ion-android-arrow-dropup-circle"></i>
          </a>  
        </div>  
        <div id="footer">
          <footer className="footer">
            <section className="footer-inner">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <small>
                    Email: <a href="mailto:luubinhan1989@gmail.com">luubinhan1989@gmail.com</a>
                    </small>
                  </div>
                  <div className="col text-right">
                    <small>© Copyright 2018 luubinhan, All rights reserved</small>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
