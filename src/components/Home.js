import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Monster Gear!</h1>
            <p>Get Geared up correctly.</p>
            <div>
                <Link to="/gear">Choose Your Gear</Link>
                <Link to="/weapons">Slice and Dice</Link>
            </div>
        </div>
    )
}