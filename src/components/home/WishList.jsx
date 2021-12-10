/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import { imgs } from '../../ultis/randomImg';

export const WishList = ({places}) => {
    return (
        <div className="discount-zone landing container wide3" style={{padding: '0 15px'}}>
            <h1 className="heading">
                <span>Các điểm đến được yêu thích</span>
                <span><i className="fas fa-arrow-left hide" /></span>
                <span><i className="fas fa-arrow-right" /></span>
            </h1>
            <div className="row">
                {
                    places.map((value, key) => {
                        return (
                            <div className="col-4" key={key}>
                                <div className="half-height" style={{ backgroundImage: `url(${value.image_link})` }}>
                                    <div className="discount-value">55% Off</div>
                                    <Link to={"/tourlist/place/" + value.place_id} className="destination-desc">
                                        <div>
                                            <h3>{value.place_name}</h3>
                                            <div className="link-button">
                                                <span><i className="fas fa-arrow-right" /></span>
                                            </div>
                                        </div>
                                        <p>{value.place_desc}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className="col-4">
                    <div className="full-height" style={{ backgroundImage: 'url(/assets/images/landing/content1.png)' }}>
                        <div className="discount-value">25% Off</div>
                        <Link to="/tourlist" className="destination-desc">
                            <div>
                                <h3>Hội An</h3>
                                <div className="link-button">
                                    <span><i className="fas fa-arrow-right" /></span>
                                </div>
                            </div>
                            <p>Vẻ đẹp thời gian ngưng đọng</p>
                        </Link>
                    </div>
                </div> */}
                {/* <div className="col-12">
                    <div className="row"> */}
                        {/* <div className="col-4">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content2.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <Link to="/tourlist" className="destination-desc">
                                    <div>
                                        <h3>Hạ Long</h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Kỳ quan thiên nhiên thế giới</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content3.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <Link to="/tourlist" className="destination-desc">
                                    <div>
                                        <h3>Hà Nội </h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Nghìn năm văn hiến</p>
                                </Link>
                            </div>
                        </div> */}
                    {/* </div>
                </div> */}
                {/* <div className="col-4">
                    <div className="row">
                        
                        <div className="col-12">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content5.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <Link to="/tourlist" className="destination-desc">
                                    <div>
                                        <h3>Hội An</h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Vẻ đẹp thời gian ngưng đọng</p>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div> */}
                
            </div>
        </div>

    );
};
