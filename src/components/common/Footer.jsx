/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src="assets/images/landing/cloud.png" className="logo-img" />
                <img src="assets/images/landing/vitra.png" className="logo-text" />
            </div>
            <div className="copyright">
                <h1>© 2021 Vitra.com All rights reserved.</h1>
                <p>
                    The content and images used on this site are copyright protected and copyrights vests with the
                    respective owners.
                    The usage of the <br /> content and images on this website is intended to promote the works and no endorsement
                    of the artist shall be implied.
                    Unauthorized <br /> use is prohibited and punishable by law.
                </p>
            </div>
        </div>
    );
};
