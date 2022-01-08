const api_urlUser =  'http://localhost:5300/users';

const addUser = async (object) =>{
    try{
        const res = await fetch(api_urlUser, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }
    catch(e){
        console.log(e.message);
    }
};

export default addUser;