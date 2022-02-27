import './banner.less';

import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Banner = ({ bannerClassName, link, image }) => {
    const img = getImage(image)

    return (
        <div className={bannerClassName}>
            <a href={link} className="banner-link">
                <GatsbyImage image={img} alt="image" className="banner-image"/>
            </a>
        </div>
    )
};

export default Banner;