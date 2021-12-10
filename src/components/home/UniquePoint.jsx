/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const UniquePoint = () => {
    return (
        <div className="unique-point forlanding container wide3">
            <div className="heading">Vì sao chọn VITRA</div>
            <div className="row">
                <div className="col-4">
                    <div className="col-12">
                        <div className="point">
                            <div className="point-icon">
                                <img src="./assets/images/landing/icon1.png" />
                            </div>
                            <div className="point-desc">
                                <h1>Giá cả</h1>
                                <p>Luôn có mức giá tốt nhất</p>
                                <p>Nhiều khuyến mãi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
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
                    <div className="col-12">
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
                    <div className="col-12">
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
                    <div className="col-12">
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
                <div className="col-8">
                    <div className="screen-capture">
                        <div className="img" style={{ backgroundImage: 'url(./assets/images/landing/screen-cap.png)' }} />
                        <div className="user-respond" style={{ top: 240, left: '-40px' }}>
                            <span><img src="./assets/images/landing/user-avatar.jpg" /></span>
                            <div>
                                <h3 className="name">Quân ngok</h3>
                                <div className="rating">
                                    <span><i className="fas fa-star" /></span>
                                    <span className="value">5.0</span>
                                    <p>Mình rất hài lòng với dịch vụ bên VITRA. Nhân viên nhiệt tình </p>
                                </div>
                            </div>
                        </div>
                        <div className="user-respond" style={{ top: 490, right: '-48px' }}>
                            <img src="./assets/images/landing/user-avatar2.jpg" />
                            <div>
                                <h3 className="name">Minh ngok</h3>
                                <div className="rating">
                                    <span><i className="fas fa-star" /></span>
                                    <span className="value">5.0</span>
                                    <p>Dịch vụ vô cùng tuyệt vời, chu đáo, nhiệt tình. Love!!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
