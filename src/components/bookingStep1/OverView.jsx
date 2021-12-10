/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { service } from '../../services/service';
import { User } from '../../ultis/checkUser';
import { convetVND } from '../../ultis/format';
import { imgs } from '../../ultis/randomImg';

export const OverView = ({ user, tour, order, setCheck }) => {
    console.log(setCheck);
    const [quantity1, setQuantity1] = useState(1)
    const [quantity2, setQuantity2] = useState(0)
    const [total, setTotal] = useState(0)
    const [order_detail, setOrder_detail] = useState('')
    const history = useHistory()
    useEffect(() => {
        if (tour.adult_price) {
            setTotal(quantity1 * Number(tour?.adult_price)  + quantity2 * Number(tour?.kid_price) )
        }
        
    }, [quantity1, quantity2, total])
    const sub1 = () => {
        if(quantity1 > 1){
            setQuantity1(quantity1 - 1)
        }
    }
    const sub2 = () => {
        if(quantity2 > 0){
            setQuantity2(quantity2 - 1)
        }
    }
    const submit = () => {
        setCheck(true)
        const date = new Date()
        const data = {
            order_date: date.getFullYear() + '-' + Number(date.getMonth()+1)  + '-' +date.getDate(),
            order_detail,
            tour_id: tour.tour_id,
            adult_number: quantity1.toString(),
            kid_number: quantity2.toString(),
            adult_price:( quantity1 * Number(tour?.adult_price)).toString(),
            kid_price: (quantity2 * Number(tour?.kid_price)).toString()
        }
        service.bookTour(data).then(payload => {
            setCheck(false)
            console.log(payload);
            history.push('/bookingstep2')
        }).catch(()=>{
            setCheck(false)
            User.logOut()
        })
    }
    const cance = () => {
        setCheck(true)
        service.cancelTour(order.order_id).then(()=>{
            setCheck(false)
            return history.push('/success')
        }).catch(()=>{
            setCheck(false)
            User.logOut()
        })
    }
    return (
        user && tour.adult_price && !order ?
        <div className="trip-overview container wide2">
            <h1 className="heading">Tổng quan về chuyến đi</h1>
            <div className="row">
                <div className="col-8">
                    <div className="contact-info">
                        <h4>Thông tin liên lạc</h4>
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-6">
                                    <div className="item">
                                        <span>Họ và Tên<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.user_name} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Số điện thoại<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.phone} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Email<span className="required show">*</span></span>
                                        <input type="email" defaultValue={user.email} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Địa chỉ<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.address} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger">
                        <h3>Hành khách</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Người lớn</h3>
                                        <span>&gt; 12 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <img src="./assets/images/booking-step/increase-icon.png" onClick={() => setQuantity1(quantity1 + 1)} />
                                        <div>{quantity1}</div>
                                        <img src="./assets/images/booking-step/decrease-icon.png" onClick={() => sub1()}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Trẻ em</h3>
                                        <span>Từ 5-11 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div><img src="./assets/images/booking-step/increase-icon.png" onClick={() => setQuantity2(quantity2 + 1)} /></div>
                                        <div>{quantity2}</div>
                                        <div><img src="./assets/images/booking-step/decrease-icon.png" onClick={() => sub2()} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger-notice">
                        <h4>Lưu ý của khách hàng</h4>
                        <input type="text" onChange={(event) => setOrder_detail(event.target.value)} placeholder="Vui lòng nhập ghi chú cho Vitra nếu có" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="trip-summary">
                        <h4>Tóm tắt chuyến đi</h4>
                        <span>Tour trọn gói</span>
                        <div className="tour-name">
                            <div className="image" style={{ backgroundImage: `url(${tour.tour_bg_img})` }} />
                            <h3>Tour du lịch: {tour.tour_title}</h3>
                        </div>
                        <div className="summary-form">
                            <div className="head">
                                <h3>Hành khách</h3>
                                <div className="number">
                                    <i className="fas fa-users" />
                                    <span>{ }</span>
                                </div>
                            </div>
                            <div className="body">
                                <h4>Người lớn</h4>
                                <span className="cost">{quantity1} x {convetVND(tour?.adult_price)}đ</span>
                            </div>
                            <div className="body">
                                <h4>Trẻ em</h4>
                                <span className="cost">{quantity2} x {convetVND(tour?.kid_price)}đ</span>
                            </div>
                            {/* <div className="body">
                                <h4>Trẻ nhỏ</h4>
                                <span className="cost">0 x 0đ</span>
                            </div>
                            <div className="body">
                                <h4>Em bé</h4>
                                <span className="cost">0 x 0đ</span>
                            </div> */}
                            <div className="body">
                                <h4 className="text-bold">Phụ thu</h4>
                                <span className="cost">0đ</span>
                            </div>
                            <div className="total">
                                <h4>TỔNG CỘNG</h4>
                                <span>{convetVND(total)}đ</span>
                            </div>
                        </div>
                        <div className="book" onClick={submit}>
                            Đặt ngay
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : user && tour.adult_price && order ?
        <div className="trip-overview container wide2">
            <h1 className="heading">Tổng quan về chuyến đi</h1>
            <div className="row">
                <div className="col-8">
                    <div className="contact-info">
                        <h4>Thông tin liên lạc</h4>
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-6">
                                    <div className="item">
                                        <span>Họ và Tên<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.user_name} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Số điện thoại<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.phone} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Email<span className="required show">*</span></span>
                                        <input type="email" defaultValue={user.email} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Địa chỉ<span className="required show">*</span></span>
                                        <input type="text" defaultValue={user.address} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger">
                        <h3>Hành khách</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Người lớn</h3>
                                        <span>&gt; 12 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div>{order.adult_number}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Trẻ em</h3>
                                        <span>Từ 5-11 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div>{order.kid_number}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger-notice">
                        <h4>Lưu ý của khách hàng</h4>
                        <input type="text" placeholder="Vui lòng nhập ghi chú cho Vitra nếu có" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="trip-summary">
                        <h4>Tóm tắt chuyến đi</h4>
                        <span>Tour trọn gói</span>
                        <div className="tour-name">
                            <div className="image" style={{ backgroundImage: `url(${tour.tour_bg_img})` }} />
                            <h3>Tour du lịch: {tour.tour_title}</h3>
                        </div>
                        <div className="summary-form">
                            <div className="head">
                                <h3>Hành khách</h3>
                                <div className="number">
                                    <i className="fas fa-users" />
                                    <span>{ }</span>
                                </div>
                            </div>
                            <div className="body">
                                <h4>Người lớn</h4>
                                <span className="cost">{order.adult_number} x {convetVND(tour?.adult_price)}đ</span>
                            </div>
                            <div className="body">
                                <h4>Trẻ em</h4>
                                <span className="cost">{order.kid_number} x {convetVND(tour?.kid_price)}đ</span>
                            </div>
 
                            <div className="body">
                                <h4 className="text-bold">Phụ thu</h4>
                                <span className="cost">0đ</span>
                            </div>
                            <div className="total">
                                <h4>TỔNG CỘNG</h4>
                                <span>{convetVND(Number(order.adult_number) * Number(tour?.adult_price)  + Number(order.kid_number) * Number(tour?.kid_price))}đ</span>
                            </div>
                        </div>
                        <div className="book" onClick={cance}>
                            Hủy tour
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        null

    );
};
