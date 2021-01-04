import axios from "axios";
import { useEffect, useState } from "react";
import { goToErrorPage } from '../router/coordinator'


export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(url, {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return data;
}