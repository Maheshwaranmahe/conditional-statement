function eligiblity() {
    var age = parseInt(document.getElementById("age").value);
    if(age>=18) {
        document.getElementById("age-eligiblity").innerHTML="Eligible To Vote";
    }
    else{
        document.getElementById("age-eligiblity").innerHTML="Not Eligible";
    }
}
function stage() {
    var age = parseInt(document.getElementById("age").value);
    if(age<=12) {
        document.getElementById("age-stage").innerHTML="Child";
    }else if(age>12 && age<=19){
        document.getElementById("age-stage").innerHTML="Teenage";
    }else if(age>19 && age<40) {
        document.getElementById("age-stage").innerHTML="Adult";        
    }else if(age>=40 && age<60) {
        document.getElementById("age-stage").innerHTML="Middle Age Adult";        
    }else{
        document.getElementById("age-stage").innerHTML="Sinior Adult";           
    }
}