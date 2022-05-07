import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId => {
    const [service,setService] = useState({});
    useEffect(()=>{
        const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[inventoryId])
    return [service];
}
export default useInventoryDetail;