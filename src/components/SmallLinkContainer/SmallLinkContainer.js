import './smallLinkContainer.less';

import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const SmallLinkContainer = ({ image, link }) => {
    const img = getImage(image)

    return (
        <div className="small-link">
            <a href={link}>
                <GatsbyImage alt="image" image={img} className="card-image"/>
            </a>
        </div>
    )
}

export default SmallLinkContainer;