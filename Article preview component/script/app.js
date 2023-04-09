function share(){
    let share=document.getElementById("share");
    if(share.className=="share"){
        share.className="share-active";
    }else{
        console.log("salom")
        share.className="share";
    }
}