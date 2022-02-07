import './banner.less';

import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";

const Banner = ({ bannerClassName, link, image }) => {

    return (
        <div className={bannerClassName}>
            <a href={link} className="banner-link">
                <GatsbyImage image={image} alt="image" className="banner-image"/>
            </a>
        </div>
    )
};

export default Banner;