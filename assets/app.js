let texto = "Hola mundo";
let copiar =  document.getElementById('resultado_area');
let botonCopiar = document.getElementById("botonCopiar");
let respuesta = "";

// Creamos el diccionario con los valores encriptados
const listaEncriptada = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
};
let listaDesencriptada = {};

// Metodo para invertir los valores del diccionario
for (let [clave, valor] of Object.entries(listaEncriptada)){
    listaDesencriptada[valor] = clave;
}

// Creamos una funcion para Encriptar
function encriptadorDeTexto(texto){
    let encriptada = []; // Declaramos una lista
    for(let i = 0; i < texto.length; i++){ // Se realiza un bucle
        if(!(texto[i] in listaEncriptada)){ 
            encriptada.push(texto[i])
        }else if( texto[i] in listaEncriptada){ 
            encriptada.push(listaEncriptada[texto[i]]);
        }else{
            console.log("ERROR!!!!");
        }
    }
    return encriptada;
}

function desencriptadorDeTexto(textoEncriptado){
    let desencriptada = ""; // Declaramos una cadena vacía
    let i = 0;
    while (i < textoEncriptado.length) {
        let matched = false;
        for (let [clave, valor] of Object.entries(listaDesencriptada)) {
            if (textoEncriptado.substring(i, i + clave.length) === clave) {
                desencriptada += valor;
                i += clave.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            desencriptada += textoEncriptado[i];
            i++;
        }
    }
    return desencriptada.split('');
}

function mostrarListaEnTexto(tipo){
    let valor = "";
    for(let i = 0; i < tipo.length; i++){
        valor += tipo[i];
    }
    return valor;
}

function encriptarInput(){
    let texto_area = document.getElementById("insertar").value;
    if(/^[a-z\s]+$/.test(texto_area)){
        respuesta = encriptadorDeTexto(texto_area);
        console.log(mostrarListaEnTexto(respuesta));
        document.getElementById('area_guia').setAttribute('hidden', false);
        document.getElementById('area_resultado').removeAttribute('hidden');
        let elementoAreaResultado = document.getElementById('resultado_area');
        elementoAreaResultado.innerHTML = mostrarListaEnTexto(respuesta);
        document.getElementById("insertar").value= "";
    }
    
}

function desencriptarInput(){
    let texto_area = document.getElementById("insertar").value;
    if(/^[a-z\s]+$/.test(texto_area)){
        respuesta = desencriptadorDeTexto(texto_area);
        console.log(mostrarListaEnTexto(respuesta));
        document.getElementById('area_guia').setAttribute('hidden', false);
        document.getElementById('area_resultado').removeAttribute('hidden');
        let elementoAreaResultado = document.getElementById('resultado_area');
        elementoAreaResultado.innerHTML = mostrarListaEnTexto(respuesta);
        document.getElementById("insertar").value= "";
    }

}


function mostrarTiempoRealAdvertencia(valor){

    
    if(/^[a-z\s]+$/.test(valor)){
        document.getElementById("encriptador").removeAttribute('disabled');
        document.getElementById("desencriptador").removeAttribute('disabled');
        document.getElementById("advertencia").style.color = "white";  
        
    }else{
        document.getElementById("encriptador").setAttribute('disabled', true);
        document.getElementById("desencriptador").setAttribute('disabled', true);
        document.getElementById("advertencia").style.color = "red";
    }
}


/*Metodo para copiar texto*/
const copyToClipboard = async texto => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log("copiado");
    } catch (error) {
      console.log(error);
    }
  };

botonCopiar.addEventListener("click", () =>{
    copyToClipboard(copiar.textContent);
});

// let test1= "holá1";

// if(!(/\d/.test(test1))){
//     console.log("hay numeros");
// }else{
//     console.log("no hay numeros");
// }
