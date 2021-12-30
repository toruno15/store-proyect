const apiurl_Categories = 'http://localhost:5300/users';

export const getCategories = async () => {
    try{
        const res = await fetch(`${apiurl_Categories}`, {method: 'GET'})
        const users = await res.json();
        return users;
    }catch(e){
        console.error(e.message)
    }
}
