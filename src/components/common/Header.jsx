/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../ultis/checkUser';

export const Header = () => {
    const user = User.getUser()
    return (
        <div className="header-wrapper">
            {
                user ?
                    <div className="header tourlist container wide">
                        <Link to="/" className="logo">
                            <img src="./assets/images/landing/cloud.png" className="logo-img" />
                            <img src="./assets/images/landing/vitra.png" className="logo-text" />
                        </Link>
                        <ul className="nav">
                            {
                                user.admin !== "false" && 
                                <li className="item">
                                    <Link to="/admin">
                                        <img src="./assets/images/landing/manage_icon.png" />
                                        <span>Quản trị</span>
                                    </Link>
                                </li>
                            }
                            

                            <li className="item">
                                <Link to='/favtour'>
                                    <img src="./assets/images/landing/heart-icon.png" />
                                    <span>Yêu thích</span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/booked">
                                    <img src="./assets/images/landing/list-icon.png" />
                                    <span>Tour đã đặt</span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/userfile" >
                                    <div className="img" style={{ backgroundImage: 'url(./assets/images/landing/account-avatar.jpg)' }}>
                                    </div>
                                    <span>{user.user_name}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    :
                    <div className="header forSignUp container wide2">
                        <div className="logo-wrapper">
                            <Link to="/" className="logo">
                                <img src="./assets/images/landing/cloud.png" className="logo-img" />
                                <img src="./assets/images/landing/vitra.png" className="logo-text" />
                            </Link>
                            <div className="line1" />
                        </div>
                        <div className="header-login">
                            <Link to="/login" className="log-in">Đăng nhập</Link>
                            <Link to="/signup" className="sign-up-link">Chưa có tài khoản?</Link>
                        </div>
                    </div>
            }
        </div>




    );
};
