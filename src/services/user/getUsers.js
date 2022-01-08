const api_urlUser = 'http://localhost:5300/users';

const getUsers = async (userString, passwordString) => {
    let isContains = null;
    const res = await fetch(api_urlUser, {method: 'GET'});
    const users = await res.json();
    users.map((user) =>{
        if((userString.toLowerCase() === user.userName.toLowerCase()) && (passwordString == user.password)){
            isContains = user;
        }
    });
    return isContains;
};


export default getUsers;