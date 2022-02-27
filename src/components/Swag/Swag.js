import './swag.less';

import React from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Swag = ({
    slug,
    firstImage,
    secondImage,
    thirdImage,
}) => {
    const images = [
        firstImage,
        secondImage,
        thirdImage
    ];

    return (
        <div className='swag-wrapper'>
            <div className='swag-title'>
                <span>{`${slug} swag`}</span>
            </div>
            <div className='swag-images'>
                {images.map(img => {
                    const pic = getImage(img)

                    return (
                        <GatsbyImage image={pic} alt='img' key={Math.random()} className='swag-image'/>
                    )
                })}
            </div>
        </div>
    )
};

export default Swag;