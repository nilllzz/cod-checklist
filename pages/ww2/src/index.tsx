import * as React from "react";
import { render } from 'react-dom';
import PageRouter from './router';

render(
    <PageRouter />,
    document.getElementById('container')
);

const fireToggle = localStorage.getItem('ww2-config-fire');
if (fireToggle === null || JSON.parse(fireToggle)) {
    var fire = require('./fire.js');
}
