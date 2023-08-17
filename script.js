document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ropeForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const input = document.getElementById("ropeInput").value;
        const lengths = input.split(",").map(Number);

        const minCost = calculateMinimumCost(lengths);
        resultDiv.innerHTML = `Minimum Cost: ${minCost}`;
    });

    function calculateMinimumCost(lengths) {
        lengths.sort((a, b) => a - b);

        let totalCost = 0;
        while (lengths.length > 1) {
            const cost = lengths[0] + lengths[1];
            totalCost += cost;

            // Merge the two smallest ropes into one and remove them from the array
            lengths.splice(0, 2, cost);
            lengths.sort((a, b) => a - b);
        }

        return totalCost;
    }
});
