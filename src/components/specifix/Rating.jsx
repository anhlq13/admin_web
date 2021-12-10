/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../ultis/checkUser';
import RatingDetail from './RatingDetail';

export const Rating = () => {
    const user = User.getUser()
    return (
        <div className="user-rating container">
            {
                !user 
                ? 
                <div className="recommend-rating">
                    <h1 className="heading">Để lại đánh giá của bạn</h1>
                    <p>Hãy <Link to="/login">đăng nhập</Link> để có thể đánh giá</p>
                </div>
                :
                null
            }
           
            <div className="row">
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
            </div>
        </div>

    );
};
