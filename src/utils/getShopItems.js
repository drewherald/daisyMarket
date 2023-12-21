import React, { useEffect } from 'react'
import { useState } from 'react'


export default function getShopItems(index) {

    const [shopItems, setShopItems] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${index}`)
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("server error");
                }
                return response.json();
            })
            .then(json=> setShopItems(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    
    }, [])

    return {shopItems, error, loading}

}

