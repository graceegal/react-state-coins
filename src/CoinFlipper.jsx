import { useState } from "react";
import "./CoinFlipper.css";
import "./Coin";
import "./Counter";

const coinSides = ["heads", "tails"];

/** TODO: */

function CoinFlipper () {
    const [coinSide, setCoinSide] = useState(null);
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);

    function flipCoin() {
        const idx = Math.floor(Math.random() * 2);
        const side = coinSides[idx];
        setCoinSide(side);
        if (side === "heads") {
            setHeadsCount(c => c+1);
        } else {
            setTailsCount(c => c+1);
        }
    }


}

export default CoinFlipper;