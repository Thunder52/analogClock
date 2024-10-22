let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function display() {
    let date =new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotate=30*hh+mm/2;
    let mRotate=6*mm;
    let sRotate=6*ss;

    hr.style.transform=`rotate(${hRotate}deg)`;
    min.style.transform=`rotate(${mRotate}deg)`;
    sec.style.transform=`rotate(${sRotate}deg)`;
}
setInterval(display,1000);