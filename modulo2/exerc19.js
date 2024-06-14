const prompt = require("prompt-sync")();

const horarios = [];

for (let i = 0; i < 5; i++) {
  let valido = false;
  while (!valido) {
    const horario = prompt(`Digite o horário ${i + 1} (HH:MM:SS): `);
    const [hh, mm, ss] = horario.split(":").map(Number);

    if (
      Number.isInteger(hh) &&
      hh >= 0 &&
      hh < 24 &&
      Number.isInteger(mm) &&
      mm >= 0 &&
      mm < 60 &&
      Number.isInteger(ss) &&
      ss >= 0 &&
      ss < 60
    ) {
      horarios.push(
        `${String(hh).padStart(2, "0")}.${String(mm).padStart(2, "0")}.${String(
          ss
        ).padStart(2, "0")}`
      );
      valido = true;
    } else {
      console.log("Horário inválido. Tente novamente.");
    }
  }
}

console.log("Horários válidos no formato HH.MM.SS:");
horarios.forEach((horario) => console.log(horario));
