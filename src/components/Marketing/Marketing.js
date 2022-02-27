import "./marketing.less";

import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Marketing = ({
    leftImage,
    rightImage
}) => {
    const leftImageData = getImage(leftImage)
    const rightImageData = getImage(rightImage)

    return (
    <div className="marketing-wrapper">
        <div className="marketing-left">
            <GatsbyImage alt="img" image={leftImageData} className='marketing-image'/>
        </div>
        <div className="marketing-mid">
            <span>Marketing material</span>
        </div>
        <div className="marketing-right">
            <GatsbyImage alt="img" image={rightImageData} className='marketing-image'/>
        </div>
    </div>
    )
}

export default Marketing;