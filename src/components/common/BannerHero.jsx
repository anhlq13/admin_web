/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { SearchTour } from '.';

export const BannerHero = () => {
    return (
        <div className="banner container wide">
            <img className="main-img" src="./assets/images/landing/banner.jpg" />
            <img src="./assets/images/landing/cloud2.png" className="sub-img1" />
            <img src="./assets/images/landing/cloud3.png" className="sub-img2" />
            <div className="banner-title">
                <h1>Khám phá <br /> những <br /> trải nghiệm mới</h1>
            </div>
                <SearchTour />
        </div>
    );
};
