/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

const AddImg = ({ imgs, setImgs }) => {
    const [link, setLink] = useState('')
    const addImg = () => {
        setImgs([
            ...imgs,
            link
        ])
        setLink('')
        console.log(link);
    }

    const destroy = (img) =>{
        const data = imgs.filter(item => item !== img)
        setImgs(data)
        console.log(imgs);
    }

    return (
        <div className="img-tour-desc">
            <h1>Ảnh mô tả tour <span>(tối thiểu 1)</span></h1>
            <div className="input-add">
                <input type="text" name="input-add" value={link} onChange={(event) => setLink(event.target.value)} />
                <i className="fas fa-plus" onClick={addImg} />
            </div>
            <div className="img-tour-desc-container">
                {
                    imgs.map((img, key) => {
                        return (
                            <div className="item" key = {key}>
                                <div className="img-link-wrapper">
                                    <p className="img-link">{img}</p>
                                </div>
                                <div className="img-wrapper">
                                    <img src={img} />
                                </div>
                                <img onClick={()=>destroy(img)} src="./assets/images/landing/takeaway-icon.png" />
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
};

export default AddImg;