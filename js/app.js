function Encriptar(){

    var texto = document.getElementById("textoEncriptar").value; //document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("textoDesEncriptar").value = textoCifrado;
    document.getElementById("textoEncriptar").value="";
    //document.getElementById("imagenMuneco").setAttribute('hidden',true);
    //document.getElementById('reiniciar').setAttribute('disabled',true);

}

function DesEncriptar(){ 
    var texto = document.getElementById("textoEncriptar").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("textoDesEncriptar").value = textoCifrado;
    document.getElementById("textoEncriptar").value="";
}

function copiarTexto(){
    var texto = document.getElementById("textoDesEncriptar").value;
    navigator.clipboard.writeText(document.getElementById("textoDesEncriptar").value);
}