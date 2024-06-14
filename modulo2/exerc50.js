const prompt = require("prompt-sync")();

const hoteis = [];
const reservas = [];

function adicionarHotel(id, nome, cidade, quartosTotais) {
  hoteis.push({
    id,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
  });
}

function buscarHoteisPorCidade(cidade) {
  return hoteis.filter((hotel) => hotel.cidade === cidade);
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
  const hotel = hoteis.find((h) => h.id === idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    reservas.push({ idReserva, idHotel, nomeCliente });
    hotel.quartosDisponiveis--;
  } else {
    console.log("Reserva não pode ser realizada. Quartos indisponíveis.");
  }
}

function cancelarReserva(idReserva) {
  const reserva = reservas.find((r) => r.idReserva === idReserva);
  if (reserva) {
    const hotel = hoteis.find((h) => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    reservas.splice(reservas.indexOf(reserva), 1);
  } else {
    console.log("Reserva não encontrada.");
  }
}

function listarReservas() {
  return reservas.map((reserva) => {
    const hotel = hoteis.find((h) => h.id === reserva.idHotel);
    return { ...reserva, nomeHotel: hotel.nome, cidadeHotel: hotel.cidade };
  });
}


adicionarHotel(1, "Hotel A", "São Paulo", 10);
adicionarHotel(2, "Hotel B", "Rio de Janeiro", 5);

console.log("Hotéis em São Paulo:");
console.log(buscarHoteisPorCidade("São Paulo"));

fazerReserva(1, 1, "Cliente 1");
fazerReserva(2, 1, "Cliente 2");

console.log("Reservas:");
console.log(listarReservas());

cancelarReserva(1);

console.log("Reservas após cancelamento:");
console.log(listarReservas());
