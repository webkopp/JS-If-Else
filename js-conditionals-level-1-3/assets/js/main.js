// Lernziel: Anwendung und Syntax von if/else-Statements in JavaScript, um bedingte Logik im Code zu integrieren
// Wir benötigen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion adult().
// Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.
// Im Funktionskörper:
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “Volljährig” oder “Minderjährig” ausgeben.

function adult() {
    let age = document.getElementById("#ageInput").value;
    let output = document.querySelector("#output");

    if (age >= 18) {
    console.log("volljährig");
    output.innerHTML = "Volljährig";
    } else {
    console.log("minderjährig");
    output.innerHTML = "Minderjährig.";
    }
}