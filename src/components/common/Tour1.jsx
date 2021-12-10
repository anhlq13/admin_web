/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { convetVND } from '../../ultis/format';
import { imgs } from '../../ultis/randomImg';
export const Tour1 = ({ tour }) => {
    return (
        <div className="item">
            {/* <Link to={"/specific/" + tour.tour_id}> */}
                <div className="category-img" style={{ backgroundImage: `url(${tour.tour_bg_img})` }} />
                <div className="category-info">
                    <img src="./assets/images/landing/icon6.png" />
                    <div className="location">{tour.departure_place}</div>
                    <div className="cost-info">2N / 1Đ</div>
                </div>
                <div className="category-title">
                    <p>{tour.tour_title}</p>
                </div>
                <div className="rating">
                    <span><i className="fas fa-star" /></span>
                    <span className="value">{Math.floor(Math.random() * 2)+4}.0</span>
                    <span className="rating-quality">({Math.floor(Math.random() * 156) + 1} ratings)</span>
                </div>
                <span className="cost">{convetVND(tour.adult_price)}đ</span>
            {/* </Link> */}

        </div>

    );
};
