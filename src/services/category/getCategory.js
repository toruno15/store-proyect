const apiurl_Category = 'http://localhost:5300/categories';

const getCategory = async (ident) => {
    try{
        const res = await fetch(`${apiurl_Category}/${ident}`, {method: 'GET'})
        const category = await res.json();
        return category;
    }catch(e){
        console.error(e.message)
    }
}

export default getCategory;
