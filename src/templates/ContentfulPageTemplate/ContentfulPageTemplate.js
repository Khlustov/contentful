import './contentfulPageTemplate.less';

import React from "react";
import Layout from "../../components/Layout/Layout";
import {graphql} from "gatsby";
import TemplatePageFirstBlock from "../../components/TemplatePageFirstBlock/TemplatePageFirstBlock";

const ContentfulPageTemplate = ({ data }) => (
    <Layout title={data.contentfulTemplate.slug}>
        <TemplatePageFirstBlock
          title={data.contentfulTemplate.title}
          firstImage={data.contentfulTemplate.titleSectionFirstImage.gatsbyImageData}
          secondImage={data.contentfulTemplate.titleSectionSecondImage.gatsbyImageData}
          thirdImage={data.contentfulTemplate.titleSectionThirdImage.gatsbyImageData}
        />
    </Layout>
)

export default ContentfulPageTemplate;

export const query = graphql`
  query ContentfulPageTemplateQuery($slug: String) {
    contentfulTemplate(slug: {eq: $slug}) {            
      slug
      title
      titleSectionFirstImage {
        gatsbyImageData
      }
      titleSectionSecondImage {
        gatsbyImageData
      }
      titleSectionThirdImage {
        gatsbyImageData
      }      
    }
  }
`
