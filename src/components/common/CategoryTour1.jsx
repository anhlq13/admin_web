/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tour1 } from '.';

export const CategoryTour1 = ({title, tours}) => {
    return (
        <div className="category tourlist-category container">
            <div className="heading">{title}</div>
            <div className="row">
            {
                    tours.map((value,key) => {
                        return (
                            <Link to={"/specific/" + value.tour_id} className="col-3" key={key}>
                            <Tour1 tour={value} />
                        </Link>
                        )
                    })
                }
                
                

            </div>
        </div>
    );
};
