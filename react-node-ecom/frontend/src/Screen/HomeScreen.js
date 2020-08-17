import React from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';

function HomeScreen(props){
    return (
    <ul className="products">
    {
            data.products.map(product => 
            <li>
                <div className="product">
                    <img className="product-image" src={product.image} alt=""/>
                    <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">RM {product.price}</div>
                    <div className="product-rating">{product.rating} Stars {product.totalReviews}</div>
                </div>
            </li>)
        }
    </ul>
    );
}

export default HomeScreen;