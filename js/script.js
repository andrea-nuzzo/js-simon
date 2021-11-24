
// Funzione che ritorna numeri casuali
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  
// Creazione array dei numeri del gioco
const arrayNumber = [];

while(arrayNumber.length < 5){
    let numb = randomNumber(1,100);
    if(!arrayNumber.includes(numb)){
        arrayNumber.push(numb);
    }
}

setTimeout(controlNumber, 10000);
    
const boxNumber = document.querySelector(".boxNumber");
    boxNumber.innerText = arrayNumber;  

// Funzione per il controllo dei numeri memorizzati
function controlNumber(){
    boxNumber.innerText = ''; 

    const numbRemembered = [];

    for(let i = 0; i < 5; i++){
        let numb = parseInt(prompt('Inserisci un numero'));
        if(arrayNumber.includes(numb)){
            numbRemembered.push(numb);
        }
        i;
    }
    console.log(numbRemembered.length);

    const boxTitle = document.querySelector(".boxTitle");

    if (numbRemembered.length == 0 ){
        boxTitle.innerText = "Non hai ricordato nessun numero!";
        boxNumber.innerText = "Game Over";
    }  else if (numbRemembered.length < 5 ){
        boxNumber.innerText = numbRemembered;
        boxTitle.innerText = "I numeri che hai ricordato sono";
    } else{
        boxNumber.innerText = "Hai vinto!";
    }
    
}

