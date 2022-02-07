import './socialLinksBlock.less';

import React from "react";
import SmallLinkContainer from "../SmallLinkContainer/SmallLinkContainer";
import BigLinkContainer from "../BigLinkContainer/BigLinkContainer";

const SocialLinksBlock = ({
    firstLink,
    secondLink,
    thirdLink,
    fourthLink
  }) => {

    return (
        <div className="social-links-block">
            <div className="block-side">
                <SmallLinkContainer image={firstLink.gatsbyImageData} link={firstLink.description}/>
                <BigLinkContainer image={secondLink.gatsbyImageData} link={secondLink.description}/>
            </div>
            <div className="block-side">
                <BigLinkContainer image={thirdLink.gatsbyImageData} link={thirdLink.description}/>
                <SmallLinkContainer image={fourthLink.gatsbyImageData} link={fourthLink.description}/>
            </div>
        </div>
    )
}

export default SocialLinksBlock;