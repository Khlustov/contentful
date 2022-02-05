import './bigLinkContainer.less';

import React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const BigLinkContainer = ({ image, link }) => {
    const img = getImage(image)

    return (
        <div className="big-link">
            <Link to={link}>
                <GatsbyImage alt="image" image={img} className="card-image"/>
            </Link>
        </div>
    )
}

export default BigLinkContainer;