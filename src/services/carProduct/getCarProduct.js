const apiurl_carProducts = 'http://localhost:5300/carShop';

const getCarPorduct = async (index) => {
    try{
        const res = await fetch(`${apiurl_carProducts}/${index}`, {method: 'GET'});
        const data = await res.json();
        return data;
    }
    catch(e){
        console.error(e.message);
    }
};

export default getCarPorduct;