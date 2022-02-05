import './smallLinkContainer.less';

import React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const SmallLinkContainer = ({ image, link }) => {
    const img = getImage(image)

    return (
        <div className="small-link">
            <Link to={link}>
                <GatsbyImage alt="image" image={img} className="card-image"/>
            </Link>
        </div>
    )
}

export default SmallLinkContainer;