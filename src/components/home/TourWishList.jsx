/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { convetVND } from '../../ultis/format';
import { imgs } from '../../ultis/randomImg';

export const TourWishList = ({ typs = [] }) => { 
    console.log('typs', typs);
    return (
        <div className="discover-pot container wide3">
            <h1 className="heading">
                <span>Các tour được yêu thích</span>
                <span><i className="fas fa-arrow-left" /></span>
                <span><i className="fas fa-arrow-right" /></span>
            </h1>
            <div className="row">
                {  typs.length > 0 &&
                    typs.map((tour, key) => {
                        return (
                            <div className="col-3" key={key}>
                                <Link to={"/tourlist/type/"+tour.type_id} className="item">
                                    <div className="item-img" style={{ backgroundImage: `url(${tour.type_img})` }} />
                                    <span>
                                        <h1 className="item-name">{tour.type_name}</h1>
                                        <p className="item-passengers">2 ngày, 3 đêm</p>
                                        <div className="rating fav-tour">
                                            <span><i className="fas fa-star" /></span> 
                                            <span className="value">{Math.floor(Math.random() * 2)+4}.0</span>
                                            <span className="rating-quality">({Math.floor(Math.random() * 156) + 1} ratings)</span>
                                        </div>
                                    </span>
                                    <div className="tour-cost">
                                        <div className="cur-cost">{convetVND(1000000)}đ</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};
