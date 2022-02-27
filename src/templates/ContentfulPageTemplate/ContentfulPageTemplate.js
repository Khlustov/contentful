import './contentfulPageTemplate.less';

import React from "react";
import Layout from "../../components/Layout/Layout";
import {graphql} from "gatsby";
import TemplatePageFirstBlock from "../../components/TemplatePageFirstBlock/TemplatePageFirstBlock";
import TemplatePageSocialSection from "../../components/TemplatePageSocialSection/TemplatePageSocialSection";
import TemplatePageBannersSection from "../../components/TemplatePageBannersSection/TemplatePageBannersSection";
import TemplatePageExternalPresentation from '../../components/TemplatePageExternalPresentation/TemplatePageExternalPresentation';
import TemplatePageInternalPresentation from '../../components/TemplatePageInternalPresentation/TemplatePageInternalPresentation';
import Swag from '../../components/Swag/Swag';
import Marketing from '../../components/Marketing/Marketing';
import Brochure from '../../components/Brochure/Brochure';

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
        <TemplatePageExternalPresentation
          firstLink={data.contentfulTemplate.externalPresentFirst}
          secondLink={data.contentfulTemplate.externalPresentSecond}
          thirdLink={data.contentfulTemplate.externalPrersentThird}
          fourthLink={data.contentfulTemplate.externalPresentFourth}
          fifthLink={data.contentfulTemplate.externalPresentFifth}
          sixthLink={data.contentfulTemplate.externalPresSixth}
        />
        <TemplatePageInternalPresentation
        firstLink={data.contentfulTemplate.internalPresentFirst}
        secondLink={data.contentfulTemplate.internalPresentSecond}
        thirdLink={data.contentfulTemplate.internalPresentThird}
        fourthLink={data.contentfulTemplate.internalPresentFourth}
        />
        <Swag
        slug={data.contentfulTemplate.slug}
        firstImage={data.contentfulTemplate.swagFirst}
        secondImage={data.contentfulTemplate.swagSecond}
        thirdImage={data.contentfulTemplate.swagThird}
        />
        <Marketing
        leftImage={data.contentfulTemplate.marketingFirst.gatsbyImageData}
        rightImage={data.contentfulTemplate.marketingSecond.gatsbyImageData}
        />
        <Brochure
        firstLink={data.contentfulTemplate.broshureFirst}
        secondLink ={data.contentfulTemplate.broshureSecond}
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
      externalPresentFirst {
        description
        gatsbyImageData
      }
      externalPresentSecond {
        description
        gatsbyImageData
      }
      externalPrersentThird {
        description
        gatsbyImageData
      }
      externalPresentFourth {
        description
        gatsbyImageData
      }
      externalPresentFifth {
        description
        gatsbyImageData
      }
      externalPresSixth {
        description
        gatsbyImageData
      } 
      internalPresentFirst {
        description
        gatsbyImageData
      }
      internalPresentSecond {
        description
        gatsbyImageData
      }
      internalPresentThird {
        description
        gatsbyImageData
      }
      internalPresentFourth {
        description
        gatsbyImageData
      }
      swagFirst {
        gatsbyImageData
      }
      swagSecond {
        gatsbyImageData
      }
      swagThird {
        gatsbyImageData
      }
      marketingFirst {
        gatsbyImageData
      }
      marketingSecond {
        gatsbyImageData
      }
      broshureFirst {
        description
        gatsbyImageData
      }
      broshureSecond {
        description
        gatsbyImageData
      }
    }
  }
`
