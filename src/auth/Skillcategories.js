import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout'


const Skillcategories= ({ title, image, rating }) =>{
    return(
        <Layout>
            <div className="skillCategory">
            <img className="skillCategory__image" src={image} alt="" />
            <div className="skillCategory__info">
                <p className="skillCategory__title">{title}</p>
                <p className="skillCategory__price">
                    <small>£</small>
                    {/* <strong>{price}</strong> */}
                </p>
                <div className="skillCategory__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span>⭐</span>
                        ))}
                </div>

            </div>
        </div>
        </Layout>
    )
}


export default Skillcategories