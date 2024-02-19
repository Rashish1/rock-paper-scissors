let userScore=0;
let compScore=0;

let you=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");

//computer choices
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rand=Math.trunc(Math.random()*3);
    return options[rand];
}

//user choices
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        play(userChoice);
    });
});

//win changes
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        you.innerHTML=userScore;
        msg.style.backgroundColor="green";
        msg.innerText="You win!";
    }
    else{
        compScore++;
        comp.innerHTML=compScore;
        msg.style.backgroundColor="red";
        msg.innerText="You lose!";
    }
}

//main logic
const play=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
       msg.innerText="Draw!";
       msg.style.backgroundColor="#2F4550";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }
}

