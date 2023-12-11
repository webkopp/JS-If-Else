// Erstelle ein HTML-Formular zur Eingabe der Wetter-Qualität in Zahlen von 0 bis 10.
// Deklariere die Funktion weather(), nutze im Funktionskörper Conditional Statements (if...else) und gebe die Ergebnisse im HTML aus:
// Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
// Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
// Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
// Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.

// Lese nochmal nach was logical und comparison operators sind.

function weather() {
    let wetter = document.querySelector("#weather").value
    let output = document.querySelector("#message")

    if (wetter >= 8 && wetter <= 10){
        output.innerHTML = "super"
    }
    else if (wetter >= 6 && wetter <= 7){
        output.innerHTML = "gut"
    }
    else if (wetter >=3 && wetter <= 5){
        output.innerHTML = "okay"
    }
    else if (wetter >= 0 && wetter <= 2){
        output.innerHTML = "schlecht"
    }
}