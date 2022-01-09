import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Experiences = ({ data }) => {
    return (
        <div className='row expHorizantalCard'>
            <div className='col-3 col-lg-1'>
                <img className='defiImg' src={data.img} alt='expimg' />
            </div>
            <div className='col-7 col-lg-9'>
                <p className='expTitle'>{data.title}</p>
                <span className='expSpan'>{data.subTitle}</span><br />
                <span className='expSpan'>{data.users}</span>
            </div>
            <div className='col-2 col-lg-2' style={{ margin: "auto 0", textAlign: "right" }}>
                <IoIosArrowForward style={{ fontSize: "25px" }} />
            </div>
        </div>
    )
}

export default Experiences
