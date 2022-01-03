const api_urlUser = 'http://localhost:5300/users';

const getUser = async (index) =>{
    const res = await fetch(`${api_urlUser}/${index}`, {method: 'GET'});
    const user = await res.json();
    return user;
};

export default getUser;