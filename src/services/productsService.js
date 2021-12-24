const apiurl_Products = 'http://localhost:5300/products';

export const getProducts = async () => {
    try{
        const res = await fetch(`${apiurl_Products}?_expand=category`, {method: 'GET'})
        const products = await res.json();
        return products;
    }catch(e){
        console.error(e.message)
    }
};

const getProduct = async (idProduct) => {
    try{
        const res = await fetch(`${apiurl_Products}/${idProduct}?_expand=category`, {method: 'GET'})
        const products = await res.json();
        return products;
    }catch(e) {
        console.error(e.message);
    }
};