import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            setData((response.data))
        })
        .catch((error) => {
            console.log(error, "Erro na requisição de dados.")
        })
    }, [url]);

    return data;
}
