const apiurl_Products = 'http://localhost:5300/products';

const getProduct = async (idProduct) => {
    try{
        const res = await fetch(`${apiurl_Products}/${idProduct}?_expand=category`, {method: 'GET'})
        const product = await res.json();
        return product;
    }catch(e) {
        console.error(e.message);
    }
};

export default getProduct;