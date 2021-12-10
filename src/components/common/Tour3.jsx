import React from 'react';
import { Link } from 'react-router-dom';
import { imgs } from '../../ultis/randomImg';

export const Tour3 = ({tour= {}}) => {
    return (
        tour &&
        <div className="tour-sumup container wide2">
            {/* <Link to={"/specific/" + tour.tour_id}> */}
                <div className="tour-img" style={{ backgroundImage: `url(${tour.tour_bg_img})` }}>
                </div>
                <div className="overview-tour">
                    <div className="rating">
                        <span><i className="fas fa-star" /></span>
                        <span className="value">{Math.floor(Math.random() * 2)+4}.0</span>
                        <span className="rating-quality">({Math.floor(Math.random() * 156) + 1} ratings)</span>
                    </div>
                    <h1 className="heading">TOUR DU LỊCH: {tour.tour_title}</h1>
                    <div className="detail">
                        <p>Mã tour: <span>{tour.tour_id}</span></p>
                        <p>Khởi hành: <span>{tour.start_date}</span></p>
                        <p>Thời gian: <span>3 ngày, 2 đêm</span></p>
                        <p>Phương tiện: <span>{tour.transport}</span></p>
                        <p>Nơi khởi hành: <span>TP. Hà Nội</span></p>
                        <p>Số chỗ: <span>{tour.seat}</span></p>
                    </div>
                </div>
            {/* </Link> */}
        </div>

    );
};
