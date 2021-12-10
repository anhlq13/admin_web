import { useParams } from 'react-router-dom';
import { OverView } from '../components/bookingStep1';
import { Bre, Tour3 } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const BookingStep1 = () => {
    const [check, setCheck] = useState(true)

    const params = useParams()
    const { id } = params
    const [tour, setTour] = useState({})
    const user = User.getUser()
    const history = useHistory()
    useEffect(() =>{ 
        if (!user) {
            return history.push('/login')
        }
        service.getDetailTour(id).then(payload => {
            setCheck(false)
            setTour(payload)
        })
    }, [id])

    return (
        <ClienLayout check={check} >
            <Bre bre={["Booking","Nhập thông tin"]}/>
            <div className="step-breadcrumb breadcrumb">
                <span className="current">
                    1. Nhập thông tin
                </span>
                <span className="prev-page ">
                    <i className="fas fa-chevron-right" />
                    2. Xác nhận của bạn
                </span>
            </div>


            <Tour3 tour={tour}/>
            <OverView user ={user} tour={tour} setCheck={setCheck}/>
        </ClienLayout>
    );
};

export default BookingStep1;