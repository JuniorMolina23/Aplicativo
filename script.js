const mtrs = [33,17,43,15,1,11,32,0,34,17,7,0,33,1]
const ruta = ['una curva hacia la izquierda','el ingreso hacia Arquitectura',
'una curva hacia la derecha','los bebederos','una curva hacia la izquierda','una rampa','un el Auditorio de Electronica',
'una curva hacia la derecha','los baños de Electrotecnia a la izquierda','una curva hacia la derecha','la puerta de Telecomunicaciones',
'una curva hacia la derecha','el salon 101','los baños de telecomunicaciones'];
var score = 0;
var a = "";
var b;
function myGeeks() {
    if (score <= 13){
        a = ruta[score]
        b = mtrs[score]
        document.getElementById('m').innerHTML
            = 'A '+b+' metro(s) se encuentra '+a;
        score = score+1;
    }
    else{
        document.getElementById('m').innerHTML
            = ' Llego a su destino!!';
    }
}
setInterval('myGeeks()', 5000);
