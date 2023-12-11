// John und Meike spielen ein Spiel, bei dem sie Punkte für Größe und Alter erhalten.
// Wer bekommt mehr Punkte? John ist 170 cm groß und 22 Jahre alt, Meike ist 168 cm groß und 34 Jahre alt.
// Multipliziere das Alter mit 5 und addiere die Größe.
// Vergleiche die Spieler:innenwerte mit if, else if Statements. Wer die meisten Punkte bekommt, gewinnt.
// Gib die Punkte und den/die Gewinner:in in deiner Konsole aus.
// Vergiss nicht Unentschieden (draw) zu behandeln.

function points() {
    let heightJohn = 170
    let ageJohn = 22
    let pointsJohn = heightJohn + 5* ageJohn
    console.log("John Score: ${pointsJohn}");

    let heightMeike = 168
    let ageMeike = 34
    let pointsMeike = heightMeike + 5* ageMeike
    console.log("Meike Score: ${pointsMeike}");


    if (pointsJohn > pointsMeike){
        console.log("John gewinnt das Spiel mit ${pointsJohn} Punkten");
    }
    else if (pointsJohn < pointsMeike){
        console.log("Meike gewinnt das Spiel mit ${pointsMeike} Punkten");
    }
    else {
        console.log("Gleichstand");
    }
}

points()