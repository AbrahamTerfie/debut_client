import React from 'react'
import './MenuItem.css'
export default function MenuItem({ title, imageUrl, size, subtitle, linkUrl }) {
    return (
        <div className={`menu-item ${size}`}  >

            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}  >
                <div className='content'>
                    <div className='title'>{title.toUpperCase()}</div>
                    <span className='subtitle'>SHOP NOW</span>

                </div>
            </div>
        </div>
    )
}
