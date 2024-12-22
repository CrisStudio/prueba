document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  
  const telefono = "50379124145";

  const cliente = document.querySelector("#cliente").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Cris Studio_*%0A%0A
		*-Detalles de mi cita*%0A%0A
		*Nombre Completo*%0A
		${cliente}%0A
		*-Fecha De Mi reserva*%0A
		${fecha}%0A
		*-Hora De Mi reserva*%0A
		${hora}%0A
		*-Detalle De Mi Servicio*%0A
		${empleado}%0A
		*-Metodo De Pago*%0A
		${servicio}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
