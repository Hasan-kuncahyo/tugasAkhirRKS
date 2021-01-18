const box = document.querySelectorAll('.box');
const btnClose = document.querySelectorAll('.close-btn');
const info = document.querySelectorAll('.box > .info');
const kembali = document.querySelector('.kembali');
function pesan(telp){
    window.open('https://wa.me/'+telp+'/?text=Saya%20ingin%20memesan%20produk%20anda..','_blank');
}

box.forEach((e,i)=>{
    e.addEventListener('click',(ev)=>{
        info[i].style.display = 'flex';
        ev.stopPropagation();
        
    })
});

btnClose.forEach((e,i)=>{
    e.addEventListener('click',(event)=>{
        info[i].style.display = 'none';   
        // event.preventDefault();
        event.stopPropagation();
    })
});

kembali.addEventListener('click',e=>{
    document.location.href='../index.html';
    e.preventDefault();
});