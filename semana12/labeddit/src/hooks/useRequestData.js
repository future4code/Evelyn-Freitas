import axios from "axios";
import { useEffect, useState } from "react";
import { goToErrorPage } from '../router/coordinator'

export default function useRequestData(baseUrl) {
    const [data, setData] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(baseUrl, {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                goToErrorPage();
            });
    }, [baseUrl]);

    return data;
}