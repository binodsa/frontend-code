import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hook_ControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounters';

ReactDOM.render(
    <React.StrictMode>
        <Hook_ControlledButtonState />
        <EmojeeCounter pic="Love" />
        <EmojeeCounter pic="Sad" />
        <EmojeeCounter pic="Like" />
    </React.StrictMode>,
    document.getElementById('root')
);