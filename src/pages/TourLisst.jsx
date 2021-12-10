import { BannerHero, Bre, CategoryTour1 } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

// import React from 'react';
import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
} from 'react-router-dom';

const TourLisst = () => {
    const [check, setCheck] = useState(true)

    const [tours, setTours] = useState([])
    const [alltour, setAlltour] = useState([])
    const [title, setTitle] = useState('')
    const [bre, setBre] = useState([])
    const params = useParams()
    const router = useLocation()
    useEffect(() => {
        const parsed = queryString.parse(router.search);
        const data = {
            query: "",
            type_id: params.id
        }

        if (params.slug === 'type') {
            Promise.all([
                service.getAllTour(),
                //service.getTypeDetail(params.id)
                service.getTypeDetailV2(data)
            ]).then(payload => {
                setCheck(false)
                //setTours(payload[0].filter(tour => tour.type_id === params.id))
                setTours(payload[1])
                console.log(payload[1])
                setAlltour(payload[0])
                setTitle(payload[1].type_name)
                setBre(['Tour Yêu Thích', payload[1].type_name])
            })
        }
        if (params.slug === 'place') {
            Promise.all([
                service.getAllTour(),
                service.getPlaceDetail(params.id)
            ]).then(payload => {
                setCheck(false)
                setTours(payload[0].filter(tour => tour.place_id === params.id))
                setAlltour(payload[0])
                setTitle('Điểm đến ' + payload[1].place_name)
                setBre(['Điểm đến', payload[1].place_name])
            })
        }
        if (params.slug === 'search') {
            service.getAllTour().then((payload) => {
                setCheck(false)
                const data = payload.filter((tour) => {
                    let check = true
                    if (parsed.place !== '') {
                        check = tour.departure_place === parsed.place ? true : false
                    }
                    if (parsed.startdate !== '') {
                        check = tour.start_date === parsed.startdate ? true : false
                    }
                    if (parsed.enddate !== '') {
                        check = tour.end_date === parsed.enddate ? true : false
                    }
                    if (parsed.seat !== '') {
                        check = tour.seat == parsed.seat ? true : false
                    }

                    return check
                })
                setTours(data)
                setAlltour(payload)
                setTitle("Tìm Kiếm")
                setBre(["Tìm kiếm"])

            })
        }
    }, [router.search])
    return (
        <ClienLayout check={check}>
            <Bre bre={bre} />
            <BannerHero />
            <div className="tourlist-line2" />
            <CategoryTour1 title={title} tours={tours} />
            {
                tours.length === 0 ? <h1 style={{ textAlign: 'center' }}>Dữ liệu chưa cập nhật các tour này</h1> : null
            }

            <DiscoverPot tours={alltour} />
            <UniquePoint />



        </ClienLayout>
    );
};

export default TourLisst;
