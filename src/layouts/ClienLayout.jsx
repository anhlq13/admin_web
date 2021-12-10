import React from 'react';
import {Header, Footer} from '../components/common';
import Scroll from '../Scroll';

const ClienLayout = ({children, check = false}) => {

    return (
        <div className="container">
            <div className="loading" style={!check ? {display: 'none'} : null}>
                <h1 className="textloading"><div class="loader"></div></h1>
                
            </div>
            <Header />
            <Scroll />
            {children}
            <Footer />
        </div>
    );
};

export default ClienLayout;