const apiurl_carProducts = 'http://localhost:5300/carShop';

const addCarProduct = async (object, ident) => {
    try{
        const res = await fetch(`${apiurl_carProducts}/${ident}`, {
            method: 'PUT',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }
    catch(e){
        console.error(e.message);
    }
};

export default addCarProduct;