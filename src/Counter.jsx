/** TODO: */

function Counter({ headsCount, tailsCount }) {
    const totalCount = headsCount + tailsCount;

    return (
        <p>Out of {totalCount}, there have been {headsCount} heads and {tailsCount} tails.</p>
    );
}

export Counter;