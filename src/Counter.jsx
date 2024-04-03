
/** DOM component, renders count of coin flips for heads and tails
 *
 * Props: headsCount, tailsCount
 * State: none
 */

function Counter({ headsCount, tailsCount }) {
    const totalCount = headsCount + tailsCount;

    return (
        <p id="coin-counter">Out of {totalCount}, there have been {headsCount} heads and {tailsCount} tails.</p>
    );
}

export default Counter;