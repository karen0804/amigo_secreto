
let sorteoAmigos = [];

function agregarAmigo(){
    let nombreAmigoSecreto = document.getElementById('amigo').value.trim(); 

    if (nombreAmigoSecreto === "") {
        alert('¡Debes ingresar un nombre!');
        return;
    }
    

    // Quitar Repetidos
    if (sorteoAmigos.includes(nombreAmigoSecreto)){
        alert('Este nombre ya está en la lista.');
        return;
    }

    sorteoAmigos.push(nombreAmigoSecreto);
    
    // Actualizar lista 
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = "";

    sorteoAmigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });

    document.getElementById('amigo').value = ""; 

}

function sortearAmigo(){
    if (sorteoAmigos.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * sorteoAmigos.length);
    let amigoSecreto = sorteoAmigos[indiceAleatorio];

    alert(`Tu amigo secreto es: ${amigoSecreto}`);
}
