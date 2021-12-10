import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import AddImg from '../components/common/AddImg';
import SiderBar from '../components/common/SiderBar';
import AdminLayout from '../layouts/AdminLayout';
import { service } from '../services/service';
import { useHistory } from "react-router-dom";

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const AddTour = () => {
    const [check, setCheck] = useState(true)
    const [types, setTypes] = useState([])
    const [places, setPlaces] = useState([])

    useEffect(() => {

        Promise.all([
            service.getType(),
            service.getPlace()
        ]).then((data) => {
            setTypes(data[0])
            setPlaces(data[1])
            setCheck(false)
        })

    }, [])
    const history = useHistory()

    const [imgs, setImgs] = useState([])
    const [tour_title, setTour_title] = useState('')
    const [tour_id] = useState(makeid(10))
    const [tour_desc, setTour_desc] = useState('')
    const [end_date, setEnd_date] = useState('')
    const [start_date, setStart_date] = useState('')
    const [kid_price, setKid_price] = useState('')
    const [adult_price, setAdult_price] = useState('')
    const [departure_place, setDeparture_place] = useState('')
    const [transport, setTransport] = useState('')
    const [type_id, setType_id] = useState('')
    const [place_id, setPlace_id] = useState('')


    const [step_number, setStep_number] = useState('1')
    const [route_desc, setRoute_desc] = useState('')
    const [route_name, setRoute_name] = useState('')

    const [step_number2, setStep_number2] = useState('2')
    const [route_desc2, setRoute_desc2] = useState('')
    const [route_name2, setRoute_name2] = useState('')

    const [step_number3, setStep_number3] = useState('3')
    const [route_desc3, setRoute_desc3] = useState('')
    const [route_name3, setRoute_name3] = useState('')

    const submit = () => {
        setCheck(true)
        const data = {
            tour_id: tour_id,

            tour_title,
            tour_bg_img: imgs[0] || '',
            tour_desc,
            end_date,
            start_date,
            kid_price,
            adult_price,
            departure_place,
            transport,
            type_id,
            place_id,
            seat: 30,
            tourguide_id: '1'
        }

        const route1 = {
            step_number,
            route_desc,
            route_name
        }

        const route2 = {
            step_number: step_number2,
            route_desc: route_desc2,
            route_name: route_name2
        }

        const route3 = {
            step_number: step_number3,
            route_desc: route_desc3,
            route_name: route_name3
        }
        console.log(data);

        service.adminCreateTour(data).then((payload) => {
            console.log(payload);
            let reqs = []
            imgs.forEach(item => {
                const data = {
                    link: item,
                    name: ''
                }
                reqs.push(service.adminCreateImg(payload.tour_id, data))
            })
            Promise.all([
                service.adminCreateRoute(payload.tour_id, route1),
                service.adminCreateRoute(payload.tour_id, route2),
                service.adminCreateRoute(payload.tour_id, route3),
                ...reqs
            ]).then((data) => {
                setCheck(false)
                return history.push('/admin')


            }).catch(er => {
                console.log(er);
                setCheck(false)

            })
        }).catch(er => {
            setCheck(false)
            alert('kiểm tra đầy đủ lại thông tin')
        })
    }
    return (
        <AdminLayout check={check}>
            <SiderBar />
            <div>
                <div className="input-form-container">
                    <div className="heading">Nhập thông tin tour</div>
                    <div className="input-group">
                        <div className="input-container">
                            <div className="input-wrapper">
                                <label htmlFor>Tiêu đề Tour</label>
                                <input type="text" name="tour-title" onChange={(event) => setTour_title(event.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor>Địa điểm</label>
                                {/* <input type="text" name="tour-location" onChange={(event)=>setPlace_id(event.target.value)} /> */}
                                <select name="tour-location" onChange={(event) => setPlace_id(event.target.value)} >
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
                            <div className="input-wrapper">
                                <label htmlFor>Giá người lớn (đồng)</label>
                                <input type="text" name="tour-price1" onChange={(event) => setAdult_price(event.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor>Ngày bắt đầu</label>
                                <input type="date" name="tour-start-date" onChange={(event) => setStart_date(event.target.value)} placeholder="DD/MM/YYYY" />
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="input-wrapper">
                                <label htmlFor>Loại Tour</label>
                                {/* <input type="text" name="tour-type" onChange={(event)=>setType_id(event.target.value)} /> */}
                                <select name="tour-location" onChange={(event) => setType_id(event.target.value)} >
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
                            <div className="input-wrapper">
                                <label htmlFor>Nơi xuất phát</label>
                                <input type="text" name="tour-start-pot" onChange={(event) => setDeparture_place(event.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor>Phương tiện</label>
                                <input type="text" name="tour-start-pot" onChange={(event) => setTransport(event.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor>Giá trẻ em (đồng)</label>
                                <input type="text" name="tour-price2" onChange={(event) => setKid_price(event.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor>Ngày kết thúc</label>
                                <input type="date" name="tour-end-date" onChange={(event) => setEnd_date(event.target.value)} placeholder="DD/MM/YYYY" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group desc">
                        <label>Mô tả Tour <span>(tối thiểu 200 chữ, tối đa 800 chữ)</span></label>
                        <div className="input-desc-wrapper">
                            <label htmlFor="input-desc1">Mô tả chi tiết</label>
                            <input className="input-desc" id="input-desc1" type="text" onChange={(event) => setTour_desc(event.target.value)} style={{ backgroundColor: '#fff' }} />
                        </div>
                    </div>
                    <div className="input-group" style={{ display: 'block', marginTop: 24 }}>
                        <div className="heading" style={{ margin: 0 }}>Nhập lịch trình tour</div>
                        <div className="input-group-container" style={{ backgroundColor: '#F5F4F2', padding: 24, margin: '12px 0 36px', borderRadius: 12, boxShadow: '12px 12px 24px 0 rgba(107, 107, 107, 0.25)' }}>
                            <div style={{ display: 'flex' }}>
                                <div className="input-wrapper">
                                    <label htmlFor>Tên chặng</label>
                                    <input type="text" name="way-name" placeholder="Tên chặng" onChange={(event) => setRoute_name(event.target.value)} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor>Thứ tự chặng</label>
                                    <input onChange={(event) => setStep_number(event.target.value)} defaultValue={step_number} type="text" name="way-number" style={{ width: '28%', textAlign: 'center' }} />
                                </div>
                            </div>
                            <div className="input-group desc">
                                <label>Mô tả Tour <span>(tối thiểu 200 chữ, tối đa 800 chữ)</span></label>
                                <div className="input-desc-wrapper">
                                    <label htmlFor="input-desc2">Mô tả chi tiết</label>
                                    <input onChange={(event) => setRoute_desc(event.target.value)} className="input-desc" id="input-desc2" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="input-group-container" style={{ backgroundColor: '#F5F4F2', padding: 24, margin: '12px 0 36px', borderRadius: 12, boxShadow: '12px 12px 24px 0 rgba(107, 107, 107, 0.25)' }}>
                            <div style={{ display: 'flex' }}>
                                <div className="input-wrapper">
                                    <label htmlFor>Tên chặng</label>
                                    <input type="text" name="way-name" placeholder="Tên chặng" onChange={(event) => setRoute_name2(event.target.value)} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor>Thứ tự chặng</label>
                                    <input onChange={(event) => setStep_number2(event.target.value)} defaultValue={step_number2} type="text" name="way-number" style={{ width: '28%', textAlign: 'center' }} />
                                </div>
                            </div>
                            <div className="input-group desc">
                                <label>Mô tả Tour <span>(tối thiểu 200 chữ, tối đa 800 chữ)</span></label>
                                <div className="input-desc-wrapper">
                                    <label htmlFor="input-desc2">Mô tả chi tiết</label>
                                    <input onChange={(event) => setRoute_desc2(event.target.value)} className="input-desc" id="input-desc2" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="input-group-container" style={{ backgroundColor: '#F5F4F2', padding: 24, margin: '12px 0 36px', borderRadius: 12, boxShadow: '12px 12px 24px 0 rgba(107, 107, 107, 0.25)' }}>
                            <div style={{ display: 'flex' }}>
                                <div className="input-wrapper">
                                    <label htmlFor>Tên chặng</label>
                                    <input type="text" name="way-name" placeholder="Tên chặng" onChange={(event) => setRoute_name3(event.target.value)} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor>Thứ tự chặng</label>
                                    <input onChange={(event) => setStep_number3(event.target.value)} defaultValue={step_number3} type="text" name="way-number" style={{ width: '28%', textAlign: 'center' }} />
                                </div>
                            </div>
                            <div className="input-group desc">
                                <label>Mô tả Tour <span>(tối thiểu 200 chữ, tối đa 800 chữ)</span></label>
                                <div className="input-desc-wrapper">
                                    <label htmlFor="input-desc2">Mô tả chi tiết</label>
                                    <input onChange={(event) => setRoute_desc3(event.target.value)} className="input-desc" id="input-desc2" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="advance-search" style={{ float: 'right' }} onClick={submit}>Hoàn tất</div>
                    </div>
                </div>
                <AddImg imgs={imgs} setImgs={setImgs} />
            </div>

        </AdminLayout>
    );
};

export default AddTour;