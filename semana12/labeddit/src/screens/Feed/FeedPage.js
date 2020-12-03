import React from 'react';
import { useHistory } from 'react-router-dom'
import AppNavBar from '../../components/AppNavBar/AppNavBar';

export default function FeedPage() {
    const history = useHistory();

    return (
        <div>
            <AppNavBar />
        </div>
    );
}

