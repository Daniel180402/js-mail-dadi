let email = document.getElementById('user-email');
const buttonemail = document.getElementById("btncontrol");
const buttongame = document.getElementById("btnrandom");
const buttonreset = document.getElementById("btnreset");
let found;

buttonemail.addEventListener("click", function(){
    const allemail = ["marco@gmail.com", "pino@gmail.com", "edoardo@gmail.com", "marta@gmail.com", "emanuele@gmail.com", "riccardo@gmail.com", "daniel@gmail.com", "mattia@gmail.com"];
    let mailresult = document.getElementById("mail-verification");
    for(let i = 0; i < allemail.length; i++){
        if(email.value == allemail[i]){
            console.log(allemail[i]);
            found = 1;
            console.log(found);
        }
        else{
            console.log("no");
        }
    }

    if(found == 1){
        mailresult.innerHTML = "La mail inserita è presente nel database.";
    }
    else{
        mailresult.innerHTML = "La mail inserita non è stata trovata.";
        mailresult.classList.add("text-red");
    }
})

buttongame.addEventListener("click", function(){

    const player = Math.floor(Math.random() * 6) + 1;
    console.log(player.value); 
    document.getElementById("player-number").innerHTML = player;

    const computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer.value); 
    document.getElementById("computer-number").innerHTML = computer;

    if(player > computer){
        const gamewinner = document.getElementById("winner").innerHTML = "Hai vinto!!!";
    }
    else if(player == computer){
        const gamewinner = document.getElementById("winner").innerHTML = "Parità";
    }
    else{
        const gamewinner = document.getElementById("winner").innerHTML = "Ha vinto il computer";
    }
})

buttonreset.addEventListener("click", function(){
    window.location.reload();
})