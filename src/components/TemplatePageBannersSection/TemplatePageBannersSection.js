import './templatePageBannersSection.less';

import React from "react";
import Banner from "../Banner/Banner";
import {getImage} from "gatsby-plugin-image";

const TemplatePageBannersSection = ({
    firstLink,
    secondLink,
    thirdLink,
    fourthLink,
    fifthLink,
    sixthLink
  }) => {
    const firstBannerImage = getImage(firstLink.gatsbyImageData);
    const secondBannerImage = getImage(secondLink.gatsbyImageData);
    const thirdBannerImage = getImage(thirdLink.gatsbyImageData);
    const fourthBannerImage = getImage(fourthLink.gatsbyImageData);
    const fifthBannerImage = getImage(fifthLink.gatsbyImageData);
    const sixthLBannerImage = getImage(sixthLink.gatsbyImageData);

    return (
        <div className="banner-section-wrapper">
            <div className="banner-section-side">
                <Banner bannerClassName="big-banner" image={firstBannerImage} link={fifthLink.description}/>
                <div className="banner-section-title">
                    <span>Social Banners</span>
                </div>
                <Banner bannerClassName="big-banner" image={secondBannerImage} link={secondLink.description}/>
            </div>
            <div className="banner-section-side">
                <Banner bannerClassName="medium-banner" image={thirdBannerImage} link={thirdLink.description}/>
                <Banner bannerClassName="small-banner" image={fourthBannerImage} link={fourthLink.description}/>
                <Banner bannerClassName="medium-banner" image={fifthBannerImage} link={fifthLink.description}/>
                <Banner bannerClassName="small-banner" image={sixthLBannerImage} link={sixthLink.description}/>
            </div>
        </div>
    )
};

export default TemplatePageBannersSection;