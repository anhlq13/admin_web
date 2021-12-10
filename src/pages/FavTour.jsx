import React, { useEffect, useState } from 'react';
import { Bre, CategoryTour1, SearchTour } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const FavTour = () => {
    const [tours, setTours] = useState([])
    const [check, setCheck] = useState(true)

    useEffect(() => {
        service.getAllTour().then(data => {
            setCheck(false)
            setTours(data)
        })
    }, [])
    return (
        <ClienLayout check={check}>
            <Bre />
            <SearchTour className="search-tool forFavTour" />

            <div className="tourlist-line2"></div>
            <CategoryTour1 tours={tours} title="Yêu thích" />

            <DiscoverPot tours={tours}/>
            <UniquePoint />
        </ClienLayout>
    );
};

export default FavTour;