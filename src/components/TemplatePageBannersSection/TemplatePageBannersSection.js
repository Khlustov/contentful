import './templatePageBannersSection.less';

import React from "react";
import Banner from "../Banner/Banner";

const TemplatePageBannersSection = () => {

    return (
        <div className="banner-section-wrapper">
            <div className="banner-section-side">
                <Banner bannerClassName="big-banner"/>
                <div className="banner-section-title">
                    <span>Social Banners</span>
                </div>
                <Banner bannerClassName="big-banner"/>
            </div>
            <div className="banner-section-side">
                <Banner bannerClassName="medium-banner"/>
                <Banner bannerClassName="small-banner"/>
                <Banner bannerClassName="medium-banner"/>
                <Banner bannerClassName="small-banner"/>
            </div>
        </div>
    )
};

export default TemplatePageBannersSection;