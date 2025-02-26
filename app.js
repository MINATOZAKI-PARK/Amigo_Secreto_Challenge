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
    actualizarLista();
};

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista

    namesFriends.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("role", "listitem");  //Accesibilidad

        lista.appendChild(li); // Agrega el elemento a la lista
    });
};

function sortearAmigo(){
    if (namesFriends.length() > 0){ //Valida que haya al menos un amigo en la lista
        let randomIndex = Math.floor(Math.random() * namesFriends.length())
        let secretFriend = namesFriends[randomIndex];
    }
}