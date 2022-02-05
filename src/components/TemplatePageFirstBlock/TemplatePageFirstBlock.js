import './templatePageFirstBlock.less';

import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const TemplatePageFirstBlock = ({
    title,
    firstImage,
    secondImage,
    thirdImage
  }) => {
    const firstImg = getImage(firstImage);
    const secondImg = getImage(secondImage);
    const thirdImg = getImage(thirdImage);

    return (
        <div className="first-block-wrapper">
            <div className="first-block-left-section">
                <span className="first-block-left-section-title">7 stars experience with Canva</span>
                <div className="first-block-left-section-label">
                    <div className="label-container">
                        {title}
                    </div>
                </div>
            </div>
            <div className="first-block-right-section">
                <div className="first-image-container">
                    <GatsbyImage alt="picture" image={firstImg} className="image"/>
                </div>
                <div className="second-image-container">
                    <GatsbyImage alt="picture" image={secondImg} className="image"/>
                </div>
                <div className="third-image-container">
                    <GatsbyImage alt="picture" image={thirdImg} className="image"/>
                </div>
            </div>
        </div>
    )
};

export default TemplatePageFirstBlock;