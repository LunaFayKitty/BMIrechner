document.getElementById("calculate").addEventListener("click", function () {
  calculateBMI();
});
document.getElementById("reset").addEventListener("click", function () {
  location.reload();
});

function calculateBMI() {
  // Werte aus den Input-Feldern lesen
  let height = +document.getElementById("height").value;
  let weight = +document.getElementById("weight").value;

  if (isNaN(height) || isNaN(weight)) {
    alert("Bitte geben Sie gültige Zahlen ein.");
    return;
  }

  // Ergebnis berechnen
  let bmi = (weight / (height / 100) ** 2).toFixed(1);

  let result;
  if (bmi < 18.5) result = "Sie gelten als: Untergewichtig";
  else if (bmi < 25) result = "Sie gelten als: Normalgewichtig";
  else if (bmi < 30) result = "Sie gelten als: Übergewichtig";
  else result = "Sie gelten als: Adipös";

  // Ergebnis anzeigen
  document.getElementById("bmiWert").textContent = bmi;
  document.getElementById("result").textContent = result;
}
