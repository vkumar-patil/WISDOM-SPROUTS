function countward(){
    inputstring = document.getElementById('input').value;
    Arrayward = inputstring.split(' ');
    // console.log(Arrayward);
    document.getElementById('result').innerHTML=Arrayward.length; 
}
function countspaces(){
    inputstring = document.getElementById('input').value;
  spacecount = inputstring.split(' ').length-1;
    // console.log(spacecount);
     document.getElementById('result').innerHTML = spacecount;

}
function countnewline(){
    inputstring = document.getElementById('input').value;
    document.getElementById('result').innerHTML = inputstring.split('\n').length;
    

}
function counttitelcase(){
     inputString = document.getElementById('input').value;
     words = inputString.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
     result = words.join(' ');
    document.getElementById('result').innerHTML = result;
}    
function Capitalise(){
    inputString = document.getElementById('input').value;
    document.getElementById('result').innerHTML= inputString.toUpperCase();
}
function smallletters(){
    inputString = document.getElementById('input').value;
    document.getElementById('result').innerHTML= inputString.toLowerCase();
}
function countlettrs() {
     inputString = document.getElementById('input').value;
    letterCount = inputString.replace(/[^a-zA-Z]/g, '').length;
    document.getElementById('result').innerHTML = letterCount;
}
