import React, { useEffect, useState } from 'react';
import { OverView } from '../components/bookingStep1';
import { Bre, Tour3 } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Contract = () => {
    const [tour, setTour] = useState({})
    const [order, setOrder] = useState()
    const params = useParams()
    const { id } = params
    const user = User.getUser()
    const history = useHistory()
    const [check, setCheck] = useState(true)

    useEffect(() => {
        if (!user) {
            return history.push('/')
        }
        service.getOrderDetail(id).then(data => {
            setCheck(false)
            console.log(data);
            setOrder(data)
            service.getDetailTour(data.tour_id).then((payload) =>{
                setCheck(false)
                setTour(payload)
            })
        }).catch(er => {
            User.logOut()
            return history.push('/booked')
        })
    },[history, id])
    return (
        <ClienLayout check={check} >
            <Bre bre={["Tour đã đặt","Hợp đồng tour"]}/>
            <h1 className="heading align-center for-contract">HỢP ĐỒNG TOUR</h1>
            {
                tour.tour_id && <Tour3 tour={tour}/>
            }
            
            <OverView user ={user} tour={tour} order={order} setCheck={setCheck}/>
        </ClienLayout>
    );
};

export default Contract;