import {useEffect, useState} from 'react';

const FetchDB = () => {
    const url = "http://localhost:4000/user";
    const [users, setUsers] = useState(false)
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data);
            })
            .catch((error) => console.log(error))
    },[])
}

export default FetchDB;




