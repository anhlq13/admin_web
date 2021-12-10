/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../../services/service';
import { User } from '../../ultis/checkUser';
import { useHistory } from "react-router-dom";

export const UserInfo = () => {
    const user = User.getUser()
    const [address, setAddress] = useState(user?.address || '')
    const [nationality, setNationality] = useState(user?.nationality || '')
    const [phone, setPhone] = useState(user?.phone || '')
    const [email, setEmail] = useState(user?.email || '')
    const [password, setPassword] = useState(user?.password || '')
    const history = useHistory()
    const submit = () => {
        const data = {
            address,
            nationality,
            phone,
            email,
            password
        }
        
        service.updateInfoUser(data).then((payloaf)=>{
            const updateUser = {
                ...user,
                address,
                nationality,
                phone,
                email,
                password
            }
            console.log(updateUser);
            User.setUser(updateUser)
            return alert('thành công')
        }).catch((er)=>{
            console.log(er);
             alert('phiên đăng nhập đã hết hạn')
              User.logOut()
              return history.push("/login")
        })
    }

    return (
        <div className="user-file">
            <div className="avatar-wrapper">
                <img src="./assets/images/specific-tour/user-avatar.png" />
                <div>
                    <h3 className="name">{user?.user_name}</h3>
                    <div className="custom" onClick={submit}>
                        <span>Chỉnh sửa</span>
                        <span><img src="./assets/images/booking-step/file-icon.png" /></span>
                    </div>
                    <Link to="/" onClick={()=> User.logOut()}>
                        <div className="custom" >
                            <span>Đăng xuất</span>
                        </div>
                    </Link>
                    
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Địa chỉ</h3>
                            <input type="text" defaultValue={address} onChange={(event)=>setAddress(event.target.value)} name="birth-date" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Quốc tịch</h3>
                            <input type="text" defaultValue={nationality} onChange={(event)=>setNationality(event.target.value)} name="gender" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Số điện thoại</h3>
                            <input type="text" defaultValue={phone} onChange={(event)=>setPhone(event.target.value)} name="phone" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Email</h3>
                            <input type="email" defaultValue={email} name="email" onChange={(event)=>setEmail(event.target.value)} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Mật khẩu</h3>
                            <input type="password" name="pwd"  defaultValue={password} onChange={(event)=>setPassword(event.target.value)} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};
