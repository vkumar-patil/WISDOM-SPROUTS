//find max
function findMax(arr){

    if (arr.length===0){
        return undefined;
    }
     let max = arr[0];
        for (let i=1; i<arr.length;i++){
                if(arr[i] > max){
                    max = arr[i];
                }
        }
        return(max);
    }
    
    
    function findMin(arr){
         if (arr.length===0){
            return undefined;
        }
        let  min = arr[0];
        for (let i=1; i<arr.length;i++){
                if(arr[i] < min){
                    min = arr[i];
                }
        }
        return(min);
    }
    function calculateMaxAndMin(){
        const inputArray = document.getElementById("inputArray").value.split(',').map(Number);
        const maxResult = findMax(inputArray);
        const minResult = findMin(inputArray);
        
        document.getElementById("maxResult").textContent = `Maximum value: ${maxResult}`;
        document.getElementById("minResult").textContent =` Minimum value: ${minResult}`;
    }
    