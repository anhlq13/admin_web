import React from 'react';

export const Schedule = ({ routes }) => {
    return (
        <div className="schedule container">
            <h1 className="heading">Lịch trình</h1>
            <div className="wrapper">
                <div className="paradigm">
                    <div className="child">
                        <div className="date make-space">
                            {
                                routes.map((value, key) => {
                                    return (
                                        <span key={key}>Ngày</span>
                                    )
                                })
                            }
                        </div>
                        <div className="date-icon make-space">
                            {
                                routes.map((value, key) => {
                                    return (
                                        <div key={key}>{value.step_number}</div>
                                    )
                                })
                            }
                        </div>
                        <div className="destination make-space">
                            {
                                routes.map((value, key) => {
                                    return (
                                        <p key={key}>{value.route_name}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="detail">
                    {
                        routes.map((value, key) => {
                            return (
                                <div className="item" key={key}>
                                    <h3>Ngày {key + 1}: {value.route_name}</h3>
                                    <p>{value.route_desc}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    );
};
