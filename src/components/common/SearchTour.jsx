import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const SearchTour = ({className = "search-tool"}) => {
    const [place, setPlace] = useState('')
    const [enddate, setEnddate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [seat, setSeat] = useState('')
    const history = useHistory()

    const submit = () => {
        const data = [
            place,
            enddate,
            startDate,
            seat
        ]
        return history.push(`/tourlist/search?place=${place}&enddate=${enddate}&startdate=${startDate}&seat=${seat}`)
    }

    return (
        <div className={className}>
            <div className="option">
                <span><i className="fas fa-map-marker-alt" /></span>
                <div className="option-text">
                    <p>Điểm đến</p>
                    <input type="text" placeholder="Bạn muốn đi đâu?" onChange={(event)=>setPlace(event.target.value)} />
                </div>
            </div>
            <div className="option">
                <span><i className="fas fa-calendar" /></span>
                <div className="option-text">
                    <p>Ngày đến</p>
                    <input type="date" placeholder="Chọn ngày" onChange={(event)=>setStartDate(event.target.value)}/>
                </div>
            </div>
            <div className="option">
                <span><i className="fas fa-calendar" /></span>
                <div className="option-text">
                    <p>Ngày về</p>
                    <input type="date" placeholder="Chọn ngày" onChange={(event)=>setEnddate(event.target.value)}/>
                </div>
            </div>
            <div className="option">
                <span><i className="fas fa-user-friends" /></span>
                <div className="option-text">
                    <p>Số khách</p>
                    <input type="text" placeholder="Thêm người" onChange={(event)=>setSeat(event.target.value)}/>
                </div>
            </div>
            <div className="search-icon" onClick={submit}>
                <i className="fas fa-search" />
            </div>
        </div>
    );
};
