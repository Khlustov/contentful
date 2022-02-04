import '../styles/global.less';
import '../styles/homePage.less';

import React from "react"
import {graphql, Link} from "gatsby";

const Home = ({ data }) => {
    const links = data.allContentfulTemplate.nodes

  return (
      <div className="home-page">
        <div className="links-container">
            {links.map(link => (
                <Link to={`/${link.slug}`} className="link">{link.title}</Link>
            ))}
        </div>
      </div>
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