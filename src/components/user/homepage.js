import React from 'react'
import './homepage.css';
import Banner from './banner';
import Footer from './footer';
import Navigation from './navigation';

export default function Homepage(props) {
    return (
    <>
    <div className="whole">
        <Banner />
        <Navigation />
        <div className="homepage-body-wrapper">
            <div className="homepage-body">
                <div className="homepage-contents">

                </div>
                <div  className="homepage-announcement">
                    <div>
                        lorem ipsum
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
    )
}
