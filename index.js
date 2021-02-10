let inputd=document.getElementById("input");
let generate=document.getElementById("checkd");

function check(){
    let random=Math.floor(Math.random() * 100) + 1;
    if(inputd.value==random)
        generate.innerHTML="👍";
    else
    generate.innerHTML="👎 Try Again";
}