// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let namesFriends = [];
let friendsSelected = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let name = input.value.trim(); // Captura el valor y quita espacios extra
    // Validar que el nombre no esté vacío
    if (name === ""){
        alert("Por favor, inserte un nombre.");
        return;
    };
    //Agrega el nombre a la lista de amigos
    if (!namesFriends.includes(name)){
            namesFriends.push(name);
            console.log("Amigo agregado")
    } else {
        alert("El nombre ya existe en la lista.");
        return;
    };
    // Limpiar el input
    input.value = "";
}