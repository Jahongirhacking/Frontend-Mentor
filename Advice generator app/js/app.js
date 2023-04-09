const url="https://api.adviceslip.com/advice";
var id=0;
var string="";

async function dice(){
    document.querySelector(".button").innerHTML=`<i class="fa-solid fa-sync fa-spin"></i>`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        id=data.slip.id;
        string=data.slip.advice;
        document.querySelector(".container>h2").textContent=`Advice #${id}`;
        document.querySelector(".container>p>span").textContent=`${string}`;
        document.querySelector(".button").innerHTML=`<img src="./images/icon-dice.svg" alt="dice">`;
    })
}

document.querySelector(".button").addEventListener("click",dice);
dice();