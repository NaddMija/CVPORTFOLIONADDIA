setInterval(function() {
  location.barrasanimadas=location.barrasanimadas;
}, 1000 *3);

function cambiarNombre() {
  let nombreInput=prompt("ingrese el nuevo valor de Nombre");
  document.getElementById("nombre").innerHTML=nombreInput;
}
function cambiarFot(){
  document.getElementById("fot").src="assets/naddia.png";
}
function cambiarProfesión() {
  let profesiónInput=prompt("ingrese el nuevo valor de Profesión");document.getElementById("profesión").innerHTML=profesiónInput;
}
function cambiarBio() {
  document.getElementById("bio").textContent="ingrese el nuevo valor de bio";
}
