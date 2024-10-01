import * as React from 'react';
import Products from './Products';
import useFetch from '../hooks/useFetch';


const productsApiUrl = 'https://fakestoreapi.com/products';

const ProductsController = ({ selectedCategory }) => {

    const { data: products, loading, error } = useFetch(selectedCategory ? `${productsApiUrl}/category/${selectedCategory}` : productsApiUrl);


    const errorFetch = error || !products;

    
    return (
        errorFetch ? <h1>There was an error fetching products</h1> :
        <Products products={products} selectedCategory={selectedCategory}/>
    );
}

export default ProductsController;