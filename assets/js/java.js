




let bagina = document.querySelector('.mama');
let ovarlaybtn = document.querySelector('.ovarlay');
let topupbtn = document.querySelector('.topup');
let ami = document.getElementById('toy');





bagina.addEventListener('click', opentopup);
ami.addEventListener('click', closetopup);


function opentopup (){
    ovarlaybtn.classList.add('active');
    topupbtn.classList.add('active');
    console.log('ok');
}

function closetopup(){
    ovarlaybtn.classList.remove('active');
    topupbtn.classList.remove('active');
    // console.log('ok');
}

