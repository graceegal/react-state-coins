
/** DOM component, renders coin
 *
 * Props: coinSide
 * State: none
 */

function Coin({ coinSide }) {
    return (
        <h1 id="coin-side">{coinSide}</h1>
    );
}

export default Coin;