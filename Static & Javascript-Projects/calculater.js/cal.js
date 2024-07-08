function pick(val){
    document.getElementById("displaybox").value +=val;

}
function solve(){
   let x= document.getElementById("displaybox").value;
   let y=eval(x);
    document.getElementById("displaybox").value=y;
}
function clr(){
    document.getElementById("displaybox").value ="";
    
 }
 function dellast() {
    let displayValue = document.getElementById('displaybox').value;
    document.getElementById('displaybox').value = displayValue.slice(0, -1);
}

   