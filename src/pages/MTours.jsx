/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import SiderBar from '../components/common/SiderBar';
import AdminLayout from '../layouts/AdminLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';

const MTours = () => {
    const [skip, setSkip] = useState(0)
    const [check, setCheck] = useState(true)
    const [tours, setTours] = useState([])
    const [places, setPlaces] = useState([])
    const [types, setTypes] = useState([])
    const [hiden, setHiden] = useState(true)

    useEffect(() => {
        Promise.all([
            service.adminGetAllTour(),
            service.getPlace(),
            service.getType()
        ]).then((data) => {
            setTours(data[0])
            setPlaces(data[1])
            setTypes(data[2])
            setCheck(false)
        }).catch((er) => {
            User.logOut()
        })
    }, [])

    const handlerSkip = (x) => {

        setCheck(true)
        setSkip(x)
        service.adminGetAllTour(x).then((data) => {
            setTours(data)
            setCheck(false)
        })

    }

    const deleteTour = (id) => {
        setCheck(true)
        service.adminDeleteTour(id).then(() => {
            service.adminGetAllTour().then((data) => {
                setTours(data)
                setCheck(false)
            })
        })
    }

    const [searchTitle, setSearchTitle] = useState('')

    const search1 = () => {
        setCheck(true)
        service.adminGetAllTour().then((data) => {
            const x = data.filter(item => item.tour_title === searchTitle)
            setTours(x)
            setCheck(false)
        })
    }


    const [searchId, setSearchId] = useState('')
    const [searchType, setSearchType] = useState('')
    const [searchPlace, setSearchPlace] = useState('')
    const [searchLoc, setSearchLoc] = useState('')
    const [searchStart, setSearchStart] = useState('')
    const [searchEnd, setSearchEnd] = useState('')

    const search2 = () => {
        setCheck(true)
        service.adminGetAllTour().then((payload) => {
            const x = payload.filter((tour) => {
                let check = true
                if (searchPlace !== '') {
                    check = tour.place_id === searchPlace ? true : false
                }
                if (searchStart !== '') {
                    check = tour.start_date === searchStart ? true : false
                }
                if (searchEnd !== '') {
                    check = tour.end_date === searchEnd ? true : false
                }
                if (searchType !== '') {
                    check = tour.type_id === searchType ? true : false
                }
                if (searchId !== '') {
                    check = tour.tour_id === searchId ? true : false
                }
                if (searchLoc !== '') {
                    check = tour.departure_place === searchLoc ? true : false
                }

                return check
            })
            setTours(x)
            setCheck(false)
            setHiden(true)
        })
    }


    
    return (
        <AdminLayout check={check}>
            <SiderBar />
            <div className="tours-list-container">
                <div className="heading">Danh sách các Tour</div>
                <div className="search-zone">
                    <div className="input-wrap">
                        <input type="text" name onChange={(event) => { setSearchTitle(event.target.value) }} placeholder="Nhập tiêu đề tour" />
                    </div>
                    <div className="search-btn" onClick={search1}>

                        <i className="fas fa-search" />
                    </div>
                    <div className="advance-search" onClick={() => setHiden(!hiden)}>Tìm kiếm nâng cao</div>
                    <div className="advance-search" onClick={()=>handlerSkip(0)} style={{marginLeft:'20px'}}>Tất cả</div>

                </div>
                <div className={hiden ? "advanced-search-box hide" : "advanced-search-box"}>
                    <div className="heading">
                        <span>Tìm kiếm nâng cao</span>
                        <span onClick={() => setHiden(!hiden)}>×</span>
                    </div>
                    <div className="filter-line">
                        <div className="tour-id-wrapper">
                            <label htmlFor="tour-id">Tour ID</label>
                            <input type="text" name="tour-id" id="tour-id" placeholder={123} onChange={(event) => setSearchId(event.target.value)} />
                        </div>
                        <div className="tour-type-wrapper">
                            <label htmlFor="tour-type">Loại Tour</label>
                            <select name="tour-type" id="tour-type" onChange={(event) => setSearchType(event.target.value)}>
                                <option value="">Chọn</option>
                                {
                                    types.map((value, key) => {
                                        return (
                                            <option key={key} value={value.type_id}>{value.type_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="filter-line">
                        <div className="tour-location-wrapper">
                            <label htmlFor="tour-location" >Địa điểm</label>
                            {/* <input type="text" name="tour-location" id="tour-location" placeholder="Địa điểm" /> */}
                            <select name="tour-type" id="tour-type" onChange={(event) => setSearchPlace(event.target.value)}>
                                <option value="">Chọn</option>
                                {
                                    places.map((value, key) => {
                                        return (
                                            <option key={key} value={value.place_id}>{value.place_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="tour-start-wrapper">
                            <label htmlFor="tour-start" >Nơi xuất phát</label>
                            <input type="text" name="tour-start" id="tour-start" placeholder="Nơi xuất phát" onChange={(event) => setSearchLoc(event.target.value)} />
                        </div>
                    </div>
                    <div className="filter-line">
                        <div className="tour-start-date-wrapper">
                            <label htmlFor="tour-start-date">Ngày bắt đầu</label>
                            <input type="date" name="tour-start-date" id="tour-start-date" onChange={(event) => setSearchStart(event.target.value)} placeholder="DD/MM/YYYY" />
                        </div>
                        <div className="tour-end-date-wrapper">
                            <label htmlFor="tour-end-date">Ngày kết thúc</label>
                            <input type="date" name="tour-end-date" id="tour-end-date" placeholder="DD/MM/YYYY" onChange={(event) => setSearchEnd(event.target.value)} />
                        </div>
                    </div>
                    <div className="advance-search" onClick={search2}>Tìm kiếm</div>
                </div>
                <div className={hiden ? "table-overlay hide" : "table-overlay"} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tour ID</th>
                            <th>Địa điểm</th>
                            <th>Tiêu đề Tour</th>
                            <th>Loại tour</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Giá người lớn</th>
                            <th>Giá trẻ em</th>
                            <th>Nơi xuất phát</th>
                            <th>Nơi xuất phát</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tours.map((tour, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{tour.tour_id}</td>
                                        {
                                            places.map((place) => {
                                                if (place.place_id === tour.place_id) {
                                                    return <td>{place.place_name}</td>
                                                }
                                            })
                                        }

                                        <td>{tour.tour_title}</td>
                                        {
                                            types.map((type) => {
                                                if (type.type_id === tour.type_id) {
                                                    return <td>{type.type_name}</td>
                                                }
                                            })
                                        }
                                        {/* <td>{tour.type_id}</td> */}
                                        <td>{tour.start_date}</td>
                                        <td>{tour.end_date}</td>
                                        <td>{tour.adult_price}</td>
                                        <td>{tour.kid_price}</td>
                                        <td>{tour.departure_place}</td>
                                        <td className="td-icon">
                                            <div style={{ cursor: 'pointer' }}><img src="./assets/images/landing/check-list_icon.png" alt /></div>
                                            <div style={{ cursor: 'pointer' }}><img src="./assets/images/landing/check-list_icon2.png" alt /></div>
                                            <div style={{ cursor: 'pointer' }} onClick={() => deleteTour(tour.tour_id)}><img src="./assets/images/landing/remove_icon.png" alt /></div>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>

                <div className="advance-search" onClick={() => handlerSkip(skip + 10)}>Xem thêm</div>
                {
                    skip > 0 &&
                    <div className="advance-search" onClick={() => handlerSkip(skip - 10)}>Quay lại</div>

                }

            </div>

        </AdminLayout>
    );
};

export default MTours;