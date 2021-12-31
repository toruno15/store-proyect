const apiurl_carProducts = 'http://localhost:5300/carShop';

export const deleteCarPorduct = async (ident) => {
    try{
        const res = await fetch(`${apiurl_carProducts}/${ident}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
    }
    catch(e){
        console.error(e.message);
    }
};