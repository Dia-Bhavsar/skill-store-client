import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";
// import { history } from 'react-router';

const Product = ({ title, rating, image,history})=> {

  const handleClick = (e) => {
    // history.push('/skillset',{
    //         title: title,
    //         rating:rating,
    //         image:image        
    //     })
    //     console.log("data", title, rating, image)
      };

      
    return (
        <div className="product">
            <Link to = '/skilllist' onClick = {handleClick}>
                <div className="utterance___info">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className = "utterance__text">
            <em>{title}</em>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span>⭐</span>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Product
