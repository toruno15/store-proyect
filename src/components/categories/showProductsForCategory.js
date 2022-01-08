import React, {useEffect, useState } from 'react';
import { Box } from '@mui/system';
//iimports os componnets
import ListCategories from "./listCategories";
import AllCardsProduts from '../products/allCardsProducts';
import SkeletoMultiple from '../layouts/skeletonMultiple';
//imports of react-router
import { useParams } from 'react-router-dom';
//imports of API's
import getCategory from '../../services/category/getCategory';
import getProducts from '../../services/product/getAllProducts';

export default function ShowProducts(){
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    const { categoryId } = useParams();

    useEffect(() =>{
        getNewCategory();
        getNewProducts();
    }, []);

    const getNewCategory = () =>{
        getCategory(categoryId).then(data => {
            setCategory(data);
        });
    };

    const getNewProducts = () => {
        getProducts().then( data => {
            setProducts(data);
        });
    };

    return(
        <ListCategories>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <h2>Products of category: {category.name}</h2>
            </Box>
            {products.length === 0 ? <SkeletoMultiple/> : <AllCardsProduts objects={products}/>}
        </ListCategories>
    );
}