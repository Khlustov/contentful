import './bigLinkContainer.less';

import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const BigLinkContainer = ({ image, link }) => {
    const img = getImage(image)

    return (
        <div className="big-link">
            <a href={link}>
                <GatsbyImage alt="image" image={img} className="card-image"/>
            </a>
        </div>
    )
}

export default BigLinkContainer;