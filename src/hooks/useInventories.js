import { useEffect, useState } from "react";

const useInventories = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-mesa-10052.herokuapp.com/manageInventory')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services,setServices]
}
export default useInventories;