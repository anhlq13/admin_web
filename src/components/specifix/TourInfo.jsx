/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { convetVND } from '../../ultis/format';

export const TourInfo = ({tour}) => {
    return (
        tour?
        <div className="tour-info container">
            <div className="row">
                <div className="col-6">
                    <div className="tour-about">
                        <h3 className="title">{tour.tour_title}</h3>
                        {
                            tour.tour_desc
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="tour-detail">
                        <h2 className="tour-cost">{convetVND(tour.adult_price)} vnd / người lớn</h2>
                        <h2 className="tour-cost">{convetVND(tour.kid_price)} vnd / trẻ em</h2>

                        <div className="rating">
                            <span><i className="fas fa-star" /></span>
                            <span className="value">{Math.floor(Math.random() * 2)+4}.0</span>
                            <span className="rating-quality">({Math.floor(Math.random() * 156) + 1} đánh giá)</span>
                        </div>
                        <div className="detail-board">
                            <div className="row">
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.0488 2H15.0488V1C15.0488 0.734784 14.9435 0.48043 14.7559 0.292893C14.5684 
                                          0.105357 14.314 0 14.0488 0C13.7836 0 13.5293 0.105357 13.3417 0.292893C13.1542 
                                          0.48043 13.0488 0.734784 13.0488 1V2H7.04883V1C7.04883 0.734784 6.94347 0.48043 
                                          6.75593 0.292893C6.5684 0.105357 6.31404 0 6.04883 0C5.78361 0 5.52926 0.105357 
                                          5.34172 0.292893C5.15419 0.48043 5.04883 0.734784 5.04883 1V2H3.04883C2.25318 2 1.49012 
                                          2.31607 0.927508 2.87868C0.364899 3.44129 0.0488281 4.20435 0.0488281 5V17C0.0488281 17.7956 
                                          0.364899 18.5587 0.927508 19.1213C1.49012 19.6839 2.25318 20 3.04883 20H17.0488C17.8445 20 
                                          18.6075 19.6839 19.1701 19.1213C19.7328 18.5587 20.0488 17.7956 20.0488 17V5C20.0488 4.20435 
                                          19.7328 3.44129 19.1701 2.87868C18.6075 2.31607 17.8445 2 17.0488 2ZM18.0488 17C18.0488 17.2652 
                                          17.9435 17.5196 17.7559 17.7071C17.5684 17.8946 17.314 18 17.0488 18H3.04883C2.78361 18 2.52926 
                                          17.8946 2.34172 17.7071C2.15419 17.5196 2.04883 17.2652 2.04883 17V10H18.0488V17ZM18.0488 8H2.04883V5C2.04883 
                                          4.73478 2.15419 4.48043 2.34172 4.29289C2.52926 4.10536 2.78361 4 3.04883 4H5.04883V5C5.04883 5.26522 5.15419 
                                          5.51957 5.34172 5.70711C5.52926 5.89464 5.78361 6 6.04883 6C6.31404 6 6.5684 5.89464 6.75593 5.70711C6.94347 
                                          5.51957 7.04883 5.26522 7.04883 5V4H13.0488V5C13.0488 5.26522 13.1542 5.51957 13.3417 5.70711C13.5293 5.89464 
                                          13.7836 6 14.0488 6C14.314 6 14.5684 5.89464 14.7559 5.70711C14.9435 5.51957 15.0488 5.26522 15.0488 5V4H17.0488C17.314 
                                          4 17.5684 4.10536 17.7559 4.29289C17.9435 4.48043 18.0488 4.73478 18.0488 5V8Z" fill="#989898" />
                                            </svg>
                                        </span>
                                        <div className="item-info">
                                            <p>Ngày khởi hành</p>
                                            <span>{tour.start_date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.0488 2H15.0488V1C15.0488 0.734784 14.9435 0.48043 14.7559 0.292893C14.5684 
                                          0.105357 14.314 0 14.0488 0C13.7836 0 13.5293 0.105357 13.3417 0.292893C13.1542 
                                          0.48043 13.0488 0.734784 13.0488 1V2H7.04883V1C7.04883 0.734784 6.94347 0.48043 
                                          6.75593 0.292893C6.5684 0.105357 6.31404 0 6.04883 0C5.78361 0 5.52926 0.105357 
                                          5.34172 0.292893C5.15419 0.48043 5.04883 0.734784 5.04883 1V2H3.04883C2.25318 2 1.49012 
                                          2.31607 0.927508 2.87868C0.364899 3.44129 0.0488281 4.20435 0.0488281 5V17C0.0488281 17.7956 
                                          0.364899 18.5587 0.927508 19.1213C1.49012 19.6839 2.25318 20 3.04883 20H17.0488C17.8445 20 
                                          18.6075 19.6839 19.1701 19.1213C19.7328 18.5587 20.0488 17.7956 20.0488 17V5C20.0488 4.20435 
                                          19.7328 3.44129 19.1701 2.87868C18.6075 2.31607 17.8445 2 17.0488 2ZM18.0488 17C18.0488 17.2652 
                                          17.9435 17.5196 17.7559 17.7071C17.5684 17.8946 17.314 18 17.0488 18H3.04883C2.78361 18 2.52926 
                                          17.8946 2.34172 17.7071C2.15419 17.5196 2.04883 17.2652 2.04883 17V10H18.0488V17ZM18.0488 8H2.04883V5C2.04883 
                                          4.73478 2.15419 4.48043 2.34172 4.29289C2.52926 4.10536 2.78361 4 3.04883 4H5.04883V5C5.04883 5.26522 5.15419 
                                          5.51957 5.34172 5.70711C5.52926 5.89464 5.78361 6 6.04883 6C6.31404 6 6.5684 5.89464 6.75593 5.70711C6.94347 
                                          5.51957 7.04883 5.26522 7.04883 5V4H13.0488V5C13.0488 5.26522 13.1542 5.51957 13.3417 5.70711C13.5293 5.89464 
                                          13.7836 6 14.0488 6C14.314 6 14.5684 5.89464 14.7559 5.70711C14.9435 5.51957 15.0488 5.26522 15.0488 5V4H17.0488C17.314 
                                          4 17.5684 4.10536 17.7559 4.29289C17.9435 4.48043 18.0488 4.73478 18.0488 5V8Z" fill="#989898" />
                                            </svg>
                                        </span>
                                        <div className="item-info">
                                            <p>Ngày về</p>
                                            <span>{tour.end_date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <img src="./assets/images/specific-tour/icon1.png" />
                                        </span>
                                        <div className="item-info">
                                            <p>Mã tour</p>
                                            <span>{tour.tour_id}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <img src="./assets/images/specific-tour/icon2.png" />
                                        </span>
                                        <div className="item-info">
                                            <p>Phương tiện</p>
                                            <span>{tour.transport}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <img src="./assets/images/specific-tour/icon3.png" />
                                        </span>
                                        <div className="item-info">
                                            <p>Số chỗ còn lại</p>
                                            <span>{tour.seat}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>
                                            <img src="./assets/images/specific-tour/icon4.png" />
                                        </span>
                                        <div className="item-info">
                                            <p>Nơi khởi hành</p>
                                            <span>{tour.departure_place}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>:
        null

    );
};
