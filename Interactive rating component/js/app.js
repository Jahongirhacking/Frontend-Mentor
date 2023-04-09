var saved=0;

function submit(){
    if(saved==0) alert("Please, make your choice!");
    else{
        document.getElementById("value").textContent=saved;
        document.querySelector(".container").classList.toggle("hidden");
        document.querySelector(".congrats").classList.toggle("hidden");
    }
}

function clicked(e){
    saved=e.currentTarget.value;
    for(let i of sect){
        i.style="background-color: var(--Dark-Blue);";
    }
    e.currentTarget.style="background-color: var(--Medium-Grey);";
}

const sect=document.querySelectorAll('section>.sect');
for(let i of sect){
    i.value=i.textContent;
    i.addEventListener('click',clicked);
}
document.querySelector("button").addEventListener("click",submit);
document.querySelector("#retry").addEventListener("click",submit);