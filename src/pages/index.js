import '../styles/global.less';
import '../styles/homePage.less';

import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout/Layout";

const Home = ({ data }) => {
    const links = data.allContentfulTemplate.nodes

  return (
      <Layout title="Home Page">
          <div className="home-page">
              <div className="links-container">
                  {links.map(link => (
                      <Link
                          to={`/${link.slug}`}
                          className="link"
                          key={link.title}
                      >
                          {link.title}
                      </Link>
                  ))}
              </div>
          </div>
      </Layout>
  )
}

export default Home;


export const query = graphql`
query HomePageQuery {
  allContentfulTemplate {
    nodes {
      title
      slug
    }
  }
}
`