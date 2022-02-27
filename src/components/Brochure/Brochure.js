import './brochure.less';

import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Brochure = ({firstLink, secondLink}) => {
    const brochureData = [
        firstLink,
        secondLink
    ]

    return (
    <div className='brochure-wrapper'>
        <div className='brochure-title'>
            <span>Brochure example</span>
        </div>
        <div className='brochure-banners'>
            {brochureData.map(brochure => {
                const img = getImage(brochure.gatsbyImageData)

                return (
                    <a href={brochure.description}>
                        <GatsbyImage key={Math.random()} alt='image' image={img} className='brochure-image'/>
                    </a>
                )
            })}
        </div>
    </div>
    )
}

export default Brochure;