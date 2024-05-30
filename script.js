let btnb=document.querySelector('#btnb');
let text=document.querySelector('.card-text');
let work=()=>{
    text.innerText =
      "F1 cars are made of carbon fiber and can weigh up to 1631 lb (740 kg)";
}
let body=document.querySelector('body');
let chagebg=()=>{
    body.style.backgroundColor="black";
}

btnb.addEventListener("click",chagebg);
btnb.addEventListener('click',work);


