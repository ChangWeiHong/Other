import React from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';

function ProductScreen(props){
    const product = data.products.find(x => x.id === props.match.params.id)
    return (
    
    <div>
        <div>
            <Link to="/">Back</Link>
        </div>
        
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"/>
            </div>
        </div>
        
        <div className="details-info">
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    {product.rating} Stars ({product.totalReviews});
                </li>
                <li>
                    <b>{product.price}</b>
                </li>
                <li>
                    <p>{product.descriptions}</p>
                </li>
            </ul>
        </div>
    
    </div>
    
    );
    
}

export default ProductScreen;