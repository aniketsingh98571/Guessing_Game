let inputd=document.getElementById("input");
let generate=document.getElementById("checkd");
let loader=document.getElementById("loading");
function check(){
    if(inputd.value===""){
        generate.innerHTML="Enter the value";
    }
    else{
    let random=Math.floor(Math.random() * 100) + 1;
    if(inputd.value==random)
        generate.innerHTML="👍";
    else
    generate.innerHTML="👎 Try Again";}
}
function callFunction(){
    loader.style.display="none";
}
