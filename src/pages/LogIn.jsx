/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { useHistory } from "react-router-dom";
import { setToken } from '../services/client';
import { User } from '../ultis/checkUser';

const LogIn = () => {
    const [check, setCheck] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [viewPass, setViewPass] = useState(false)
    const [err, setErr] = useState([])
    const history = useHistory()
    const user = User.getUser()
    const submit = () => {

        setCheck(true)
        if (username === ''  || password === '' ) {
            setCheck(false)
            setErr(['input is not empty!'])
            
            return
        }
        const data = {
            login_username: username,
            login_password: password
        }
        service.loging(data).then(async (payload)=>{
            
            await setToken(payload.access_token)
            await service.getProfile().then((user)=> {
                User.setUser(user)
                // return history.push('/')

            })
            await service.checkAdmin().then((check)=>{
                const user = User.getUser()
                User.setUser({
                    ...user,
                    admin: check
                })
                setCheck(false)
                return history.goBack()
            })
            
        }).catch(()=>{
            setCheck(false)
            setErr(['login false!'])
            return 
        })
    }
    
    useEffect(()=>{
        setCheck(false)
        if (user) {
            return history.push('/')
        }
    }, [history, user])

    return (
        <ClienLayout check={check}>
            {
                    err.map((value, key) => {
                        return (
                            <div className="alert alert-danger" key={key}>
                                <div className="message">
                                    <strong>
                                        {value}
                                    </strong>
                                </div>
                            </div>
                        ) 
                    })
                }
            <div>
                <div className="padding" style={{ position: 'relative' }} />
                <div className="sign-up-form">
                    <h4>
                        Chào mừng bạn đến với
                    </h4>
                    <h3>Vitra</h3>
                    <div className="form-container">
                        <div className="button-wrapper">
                            <Link to="/login"><div className="valid-btn active">Đăng nhập</div></Link>
                            <Link to="/signup"><div className="valid-btn">Đăng ký</div></Link>
                        </div>
                        <div className="input-wrapper">
                            <div className="item">
                                <div className="input-name">User name</div>
                                <div>
                                    <input onChange={(event) => setUsername(event.target.value)}  type="text" placeholder="Tài khoản"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Mật khẩu</div>
                                <div>
                                    <input type={viewPass ? 'text' : 'password'}  onChange={(event) => setPassword(event.target.value)}  placeholder="Mật khẩu" name="pwd" className="no-radius-right" />
                                    <div className="display-pwd" onClick={() => setViewPass(!viewPass)}>
                                        <i className="far fa-eye-slash" />
                                        {/* <i className="far fa-eye"></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{border:'none'}} onClick={submit} className="valid-btn active">Đăng nhập
                            <img src="./assets/images/booking-step/arrow-right-icon.png" />
                        </button>
                    </div>
                </div>
            </div>
        </ClienLayout>
    );
};

export default LogIn;