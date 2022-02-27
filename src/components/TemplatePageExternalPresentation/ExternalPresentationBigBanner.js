import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ExternalPresentationBigBanner = ({ bannerClassName, link, image, linkClassName, imageClassName }) => {
    const img = getImage(image)

    return (
        <div className={bannerClassName}>
            <a href={link} className={linkClassName}>
                <GatsbyImage image={img} alt="image" className={imageClassName}/>
            </a>
        </div>
    )
};

export default ExternalPresentationBigBanner;