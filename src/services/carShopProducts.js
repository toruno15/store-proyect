const apiurl_Categories = 'http://localhost:5300/ProductscarShop';

export const getCarProduct = async (ident) => {
    try{
        const res = await fetch(`${apiurl_Categories}/${ident}?_expand=product`, {method: 'GET'})
        const products = await res.json();
        return products;
    }catch(e){
        console.error(e.message)
    }
}