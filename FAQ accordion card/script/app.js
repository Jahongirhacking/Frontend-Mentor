var clsnm=document.getElementsByClassName("accordion__item");

function accordion(order){
    console.log(clsnm[order])
    if(clsnm[order].className=="accordion__item false") 
        clsnm[order].className="accordion__item true";
    else clsnm[order].className="accordion__item false";
}