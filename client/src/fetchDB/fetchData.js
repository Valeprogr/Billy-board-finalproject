import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";

const FetchData =()=>{
    const { loading, request, error, clearError } = useHttp();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const userId = await request("http://localhost:4000/user-util/settings");
            const userData = await request(`http://localhost:4000/user/${userId.id}`);
            setData(userData)
        }
        getData()

    }, [])

}
export default FetchData;