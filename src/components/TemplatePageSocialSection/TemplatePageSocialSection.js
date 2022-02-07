import './templatePageSocialSection.less';

import React from "react";
import SocialLinksBlock from "../SocialLinksBlock/SocialLinksBlock";

const TemplatePageSocialSection = ({
    firstLink,
    secondLink,
    thirdLink,
    fourthLink
  }) => {

    return (
        <div className="section-wrapper">
            <SocialLinksBlock
                firstLink={firstLink}
                secondLink={secondLink}
                thirdLink={thirdLink}
                fourthLink={fourthLink}
            />
            <div className="social-section-title-container">
                <span className="social-section-title">Social Media Posts</span>
            </div>
            <SocialLinksBlock
                firstLink={firstLink}
                secondLink={secondLink}
                thirdLink={thirdLink}
                fourthLink={fourthLink}
            />
        </div>
    )
};

export default TemplatePageSocialSection;