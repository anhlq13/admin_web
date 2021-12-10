/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { CategoryTour1 } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import { UserInfo } from '../components/userFile';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { useHistory } from "react-router-dom";
import { User } from '../ultis/checkUser';

const UserFile = () => {
    const [check, setCheck] = useState(true)

    const [tours, setTours] = useState([])
    const history = useHistory()
    const user = User.getUser()

    useEffect(() => {
        if (!user) {
            return history.push('/')
        }
        service.getAllTour().then(data => {
            setCheck(false)
            setTours(data)
        })
    },[])
    return (
        <ClienLayout check={check}>
            <UserInfo />
            <CategoryTour1 tours={tours} title = "Yêu thích" />
            <DiscoverPot tours={tours} /> 
            <UniquePoint />
        </ClienLayout>
    );
};

export default UserFile;