const apiurl_Categories = 'http://localhost:5300/categories';

const getCategories = async () => {
    try{
        const res = await fetch(`${apiurl_Categories}`, {method: 'GET'})
        const categories = await res.json();
        return categories;
    }catch(e){
        console.error(e.message)
    }
}

export default getCategories;