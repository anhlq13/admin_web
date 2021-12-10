import { Link } from 'react-router-dom';

const SiderBar = () => {
    return (
        <div className="vertical-nav add-tour" style={{ height: '1906px' }} >
            <ul className="nav-list">
                {/* <li className="nav-item">
                    <div className="nav-item-heading">
                        <span>Quản trị</span>
                    </div>
                </li> */}
                <li className="nav-item">
                    <div className="nav-item-heading">
                        <span>Tours</span>
                        {/* <span><img src="./assets/images/landing/chevron-down_icon.png" alt /></span> */}
                    </div>
                    <ul className="nav-item-children">
                        <li className="nav-item-child">
                            <Link to="/admin" className="current-nav">Danh sách Tours</Link>
                        </li>
                        <li className="nav-item-child">
                            <Link to="/admin/addtour" className="current-nav">Thêm Tour</Link>
                        </li>
                    </ul>
                </li>
                {/* <li className="nav-item">
                    <div className="nav-item-heading">
                        <span>Thêm Tour</span>
                    </div>
                </li> */}
                <li className="nav-item">
                    <div className="nav-item-heading">
                        <span>Bookings</span>
                        {/* <span><img src="./assets/images/landing/chevron-down_icon.png" alt /></span> */}
                    </div>
                    <ul className="nav-item-children">
                        <li className="nav-item-child">
                            <Link to="/admin/confirm" className="current-nav">Xác nhận tour</Link>
                        </li>
                    </ul>
                </li>
                {/* <li className="nav-item">
                    <div className="nav-item-heading">
                        <span>Người dùng</span>
                        <span><img src="./assets/images/landing/chevron-down_icon.png" alt /></span>
                    </div>
                    <ul className="nav-item-children hide">
                        <li className="nav-item-child">
                            <a href="#">Người dùng 1</a>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>

    );
};

export default SiderBar;