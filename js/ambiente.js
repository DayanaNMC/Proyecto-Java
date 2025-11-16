function aire() {
  let n = Number(document.getElementById("aqi").value);
  let r = "";

  if (n <= 50) r = "Bueno";
  else if (n <= 100) r = "Moderado";
  else if (n <= 150) r = "Dañino para sensibles";
  else r = "Muy dañino";

  document.getElementById("a1").innerText = "Calidad del aire: " + r;
}

function ruido() {
  let n = Number(document.getElementById("numR").value);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    let d = Number(prompt("Decibeles medición " + i));
    sum += d;
  }

  let p = (sum / n).toFixed(1);

  document.getElementById("a2").innerText = "Promedio: " + p + " dB";
}

function focos() {
  let t = 0, c = 0;

  while (true) {
    t = Number(prompt("Temperatura (0 para terminar):"));
    if (t === 0) break;
    if (t > 45) c++;
  }
  document.getElementById("a3").innerText =
    "Focos de calor detectados: " + c;
}

function resid() {
  let c = Number(document.getElementById("residuo").value);
  let r = "";

  switch (c) {
    case 1: r = "Orgánico"; break;
    case 2: r = "Plástico"; break;
    case 3: r = "Papel/Cartón"; break;
    case 4: r = "Vidrio"; break;
    default: r = "Código inválido";
  }

  document.getElementById("a4").innerText = "Residuo: " + r;
}

function rio() {
  let seguir, niveles = [];

  do {
    let n = Number(prompt("Nivel del río (m):"));
    niveles.push(n);
    seguir = prompt("¿Otro? (si/no)");
  } while (seguir === "si");

  let alerta = niveles.some(n => n > 3)
    ? "⚠ Riesgo de desborde"
    : "Nivel estable";

  document.getElementById("a5").innerText =
    "Niveles: " + niveles.join(", ") + " | " + alerta;
}
