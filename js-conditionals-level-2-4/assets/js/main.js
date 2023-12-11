// Schreibe eine Funktion mit zwei Parametern (Zahlen).
// Die Funktion soll die Summe dieser Zahlen berechnen.
// Wenn beide Parameter gleich sind, soll sie (Summe * 5) ausgeben.

// if else
// functions
// logical operators

function nancy(num1, num2) {
    let total = num1 + num2
    if (num1 === num2) {
        console.log(total * 5);
    }
}

nancy(10, 10)