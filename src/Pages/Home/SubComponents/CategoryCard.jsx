import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryCard = ({ data }) => {
    return (
        <div className='categoryCard' style={{ backgroundColor: data.color }}>
            <img src={data.img} alt='img' />
            <div className='titleWrapping'>
                <p>{data.title}</p>
                <IoIosArrowForward style={{ fontSize: "15px" }} />
            </div>
        </div>
    )
}

export default CategoryCard
