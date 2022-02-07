import './contentfulPageTemplate.less';

import React from "react";
import Layout from "../../components/Layout/Layout";
import {graphql} from "gatsby";
import TemplatePageFirstBlock from "../../components/TemplatePageFirstBlock/TemplatePageFirstBlock";
import TemplatePageSocialSection from "../../components/TemplatePageSocialSection/TemplatePageSocialSection";
import TemplatePageBannersSection from "../../components/TemplatePageBannersSection/TemplatePageBannersSection";

const ContentfulPageTemplate = ({ data }) => (
    <Layout title={data.contentfulTemplate.slug}>
        <TemplatePageFirstBlock
          title={data.contentfulTemplate.title}
          firstImage={data.contentfulTemplate.titleSectionFirstImage.gatsbyImageData}
          secondImage={data.contentfulTemplate.titleSectionSecondImage.gatsbyImageData}
          thirdImage={data.contentfulTemplate.titleSectionThirdImage.gatsbyImageData}
        />
        <TemplatePageSocialSection
          firstLink={data.contentfulTemplate.socialSectionFirstLink}
          secondLink={data.contentfulTemplate.socialSectionSecondLink}
          thirdLink={data.contentfulTemplate.socialSectionThirdLink}
          fourthLink={data.contentfulTemplate.socialSectionFourthLink}
        />
        <TemplatePageBannersSection
          firstLink={data.contentfulTemplate.bannerSectionFirstLink}
          secondLink={data.contentfulTemplate.bannerSectionSecondLink}
          thirdLink={data.contentfulTemplate.bannerSectionThirdLink}
          fourthLink={data.contentfulTemplate.bannerSectionFourthLink}
          fifthLink={data.contentfulTemplate.bannerSectionFifthLink}
          sixthLink={data.contentfulTemplate.bannerSectionSixthLink}
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
      socialSectionFirstLink {
        description
        gatsbyImageData
      }
      socialSectionSecondLink {
        description
        gatsbyImageData
      }
      socialSectionThirdLink {
        description
        gatsbyImageData
      }
      socialSectionFourthLink {
        description
        gatsbyImageData
      }  
      bannerSectionFirstLink {
        description
        gatsbyImageData
      }
      bannerSectionSecondLink {
        description
        gatsbyImageData
      }
      bannerSectionThirdLink {
        description
        gatsbyImageData
      }
      bannerSectionFourthLink {
        description
        gatsbyImageData
      }
      bannerSectionFifthLink {
        description
        gatsbyImageData
      }
      bannerSectionSixthLink {
        description
        gatsbyImageData
      }   
    }
  }
`
