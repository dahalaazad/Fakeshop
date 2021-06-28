import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
    //const product = useSelector((state) => state.product)    
    const {productId } = useParams();
    console.log({productId});
    const dispatch = useDispatch();
    
    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Err',err);
        });

        dispatch(selectedProducts(response.data));
    }
    
    useEffect(() => {
        if (productId && productId !== '') {
            fetchProductDetail();
        }
    }, [])
    return (
        <div className="ui grid container">
            <div className="ui">
                <div className="ui"></div>
            </div>
        </div>
    );
};

export default ProductDetail;