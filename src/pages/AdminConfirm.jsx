/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import SiderBar from '../components/common/SiderBar';
import AdminLayout from '../layouts/AdminLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';

const AdminConfirm = () => {
    const [check, setCheck] = useState(true)
    const [orders, setOrder] = useState([])

    useEffect(() => {
        service.adminGetOrder().then((data) => {
            setOrder(data)
            setCheck(false)
        })
    }, [])
    
    const confirm = (id) => {
        setCheck(true)
        service.adminConfirm(id).then((data)=>{
            service.adminGetOrder().then((data) => {
                setCheck(false)
                setOrder(data)
            })
        })
    }

    const destroy = (id) => {
        setCheck(true)
        service.adminDestroyOder(id).then((data)=>{
            service.adminGetOrder().then((data) => {
                setCheck(false)
                setOrder(data)
            })
        }).catch(er=>{
            setCheck(false)
        })
    }
    return (
        <AdminLayout check={check}>
            <SiderBar />
            <div className="tours-list-container">
                <div className="heading">Danh sách các Tour cần xác nhận</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>user Id</th>
                            <th>Order Detail</th>
                            <th>Order Date</th>
                            <th>Confirm</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{order.order_id}</td>
                                        <td>{order.user_id}</td>
                                        <td>{order.order_detail}</td>
                                        <td>{order.order_date}</td>
                                        <td>{order.confirmed}</td>
                                        <td className="td-icon">
                                            <img onClick={()=>confirm(order.order_id)} src="./assets/images/landing/checked.png" style={{cursor: "pointer"}} />
                                            <img onClick={()=>destroy(order.order_id)} src="./assets/images/landing/times.png" style={{cursor: "pointer"}}  />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* <div className="advance-search">Xem thêm</div> */}
            </div>

        </AdminLayout>
    );
};

export default AdminConfirm;