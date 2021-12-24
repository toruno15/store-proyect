const apiurl_Categories = 'http://localhost:53000/categories';

export const getCategories = async () => {
    try{
        const res = await fetch(`${apiurl_Categories}`, {method: 'GET'})
        const categories = await res.json();
        return categories;
    }catch(e){
        console.error(e.message)
    }
}
