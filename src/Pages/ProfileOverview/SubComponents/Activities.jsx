import React from 'react'
import activity from '../../../assets/activity1.png'

const Activities = () => {
    var activityArr = [1, 2, 3, 4]
    return (
        <>
            {
                activityArr.map(item => (
                    <div className='row activityCard' key={item}>
                        <div className='col-2 col-md-1 text-align-center'>
                            <img className='activityImg' src={activity} alt='activity' />
                        </div>
                        <div className='col-10 col-md-11'>
                            <p style={{ fontSize: "16px" }}><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</p>
                            <span className='expSpan'>2 days ago</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Activities
