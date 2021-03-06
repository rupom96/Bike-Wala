import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import './HomeBike.css';
// import ScrollAnimation from 'react-animate-on-scroll';

const HomeBike = (props) => {
    const { name, s_details, image, _id } = props.service;
    return (

        <div>
            <ScrollAnimation animateIn="flipInY">
                <div className="col h-100">
                    <div className="card h-100">

                        <img src={image} className="card-img-top service-img" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{s_details}</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid gap-2">
                                <Link to={`/details/${_id}`}>
                                    <button className="btn btn-primary" type="button">Pucrchase Details</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollAnimation>

        </div >

    );
};

export default HomeBike;