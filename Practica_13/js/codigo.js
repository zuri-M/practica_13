function velocidad_escape (){
    var G=6.67*Math.pow(10,-11);
    var M=5.98*Math.pow(10,24);
    var r=6.37*Math.pow(10,6);
    var velocidad= Math.sqrt(2*G*M/r);
    var d=document.getElementById("resultadoA");
    d.innerHTML=velocidad+' km/s';
    }
    