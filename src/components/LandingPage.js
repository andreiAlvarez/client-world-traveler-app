import React from 'react';
import { Aus } from '../../images/Australia azul';

export default function LandingPage() {
    return (
        <div className="landing__page">
            <h1>This is my body</h1>
            <img className="stamps" src={Aus} alt="Australia"></img>
        </div>
    )
}
