import './templatePageInternalPresentation.less';

import React from 'react';
import TemplatePageInternalBanner from './TemplatePageInternalBanner';


const TemplatePageInternalPresentation = ({
    firstLink,
    secondLink,
    thirdLink,
    fourthLink   
}) => {
    const bannersData = [
    firstLink,
    secondLink,
    thirdLink,
    fourthLink    
    ]   

    return (
        <div className='internal-presentation-wrapper'>
            <p className='internal-presentation-title'>Internal Presentation Templates</p>
            <div className='internal-presentation-big-banners'>
               {bannersData.map(banner => (
                   <TemplatePageInternalBanner
                   key={Math.random()}
                   image={banner.gatsbyImageData}
                   link={banner.description}
                   bannerClassName='internal-presentation-banner'
                   linkClassName='internal-presentation-banner-link'
                   imageClassName='internal-presentation-banner-image'
                   />
               ))} 
            </div>
        </div>
    )
}

export default TemplatePageInternalPresentation;