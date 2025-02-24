// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desarollar funciones para el trabajo 
let friend = []
//Funcion agregarAmigo
function agregarAmigo(){
    // Anexar amigos ingresados por usuario 
    let friendInput = document.getElementById("amigo").value;

    if(friendInput.trim() === ""){

        
        alert("Ingrese un nombre valido")


    }else if(friend.includes(friendInput)){

        alert("Nombre Duplicado")


    }else{
        //agregar friend 
        friend.push(friendInput);

        document.getElementById("amigo").value = "";

        // Actualizar la lista visualmente
        let listaAmigos = document.getElementById("listaAmigos");
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = friendInput;
        listaAmigos.appendChild(nuevoAmigo);


    }

}   
// Función sortearAmigo
function sortearAmigo() {
    if (friend.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    var rand = Math.floor(Math.random() * friend.length);
    var sortearFriend = alert(friend[rand]);
    return sortearFriend;
}
console.log(friend);