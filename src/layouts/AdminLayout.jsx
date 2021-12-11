/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Header } from '../components/common';
import Scroll from '../Scroll';
import { User } from '../ultis/checkUser';
import { useHistory } from "react-router-dom";
import { service } from '../services/service';

const AdminLayout = ({children, check = false}) => {
    const user = User.getUser()
    const history = useHistory()
    useEffect(()=>{
        if (!user?.admin) {
            return history.push('/')
        }
        service.checkAdmin().then((data)=>{
            if (data === "false") {
                User.logOut()
                return history.push('/')
            }
        }).catch(()=>{
            User.logOut()
                return history.push('/login')
        })
    },[])

    return (
        <div className=" container">
            <div className="loading" style={!check ? {display: 'none', zIndex:'99999999'} : null}>
                <h1 className="textloading"><div class="loader"></div></h1>
                
            </div>
            <Header />
            <Scroll />
            {/* <div className="container"> */}
            {children}

            {/* </div> */}
            {/* <div className="footer tours-list wide3" style={{
                position: 'absolute',
                marginTop: '955px',
                right: '0',
                zIndex: '122222'
            }}>
                <div className="logo">
                    <img src="./assets/images/landing/cloud.png" className="logo-img" />
                    <img src="./assets/images/landing/vitra.png" className="logo-text" />
                </div>
                <div className="copyright">
                    <h1>© 2021 Vitra.com All rights reserved.</h1>
                    <p>
                        The content and images used on this site are copyright protected and copyrights vests with the
                        respective owners.
                        The usage of the <br /> content and images on this website is intended to promote the works and no
                        endorsement
                        of the artist shall be implied.
                        Unauthorized <br /> use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
            <div className="loading" style={!check ? {display: 'none', zIndex:'100000'} : null}>
                <h1 className="textloading"><div class="loader"></div></h1>
                
            </div> */}
        </div>
    );
};

export default AdminLayout;