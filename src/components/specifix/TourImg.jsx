/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../../services/service';
import { imgs } from '../../ultis/randomImg';

export const TourImg = ({title, id, imgBg}) => {
    console.log(imgBg);
    const [img, setImg] = useState([])
    useEffect(()=>{
        service.getImg(id).then((data)=>{
            setImg(data)
            console.log(data);
        })
    },[id])
    return (
        <div className="tour-img container">
            <div className="head">
                <h1 className="heading">{title}</h1>
                <Link to={"/bookingstep1/"+id}>
                    <button className="book-tour">Đặt ngay</button>
                </Link>
                
            </div>
            <div className="sub-head">
                <div className="tour-rating">
                    <div className="rating">
                        <span><i className="fas fa-star" /></span>
                        <span className="value">{Math.floor(Math.random() * 2)+4}.0</span>
                        <span className="rating-quality">({Math.floor(Math.random() * 156) + 1} đánh giá)</span>
                    </div> 
                    <div className="is-liked">Yêu thích</div>
                </div>
                <a href="#" className="advise-contact">Liên hệ tư vấn</a>
            </div>
            <div className="img-item discount-zone container">
                <div className="row">
                    <div className="col-6">
                        <div className="full-height" style={{ backgroundImage: `url(${imgBg})` }}>
                            <div className="see-more-img">
                                <span className="see-more-icon">
                                    <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.333 1.83464V10.3346H4.33301V1.83464H12.333ZM12.333 
                                  0.417969H4.33301C3.59967 0.417969 2.99967 1.05547 2.99967 
                                  1.83464V10.3346C2.99967 11.1138 3.59967 11.7513 4.33301 11.7513H12.333C13.0663 
                                  11.7513 13.6663 11.1138 13.6663 10.3346V1.83464C13.6663 1.05547 13.0663 0.417969 
                                  12.333 0.417969ZM6.66634 7.26755L7.79301 8.86839L9.44634 6.67255L11.6663 9.6263H4.99967L6.66634 
                                  7.26755ZM0.333008 3.2513V13.168C0.333008 13.9471 0.933008 14.5846 1.66634 14.5846H10.9997V13.168H1.66634V3.2513H0.333008Z" fill="black" />
                                    </svg>
                                </span>
                                <span>Xem thêm</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="half-height" style={{ backgroundImage: `url(${img[0]?.link})` }} />
                            </div>
                            <div className="col-12">
                                <div className="half-height" style={{ backgroundImage: `url(${img[1]?.link})` }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="half-height" style={{ backgroundImage: `url(${img[2]?.link})` }} />
                            </div>
                            <div className="col-12">
                                <div className="half-height" style={{ backgroundImage: `url(${img[3]?.link})` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
