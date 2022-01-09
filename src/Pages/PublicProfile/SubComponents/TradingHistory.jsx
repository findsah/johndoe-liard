import React from 'react'
import activity from '../../../assets/activity1.png'

const TradingHistory = () => {
    return (
        <>
            <div className='row activityCard'>
                <div className='col-2 text-align-center'>
                    <img className='activityImg' src={activity} alt='img' />
                </div>
                <div className='col-10'>
                    <p style={{ fontSize: "16px" }}><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</p>
                    <span className='expSpan'>2 days ago</span>
                </div>
            </div>
            <div className='row activityCard'>
                <div className='col-2 text-align-center'>
                    <img className='activityImg' src={activity} alt='img' />
                </div>
                <div className='col-10'>
                    <p style={{ fontSize: "16px" }}><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</p>
                    <span className='expSpan'>2 days ago</span>
                </div>
            </div>
            <div className='row activityCard'>
                <div className='col-2 text-align-center'>
                    <img className='activityImg' src={activity} alt='img' />
                </div>
                <div className='col-10'>
                    <p style={{ fontSize: "16px" }}><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</p>
                    <span className='expSpan'>2 days ago</span>
                </div>
            </div><div className='row activityCard'>
                <div className='col-2 text-align-center'>
                    <img className='activityImg' src={activity} alt='img' />
                </div>
                <div className='col-10'>
                    <p style={{ fontSize: "16px" }}><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</p>
                    <span className='expSpan'>2 days ago</span>
                </div>
            </div>
        </>
    )
}

export default TradingHistory
