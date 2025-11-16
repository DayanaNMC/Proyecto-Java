function brillo() {
  let m = Number(document.getElementById("mag").value);
  let r = "";

  if (m < 0) r = "Extremadamente brillante";
  else if (m < 2) r = "Muy brillante";
  else if (m < 4) r = "Brillante";
  else if (m < 6) r = "Débil";
  else r = "No visible";

  document.getElementById("as1").innerText = "Brillo: " + r;
}

function distancias() {
  let n = Number(document.getElementById("numD").value);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    let d = Number(prompt("Distancia planeta " + i + " (millones de km):"));
    sum += d;
  }

  let prom = (sum / n).toFixed(1);
  document.getElementById("as2").innerText =
    "Promedio: " + prom + " millones de km";
}

function crateres() {
  let d = 0, c = 0;

  while (true) {
    d = Number(prompt("Diámetro cráter (0 = salir):"));
    if (d === 0) break;
    if (d > 50) c++;
  }

  document.getElementById("as3").innerText =
    "Cráteres > 50km: " + c;
}

function cuerpo() {
  let c = Number(document.getElementById("codC").value);
  let r = "";

  switch (c) {
    case 1: r = "Estrella"; break;
    case 2: r = "Planeta"; break;
    case 3: r = "Cometa"; break;
    case 4: r = "Asteroide"; break;
    case 5: r = "Galaxia"; break;
    default: r = "Código inválido";
  }

  document.getElementById("as4").innerText = "Cuerpo celeste: " + r;
}

function luz() {
  let seguir, niv = [];

  do {
    let l = Number(prompt("Nivel de luz (lux):"));
    niv.push(l);
    seguir = prompt("¿Otro? (si/no)");
  } while (seguir === "si");

  let alerta = niv.some(n => n < 5)
    ? "Noche profunda detectada"
    : "Luz normal";

  document.getElementById("as5").innerText =
    "Niveles: " + niv.join(", ") + " | " + alerta;
}
