const apiurl_Products = 'http://localhost:5300/products';

const getProducts = async () => {
    try{
        const res = await fetch(`${apiurl_Products}?_expand=category`, {method: 'GET'})
        const products = await res.json();
        return products;
    }catch(e){
        console.error(e.message)
    }
};

export default getProducts;