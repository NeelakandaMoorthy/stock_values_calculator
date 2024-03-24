
    function calculateResults() {
        const highest = parseFloat(document.getElementById('highest').value);
        const lowest = parseFloat(document.getElementById('lowest').value);

        if (isNaN(highest) || isNaN(lowest)) {
            alert("Please enter valid numbers.");
            return;
        }

        const average = (highest + lowest) / 2;
        const subtractedValue = highest - lowest;

        document.getElementById('result1').innerHTML = "50X: " + average.toFixed(2);
        document.getElementById('result2').innerHTML = "Difference: " + subtractedValue;
        document.getElementById('result3').innerHTML = "Value: " + (subtractedValue / 2).toFixed(2);

        document.getElementById('result1').className = "result green";
        document.getElementById('result2').className = "result blue";
        document.getElementById('result3').className = "result pink";
    }

    function calculateValues() {
        const open = parseFloat(document.getElementById("open").value);
        const high = parseFloat(document.getElementById("high").value);
        const low = parseFloat(document.getElementById("low").value);
        const close = parseFloat(document.getElementById("close").value);

        let X;

        if (close < open) {
            X = high + (low * 2) + close;
        } else if (close > open) {
            X = (high * 2) + low + close;
        } else {
            X = high + low + (close * 2);
        }

        const R1 = (X / 2 - low).toFixed(2);
        const Pivot = (X / 4).toFixed(2);
        const S1 = (X / 2 - high).toFixed(2);

        document.getElementById("result").innerHTML = `
            <p class="blue">R1: ${R1}</p>
            <p class="green">Pivot: ${Pivot}</p>
            <p class="blue">S1: ${S1}</p>
        `;
    }