import React from 'react';
import { Tour2 } from '.';

const DiscoverPot = ({ tours = [] }) => {
    return (
        <div className="discover-pot container">
            <div className="heading">Khám phá những tour yêu thích</div>
            <div className="row">
                {
                    tours.map((value,key) => {
                        if (key < 4) {
                            return (
                                <div className="col-3" key={key}>
                                    <Tour2  tour={value} />
                                </div>
                            )
                        }
                        return null
                    })
                }
            </div>
        </div>

    );
};

export default DiscoverPot;