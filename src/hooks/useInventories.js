import { useEffect, useState } from "react";

const useInventories = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services,setServices]
}
export default useInventories;