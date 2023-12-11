// Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// Lass dir das Ergebnis in der Konsole ausgeben.
// Teste die Nummern: 35, 74, 123.

function result(number) {
    let diff = number - 27
    if (number > 27){
        newNumber = diff * 2
    }
    console.log(newNumber);
}
result(35)
result(74)
result(123)