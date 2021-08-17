import React from 'react';
import AppRouter from '../../routers/AppRouter';

const DiamiciApp = () => (
    <div className="content">
        <div className="card">
            <div className="card__diagonal-light"></div>
            <div className="card__header"></div>
            <AppRouter />
        </div>
    </div>
);

export default DiamiciApp;