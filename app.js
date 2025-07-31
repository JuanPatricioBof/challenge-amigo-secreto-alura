// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre !== "") {
    amigos.push(nombre);
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
  } else {
    alert("Por favor, ingresa un nombre.");
  }
  limpiarCaja();
  mostrarAmigos();
  console.log(amigos);
}
function limpiarCaja() {
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
}
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if(amigos.length < 1){
        alert("Por favor, agrega al menos un amigo para sortear.");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let amigoResultado = document.getElementById("resultado");
    amigoResultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    condicionesIniciales();
}
function condicionesIniciales() {
    limpiarCaja();
    amigos = [];
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
}
condicionesIniciales();