import './templatePageExternalPresentation.less';

import React from 'react';
import ExternalPresentationBigBanner from './ExternalPresentationBigBanner';

const TemplatePageExternalPresentation = ({
    firstLink,
    secondLink,
    thirdLink,
    fourthLink,
    fifthLink,
    sixthLink
}) => {
    const bannersData = [
    firstLink,
    secondLink,
    thirdLink,
    fourthLink,
    fifthLink,
    sixthLink
    ];  

    return (
        <div className='external-presentation-wrapper'>
            <p className='external-presentation-title'>External Presentation Templates</p>
            <div className='external-presentation-big-banners'>
                {bannersData.map(banner => (
                    <ExternalPresentationBigBanner 
                    key={Math.random()}
                    link={banner.description} 
                    image={banner.gatsbyImageData}
                    bannerClassName="external-presentation-big-banner" 
                    linkClassName="external-presentation-big-banner-link"
                    imageClassName="external-presentation-big-banner-image"
                    />
                ))}
            </div>
        </div>
    )
}

export default TemplatePageExternalPresentation;