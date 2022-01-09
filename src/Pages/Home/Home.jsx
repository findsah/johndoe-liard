import React, { useState } from 'react'
import { FiFilter } from 'react-icons/fi';
import Experiences from './SubComponents/Experiences';
import { SearchField } from './SubComponents/SearchField';
import { IoIosArrowForward } from 'react-icons/io'
import './Home.css';
import ExperienceData from '../../Helpers/ExperienceData';
import CategoryData from '../../Helpers/CategoryData';
import CategoryCard from './SubComponents/CategoryCard';
import PopupModel from './SubComponents/PopupModel';
import { Link } from 'react-router-dom';

const Home = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='container-fluid' style={{ margin: "0.5rem auto" }}>
            <div className='row align-items-center'>
                <div className='col-10 col-md-11'>
                    <SearchField />
                </div>
                <div className='col-2 col-md-1'>
                    <FiFilter style={{ fontSize: "20px" }} onClick={() => setModalShow(true)} />
                    <PopupModel
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <p className='mainTitle mt-3'>Recent Experiences</p>
            {
                ExperienceData.map(data => (
                    <Link to='/profileoverview' key={data.id} className='anchorStyle'>
                        <Experiences data={data} />
                    </Link>
                ))
            }
            <div className='row mt-3'>
                <div className='col-8'>
                    <p className='mainTitle' >Popular Categories</p>
                </div>
                <div className='col-4' style={{ textAlign: "right" }}>
                    <p>See All <IoIosArrowForward style={{ fontSize: "20px" }} /></p>
                </div>
            </div>
            <div className='row mt-3'>
                {
                    CategoryData.map(data => (
                        <div className='col-6' key={data.id}>
                            <Link to='/profile' key={data.id} className='anchorStyle'>
                                <CategoryCard data={data} />
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className='row mt-3'>
                <div className='col-8'>
                    <p className='mainTitle' >Trending Experiences </p>
                </div>
                <div className='col-4' style={{ textAlign: "right" }}>
                    <p>See All <IoIosArrowForward style={{ fontSize: "20px" }} /></p>
                </div>
            </div>
            {
                ExperienceData.map(data => (
                    <Link to='/publicprofile' key={data.id} className='anchorStyle'>
                        <Experiences data={data} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Home
