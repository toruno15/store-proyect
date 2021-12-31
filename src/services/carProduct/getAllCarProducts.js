const apiurl_carProducts = 'http://localhost:5300/carShop';

const getAllCarPorducts = async () => {
    try{
        const res = await fetch(apiurl_carProducts, {method: 'GET'});
        const data = await res.json();
        return data;
    }
    catch(e){
        console.error(e.message);
    }
};

export default getAllCarPorducts;