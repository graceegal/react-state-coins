import { useState } from "react";
import "./CoinFlipper.css";
import Coin from "./Coin";
import Counter from "./Counter";

const coinSides = ["heads", "tails"];

/** Contains coin flipping logic
 *
 * Props: none
 * State: coinSide, headsCount, tailsCount
 *
 * App -> CoinFlipper -> Coin, Counter
 */

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

    return (<div>
        <h3>Flip the coin</h3>
        <Coin coinSide={coinSide}/>
        <button id="flip-btn" onClick={flipCoin}>flip</button>
        <Counter headsCount={headsCount} tailsCount={tailsCount}/>
    </div>)
}

export default CoinFlipper;