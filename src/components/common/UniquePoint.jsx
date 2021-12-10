/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const UniquePoint = () => {
    return (
        <div className="unique-point container">
            <div className="heading">Vì sao chọn VITRA</div>
            <div className="row">
                <div className="col-4">
                    <div className="point">
                        <div className="point-icon">
                            <img src="./assets/images/landing/icon1.png" />
                        </div>
                        <div className="point-desc">
                            <h1>Giá cả</h1>
                            <p>Luôn có mức giá tốt nhất nhiều ưu đãi</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="point">
                        <div className="point-icon">
                            <img src="./assets/images/landing/icon2.png" />
                        </div>
                        <div className="point-desc">
                            <h1>Dịch vụ</h1>
                            <p>Dịch vụ chuyên nghiệp&gt;</p>
                            <p>Đa dạng, chất lượng</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="point">
                        <div className="point-icon">
                            <img src="./assets/images/landing/icon3.png" />
                        </div>
                        <div className="point-desc">
                            <h1>Thanh toán</h1>
                            <p>An toàn, linh hoạt</p>
                            <p>Liên kết với nhiều tổ chức tài chính</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="point">
                        <div className="point-icon">
                            <img src="./assets/images/landing/icon4.png" />
                        </div>
                        <div className="point-desc">
                            <h1>Đặt tour</h1>
                            <p>Dễ dàng, nhanh chóng</p>
                            <p>Đơn giản chỉ với 3 bước</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="point">
                        <div className="point-icon">
                            <img src="./assets/images/landing/icon5.png" />
                        </div>
                        <div className="point-desc">
                            <h1>Hỗ trợ</h1>
                            <p>Từ 8h00 đến 18h00</p>
                            <p>Hotline &amp; trực tuyến</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UniquePoint;