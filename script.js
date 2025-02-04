const inputs = document.querySelectorAll("input");
        const buttons = document.querySelectorAll("button");
        const resultBox = document.getElementById("result"); 

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                let n1 = parseFloat(inputs[0].value);
                let n2 = parseFloat(inputs[1].value);
                let op = button.innerText;
                let result = "Error"; 
                if (!isNaN(n1) && !isNaN(n2)) {
                    if (op === '+') result = n1 + n2;
                    if (op === '-') result = n1 - n2;
                    if (op === '×') result = n1 * n2;
                    if (op === '/') result = n2 !== 0 ? (n1 / n2).toFixed(2) : "Cannot divide by zero";
                } else {
                    result = "Enter valid numbers!";
                }
                resultBox.innerText = result;
            });
        });