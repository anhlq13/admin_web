/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const RatingDetail = () => {
    return (
        <div className="rating-box">
            <div className="user-info">
                <img src="./assets/images/specific-tour/user-avatar.png" />
                <p>Lê Văn A</p>
            </div>
            <div className="top">
                <div className="date">04 Tháng 2, 2020</div>
                <div className="rating-value">
                    <h4>Xuất sắc</h4>
                    <div className="rating-star">
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                    </div>
                </div>
            </div>
            <div className="content">
                <p>Chuyến đi thật là tuyệt vời khi có Vitra. Gia đình mình đi 5 người trong 3 ngày. Vitra sắp
                    xếp chỗ ngủ rất sạch sẽ, thoải mái. Bữa ăn rất ngon và đầy đủ, nhà mình có 1 cháu nhỏ cũng
                    được Vitra cung cấp dịch vụ riêng với trẻ em.
                    Đồi rất đẹp, địa điểm mát mẻ, mình đi vào tháng 5, thời tiết mát mẻ, rất phù hợp.</p>
            </div>
            <span className="select-mode">Ẩn bớt</span>
        </div>
    );
};

export default RatingDetail;