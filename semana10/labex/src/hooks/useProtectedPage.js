import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export function useProtectedPage() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        // token ? getTripDetail() : history.push('/') 
        if (!token) {
            history.push('/');
        }
    
    }, [history]);
}
