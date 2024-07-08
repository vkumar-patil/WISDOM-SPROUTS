string="rajesh";
string1="vijay"
console.log(string,length);
let display = document.getElementById('displaybox');
let currentExpression='';
function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
    
}
function clearDisplay() {
    currentExpression = '';
    display.value ='';
    }
    function calculate() {
        try{
            currentExpression = eval(currentExpression).tostring();}
            catch(Error){
                display.value = 'Error';
            }
            
    }
    