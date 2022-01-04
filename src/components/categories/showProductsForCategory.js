import React, { useEffect, useState } from 'react';
import ListCategories from "./listCategories";
import AllCardsProduts from '../products/allCardsProducts';
//imports of API's
import getProducts from '../../services/product/getAllProducts';
import Skeleto from '../layouts/skeleton';
import SkeletoMultiple from '../layouts/skeletonMultiple';

export default function ShowProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getNewProducts();
    }, []);

    const getNewProducts = () => {
        getProducts().then( data => {
            setProducts(data);
        });
    };

    return(
        <ListCategories>
            {products.length === 0 ? <SkeletoMultiple/> : <AllCardsProduts objects={products}/>}
        </ListCategories>
    );
}