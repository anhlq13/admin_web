import React from 'react';
import { Link } from 'react-router-dom';
import { imgs } from '../../ultis/randomImg';

export const Tour2 = ({tour}) => {
    return (
        <div className="item">
            <Link to={"/specific/" + tour.tour_id}>
                <div className="item-img" style={{ backgroundImage: `url(${tour.tour_bg_img})` }} />
                <h1 className="item-name">{tour.tour_title}</h1>
                <p className="item-passengers">Đã có hơn {Math.floor(Math.random() * 10)}00.000 lượt khách</p>
            </Link>
        </div>

    );
}; 
