import React from 'react'
import image5 from "./b89bd46b0199b2e1fdea79370982ebcd.jpg"
import image4 from "./b89bd46b0199b2e1fdea79370982ebcd.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function ImageSlider() {
    return (
        <div className="container-fluid container p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                         src={image5} alt="Image" style={{ height: "70vh", width: "100%" }}   />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px", marginBottom: "164px" }}>
                                <h1 className="text-white text-uppercase mb-3 animated slideInDown">head phone</h1>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-">
                        <img src={image4} alt="Image" style={{ height: "70vh", width: "100%" }} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px", marginBottom: "164px" }}>
                                <h1 className="text-white text-uppercase mb-3 animated slideInDown">head phone</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ImageSlider