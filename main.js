function getPara1(){
    var inputs=[];
    
    for(var i=1 ; i<=6 ; i++){
        inputs.push(document.getElementById("input" + i).value);
        inputs.join(". ");
        document.getElementById("Showpara1").innerHTML= inputs.join(" ");
    }
}

function getPara2(){
var inputs5=[];    
    for(var k=1 ; k<=6 ; k++){
        inputs5.push(document.getElementById("inpu" + k ).value);
        inputs5.join(". ");
        document.getElementById("Showpara2").innerHTML= inputs5.join(" ");
    }
}