const api_urlUser = 'http://localhost:5300/users';

const getUsers = async (userString, passwordString) => {
    let isContains = false;
    const res = await fetch(api_urlUser, {method: 'GET'});
    const users = await res.json();
    users.map((user) =>{
        if((userString.toLowerCase() === user.userName.toLowerCase()) && (passwordString == user.password)){
            isContains = true;
        }
    });
    return isContains;
};


export default getUsers;