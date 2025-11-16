function presion() {
  let sis = Number(document.getElementById("sis").value);
  let dia = Number(document.getElementById("dia").value);
  let r = "";

  if (sis < 120 && dia < 80) r = "Normal";
  else if (sis < 130 && dia < 80) r = "Elevada";
  else if (sis < 140 || dia < 90) r = "HTA grado 1";
  else r = "HTA grado 2";

  document.getElementById("res1").innerText =
    "Resultado: " + r + " (PLUS: consejo: mantén una dieta baja en sal)";
}

function temperaturas() {
  let n = Number(document.getElementById("numPac").value);
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    let t = Number(prompt("Temperatura del paciente " + i));
    suma += t;
  }

  let prom = (suma / n).toFixed(1);
  document.getElementById("res2").innerText = "Promedio: " + prom + "°C";
}

function fiebre() {
  let temp = 0;
  let cont = 0;

  while (true) {
    temp = Number(prompt("Ingresa temperatura (0 para terminar):"));
    if (temp === 0) break;
    if (temp >= 38) cont++;
  }

  document.getElementById("res3").innerText =
    "Pacientes con fiebre: " + cont ;
}

function triage() {
  let c = Number(document.getElementById("tri").value);
  let r = "";

  switch (c) {
    case 1: r = "Rojo (emergencia)"; break;
    case 2: r = "Amarillo (urgente)"; break;
    case 3: r = "Verde (leve)"; break;
    case 4: r = "Azul (mínimo)"; break;
    default: r = "Código inválido";
  }

  document.getElementById("res4").innerText = "Categoría: " + r;
}

function saturacion() {
  let seguir;
  let historial = [];

  do {
    let s = Number(prompt("Ingresa saturación:"));
    historial.push(s);
    seguir = prompt("¿Registrar otra? (si/no)");
  } while (seguir === "si");

  document.getElementById("res5").innerText =
    "Historial SpO2: " + historial.join(", ");
}
