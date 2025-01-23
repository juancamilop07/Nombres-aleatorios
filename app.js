let amigos = [];

function valorTexto(elemento, texto){
    let asignarTextoHTML= document.querySelector(elemento);
    asignarTextoHTML.innerHTML = texto;
    return;
}

function validadorCampoVacio(){
    let nombre = document.getElementById("amigo").value;
    console.log(typeof(nombre));
    if(nombre == ""){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(nombre);
        document.getElementById("amigo").value="";
        console.log(amigos);
        listaAmigos();
        return;
    }
}

function listaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (let i = 0; i<amigos.length; i++){
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        lista.appendChild(item); 

    }
    return;
}

function nombreAleatorio(){
    if(amigos.length == 0){
        valorTexto("h2","No hay amigos ingresados")
    }else {
        let indiceAmigoSecreto = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[indiceAmigoSecreto];
        console.log(amigoSecreto);
        valorTexto("h2",amigoSecreto);
        return;
    }
}

