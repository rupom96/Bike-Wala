import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import { Button, Card } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import HomeBike from '../HomeBike/HomeBike';

const HomeBikes = () => {
    const [data] = useData();
    data.splice(6);

    const handleClickService = () => {

    }

    return (
        <div className="mt-5 pt-5">
            <ScrollAnimation animateIn="fadeInUp">
                <h1 id="productsid">Our Products:</h1>
            </ScrollAnimation>
            <div className="card-container px-5 mt-5">

                {data.length === 0 &&

                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per card will be set here */}
                    {
                        data.map(data =>
                            <HomeBike
                                key={data._id}
                                service={data}
                                handleClickService={handleClickService}
                            ></HomeBike>)
                    }


                </div>

            </div>

        </div>
    );
};

export default HomeBikes;