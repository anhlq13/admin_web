import React, { useEffect, useState } from 'react';
import { BannerHero } from '../components/common';
import { Discover, TourWishList, UniquePoint, WishList } from '../components/home';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const Home = () => {
    const [tours, setTours] = useState([])
    const [types, setTypes] = useState([])
    const [places, setPlaces] = useState([])
    const [check, setCheck] = useState(true)
    
    useEffect(() => {
        Promise.all([
            service.getAllTour(),
            service.getType(),
            service.getPlace()
        ]).then((data) => {
            console.log(data);
            setCheck(false)
            setTours(data[0])
            setTypes(data[1])
            setPlaces(data[2])
        })

    },[])
    return (
        <ClienLayout check={check}>
            <BannerHero />
            <WishList places={places} />
            <TourWishList typs={types}  />
            <Discover tours={tours} places={places} types={types}/>

            <UniquePoint />
        </ClienLayout>
    );
}

export default Home;