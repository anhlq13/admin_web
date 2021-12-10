/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export const Bre = ({bre = []}) => {
    return (
        <div className="breadcrumb container wide2">
            <Link to="/" className="prev-page">
                Trang chủ
                <i className="fas fa-chevron-right" />
            </Link>
            {
                bre.map((value, key)=>{
                    return(
                        <a href="#" className="prev-page" key={key}>
                            {value}
                            <i className="fas fa-chevron-right" />
                        </a>
                    )
                })
            }
            {/* <a href="#" className="prev-page">
                Tour chụp ảnh
                <i className="fas fa-chevron-right" />
            </a>
            <span className="current">
                Đồi chè Sơn La
            </span> */}
        </div>

    );
};
