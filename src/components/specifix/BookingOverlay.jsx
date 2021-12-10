import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { convetVND } from '../../ultis/format';

export const BookingOverlay = ({tour}) => {
    const [check, setCheck] = useState(true)
    return (
        check && tour &&
        <div className="booking-overlay">
            <div className="tour-info">
                <h4>Tour du lịch: {tour?.tour_title}</h4>
                <p>{tour?.start_date} | 3 ngày 2 đêm | {tour?.transport}</p>
            </div>
            <div className="right">
                <div className="cost">
                    <h4>Giá người lớn: {convetVND(tour?.adult_price)} đ</h4>
                    {/* <p>(1 khách)</p> */}
                    <h4>Giá trẻ em: {convetVND(tour?.kid_price)} đ</h4>
                    {/* <p>(1 khách)</p> */}
                </div>
                <Link to={"/bookingstep1/"+tour?.tour_id}>
                    <button className="book-tour">Đặt ngay</button>
                </Link>
            </div>
            <span className="fas fa-times close-overlay" style={{cursor: 'pointer'}} onClick={()=>setCheck(false)}/>
        </div>
       
    );
};
